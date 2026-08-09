import { createHmac, timingSafeEqual } from "crypto";
import { cookies } from "next/headers";

const COOKIE_NAME = "koray_admin";
const SESSION_DURATION_MS = 60 * 60 * 12 * 1000; // 12 saat

function timingSafeStringsEqual(a: string, b: string): boolean {
  const bufA = Buffer.from(a);
  const bufB = Buffer.from(b);
  return bufA.length === bufB.length && timingSafeEqual(bufA, bufB);
}

function signSession(expiresAt: number, password: string): string {
  return createHmac("sha256", password)
    .update(`koray-admin-session:${expiresAt}`)
    .digest("hex");
}

export function verifyPassword(candidate: string | undefined | null): boolean {
  const password = process.env.ADMIN_PASSWORD;
  if (!password || !candidate) return false;

  const expected = createHmac("sha256", password).update("koray-admin-login").digest("hex");
  const actual = createHmac("sha256", candidate).update("koray-admin-login").digest("hex");
  return timingSafeStringsEqual(actual, expected);
}

export async function createAdminSession() {
  const password = process.env.ADMIN_PASSWORD;
  if (!password) throw new Error("ADMIN_PASSWORD tanımlı değil.");

  const expiresAt = Date.now() + SESSION_DURATION_MS;
  const value = `${expiresAt}.${signSession(expiresAt, password)}`;

  const store = await cookies();
  store.set(COOKIE_NAME, value, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: SESSION_DURATION_MS / 1000,
  });
}

export async function destroyAdminSession() {
  const store = await cookies();
  store.delete(COOKIE_NAME);
}

// Oturum çerezi artık bir son kullanma zamanı taşıyor ve bu zaman damgası
// imzanın bir parçası; süresi geçmiş bir çerez -parola değişmese bile- sunucu
// tarafında geçersiz sayılıyor. Ayrıca gerçek bir "çıkış yap" ile çerez
// tamamen siliniyor.
export async function isAdminAuthorized(): Promise<boolean> {
  const password = process.env.ADMIN_PASSWORD;
  const cookieValue = (await cookies()).get(COOKIE_NAME)?.value;
  if (!password || !cookieValue) return false;

  const separatorIndex = cookieValue.indexOf(".");
  if (separatorIndex === -1) return false;

  const expiresAtRaw = cookieValue.slice(0, separatorIndex);
  const signature = cookieValue.slice(separatorIndex + 1);
  const expiresAt = Number(expiresAtRaw);
  if (!Number.isFinite(expiresAt) || Date.now() > expiresAt) return false;

  return timingSafeStringsEqual(signature, signSession(expiresAt, password));
}
