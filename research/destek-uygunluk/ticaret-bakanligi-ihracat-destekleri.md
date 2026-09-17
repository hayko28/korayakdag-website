# Ticaret Bakanlığı İhracat Destekleri (evaluator kaynağı)

## DÜZELTME (2026-09-18) — 5973 ve 10962 sayılı Kararların tam metni birincil kaynaktan okundu

Bir önceki turda (2026-09-17) "İhracatçı Birliği üyeliği yoksa kesin ret" kuralı eklenmişti
("bu destek grubunun neredeyse tamamı için ön koşul" varsayımıyla). Bu varsayım YANLIŞ
çıktı: 5973'ün (fiziksel mal) tam metninde üyelik yalnızca **Fuar destekleri** (Madde 7-8,
"yurt içi/dışı fuar katılımcısı" tanımı) için ön koşul; Pazara Giriş Belgesi, Marka Tescili,
Birim Kira, Tanıtım, Küresel Tedarik Zinciri gibi diğer kalemlerde üyelik metinde geçmiyor.
10962'de (hizmet) durum daha net: Hizmet Sektörleri Atılım/Markalaşma/Sürdürülebilirlik
Programları "yararlanıcı" tanımına dayanıyor, üyelik aranmıyor — sadece YLDA "Kullanıcı"
tanımında geçiyor. Kesin ret kuralı kaldırıldı, üyeliğin sadece Fuar/YLDA için gerekli
olduğunu belirten bilgilendirici bir gerekçeye çevrildi.

İkinci hata: "(TÜFE+Yİ-ÜFE)/2" üst limit güncelleme formülü her iki Karar'a da uygulanıyordu.
Bu formül yalnızca 5973 MADDE 30'da (fiziksel mal) geçiyor; 10962 MADDE 43'te (hizmet) genel
kural VUK mükerrer 298/B yeniden değerleme oranı. İhracat türüne göre ayrıştırıldı.

Kaynak: https://www.resmigazete.gov.tr/eskiler/2022/08/20220818-16.pdf (5973),
https://ticaret.gov.tr/data/69a9d756269de18b843851b7/Çerçeve%20Karar.pdf (10962)

---

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
