"use client";

import { Fragment, useState, type ReactNode } from "react";
import data from "@/lib/destek-rehberi-data.json";
import ContactCtaButton from "@/components/ContactCtaButton";
import "./DestekRehberi.css";

type Durum = "acik" | "surekli" | "kapali" | "yok";

interface Program {
  ad: string;
  durum: Durum;
  kapak: string;
  sonTarih?: string;
  ozet?: string;
  amac?: string;
  kimler?: string[];
  sartlar?: string[];
  destekOrani?: string[];
  odemeSekli?: string[];
  kalemler?: string[];
  hesaplamalar?: string[];
  ornekler?: string[];
  uygunOlmayanlar?: string[];
  ornekNotlari?: string[];
  faydalar?: string[];
  basvuru?: string;
  kaynaklar?: string[];
  dogrulama?: string;
  extra?: ReactNode;
  acik0?: boolean;
}

interface Tablo {
  basliklar: string[];
  satirlar: string[][];
}

const kar = [
  ["Nedir?", "Şirketin kendi bünyesinde kurduğu Ar-Ge birimine verilen resmi statü (5746 sayılı Kanun).", "Şirketin kendi bünyesinde kurduğu ürün, endüstriyel ve grafik tasarım birimine verilen resmi statü (5746 sayılı Kanun). Ar-Ge Merkezi'nden ayrı bir belgedir.", "Üniversite yakınındaki teknoloji bölgesinde ofis kiralayarak çalışmak (4691 sayılı Kanun).", "Yeni girişimler için kuluçka merkezi: ofis, mentorluk, eğitim."],
  ["Kimlere uygun?", "Ar-Ge ekibi kalabalık orta ve büyük şirketler.", "Tasarım ekibi olan şirketler: ürün, endüstriyel veya grafik tasarım yapanlar.", "Ar-Ge, yazılım veya tasarım yapan her ölçekte şirket.", "Yeni kurulan veya kurulacak teknoloji girişimleri."],
  ["Başvuru şartları", "15 tam zamanlı eşdeğer Ar-Ge personeli (bazı sektörlerde 30). Ar-Ge alanı diğer birimlerden fiziksel olarak ayrılmış olmalı. Merkez içinde sınai bilgi birikimi ve Ar-Ge çalışması yapılmalı.", "10 tam zamanlı eşdeğer tasarım personeli. Tasarım alanı diğer birimlerden fiziksel olarak ayrılmış, bağımsız bir birim olmalı. Kartlı veya biyometrik giriş-çıkış izlemesi gerekir.", "Personel eşiği yok. Faaliyetin Ar-Ge, yazılım geliştirme, tasarım veya yenilik olması gerekir. Şirket ölçeği sınırı yok, büyük firmalar da girebilir.", "Yaş ve kuruluş şartı yok. Teknoloji veya yenilik odaklı fikir yeterli. Kabul, TEKMER'in kontenjanına ve kurulunun değerlendirmesine bağlı."],
  ["Kim onaylar?", "Sanayi ve Teknoloji Bakanlığı (belge ve yerinde inceleme).", "Sanayi ve Teknoloji Bakanlığı (belge incelemesi).", "Teknoparkın yönetici şirketi (proje değerlendirme komisyonu).", "Seçilen TEKMER'in kendi kurulu."],
  ["Başvuru", "Bakanlığa belge ile elektronik başvuru. Ardından yerinde inceleme heyeti merkezi görür.", "Bakanlığa elektronik başvuru, belge listesi ile birlikte.", "Yönetici şirkete proje bazlı başvuru. Kabul sonrası ofis tahsisi ve sözleşme.", "Doğrudan KOSGEB'e değil, seçilen TEKMER'e. Kabul takvimi kontenjana bağlı."],
  ["Vergi mantığı", "Harcamaya bağlı: Ar-Ge harcaması zaten gider yazılır, üstüne aynı tutarın %100'ü indirim olarak da matrahtan düşülür. Ar-Ge harcaması yüksek şirkete uyar.", "Harcamaya bağlı: Tasarım harcaması zaten gider yazılır, üstüne aynı tutarın %100'ü indirim olarak da matrahtan düşülür. Tasarım harcaması yüksek şirkete uyar.", "Kazanca bağlı: Bölgedeki yazılım, Ar-Ge ve tasarım kazancı vergi dışı kalır, harcama indirimi yoktur. Kârlı ürün veya hizmet satan şirkete uyar.", "Vergi teşviki yoktur."],
  ["Avantajlar ve şirkete somut faydası", "Vergi indirimi: Merkezde yapılan Ar-Ge harcamalarının tamamı (%100) kurumlar vergisi matrahından düşülür, şirket daha az vergi öder.\nSigorta primi desteği: Ar-Ge personelinin maaşından hesaplanan SGK işveren hissesinin %50'sini Hazine öder, personel maliyeti düşer.\nGelir vergisi stopajı teşviki: Doktora mezunlarında %95, yüksek lisans mezunlarında %90, temel bilimler yüksek lisans mezunlarında %95, temel bilimler lisans mezunlarında %90, diğer çalışanlarda %80 oranında stopaj alınmaz. Çalışanın eline geçen maaş artar, şirket aynı net maaş için daha az brüt öder.\nDamga vergisi istisnası: Merkez faaliyetleri için düzenlenen kâğıtlardan damga vergisi alınmaz.\nGümrük vergisi istisnası: Projelerde kullanılmak üzere ithal edilen eşyalardan gümrük vergisi, ilgili kâğıt ve işlemlerden damga vergisi ve harç alınmaz.\nNitelikli çalışan desteği (yalnızca Ar-Ge Merkezi): Desteklenecek program alanlarında en az lisans derecesine sahip Ar-Ge personeli için brüt asgari ücret tutarı 2 yıl boyunca Bakanlık bütçesinden karşılanır (merkezdeki Ar-Ge personelinin %10'u sınırıyla).\nKDV istisnası: Merkez faaliyetleri için alınan yeni makine ve teçhizat KDV'den muaftır, yatırım maliyeti %20 düşer.", "Ar-Ge Merkezi ile aynı teşvikler geçerlidir, tek fark nitelikli çalışan desteğinin olmamasıdır.\nVergi indirimi: Tasarım harcamalarının tamamı (%100) kurumlar vergisi matrahından düşülür, şirket daha az vergi öder.\nSigorta primi desteği: Tasarım personelinin SGK işveren hissesinin %50'sini Hazine öder, personel maliyeti düşer.\nGelir vergisi stopajı teşviki: Doktora %95, yüksek lisans %90, temel bilimler yüksek lisans %95, temel bilimler lisans %90, diğer çalışanlar %80 oranında. Çalışanın net maaşı artar veya şirketin brüt maliyeti düşer.\nDamga vergisi istisnası: Merkez faaliyetleri için düzenlenen kâğıtlardan damga vergisi alınmaz.\nGümrük vergisi istisnası: Projelerde kullanılmak üzere ithal edilen eşyalardan gümrük vergisi, ilgili kâğıt ve işlemlerden damga vergisi ve harç alınmaz.\nKDV istisnası: Merkez faaliyetleri için alınan yeni makine ve teçhizat KDV'den muaftır.", "Gelir ve kurumlar vergisi istisnası: Bölgedeki yazılım, Ar-Ge ve tasarım faaliyetinden elde edilen kazanç vergi dışı kalır, vergi yükü doğrudan düşer.\nKDV istisnası: Uygun yazılım ve Ar-Ge teslim ve hizmetlerinde KDV'siz fatura kesilir. Şirketin tüm cirosuna otomatik uygulanmaz, gelirin faaliyet türüne bakılır.\nGelir vergisi stopajı desteği: Ar-Ge, tasarım ve destek personelinin ücretinde stopaj terkin edilir (destek personeli sınırı: toplam personelin %10'u). Net maaş artar veya brüt maliyet düşer.\nSGK işveren desteği: Uygun personelin SGK işveren hissesi için destek sağlanır, personel maliyeti düşer.\nDamga vergisi istisnası: Bölgedeki faaliyet kâğıtlarından damga vergisi alınmaz.\nİstisnalar ve destekler 31.12.2028 tarihine kadar geçerlidir.", "Ofis ve ortak alan: Düşük maliyetli çalışma alanı sağlanır, erken aşamada sabit gider düşer.\nMentorluk ve eğitim: Ürün, pazar ve iş modeli konusunda destek alınır, ürün-pazar uyumu hızlanır.\nYatırımcı ve ekosistem bağlantısı: Yatırımcı, müşteri ve diğer girişimlerle tanışma imkânı sağlanır.\nSonraki destek basamağı: KOSGEB Ar-Ge, İnovasyon ve Girişimci destek programlarına geçişi kolaylaştırır.\nVergi ve SGK avantajı yoktur: Bunlar için Ar-Ge Merkezi veya Teknopark statüsüne geçilmesi gerekir. KOSGEB'in TEKMER'e verdiği destek de şirkete değil, TEKMER'i işleten kuruma ödenir."],
  ["Dikkat", "Aynı faaliyet ve personel için Teknopark ile birlikte kullanılamaz. Stopaj ve damga vergisi istisnasının toplamı brüt asgari ücretin 40 katı ile sınırlıdır (01.08.2025'ten itibaren).", "Ar-Ge Merkezi ile birlikte kurulabilir ama personel çakıştırılamaz. Aynı faaliyet için Teknopark ile birlikte kullanılamaz.", "Aynı faaliyet ve personel için Ar-Ge veya Tasarım Merkezi ile birlikte kullanılamaz. Farklı birim ve faaliyetler için ayrı ayrı kullanılabilir.", "Diğerlerini dışlamaz, tamamlayıcı olarak kullanılabilir."],
];

const ALL = "Tüm sektörler";
const hizmet: [string, string[][]][] = [
 ["Hukuk",[
  ["Dava, İcra ve İflas","Alacak tahsili, davalarda temsil, konkordato ve iflas süreçleri.","Alacağı olan veya dava riski taşıyan her şirket.","Ticaret, inşaat, üretim, lojistik"],
  ["Arabuluculuk","Mahkemeye gitmeden anlaşma yolu. Ticari ve iş uyuşmazlıklarında dava öncesi zorunlu adım.","Ticari veya işçi uyuşmazlığı yaşayan şirketler.",ALL],
  ["KVKK","Kişisel verilerin yasaya uygun tutulması: envanter, aydınlatma metni, VERBİS kaydı.","Müşteri veya çalışan verisi tutan tüm şirketler.","E-ticaret, sağlık, eğitim, yazılım, perakende"],
  ["Sözleşme, İş ve Şirketler Hukuku","Sözleşme hazırlama ve inceleme, iş hukuku, şirket kuruluşu ve tür değişikliği (limitedden anonime geçiş gibi).","Büyüyen, ortaklık yapısı değişen veya çalışanı olan şirketler.",ALL],
  ["Aile Anayasası","Aile şirketinde kimin hangi rolü üstleneceğini, karar alma, kâr dağıtımı, pay devri ve ailenin şirketteki çalışma kurallarını yazılı hale getiren düzen. Kuşak geçişi ve miras sırasında çıkabilecek anlaşmazlıkları önceden önler.","Birden fazla aile ortağı olan, yönetimi sonraki kuşağa devretmeyi planlayan aile şirketleri.",ALL],
  ["Halka Arz","Şirket paylarının Borsa İstanbul'da yatırımcıya satışa açılması. Büyüme için sermaye sağlar, şirkete görünürlük ve kurumsal itibar kazandırır. Hazırlıkta şirket yapısı, finansal tablolar, bağımsız denetim ve izin süreci birlikte yönetilir.","Büyüme finansmanı arayan, kurumsal yapısı oturmuş orta ve büyük ölçekli şirketler.","Üretim, enerji, perakende, teknoloji, holding"],
  ["M&A (Birleşme ve Bölünme)","İki veya daha fazla şirketin tek çatı altında birleşmesi ya da bir şirketin faaliyetlerine göre birden fazla şirkete bölünmesi. Büyümek, pazar payı kazanmak, maliyetleri düşürmek, grup yapısını sadeleştirmek veya farklı işleri ayırmak için yapılır. Hukuki, mali ve vergisel planlamayı birlikte gerektirir.","Başka bir şirketi satın almayı, birleşmeyi veya grup yapısını yeniden düzenlemeyi planlayan şirketler.",ALL],
  ["Due Diligence","Alıcının veya yatırımcının, satın alma ya da yatırım kararından önce şirketi hukuki, mali ve vergisel açıdan incelemesi. Gizli borç, dava, sözleşme ve vergi riskleri işlemden önce ortaya çıkar, fiyat ve şartlar buna göre belirlenir. Satan taraf için de eksiklerin önceden görülmesini sağlar.","Şirket satın alacak veya satacak, yatırım alacak veya verecek taraflar.",ALL]
 ]],
 ["Vergi, Denetim ve YMM Hizmetleri",[
  ["Vergi İnceleme ve Süreç Danışmanlığı","Vergi incelemesi sırasında şirketin temsil edilmesi, istenen belge ve bilgilerin hazırlanması, tarhiyat sonrasında uzlaşma, itiraz ve dava süreçlerinin yönetilmesi. İnceleme gelmeden riskin tespiti ile yurt içi ve uluslararası vergi planlamasını da kapsar.","Vergi incelemesine alınan, ceza ihbarnamesi alan veya inceleme riski taşıyan şirketler.",ALL],
  ["Tam Tasdik","Yeminli Mali Müşavirin yıllık beyannamelerin doğruluğunu onaylaması. Vergi incelemesi riskini düşürür.","Düzenli ve güvenli vergi uyumu isteyen şirketler.",ALL],
  ["KDV İade","Devreden KDV'nin nakit olarak geri alınması.","İhracat yapan, yatırım yapan, indirimli KDV oranı nedeniyle KDV'si birikenler.","İhracatçı imalat, tekstil, gıda, inşaat, enerji"],
  ["Bağımsız Denetim","Finansal tabloların bağımsız denetçi tarafından doğrulanması. Belirli büyüklük eşiğini aşanlar için zorunlu, diğerlerinde güven yaratır.","Eşiği aşan şirketler, kredi veya yatırımcı arayanlar.","Üretim, holding, enerji, perakende"]
 ]],
 ["Uluslararası Büyüme ve Kalkınma",[
  ["Yurt Dışında Şirket Kurma","Hedef ülkede şirket kuruluşu: ülke seçimi, tescil, banka ve vergi kaydı. Kurduğumuz ülkeler tablonun altında.","Yurt dışı müşteri, ofis veya depo isteyen şirketler.","İhracatçılar, yazılım, e-ticaret, ticaret"],
  ["Yurt Dışı Pazar Araştırması","Hedef ülkede talep, rakip, fiyat ve giriş yolu analizi.","İhracata yeni başlayan veya yeni pazara açılan şirketler.","Üretim, gıda, makine, tekstil, yazılım"],
  ["Uluslararası Kredi ve Fon Danışmanlığı","Yurt dışı kaynaklı kredi, fon ve yatırım finansmanı bulma, başvuruyu hazırlama.","Büyük yatırımı veya finansman ihtiyacı olan şirketler.","Enerji, altyapı, üretim, tarım"]
 ]],
 ["Marka ve Patent",[
  ["Marka","Ticari adın, logonun ve ürün isminin Türkiye'de ve yurt dışında tescil ettirilmesi. Yurt dışı başvuru, tek başvuruyla birden fazla ülkeyi kapsayan uluslararası sistemle (Madrid Protokolü) ya da ülke ülke yapılabilir. Tescil, markanın başkaları tarafından kullanılmasını engeller.","Kendi markası olan, yeni marka çıkaran, ihracat yapan veya franchise vermeyi planlayan şirketler.","Gıda, tekstil, kozmetik, yazılım, e-ticaret, perakende"],
  ["Patent ve Faydalı Model","Yeni ve sanayiye uygulanabilir bir buluşun koruma altına alınması. Patent daha kapsamlı ve uzun süreli korumadır (20 yıl). Faydalı model daha basit teknik yenilikler için daha hızlı ve düşük maliyetli bir yoldur (10 yıl).","Kendi ürününü, yöntemini veya makinesini geliştiren, Ar-Ge yapan şirketler ve girişimciler.","Makine, otomotiv, savunma, medikal, kimya, yazılım"],
  ["Tasarım","Bir ürünün şekli, çizgisi, rengi, dokusu veya ambalajı gibi dış görünümünün tescil edilmesi. Ürünün görünüşünün kopyalanmasını engeller.","Özgün görünümlü ürün, mobilya, ambalaj, aksesuar veya moda ürünü üreten şirketler.","Tekstil, mobilya, ev eşyası, ambalaj, kozmetik, otomotiv yan sanayi"],
  ["Telif Hakları","Yazılım, yazı, müzik, fotoğraf, video, grafik gibi özgün eserlerin hak sahipliğinin belgelenmesi ve korunması. Hak eser yaratıldığı anda doğar, kayıt hak sahipliğini ispatı kolaylaştırır. Eser devri ve lisans sözleşmeleri de bu kapsamdadır.","Yazılım, içerik, tasarım veya yayın üreten şirketler ve girişimciler.","Yazılım, medya, reklam, eğitim, oyun, moda"]
 ]],
 ["Kurumsal Finans ve Değerleme",[
  ["Şirket Değerleme","Şirketin gerçek piyasa değerinin hesaplanması. Satış, ortak alımı, birleşme (M&A), yatırımcı görüşmesi ve due diligence öncesi kullanılır.","Ortak alacak veya satacak, yatırım arayan, birleşme düşünen şirketler.",ALL],
  ["Marka Değerleme","Markanın parasal değerinin hesaplanması. Marka satışı, lisans verme, franchise, ortaklık ve yatırımcı görüşmelerinde ve markanın bilançoya yansıtılmasında kullanılır.","Güçlü markası olan, marka devri, lisanslama veya yatırım planlayan şirketler.","Perakende, gıda, tekstil, yazılım, franchise"],
  ["M&A Yatırımcı Hazırlığı","Şirketi satışa veya yatırıma hazırlama çalışması. Finansal tabloların düzenlenmesi, şirket tanıtım dosyası, değerleme ve veri odası hazırlığı yapılır. Yatırımcının sorularına ve due diligence incelemesine önceden hazır olunur, daha iyi fiyat ve hızlı kapanış sağlar.","Şirketini satmak, ortak almak veya yatırım turu yapmak isteyen sahipler.",ALL],
  ["GSYF ve GSYO Değerleme","Girişim Sermayesi Yatırım Fonu (GSYF) ve Girişim Sermayesi Yatırım Ortaklığı (GSYO) kapsamında yatırım yapılacak girişimin ve fon portföyündeki payların değerinin belirlenmesi. Yatırım kararı, giriş fiyatı ve çıkış değeri bu hesaba dayanır.","Girişim sermayesi fonundan yatırım almayı veya fon kurmayı düşünen girişimler ve yatırımcılar.","Teknoloji, yazılım, sağlık, enerji, e-ticaret"]
 ]],
 ["Süreç ve RPA Çözümleri",[
  ["RPA (Süreç Robotları)","Yazılım robotlarının tekrarlayan işleri insan yerine yapması: fatura girişi, rapor hazırlama, veri aktarımı gibi. Zaman kazandırır, hatayı azaltır.","Her gün tekrarlayan evrak ve veri işi yapan, ekibi bu işlere zaman harcayan şirketler.","Finans, muhasebe, lojistik, perakende, sigorta, üretim"],
  ["Kurumsallaşma Check-Up","Yönetim, süreç, finans ve hukuk açısından şirketin kısa muayenesi. Eksikler ve öncelikler raporlanır.","Büyüyen ve sahibine bağlı çalışan aile şirketleri.",ALL]
 ]],
 ["Sürdürülebilirlik",[
  ["Sürdürülebilirlik Raporu","Şirketin çevresel, sosyal ve yönetişim performansının ilgili standartlara (TSRS gibi) göre raporlanması. Zorunlu şirketler için uyum sağlar, diğerleri için banka, yatırımcı ve büyük müşteriler nezdinde güven yaratır.","Raporlama kapsamındaki şirketler ve büyük müşterilere veya AB'ye tedarik yapanlar.","Üretim, holding, enerji, gıda, tekstil, otomotiv"],
  ["Ölçüm Hizmetleri","Karbon ayak izi (faaliyetlerden doğan emisyon), su ayak izi (toplam su tüketimi) ve sera gazı emisyonlarının ölçülmesi. Ölçüm, azaltım hedefi koymanın ve AB karbon sınır düzenlemesine hazırlanmanın ilk adımıdır.","AB'ye ihracat yapan, enerji ve su yoğun üretim yapan şirketler.","Çelik, alüminyum, çimento, gübre, tekstil, otomotiv"],
  ["Sürdürülebilirlik Eğitim Hizmeti","Yönetici ve çalışanlara sürdürülebilirlik, iklim riski, karbon yönetimi ve raporlama konularında verilen eğitim. Şirket içinde bilgi oluşturur ve raporlama sürecini kolaylaştırır.","Raporlamaya hazırlanan veya ekibini bu alanda yetiştirmek isteyen şirketler.",ALL]
 ]],
 ["SGK ve Bordro",[
  ["SGK Teşvikleri","İşe alımda SGK prim yükünü azaltan teşviklerin tespiti ve uygulanması.","Çalışan sayısı yüksek veya işe alım planlayan şirketler.","Üretim, tekstil, hizmet, inşaat, turizm"],
  ["Bordro Hizmeti","Aylık maaş, SGK bildirimleri ve çalışan kayıtlarının yönetimi.","Çalışanı olan ama içeride bordro ekibi kurmak istemeyen şirketler.",ALL],
  ["Fesih, İhbar ve Kıdem Mevzuatı","İş sözleşmesi sona ererken ihbar ve kıdem tazminatı gibi işçilik alacaklarının doğru hesaplanması, fesih sürecinin mevzuata uygun yönetilmesi ve işçi alacağı uyuşmazlıklarında riskin azaltılması.","Çalışan çıkışı yapacak, toplu işten çıkarma planlayan veya işçi alacağı riski taşıyan şirketler.",ALL]
 ]],
 ["Gayrimenkul ve Proje Yatırım Fonları",[
  ["GYF (Gayrimenkul Yatırım Fonu)","Gayrimenkul ve gayrimenkule dayalı projelere yatırım yapmak üzere yatırımcılardan fon toplayan, SPK düzenlemesine tabi yapı. Portföy yönetim şirketi tarafından yönetilir. Gayrimenkul sahibine büyüme, yatırımcıya doğrudan gayrimenkul almadan yatırım imkânı verir.","Gayrimenkul portföyünü büyütmek veya finanse etmek isteyen şirketler ve yatırımcılar.","Gayrimenkul, inşaat, turizm, lojistik"],
  ["PYF (Proje Yatırım Fonu)","Belirli bir projenin finansmanı için kurulan fon. Toplanan para yalnızca o projede kullanılır, proje bitince fon sona erer. Büyük projelerde bankaya bağımlılığı azaltır ve projeyi çok sayıda yatırımcıyla finanse etmeyi sağlar.","Gayrimenkul, enerji veya altyapı projesi geliştirip ortak yatırımcı arayanlar.","Gayrimenkul, inşaat, enerji, altyapı"]
 ]]
];
const ulkeler: string[] = ["Polonya","İtalya","Almanya","İngiltere","Hollanda","Birleşik Arap Emirlikleri (Dubai)","Suudi Arabistan","ABD","Singapur","Azerbaycan","Kazakistan","Özbekistan","Bulgaristan","Letonya","Litvanya","Yunanistan"];
const eslesme: [string, string][] = [
 ["İhracat yapan imalatçı","KDV İade, Ticaret Bakanlığı destekleri, Yurt dışı marka tescili, Sürdürülebilirlik (AB karbon vergisi)"],
 ["Yeni fabrika veya tesis yatırımı yapacak şirket","Yatırım Teşvik Belgesi, SGK Teşvikleri, Uluslararası kredi ve fon"],
 ["Yazılım veya teknoloji girişimi","TÜBİTAK 1507 / 1501, Teknopark, KOSGEB TEKMER, Marka ve Patent"],
 ["Çalışan sayısı yüksek KOBİ","SGK Teşvikleri, Bordro, İstihdamı Koruma, Kurumsallaşma Check-Up"],
 ["Yurt dışına açılmak isteyen şirket","Pazar araştırması, Yurt dışında şirket kurma, Ticaret Bakanlığı destekleri, Uluslararası vergi"],
 ["Büyüyen aile şirketi","Kurumsallaşma Check-Up, Tam Tasdik veya Bağımsız Denetim, Vergi, Aile anayasası"],
 ["Gayrimenkul veya proje geliştirici","GYF ve PYF, Uluslararası kredi ve fon, Yatırım Teşvik, Hukuk"],
 ["E-ticaret veya perakende","KVKK, Marka tescili, E-ihracat desteği, Bordro"],
 ["Alacak veya uyuşmazlık sorunu olan şirket","Dava, İcra ve İflas, Arabuluculuk, Sözleşme hukuku"]
];

// [ürün, link, ne işe yarar, öne çıkanlar, kimlere uygun]
type Urun = [string, string, string, string, string];
const urunler: [string, string, Urun[]][] = [
 ["Online Danışmanlık ve Eğitim Platformu","Danışman ve eğitimi tek platformda toplayan çözüm.",[
  ["eDanışman","https://www.edanisman.com/","Şirket kuruluşundan işin korunmasına kadar süreçleri tek platformdan takip ettiren iş yönetimi platformu. Bir servis seçildiğinde süreç adımları ve gerekli belgeler netleşir, işlem uzmanların desteğiyle yürür. Kısa bir birebir görüşmeyle hedef netleştirilebilir ve hukuk, muhasebe gibi alanlarda uzmanla randevu alınabilir.","Süreç ve belge takibi. Uzmanla birebir görüşme (30 dakikalık hızlı çözüm oturumu dahil). Rehber, şablon ve kontrol listesi kütüphanesi. Danışmanlarla mesajlaşma ve bildirimler. Şirket kuruluşu (Türkiye, ABD, İngiltere), KOSGEB destekleri, yatırım teşvik belgesi, teknopark, marka tescili ve muhasebe servisleri.","Şirket kuracak veya işini büyütmek isteyen girişimciler, işletme sahipleri ve ekipler."],
  ["eDanışman Akademi","https://akademi.edanisman.com/","eDanışman'ın online eğitim kolu. İhracat desteği, yatırım teşviki, Ar-Ge, vergi ve finans gibi alanlarda uzman eğitmenlerden online eğitim alınır. Her eğitimin birebir uzman görüşmesi paketi de vardır.","Eğitimler konu kategorilerine ayrılır. Her eğitim için birebir uzman görüşmesi paketi alınabilir. Kategoriler ve paketler tablonun altında.","Destek başvurusunu ve dış ticaret işlerini kendi ekibiyle yürütmek isteyen şirketler ve yöneticiler."]
 ]],
 ["Ar-Ge ve Fikri Mülkiyet","Teknoloji yönetimi ve fikri mülkiyet çözümleri.",[
  ["Argesa","https://www.sistemglobal.com.tr/dijital-urunler/ar-ge-ve-fikri-mulkiyet/argesa","TÜBİTAK Ar-Ge proje raporlarını yapay zekâ ile analiz eden değerlendirme yazılımı. Rapor başvurudan önce incelenir, başarı potansiyeli ve eksik alanlar saptanır.","TÜBİTAK kriterlerine göre analiz. Güçlü ve zayıf yönlerin gösterilmesi. Başvuru diline uygun öneriler. Saatler süren manuel incelemenin dakikalara inmesi. İsteğe bağlı olarak Sistem Global uzmanlarıyla birebir gözden geçirme.","TÜBİTAK Ar-Ge desteğine başvuracak girişimciler ve proje sahipleri, çok sayıda proje yöneten kurumlar."],
  ["HaaS","https://haas-portal.com/?utm_source=sistemglobal","Hibe ve teşvik başvurularını tek panelden yönetmeye yarayan platform. Doğru programa hızlı ulaşmayı, evrak akışını standartlaştırmayı ve süreci ölçülebilir takip etmeyi sağlar.","Program eşleştirme. Başvuru türüne göre belge kontrol listesi ve eksik belge takibi. Mevzuat ve çağrı değişikliği takibi. Yüklenen belgelerin uzman tarafından incelenmesi. Yapay zekâ destekli chatbot ve teşvik mühendisi desteği. Basic, Standart ve Premium paketler.","Küçük işletmelerden kurumsal şirketlere kadar hibe ve teşvik başvurusu yöneten operasyon ekipleri ve yöneticiler."],
  ["Sparks","https://www.sistemglobal.com.tr/dijital-urunler/ar-ge-ve-fikri-mulkiyet/sparks","Çok şubeli ve kalabalık personelli işletmelerin SGK işlemlerini tek ekrandan yönettiği, yapay zekâ destekli kurumsal koordinasyon yazılımı.","Toplu işe giriş ve işten ayrılış bildirgesi. İşe alım öncesi teşvik sorgulama. E-Vizite entegrasyonu ile rapor onayı. Excel ve MUHSGK üzerinden teşvik senaryoları. Toplu hizmet ve tahakkuk listesi. Mevzuat değişikliğine uyum takibi.","Çok sayıda sigortalısı olan şirketler, mali müşavirler ve İK yöneticileri."],
  ["Argera","https://www.sistemglobal.com.tr/dijital-urunler/ar-ge-ve-fikri-mulkiyet/argera","Ar-Ge ve Tasarım Merkezlerinin proje, iş gücü ve bordro süreçlerini tek platformda yöneten yazılım. Faaliyet raporu hazırlamayı hızlandırmayı hedefler.","Bakanlık portalıyla uyumlu veri aktarımı. Proje ve personel zaman takibi. Ar-Ge teşvikine uygun bordro ve mali analiz. Dokümantasyon merkezi. Dashboard ile anlık raporlama. Güncel yönetmeliğe uyum.","Türkiye'deki Ar-Ge ve Tasarım Merkezleri ile bu merkezlerin proje, personel, bordro ve raporlama ekipleri."],
  ["Marqby","https://marqby.com/tr/","Marka, patent, faydalı model, tasarım, telif ve alan adlarını tek yerden yöneten fikri mülkiyet platformu. Başvuru öncesi araştırmadan portföy yönetimine kadar tüm süreci kapsar.","Başvuru öncesi benzer hak araması. Yurt içi ve yurt dışı tescil, uzman desteğiyle. Hak süresi ve yenileme takibi. Varlık, belge, maliyet ve sözleşme için merkezi kayıt. Rakip ve pazar izleme. Çok ülkeli koruma.","Fikri varlıklarını düzenlemek isteyen girişimler, çok ülkeli portföyü olan ölçeklenen ve kurumsal şirketler."]
 ]],
 ["Vergi ve Finans","Finansal süreçler ve vergi yönetimi araçları.",[
  ["FinBind","https://www.finbind.com/?utm_source=sistemglobal","Finansal verileri analiz eden, finansal sağlığı ölçen ve işletmeye uygun finansal çözümleri bulmaya yardım eden, yapay zekâ destekli finansal analiz ve skorlama platformu. Bankaların kredi değerlendirme bakışını analize katar.","Mizan, e-defter, e-fatura ve beyanname yükleme. Nakit akışı, kârlılık ve büyüme tahmini. Trend, oran ve Dupont gibi analizler. Rating ve skor. Skora göre uygun bankacılık ürünlerinin eşleştirilmesi.","Finansal durumunu bir banka gözüyle görmek, kredi ve finansman başvurusuna hazırlanmak isteyen işletmeler."]
 ]],
 ["Muhasebe ve Bordro","Muhasebe, bordro ve insan kaynakları dijital çözümleri.",[
  ["Idenfit","https://www.sistemglobal.com.tr/dijital-urunler/muhasebe-bordro/idenfit","Sistem Global'in yatırımcısı olduğu İK teknolojileri şirketinin, bulut tabanlı insan kaynakları ve iş gücü yönetimi çözümü. İK süreçlerini dijitalleştirir.","Idenfit SMART: dijital özlük, izin, harcama ve avans, zimmet, doküman yönetimi ve bordro görüntüleme. İK Outsource ve Bordro Outsource ile süreçlerin uzman ekiplerce yönetilmesi. Hedef kitle ve paket, süreç analizinden sonra birlikte belirlenir.","İK ve bordro süreçlerini dijitalleştirmek veya dışarıdan yönettirmek isteyen işletmeler."]
 ]],
 ["Mevzuat ve Uyum","Hukuki ve mevzuat uyum teknolojileri.",[
  ["Legalmatic","https://legalmatic.net/?utm_source=sistemglobal","Türk hukukuna odaklı, yapay zekâ destekli hukuk platformu. Hukuki danışmanlık hizmeti vermez, avukat danışmanlığının yerine geçmez.","Yapay zekâ ile sözleşme türünü bulma, form doldurma ve düzenleme. Mevzuat ve içtihat atıflı hukuki sohbet asistanı. Yüklenen sözleşmede risk analizi.","Bireyler, KOBİ'ler ve avukatlar."],
  ["Harmonity","https://www.harmonity.ai/tr?utm_source=sistemglobal","Hukuk için geliştirilmiş, yapay zekâ ve agent destekli platform. Hukuki araştırma, belge hazırlama ve inceleme ile ekip içi iş birliğini tek yerde toplar.","Kaynaklı yanıt veren agent. Kurum standartlarına uygun düzenlenebilir ilk taslak. Riskli ve eksik hükümlerin maddeleriyle birlikte tespiti. Çoklu belge incelemesi: birden fazla sözleşmeyi (örneğin tedarik sözleşmelerini fesih, sorumluluk ve yenileme koşullarına göre) ortak tabloda karşılaştırma. Etkileşimli rapor üretimi. İçtihat araştırması. Belgeler, ekip kararları ve notlar tek çalışma alanında saklanır. Erişim rol bazlıdır. Öneriler kullanıcı onayıyla ilerler, çıktıların yetkin bir hukuk uzmanınca değerlendirilmesi gerekir.","Hukuk ekipleri (talep, belge, inceleme ve onay süreçleri), hukuk büroları, startup ve KOBİ'ler."],
  ["Sicilmatik","https://sicilmatik.com/","Ticaret sicili işlemleri için çevrim içi belge platformu. Sorular yanıtlanır, sistem seçilen işleme uygun belgeleri otomatik hazırlar ve indirilebilir hale getirir. Belgeler, ticaret hukuku uzmanı avukatların ve mali müşavirlerin hazırladığı taslaklara dayanır.","Anonim şirket setleri: eşzamanlı sermaye azaltımı ve artırımı, eşzamanlı sermaye artırımı ve azaltımı, merkez nakli (gelen ve giden), emisyon primli sermaye artırımı. Limited şirket setleri: sermaye artırımı, sermaye azaltımı, adres değişikliği. Belgeler tek tek, karar olarak veya tescil için gerekli set halinde alınabilir. Ücret belgenin niteliğine göre değişir.","Sermaye değişikliği, merkez nakli veya adres değişikliği gibi sicil işlemlerini yapacak anonim ve limited şirketler, ortaklar ve yöneticiler."]
 ]]
];

const edServisler: [string, string][] = [
 ["İşini kur","Türkiye'de şirket kuruluşu, ABD'de şirket kuruluşu, İngiltere'de şirket kuruluşu"],
 ["İşini yönet","FinBind finansal analiz ve skorlama servisi, muhasebe servisi"],
 ["İşini büyüt","KOSGEB destekleri danışmanlık servisleri, Argesa (TÜBİTAK proje raporu analizi), Teknopark danışmanlık servisleri, yatırım teşvik belgesi danışmanlık servisi"],
 ["İşini koru","Sözleşme ve risk yönetim servisi, marka tescili"]
];
const edEgitimler: [string, string][] = [
 ["Ar-Ge","TÜBİTAK 1501 ve 1507 proje hazırlama, Teknopark proje hazırlama, Teknopark teşvikli bordo hesaplama, Ar-Ge ve Tasarım Merkezi faaliyet raporu hazırlama, 5447 sayılı Bilişim Sektörü Destek Programı, akademik yayın ve bildiri yazma, Ar-Ge destekleri ve teşvikleri, Ar-Ge projelerinde proje ve risk yönetimi"],
 ["E-ticaret ve e-ihracat","E-ihracat destekleri, ihracatta müşteri bulma, ihracatta hedef pazar analizi"],
 ["Finans ve muhasebe","Finansal tabloları okuma ve yorumlama, e-defter, finansal sağlık check-up, karlılık yönetimi, finansmana erişim, kredi ve finansman yapıları, yatırım fizibilitesi"],
 ["Girişimcilik","KOSGEB Girişimci Programı, şirket değerleme ve yatırımcıya hazırlık, büyüme ve ölçeklenme stratejileri"],
 ["Hukuk","İş sözleşmesi ve fesih"],
 ["İhracat ve yatırım","Yatırım teşvik sistemi, Dahilde İşleme Rejimi, yapay zekâ ile ihracat, İngiltere'de şirket kurulumu, ihracata hazırlık, yurt dışı şirket kuruluşları, TURQUALITY, uluslararası vergi ve mevzuat"],
 ["İş yönetimi ve liderlik","Proje yönetimi, problem çözme teknikleri, proje yönetimine giriş ve temel yaklaşımlar"],
 ["Marka ve patent","Yazılım haklarının korunması, patent ve fikri mülkiyet stratejileri"],
 ["Sürdürülebilirlik","SKDM (CBAM) kapsamı ve yükümlülükleri, karbon ayak izi hesaplama, TSRS 1 ve TSRS 2 uygulamaları, sürdürülebilirlik raporlaması, ESG farkındalığı, su verimliliği ve su ayak izi, döngüsel ekonomi, iklim riskleri, emisyon ticaret sistemi"],
 ["Teknoloji ve veri","Yapay zekâ okuryazarlığı, yönetici için yapay zekâ, generative AI ile verimlilik, AI agent'lar ve işletmeler, süreç otomasyonu (RPA), veri yönetimi, veri analitiği, siber riskler ve bilgi güvenliği, dijital olgunluk analizi"]
];
const edPaketler: string[] = [
 "Yatırım teşvik sistemi uzmanla görüşme","Teknopark proje hazırlama uzmanla görüşme","Teknopark teşvikli bordo hesaplama uzmanla görüşme","TÜBİTAK 1501 ve 1507 proje hazırlama uzmanla görüşme","Ar-Ge ve Tasarım Merkezi faaliyet raporu uzmanla görüşme","KOSGEB Girişimci Programı uzmanla görüşme","E-ihracat destekleri uzmanla görüşme","İhracatta hedef pazar analizi uzmanla görüşme","İhracatta müşteri bulma uzmanla görüşme","Yapay zekâ ile ihracat uzmanla görüşme","Dahilde İşleme Rejimi uzmanla görüşme","E-defter uzmanla görüşme","İngiltere'de şirket kurulumu uzmanla görüşme","İş sözleşmesi ve fesih uzmanla görüşme","Yazılım haklarının korunması uzmanla görüşme","Proje yönetimi uzmanla görüşme","Problem çözme teknikleri uzmanla görüşme","Akademik yayın ve bildiri yazma uzmanla görüşme"
];

function EdanismanKapsam() {
  return (
    <>
      <h2>eDanışman Kapsamı</h2>
      <p className="blurb">eDanışman bilgileri üç grupta toplanır: Servisler, Eğitimler ve Paketler.</p>
      <h3>Servisler</h3>
      <div className="tw">
        <table>
          <thead>
            <tr>
              <th>Aşama</th>
              <th>Servisler</th>
            </tr>
          </thead>
          <tbody>
            {edServisler.map(([a, s]) => (
              <tr key={a}>
                <td>{a}</td>
                <td>{s}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h3>Eğitimler (eDanışman Akademi)</h3>
      <div className="tw">
        <table>
          <thead>
            <tr>
              <th>Kategori</th>
              <th>Eğitimler</th>
            </tr>
          </thead>
          <tbody>
            {edEgitimler.map(([k, e]) => (
              <tr key={k}>
                <td>{k}</td>
                <td>{e}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h3>Paketler</h3>
      <p className="blurb">Her paket, ilgili konuda uzmanla birebir görüşmedir. Ayrıca 30 dakikalık hızlı çözüm oturumu da alınabilir.</p>
      <div>
        {edPaketler.map((p) => (
          <span key={p} className="chip">
            {p}
          </span>
        ))}
      </div>
    </>
  );
}

function DijitalUrunler() {
  return (
    <>
      <p className="intro">
        Sistem Global ekosisteminin dijital ürünleri. Danışmanlık ihtiyacını yazılım ve platformla destekler.
      </p>
      {urunler.map(([baslik, aciklama, rows]) => (
        <div key={baslik}>
          <h2>{baslik}</h2>
          <p className="blurb">{aciklama}</p>
          <div className="tw">
            <table>
              <thead>
                <tr>
                  <th>Ürün</th>
                  <th>Ne işe yarar?</th>
                  <th>Öne çıkanlar</th>
                  <th>Kimlere uygun?</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r[0]}>
                    <td>
                      <a href={r[1]} target="_blank" rel="noopener noreferrer">
                        {r[0]}
                      </a>
                    </td>
                    <td>{r[2]}</td>
                    <td>{r[3]}</td>
                    <td>{r[4]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {baslik === "Online Danışmanlık ve Eğitim Platformu" && <EdanismanKapsam />}
        </div>
      ))}
    </>
  );
}

function Hizmetler() {
  return (
    <>
      {hizmet.map(([baslik, rows]) => (
        <div key={baslik}>
          <h2>{baslik}</h2>
          <div className="tw">
            <table>
              <thead>
                <tr>
                  <th>Hizmet</th>
                  <th>Ne demek?</th>
                  <th>Kimlere uygun?</th>
                  <th>Sektörler</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r[0]}>
                    <td>{r[0]}</td>
                    <td>{r[1]}</td>
                    <td>{r[2]}</td>
                    <td>
                      {r[3] === ALL ? (
                        <span className="chip on">{ALL}</span>
                      ) : (
                        r[3].split(",").map((x) => (
                          <span key={x} className="chip">
                            {x.trim()}
                          </span>
                        ))
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {baslik === "Uluslararası Büyüme ve Kalkınma" && (
            <>
              <p className="blurb" style={{ marginTop: 14 }}>
                Şirket kurduğumuz ülkeler ({ulkeler.length}):
              </p>
              <div>
                {ulkeler.map((u) => (
                  <span key={u} className="chip on">
                    {u}
                  </span>
                ))}
              </div>
            </>
          )}
        </div>
      ))}
    </>
  );
}

function Eslesme() {
  return (
    <>
      <p className="intro">Şirketinizin profiline bakın, yanındaki hizmet ve destekler size uygun olanlardır.</p>
      <div className="tw">
        <table>
          <thead>
            <tr>
              <th>Şirket şunu yapıyorsa</th>
              <th>Uygun hizmet ve destekler</th>
            </tr>
          </thead>
          <tbody>
            {eslesme.map(([a, b]) => (
              <tr key={a}>
                <td>{a}</td>
                <td>
                  {b.split(", ").map((x) => (
                    <span key={x} className="chip on">
                      {x}
                    </span>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

/** "teyit edilemedi" ifadelerini sarı işaretler. */
function Tey({ s }: { s: string }) {
  const parts = s.split(/(teyit edilemedi)/gi);
  return (
    <>
      {parts.map((p, i) =>
        /^teyit edilemedi$/i.test(p) ? (
          <mark key={i} className="tey">
            {p}
          </mark>
        ) : (
          <Fragment key={i}>{p}</Fragment>
        )
      )}
    </>
  );
}

const AYLAR = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"];
function tarihYaz(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  return `${d} ${AYLAR[m - 1]} ${y}`;
}

function Liste({ t, a, full }: { t: string; a?: string[]; full?: boolean }) {
  if (!a || !a.length) return null;
  return (
    <div className={`blk${full ? " full" : ""}`}>
      <h4>{t}</h4>
      <ul>
        {a.map((x, i) => (
          <li key={i}>
            <Tey s={x} />
          </li>
        ))}
      </ul>
    </div>
  );
}

function Para({ t, s }: { t: string; s?: string }) {
  if (!s) return null;
  return (
    <div className="blk full">
      <h4>{t}</h4>
      <p>
        <Tey s={s} />
      </p>
    </div>
  );
}

function TabloGoster({ t }: { t: Tablo }) {
  return (
    <div className="tw">
      <table>
        <thead>
          <tr>
            {t.basliklar.map((b, i) => (
              <th key={i}>{b}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {t.satirlar.map((r, i) => (
            <tr key={i}>
              {r.map((c, j) => (
                <td key={j}>
                  <Tey s={c} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Kart({ o, gizli, id }: { o: Program; gizli: boolean; id: string }) {
  const [acik, setAcik] = useState(!!o.acik0);
  const isim = o.ad.split(" (")[0];
  const kapali = o.durum === "kapali";
  const lbl = kapali ? "Çağrı kapalı" : o.durum === "surekli" ? "Sürekli açık" : "Çağrı açık";
  const chip = kapali ? "closed" : o.durum === "yok" ? "off" : "on";

  return (
    <article
      className={`prog${acik ? " open" : ""}`}
      hidden={gizli}
      onClick={(e) => {
        if ((e.target as HTMLElement).closest("a")) return;
        if (typeof window !== "undefined" && window.getSelection()?.toString()) return;
        setAcik((v) => !v);
      }}
    >
      <button className="ph" type="button" aria-expanded={acik} aria-controls={id}>
        {o.durum !== "yok" && (
          <span className={`light ${kapali ? "r" : "g"}`} role="img" aria-label={lbl} title={lbl} />
        )}
        <span className="pt">{isim}</span>
        <span className="pk">
          <span className={`chip ${chip}`}>{o.kapak}</span>
        </span>
        <span className="chev" aria-hidden="true" />
      </button>
      <div className="pd" id={id} hidden={!acik}>
        {o.ozet && (
          <p className="ozet">
            <Tey s={o.ozet} />
          </p>
        )}
        {o.ad !== isim && <p className="tam">{o.ad}</p>}
        <div className="blocks">
          {o.durum !== "yok" && <Para t="Son başvuru tarihi / çağrı durumu" s={o.sonTarih} />}
          <Para t="Projenin amacı" s={o.amac} />
          <Liste t="Kimler başvurabilir" a={o.kimler} />
          <Liste t="Başvuru şartları ve kriterler" a={o.sartlar} />
          <Liste t="Destek oranı, limit ve vade" a={o.destekOrani} />
          <Liste t="Ödeme nasıl yapılır" a={o.odemeSekli} />
          <Liste t="Desteklenen kalemler" a={o.kalemler} />
          <Liste t="Nasıl hesaplanır? Örnek hesaplar" a={o.hesaplamalar} full />
          <Liste t="Örnek senaryolar: uygun" a={o.ornekler} full />
          <Liste t="Örnek senaryolar: uygun olmayan" a={o.uygunOlmayanlar} full />
          <Liste t="Örneklerle ilgili notlar" a={o.ornekNotlari} full />
          <Liste t="Şirkete faydaları" a={o.faydalar} />
          <Para t="Başvuru yolu" s={o.basvuru} />
          {o.extra}
          {o.kaynaklar && o.kaynaklar.length > 0 && (
            <div className="blk full">
              <h4>Kaynaklar</h4>
              <ul className="src">
                {o.kaynaklar.map((u, i) => (
                  <li key={i}>
                    {/^https?:\/\//.test(u) ? (
                      <a href={u} target="_blank" rel="noopener noreferrer">
                        {u}
                      </a>
                    ) : (
                      u
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        {o.dogrulama && (
          <p className="ver">
            <Tey s={o.dogrulama} />
          </p>
        )}
      </div>
    </article>
  );
}

type Filtre = "all" | "acik" | "kapali";

function gorunur(d: Durum, f: Filtre) {
  return f === "all" || (f === "acik" && (d === "acik" || d === "surekli")) || (f === "kapali" && d === "kapali");
}

function Grup({
  baslik,
  aciklama,
  rows,
  filtre,
  pfx,
  sayac = true,
  diger,
  digerBaslik,
}: {
  baslik: string;
  aciklama: string;
  rows: Program[];
  filtre: Filtre;
  pfx: string;
  sayac?: boolean;
  diger?: Program[];
  digerBaslik?: string;
}) {
  const acik = rows.filter((r) => r.durum !== "kapali" && r.durum !== "yok").length;
  const kap = rows.filter((r) => r.durum === "kapali").length;
  return (
    <div>
      <h2 className="g">
        {baslik}
        {sayac && (
          <span className="gcount">
            <span>
              <i className="light g" />
              {acik} açık
            </span>
            <span>
              <i className="light r" />
              {kap} kapalı
            </span>
          </span>
        )}
      </h2>
      <p className="blurb">{aciklama}</p>
      <div className="plist">
        {rows.map((r, i) => (
          <Kart key={i} o={r} id={`${pfx}-${i}`} gizli={!gorunur(r.durum, filtre)} />
        ))}
      </div>
      {diger && diger.length > 0 && (
        <details className="diger">
          <summary>{digerBaslik}</summary>
          <div className="plist">
            {diger.map((r, i) => (
              <Kart key={i} o={r} id={`${pfx}-d${i}`} gizli={false} />
            ))}
          </div>
        </details>
      )}
    </div>
  );
}

export default function DestekRehberi() {
  const [filtre, setFiltre] = useState<Filtre>("all");
  const [sekme, setSekme] = useState<"a" | "b" | "c" | "d">("b");
  const D = data as unknown as {
    sonKontrol: string;
    kosgeb: Program[];
    tubitak: Program[];
    ticaret: Program[];
    tkdk: Program[];
    yatirim: {
      sonTarih: string;
      ozet: string;
      nedir: string;
      kimler: string[];
      sartlar: string[];
      basvuru: string;
      destekUnsurlari: { ad: string; aciklama: string }[];
      bolgeIller: Tablo;
      bolgeTablosu: Tablo;
      ornekler?: string[];
      uygunOlmayanlar?: string[];
      ornekNotlari?: string[];
      destekKartlari: { ad: string; kapak: string; ozet: string; tablo: Tablo; notlar: string[] }[];
      asgariYatirimTablosu: Tablo;
      sektorler: { uygun: string[]; kapsamDisi: string[]; notlar: string[] };
      kaynaklar: string[];
      dogrulama: string;
    };
  };
  const Y = D.yatirim;

  const hedefSart: Tablo = {
    basliklar: ["Şart", "Ne demek?", "Müşteriye nasıl söylenir?"],
    satirlar: [
      ["Yatırım konusu EK-3 listesinde olmalı", "Karar'ın EK-3 listesindeki faaliyetler (NACE koduyla) belge alabilir. Listede olmayan konu belge alamaz.", "\"Önce yapacağınız işin NACE koduna bakıyoruz. Listede varsa devam ederiz.\""],
      ["Asgari sabit yatırım tutarı", "2026'da 1. ve 2. bölgede 15,1 milyon TL, 3.-6. bölgede 7,5 milyon TL. EK-3'te bazı konular için ayrı kapasite veya tutar şartı vardır.", "\"Yatırımınızın makine, bina ve tesis kısmı bu tutarın üstünde olmalı.\""],
      ["Bölge", "İl 1-5. bölgeden biri olmalı. 6. bölge yatırımları otomatik Öncelikli sayılır, Hedef olmaz.", "\"Yatırımı hangi ilde yapacağınız destek miktarını belirler.\""],
      ["Başvuru sahibi", "Şirket (sermaye şirketi, adi ortaklık, kooperatif), gerçek kişi veya yabancı şirketin Türkiye şubesi. Şirketin başvurudan önce kurulmuş olması gerekir.", "\"Şirketiniz kurulu değilse önce kuruluşu yapıp sonra başvuruyoruz.\""],
      ["Başvurudan önce harcama yapılmamış olmalı", "Başvuru tarihinden önce alınan makine ve kesilen fatura belge kapsamına girmez. Yatırımın başlangıcı başvuru tarihidir.", "\"Makineyi sipariş etmeden ve fatura almadan önce bize gelin.\""],
      ["Yeni makine", "Kullanılmış makine ve komple tesis vergi indirimi ve faiz desteğinden yararlanamaz.", "\"İkinci el makine için bu avantajlar geçerli değil.\""],
      ["Resmi belgeler", "SGK'ya muaccel prim borcu olmaması, gerekiyorsa ÇED olumlu veya gerekli değildir kararı, işyeri açma ve çalışma ruhsatı.", "\"Prim borcunuz ve ruhsatlarınız hazır olmalı.\""],
      ["Başvuru kanalı", "Sanayi ve Teknoloji Bakanlığı E-TUYS sistemi, e-imza ile. Fiziksel başvuru yok.", "\"Başvuruyu biz E-TUYS üzerinden yapıyoruz, e-imzanız yeterli.\""],
      ["Başka destekle çakışma", "Aynı yatırım için KOSGEB, TÜBİTAK gibi diğer kamu desteklerinden yararlanılamaz. Yalnızca sübvansiyonlu kredi istisnadır.", "\"Aynı makineye hem teşvik belgesi hem KOSGEB hibesi alınamaz.\""],
      ["Süre", "Yatırım en çok 3 yılda tamamlanır (gerekçeyle ek süre verilebilir). Bitişten sonra 3 ay içinde tamamlama vizesi alınır.", "\"3 yıl içinde yatırımı bitirip vize alıyoruz.\""],
      ["Diğer", "Markalar, lisanslar, know-how toplam yatırımın en çok %25'i olabilir. Belge kapsamında yurt içi alımlar e-fatura ile yapılmalıdır. EK-3'te olmak belge garantisi değildir, Bakanlık projeyi ayrıca değerlendirir.", "\"Liste şart ama yetmez, proje Bakanlıkça da uygun bulunmalı.\""],
    ],
  };

  const hedefSektor: Tablo = {
    basliklar: ["Sektör", "Örnek yatırım", "Şart / dikkat"],
    satirlar: [
      ["İmalat (en yaygın)", "Gıda, tekstil, giyim, plastik, makine, metal, mobilya, otomotiv yan sanayi, ilaç, kimya, elektronik üretimi", "NACE 10-33. Bazı alt kodlarda istisna ve tutar şartı var (ör. plastik ürünlerde 100 milyon TL)"],
      ["Tarım ve hayvancılık", "Sera, süt ve et sığırcılığı, kümes, su ürünleri", "Sera: 1.-2. bölge en az 20 dekar, 3. bölge 15, 4.-5. bölge 10, 6. bölge 5 dekar. Kümes hayvanı 200.000 adet/dönem"],
      ["Madencilik", "Maden çıkarma, işleme, arama", "I. grup madenler, altın ve mıcır hariç. İstanbul'da desteklenmez"],
      ["Enerji", "Yenilenebilir elektrik üretimi, şarj istasyonu, elektrik depolama", "Vergi indirimi ve faiz desteği verilmez. 240 kW altı GES ve doğalgaz/ithal kömür hariç"],
      ["Atık yönetimi", "Atık toplama, geri kazanım, bertaraf", "NACE 38 (38.11.02 hariç)"],
      ["Ulaştırma ve depolama", "Demiryolu, deniz ve hava taşımacılığı, liman, soğuk hava deposu, lisanslı depo, kargo elleçleme", "Soğuk hava deposu 1.000 m2 üzeri, kargo elleçleme 5.000 m2 ve Antrepo İzin Belgesi. Karayolu taşımacılığı (tır/kamyon) kapsam dışı"],
      ["Turizm", "Otel, tatil köyü, butik otel, öğrenci yurdu", "En az 50 oda. Yurt en az 200 öğrenci. Restoran ve kafe kapsam dışı"],
      ["Yazılım ve bilişim", "Bilgisayar programlama, veri merkezi", "Yazılımda (62.1) tutar şartı belirtilmemiş. Veri merkezinde en az 500 kW kurulu güç"],
      ["Ar-Ge ve test", "Ar-Ge faaliyeti, test merkezi, hayvan hastanesi", "Test merkezi orta-yüksek ve yüksek teknolojili ürünlere yönelik olmalı"],
      ["Eğitim", "Özel okul, kreş, özel eğitim kurumu", "Kamu kurumları ve bazı alt kodlar hariç. Özel okul, kreş ve lise yatırımları ayrıca Öncelikli sayılabilir"],
      ["Sağlık ve bakım", "Özel hastane, yatılı bakım, kreş", "Muayenehane (86.2, 86.9) kapsam dışı. 100 kişilik yaşlı/engelli bakım Öncelikli sayılır"],
      ["Çağrı merkezi", "Çağrı merkezi işletmeciliği", "Yalnızca 6. bölgede"],
      ["Kapsam dışı (belge alamaz)", "Toptan/perakende ticaret, e-ticaret, restoran, gayrimenkul, finans, sigorta, danışmanlık, reklam, seyahat acentesi, temizlik, güvenlik", "Bu işler EK-3'te yok. Müşteri bu alanlardansa belge çıkmaz, başka destek bakılır"],
    ],
  };

  const hedefFayda: Tablo = {
    basliklar: ["Fayda", "Ne sağlar?", "Örnek (varsayımsal, Çorum - 4. bölge)"],
    satirlar: [
      ["KDV istisnası", "Belgeli makine alımında KDV ödenmez.", "30 milyon TL'lik makine alımında %20 KDV olan 6 milyon TL ödenmez."],
      ["Gümrük vergisi muafiyeti", "Belgeli ithal makinede gümrük vergisi %0.", "Almanya'dan ithal edilen CNC tezgahta gümrük vergisi ödenmez."],
      ["Vergi indirimi (yatırıma katkı oranı %20)", "Yatırımdan elde edilen kârda kurumlar vergisi %25 yerine %10 ödenir (%60 indirim). Bu indirimin bir toplam sınırı vardır: yatırım harcamasının %20'si. Sınır dolunca vergi normal orana (%25) döner. Arsa-arazi bedeli ve yedek parça gibi kalemler yatırım harcamasına sayılmaz. İndirim sadece bu yatırımdan doğan kâra uygulanır ve kâr oluştukça kullanılır.", "40 milyon TL'lik yatırım harcamasının %20'si = 8 milyon TL. Yani toplamda 8 milyon TL'ye kadar vergi indirimi hakkınız olur. Yatırım yıllık 10 milyon TL kâr ederse vergi 2,5 milyon yerine 1 milyon TL olur, yıllık 1,5 milyon TL tasarruf edersiniz. 8 milyon TL dolana kadar (yaklaşık 5-6 yıl) böyle sürer, sonra normal vergi ödenir."],
      ["SGK işveren hissesi desteği", "Yatırımla sağlanan ilave istihdam için asgari ücrete tekabül eden işveren hissesinin %50'sini devlet öder. Süre bölgeye göre: 1. bölge yok, 2. bölge 1 yıl, 3. bölge 2 yıl, 4. bölge 4 yıl, 5. bölge 8 yıl.", "Çorum'da 20 yeni çalışan alınırsa 4 yıl boyunca her biri için asgari ücret üzerinden hesaplanan işveren hissesinin yarısı devletten gelir. OSB'de yapılırsa süre bir alt bölgeye göre 8 yıla çıkar."],
      ["Faiz / kâr payı desteği", "Yalnızca 4., 5. ve 6. bölgede (6. bölge Öncelikli sayılır). En az 1 yıl vadeli TL yatırım kredisinde repo faizinin %25'ine denk gelen puan, en çok 12,5 puan, azami 5 yıl ödenir. Toplam destek yatırımın %10'unu geçemez.", "40 milyon TL yatırım için 28 milyon TL'ye kadar kredi (yatırımın %70'i) desteğe esas olur. 5 yıl boyunca ödenen toplam destek en fazla 4 milyon TL olur (yatırımın %10'u). Gerçek tutar kredi faizine göre değişir. 1.-3. bölgede bu destek yok."],
      ["Yatırım yeri tahsisi", "Vergi indirimi öngörülen yatırımlar için kamu arazisi tahsisi mümkündür. Bölge ayrımı yok.", "Uygun bir arsa için Bakanlığa tahsis talebi yapılabilir."],
    ],
  };

  const hedefAnlatim: Program = {
    ad: "Hedef Yatırımlar detay",
    durum: "yok",
    kapak: "Başvuru şartları, sektörler, faydalar",
    acik0: true,
    ozet: "Çoğu KOBİ ve orta ölçekli yatırım Hedef Yatırımlar sistemine girer (9903 sayılı Karar md. 10). Üç tablo sırasıyla: başvuru şartları, hangi sektörlerde belge alınır, sağladığı faydalar ve örnek.",
    extra: (
      <>
        <div className="blk full">
          <h4>1. Başvuru şartları</h4>
          <TabloGoster t={hedefSart} />
        </div>
        <div className="blk full">
          <h4>2. Hangi sektörlerde belge alınır?</h4>
          <TabloGoster t={hedefSektor} />
          <p className="note">EK-3'te olmak belge garantisi değildir. Kod bazlı şartlar ve Bakanlığın değerlendirmesi birlikte belirler. Kesin kontrol için güncel EK-3 ve E-TUYS NACE sorgusu esas alınır.</p>
        </div>
        <div className="blk full">
          <h4>3. Sağladığı faydalar ve örnek</h4>
          <p className="note">Örnek: Çorum'da (4. bölge) bir KOBİ, 40 milyon TL sabit yatırımla (30 milyon TL makine) yeni bir üretim hattı kuruyor. Rakamlar varsayımsal anlatım içindir, gerçek tutar projeye ve faiz oranlarına göre değişir.</p>
          <TabloGoster t={hedefFayda} />
          <p className="note">İstanbul'daki yatırımlar ile elektrik üretimi, dağıtımı, depolaması ve gaz dağıtımı yatırımları Hedef sistemde vergi indiriminden yararlanamaz. Projeniz Karar md. 9'daki Öncelikli konulardan birine giriyorsa vergi katkı oranı %20 yerine %30 olur, bu yüzden başvuru öncesi mutlaka kontrol edilir.</p>
        </div>
      </>
    ),
  };

  const yatirimTum: Program[] = [
    {
      ad: "Yatırım Teşvik Belgesi nedir?",
      durum: "surekli",
      kapak: "Sürekli açık",
      ozet: Y.ozet,
      sonTarih: Y.sonTarih,
      amac: Y.nedir,
      kimler: Y.kimler,
      sartlar: Y.sartlar,
      basvuru: Y.basvuru,
      ornekler: Y.ornekler,
      uygunOlmayanlar: Y.uygunOlmayanlar,
      ornekNotlari: Y.ornekNotlari,
      kaynaklar: Y.kaynaklar,
      dogrulama: Y.dogrulama,
      extra: (
        <div className="blk full">
          <h4>Destek unsurları</h4>
          <ul>
            {Y.destekUnsurlari.map((d, i) => (
              <li key={i}>
                <strong>{d.ad}.</strong> <Tey s={d.aciklama} />
              </li>
            ))}
          </ul>
        </div>
      ),
    },
    {
      ad: "Hangi il hangi bölgede?",
      durum: "yok",
      kapak: "Tablo",
      ozet: "81 il, 9903 sayılı Karar'ın EK-2 tablosuna göre 6 teşvik bölgesine ayrılır. Organize sanayi bölgesi, endüstri bölgesi veya Karar'ın EK-5 listesindeki ilçelerde yapılan yatırımlar için bir alt bölge (daha yüksek bölge) desteği uygulanabilir; yatırım yerinin bölgesini başvuru öncesi E-TUYS'ta teyit edin.",
      extra: (
        <div className="blk full">
          <TabloGoster t={Y.bolgeIller} />
        </div>
      ),
    },
    ...Y.destekKartlari.map(
      (k): Program => ({
        ad: k.ad,
        durum: "yok",
        kapak: k.kapak,
        ozet: k.ozet,
        extra: (
          <>
            <div className="blk full">
              <TabloGoster t={k.tablo} />
            </div>
            <Liste t="Notlar" a={k.notlar} full />
          </>
        ),
      })
    ),
    {
      ad: "Asgari yatırım tutarları",
      durum: "yok",
      kapak: "Tablo",
      ozet: "Belge için gereken asgari sabit yatırım tutarı bölgeye ve yatırım türüne göre değişir.",
      extra: (
        <div className="blk full">
          <TabloGoster t={Y.asgariYatirimTablosu} />
        </div>
      ),
    },
    {
      ad: "Hangi sektörlerde belge alınır?",
      durum: "yok",
      kapak: "Sektör listesi",
      ozet: "Belge yalnızca Karar'ın EK-3 listesindeki faaliyetler için çıkar. Listede olmayan faaliyetler kapsam dışıdır.",
      extra: (
        <>
          <Liste t="Belge alınabilen sektörler" a={Y.sektorler.uygun} full />
          <Liste t="Kapsam dışı faaliyetler" a={Y.sektorler.kapsamDisi} full />
          <Liste t="Notlar ve uyarılar" a={Y.sektorler.notlar} full />
        </>
      ),
    },
  ];

  // Sıra: 0 nedir, 1 bölge illeri, 2 hangi sistem, 3 Hedef bölge tablosu, 4 Öncelikli, 5 Hamle, 6 asgari tutar, 7 sektörler
  const yatirim: Program[] = [
    hedefAnlatim,
    { ...yatirimTum[3], ad: "Hedef Yatırımlar: bölgelere göre destek tablosu", acik0: true },
    yatirimTum[7],
    yatirimTum[6],
    yatirimTum[1],
  ];
  const yatirimDiger: Program[] = [yatirimTum[0], yatirimTum[2], yatirimTum[4], yatirimTum[5]];

  const karsilastirma: Program[] = [
    {
      ad: "Dördünün karşılaştırması",
      durum: "yok",
      kapak: "Karşılaştırma",
      ozet: "Kimlere uygun, kim onaylar, başlıca avantajlar ve dikkat edilecekler.",
      extra: (
        <div className="blk full">
          <div className="tw">
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>Ar-Ge Merkezi</th>
                  <th>Tasarım Merkezi</th>
                  <th>Teknopark</th>
                  <th>TEKMER</th>
                </tr>
              </thead>
              <tbody>
                {kar.map((r, i) => (
                  <tr key={i}>
                    {r.map((c, j) => (
                      <td key={j}>{c.split("\n").map((l, k) => <div key={k} style={k ? { marginTop: 6 } : undefined}>{l}</div>)}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="note">
            Kısa kural: Ar-Ge ekibi büyükse Ar-Ge Merkezi, tasarım ekibi varsa Tasarım Merkezi, ekip küçük veya orta ve üniversite çevresi isteniyorsa Teknopark, henüz
            yeni bir girişimse TEKMER. Ar-Ge veya Tasarım Merkezi ile Teknopark aynı faaliyet için birlikte alınamaz.{" "}
            Ayrıntılar:{" "}
            <a href="/blog/arge-merkezi-nedir-nasil-kurulur-sartlari-vergi-avantajlari-2026">Ar-Ge Merkezi rehberi</a>,{" "}
            <a href="/blog/teknopark-nedir-avantajlari">Teknopark rehberi</a>,{" "}
            <a href="/blog/tekmer-nedir-basvuru-sureci-destekleri-2026">TEKMER rehberi</a>.
          </p>
        </div>
      ),
    },
  ];

  const filtreler: { f: Filtre; ad: string; isik?: "g" | "r" }[] = [
    { f: "all", ad: "Tümü" },
    { f: "acik", ad: "Çağrısı açık", isik: "g" },
    { f: "kapali", ad: "Çağrısı kapalı", isik: "r" },
  ];

  return (
    <div className="dr">
      <div className="tabs" role="tablist" aria-label="Rehber bölümleri">
        {(
          [
            ["a", "1. Danışmanlık Hizmetleri"],
            ["d", "2. Dijital Ürünler"],
            ["b", "3. Devlet Destekleri"],
            ["c", "4. Kime Ne Önerilir?"],
          ] as const
        ).map(([k, ad]) => (
          <button key={k} type="button" role="tab" aria-selected={sekme === k} onClick={() => setSekme(k)}>
            {ad}
          </button>
        ))}
      </div>
      {sekme === "a" && <Hizmetler />}
      {sekme === "d" && <DijitalUrunler />}
      {sekme === "c" && <Eslesme />}
      <div hidden={sekme !== "b"}>
      <p className="intro">
        Kartlara tıklayınca program detayları açılır, tekrar tıklayınca kapanır. Yeşil ışık çağrının açık veya sürekli
        açık olduğunu, kırmızı ışık çağrının şu an kapalı olduğunu gösterir.
      </p>
      <div className="filters" role="group" aria-label="Çağrı durumu filtresi">
        <span>Göster:</span>
        {filtreler.map((x) => (
          <button key={x.f} type="button" aria-pressed={filtre === x.f} onClick={() => setFiltre(x.f)}>
            {x.isik && <i className={`light ${x.isik}`} />}
            {x.ad}
          </button>
        ))}
      </div>

      <Grup baslik="KOSGEB" aciklama="KOBİ'lere ve girişimcilere yönelik destekler. Bazı programlar yalnızca çağrı döneminde açılır." rows={D.kosgeb} filtre={filtre} pfx="kosgeb" />
      <Grup baslik="TÜBİTAK" aciklama="Ar-Ge ve yenilik projelerine hibe. Ar-Ge ekibi olan veya kuracak şirketler için." rows={D.tubitak} filtre={filtre} pfx="tubitak" />
      <Grup baslik="Ticaret Bakanlığı" aciklama="İhracat ve yurt dışı pazara açılma harcamalarına destek. Programların çoğu belirli bir son tarihe bağlı değildir, harcama sonrası başvuru süreleri geçerlidir." rows={D.ticaret} filtre={filtre} pfx="ticaret" />
      <Grup baslik="TKDK, IPARD III" aciklama="Tarım ve kırsal kalkınma yatırımlarına AB destekli hibe. 14 Ekim 2026 itibarıyla açık bir IPARD III çağrısı yok. Resmi ilan PDF'leri okunamadığı için tarih, oran ve limitler ikincil kaynaklara dayanıyor." rows={D.tkdk} filtre={filtre} pfx="tkdk" />
      <Grup baslik="Yatırım Teşvik Belgesi" aciklama="Yeni yatırım yapan şirketlere vergi, gümrük, SGK ve finansman avantajı. Çoğu yatırımcı için geçerli olan Hedef Yatırımlar açık gösterilir. Öncelikli Yatırımlar ve Türkiye Yüzyılı Kalkınma Hamlesi altta kapalı bölümdedir." rows={yatirim} filtre="all" pfx="yatirim" sayac={false} diger={yatirimDiger} digerBaslik="Diğer yatırım teşvik sistemleri: genel bilgi, sistem karşılaştırması, Öncelikli Yatırımlar, Kalkınma Hamlesi" />
      <Grup baslik="Ar-Ge Merkezi, Tasarım Merkezi, Teknopark ve TEKMER" aciklama="Dördü sık karıştırılır. Müşterinin durumuna göre hangisinin uygun olduğu karşılaştırmada." rows={karsilastirma} filtre="all" pfx="arge" sayac={false} />

      <p className="note" style={{ marginTop: 36 }}>
        Devlet destek bilgileri {tarihYaz(D.sonKontrol)} itibarıyla resmi kurum sayfalarından derlenmiştir. Başvuru şartları, tutarlar
        ve tarihler çağrıya göre değişir; başvurudan önce güncel duyuru kontrol edilmelidir. &quot;Teyit edilemedi&quot;
        işaretli bilgiler resmi kaynakta doğrulanamamıştır.
      </p>
      </div>
      <div className="cta">
        <div>
          <strong>Şirketiniz için hangi hizmet ve destek uygun?</strong>
          <span>Kısa bir görüşmeyle şirketinize uygun hizmet ve destekleri birlikte belirleyelim.</span>
        </div>
        <ContactCtaButton>Bizimle iletişime geçin</ContactCtaButton>
      </div>
    </div>
  );
}
