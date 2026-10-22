"use client";

import { Fragment, useState, type ReactNode } from "react";
import data from "@/lib/destek-rehberi-data.json";
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
}

interface Tablo {
  basliklar: string[];
  satirlar: string[][];
}

const kar = [
  ["Nedir?", "Şirketin kendi bünyesinde kurduğu Ar-Ge birimine verilen resmi statü.", "Üniversite yakınındaki teknoloji bölgesinde ofis kiralayarak çalışmak.", "Yeni girişimler için kuluçka merkezi: ofis, mentorluk, eğitim."],
  ["Kimlere uygun?", "Ar-Ge ekibi kalabalık orta ve büyük şirketler.", "Ar-Ge, yazılım veya tasarım yapan her ölçekte şirket.", "Yeni kurulan veya kurulacak teknoloji girişimleri."],
  ["Asgari şart", "15 tam zamanlı Ar-Ge personeli (bazı sektörlerde 30). Ar-Ge alanı ayrı olmalı.", "Personel eşiği yok. Faaliyet Ar-Ge, yazılım veya tasarım olmalı.", "Yaş ve kuruluş şartı yok. Teknoloji veya yenilik odaklı fikir yeterli."],
  ["Kim onaylar?", "Sanayi ve Teknoloji Bakanlığı (belge ve yerinde inceleme).", "Teknoparkın yönetici şirketi (proje değerlendirmesi).", "Seçilen TEKMER'in kendi kurulu."],
  ["Başlıca avantajlar", "Kurumlar vergisi indirimi (Ar-Ge harcamalarının %100'ü kurum kazancından düşülür), personel gelir vergisi stopajı desteği, SGK işveren hissesinin yarısı, damga vergisi istisnası.", "Kurumlar / gelir vergisi istisnası (bölgedeki yazılım, Ar-Ge ve tasarım kazancı için), KDV istisnası, personel stopaj desteği, SGK işveren desteği. 2028 sonuna kadar.", "Ofis, mentorluk, yatırımcı bağlantısı. Kabul edilen firma Ar-Ge kapsamına girerse kurumlar vergisi indirimi ve SGK avantajları da mümkün."],
  ["Başvuru", "Bakanlığa belge ile başvuru.", "Yönetici şirkete proje bazlı başvuru.", "Doğrudan KOSGEB'e değil, seçilen TEKMER'e. Kabul takvimi kontenjana bağlı."],
  ["Dikkat", "Aynı faaliyet ve personel için Teknopark ile birlikte kullanılamaz.", "Aynı faaliyet ve personel için Ar-Ge Merkezi ile birlikte kullanılamaz.", "Diğer ikisini dışlamaz, tamamlayıcı olarak kullanılabilir."],
];

const ALL = "Tüm sektörler";
const hizmet: [string, string[][]][] = [
 ["Hukuk",[
  ["Dava, İcra ve İflas","Alacak tahsili, davalarda temsil, konkordato ve iflas süreçleri.","Alacağı olan veya dava riski taşıyan her şirket.","Ticaret, inşaat, üretim, lojistik"],
  ["Arabuluculuk","Mahkemeye gitmeden anlaşma yolu. Ticari ve iş uyuşmazlıklarında dava öncesi zorunlu adım.","Ticari veya işçi uyuşmazlığı yaşayan şirketler.",ALL],
  ["KVKK","Kişisel verilerin yasaya uygun tutulması: envanter, aydınlatma metni, VERBİS kaydı.","Müşteri veya çalışan verisi tutan tüm şirketler.","E-ticaret, sağlık, eğitim, yazılım, perakende"],
  ["Sözleşme, İş ve Şirketler Hukuku","Sözleşme hazırlama, iş hukuku, şirket kuruluşu ve tür değişikliği, halka arz, aile anayasası.","Büyüyen, ortaklık yapısı değişen şirketler ve aile şirketleri.",ALL]
 ]],
 ["Vergi ve Mali Müşavirlik",[
  ["Vergi Danışmanlığı","Yurt içi ve uluslararası vergi planlaması, vergi riski ve incelemelerde destek.","Karı büyüyen, yurt dışıyla iş yapan şirketler.",ALL],
  ["Tam Tasdik","Yeminli Mali Müşavirin yıllık beyannamelerin doğruluğunu onaylaması. Vergi incelemesi riskini düşürür.","Düzenli ve güvenli vergi uyumu isteyen şirketler.",ALL],
  ["KDV İade","Devreden KDV'nin nakit olarak geri alınması.","İhracat yapan, yatırım yapan, indirimli KDV oranı nedeniyle KDV'si birikenler.","İhracatçı imalat, tekstil, gıda, inşaat, enerji"],
  ["Bağımsız Denetim","Finansal tabloların bağımsız denetçi tarafından doğrulanması. Belirli büyüklük eşiğini aşanlar için zorunlu, diğerlerinde güven yaratır.","Eşiği aşan şirketler, kredi veya yatırımcı arayanlar.","Üretim, holding, enerji, perakende"],
  ["Bordro","Aylık maaş, SGK bildirimleri ve çalışan kayıtlarının yönetimi.","Çalışanı olan ama içeride bordro ekibi kurmak istemeyen şirketler.",ALL],
  ["SGK Teşvikleri","İşe alımda SGK prim yükünü azaltan teşviklerin tespiti ve uygulanması.","Çalışan sayısı yüksek veya işe alım planlayan şirketler.","Üretim, tekstil, hizmet, inşaat, turizm"]
 ]],
 ["Uluslararası",[
  ["Yurt Dışında Şirket Kurma","Hedef ülkede şirket kuruluşu: ülke seçimi, tescil, banka ve vergi kaydı. Kurduğumuz ülkeler tablonun altında.","Yurt dışı müşteri, ofis veya depo isteyen şirketler.","İhracatçılar, yazılım, e-ticaret, ticaret"],
  ["Yurt Dışı Pazar Araştırması","Hedef ülkede talep, rakip, fiyat ve giriş yolu analizi.","İhracata yeni başlayan veya yeni pazara açılan şirketler.","Üretim, gıda, makine, tekstil, yazılım"],
  ["Uluslararası Kredi ve Fon Danışmanlığı","Yurt dışı kaynaklı kredi, fon ve yatırım finansmanı bulma, başvuruyu hazırlama.","Büyük yatırımı veya finansman ihtiyacı olan şirketler.","Enerji, altyapı, üretim, tarım"]
 ]],
 ["Koruma ve Büyüme",[
  ["Marka ve Patent","Marka, patent ve telif haklarının Türkiye'de ve yurt dışında tescili.","Kendi ürünü veya markası olan, ihracat yapan şirketler.","Gıda, tekstil, yazılım, kozmetik, makine"],
  ["Sürdürülebilirlik","Karbon ve su ayak izi, TSRS raporu, güvence denetimi. AB'ye ihracatta karbon sınır vergisi hazırlığı.","AB'ye ihracat yapanlar ve rapor zorunluluğu olan şirketler.","Çelik, alüminyum, çimento, gübre, tekstil, otomotiv"],
  ["GYF ve PYF","Gayrimenkul veya proje yatırımı için yatırımcıdan fon toplayan, SPK düzenlemeli yapı (Gayrimenkul Yatırım Fonu, Proje Yatırım Fonu).","Gayrimenkul veya proje geliştirip ortak yatırımcı arayanlar.","Gayrimenkul, inşaat, enerji projeleri"],
  ["Kurumsallaşma Check-Up","Yönetim, süreç, finans ve hukuk açısından şirketin kısa muayenesi. Eksikler ve öncelikler raporlanır.","Büyüyen ve sahibine bağlı çalışan aile şirketleri.",ALL]
 ]],
 ["Değerleme ve Teknoloji",[
  ["Şirket Değerleme","Şirketin gerçek piyasa değerinin hesaplanması. Satış, ortak alımı, birleşme (M&A), yatırımcı görüşmesi ve due diligence öncesi kullanılır.","Ortak alacak veya satacak, yatırım arayan, birleşme düşünen şirketler.",ALL],
  ["RPA (Süreç Robotları)","Yazılım robotlarının tekrarlayan işleri insan yerine yapması: fatura girişi, rapor hazırlama, veri aktarımı gibi. Zaman kazandırır, hatayı azaltır.","Her gün tekrarlayan evrak ve veri işi yapan, ekibi bu işlere zaman harcayan şirketler.","Finans, muhasebe, lojistik, perakende, sigorta, üretim"]
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
  ["Harmonity","https://www.harmonity.ai/tr?utm_source=sistemglobal","Hukuk için geliştirilmiş, yapay zekâ ve agent destekli platform. Hukuki araştırma, belge hazırlama ve inceleme ile ekip içi iş birliğini tek yerde toplar.","Kaynaklı yanıt veren agent. Kurum standartlarına uygun düzenlenebilir ilk taslak. Riskli ve eksik hükümlerin maddeleriyle birlikte tespiti. Çoklu belge incelemesi: birden fazla sözleşmeyi (örneğin tedarik sözleşmelerini fesih, sorumluluk ve yenileme koşullarına göre) ortak tabloda karşılaştırma. Etkileşimli rapor üretimi. İçtihat araştırması. Belgeler, ekip kararları ve notlar tek çalışma alanında saklanır. Erişim rol bazlıdır. Öneriler kullanıcı onayıyla ilerler, çıktıların yetkin bir hukuk uzmanınca değerlendirilmesi gerekir.","Hukuk ekipleri (talep, belge, inceleme ve onay süreçleri), hukuk büroları, startup ve KOBİ'ler."]
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
        Sistem Global ekosisteminin dijital ürünleri. Danışmanlık ihtiyacını yazılım ve platformla destekler. Devlet hibesi içermez.
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
          {baslik === "Uluslararası" && (
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
  const [acik, setAcik] = useState(false);
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
}: {
  baslik: string;
  aciklama: string;
  rows: Program[];
  filtre: Filtre;
  pfx: string;
  sayac?: boolean;
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

  const yatirim: Program[] = [
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

  const karsilastirma: Program[] = [
    {
      ad: "Üçünün karşılaştırması",
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
                  <th>Teknopark</th>
                  <th>TEKMER</th>
                </tr>
              </thead>
              <tbody>
                {kar.map((r, i) => (
                  <tr key={i}>
                    {r.map((c, j) => (
                      <td key={j}>{c}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="note">
            Kısa kural: Ekibi büyükse Ar-Ge Merkezi, ekip küçük veya orta ve üniversite çevresi isteniyorsa Teknopark, henüz
            yeni bir girişimse TEKMER. Ar-Ge Merkezi ve Teknopark aynı faaliyet için birlikte alınamaz.
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
      <Grup baslik="Yatırım Teşvik Belgesi" aciklama="Yeni yatırım yapan şirketlere vergi, gümrük, SGK ve finansman avantajı. Kartlar: genel bilgi, illerin bölgeleri, sistemlerin karşılaştırması (Hedef, Öncelikli, Hamle), her sistemin destek tablosu, asgari tutarlar ve sektörler." rows={yatirim} filtre="all" pfx="yatirim" sayac={false} />
      <Grup baslik="Ar-Ge Merkezi, Teknopark ve TEKMER" aciklama="Üçü sık karıştırılır. Müşterinin durumuna göre hangisinin uygun olduğu karşılaştırmada." rows={karsilastirma} filtre="all" pfx="arge" sayac={false} />

      <p className="note" style={{ marginTop: 36 }}>
        Devlet destek bilgileri {tarihYaz(D.sonKontrol)} itibarıyla resmi kurum sayfalarından derlenmiştir. Başvuru şartları, tutarlar
        ve tarihler çağrıya göre değişir; başvurudan önce güncel duyuru kontrol edilmelidir. &quot;Teyit edilemedi&quot;
        işaretli bilgiler resmi kaynakta doğrulanamamıştır.
      </p>
      </div>
    </div>
  );
}
