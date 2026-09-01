import { initializeDatabase, sql } from "@/lib/database";

// Bugünün YYYYMM formatında LinkedIn API sürümü (LinkedIn-Version header'ı
// için zorunlu). Dinamik hesaplanır, hep güncel kalır.
function linkedinVersion(): string {
  const now = new Date();
  return `${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, "0")}`;
}

// LinkedIn'in "commentary" alanı bir zengin metin biçimi (Little Text
// Format) kullanıyor; \ ( ) [ ] { } < > * _ ~ karakterleri bu biçimde özel
// anlam taşıyor. Kaçış karakteriyle işaretlenmezse LinkedIn metni yanlış
// ayrıştırıp o noktadan sonrasını bozuyor/kesiyor (örn. "(agentic AI)"
// içindeki parantezler bir paylaşımın tamamen boş görünmesine yol açmıştı).
function escapeLinkedInText(text: string): string {
  return text.replace(/[\\()[\]{}<>*_~]/g, (ch) => `\\${ch}`);
}

export async function POST(request: Request) {
  try {
    const { icerik, gorselUrl, videoUrl, kaynakUrl } = await request.json();
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

    if (videoUrl) {
      // Video, görsele göre öncelikli. LinkedIn'in çok parçalı (4MB'lık
      // dilimler) yükleme akışı: initializeUpload -> her dilimi PUT et,
      // ETag'leri topla -> finalizeUpload.
      const videoBuffer = Buffer.from(await (await fetch(videoUrl)).arrayBuffer());

      const initRes = await fetch(
        "https://api.linkedin.com/rest/videos?action=initializeUpload",
        {
          method: "POST",
          headers: liHeaders,
          body: JSON.stringify({
            initializeUploadRequest: {
              owner: auth.person_urn,
              fileSizeBytes: videoBuffer.byteLength,
              uploadCaptions: false,
              uploadThumbnail: false,
            },
          }),
        }
      );
      const initData = await initRes.json();
      if (!initRes.ok) {
        return Response.json(
          { error: `Video yükleme başlatılamadı: ${JSON.stringify(initData)}` },
          { status: 500 }
        );
      }
      const videoUrn = initData.value.video as string;
      const uploadToken = initData.value.uploadToken as string;
      const instructions = initData.value.uploadInstructions as {
        uploadUrl: string;
        firstByte: number;
        lastByte: number;
      }[];

      const uploadedPartIds: string[] = [];
      for (const part of instructions) {
        const chunk = videoBuffer.subarray(part.firstByte, part.lastByte + 1);
        const partRes = await fetch(part.uploadUrl, {
          method: "PUT",
          headers: { "Content-Type": "application/octet-stream" },
          body: chunk,
        });
        if (!partRes.ok) {
          return Response.json(
            { error: `Video parçası yüklenemedi (status ${partRes.status}).` },
            { status: 500 }
          );
        }
        const etag = partRes.headers.get("etag") || partRes.headers.get("ETag");
        if (!etag) {
          return Response.json(
            { error: "Video parçası için ETag alınamadı." },
            { status: 500 }
          );
        }
        uploadedPartIds.push(etag.replace(/^"|"$/g, ""));
      }

      const finalizeRes = await fetch(
        "https://api.linkedin.com/rest/videos?action=finalizeUpload",
        {
          method: "POST",
          headers: liHeaders,
          body: JSON.stringify({
            finalizeUploadRequest: {
              video: videoUrn,
              uploadToken: uploadToken || "",
              uploadedPartIds,
            },
          }),
        }
      );
      if (!finalizeRes.ok) {
        const errText = await finalizeRes.text();
        return Response.json(
          { error: `Video tamamlanamadı: ${errText}` },
          { status: 500 }
        );
      }

      mediaContent = { media: { id: videoUrn } };
    } else if (gorselUrl) {
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
      commentary: escapeLinkedInText(icerik),
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

    // Link artık ilk yoruma da eklenmiyor: 2026'da LinkedIn dış link içeren
    // yorumların görünürlüğünü de ağır şekilde düşürüyor (linki gövdeye
    // koymakla aynı ceza). Gönderi tamamen linksiz paylaşılıyor; site/WhatsApp
    // erişimi profildeki "Öne Çıkanlar" bağlantısı üzerinden sağlanıyor.
    void kaynakUrl;

    return Response.json({ ok: true, postId });
  } catch (err) {
    console.error("LinkedIn paylaşım hatası:", err);
    return Response.json({ error: "Beklenmedik bir hata oluştu." }, { status: 500 });
  }
}
