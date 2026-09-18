# İstihdamı Koruma Destek Programı (evaluator kaynağı)

## Durum — YÜKSEK GÜVEN, siteye zaten yayınlanmış sourced blog yazısından türetildi (2026-09-18)

Ayrı bir birincil kaynak taraması yapılmadı; `app/blog/istihdami-koruma-destek-programi-2026/page.tsx`
zaten KOSGEB'in 28/08/2026 tarihli "kapsamı genişletildi" duyurusuna ve Uygulama Esasları'na
dayalı, madde/örnek hesaplamalarıyla detaylı sourced içerik barındırıyor — bu evaluator o
içerikten türetildi.

Kaynak: https://www.kosgeb.gov.tr/site/tr/genel/detay/9471/istihdami-koruma-destek-programinin-kapsami-genisletildi
`app/blog/istihdami-koruma-destek-programi-2026/page.tsx`

## Neden eklendi

Katman 3 (genel katalog, `programlar.json`) içinde "istihdam" anahtar kelimesiyle zaten
yakalanıyordu ama sadece ön tarama/link öneri seviyesindeydi — kesin kriter sormuyordu.
Koray'ın talebiyle (prim gün sayısı/çalışan sayısına göre Ocak-Haziran 2026 ödenen primin
Temmuz-Aralık 2026'da da korunması senaryosu) Katman 2 derinliğinde modellendi.

## Temel bulgular (2026-2 dönemi, şu an açık: 1 Eylül - 31 Ekim 2026 başvuru)

- Kapsam: yalnızca NACE Kısım C (İmalat, 10-33).
- Bu dönemde SADECE finansman desteği (kredi faiz/kâr payının 12 puana kadarki kısmı,
  geri ödemesiz) var; performans desteği (çalışan başına 3.500 TL) bu dönemde YOK.
- Referans dönem: Ocak-Haziran 2026 ortalama prim günü. Koruma dönemi: Temmuz-Aralık 2026
  (en az 6 ay bu seviye korunmalı). Somut bir kişi sayısı şartı yok — kendi geçmiş
  ortalamanıza göre görecelidir.
- KOBİ'ler KOSGEB'e, büyük işletmeler doğrudan Sanayi ve Teknoloji Bakanlığı'na başvurur.
  2026-2'den itibaren büyük işletmeler de kapsamda (önceki dönemde sadece KOBİ'ler vardı).
- KOBİ'ler için ayrıca: KOBİ Bilgi Sistemi kaydı/beyannamesi güncel olmalı; KOSGEB'e
  yapılandırılmamış vadesi geçmiş borç olmamalı.
- Referans dönemde sigortalı çalışanı olmayan (prim günü sıfır) işyerleri kapsam dışı.
- Kredi limiti: KOBİ 50.000.000 TL, büyük işletme 150.000.000 TL üst limit.

## Modelleme kararı — kapsam dışı bırakılan senaryo

Yatırım teşvik belgeli büyük ölçekli işletmeler için ayrı, daha karmaşık bir "ilave
istihdam" formülü var (teşvik belgesindeki taahhüdün yarısı × 180 gün prim eşdeğeri,
Sanayi ve Teknoloji Bakanlığı kanalı). Bu senaryo evaluator'da tam hesaplanmıyor,
yalnızca büyük ölçekli (`kobi_disi`) sonucunda bilgilendirici bir gerekçe olarak
belirtiliyor — TÜBİTAK 1833'te olduğu gibi kapsam dışı bırakma değil, ama de tam
modelleme de değil; sadece MVP kapsamı dışında tutuldu.

## Kalan açık nokta

Program dönemsel (2026-1, 2026-2, gelecekte 2026-3 vb. farklı kurallarla açılıp
kapanabilir) — bu evaluator yalnızca 2026-2 dönemi kurallarını modelliyor. Yeni dönem
açıldığında kurallar (özellikle referans/koruma dönem tarihleri ve performans
desteğinin olup olmadığı) yeniden doğrulanmalı.
