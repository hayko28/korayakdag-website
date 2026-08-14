import { initializeDatabase, sql } from "@/lib/database";

// Bugünün YYYYMM formatında LinkedIn API sürümü (LinkedIn-Version header'ı
// için zorunlu). Dinamik hesaplanır, hep güncel kalır.
function linkedinVersion(): string {
  const now = new Date();
  return `${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, "0")}`;
}

export async function POST(request: Request) {
  try {
    const { icerik, gorselUrl } = await request.json();
    if (!icerik) {
      return Response.json({ error: "İçerik eksik." }, { status: 400 });
    }

    await initializeDatabase();
    const rows = await sql`SELECT access_token, person_urn, expires_at FROM linkedin_auth WHERE id = 1`;
    const auth = rows[0] as
      | { access_token: string; person_urn: string | null; expires_at: string }
      | undefined;

    if (!auth || !auth.access_token) {
      return Response.json(
        { error: "LinkedIn bağlantısı yok. Önce yetkilendirme yapılmalı." },
        { status: 400 }
      );
    }
    if (!auth.person_urn) {
      return Response.json(
        { error: "LinkedIn profil kimliği alınamamış, tekrar yetkilendirme gerekiyor." },
        { status: 400 }
      );
    }
    if (new Date(auth.expires_at).getTime() < Date.now()) {
      return Response.json(
        { error: "LinkedIn yetkilendirmesinin süresi dolmuş, tekrar bağlanman gerekiyor." },
        { status: 400 }
      );
    }

    const token = auth.access_token;
    const version = linkedinVersion();
    const liHeaders = {
      Authorization: `Bearer ${token}`,
      "X-Restli-Protocol-Version": "2.0.0",
      "Linkedin-Version": version,
      "Content-Type": "application/json",
    };

    let mediaContent: { media: { id: string } } | undefined;

    if (gorselUrl) {
      // 1) Görsel yüklemesini başlat
      const initRes = await fetch(
        "https://api.linkedin.com/rest/images?action=initializeUpload",
        {
          method: "POST",
          headers: liHeaders,
          body: JSON.stringify({
            initializeUploadRequest: { owner: auth.person_urn },
          }),
        }
      );
      const initData = await initRes.json();
      if (!initRes.ok) {
        return Response.json(
          { error: `Görsel yükleme başlatılamadı: ${JSON.stringify(initData)}` },
          { status: 500 }
        );
      }
      const uploadUrl = initData.value.uploadUrl as string;
      const imageUrn = initData.value.image as string;

      // 2) Görsel ikili verisini indir ve LinkedIn'e yükle
      const imgResponse = await fetch(gorselUrl);
      const imgBuffer = await imgResponse.arrayBuffer();
      const uploadRes = await fetch(uploadUrl, {
        method: "PUT",
        headers: { Authorization: `Bearer ${token}` },
        body: imgBuffer,
      });
      if (!uploadRes.ok) {
        return Response.json(
          { error: `Görsel yüklenemedi (status ${uploadRes.status}).` },
          { status: 500 }
        );
      }
      mediaContent = { media: { id: imageUrn } };
    }

    // 3) Gönderiyi oluştur
    const postBody: Record<string, unknown> = {
      author: auth.person_urn,
      commentary: icerik,
      visibility: "PUBLIC",
      distribution: {
        feedDistribution: "MAIN_FEED",
        targetEntities: [],
        thirdPartyDistributionChannels: [],
      },
      lifecycleState: "PUBLISHED",
      isReshareDisabledByAuthor: false,
    };
    if (mediaContent) postBody.content = mediaContent;

    const postRes = await fetch("https://api.linkedin.com/rest/posts", {
      method: "POST",
      headers: liHeaders,
      body: JSON.stringify(postBody),
    });

    if (!postRes.ok) {
      const errText = await postRes.text();
      return Response.json(
        { error: `Paylaşım başarısız (status ${postRes.status}): ${errText}` },
        { status: 500 }
      );
    }

    const postId = postRes.headers.get("x-restli-id");
    return Response.json({ ok: true, postId });
  } catch (err) {
    console.error("LinkedIn paylaşım hatası:", err);
    return Response.json({ error: "Beklenmedik bir hata oluştu." }, { status: 500 });
  }
}
