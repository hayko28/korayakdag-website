import { readdir, readFile } from "fs/promises";
import path from "path";
import { initializeDatabase, sql } from "@/lib/database";
import { isAdminAuthorized } from "@/lib/admin-auth";

type TaslakDosyasi = {
  tarih: string;
  icerik: string;
  kaynakBaslik: string;
  kaynakUrl?: string;
  gorselUrl?: string;
  videoUrl?: string;
};

// Zamanlanmış bulut ajanları (LinkedIn Yazarı) sandbox içinden veritabanına
// doğrudan bağlanamıyor, bu yüzden taslağı research/linkedin-taslaklar/
// altına JSON dosyası olarak commit'leyip push'luyor. Bu fonksiyon panel her
// açıldığında o dosyaları tarayıp henüz eklenmemiş olanları (kaynak_dosya
// sütunuyla eşsizliği garanti edilerek) veritabanına aktarır — canlı sunucuda
// gerçek DATABASE_URL olduğu için bu adım güvenilir çalışır.
async function taslakDosyalariniIceriAl() {
  const dir = path.join(process.cwd(), "research", "linkedin-taslaklar");
  let dosyalar: string[];
  try {
    dosyalar = (await readdir(dir)).filter((f) => f.endsWith(".json"));
  } catch {
    return;
  }

  for (const dosya of dosyalar) {
    const [{ count }] = await sql`
      SELECT COUNT(*)::int AS count FROM linkedin_drafts WHERE kaynak_dosya = ${dosya}
    `;
    if (count > 0) continue;

    try {
      const raw = await readFile(path.join(dir, dosya), "utf-8");
      const t: TaslakDosyasi = JSON.parse(raw);
      if (!t.tarih || !t.icerik || !t.kaynakBaslik) continue;
      await sql`
        INSERT INTO linkedin_drafts (tarih, icerik, kaynak_baslik, kaynak_url, gorsel_url, video_url, kaynak_dosya)
        VALUES (${t.tarih}, ${t.icerik}, ${t.kaynakBaslik}, ${t.kaynakUrl ?? null}, ${t.gorselUrl ?? null}, ${t.videoUrl ?? null}, ${dosya})
        ON CONFLICT (kaynak_dosya) DO NOTHING
      `;
    } catch {
      // Bozuk/okunamayan dosya — bir sonraki panel yenilemesinde tekrar denenir, isteği bloklamasın.
    }
  }
}

export async function GET() {
  if (!(await isAdminAuthorized())) return Response.json({ error: "Yetkisiz" }, { status: 401 });
  await initializeDatabase();
  await taslakDosyalariniIceriAl();
  const drafts = await sql`SELECT * FROM linkedin_drafts WHERE NOT silindi ORDER BY created_at DESC`;
  return Response.json({ drafts });
}

export async function POST(request: Request) {
  if (!(await isAdminAuthorized())) return Response.json({ error: "Yetkisiz" }, { status: 401 });
  const { tarih, icerik, kaynakBaslik, kaynakUrl, gorselUrl, videoUrl } = await request.json();
  if (!tarih || !icerik || !kaynakBaslik) return Response.json({ error: "Eksik bilgi" }, { status: 400 });
  await initializeDatabase();
  await sql`
    INSERT INTO linkedin_drafts (tarih, icerik, kaynak_baslik, kaynak_url, gorsel_url, video_url)
    VALUES (${tarih}, ${icerik}, ${kaynakBaslik}, ${kaynakUrl ?? null}, ${gorselUrl ?? null}, ${videoUrl ?? null})
  `;
  return Response.json({ ok: true });
}

export async function PATCH(request: Request) {
  if (!(await isAdminAuthorized())) return Response.json({ error: "Yetkisiz" }, { status: 401 });
  const { id, icerik, kaynakBaslik, kaynakUrl, gorselUrl, videoUrl } = await request.json();
  if (!id || !icerik || !kaynakBaslik) return Response.json({ error: "Eksik bilgi" }, { status: 400 });
  await initializeDatabase();
  await sql`
    UPDATE linkedin_drafts
    SET icerik = ${icerik}, kaynak_baslik = ${kaynakBaslik}, kaynak_url = ${kaynakUrl ?? null}, gorsel_url = ${gorselUrl ?? null}, video_url = ${videoUrl ?? null}
    WHERE id = ${id}
  `;
  return Response.json({ ok: true });
}

export async function DELETE(request: Request) {
  if (!(await isAdminAuthorized())) return Response.json({ error: "Yetkisiz" }, { status: 401 });
  const { id } = await request.json();
  if (!id) return Response.json({ error: "Eksik bilgi" }, { status: 400 });
  await initializeDatabase();
  const [draft] = await sql`SELECT kaynak_dosya FROM linkedin_drafts WHERE id = ${id}`;
  if (draft?.kaynak_dosya) {
    // Kaynak dosya git'ten silinmediği için tam silme yapılırsa panel
    // yenilendiğinde taslak tekrar içeri aktarılır — bu yüzden gizlenir.
    await sql`UPDATE linkedin_drafts SET silindi = true WHERE id = ${id}`;
  } else {
    await sql`DELETE FROM linkedin_drafts WHERE id = ${id}`;
  }
  return Response.json({ ok: true });
}
