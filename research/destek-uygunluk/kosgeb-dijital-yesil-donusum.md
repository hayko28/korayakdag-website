# KOSGEB Dijital Dönüşüm Destek Programı (evaluator kaynağı)

## DÜZELTME (2026-09-17) — İKİ AYRI PROGRAM, YANLIŞLIKLA BİRLEŞTİRİLMİŞTİ

Koray'ın canlı testte fark etmesi üzerine araştırıldı: bu program ("KOBİ Dijital Dönüşüm Destek
Programı", resmi ad budur) ile "Yeşil Sanayi Destek Programı" (bkz. ayrı dosya
research/destek-uygunluk/yesil-sanayi-destek-programi.md) **gerçekten iki bağımsız program** — ortak
DDX/Mali Karne şartı yok, farklı Uygulama Esasları/Genelge'ye tabiler. Motor artık bunları
`kosgebDijitalDonusumDegerlendir` ve `kosgebYesilSanayiDegerlendir` olarak ayrı fonksiyonlarda
değerlendiriyor. Ayrıca resmi kaynak, Dijital Dönüşüm için NACE Kısım C (İmalat) sektör şartı ve
"son mali yıl Öz Kaynaklar Toplamı pozitif + son 3 mali yıldan en az birinde Faaliyet Karı pozitif"
şartını da doğruladı — ikincisi form alanı olarak eklenmedi (kapsam genişletme riski), sadece uyarı
notu olarak eklendi.

Kaynak: https://www.kosgeb.gov.tr/site/tr/genel/destekdetay/9144/kobi-dijital-donusum-destek-programi

---


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

## Evaluator mantığı (lib/destek-uygunluk/programlar.ts → kosgebDijitalDonusumDegerlendir; Yeşil Sanayi kısmı 2026-09-17'de kosgebYesilSanayiDegerlendir olarak ayrıldı, bkz. yesil-sanayi-destek-programi.md)
- Şirket türü (sermaye şirketi) + KOBİ ölçek kontrolü (diğer KOSGEB programlarıyla aynı desen).
- `ddxRaporuVarMi === false` veya `maliKarneVarMi === false` → doğrudan "uygun_degil" (bunlar programın
  bilinen zorunlu ön koşulları).
- Diğer bilgiler tamamsa "uygun" dönebilir (Ar-Ge/İnovasyon programı gibi, çünkü ön koşullar net).

## Kalan açık nokta
Kesin hibe/kredi oranı dağılımı ve sektör/NACE kısıtı (varsa) resmi Yönerge PDF'inden teyit edilmedi;
uyarı metninde "kesin oran ve limitler KOSGEB'in güncel Yönergesiyle teyit edilmeli" notu eklendi.
