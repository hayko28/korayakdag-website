# TÜBİTAK 1832 - Sanayide Yeşil Dönüşüm Programı (evaluator kaynağı)

## DÜZELTME (2026-09-17) — birincil kaynakla teyit edildi

Koray'ın canlı testinde, meşru bir pilot ölçekli yeşil dönüşüm projesinin 1501/1507'den
kopyalanan "üretim/tesis yatırımı ağırlıklı mı?" sorusuyla yanlışlıkla reddedildiği görüldü.
1832 Çağrı Duyurusu (2025-3) PDF'i (tubitak.gov.tr, birincil kaynak) doğrudan okunarak teyit edildi:

- **MADDE 6**: Büyük ölçekli demonstrasyon ve **pilot üretim** tipi faaliyetler açıkça destekleniyor.
- **MADDE 20.2** ("Ret Önerisi ile İlgili GYK'ya Sunulabilir Haller"): "Proje üretim altyapısı
  oluşturmaya yönelik **yatırım projesidir**" ifadesi ret nedeni — ama bu, projenin ESAS
  İTİBARİYLE endüstriyel ölçekte bir kapasite yatırımı olması anlamına geliyor, pilot ölçekli
  ekipman alımı değil. Aynı maddede ESMF (Dünya Bankası Çevresel-Sosyal Durum Değerlendirmesi)
  uygunsuzluğu ve proje ekibi yetersizliği de ret gerekçeleri arasında.
- THS (TRL) aralığı yanlış yazılmış: "3-9" değil, **en az 5 (tercihen 6) → 9 (ticarileştirme)**.
- Uygulama esası 1832'ye özgü değil, **1801 - Sanayi Ar-Ge Projeleri İçin Geri Ödemeli ve Hibe
  Destek Programı Uygulama Esasları** kapsamında yürütülüyor.

Kod düzeltildi: `argeRetSinyalleriVarMi` (üretim yatırımı kontrolü dahil) artık yalnızca
1501/1507'de kullanılıyor; 1832 kendi `projeEndustriyelOlcekYatirimMi` alanıyla MADDE 20.2'nin
gerçek (daha dar) kriterini soruyor. Ekip/kaynak sinyalleri (`argeEkipRetSinyaliVarMi`) üçünde
ortak kaldı, MADDE 20.2'deki "proje ekibi yetersizliği" gerekçesiyle uyumlu.

Kaynak: https://tubitak.gov.tr/sites/default/files/2025-12/1832_2025-3_Cagri_Duyurusu.pdf

---

## Durum — İKİNCİL KAYNAK (WebSearch, 2026-08-20)

Birincil kaynak (tubitak.gov.tr çağrı metni) doğrudan okunmadı; WebSearch sonuçlarıyla (tubitak.gov.tr duyuru
sayfaları, ofisus.com, kobitime.com, alkaze.com özet yazıları) çapraz doğrulanmış bilgi kullanıldı.

## Temel bulgular
- TÜBİTAK-TEYDEB tarafından, Dünya Bankası destekli **Türkiye Yeşil Sanayi Projesi** kapsamında yürütülür.
- Amaç: üretimde kaynak/enerji verimliliği, atık azaltımı, düşük karbonlu üretim gibi somut çevresel hedefleri
  olan Ar-Ge/inovasyon projelerini desteklemek.
- TRL 3-9 aralığında, ticarileştirme hedefli teknoloji doğrulama/geliştirme çalışmaları kapsanıyor.
- Dönemsel çağrılarla açılıyor (örn. "1832 Sanayide Yeşil Dönüşüm 2026-1 Çağrısı").
- Başvuru sahibi tipi (sermaye şirketi, Türkiye'de yerleşik) diğer TEYDEB programlarıyla (1501/1507) aynı
  genel çerçeveye dayandığı varsayıldı — bu varsayım net biçimde doğrulanmadı, formda "kismen_uygun" tavanı
  ve genel uyarılarla temkinli tutuldu.

## Evaluator mantığı (lib/destek-uygunluk/programlar.ts → tubitak1832Degerlendir)
- 1501 ile aynı şirket türü/yerleşiklik/ret sinyali (argeRetSinyalleriVarMi) kontrolleri.
- Ek, programa özgü zorunlu kriter: `projeYesilDonusumHedefliMi` — false ise doğrudan "uygun_degil".
- Öncelikli Ar-Ge alanı bilgilendirmesi (oncelikliAlanGerekcesi) paylaşılan yardımcı fonksiyonla eklendi.
- Max sonuç: "kismen_uygun" (asla kesin "uygun" değil, TÜBİTAK 1501/1507 ile aynı ihtiyat prensibi).

## Kalan açık nokta
Bütçe üst limiti, TRL aralığının form seviyesinde sorgulanması ve başvuru sahibi tipi kısıtları resmi
çağrı metniyle (tubitak.gov.tr) teyit edilmeden kesinleştirilmedi — uyarı metninde belirtildi.
