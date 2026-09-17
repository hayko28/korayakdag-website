# TKDK IPARD III Kırsal Kalkınma Destekleri (evaluator kaynağı)

## DÜZELTME (2026-09-17) — kısmen birincil kaynakla teyit edildi

tkdk.gov.tr'nin resmi Duyuru, Rehber ve SSS sayfaları (birincil kaynak) doğrudan okundu. Gerçek
tedbir yapısı eski "hayvancılık/tarımsal üretim/gıda işleme/yenilenebilir enerji/kırsal turizm"
sınıflamasıyla ÖRTÜŞMÜYORDU: resmi tedbirler **M1/101** (Tarımsal İşletmelerin Fiziki Varlıkları),
**M3/103** (Tarım-Balıkçılık Ürünlerinin İşlenmesi/Pazarlanması), **M4/201** (Tarım-Çevre-İklim-
Organik Tarım), **M5/202** (LEADER Yerel Kalkınma), **M7/302** (Çiftlik Faaliyetlerinin
Çeşitlendirilmesi — yenilenebilir enerji ve kırsal turizm burada AYRI tedbir değil, M7'nin alt
yatırım konuları). Kod ve form bu resmi yapıya göre güncellendi.

Desteklenen il listesi (42 il) birincil kaynaktan (SSS sayfası) doğrulandı, ama sayfa footer'ı
2023 tarihli — 2026 için güncellendiği teyit edilemedi. Yaş (18-65) ve tedbir bazlı bütçe
limitleri (örn. M7 için ~500.000 Euro) yalnızca ikincil kaynaktan görülebildi — tkdk.gov.tr'nin
tedbir rehberi PDF'leri şifreli/sıkıştırılmış geldiği için açılamadı. Bu yüzden koddaki tek tip
"5.000-3.000.000 Euro" aralığı kaldırıldı, yerine "limitler tedbire göre değişir, güncel rehberle
teyit edin" uyarısı kondu; yaş kriteri de hard rule değil "belirsiz" (bilgilendirici) olarak kaldı.

Kaynak: tkdk.gov.tr/Duyuru/ipard-iii-programi-2026-yili-cagri-takvimi-yayimlandi-13041,
tkdk.gov.tr/SSS/ipard-programinin-uygulanacagi-iller-hangileridir-7,
tkdk.gov.tr/Ipard/BasvuruCagriRehberleri

---

## Durum — İKİNCİL KAYNAK (WebSearch, 2026-08-20, ESKİ)

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
