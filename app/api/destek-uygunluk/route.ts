import { initializeDatabase, sql } from "@/lib/database";
import { DestekBasvuruGirdisi, katalogEslestir, onerilenHizmetleriBul, tumProgramlariDegerlendir } from "@/lib/destek-uygunluk";

export async function POST(request: Request) {
  try {
    const girdi = (await request.json()) as DestekBasvuruGirdisi;

    if (!girdi.iletisimAdSoyad || !girdi.iletisimEposta) {
      return Response.json({ error: "Ad soyad ve e-posta zorunludur." }, { status: 400 });
    }

    const sonuclar = tumProgramlariDegerlendir(girdi);
    const katalogOnerileri = await katalogEslestir(girdi);
    const hizmetOnerileri = onerilenHizmetleriBul(girdi);

    // "sonuclar" kolonu /yonetim panelinde düz bir dizi ({programAdi, durum}[])
    // olarak okunuyor, şekli değişmemeli. Hizmet önerileri bu yüzden ayrı bir
    // kolon/migration gerektirmeden, şemasız "girdi" JSONB alanının içine ek
    // bir anahtar olarak ekleniyor — lead kaydı bozulmadan zenginleşiyor.
    const saklanacakGirdi = { ...girdi, _hizmetOnerileri: hizmetOnerileri.map((h) => h.id) };

    await initializeDatabase();
    await sql`
      INSERT INTO destek_uygunluk_basvurulari
      (sirket_unvani, iletisim_ad_soyad, iletisim_eposta, iletisim_telefon, girdi, sonuclar)
      VALUES
      (${girdi.sirketUnvani ?? null}, ${girdi.iletisimAdSoyad}, ${girdi.iletisimEposta}, ${girdi.iletisimTelefon ?? null}, ${JSON.stringify(saklanacakGirdi)}, ${JSON.stringify(sonuclar)})
    `;

    return Response.json({ sonuclar, katalogOnerileri, hizmetOnerileri });
  } catch (error) {
    console.error("Destek uygunluk analizi hatası:", error);
    return Response.json({ error: "Analiz tamamlanamadı." }, { status: 500 });
  }
}
