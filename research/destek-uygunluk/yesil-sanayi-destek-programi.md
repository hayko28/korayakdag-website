# KOSGEB Yeşil Sanayi Destek Programı (evaluator kaynağı)

## DÜZELTME (2026-09-17) — BİRİNCİL KAYNAK, YÜKSEK GÜVEN (Yönerge tam metni okundu)

Koray'ın "yamalı bohça gibi olmasın, doğru düzgün kur" talebi üzerine bu programın resmi
**Yönergesi (Rev.No:04)** tam metin olarak (pdftotext ile, 23 sayfa) okundu:
https://webdosya.kosgeb.gov.tr/Content/Upload/Dosya/YE%C5%9E%C4%B0L%20SANAY%C4%B0%20DP/2026/Yes%CC%A7il_Sanayi_Destek_Program%C4%B1_Yo%CC%88nergesi_.pdf

Önceki (ikincil kaynak, orta güven) sürümün yanlış/eksik olduğu noktalar:

- **Mikro ölçek istisnası hiç kontrol edilmiyordu** — MADDE 8/3 mikro işletmeleri açıkça
  kapsam dışı bırakıyor (yalnızca küçük ve orta ölçek). Düzeltildi.
- **NACE/imalat (Kısım C) hard rule'u Yönerge'de YOK** — sektör kapsamı ilan edilen çağrıya
  göre belirleniyor (MADDE 8/2, MADDE 5), genel Yönerge'de sabitlenmemiş. Hard rule kaldırıldı,
  bilgilendirici uyarıya çevrildi.
- **Proje teması 4'lü değil, resmi 2 Alt Bileşen yapısında**: Alt Bileşen 1.1 (enerji
  sistemlerinin karbonsuzlaştırılması, örn. GES — destek oranı %60) ve Alt Bileşen 1.2 (iklim
  eylemi, kaynak verimliliği, sürdürülebilirlik — destek oranı %70). Eski "yenilenebilir enerji
  / kaynak verimliliği / atık yönetimi / döngüsel ekonomi" ayrımı resmi terim değildi.
- **Destek oranı/süre rakamları yanlıştı**: "%60 (deprem bölgesi %80-90), 8-12 ay" değil —
  doğrusu yukarıdaki oranlar + deprem bölgesinde (11 il) hasar derecesine göre azami %90, proje
  süresi 8-24 ay (4 ay katları).
- **EN ÖNEMLİSİ: destek HİBE DEĞİL, GERİ ÖDEMELİDİR** (MADDE 7/4, 23, 24) — 12 ay ödemesiz
  dönem sonrası 6 eşit taksit; zamanında ödenirse faizsiz, gecikirse yasal faiz + teminat nakde
  çevrilir. Eski sürüm bunu hiç belirtmiyordu, kullanıcıyı hibe sanmaya yönlendirebilirdi.
- **Kodda hâlâ sorulmayan ek ön koşullar** (yeni form alanı eklenmedi, kapsam nedeniyle
  bilgilendirici uyarı olarak eklendi): sermayenin en az %75'inin özel sektöre ait olması ve
  kamu çoğunluk kontrolü olmaması, asgari kredi skoru, Çevresel-Sosyal Yönetim Sistemi
  riskinin düşük/orta olması, kuruluşun en az 2 yıldır faaliyette olması, Alt Bileşen 1.1
  için yıllık enerji tüketiminin en az 20 TEP olması, Dünya Bankası "uygun bulunmayan
  faaliyet" listesinde olmama, aynı anda yalnızca 1 çağrıya/toplam en fazla 2 projeye
  başvurabilme sınırı.

Sonuç tavanının "kismen_uygun" olması (asla kesin "uygun" değil) doğru ve korunuyor — ama
artık gerekçesi "araştırma eksikliği" değil, "nihai onay her durumda Kurul'un puanlamasına
(MADDE 12-14) bağlı, yapısal olarak ayrı bir karar aşaması" (diğer kurul onaylı programlarla
tutarlı).

---

## Durum — İKİNCİL KAYNAK, ORTA GÜVEN SEVİYESİ (Explore ajanı özeti, 2026-09-17, ESKİ)

Bu, önceden "KOSGEB Dijital ve Yeşil Dönüşüm Destek Programı" adıyla **yanlışlıkla** KOBİ Dijital
Dönüşüm Destek Programı ile TEK bir fonksiyonda birleştirilmiş bir programın düzeltilmiş hâlidir.
Koray'ın canlı testte "bunlar ayrı programlar değil mi?" diye sorması üzerine araştırıldı ve **gerçekten
iki bağımsız, farklı ön koşullu program** olduğu doğrulandı.

**Resmi ad:** "Yeşil Sanayi Destek Programı" — "KOSGEB Yeşil Dönüşüm Destek Programı" DEĞİL. Program,
KOSGEB'in Dünya Bankası/TÜBİTAK ortaklığıyla yürüttüğü "Türkiye Yeşil Sanayi Projesi"nin bir bileşeni.

**Kaynak:**
- https://www.kosgeb.gov.tr/site/tr/genel/destekdetay/9022/yesil-sanayi-destek-programi
- Uygulama Esasları PDF: webdosya.kosgeb.gov.tr klasöründe "YEŞİL_SANAYİ_DESTEK_PROGRAMI_UYGULAMA_ESASLARI"
  (bu tur PDF'in tam metni satır satır okunmadı, ajan özeti kullanıldı — diğer 9 programın araştırma
  dosyalarına göre daha DÜŞÜK güven seviyesi)

## Bilinen kriterler (özet düzeyinde, PDF'in tam metniyle teyit edilmedi)

- İmalatçı KOBİ olma şartı var (Dijital Dönüşüm'le ortak nokta).
- Proje süresi: 8-12 ay.
- Proje teması: yenilenebilir enerji, kaynak verimliliği, atık yönetimi veya döngüsel ekonomi.
- Destek oranı: %60 (deprem bölgesi illerinde %80-90).
- **DDX raporu / Mali Karne şartı YOK** — bu, Dijital Dönüşüm'den ayrı bir program olduğunun
  kanıtlarından biri (iki programın ortak zorunlu belgesi yok).

## Evaluator mantığında bilinçli tutulan muhafazakârlık

PDF'in tam metni okunmadığı için:
- Şirket türü (sermaye şirketi şartı olup olmadığı) kodda ZORUNLU kriter olarak eklenmedi — teyit
  edilmeden hard rule koymak riskli.
- Fonksiyon hiçbir zaman "uygun" dönmüyor, en fazla "kismen_uygun" — çünkü bilinen kriter seti eksik
  olabilir, kesin sonuç iddia etmek yanıltıcı olur.
- Öz kaynak/mali tablo gibi ek şartlar varsa (Dijital Dönüşüm'dekine benzer) form bunları sormuyor,
  yalnızca uyarı olarak "başvuru öncesi Uygulama Esasları ile teyit edin" notu var.

## Sonraki tur için

Bu programın PDF'i satır satır okunup diğer 9 program gibi MADDE numaralarıyla kaynaklı, tam bir
araştırma dosyasına dönüştürülmeli. Bu tur zaman baskısı nedeniyle özet düzeyinde bırakıldı.
