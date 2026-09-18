# KOSGEB Ar-Ge, Ür-Ge ve İnovasyon Destek Programı (evaluator kaynağı)

## KALDIRILDI (2026-09-18) — PROGRAM RESMEN KAPANMIŞ, evaluator siteden çıkarıldı

KOSGEB'in resmi "Yürürlükten Kaldırılan Destekler" sayfası (kosgeb.gov.tr/site/tr/genel/destekler/6530/yururlukten-kaldirilan-destekler,
iki bağımsız WebFetch sorgusuyla doğrulandı) bu programı birebir isimle listeliyor:
"Bu program 15.04.2024 tarihinde başvuruya kapatılmıştır." Güncel KOSGEB 9 programlık aktif
destekler listesinde de (kosgeb.gov.tr/site/tr/genel/destekler) yer almıyor, yerine gelen bir
program da belirtilmemiş. Tıpkı KOBİGEL/TeknoYatırım/İş Birliği-Güçbirliği kalıbında olduğu gibi
— `kosgebArgeUrgeInovasyonDegerlendir` fonksiyonu, ilgili type alanları, form sorusu ve hizmet
kartı bağlantıları koddan kaldırıldı. Bu dosya yalnızca tarihsel kayıt olarak tutuluyor.

## DÜZELTME (2026-09-17) — DÜŞÜK-ORTA GÜVEN, kısmen düzeltildi

Resmi Uygulama Esasları PDF'leri (kosgeb.gov.tr) görüntü/sıkıştırılmış formatta geldiği için bu
oturumda metni çıkarılamadı; yalnızca resmi HTML özet sayfası ve ikincil kaynaklar kullanılabildi.
Yine de şu somut sorunlar tespit edilip düzeltildi:

- `argeUrgeGirisimciDahaOnceKullanildiMi` alanı types.ts'te ve formda TANIMLIYDI ama evaluator
  hiç okumuyordu (ölü alan) — bağlandı, artık "girişimci ömür boyu 1 kez" kuralını kontrol ediyor.
- Sonuç koşulsuz "uygun" dönüyordu; kendi kaynağı da nihai kararın Değerlendirme ve Karar
  Kurulu'na ait olduğunu söylüyor — diğer kurul onaylı programlarla tutarlı olacak şekilde tavan
  "kismen_uygun" yapıldı.
- "Toplam destek üst limiti 900.000 TL" iddiası ARAŞTIRMADA ÇELİŞKİYLE karşılaştı (bazı kaynaklar
  750.000 TL / 1.100.000 TL / 6.000.000 TL, kalem bazlı alt limitler gösteriyor) — hangisinin
  doğru olduğu bu oturumda netleştirilemedi, bu yüzden kesin rakam kaldırılıp "kalem bazında
  değişir, güncel çağrı ile teyit edilmeli" uyarısına çevrildi.
- Ür-Ge'nin "patent/doktora/TÜR belgesi kaynaklı olma" şartı hiçbir kaynakta teyit edilemedi —
  uyarı metninde "teyit edilemedi, KOSGEB ile netleştirin" notu eklendi.

**Kalan açık nokta**: "sahis"/tanımsız şirket türünde KOBİ ölçek kontrolünün atlanması ve sektör
kısıtı olmadığı varsayımı hâlâ doğrulanamadı — bir sonraki turda PDF manuel indirilip (OCR/
pdftotext) okunmalı.

---

## Kaynak
Sitede zaten yayınlanmış, sourced blog yazısı: `app/blog/kosgeb-arge-urge-inovasyon-destek-programi-2026/page.tsx`.

## Evaluator mantığı (lib/destek-uygunluk/programlar.ts → kosgebArgeUrgeInovasyonDegerlendir)
- Dernek/vakıf/kooperatif/birlik/adi ortaklık statüsü kapsam dışı.
- Kurulu şirketse KOBİ ölçek şartı (kobiOlceguHesapla) — kobi_disi ise ret. Henüz şirketi olmayan "Yeni Girişimci" (sirketTuru boş/sahis) bu kontrolden muaf tutuldu.
- Asgari personel sayısı / teknopark / ciro şartı YOK (Ar-Ge Merkezi'nden temel farkı) — bu yüzden diğer KOSGEB programlarına göre daha az kısıtlayıcı, sonuç "uygun" dönebilir.
- Toplam destek üst limiti 900.000 TL (gider kalemine göre %75-%100, makine-teçhizatta kısmi geri ödemeli).

## Not
Ür-Ge kapsamı (yalnızca KOSGEB'in desteklediği sektörler + önceki Ar-Ge/patent/TÜR belgesi şartı) form seviyesinde ayrıca sorgulanmadı, uyarı metninde belirtildi — aşırı kısıtlayıcı olmaması için.
