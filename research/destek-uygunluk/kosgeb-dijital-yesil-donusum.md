# KOSGEB Dijital ve Yeşil Dönüşüm Destek Programı (evaluator kaynağı)

## Durum — İKİNCİL KAYNAK (WebSearch, 2026-08-20)

Birincil kaynak (kosgeb.gov.tr üzerindeki "KOBİ Dijital Dönüşüm Destek Programı Yönergesi" PDF'i) linki
bulundu ama içeriği bu turda okunmadı; WebSearch özetleri (kosgeb.gov.tr sayfa özeti, sunandsun.com.tr,
ustad.co, kobitime.com) kullanıldı.

## Temel bulgular
- Program iki alt başlıktan oluşuyor: **Dijital Dönüşüm** (süreç/teknoloji entegrasyonu) ve **Yeşil Dönüşüm**
  (döngüsel ekonomi, kaynak verimliliği, düşük karbonlu üretim).
- İşletme başına üst limit **20.000.000 TL** (büyük kısmı geri ödemeli/kredi faiz desteği yapısında).
- Ön koşul: **Mali Karne** ve **DDX Raporu** (Dijital Değişim/Dönüşüm raporu) — bu ikisi olmadan başvuru
  yapılamıyor.
- 24 aylık uygulama süresi, 36 aya varan vade.

## Evaluator mantığı (lib/destek-uygunluk/programlar.ts → kosgebDijitalYesilDonusumDegerlendir)
- Şirket türü (sermaye şirketi) + KOBİ ölçek kontrolü (diğer KOSGEB programlarıyla aynı desen).
- `ddxRaporuVarMi === false` veya `maliKarneVarMi === false` → doğrudan "uygun_degil" (bunlar programın
  bilinen zorunlu ön koşulları).
- Diğer bilgiler tamamsa "uygun" dönebilir (Ar-Ge/İnovasyon programı gibi, çünkü ön koşullar net).

## Kalan açık nokta
Kesin hibe/kredi oranı dağılımı ve sektör/NACE kısıtı (varsa) resmi Yönerge PDF'inden teyit edilmedi;
uyarı metninde "kesin oran ve limitler KOSGEB'in güncel Yönergesiyle teyit edilmeli" notu eklendi.
