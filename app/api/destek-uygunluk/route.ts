import { initializeDatabase, sql } from "@/lib/database";
import { DestekBasvuruGirdisi, katalogEslestir, tumProgramlariDegerlendir } from "@/lib/destek-uygunluk";

export async function POST(request: Request) {
  try {
    const girdi = (await request.json()) as DestekBasvuruGirdisi;

    if (!girdi.iletisimAdSoyad || !girdi.iletisimEposta) {
      return Response.json({ error: "Ad soyad ve e-posta zorunludur." }, { status: 400 });
    }

    const sonuclar = tumProgramlariDegerlendir(girdi);
    const katalogOnerileri = await katalogEslestir(girdi);

    await initializeDatabase();
    await sql`
      INSERT INTO destek_uygunluk_basvurulari
      (sirket_unvani, iletisim_ad_soyad, iletisim_eposta, iletisim_telefon, girdi, sonuclar)
      VALUES
      (${girdi.sirketUnvani ?? null}, ${girdi.iletisimAdSoyad}, ${girdi.iletisimEposta}, ${girdi.iletisimTelefon ?? null}, ${JSON.stringify(girdi)}, ${JSON.stringify(sonuclar)})
    `;

    return Response.json({ sonuclar, katalogOnerileri });
  } catch (error) {
    console.error("Destek uygunluk analizi hatası:", error);
    return Response.json({ error: "Analiz tamamlanamadı." }, { status: 500 });
  }
}
