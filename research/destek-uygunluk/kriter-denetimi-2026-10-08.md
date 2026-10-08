# Destek Uygunluk Motoru: Kriter Denetimi (2026-10-08)

## Amaç ve karar kuralı

Koray'ın talimatı: sonuç, kurumun sonraki değerlendirmesine (Kurul, Jüri, hakem, rekabetçi sıralama) göre
değil, **başvuru şartlarını, kriterlerini ve belgelerini sağlayıp sağlamadığına** göre verilmeli.

- `uygun` (🟢): sorulabilen tüm başvuru şartları/kriterleri/belgeleri sağlanıyor. Kurul/Jüri/hakem kararı
  başvuru SONRASI ayrı bir aşamadır, durumu belirlemez (kartta `uyarilar` olarak kalır).
- `uygun_degil` (🔴): bir şart/kriter/belge sağlanmıyor. Üçüncü taraftan alınması gereken belgeler
  (YODA, dijital dönüşüm raporu, tescil, Sanayi Sicil vb.) yoksa da 🔴 (kart "cevapları güncelle" der).
- `belirsiz` (🟡): en az bir şart sorulmamış/cevaplanmamış. Kart sorularını zorunlu açar.
- `kismen_uygun` (🔵 "Ek Şartlar Doğrulanamadı"): artık normal akışta üretilmez. Yalnızca programın bazı
  başvuru şartları kaynak belge okunamadığı için doğrulanamıyorsa kullanılır (TKDK, Yeşil Sanayi; Teknopark'ta
  çifte teşvik çelişkisi).
- Kendin hazırlayacağın belgeler (taahhütname, sözleşme taslağı, fizibilite, PRODİS ön kaydı) eleme sorusu
  değil, kartta "başvuru öncesi dikkat" olarak listelenir.

## Açık programlar ve bulgular

| Program | Açık mı (8 Ekim 2026) | Bulgu / yapılan |
|---|---|---|
| TÜBİTAK 1501 | Evet, kapanış 26 Ekim (ön kayıt 22 Ekim) | **Hata düzeltildi:** kod "KOBİ zorunluluğu yok" diyordu; 2026-2 çağrısı ve TÜBİTAK 16/04/2019 duyurusu genel 1501 çağrılarını yalnızca KOBİ'lere açıyor. Büyük ölçekli artık 🔴. Destek oranı: ilk 5 projede %75, 6.'dan itibaren %60. |
| TÜBİTAK 1507 | Evet, kapanış 11 Kasım (ön kayıt 9 Kasım) | Formda sorulup kullanılmayan teknogirişim alanları devreye alındı (MADDE 14/5: 1 kez, 24 ay). |
| TÜBİTAK 1707 | Evet, 2026-3: 1 Eylül-13 Kasım | Proje bütçesi >10M TL artık 🔴 (eskiden yalnızca not). Bütçe zorunlu soru. |
| TÜBİTAK 1831 | Sürekli | Şartlar zaten tamdı. Yalnızca durum mantığı. |
| KOBİ Dijital Dönüşüm | Sürekli (Rev.05, 05.07.2026) | **Hata düzeltildi:** "mali karne yoksa 🔴" kaldırıldı (Yönerge ve Kontrol Tablosu'nda böyle bir belge yok). Eklenen sorular: KOSGEB kaydı, İşletme Beyanı, rapor geçerliliği, EBRD listesi, tekrar başvuru, yatırım tutarı (≥1M TL), gider kalemleri/yeni ekipman. |
| KOSGEB YÖNDE | Sürekli (Rev.3, 05.07.2026) | **Hata düzeltildi:** değerlendirme Kurul/Jüri değil, mevzuata uygunluk ve şekil kontrolü; "tavan kısmen uygun" gerekçesi yanlıştı. Eklenen: KOSGEB kaydı, İşletme Beyanı, danışman yetkisi (TÜSSDE / yalın dönüşüm), sürdürülebilirlikte TSRS + güvence denetimi + raporlama yılı. |
| İstihdamı Koruma | Evet, 1 Eylül-31 Ekim | Eklenen: Ocak-Haziran 2026 muhtasar ve prim hizmet beyannameleri. |
| Turquality / Marka | Sürekli | Genelge (26/06/2026) MADDE 14 tam okundu. Eklenen: her yıl ihracat, tescillerin 1 yıl önce alınması, organik bağlı şirket adına tescil, marka imajı, 87. fasıl istisnası; 10M$ istisnasında tescil yaşı aranmaz. Yurt dışı tescil yoksa artık 🔴 (eskiden 🟡). |
| İhracat Destekleri | Sürekli | Karar alt kalem bazlı: koşulu sağlanan en az bir kalem varsa 🟢; seçilen kalemlerin hiçbiri sağlanmıyorsa 🔴; kalem seçilmemişse 🟡. Üyelik yalnızca Fuar için aranır. **Hata düzeltildi:** "küresel tedarik zinciri" ve "e-ihracat" cevapları formdan sunucuya hiç gönderilmiyordu. |
| Yatırım Teşvik Belgesi | Sürekli | Eklenen: EK-3 özel şartları sorusu. Artık "asla uygun dönmez" değil. |
| Stratejik Ürün | Çağrı bazlı (hamle.sanayi.gov.tr) | KBS kaydı `false` ise 🔴. 🟢 yalnızca Bakanlık "kesin başvuruya davet" aşamasından sonra. Açık çağrı tarihi doğrulanamadı. |
| Ar-Ge / Tasarım Merkezi, Teknopark, TEKMER | Sürekli statü başvurusu | Mantık aynı, durum 🟢'ye çevrildi. TEKMER "emin değilim" cevabı artık eksik sayılıyor. |
| TKDK IPARD III | **Kapalı** | 2026 takvimindeki 4 çağrı kapandı (son: 12. çağrı, teslim 7 Eylül). Ekim-Aralık için çağrı yok. `cagriKapali` işaretlendi. Çağrılar 81 il (eski "42 il" bilgisi ve il sorusu kaldırıldı). Tedbir bazlı şartlar rehber PDF'inden okunamadığı için 🔵 bırakıldı. |

## Çağrısı kapalı programlar

İş Geliştirme, Kapasite Geliştirme, Küresel Rekabetçilik, TÜBİTAK 1812, TÜBİTAK 1832: yalnızca durum mantığı
`uygun` olacak şekilde güncellendi (kart 🟠). **Yeşil Sanayi:** kodda hâlâ sorulmayan ek şartlar var (özel sektör
payı %75, kredi skoru, ESMS riski, 2 yıl faaliyet, 20 TEP, DB dışlama listesi, başvuru sayısı). Çağrı kapalı olduğu
için dokunulmadı, yeni çağrı açılınca tamamlanmalı.

## Açık kalan / doğrulanamayanlar

- Stratejik Ürün için güncel Bakanlık çağrı tarihleri.
- 1707 2026-3 çağrı duyurusundaki öncelikli konu kapsamı ("Endüstride Teknolojik Sıçrama" ve "Dijital Liderlik"):
  yalnızca uyarı olarak eklendi, eleme kuralı yapılmadı.
- 1501/1507 çağrısındaki kuruluş başına proje önerisi sınırı: çağrı duyurusu metninde teyit edilmeli (uyarı eklendi).
- Dijital Dönüşüm Başvuru Kontrol Tablosu Rev.No:02 (11.05.2026) ile Yönerge Rev.05 arasında sürüm farkı var.

## Kaynaklar

- KOBİ Dijital Dönüşüm Yönergesi Rev.05 (05.07.2026) ve Başvuru Kontrol Tablosu (webdosya.kosgeb.gov.tr)
- YÖNDE Yönergesi Rev.3 (05.07.2026) (webdosya.kosgeb.gov.tr)
- Marka ve TURQUALITY Desteğine İlişkin Genelge (26/06/2026), ticaret.gov.tr
- TÜBİTAK duyuruları: 1501/1507 2026-2 çağrıları (20 Temmuz 2026), 1707 2026-3 (2 Eylül 2026), 1501 "yalnızca KOBİ" (16/04/2019)
- KOSGEB İstihdamı Koruma 2026-2 duyurusu (kosgeb.gov.tr/site/tr/genel/detay/9471)
- TKDK IPARD III 2026 çağrı takvimi ve 12. çağrı ilanı (alomaliye.com, milliyet.com.tr, tkdk.gov.tr)
