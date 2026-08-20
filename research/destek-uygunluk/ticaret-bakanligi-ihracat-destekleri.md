# Ticaret Bakanlığı İhracat Destekleri (evaluator kaynağı)

## Kaynak
Sitede zaten yayınlanmış, sourced blog yazısı: `app/blog/ticaret-bakanligi-ihracat-destekleri-2026/page.tsx`
(5973 sayılı İhracat Destekleri Hakkında Karar, 5986 sayılı E-İhracat Destekleri Hakkında Karar,
10962 sayılı Hizmet İhracatı Kararı — RG referanslarıyla). Ayrıca `turquality-programi-nedir-sartlari-destekleri-2026`.

## Evaluator mantığı (lib/destek-uygunluk/programlar.ts → ticaretBakanligiIhracatDesteklerDegerlendir)
- İhracat türü (fiziksel mal → 5973 sayılı Karar; hizmet → 10962 sayılı Karar; her ikisi → ayrı ayrı) yönlendirmesi.
- İhracatçı Birliği üyeliği ve DYS kaydı çoğu alt destek için ortak ön koşul — girilmezse "belirsiz".
- Kapsam çok geniş (Pazara Giriş, Marka Tescili, Fuar, Birim Kira, Tanıtım, KTZ, E-İhracat, Hizmet Sektörleri Atılım/Markalaşma Programları) olduğundan sonuç hiçbir zaman kesin "uygun" dönmez, en fazla "kismen_uygun".

## Notlar
- Üst limitler her yıl (TÜFE+Yİ-ÜFE)/2 oranında güncellenir; form bu detaylara girmez, blog yazısına yönlendirir.
- Turquality ayrı bir programdır, bu evaluator'a dahil edilmedi (blogda ayrıca var).
