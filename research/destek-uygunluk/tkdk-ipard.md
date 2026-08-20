# TKDK IPARD III Kırsal Kalkınma Destekleri (evaluator kaynağı)

## Durum — İKİNCİL KAYNAK (WebSearch, 2026-08-20)

tkdk.gov.tr'deki resmi çağrı takvimi/başvuru kılavuzu doğrudan okunmadı; WebSearch özetleri
(musavirlerkulubu.com.tr, habermat.com, orjinom.com, vatandashakki.com) kullanıldı. Bu program en düşük
güven seviyesindeki evaluator — form her zaman "kismen_uygun" tavanında kalır ve güçlü bir uyarı içerir.

## Temel bulgular
- Başvurabilecekler: KOBİ'ler dahil kırsal alanda yatırım yapmayı planlayan gerçek kişiler ve tüzel kişilikler
  (yalnızca çiftçiler değil).
- Gerçek kişi başvurularında yaş sınırı: 18-65.
- Yatırımın TKDK'nın o çağrı dönemi için belirlediği desteklenen illerden birinde olması gerekiyor (il listesi
  dönemsel değişebildiği için forma sabit liste olarak eklenmedi, evet/hayır sorusu ile bırakıldı).
- Desteklenen alanlar (2026): hayvancılık, tarımsal üretim, gıda işleme, GES/yenilenebilir enerji, kırsal
  turizm.
- 2026 çağrı döneminde proje bütçesi aralığı yaklaşık 5.000 - 3.000.000 Euro.

## Evaluator mantığı (lib/destek-uygunluk/programlar.ts → tkdkDegerlendir)
- Yaş 18-65 dışındaysa "belirsiz" (tüzel kişilik başvurusunda bu şart aranmayabileceği için sert ret yapılmadı).
- İl desteklenen iller arasında değilse → "uygun_degil".
- Sektör "diğer" ise bilgilendirme (ret değil, çünkü liste dönemsel genişleyebilir).
- Bütçe aralığı dışındaysa gerekçeye not düşülür (bloklama yapılmaz — kesin sınırlar çağrıya göre değişir).

## Kalan açık nokta
Desteklenen iller tam listesi, tedbir bazlı kesin bütçe alt-üst sınırları ve hibe oranı (%50-65 civarı olduğu
biliniyor ama bu turda teyit edilmedi) resmi tkdk.gov.tr çağrı belgesinden doğrulanmalı.
