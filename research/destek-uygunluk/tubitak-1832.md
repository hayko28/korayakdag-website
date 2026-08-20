# TÜBİTAK 1832 - Sanayide Yeşil Dönüşüm Programı (evaluator kaynağı)

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
