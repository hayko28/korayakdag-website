# Turquality / Marka Destek Programı — Uygunluk Kriterleri

## DÜZELTME (2026-09-18) — kalan kriterler de birincil kaynaktan (26/06/2026 yürürlük) teyit edildi

Güncel "Marka ve TURQUALITY® Desteğine İlişkin Genelge" (26/06/2026 yürürlük) PDF'i tam metin
okundu. Tescil sırası kriteri (MADDE 14/1-c) zaten doğruydu. Bulunanlar:

- **50/80/100 puanlık ön inceleme sistemi ana gövdede (madde 1-38) DOĞRULANAMADI** — eklerde
  (Ek-1..10) olabilir, bu oturumda erişilemedi. Kod artık bunu kesin kural değil "tahmini
  bilgi" olarak sunuyor.
- **İki hard-rule tamamen eksikti**: MADDE 14/1-ç (tescil sahibi başvurucunun kendisi, ona
  organik bağlı bir yurt içi şirket veya aynı holding/topluluğa bağlı bir şirket olmalı —
  organik bağsız 3. şirket adına tescil yasak) ve MADDE 14/1-d (Türk malı/marka imajına
  aykırı ifade/sembol/ülke-şehir-bölge ismi yasağı). Yeni form alanı eklemek yerine
  bilgilendirici uyarı olarak eklendi.
- **MADDE 14/3 istisnası eksikti**: 87. fasılda (bağlantılı/otonom/paylaşımlı/elektrikli
  akıllı cihazlar) üretim yapanlar için ihracat eşiği aranmıyor — uyarı eklendi.
- Yurt dışı tescil eksikliğinin "belirsiz" (ret değil) sayılması korundu, ama MADDE 14/1-b'nin
  yurt içiyle aynı bağlayıcılıkta "en az 1 yıl önce" şartı taşıdığı vurgulanacak şekilde uyarı
  güçlendirildi — "başvuru anına kadar tamamlanabilir" değil, süreç önceden başlatılmalı.

Kaynak: https://ticaret.gov.tr/data/63403c7213b87692b0e3b9d6/Marka%20ve%20Turquality%20Deste%C4%9Fine%20ili%C5%9Fkin%20Genelge.pdf

---

## DÜZELTME (2026-09-17) — birincil kaynakla teyit edildi

Koray'ın uyarısı üzerine ticaret.gov.tr'deki "Marka ve TURQUALITY® Desteğine İlişkin Genelge" PDF'i
(birincil kaynak) doğrudan okunarak teyit edildi. Kesin madde metni:

> **MADDE 14/1-c:** Başvuruda bulunulan markaya ilişkin yurt içi tescil **başvuru** tarihinin yurt dışı
> tescil **başvuru** tarihinden **önce veya aynı tarihte** olması gerekir.

Önceki metin "tescil" diyordu, doğrusu "başvuru tarihi"; ayrıca "aynı tarihte" olması da yeterli —
sadece kesin olarak yurt dışı başvurusunun yurt içinden ÖNCE yapılmış olması diskalifiye ediyor.
Kod ve aşağıdaki metin buna göre güncellendi, alttaki mantık (boolean soru) zaten doğruydu.

Kaynak: https://ticaret.gov.tr/data/63403c7213b87692b0e3b9d6/Marka%20ve%20Turquality%20Deste%C4%9Fine%20ili%C5%9Fkin%20Genelge.pdf

---


Kaynak: `app/blog/turquality-programi-nedir-sartlari-destekleri-2026/page.tsx` içinde
araştırılmış, Marka ve Turquality Desteklerine İlişkin Genelge'ye dayanan bilgiler.

## Tek başvuru, iki olası sonuç

Turquality ve Marka Destek Programı aynı başvuru sürecinden geçer; görevlendirilen
danışmanlık firmasının ön inceleme raporundaki **puana göre** hangisine alınacağı
belirlenir:

- **50 puan altı**: Ret.
- **50-80 puan**: Marka Destek Programı.
- **80-100 puan**: Turquality.

## Üç ana kabul kriteri (tamamı sağlanmalı)

1. **Ön inceleme puanı** — en az 50 (kesin puanlama danışmanlık firmasının
   değerlendirmesine bağlı, bizim aracımız bunu simüle edemez; sadece eşik
   şartlarını kontrol eder).
2. **İhracat performansı** — son 3 takvim yılı ortalama ihracatı en az
   **3.000.000 ABD Doları**. İstisna: son 1 yılda en az **10.000.000 ABD Doları**
   ihracat yapılmışsa 3 yıllık ortalama şartı aranmaz.
3. **Marka tescili**
   - Başvurulan markanın, başvuru tarihinden **en az 1 yıl önce** alınmış
     yurt içi tescili olmalı.
   - Aynı markanın Madrid Protokolü'ne taraf en az bir ülkede yurt dışı
     tescili olmalı.
   - Yurt içi tescil, yurt dışı tescilden **önce** yapılmış olmalı (sıra önemli).

## Diskalifiye eden durumlar

- Yurt dışı tescilin yurt içi tescilden önce yapılmış olması.
- Yurt içi/yurt dışı tescillerin organik bağı olmayan farklı şirketler adına olması.
- Satın alınan yabancı markalar (bu destek kapsamına girmez).
- Markada Türk malı/markası imajına aykırı unsurlar.

## Uygulamamızdaki basitleştirme

Bizim ön-değerlendirme aracımız danışmanlık firmasının 100 puanlık ön inceleme
skorunu simüle edemez (marka gücü, kurumsal yönetim kapasitesi gibi öznel
unsurlar içerir). Bunun yerine **nesnel eşik şartlarını** (ihracat tutarı, tescil
varlığı, tescil sırası) kontrol ediyoruz; sonucu "kesin uygunsunuz" değil
"nesnel ön şartları sağlıyorsunuz, nihai puanlama danışmanlık değerlendirmesine
tabidir" çerçevesinde sunuyoruz.
