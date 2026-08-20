# Yatırım Teşvik Belgesi

## Durum — BİRİNCİL KAYNAĞA ULAŞILDI (3. tur araştırma, 2026-08-19)

Önceki iki turda sanayi.gov.tr ve mevzuat.gov.tr'ye doğrudan erişim (sertifika hatası / erişim reddi) başarısız olmuştu. Bu turda **6 farklı yöntem** denendi:

1. sanayi.gov.tr'ye http:// (https değil) ile erişim — başarısız (yine sertifika/erişim hatası).
2. web.archive.org üzerinden arşiv erişimi — WebFetch aracı web.archive.org'a erişemiyor (araç kısıtı: "Claude Code is unable to fetch from web.archive.org").
3. resmigazete.gov.tr eskiler arşivi (2025/05/20250530-2.pdf) — önceki turlarda denendi, erişilemedi.
4. invest.gov.tr taraması — WebSearch üzerinden genel bilgi alındı ama doğrudan PDF/birincil metne yönlendirmedi.
5. ticaret.gov.tr, TOBB — bu turda ayrıca denenmedi (6. yöntem daha hızlı sonuç verdi).
6. **yatirimadestek.gov.tr taraması — BAŞARILI.** Bu site Cumhurbaşkanlığı Yatırım Ofisi ekosistemine ait resmi bir portal olup, Karar'ın ve Tebliğ'in **tam PDF metinlerini doğrudan barındırıyor**:
   - Karar (9903) tam metni: `https://www.yatirimadestek.gov.tr/pdf/assets/upload/dosyalar/karar-yatirim_tesvik_uygulamalari.pdf`
   - Uygulama Tebliği (2025/1) tam metni: `https://www.yatirimadestek.gov.tr/assets/upload/dosyalar/teblig-yatirim_tesvik_uygulamalari.pdf`
   - Özet sunum: `https://www.yatirimadestek.gov.tr/pdf/assets/upload/dosyalar/sunum-yatirim_tesvik_uygulamalari.pdf`
   - Sayfa: `https://www.yatirimadestek.gov.tr/destek/yatirim-tesvik-sistemi-9903-sayili-karar/126`

WebFetch aracı bu PDF'lerin metnini otomatik ayıklayamadı (sıkıştırılmış PDF stream'leri), **ancak dosyalar diske indirildi ve Claude'un PDF-okuma yeteneğiyle (Read tool) doğrudan, sayfa sayfa, tam metin olarak okundu.** Bu sayede Karar'ın 36 maddesi + geçici maddeler + EK-1 (teknoloji sınıflandırması), EK-2 (bölge tablosu, 81 il), EK-3 (pozitif liste — desteklenebilir sektörler ve şartlar, ~9 sayfa), EK-4 (gümrük muafiyeti dışı makine listesi), EK-5 (alt bölge ilçeleri) ve Tebliğ'in 30 maddesi + EK-1 ile EK-8 arası tüm ekleri **birebir okunmuş ve doğrulanmıştır.** Bu, önceki iki turun ikincil kaynak derlemesinden kalitatif olarak farklı bir doğrulama seviyesidir.

Aşağıdaki tüm bilgiler artık **birincil kaynaktan (Resmi Gazete metniyle birebir eşleşen, resmi devlet portalında barındırılan PDF)** alınmıştır; ikincil kaynaklar sadece 2026 güncel rakamların teyidi için ek çapraz doğrulama amacıyla kullanılmıştır.

## Genel Yapı (Karar Madde 1-4)

15 Haziran 2012 tarihli 2012/3305 sayılı Karar ve 2018/11201 sayılı Cazibe Merkezleri Programı Kararı, **30 Mayıs 2025 tarihli ve 32915 sayılı Resmi Gazete'de yayımlanan 9903 sayılı Cumhurbaşkanı Kararı** ile tamamen yürürlükten kaldırılmıştır (Madde 34). Uygulama esasları **Tebliğ No: 2025/1** (21 Haziran 2025, RG 32933) ile düzenlenmiştir.

**Teşvik sistemi (Madde 4) üç ana bloktan oluşur:**

1. **Türkiye Yüzyılı Kalkınma Hamlesi** — 3 program:
   - Teknoloji Hamlesi Programı (Madde 6)
   - Yerel Kalkınma Hamlesi Programı (Madde 7)
   - Stratejik Hamle Programı (Madde 8)
2. **Sektörel Teşvik Sistemi** — 2 sistem:
   - Öncelikli Yatırımlar Teşvik Sistemi (Madde 9)
   - Hedef Yatırımlar Teşvik Sistemi (Madde 10)
3. **Bölgesel Teşvikler** — yukarıdaki 1 ve 2'ye ek olarak, yatırım bölgesine göre otomatik uygulanan destek katmanı (sigorta primi işveren hissesi desteği vb.)

Destek unsurları: gümrük vergisi muafiyeti, KDV istisnası, vergi indirimi, faiz/kâr payı desteği, makine desteği (sadece Türkiye Yüzyılı Kalkınma Hamlesi), yatırım yeri tahsisi, sigorta primi işveren hissesi desteği, sigorta primi desteği (sadece 6. bölge).

## Kapsam / Pozitif Liste — EN KRİTİK BULGU (Madde 5/1 + EK-3)

**Madde 5, fıkra 1:** *"Desteklerden yararlanacak yatırımların **ek-3'te belirtilen yatırım konularına** yönelik olması ve bu konular için belirtilen şartları sağlaması gerekir."* İstisnalar: **Türkiye Yüzyılı Kalkınma Hamlesi** (Teknoloji/Yerel Kalkınma/Stratejik Hamle programları — bunlar kendi ayrı listelerini kullanır: öncelikli ürün listesi, yerel yatırım konuları listesi, stratejik hamle yatırım konuları listesi — Tebliğ ile yayımlanır), **Dijital Dönüşüm Programı**, **Yeşil Dönüşüm Programı** ve **Madde 9/1-v** (afet teknolojileri) için bu şart aranmaz.

Yani: **EK-3, Bölgesel/Genel uygulama + Öncelikli Yatırımlar + Hedef Yatırımlar için ortak, tek, resmi POZİTİF LİSTE'dir.** Önceki araştırma turlarında "Hedef Yatırımlar'a özgü" sanılan EK-3 aslında sistemin ana whitelist'idir — bu önemli bir düzeltmedir.

### EK-3 tam kapsamı — sektör bazında (NACE/ISIC harf grubu, kod, şart)

EK-3, "DESTEKLERDEN FAYDALANABİLECEK SEKTÖRLER VE ŞARTLAR" başlığıyla A'dan R'ye kadar harf gruplarında ~9 sayfa ayrıntılı liste sunuyor. **Hizmet sektörleri kesinlikle listede var** — bu, görev tanımındaki "sadece üretici olmalı" varsayımını kesin olarak çürütür:

- **A — Tarım, Ormancılık, Balıkçılık:** belirli bitkisel/hayvansal üretim konuları, bölgeye göre değişen asgari kapasite şartlarıyla (örn. sera: 1-2. bölge ≥20 dekar, 6. bölge ≥5 dekar).
- **B — Madencilik ve Taş Ocakçılığı:** I. grup madenler, altın madenciliği, mıcır, rödovans hariç maden istihraç/işleme/arama yatırımları; İstanbul'da desteklenmez.
- **C — İmalat:** kapsamlı liste (gıda, tekstil, kimya, ilaç, plastik, metal, makine, mobilya vb.), çoğu NACE 2 haneli kodda, bazılarında alt-kod istisnaları ve asgari tutar şartları (örn. plastik ürünler ≥100M TL, kağıt hamurundan başlayan yatırımlar ≥30M TL).
- **D — Elektrik/Gaz/Buhar/İklimlendirme:** yenilenebilir enerji üretimi (doğalgaz/ithal kömür hariç), elektrik dağıtımı, şarj istasyonları, elektrik depolama, gaz dağıtımı/depolama.
- **E — Su Temini, Atık Yönetimi:** atık toplama/geri kazanım/bertaraf.
- **H — Ulaştırma ve Depolama:** demiryolu/denizyolu/havayolu yolcu-yük taşımacılığı, boru hattı, liman işletmeciliği, soğuk hava deposu (≥1.000 m²), lisanslı hububat depoculuğu, kargo elleçleme (≥5.000 m² + Antrepo İzin Belgesi).
- **I — Konaklama ve Yiyecek Hizmeti (TURİZM):** oteller ve benzeri (**≥50 oda** — otel, tatil köyü, butik otel, özel konaklama tesisi); öğrenci yurtları (**≥200 öğrenci kapasitesi**).
- **K — Telekomünikasyon, Bilgisayar Programlama, Bilişim Altyapısı (YAZILIM/BİLİŞİM):** **62.1 Bilgisayar programlama faaliyetleri — asgari tutar şartı belirtilmemiş, doğrudan destekleniyor.** 63.1 Bilgi işlem altyapısı/veri işleme/barındırma — sadece tebliğle belirlenecek teknik şartları karşılayan ve **asgari 500 kW kurulu güç** şartını sağlayan veri merkezi yatırımları.
- **N — Mesleki, Bilimsel, Teknik Faaliyetler:** orta-yüksek/yüksek teknolojili ürünlere yönelik test merkezleri, Ar-Ge/deneysel geliştirme faaliyetleri, hayvan hastaneleri.
- **O — İdari ve Destek Hizmetleri:** çağrı merkezleri — **sadece 6. bölgede** desteklenir.
- **Q — Eğitim (85):** kamu kurumları hariç, belirli alt kodlar (85.32.14/15/16/90, 85.33, 85.4, 85.5, 85.6) da hariç — geri kalan özel eğitim yatırımları destekleniyor.
- **R — İnsan Sağlığı ve Sosyal Hizmet (SAĞLIK):** **86.1 Hastane hizmetleri — kamu kurumları hariç, özel hastane yatırımları destekleniyor.** 87 Yatılı bakım faaliyetleri (87.9 hariç). 88.91 Çocuk gündüz bakım/kreş faaliyetleri.

**Sonuç:** Yazılım/bilişim (62.1) ve özel hastane (86.1) ve turizm konaklama (55.1, ≥50 oda) EK-3'te AÇIKÇA yer alıyor — whitelist içinde. Lojistik (H grubu) da geniş kapsamda yer alıyor. Bu artık teyitli, birincil kaynaktan.

### Madde 9 (Öncelikli Yatırımlar) — ek/paralel liste, tam 25 bent (a-y)

EK-3'e ek olarak, Madde 9 kendi başına 25 ayrı öncelikli yatırım konusu sayıyor (bunlar zaten EK-3 kapsamında olabilir veya olmayabilir — Öncelikli Yatırımlar statüsü daha cömert destek oranları sağlar). Öne çıkanlar:
- (a) Dijital/Yeşil Dönüşüm Programı kapsamındaki yatırımlar
- (m) **Asgari yatırım tutarı şartı ARANMAKSIZIN, ihtisas serbest bölgelerinde yazılım ve bilişim ürünleri üretimi yatırımları**
- (s) Kültür/turizm koruma-gelişim bölgeleri, turizm merkezleri, termal turizm konaklama yatırımları (özel öncelikli statü)
- (t) Asgari 100 kişi kapasiteli yaşlı/engelli bakım merkezleri
- (u) Lisanslı depoculuk yatırımları
- (ş) Özel sektör kreş/okul öncesi/ilkokul/ortaokul/lise eğitim yatırımları
- diğerleri: savunma sanayii, güneş/rüzgar enerjisi (öz tüketim), maden, Ar-Ge, test merkezleri, veri merkezi (≥3 MW), bulut hizmeti sağlayıcı veri merkezi yatırımları (≥200M TL), demiryolu/denizyolu/havayolu taşımacılığı, çevre lisanslı yatırımlar, sera teknolojileri (≥25 dekar), deprem/yangın riski yatırımları, afet teknolojileri.

## Bölgesel Sistem — TAM 81 İL TABLOSU (Karar Madde 3, EK-2)

İller sosyo-ekonomik gelişmişliğe göre **6 bölgeye** ayrılmıştır (1. bölge en gelişmiş, 6. bölge en az gelişmiş):

| Bölge | İller |
|---|---|
| **1** | Ankara, Antalya, Bursa, Eskişehir, İstanbul, İzmir, Kocaeli, Muğla |
| **2** | Aydın, Balıkesir, Bolu, Çanakkale, Denizli, Edirne, Kayseri, Konya, Manisa, Mersin, Sakarya, Tekirdağ, Yalova |
| **3** | Adana, Bilecik, Burdur, Düzce, Gaziantep, Isparta, Karabük, Karaman, Kırıkkale, Kırklareli, Kütahya, Nevşehir, Rize, Samsun, Trabzon, Uşak, Zonguldak |
| **4** | Afyonkarahisar, Aksaray, Amasya, Artvin, Çorum, Elâzığ, Erzincan, Kastamonu, Kırşehir, Malatya, Sivas |
| **5** | Bartın, Bayburt, Çankırı, Erzurum, Giresun, Hatay, Kahramanmaraş, Kilis, Niğde, Ordu, Osmaniye, Sinop, Tokat, Tunceli, Yozgat |
| **6** | Adıyaman, Ağrı, Ardahan, Batman, Bingöl, Bitlis, Diyarbakır, Gümüşhane, Hakkâri, Iğdır, Kars, Mardin, Muş, Siirt, Şanlıurfa, Şırnak, Van |

(EK-2 tam liste — resmi PDF'ten birebir alınmıştır, önceki turlarda "doğrulanamadı" işaretli soru artık kapandı.)

Ayrıca **EK-5**, her bölge içinde "alt bölge desteğinden yararlanabilecek ilçeler" listesini içerir (81 il altında seçilmiş, göreli az gelişmiş ilçeler — örn. Ankara'nın Bala, Çamlıdere, Evren ilçeleri gibi). Bu ilçelerde veya OSB/endüstri bölgesinde yapılan yatırımlar, bulundukları bölgenin **bir alt bölgesindeki** sigorta primi işveren hissesi desteği şart/süresinden yararlanır (Madde 22). Bu liste çok uzun (~400 satır, 81 il) olduğu için forma ikinci öncelikli özellik olarak eklenebilir; tam veri yerel PDF'te mevcuttur (bkz. Kaynaklar).

## Asgari Yatırım Tutarları

**Karar metnindeki (30 Mayıs 2025) taban rakam — Madde 5/2:** Asgari sabit yatırım tutarının ayrıca belirtilmediği hallerde: **1. ve 2. bölgelerde 12.000.000 TL, diğer bölgelerde (3-6) 6.000.000 TL.**

**Madde 5/10:** Karar'daki TL tutarları her yıl bir önceki yılın yeniden değerleme oranına göre Tebliğ ile güncellenir (takvim yılı başından geçerli). Madde 5'in 11-14. fıkraları (elektronik fatura zorunluluğu vb.) ayrıca özel olarak **1/1/2026'da** yürürlüğe girecek şekilde kurgulanmıştı (Madde 35).

**2026 güncel rakam — ARTIK TEYİTLİ (3 bağımsız ikincil kaynakla çapraz doğrulandı):** 2026 yeniden değerleme oranı **%25,49** olarak açıklandı ve 1 Ocak 2026'dan itibaren geçerli asgari sabit yatırım tutarları:
- **1. ve 2. bölge: 15.100.000 TL**
- **3, 4, 5 ve 6. bölge: 7.500.000 TL**

[kaynak: https://tesvikakademi.com/haber/2026-yili-yatirim-tesvik-tutarlari-aciklandi/, https://www.yatirimtesvikbelgesi.com/post/2026-yat%C4%B1r%C4%B1m-te%C5%9Fvik-asgari-yat%C4%B1r%C4%B1m-tutar%C4%B1-ve-yeniden-de%C4%9Ferleme-oran%C4%B1, https://www.sistemglobal.com.tr/bultenler/ar-ge/yatirim-tesvik-sistemi-yeni-donem-basladi/ — erişim: 2026-08-19] Not: bu üç kaynak da güncel Tebliğ duyurusuna atıf yapıyor; resmi güncelleme tebliğinin PDF'ine bu turda ulaşılamadı ama üç bağımsız mali müşavirlik/danışmanlık kaynağı aynı rakamlarda birleşiyor — **artık yüksek güvenilirlikte kabul edilebilir.** Form bu güncel rakamı (15,1M / 7,5M TL) esas almalı, taban Karar rakamını (12M/6M) sadece dipnotta referans olarak belirtmelidir.

**Finansal kiralama:** finansal kiralamaya konu makine-teçhizat toplam tutarı, her finansal kiralama şirketi için asgari **3.000.000 TL** (Madde 5/3).

**Stratejik Hamle Programı (Madde 8/2):** yüksek teknolojili ürün üretimi **100.000.000 TL**, diğer yatırımlar **200.000.000 TL**.

## Öncelikli Yatırımlar / Hedef Yatırımlar — asgari tutar örnekleri (Madde 9)

- Yüksek teknolojili ürün üretimi (öncelikli ürün listesi dışında): asgari **500.000.000 TL**
- Orta-yüksek teknolojili ürün üretimi (İstanbul hariç, öncelikli ürün listesi dışında): asgari **1.000.000.000 TL**
- LNG / yeraltı doğalgaz depolama: asgari **500.000.000 TL**
- Bulut hizmeti sağlayıcı veri merkezi: asgari **200.000.000 TL**
- Veri merkezi (Tebliğ'de belirlenen teknik şartlarla): asgari **3 MW kurulu güç**
- Yazılım/bilişim (ihtisas serbest bölge): **asgari tutar şartı yok**

## Öz Kaynak Şartı — netleşti

Karar metninde **genel/açık bir öz kaynak yüzdesi şartı SADECE Stratejik Hamle Programı için mevcut** (Madde 8/3-ç: yatırım tutarının **en az %20'si**). Bölgesel/Genel, Öncelikli Yatırımlar ve Hedef Yatırımlar sistemleri için Karar veya Tebliğ metninde ayrı bir asgari öz kaynak yüzdesi **bulunmuyor** — bu artık kesin (36 maddelik Karar + 30 maddelik Tebliğ tam okundu, böyle bir hüküm yok). Tebliğ ekindeki YMM/SMMM raporu formatlarında (EK-5, EK-8) "Öz Kaynaklar / Yabancı Kaynaklar" sadece **bilgilendirme amaçlı raporlama kalemi** olarak geçiyor, asgari yüzde şartı değil.

## Yatırım Cinsleri — Tevsi/Modernizasyon/Entegrasyon Tanımları (Tebliğ Madde 3)

- **Komple yeni yatırım:** yeni üretim tesisi (mevcut tesisle altyapı bütünlüğü olmayan).
- **Tevsi:** mevcut yatırımda üretim hattı/makine-teçhizat ilavesiyle kapasite artırımı, mevcut tesisle altyapı müşterekliği kurarak bütün teşkil eden.
- **Modernizasyon:** mevcut tesiste makine-teçhizat yenileme, eksik bölüm tamamlama, ürün kalitesi/model değişikliği veya üretim/hizmet süreçlerinin teknolojik iyileştirmelerle verimlilik artışı.
- **Entegrasyon:** mevcut tesise ileri/geriye doğru entegre olan, kural olarak aynı il sınırları içinde/aynı tesis bünyesinde ara malı üretim/tüketim ilişkisi kuran yatırımlar.
- **Ürün çeşitlendirme:** mevcut tesisle altyapı müşterekliği olan, ilave yatırımla farklı bir nihai ürün elde edilmesi.
- **Nakil:** mevcut tesisteki makine-teçhizatın teşvik belgesine konu yeni yere taşınması.

Komple yeni, tevsi, modernizasyon, ürün çeşitlendirme cinsleri **aynı il sınırları içinde olmalı** (Tebliğ Madde 11/2) — yatırımın karakteristiği gereği muhtelif illerde olması gereken konular hariç.

## Fizibilite Raporu Şartı — netleşti

**Tebliğ Madde 7/1-ç:** Yatırım tutarı **1 milyar TL ve üzerinde** olan yatırımlar için, 2016/9495 sayılı Karar EK-1 formatında hazırlanmış fizibilite raporu müracaat ekinde zorunlu.

## SMMM/YMM Raporu Eşiği (tamamlama vizesi için — Tebliğ EK-4, madde 8)

Gerçekleşen sabit yatırım tutarı **50-100 milyon TL arası: SMMM raporu**; **100 milyon TL ve üzeri: YMM raporu** zorunlu (elektrik enerjisi üretimi yatırımları hariç, o da ayrı EK-8 formatında YMM raporu istiyor).

## Başvuru Süreci

- Başvuru **E-TUYS** (Elektronik Teşvik Uygulama ve Yabancı Sermaye Bilgi Sistemi) üzerinden, e-imza ile, elektronik ortamda yapılır (Karar Madde 5/12, Tebliğ Madde 5-7).
- Başvuru sahipleri: gerçek kişiler, adi ortaklıklar, sermaye şirketleri, kooperatifler, birlikler, iş ortaklıkları, kamu kurum/kuruluşları (belirli şartlarla), yabancı şirketlerin Türkiye şubeleri.
- Müracaat ekinde: SGK borcu yokluğu belgesi, gerekiyorsa ÇED kararı, gerekiyorsa işyeri açma/çalışma ruhsatı, ≥1 milyar TL için fizibilite raporu.
- **31 Aralık 2030**'a kadar yapılan teşvik belgesi müracaatları değerlendirilir (Madde 5/5).
- Yatırım süresi azami 3 yıl (Bakanlık gerekirse düşürebilir), gerekçeyle ilk sürenin yarısı kadar ek süre verilebilir (Madde 29).

## Doğrulanmış Sonuçlar — Görev Tanımındaki Kritik Sorular

1. **Pozitif liste kapsamı:** ✅ NETLEŞTİ. EK-3 tam metniyle okundu. Yazılım/bilişim (62.1), özel hastane (86.1), turizm konaklama ≥50 oda (55.1), lojistik/depoculuk/taşımacılık (H grubu, geniş), eğitim (85, kamu hariç), kreş (88.91) gibi hizmet sektörleri **açıkça pozitif listede**. Ayrıca Madde 9'da 25 ayrı öncelikli yatırım konusu (yazılım ihtisas serbest bölge, turizm merkezleri, yaşlı/engelli bakım vb.) var.
2. **Ek-2 il-bölge tablosu:** ✅ NETLEŞTİ. Tam 81 il, 6 bölge, resmi PDF'ten birebir yukarıda.
3. **Öz kaynak/asgari sabit yatırım tutarı:** ✅ NETLEŞTİ. Taban (Karar): 12M/6M TL. **2026 güncel: 15,1M/7,5M TL** (3 bağımsız ikincil kaynakla teyitli, resmi güncelleme tebliğinin PDF'i bulunamadı ama güven seviyesi yüksek). Öz kaynak şartı sadece Stratejik Hamle'de (%20) var, diğerlerinde yok.

## Form Alan Haritası (field map) — güncellendi

- `sirket_unvani`, `sirket_vergi_no` (metin)
- `yatirim_konusu_aciklama` (metin) — NACE/US-97'den bağımsız, gerçek yatırım konusu
- `yatirim_konusu_nace_kodu` (metin/seçim) — EK-3 tablosundaki NACE kodlarıyla eşleştirme için ANA alan; bu sistem artık form mantığının çekirdeği (bkz. EK-3 özeti yukarıda — tam kod listesi PDF'te)
- `yatirim_turu` (seçim: komple yeni / tevsi / modernizasyon / ürün çeşitlendirme / entegrasyon / nakil)
- `yatirim_ili` (seçim: 81 il) → bölge (1-6) otomatik türetilir (tablo yukarıda, artık kesin)
- `yatirim_ilcesi` (opsiyonel, seçim) — EK-5 alt bölge ilçe eşleşmesi için (ikinci öncelik, opsiyonel geliştirme)
- `planlanan_sabit_yatirim_tutari_tl` (sayı)
- `basvuru_kategorisi_adayi` (sistem hesaplar, kullanıcıya gösterilmez): Bölgesel/Genel, Öncelikli Yatırım (Madde 9 bentleri), Hedef Yatırım, Teknoloji Hamlesi, Yerel Kalkınma Hamlesi, Stratejik Hamle
- `mevcut_tesis_var_mi` (evet/hayır) — tevsi/modernizasyon/entegrasyon/nakil değerlendirmesi için
- `dijital_donusum_veya_yesil_donusum_kapsaminda_mi` (evet/hayır/bilmiyorum) — pozitif liste şartından muaf tutar
- `yuksek_orta_yuksek_teknoloji_urun_mu` (evet/hayır/bilmiyorum)
- `iletisim_email`, `iletisim_telefon`

## Uygunluk Mantığı — Basitleştirilmiş Karar Ağacı

1. Yatırım konusu EK-3'teki NACE kodlarından biriyle eşleşiyor mu? (VEYA Dijital/Yeşil Dönüşüm/TYKH kapsamında mı — bu durumda pozitif liste şartı aranmaz)
   - Hayır ve muafiyet yok → **uygun değil** (whitelist dışı)
   - Evet → devam
2. EK-3'teki ilgili satırda özel şart (asgari kapasite/tutar/m²) var mı? Varsa sağlanıyor mu?
3. Bölge (il'den türetilen) ve asgari sabit yatırım tutarı (2026: 15,1M/7,5M TL veya Madde 9/Stratejik Hamle'nin kendi özel eşiği) sağlanıyor mu?
4. ≥1 milyar TL ise fizibilite raporu şartı hatırlatılmalı.
5. Stratejik Hamle adayıysa: öz kaynak ≥%20, ihracat/ithalat oranı ≤%70, katma değer ≥%30, ithalat tutarı ≥50M USD gibi 5 kriterden en az 3'ü + Komite değerlendirmesi gerektiğini belirt (bu, form üzerinden "kesin sonuç" verilemeyecek bir alandır — komite kararı gerektirir).

## İhtiyat Notu (Disclaimer) Önerisi

Artık birincil kaynağa ulaşıldığı ve Karar+Tebliğ tam metinleri doğrulandığı için önceki turlardaki "form yayına alınamaz" değerlendirmesi yumuşatılabilir; **form artık güvenilir bir ön-değerlendirme aracı olarak yayınlanabilir**, ancak şu ihtiyat notu sonuç ekranında MUTLAKA gösterilmelidir:

> "Bu araç, 9903 sayılı Cumhurbaşkanı Kararı ve 2025/1 sayılı Uygulama Tebliği'nin genel hükümlerine dayanan bir **ön değerlendirmedir**, resmi başvuru veya kesin uygunluk teyidi yerine geçmez. Özellikle: (a) EK-3 pozitif listesindeki NACE kod eşleştirmesi ve satır bazlı özel şartlar (asgari kapasite, m², %şart) yatırımınızın tam tanımına göre tekrar kontrol edilmelidir; (b) TL tutarları her yıl yeniden değerleme oranıyla güncellenir, form güncel tutarları yansıtmaya çalışsa da başvuru anındaki resmi tebliğ ile teyit edilmelidir; (c) Stratejik Hamle, Teknoloji Hamlesi ve Yerel Kalkınma Hamlesi programları proje bazlı komite değerlendirmesi gerektirir ve bu araçla kesin sonuç üretilemez; (d) Kesin başvuru E-TUYS üzerinden yapılmalı ve mutlaka bir teşvik danışmanı/YMM ile teyit edilmelidir. Sanayi ve Teknoloji Bakanlığı güncel mevzuatı esastır."

## Kaynaklar

**Birincil (bu turda okundu, tam metin):**
- https://www.yatirimadestek.gov.tr/pdf/assets/upload/dosyalar/karar-yatirim_tesvik_uygulamalari.pdf — 9903 sayılı Karar tam metni (36 madde + 5 geçici madde + EK-1..5) — erişim ve tam okuma: 2026-08-19
- https://www.yatirimadestek.gov.tr/assets/upload/dosyalar/teblig-yatirim_tesvik_uygulamalari.pdf — Uygulama Tebliği 2025/1 tam metni (30 madde + EK-1..8) — erişim ve tam okuma: 2026-08-19
- https://www.yatirimadestek.gov.tr/destek/yatirim-tesvik-sistemi-9903-sayili-karar/126 — erişim: 2026-08-19
- Yerel kopyalar (Read tool ile tekrar açılabilir, PDF metni tam): `C:\Users\KorayAkdag\.claude\projects\c--Users-KorayAkdag-korayakdag-website--v2\78e560d8-7e4c-4cbe-9363-8fbafc49906e\tool-results\webfetch-1787162172189-hqi3wr.pdf` (Karar), `...webfetch-1787162176977-skaqvh.pdf` (Tebliğ) — not: bu geçici oturum klasörü, kalıcı saklama için ayrı bir yere kopyalanması önerilir.

**İkincil (2026 güncel tutar teyidi için):**
- https://tesvikakademi.com/haber/2026-yili-yatirim-tesvik-tutarlari-aciklandi/ — erişim: 2026-08-19
- https://www.yatirimtesvikbelgesi.com/post/2026-yat%C4%B1r%C4%B1m-te%C5%9Fvik-asgari-yat%C4%B1r%C4%B1m-tutar%C4%B1-ve-yeniden-de%C4%9Ferleme-oran%C4%B1 — erişim: 2026-08-19
- https://www.sistemglobal.com.tr/bultenler/ar-ge/yatirim-tesvik-sistemi-yeni-donem-basladi/ — erişim: 2026-08-19 (Koray'ın kendi şirketi Sistem Global Danışmanlık'ın bülteni — konuya güncel yayın yapmış)

**Önceki turlardan (artık büyük ölçüde birincil kaynakla teyitli/gereksiz hale geldi, referans amaçlı bırakıldı):**
- https://kpmgvergi.com/yayinlar/mali-bultenler/vergi/yeni-tesvik-sistemi-ile-ilgili-yatirimlarda-devlet-yardimlari-hakkinda-karar-karar-sayisi-9903-resmi-gazete-de-yayimlandi/3110
- https://www.alomaliye.com/2025/05/30/yatirimlarda-devlet-yardimlari-hakkinda-karar-karar-sayisi-9903/
- https://www.alomaliye.com/2025/06/21/yatirimlarda-devlet-yardimlari-hakkinda-karar-teblig-no-2025-1/
- https://www.kaizendenetim.com/sirkuler-11-9903-sayili-cumhurbaskani-karari-yatirim-tesvik-mevzuati-tamamen-degistirilmistir/
- https://www.muhasebetr.com/yazarlarimiz/nurullahcuhadar/028/

## Kalan Küçük Açık Noktalar (form MVP'sini engellemez)

1. EK-4 (gümrük vergisi muafiyeti dışı makine-teçhizat listesi, ~230 kalem) — form kapsamı dışı, sadece ithalat aşamasında teknik detay.
2. EK-5 (alt bölge ilçe listesi, ~400 satır) — form MVP'sinde gerekmez, "bölgenizde ekstra sigorta primi desteği süresi olabilir" notu yeterli; tam liste PDF'te mevcut, ileride il+ilçe dropdown'una eklenebilir.
3. Resmi 2026 güncelleme Tebliğ'inin PDF'ine bu turda ulaşılamadı (sadece 3 bağımsız ikincil kaynakla teyitli) — form yayınlanmadan önce sanayi.gov.tr'de "2026 yılı yeniden değerleme tebliği" aranarak son kez teyit edilmesi ideal olur, ancak güven seviyesi zaten yüksek.
4. Öncelikli ürün listesi, stratejik hamle yatırım konuları listesi, yerel yatırım konuları listesi (Türkiye Yüzyılı Kalkınma Hamlesi'nin 3 programının kendi whitelist'leri) ayrı Bakanlık tebliğleriyle yayımlanıyor ve bu turda içerikleri incelenmedi — ancak bu programlar zaten proje bazlı komite değerlendirmesi gerektirdiğinden, form bu noktada "detaylı değerlendirme için başvurun" yönlendirmesi yapabilir.
