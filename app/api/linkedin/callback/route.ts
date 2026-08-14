import { initializeDatabase, sql } from "@/lib/database";

// LinkedIn OAuth 2.0'ın yönlendirdiği geri dönüş adresi. Kullanıcı
// LinkedIn'de "İzin ver"e tıkladıktan sonra buraya bir `code` ile
// yönlendirilir; bu kod erişim tokenine çevrilip veritabanına kaydedilir.
export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");
  const error = searchParams.get("error");

  if (error) {
    return new Response(`LinkedIn yetkilendirmesi reddedildi: ${error}`, {
      status: 400,
    });
  }

  if (!code) {
    return new Response("Eksik 'code' parametresi.", { status: 400 });
  }

  const clientId = process.env.LINKEDIN_CLIENT_ID;
  const clientSecret = process.env.LINKEDIN_CLIENT_SECRET;
  const redirectUri = `${origin}/api/linkedin/callback`;

  if (!clientId || !clientSecret) {
    return new Response(
      "Sunucuda LINKEDIN_CLIENT_ID / LINKEDIN_CLIENT_SECRET tanımlı değil.",
      { status: 500 }
    );
  }

  try {
    const tokenResponse = await fetch(
      "https://www.linkedin.com/oauth/v2/accessToken",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          grant_type: "authorization_code",
          code,
          redirect_uri: redirectUri,
          client_id: clientId,
          client_secret: clientSecret,
        }),
      }
    );

    const tokenData = await tokenResponse.json();

    if (!tokenResponse.ok) {
      return new Response(
        `Token alınamadı: ${JSON.stringify(tokenData)}`,
        { status: 500 }
      );
    }

    const accessToken = tokenData.access_token as string;
    const expiresInSeconds = tokenData.expires_in as number;
    const expiresAt = new Date(Date.now() + expiresInSeconds * 1000);

    // Kişisel profil URN'i (author alanı için gerekli) — OpenID Connect
    // userinfo uç noktasından alınıyor.
    let personUrn: string | null = null;
    const userInfoResponse = await fetch(
      "https://api.linkedin.com/v2/userinfo",
      { headers: { Authorization: `Bearer ${accessToken}` } }
    );
    if (userInfoResponse.ok) {
      const userInfo = await userInfoResponse.json();
      if (userInfo.sub) personUrn = `urn:li:person:${userInfo.sub}`;
    }

    await initializeDatabase();
    await sql`
      INSERT INTO linkedin_auth (id, access_token, person_urn, expires_at, updated_at)
      VALUES (1, ${accessToken}, ${personUrn}, ${expiresAt.toISOString()}, NOW())
      ON CONFLICT (id) DO UPDATE SET
        access_token = EXCLUDED.access_token,
        person_urn = EXCLUDED.person_urn,
        expires_at = EXCLUDED.expires_at,
        updated_at = NOW()
    `;

    return new Response(
      `<html><body style="font-family:sans-serif;padding:40px;text-align:center;">
        <h1>✅ LinkedIn bağlantısı başarılı</h1>
        <p>Bu sekmeyi kapatabilirsin. Bağlantı ${expiresAt.toLocaleDateString(
          "tr-TR"
        )} tarihine kadar geçerli.</p>
        ${
          personUrn
            ? ""
            : "<p style='color:#b91c1c'>Uyarı: profil kimliği alınamadı, paylaşım çalışmayabilir.</p>"
        }
      </body></html>`,
      { headers: { "Content-Type": "text/html; charset=utf-8" } }
    );
  } catch (err) {
    console.error("LinkedIn OAuth hatası:", err);
    return new Response("Beklenmedik bir hata oluştu.", { status: 500 });
  }
}
