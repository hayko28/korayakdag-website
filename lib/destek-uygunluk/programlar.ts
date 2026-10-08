import { DestekBasvuruGirdisi, ProgramSonucuTaslak, SonucDurumu, UretimYatirimNiteligi } from "./types";
import {
  ilinBolgesi,
  imalatSektoruMu,
  isletmeYasiYil,
  kobiMaliUstDeger,
  kobiOlceguHesapla,
  kosgebDesteklenenSektorMu,
  yatirimAsgariTutarTl,
  yatirimTesvikPozitifListedeMi,
} from "./yardimcilar";

function sonuc(
  programId: string,
  programAdi: string,
  kurum: string,
  durum: SonucDurumu,
  ozet: string,
  gerekceler: string[],
  uyarilar?: string[],
  cagriKapali?: boolean,
  sonBasvuruTarihi?: string
): ProgramSonucuTaslak {
  return { programId, programAdi, kurum, durum, ozet, gerekceler, uyarilar, cagriKapali, sonBasvuruTarihi };
}

// --- 1) KOSGEB İş Geliştirme Desteği (Girişimci Destek Programı) ---
// Kaynak: research/destek-uygunluk/kosgeb-is-gelistirme.md (UE-35/10)
export function kosgebIsGelistirmeDegerlendir(g: DestekBasvuruGirdisi): ProgramSonucuTaslak {
  const meta = {
    programId: "kosgeb-is-gelistirme",
    programAdi: "KOSGEB İş Geliştirme Desteği (Girişimci Destek Programı)",
    kurum: "KOSGEB",
  };
  const gerekceler: string[] = [];
  const eksikAlanlar: string[] = [];

  const yas = isletmeYasiYil(g.kurulusTarihi);
  if (yas === null) eksikAlanlar.push("kuruluş tarihi");
  else if (yas > 3) {
    gerekceler.push(`İşletme ${yas.toFixed(1)} yaşında — İş Geliştirme Desteği için kuruluştan itibaren en fazla 3 yıl içinde başvurulabilir.`);
    return sonuc(meta.programId, meta.programAdi, meta.kurum, "uygun_degil", "İşletme yaşı sınırı aşılmış.", gerekceler);
  }

  if (g.naceKodu === undefined) eksikAlanlar.push("NACE kodu");
  else if (!kosgebDesteklenenSektorMu(g.naceKodu)) {
    gerekceler.push("NACE kodu, İş Geliştirme Desteği'nin kapsadığı sektörlerin (İmalat; Telekomünikasyon; Bilgisayar Programlama/Danışmanlık; Bilişim Altyapısı; Bilimsel Ar-Ge) dışında.");
    return sonuc(meta.programId, meta.programAdi, meta.kurum, "uygun_degil", "Sektör (NACE) kapsam dışı.", gerekceler);
  }

  if (g.ileriGirisimciEgitimiTamamlandiMi === false) {
    gerekceler.push("İş Geliştirme Desteği'ne başvurmadan önce 'ileri girişimci eğitimi' tamamlanmış olmalı (İş Kurma Desteği'nin eğitiminden ayrı, ek bir zorunluluk).");
    return sonuc(meta.programId, meta.programAdi, meta.kurum, "uygun_degil", "İleri girişimci eğitimi eksik.", gerekceler);
  }
  if (g.ileriGirisimciEgitimiTamamlandiMi === undefined) eksikAlanlar.push("ileri girişimci eğitimi durumu");

  if (g.ortaklikPayiYuzde !== undefined && g.ortaklikPayiYuzde < 50) {
    gerekceler.push(`Girişimcinin ortaklık payı %${g.ortaklikPayiYuzde} — en az %50 olmalı.`);
    return sonuc(meta.programId, meta.programAdi, meta.kurum, "uygun_degil", "Ortaklık payı yetersiz.", gerekceler);
  }
  if (g.ortaklikPayiYuzde === undefined) eksikAlanlar.push("ortaklık payı");

  if (g.girisimciMunferitTemsilYetkisiVarMi === false) {
    gerekceler.push("Girişimci, işletmeyi tek başına (münferiden) temsile yetkili olmalı.");
    return sonuc(meta.programId, meta.programAdi, meta.kurum, "uygun_degil", "Münferit temsil yetkisi yok.", gerekceler);
  }
  if (g.girisimciMunferitTemsilYetkisiVarMi === undefined) eksikAlanlar.push("münferit temsil yetkisi");

  // UE-35/11 MADDE 5/13 (birincil kaynaktan doğrulandı, 2026-09-17): "bir kez" kuralı
  // yalnızca İş Geliştirme Desteği'nin kendisi (veya alternatifi Faiz/Kâr Payı Desteği) için
  // geçerli — İş Kurma Desteği'ni almış olmak bu programı ETKİLEMEZ, ikisi birlikte alınabilir.
  if (g.isGelistirmeDestegiDahaOnceKullanildiMi === true) {
    gerekceler.push("İş Geliştirme Desteği (veya alternatifi Faiz/Kâr Payı Desteği) işletme/girişimci başına yalnızca bir kez kullanılabiliyor — bu hak daha önce kullanılmış (İş Kurma Desteği'ni ayrıca almış olmak bunu etkilemez).");
    return sonuc(meta.programId, meta.programAdi, meta.kurum, "uygun_degil", "Destek hakkı daha önce kullanılmış.", gerekceler);
  }
  if (g.isGelistirmeDestegiDahaOnceKullanildiMi === undefined) eksikAlanlar.push("İş Geliştirme Desteği'nin (veya Faiz/Kâr Payı Desteği'nin) daha önce kullanılıp kullanılmadığı");

  if (g.kosgebVeriTabaniKayitliMi === false) eksikAlanlar.push("KOSGEB Veri Tabanı kaydı henüz yok (başvuru öncesi tamamlanmalı)");

  gerekceler.push("İşletme yaşı, NACE sektörü, ileri girişimci eğitimi, ortaklık payı ve tekrar başvuru şartlarının hepsi sağlanıyor.");

  const uyarilar = [
    "Destek oranı %80, geri ödemesiz destek üst limiti 1.500.000 TL'dir (öncelikli gruplarda +150.000 TL); İş Kurma Desteği ile birlikte alınan toplam üst limit 2.000.000 TL'yi geçemez. Uygulama süresi 36 aydır.",
    "MADDE 20 uyarınca başvurular önce Kurul (en az 50/100) ve Jüri (en az 50/100) puanlamasından geçer, sonra sınırlı kontenjan için rekabetçi bir sıralamaya tabi tutulur; yalnızca sıralamada yeterli olanlar desteklenir ve karar nihaidir, itiraz edilemez (MADDE 26/1). Bu yüzden ön koşulların sağlanması başvuru hakkı verir, kesin onay anlamına gelmez.",
    "Program dönemsel başvuru çağrılarıyla yürütülüyor (kardeş programı Kapasite Geliştirme'de olduğu gibi); 2026 Yılı 2. Dönem (20 Nisan-8 Mayıs 2026) kapandı, yeni dönem henüz KOSGEB tarafından ilan edilmedi — güncel durum kosgeb.gov.tr'den teyit edilmelidir. (Kaynak: kosgeb.gov.tr, 2026-09-23 doğrulandı.)",
  ];

  if (eksikAlanlar.length > 0) {
    return sonuc(
      meta.programId, meta.programAdi, meta.kurum, "belirsiz",
      "Girilen bilgilerle ön koşulların çoğu sağlanıyor, ancak bazı alanlar eksik.",
      gerekceler,
      [...uyarilar, `Eksik bilgiler: ${eksikAlanlar.join(", ")}.`],
      true,
      "8 Mayıs 2026 (2. dönem, kapandı)"
    );
  }

  return sonuc(
    meta.programId, meta.programAdi, meta.kurum, "uygun",
    "Girilen bilgilere göre başvuru şartlarının tamamı sağlanıyor. Kurul/Jüri puanlaması ve rekabetçi sıralama başvuru sonrası ayrı bir aşamadır.",
    gerekceler,
    uyarilar,
    true,
    "8 Mayıs 2026 (2. dönem, kapandı)"
  );
}

// --- 2) KOSGEB Kapasite Geliştirme Destek Programı ---
// Kaynak: research/destek-uygunluk/kosgeb-kapasite-gelistirme.md (UE-37/08)
export function kosgebKapasiteGelistirmeDegerlendir(g: DestekBasvuruGirdisi): ProgramSonucuTaslak {
  const meta = {
    programId: "kosgeb-kapasite-gelistirme",
    programAdi: "KOSGEB Kapasite Geliştirme Destek Programı",
    kurum: "KOSGEB",
  };
  const gerekceler: string[] = [];
  const eksikAlanlar: string[] = [];

  // 11/05/2026 tarihli 730087 sayılı Olur ile MADDE 13/4 değişti (birincil kaynaktan
  // Rev.14 Yönerge'yle 2026-09-17'de doğrulandı): eski "yalnızca limited/anonim" şartı
  // kaldırıldı, yerine "TTK'da tanımlı gerçek veya tüzel kişi statüsü" geldi — şahıs
  // işletmeleri de artık başvurabiliyor. sirketTuru bu yüzden burada ARTIK gate değil.
  if (g.sirketTuru === undefined) eksikAlanlar.push("şirket türü");

  const mali = kobiMaliUstDeger(g.yillikNetSatisHasilatiTl, g.maliBilancoTl);
  const olcek = kobiOlceguHesapla(g.calisanSayisi, mali);
  if (olcek === "mikro" || olcek === "kobi_disi") {
    gerekceler.push(`İşletme ölçeği "${olcek}" — bu program yalnızca küçük veya orta büyüklükteki işletmelere açık (mikro işletmeler ve büyük ölçekli firmalar başvuramaz).`);
    return sonuc(meta.programId, meta.programAdi, meta.kurum, "uygun_degil", "KOBİ ölçek şartı sağlanmıyor.", gerekceler);
  }
  if (olcek === null) {
    // Hangisinin eksik olduğunu ayrı ayrı bildir — ikisi birden eksik değilse
    // "zaten girdim" hissi yaratan tek bir kombine mesaj yerine.
    if (g.calisanSayisi === undefined) eksikAlanlar.push("çalışan sayısı");
    if (mali === undefined) eksikAlanlar.push("yıllık net satış hasılatı veya mali bilanço");
  }

  if (g.naceKodu === undefined) eksikAlanlar.push("NACE kodu");
  else if (!kosgebDesteklenenSektorMu(g.naceKodu)) {
    gerekceler.push("NACE kodu, programın kapsadığı sektörlerin (İmalat; Telekomünikasyon; Bilgisayar Programlama/Danışmanlık; Bilişim Altyapısı; Bilimsel Ar-Ge) dışında.");
    return sonuc(meta.programId, meta.programAdi, meta.kurum, "uygun_degil", "Sektör (NACE) kapsam dışı.", gerekceler);
  } else if (imalatSektoruMu(g.naceKodu)) {
    if (g.sanayiSicilBelgesiVarMi === false) {
      gerekceler.push("İmalat sektöründeki işletmeler için geçerli Sanayi Sicil Belgesi zorunlu.");
      return sonuc(meta.programId, meta.programAdi, meta.kurum, "uygun_degil", "Sanayi Sicil Belgesi eksik.", gerekceler);
    }
    if (g.yodaRaporuVarMi === false) {
      gerekceler.push("İmalat sektöründeki işletmeler için YODA (Yalın Olgunluk Değerlendirme Analizi) raporu zorunlu.");
      return sonuc(meta.programId, meta.programAdi, meta.kurum, "uygun_degil", "YODA raporu eksik.", gerekceler);
    }
    if (g.sanayiSicilBelgesiVarMi === undefined) eksikAlanlar.push("Sanayi Sicil Belgesi durumu");
    if (g.yodaRaporuVarMi === undefined) eksikAlanlar.push("YODA raporu durumu");
  }

  if (g.kapasiteProgramiDahaOnceKullanildiMi === true) {
    gerekceler.push("Bu programdan işletme başına yalnızca bir kez yararlanılabiliyor — bu hak daha önce kullanılmış.");
    return sonuc(meta.programId, meta.programAdi, meta.kurum, "uygun_degil", "Destek hakkı daha önce kullanılmış.", gerekceler);
  }
  if (g.kapasiteProgramiDahaOnceKullanildiMi === undefined) eksikAlanlar.push("daha önce yararlanma durumu");

  // Program iki ayrı track sunuyor: genel ölçek büyütme ve dijital dönüşüm yatırımı.
  // Dijital dönüşüm/olgunluk değerlendirme raporu YALNIZCA dijital dönüşüm track'inde
  // zorunlu — önceden bu koşulsuz bir uyarı notuydu, gerçek bir soru/kapı değildi.
  if (g.kapasiteDijitalDonusumTrackiMi === true) {
    if (g.ddxRaporuVarMi === false) {
      gerekceler.push("Dijital dönüşüm yatırımı track'inde başvuru için dijital dönüşüm/olgunluk değerlendirme raporu zorunlu — henüz alınmamış.");
      return sonuc(meta.programId, meta.programAdi, meta.kurum, "uygun_degil", "Dijital dönüşüm/olgunluk değerlendirme raporu eksik.", gerekceler);
    }
    if (g.ddxRaporuVarMi === undefined) {
      eksikAlanlar.push("dijital dönüşüm/olgunluk değerlendirme raporu durumu (dijital dönüşüm track'i için zorunlu)");
    }
  }
  if (g.kapasiteDijitalDonusumTrackiMi === undefined) {
    eksikAlanlar.push("başvurunun genel ölçek büyütme mi yoksa dijital dönüşüm yatırımı track'i mi olduğu");
  }

  // Hızlı büyüyen işletme şartı (ya da muafiyet)
  const muafiyetVar = g.hizliBuyumeMuafiyeti !== undefined && g.hizliBuyumeMuafiyeti !== "yok";
  let buyumeUyari: string | undefined;
  if (!muafiyetVar) {
    if (g.son3YilCalisanSayilari === undefined && g.son3YilNetSatisTl === undefined) {
      eksikAlanlar.push("son 3 yıl çalışan sayısı / net satış verisi (ya da muafiyet bilgisi)");
    } else {
      const buyumeVarMi = (dizi?: [number, number, number]) => {
        if (!dizi || dizi[0] <= 0) return null;
        const ortalamaYillikOran = ((dizi[2] - dizi[0]) / dizi[0] / 2) * 100;
        return ortalamaYillikOran;
      };
      const calisanBuyume = buyumeVarMi(g.son3YilCalisanSayilari);
      const satisBuyume = buyumeVarMi(g.son3YilNetSatisTl);
      const enIyi = Math.max(calisanBuyume ?? -Infinity, satisBuyume ?? -Infinity);
      buyumeUyari = "Net satış büyümesi GSYH Deflatörü ile enflasyondan arındırılarak hesaplanmalıdır — buradaki hesap ham (nominal) veriyle yapılmış bir yaklaşıklamadır, kesin sonuç değildir.";
      if (enIyi === -Infinity) {
        eksikAlanlar.push("son 3 yıl büyüme verisi");
      } else if (enIyi < 10) {
        gerekceler.push(`Girilen verilere göre yıllık ortalama büyüme ~%${enIyi.toFixed(1)} — "hızlı büyüyen işletme" eşiği olan %10'a ulaşmıyor (muafiyet de belirtilmedi).`);
        return sonuc(meta.programId, meta.programAdi, meta.kurum, "uygun_degil", "Hızlı büyüme şartı sağlanmıyor.", gerekceler, [buyumeUyari]);
      } else {
        gerekceler.push(`Girilen verilere göre yıllık ortalama büyüme ~%${enIyi.toFixed(1)} — %10 eşiğini karşılıyor (ön hesap, kesinleştirme gerekir).`);
      }
    }
  } else {
    gerekceler.push(`Hızlı büyüme şartından muaf: ${g.hizliBuyumeMuafiyeti}.`);
  }

  gerekceler.push("Şirket türü, KOBİ ölçeği ve NACE sektörü şartları sağlanıyor.");

  const uyarilar = [
    "Bu program hibe değil, banka kredisinin faiz/kâr payı giderine destektir (anapara işletmeye geri ödemelidir); genel kredi üst limiti 20.000.000 TL'dir, savunma/havacılık/uzay tedarikçi geliştirme iş birliğinde (EYDEP) sertifika seviyesine göre 25.000.000-30.000.000 TL'ye çıkabilir.",
    "YODA raporunun (ve dijital dönüşüm track'inde dijital dönüşüm/olgunluk değerlendirme raporunun) başvuru tarihinden geriye en fazla 1 yıl içinde alınmış olması gerekiyor — bu ön analizde raporun tarihi sorulmuyor, başvuru öncesi kontrol edilmelidir.",
    "MADDE 18 uyarınca Kurul her projeyi 100 üzerinden puanlar (50 altı ret), 50 ve üzeri olanlar sınırlı kontenjan için rekabetçi bir sıralamaya tabi tutulur — ön koşulların sağlanması başvuru hakkı verir, kesin onay anlamına gelmez.",
    "Uygulama Esasları sık güncelleniyor (bu program son 4 ayda 2 kez revize edildi); başvuru anında KOSGEB'in güncel metniyle teyit edilmelidir.",
    "Program dönemsel çağrılarla yürütülüyor; 3. başvuru dönemi (22 Ağustos - 15 Eylül 2026) kapanmış, yeni dönem tarihi henüz KOSGEB tarafından ilan edilmemiş — güncel başvuru penceresinin açık olup olmadığı kosgeb.gov.tr'den kontrol edilmelidir.",
  ];
  if (buyumeUyari) uyarilar.push(buyumeUyari);

  if (eksikAlanlar.length > 0) {
    return sonuc(
      meta.programId, meta.programAdi, meta.kurum, "belirsiz",
      "Girilen bilgilerle ön koşulların çoğu sağlanıyor, ancak bazı alanlar eksik.",
      gerekceler,
      [...uyarilar, `Eksik bilgiler: ${eksikAlanlar.join(", ")}.`],
      true,
      "15 Eylül 2026 (3. dönem, kapandı)"
    );
  }

  return sonuc(
    meta.programId, meta.programAdi, meta.kurum, "uygun",
    "Girilen bilgilere göre başvuru şartlarının tamamı sağlanıyor. Kurul puanlaması (≥50/100) ve kontenjan sıralaması başvuru sonrası ayrı bir aşamadır.",
    gerekceler,
    uyarilar,
    true, // 3. başvuru dönemi (22 Ağustos-15 Eylül 2026) kapandı, yeni dönem henüz ilan edilmedi
    "15 Eylül 2026 (3. dönem, kapandı)"
  );
}

// --- 3) Yatırım Teşvik Belgesi ---
// Kaynak: research/destek-uygunluk/yatirim-tesvik-belgesi.md (9903 sayılı Karar + Tebliğ 2025/1)
// Başvuru şartları (pozitif liste, bölge bazlı asgari tutar, yatırım türü/mevcut tesis tutarlılığı,
// EK-3 satır bazlı özel şartlar) tamamen sağlanıyorsa "uygun" döner; E-TUYS incelemesi ve
// Bakanlığın belge kararı başvuru sonrası ayrı bir aşamadır ve sonucu belirlemez.
export function yatirimTesvikBelgesiDegerlendir(g: DestekBasvuruGirdisi): ProgramSonucuTaslak {
  const meta = { programId: "yatirim-tesvik-belgesi", programAdi: "Yatırım Teşvik Belgesi", kurum: "Sanayi ve Teknoloji Bakanlığı" };
  const gerekceler: string[] = [];
  const eksikAlanlar: string[] = [];
  const uyarilar = [
    "Kesin başvuru E-TUYS üzerinden yapılır ve mutlaka bir teşvik danışmanı/YMM ile teyit edilmelidir.",
    "Bu ön analizde modellenmeyen iki istisna asgari yatırım tutarı/pozitif liste şartını tamamen kaldırabilir: MADDE 9/1-m (ihtisas serbest bölgesinde yazılım faaliyeti) ve MADDE 18/5 (1. bölgeden 4/5/6. bölgeye NACE 10-32/38.2 kapsamında, en az 50 istihdam şartıyla yapılan nakil yatırımları) — yatırımınız bunlara giriyorsa asgari tutar aranmayabilir.",
    "KOBİ dışı veya Yerel Kalkınma Hamlesi kapsamındaki yatırımcılar için MADDE 5/9 uyarınca yatırım tutarının en az %2'si oranında bir 'ekosistem geliştirme planı' zorunluluğu olabilir; bu ön analizde ayrıca sorulmuyor.",
    "MADDE 33 uyarınca bu Karar kapsamındaki destekler, kredi faiz/kâr payı sübvansiyonu istisnası dışında, KOSGEB/TÜBİTAK gibi başka bir kamu kurumunun desteğiyle AYNI GİDER KALEMİ için çakışamaz.",
  ];

  // Tebliğ Madde 3 tanımı gereği tevsi/modernizasyon/ürün çeşitlendirme/entegrasyon/nakil
  // yatırımlarının hepsi ÜZERİNE YAPILDIĞI mevcut bir tesisi varsayar — yalnızca "komple
  // yeni yatırım" mevcut tesis gerektirmez. Bu iki alan birbirine bağlı olduğu halde
  // önceden hiç karşılaştırılmıyordu, "Tevsi" + "mevcut tesis yok" gibi tanım gereği
  // imkânsız bir kombinasyon sessizce "kismen_uygun" dönebiliyordu.
  const MEVCUT_TESIS_GEREKTIREN_TURLER: Record<string, string> = {
    tevsi: "Tevsi (kapasite artırımı)",
    modernizasyon: "Modernizasyon",
    urun_cesitlendirme: "Ürün çeşitlendirme",
    entegrasyon: "Entegrasyon",
    nakil: "Nakil",
  };
  if (g.yatirimTuru !== undefined && g.yatirimTuru !== "komple_yeni" && g.mevcutTesisVarMi === false) {
    return sonuc(
      meta.programId, meta.programAdi, meta.kurum, "belirsiz",
      "Yatırım türü ile mevcut tesis bilgisi birbiriyle çelişiyor, önce bunu netleştirmemiz gerekiyor.",
      [
        `"${MEVCUT_TESIS_GEREKTIREN_TURLER[g.yatirimTuru] ?? g.yatirimTuru}" yatırım türü, tanımı gereği (Tebliğ Madde 3) üzerine yapılacağı mevcut bir tesisi varsayar, ama "mevcut tesisiniz yok" belirtilmiş — bu iki cevap birbiriyle çelişiyor.`,
      ],
      [
        ...uyarilar,
        "Gerçekten mevcut bir üretim tesisiniz yoksa yatırım türünü \"Komple yeni yatırım\" olarak değiştirin; mevcut bir tesisiniz varsa \"Mevcut bir tesisiniz var mı?\" sorusunu \"Evet\" olarak güncelleyin.",
      ]
    );
  }

  const pozitifListede = yatirimTesvikPozitifListedeMi(g.yatirimKonusuNaceKodu);
  if (pozitifListede === null) eksikAlanlar.push("yatırım konusu NACE kodu");
  else if (!pozitifListede && g.dijitalVeyaYesilDonusumMu !== true) {
    gerekceler.push("Yatırım konusu, teşvik sisteminin pozitif listesinde (EK-3) görünmüyor ve Dijital/Yeşil Dönüşüm Programı kapsamında da belirtilmemiş.");
    return sonuc(meta.programId, meta.programAdi, meta.kurum, "uygun_degil", "Yatırım konusu pozitif liste dışında görünüyor.", gerekceler, uyarilar);
  } else {
    gerekceler.push(pozitifListede ? "Yatırım konusu, pozitif listedeki (EK-3) geniş sektör gruplarından birine giriyor." : "Dijital/Yeşil Dönüşüm Programı kapsamında olduğu belirtildiği için pozitif liste şartı aranmıyor.");
  }

  const bolge = ilinBolgesi(g.yatirimIli);
  if (bolge === null) eksikAlanlar.push("yatırım ili");
  else {
    const asgari = yatirimAsgariTutarTl(bolge);
    if (g.planlananSabitYatirimTutariTl === undefined) eksikAlanlar.push("planlanan sabit yatırım tutarı");
    else if (g.planlananSabitYatirimTutariTl < asgari) {
      gerekceler.push(`Planlanan yatırım tutarı, ${g.yatirimIli} (${bolge}. bölge) için 2026 asgari tutarı olan ${asgari.toLocaleString("tr-TR")} TL'nin altında.`);
      return sonuc(meta.programId, meta.programAdi, meta.kurum, "uygun_degil", "Asgari yatırım tutarı sağlanmıyor.", gerekceler, uyarilar);
    } else {
      gerekceler.push(`Planlanan yatırım tutarı, ${g.yatirimIli} (${bolge}. bölge) için asgari ${asgari.toLocaleString("tr-TR")} TL şartını karşılıyor.`);
    }
  }

  if (g.planlananSabitYatirimTutariTl !== undefined && g.planlananSabitYatirimTutariTl >= 1_000_000_000) {
    uyarilar.push("Planlanan yatırım tutarı 1 milyar TL ve üzerinde — başvuru ekinde 2016/9495 sayılı Karar EK-1 formatında hazırlanmış bir fizibilite raporu zorunludur.");
  }
  if (g.planlananSabitYatirimTutariTl !== undefined && g.planlananSabitYatirimTutariTl >= 100_000_000) {
    uyarilar.push("Gerçekleşen yatırım tutarı 100 milyon TL'yi geçtiğinde tamamlama vizesi için YMM raporu zorunlu (50-100 milyon TL aralığında SMMM raporu yeterli).");
  } else if (g.planlananSabitYatirimTutariTl !== undefined && g.planlananSabitYatirimTutariTl >= 50_000_000) {
    uyarilar.push("Gerçekleşen yatırım tutarı 50-100 milyon TL aralığında kalırsa tamamlama vizesi için SMMM raporu yeterli olur (100 milyon TL üzerinde YMM raporu zorunlu hâle gelir).");
  }

  if (g.yuksekVeyaOrtaYuksekTeknolojiUrunMu === true) {
    gerekceler.push("Yüksek veya orta-yüksek teknolojili ürün üretimi olarak işaretlenmiş — bu tür yatırımlar, öncelikli ürün listesi dışında kalsa bile Öncelikli/Hedef Yatırımlar Teşvik Sistemi kapsamında değerlendirilebilir, ancak bu kategoriler genellikle çok daha yüksek asgari yatırım tutarı eşikleri (örn. yüksek teknolojili ürün için 500 milyon TL, orta-yüksek için İstanbul hariç 1 milyar TL) ve ayrı bir öncelikli ürün listesiyle eşleşme gerektirir.");
  }

  // EK-3'teki satır bazlı özel şartlar (asgari kapasite, m², oda sayısı vb.) yatırım konusuna
  // göre değişir; bu bir başvuru şartıdır, sağlanmıyorsa belge verilmez.
  if (g.ek3OzelSartlarSaglaniyorMu === false) {
    gerekceler.push("Yatırım konusu için EK-3'te belirtilen özel şartlar (asgari kapasite, m², oda sayısı vb.) sağlanmıyor.");
    return sonuc(meta.programId, meta.programAdi, meta.kurum, "uygun_degil", "EK-3 özel şartları sağlanmıyor.", gerekceler, uyarilar);
  }
  if (g.ek3OzelSartlarSaglaniyorMu === undefined) eksikAlanlar.push("yatırım konusu için EK-3'teki özel şartların (asgari kapasite vb.) sağlanıp sağlanmadığı");
  else gerekceler.push("Yatırım konusu için EK-3'teki özel şartların sağlandığı belirtilmiş.");

  if (eksikAlanlar.length > 0) {
    return sonuc(
      meta.programId, meta.programAdi, meta.kurum, "belirsiz",
      "Girilen bilgilerle başvuru şartlarının tamamı netleşmedi.",
      gerekceler,
      [...uyarilar, `Eksik bilgiler: ${eksikAlanlar.join(", ")}.`]
    );
  }

  return sonuc(
    meta.programId, meta.programAdi, meta.kurum, "uygun",
    "Girilen bilgilere göre yatırımınız teşvik belgesi başvuru şartlarının tamamını sağlıyor. E-TUYS incelemesi başvuru sonrası ayrı bir aşamadır.",
    gerekceler,
    uyarilar
  );
}

// TÜBİTAK 2026-2028 Öncelikli Ar-Ge ve Yenilik Konuları kataloğu uyumu — 1501/1507/1832 ortak.
// Bilgilendirme amaçlıdır, sonuç durumunu ("uygun_degil") etkilemez; kataloğun kendisi de
// öncelik dışı ama güçlü gerekçeli projelerin değerlendirmeye alınacağını belirtir.
// Kaynak: research/destek-uygunluk/tubitak-1501.md ("Öncelikli Ar-Ge ve Yenilik Konuları" bölümü)
function oncelikliAlanGerekcesi(kategori: DestekBasvuruGirdisi["argeOncelikliAlanKategorisi"]): string | null {
  if (kategori === undefined || kategori === "emin_degil") return null;
  if (kategori === "kapsam_disi") {
    return "Proje, TÜBİTAK'ın 2026-2028 Öncelikli Ar-Ge ve Yenilik Konuları kataloğunun 3 ana hedef kategorisinin (Endüstride Teknolojik Sıçrama, Dijital Liderlik, Yeşil Dönüşüm) dışında işaretlenmiş. Bu durum başvuruyu geçersiz kılmaz — kataloğun kendisi de güçlü bilimsel/teknolojik gerekçesi olan öncelik dışı projelerin değerlendirmeye alınacağını belirtiyor — ancak öncelikli bir konuyla eşleşme genellikle değerlendirmede olumlu bir sinyaldir.";
  }
  const ETIKET: Record<string, string> = {
    endustride_teknolojik_sicrama: "Endüstride Teknolojik Sıçrama",
    dijital_liderlik: "Dijital Liderlik",
    yesil_donusum: "Yeşil Dönüşüm",
  };
  // 2026-2 (1501/1507) ve 2026-3 (1707) çağrılarında yalnızca ilk iki başlık +5 puan / öncelik alıyor.
  if (kategori === "yesil_donusum") {
    return `Proje, TÜBİTAK'ın 2026-2028 Öncelikli Ar-Ge ve Yenilik Konuları kataloğunun "${ETIKET[kategori]}" ana hedefiyle uyumlu. Katalog açısından öncelikli bir alan; ancak 2026-2 (1501/1507) ve 2026-3 (1707) çağrılarında ek puan/öncelik yalnızca "Endüstride Teknolojik Sıçrama" ve "Dijital Liderlik" başlıklarına tanınıyor. Başvuru şartı değildir, Yeşil Dönüşüm projeleri de normal değerlendirmeye girer.`;
  }
  return `Proje, TÜBİTAK'ın 2026-2028 Öncelikli Ar-Ge ve Yenilik Konuları kataloğunun "${ETIKET[kategori]}" ana hedefiyle uyumlu. Bu başlık, 2026-2 (1501/1507) çağrısında 5 ek puan, 2026-3 (1707) çağrısında öncelik sağlıyor. Başvuru şartı değildir; öncelik/puan avantajıdır. Projenizin tam olarak hangi Ar-Ge konusuna girdiğini TÜBİTAK'ın konu listesinden teyit edin.`;
}

// 1501/1507/1832 ortak: proje ekibi/kaynak yetersizliği sinyalleri (üretim yatırımı
// kontrolü HARİÇ — o, 1832 için ayrı ve daha dar tanımlı, bkz. tubitak1832Degerlendir).
function argeEkipRetSinyaliVarMi(g: DestekBasvuruGirdisi): string | null {
  if (g.projeEkibindeLisansMezunuVarMi === false) {
    return "Proje ekibinde konuyla ilgili en az lisans derecesine sahip personel bulunmadığı belirtilmiş — bu, ön değerlendirmede doğrudan ret sebebi olabilir.";
  }
  if (g.argeFaaliyetiKaynagi === "buyuk_olcude_disaridan") {
    return "Ar-Ge faaliyetinin büyük ölçüde dışarıdan hizmet alımıyla yapıldığı belirtilmiş — kuruluşun kendi Ar-Ge katkısının yetersiz görülme riski var.";
  }
  return null;
}

// Yalnızca TÜBİTAK 1501/1507 için. 1501 MADDE 10/2 ve 1507 MADDE 9/2 (2026 Uygulama
// Esasları, birincil kaynaktan doğrulandı, 2026-09-17) BİREBİR AYNI metni içeriyor: ret
// sebebi yalnızca projenin ESAS/AĞIRLIKLI amacının üretim kapasitesi kurmak olması ve
// Ar-Ge içeriğinin yok/zayıf olması — tesis/tezgah/prototip alımının kendisi değil (bkz.
// MADDE 13-1501/12-1507: Ar-Ge'ye hizmet eden alımlar %100, seri üretimde de kullanılacak
// zorunlu ekipman oransal desteklenir). 1832 bu fonksiyonu KULLANMAZ (bkz.
// tubitak1832Degerlendir), kendi MADDE 20.2 kriterini kullanır.
function argeRetSinyalleriVarMi(g: DestekBasvuruGirdisi): string | null {
  if (g.uretimYatirimNiteligi === "esas_amac_uretim_kapasitesi") {
    return "Projenin esas/ağırlıklı amacının üretim kapasitesi kurmak olduğu, Ar-Ge/tasarım/doğrulama içeriğinin yok veya çok zayıf olduğu belirtilmiş — bu tür projeler doğrudan reddedilebilir (1501 MADDE 10/2, 1507 MADDE 9/2).";
  }
  return argeEkipRetSinyaliVarMi(g);
}

// Aynı MADDE 13-1501/12-1507: üretim/tesis alımı ret sebebi değilse, projedeki rolüne
// göre destek oranını etkileyen bilgilendirici bir gerekçe döner (ret değil).
function uretimYatirimGerekcesi(niteligi: UretimYatirimNiteligi | undefined, oransalDestekMetni: string): string | null {
  if (niteligi === "arge_hizmetinde") {
    return "Üretim/tesis ile ilgili alımlar tasarım, prototip üretimi, pilot tesis kurulumu veya test/analiz/ölçüm gibi doğrudan Ar-Ge faaliyetine hizmet ediyor — bu kalemler tam (%100) desteklenir.";
  }
  if (niteligi === "seri_uretimde_de_kullanilacak") {
    return `Ar-Ge sonrası seri üretimde de kullanılacak zorunlu alet/teçhizat/kalıp içeriyor — bu kalemler tam değil, oransal desteklenir (${oransalDestekMetni}).`;
  }
  return null;
}

// --- 4) TÜBİTAK 1501 - Sanayi Ar-Ge Projeleri Destekleme Programı ---
// Kaynak: research/destek-uygunluk/tubitak-1501.md
export function tubitak1501Degerlendir(g: DestekBasvuruGirdisi): ProgramSonucuTaslak {
  const meta = { programId: "tubitak-1501", programAdi: "TÜBİTAK 1501 - Sanayi Ar-Ge Projeleri Destekleme Programı", kurum: "TÜBİTAK" };
  const gerekceler: string[] = [];
  const eksikAlanlar: string[] = [];

  if (g.sirketTuru !== undefined && g.sirketTuru !== "limited" && g.sirketTuru !== "anonim" && g.sirketTuru !== "diger_sermaye") {
    gerekceler.push("Bu programa yalnızca Türkiye'de yerleşik sermaye şirketleri (A.Ş., Ltd. Şti. vb.) başvurabilir — şahıs şirketi, adi ortaklık, dernek/vakıf/kooperatif başvuramaz.");
    return sonuc(meta.programId, meta.programAdi, meta.kurum, "uygun_degil", "Kuruluş türü uygun değil.", gerekceler);
  }
  if (g.sirketTuru === undefined) eksikAlanlar.push("şirket türü");

  if (g.turkiyedeYerlesikMi === false) {
    gerekceler.push("Yurt dışı merkezli işletmelerin Türkiye'deki dar mükellef temsilcilik/şubeleri başvuramaz.");
    return sonuc(meta.programId, meta.programAdi, meta.kurum, "uygun_degil", "Türkiye'de yerleşiklik şartı sağlanmıyor.", gerekceler);
  }

  // 2026-2 çağrı duyurusu (tubitak.gov.tr, 20 Temmuz 2026): "KOBİ ölçeğindeki kuruluşların
  // başvuru yapabilecekleri". TÜBİTAK 16/04/2019 duyurusuyla 1 Temmuz 2019'dan itibaren büyük
  // ölçekli kuruluşları genel 1501 çağrılarının dışına çıkardı (öncelikli alan çağrılarına
  // yönlendirildi). Eski sürümde "KOBİ zorunluluğu yoktur" deniyordu; güncel çağrıyla çelişiyordu.
  const mali1501 = kobiMaliUstDeger(g.yillikNetSatisHasilatiTl, g.maliBilancoTl);
  const olcek1501 = kobiOlceguHesapla(g.calisanSayisi, mali1501);
  if (olcek1501 === "kobi_disi") {
    gerekceler.push("Genel 1501 çağrıları yalnızca KOBİ ölçeğindeki sermaye şirketlerine açık (TÜBİTAK 2026-2 çağrı duyurusu); girilen çalışan sayısı/ciro büyük ölçekli firma sınırını aşıyor. Büyük ölçekli firmalar TÜBİTAK'ın öncelikli alanlarda açtığı ayrı çağrılara yönlendiriliyor.");
    return sonuc(meta.programId, meta.programAdi, meta.kurum, "uygun_degil", "KOBİ ölçek şartı sağlanmıyor.", gerekceler);
  }
  if (olcek1501 === null) {
    if (g.calisanSayisi === undefined) eksikAlanlar.push("çalışan sayısı");
    if (mali1501 === undefined) eksikAlanlar.push("yıllık net satış hasılatı veya mali bilanço");
  }

  const retSinyali = argeRetSinyalleriVarMi(g);
  if (retSinyali) {
    gerekceler.push(retSinyali);
    return sonuc(meta.programId, meta.programAdi, meta.kurum, "uygun_degil", "Ön değerlendirmede ret riski yüksek somut bir sinyal var.", gerekceler);
  }
  if (g.projeEkibindeLisansMezunuVarMi === undefined) eksikAlanlar.push("proje ekibinde lisans mezunu personel durumu");
  if (g.uretimYatirimNiteligi === undefined) eksikAlanlar.push("makine/teçhizat/tesis alımının projedeki rolü");

  const uretimYatirimNotu1501 = uretimYatirimGerekcesi(g.uretimYatirimNiteligi, "proje süresi (ay) × %2, taban %40, bazı bileşenlerde %25'e kadar inebilir");
  if (uretimYatirimNotu1501) gerekceler.push(uretimYatirimNotu1501);

  const oncelikliAlanNotu1501 = oncelikliAlanGerekcesi(g.argeOncelikliAlanKategorisi);
  if (oncelikliAlanNotu1501) gerekceler.push(oncelikliAlanNotu1501);

  gerekceler.push("Kuruluş türü, KOBİ ölçeği ve Türkiye'de yerleşiklik şartları sağlanıyor, somut bir ret sinyali görülmedi.");

  const uyarilar = [
    "Ar-Ge/yenilik niteliği hakem ve Grup Yürütme Kurulu (GYK) tarafından proje bazında değerlendirilir; bu, başvuru sonrası ayrı bir aşamadır ve bu araç tarafından öngörülemez.",
    "Proje başına TÜBİTAK katkısı 20 milyon TL ile sınırlı; destek oranı ilk 5 projede %75, 6. projeden itibaren %60'tır (TÜBİTAK 2026-2 çağrı duyurusu).",
    "Başvurudan önce PRODİS üzerinden kuruluş bazlı ön kayıt yapılmalıdır (2026-2 çağrısı için ön kayıt son tarihi 22 Ekim 2026); çağrı duyurusundaki kuruluş başına proje önerisi sınırı ve çağrıya özel diğer şartlar başvuru öncesi teyit edilmelidir.",
    "Vergi ve SGK prim borcu başvuruyu engellemez, ancak destek ödemelerinin (transfer) yapılabilmesi için borcun bulunmaması gerekir.",
  ];

  if (eksikAlanlar.length > 0) {
    return sonuc(
      meta.programId, meta.programAdi, meta.kurum, "belirsiz",
      "Somut bir ret sebebi görünmüyor ama başvuru şartlarını tam değerlendirmek için eksik bilgi var.",
      gerekceler,
      [...uyarilar, `Eksik bilgiler: ${eksikAlanlar.join(", ")}.`],
      undefined,
      "26 Ekim 2026 (2026-2 çağrısı; ön kayıt 22 Ekim)"
    );
  }

  return sonuc(
    meta.programId, meta.programAdi, meta.kurum, "uygun",
    "Kuruluş, başvuru şartlarının tamamını (tür, ölçek, yerleşiklik, ekip) sağlıyor ve somut bir ret sinyali yok. Hakem/GYK değerlendirmesi başvuru sonrası ayrı bir aşamadır.",
    gerekceler,
    uyarilar,
    undefined,
    "26 Ekim 2026 (2026-2 çağrısı; ön kayıt 22 Ekim)"
  );
}

// --- 5) TÜBİTAK 1507 - KOBİ Ar-Ge Başlangıç Destek Programı ---
// Kaynak: research/destek-uygunluk/tubitak-1507.md
export function tubitak1507Degerlendir(g: DestekBasvuruGirdisi): ProgramSonucuTaslak {
  const meta = { programId: "tubitak-1507", programAdi: "TÜBİTAK 1507 - KOBİ Ar-Ge Başlangıç Destek Programı", kurum: "TÜBİTAK" };
  const gerekceler: string[] = [];
  const eksikAlanlar: string[] = [];

  if (g.sirketTuru !== undefined && g.sirketTuru !== "limited" && g.sirketTuru !== "anonim") {
    gerekceler.push("Bu programa yalnızca Türkiye'de yerleşik sermaye şirketleri (A.Ş., Ltd. Şti.) başvurabilir.");
    return sonuc(meta.programId, meta.programAdi, meta.kurum, "uygun_degil", "Kuruluş türü uygun değil.", gerekceler);
  }
  if (g.sirketTuru === undefined) eksikAlanlar.push("şirket türü");

  const mali = kobiMaliUstDeger(g.yillikNetSatisHasilatiTl, g.maliBilancoTl);
  const olcek = kobiOlceguHesapla(g.calisanSayisi, mali);
  if (olcek === "kobi_disi") {
    gerekceler.push("Bu program yalnızca KOBİ ölçeğindeki (mikro/küçük/orta) sermaye şirketlerine açık — girilen çalışan sayısı/ciro büyük ölçekli firma sınırını aşıyor.");
    return sonuc(meta.programId, meta.programAdi, meta.kurum, "uygun_degil", "KOBİ ölçek şartı sağlanmıyor.", gerekceler);
  }
  if (olcek === null) {
    if (g.calisanSayisi === undefined) eksikAlanlar.push("çalışan sayısı");
    if (mali === undefined) eksikAlanlar.push("yıllık net satış hasılatı veya mali bilanço");
  }

  const bekleyen = g.teydebBekleyenProjeSayisi ?? 0;
  const onayli = g.teydebOnayliProjeSayisi ?? 0;
  if (g.teydebBekleyenProjeSayisi === undefined && g.teydebOnayliProjeSayisi === undefined) {
    eksikAlanlar.push("TEYDEB'de bekleyen/onaylı toplam proje sayısı");
  } else if (bekleyen + onayli >= 5) {
    gerekceler.push(`Kuruluşun TÜM TEYDEB programlarında (1501 dahil) bekleyen+onaylı proje sayısı toplamı ${bekleyen + onayli} — bu sayı 5'e ulaştığından yeni başvuru yapılamaz (1512/1812 ve 1505-üniversite ortaklı projeler bu sayıma dahil değildir).`);
    return sonuc(meta.programId, meta.programAdi, meta.kurum, "uygun_degil", "TEYDEB toplam proje sayısı tavanına ulaşılmış.", gerekceler);
  } else {
    gerekceler.push(`Kuruluşun TEYDEB'de bekleyen+onaylı toplam proje sayısı ${bekleyen + onayli} — 5 proje tavanının altında.`);
  }

  // 1507 Uygulama Esasları MADDE 14(5): teknogirişim sermaye şirketleri 1507'den yalnızca bir kez
  // destek alabilir ve başvuruyu teknogirişim desteğinin tamamlandığı tarihten sonraki 24 ay içinde yapmalıdır.
  if (g.teknogirisimSermayeSirketiMi === true) {
    if (g.teknogirisimDahaOnce1507KullandiMi === true) {
      gerekceler.push("Teknogirişim sermaye şirketleri 1507'den yalnızca bir kez destek alabilir (MADDE 14/5) — bu hak daha önce kullanılmış.");
      return sonuc(meta.programId, meta.programAdi, meta.kurum, "uygun_degil", "Teknogirişim şirketi için tek seferlik 1507 hakkı kullanılmış.", gerekceler);
    }
    if (g.teknogirisim24AyIcindeMi === false) {
      gerekceler.push("Teknogirişim sermaye şirketlerinin başvurusu, teknogirişim desteğinin tamamlandığı tarihten sonraki 24 ay içinde yapılmalı (MADDE 14/5) — bu süre geçmiş.");
      return sonuc(meta.programId, meta.programAdi, meta.kurum, "uygun_degil", "Teknogirişim desteği sonrası 24 aylık başvuru süresi geçmiş.", gerekceler);
    }
    if (g.teknogirisimDahaOnce1507KullandiMi === undefined) eksikAlanlar.push("teknogirişim şirketi olarak 1507'den daha önce yararlanıp yararlanmadığınız");
    if (g.teknogirisim24AyIcindeMi === undefined) eksikAlanlar.push("teknogirişim desteğinin tamamlanmasından bu yana 24 ayın geçip geçmediği");
    if (g.teknogirisimDahaOnce1507KullandiMi === false && g.teknogirisim24AyIcindeMi === true) {
      gerekceler.push("Teknogirişim şirketi olarak 1507 hakkı kullanılmamış ve 24 aylık başvuru süresi içindesiniz.");
    }
  } else if (g.teknogirisimSermayeSirketiMi === undefined) {
    eksikAlanlar.push("teknogirişim sermaye şirketi olup olmadığınız");
  }

  const retSinyali = argeRetSinyalleriVarMi(g);
  if (retSinyali) {
    gerekceler.push(retSinyali);
    return sonuc(meta.programId, meta.programAdi, meta.kurum, "uygun_degil", "Ön değerlendirmede ret riski yüksek somut bir sinyal var.", gerekceler);
  }
  if (g.projeEkibindeLisansMezunuVarMi === undefined) eksikAlanlar.push("proje ekibinde lisans mezunu personel durumu");
  if (g.uretimYatirimNiteligi === undefined) eksikAlanlar.push("makine/teçhizat/tesis alımının projedeki rolü");

  const uretimYatirimNotu1507 = uretimYatirimGerekcesi(g.uretimYatirimNiteligi, "sabit %40, GYK kararıyla %25'e kadar indirilebilir");
  if (uretimYatirimNotu1507) gerekceler.push(uretimYatirimNotu1507);

  const oncelikliAlanNotu1507 = oncelikliAlanGerekcesi(g.argeOncelikliAlanKategorisi);
  if (oncelikliAlanNotu1507) gerekceler.push(oncelikliAlanNotu1507);

  gerekceler.push("Kuruluş türü, KOBİ ölçeği ve TEYDEB toplam proje sayısı şartları sağlanıyor, somut bir ret sinyali görülmedi.");
  gerekceler.push("Kuruluş yaşı veya sektöre dair bir kısıt yok — yeni kurulmuş şirketler de (KOBİ ölçeğindeyse) başvurabilir.");

  if (g.ortakliBasvuruMu === true) {
    gerekceler.push("Ortaklı başvuru belirtilmiş — 1507'de KOBİ'lerin ilk beş projesinden en az ikisinin ortaklı olması beklenir (MADDE 2, 14/2-a); bu bilgi bilgilendirme amaçlıdır, başvuruyu engellemez.");
  }

  const uyarilar = [
    "Ar-Ge/yenilik niteliği hakem ve Grup Yürütme Kurulu (GYK) tarafından proje bazında değerlendirilir; bu, başvuru sonrası ayrı bir aşamadır ve bu araç tarafından öngörülemez.",
    "Güncel çağrıda (2026/2) azami proje bütçesi 3.500.000 TL, destek oranı %75 olarak görülüyor (dönemsel olarak değişebilir).",
    "Başvurudan önce PRODİS üzerinden kuruluş bazlı ön kayıt yapılmalıdır (2026-2 çağrısı için ön kayıt son tarihi 9 Kasım 2026); çağrıdaki kuruluş başına proje önerisi sınırı başvuru öncesi teyit edilmelidir.",
    "Vergi ve SGK prim borcu başvuruyu engellemez, ancak destek ödemelerinin (transfer) yapılabilmesi için borcun bulunmaması gerekir.",
  ];

  if (eksikAlanlar.length > 0) {
    return sonuc(
      meta.programId, meta.programAdi, meta.kurum, "belirsiz",
      "Somut bir ret sebebi görünmüyor ama başvuru şartlarını tam değerlendirmek için eksik bilgi var.",
      gerekceler,
      [...uyarilar, `Eksik bilgiler: ${eksikAlanlar.join(", ")}.`],
      undefined,
      "11 Kasım 2026 (2026-2 çağrısı; ön kayıt 9 Kasım)"
    );
  }

  return sonuc(
    meta.programId, meta.programAdi, meta.kurum, "uygun",
    "Kuruluş, başvuru şartlarının tamamını (tür, ölçek, proje sayısı, ekip) sağlıyor ve somut bir ret sinyali yok. Hakem/GYK değerlendirmesi başvuru sonrası ayrı bir aşamadır.",
    gerekceler,
    uyarilar,
    undefined,
    "11 Kasım 2026 (2026-2 çağrısı; ön kayıt 9 Kasım)"
  );
}

// --- 7) Ticaret Bakanlığı İhracat Destekleri (5973 / 10962 sayılı Kararlar) ---
// Kaynak: research/destek-uygunluk/ticaret-bakanligi-ihracat-destekleri.md (blog: ticaret-bakanligi-ihracat-destekleri-2026)
// Kapsam çok geniş (10'un üzerinde alt destek kalemi) olduğundan bu değerlendirme
// hiçbir zaman kesin "uygun" döndürmez — hangi Karar'a ve hangi alt kaleme
// girdiğinizi belirleyen bir ön yönlendirmedir.
export function ticaretBakanligiIhracatDesteklerDegerlendir(g: DestekBasvuruGirdisi): ProgramSonucuTaslak {
  const meta = { programId: "ticaret-bakanligi-ihracat-destekleri", programAdi: "Ticaret Bakanlığı İhracat Destekleri", kurum: "Ticaret Bakanlığı" };
  const gerekceler: string[] = [];
  const eksikAlanlar: string[] = [];
  const uyarilar = [
    "Bu program onlarca alt destek kalemini (Pazara Giriş Belgesi, Marka Tescili, Fuar, Birim Kira, Tanıtım, E-İhracat, Hizmet Sektörleri Atılım Programı vb.) kapsar; hangi kalemin size uygun olduğu ihracat türünüze ve faaliyetinize göre ayrıca değerlendirilmelidir.",
  ];

  // 2026-09-18 DÜZELTME (5973 ve 10962 sayılı Kararların birincil kaynaktan tam metni
  // okundu): (TÜFE+Yİ-ÜFE)/2 formülü yalnızca 5973'te (fiziksel mal) geçiyor; 10962'de
  // (hizmet) genel kural VUK mükerrer 298/B yeniden değerleme oranı — eskiden ikisine de
  // aynı formül uygulanıyordu, bu artık ihracat türüne göre ayrıştırıldı.
  if (g.ihracatTuru === undefined) eksikAlanlar.push("ihracat türü (fiziksel mal / hizmet)");
  else if (g.ihracatTuru === "fiziksel_mal") {
    gerekceler.push("Fiziksel mal ihracatı belirtilmiş — 5973 sayılı İhracat Destekleri Hakkında Karar kapsamındaki Pazara Giriş Belgesi, Marka Tescili, Fuar, Birim Kira, Tanıtım, Küresel Tedarik Zinciri ve E-İhracat destekleri (5986 sayılı Karar) değerlendirmeye alınabilir.");
    uyarilar.push("5973 sayılı Karar MADDE 30 uyarınca üst limitler her yıl (TÜFE+Yİ-ÜFE)/2 oranında güncellenir.");
  } else if (g.ihracatTuru === "hizmet") {
    gerekceler.push("Hizmet ihracatı (yazılım/bilişim, danışmanlık, sağlık turizmi, eğitim vb.) belirtilmiş — 1 Ocak 2026'dan itibaren geçerli 10962 sayılı 'Hizmet İhracatının Tanımlanması, Sınıflandırılması ve Hizmet Sektörlerinin Desteklenmesi Hakkında Karar' kapsamındaki Hizmet Sektörleri Atılım Programı, Markalaşma Programı ve Sürdürülebilirlik Programı değerlendirmeye alınabilir.");
    uyarilar.push("10962 sayılı Karar MADDE 43 uyarınca üst limitler genel olarak VUK mükerrer 298/B yeniden değerleme oranına göre güncellenir (5973'teki (TÜFE+Yİ-ÜFE)/2 formülünden farklı).");
  } else {
    gerekceler.push("Hem fiziksel mal hem hizmet ihracatı belirtilmiş — gelir kalemleri kendi niteliğine göre ayrı ayrı, sırasıyla 5973 ve 10962 sayılı Kararlar kapsamında değerlendirilmelidir.");
  }

  // 2026-09-18: Koray'ın önerisiyle eklendi — 5973 sayılı Karar'ın en sık kullanılan 3 alt
  // kalemi (Fuar, Birim Kira, Tanıtım) artık ayrı ayrı soruluyor; hangisi "yapıyorum" ya da
  // "yapacağım" ise o kaleme özel, doğru gerekçe gösteriliyor (genel tek cümle yerine).
  // Yalnızca fiziksel mal ihracatında geçerli (5973'ün kapsamı); bu üç soru bilgilendirici,
  // eksik bilgi olarak sayılmıyor, çünkü hiçbiri genel uygunluğu değiştirmiyor.
  if (g.ihracatTuru === "fiziksel_mal" || g.ihracatTuru === "her_ikisi") {
    if (g.fuarKatilimiVarMi === true) {
      gerekceler.push(
        g.ihracatciBirligiUyesiMi === false
          ? "Yurt içi/dışı fuarlara katılıyor veya katılmayı planlıyorsunuz — Fuar Desteği (uçak/konaklama dahil) bu kapsamda değerlendirilebilir, ANCAK bu kalem İhracatçı Birliği üyeliği şartına tabi ve üye olmadığınız belirtilmiş."
          : "Yurt içi/dışı fuarlara katılıyor veya katılmayı planlıyorsunuz — Fuar Desteği (uçak/konaklama dahil) bu kapsamda değerlendirilebilir."
      );
    }
    if (g.yurtDisindaBirimDepoKiralamaVarMi === true) {
      gerekceler.push("Yurt dışında birim/depo kiralıyor veya kiralamayı planlıyorsunuz — Birim Kira Desteği bu kapsamda değerlendirilebilir (bu kalemde İhracatçı Birliği üyeliği aranmıyor).");
    }
    if (g.yurtDisindaReklamTanitimVarMi === true) {
      gerekceler.push("Yurt dışında reklam/tanıtım faaliyeti yürütüyor veya yürütmeyi planlıyorsunuz — Tanıtım Desteği bu kapsamda değerlendirilebilir (bu kalemde İhracatçı Birliği üyeliği aranmıyor).");
    }
    if (g.pazaraGirisBelgesiIhtiyaciVarMi === true) {
      gerekceler.push("Ürününüz için yurt dışında zorunlu bir sertifika/test/ruhsat alıyor veya almayı planlıyorsunuz — Pazara Giriş Belgesi Desteği (5973 sayılı Karar Md.3) bu kapsamda değerlendirilebilir.");
    }
    // Md.4 kapsamındaki Yurt Dışı Marka Tescil Desteği, yurt içinde ZATEN tescilli bir
    // markanın yurt dışına taşınmasını destekler — tescilsiz marka bu kalemden doğrudan
    // yararlanamaz, önce yurt içi tescil gerekir (bu durumda destek yerine marka/patent
    // danışmanlığı hizmeti öneriliyor — bkz. hizmet-onerileri.ts).
    if (g.markaTesciliVarMi === true) {
      gerekceler.push("Markanız zaten tescilli — yurt dışında da tescil ettirmeyi planlıyorsanız Yurt Dışı Marka Tescil Desteği (5973 sayılı Karar Md.4) bu kapsamda değerlendirilebilir.");
    } else if (g.markaTesciliVarMi === false) {
      gerekceler.push("Yurt Dışı Marka Tescil Desteği, yurt içinde zaten tescilli bir markanın yurt dışına taşınmasını kapsar; henüz tescilli bir markanız olmadığı belirtilmiş — önce yurt içi marka tescilinin alınması gerekir.");
    }
    if (g.kureselTedarikZinciriVarMi === true) {
      gerekceler.push("Büyük bir küresel tedarik zincirine girmeye çalışıyor veya bunu planlıyorsunuz — Küresel Tedarik Zinciri Yetkinlik Projesi Desteği (5973 sayılı Karar Md.10) bu kapsamda değerlendirilebilir.");
    }
    if (g.eIhracatVarMi === true) {
      gerekceler.push("Yurt dışı pazaryerleri veya kendi e-ticaret siteniz üzerinden satış yapıyor veya yapmayı planlıyorsunuz — E-İhracat Destek Programı bu kapsamda değerlendirilebilir (5973'ten bağımsız, ayrı bir mevzuata, 5986 sayılı E-İhracat Destekleri Hakkında Karar'a dayanır).");
    }
  }

  // 2026-09-18 DÜZELTME: birincil kaynaktan (5973 ve 10962 sayılı Kararların tam metni)
  // doğrulandı — İhracatçı Birliği üyeliği bu destek grubunun "neredeyse tamamı" için değil,
  // yalnızca FUAR destekleri (5973 MADDE 7-8, "yurt içi/dışı fuar katılımcısı" tanımı) ve
  // hizmet tarafında YLDA "Kullanıcı" tanımı (10962 MADDE 3-ı) için ön koşul. Pazara Giriş
  // Belgesi, Marka Tescili, Birim Kira, Tanıtım, Küresel Tedarik Zinciri, Hizmet Sektörleri
  // Atılım/Markalaşma/Sürdürülebilirlik Programları gibi diğer kalemlerde üyelik aranmıyor.
  // Önceki sürüm bunu tüm grubu kapsayan bir ret sebebi sayıyordu — bu yanlıştı, düzeltildi.
  if (g.ihracatciBirligiUyesiMi === false) {
    gerekceler.push("İlgili İhracatçı Birliği'ne üye olmadığınız belirtilmiş — bu yalnızca Fuar destekleri (yurt içi/dışı fuar katılımcısı tanımı) ve hizmet tarafında YLDA kullanıcı statüsü için ön koşul; Pazara Giriş Belgesi, Marka Tescili, Birim Kira, Tanıtım, Küresel Tedarik Zinciri ve Hizmet Sektörleri Atılım/Markalaşma/Sürdürülebilirlik Programları gibi diğer kalemler için üyelik şartı aranmıyor.");
  } else if (g.ihracatciBirligiUyesiMi === true) {
    gerekceler.push("İlgili İhracatçı Birliği'ne üyelik mevcut — Fuar destekleri dahil tüm kalemler için bu ön koşul sağlanıyor.");
  }

  // Alt kalem bazlı karar: program, koşulları sağlanan en az bir alt kalem varsa "uygun" olur.
  // Üyelik yalnızca Fuar kalemi için aranır; tescilsiz marka Yurt Dışı Marka Tescil Desteği'ne giremez.
  const fizikselMal = g.ihracatTuru === "fiziksel_mal" || g.ihracatTuru === "her_ikisi";
  const hizmetIhracati = g.ihracatTuru === "hizmet" || g.ihracatTuru === "her_ikisi";
  const uygunKalemler: string[] = [];
  const saglanamayanKalemler: string[] = [];
  if (fizikselMal) {
    if (g.fuarKatilimiVarMi === true) {
      if (g.ihracatciBirligiUyesiMi === true) uygunKalemler.push("Fuar Desteği");
      else if (g.ihracatciBirligiUyesiMi === false) saglanamayanKalemler.push("Fuar Desteği (İhracatçı Birliği üyeliği şart)");
      else eksikAlanlar.push("İhracatçı Birliği üyeliği durumu (Fuar Desteği için zorunlu)");
    }
    if (g.yurtDisindaBirimDepoKiralamaVarMi === true) uygunKalemler.push("Birim Kira Desteği");
    if (g.yurtDisindaReklamTanitimVarMi === true) uygunKalemler.push("Tanıtım Desteği");
    if (g.pazaraGirisBelgesiIhtiyaciVarMi === true) uygunKalemler.push("Pazara Giriş Belgesi Desteği");
    // Tescilsiz marka yalnızca bu kalemi dışlar (programı değil) — kalem listesine eklenmez.
    if (g.markaTesciliVarMi === true) uygunKalemler.push("Yurt Dışı Marka Tescil Desteği");
    if (g.kureselTedarikZinciriVarMi === true) uygunKalemler.push("Küresel Tedarik Zinciri Yetkinlik Projesi Desteği");
    if (g.eIhracatVarMi === true) uygunKalemler.push("E-İhracat Destek Programı");
  }
  if (hizmetIhracati) uygunKalemler.push("Hizmet Sektörleri Atılım / Markalaşma / Sürdürülebilirlik Programları");

  if (fizikselMal && !hizmetIhracati && uygunKalemler.length === 0) {
    if (saglanamayanKalemler.length > 0) {
      gerekceler.push(`Seçtiğiniz alt kalemlerin koşulları sağlanmıyor: ${saglanamayanKalemler.join("; ")}.`);
      return sonuc(meta.programId, meta.programAdi, meta.kurum, "uygun_degil", "Seçilen alt kalemlerin koşulları sağlanmıyor.", gerekceler, uyarilar);
    }
    eksikAlanlar.push("hangi alt destek kalemini kullanacağınız (fuar, birim kira, tanıtım, pazara giriş belgesi, marka tescili, küresel tedarik zinciri, e-ihracat)");
  }

  if (g.dysKayitliMi === undefined) eksikAlanlar.push("Destek Yönetim Sistemi (DYS) kaydı durumu");
  else if (g.dysKayitliMi) gerekceler.push("Destek Yönetim Sistemi (DYS) kaydı mevcut — başvuru altyapısı hazır.");
  else uyarilar.push("DYS kaydınız yok; hiçbir alt kalem için başvuru yapılabilmesi için önce Destek Yönetim Sistemi'ne kayıt (e-imza ve kullanıcı yetkilendirmesi) tamamlanmalıdır.");

  if (eksikAlanlar.length > 0) {
    return sonuc(
      meta.programId, meta.programAdi, meta.kurum, "belirsiz",
      "Girilen bilgilerle hangi destek kaleminin uygun olduğu netleşmedi.",
      gerekceler,
      [...uyarilar, `Eksik bilgiler: ${eksikAlanlar.join(", ")}.`]
    );
  }

  return sonuc(
    meta.programId, meta.programAdi, meta.kurum, "uygun",
    `Koşullarını sağladığınız destek kalemleri: ${uygunKalemler.join(", ")}. Her kalemin tutar/oran limitleri ve belge şartları ayrıca geçerlidir.`,
    gerekceler,
    uyarilar
  );
}

// --- 8) TÜBİTAK 1832 - Sanayide Yeşil Dönüşüm Programı ---
// Dünya Bankası destekli Türkiye Yeşil Sanayi Projesi kapsamında, TEYDEB tarafından yürütülür.
// Kaynak: research/destek-uygunluk/tubitak-1832.md
export function tubitak1832Degerlendir(g: DestekBasvuruGirdisi): ProgramSonucuTaslak {
  const meta = { programId: "tubitak-1832", programAdi: "TÜBİTAK 1832 - Sanayide Yeşil Dönüşüm Programı", kurum: "TÜBİTAK" };
  const gerekceler: string[] = [];
  const eksikAlanlar: string[] = [];

  if (g.sirketTuru !== undefined && g.sirketTuru !== "limited" && g.sirketTuru !== "anonim" && g.sirketTuru !== "diger_sermaye") {
    gerekceler.push("Bu programa yalnızca Türkiye'de yerleşik sermaye şirketleri başvurabilir.");
    return sonuc(meta.programId, meta.programAdi, meta.kurum, "uygun_degil", "Kuruluş türü uygun değil.", gerekceler);
  }
  if (g.sirketTuru === undefined) eksikAlanlar.push("şirket türü");

  if (g.turkiyedeYerlesikMi === false) {
    gerekceler.push("Türkiye'de yerleşik olmayan kuruluşlar başvuramaz.");
    return sonuc(meta.programId, meta.programAdi, meta.kurum, "uygun_degil", "Türkiye'de yerleşiklik şartı sağlanmıyor.", gerekceler);
  }

  if (g.projeYesilDonusumHedefliMi === false) {
    gerekceler.push("Programın çekirdek şartı, projenin üretimde kaynak/enerji verimliliği, atık azaltımı veya düşük karbonlu üretim gibi somut bir yeşil dönüşüm hedefi taşımasıdır — bu belirtilmemiş.");
    return sonuc(meta.programId, meta.programAdi, meta.kurum, "uygun_degil", "Yeşil dönüşüm hedefi sağlanmıyor.", gerekceler);
  }
  if (g.projeYesilDonusumHedefliMi === undefined) eksikAlanlar.push("projenin yeşil dönüşüm (enerji/kaynak verimliliği, atık azaltımı vb.) hedefi taşıyıp taşımadığı");

  // MADDE 20.2 (1832 Çağrı Duyurusu 2025-3, birincil kaynaktan doğrulandı, 2026-09-17):
  // "Proje üretim altyapısı oluşturmaya yönelik yatırım projesidir" ret nedenidir — ama
  // Madde 6 pilot/demonstrasyon ölçekli üretim faaliyetlerini AÇIKÇA destekliyor. Bu yüzden
  // 1501/1507'nin kaba "üretim yatırımı ağırlıklı mı" sorusu yerine, projenin ESAS
  // İTİBARİYLE endüstriyel ölçekte bir yatırım projesi mi yoksa pilot ölçekli bir
  // doğrulama çalışması mı olduğunu soruyoruz.
  if (g.projeEndustriyelOlcekYatirimMi === true) {
    gerekceler.push("Proje, esas itibariyle endüstriyel ölçekte üretim/kapasite yatırımı (yatırım projesi) olarak işaretlenmiş — 1832 Çağrı Duyurusu MADDE 20.2 uyarınca bu, ön değerlendirmede doğrudan ret önerisine konu olabilecek bir durumdur (pilot/demonstrasyon ölçekli ekipman alımından farklı olarak).");
    return sonuc(meta.programId, meta.programAdi, meta.kurum, "uygun_degil", "Proje esas itibariyle endüstriyel ölçekte yatırım niteliğinde görünüyor.", gerekceler);
  }
  if (g.projeEndustriyelOlcekYatirimMi === undefined) {
    eksikAlanlar.push("projenin pilot/demonstrasyon ölçekli bir doğrulama çalışması mı, yoksa endüstriyel ölçekte bir kapasite yatırımı mı olduğu");
  }

  const ekipSinyali = argeEkipRetSinyaliVarMi(g);
  if (ekipSinyali) {
    gerekceler.push(ekipSinyali);
    return sonuc(meta.programId, meta.programAdi, meta.kurum, "uygun_degil", "Ön değerlendirmede ret riski yüksek somut bir sinyal var.", gerekceler);
  }

  const oncelikliAlanNotu = oncelikliAlanGerekcesi(g.argeOncelikliAlanKategorisi);
  if (oncelikliAlanNotu) gerekceler.push(oncelikliAlanNotu);

  gerekceler.push("Kuruluş türü, Türkiye'de yerleşiklik ve yeşil dönüşüm hedefi şartları sağlanıyor, somut bir ret sinyali görülmedi.");

  const uyarilar = [
    "Program, Teknoloji Hazırlık Seviyesi (THS) en az 5 (tercihen 6) ile başlayıp THS 9'a (ticarileştirme) kadar ilerleyen projelere odaklıdır; nihai Ar-Ge niteliği hakem değerlendirmesine tabidir.",
    "Dünya Bankası destekli olduğu için Çevresel-Sosyal Yönetim Çerçevesi (ESMF) şartlarına uygunluk da ayrıca aranır — bu ön analizde sorulmuyor, başvuru öncesi teyit edilmelidir.",
    "Bu program dönemsel çağrılarla açılır (Türkiye Yeşil Sanayi Projesi kapsamında); 2026-2 çağrısı 28 Eylül 2026'da kapandı — yeni çağrı ilan edilene kadar başvuru alınmaz, güncel durum TÜBİTAK TEYDEB üzerinden teyit edilmelidir.",
    "Destek oranı büyük ölçekli şirketlerde %70, KOBİ'lerde %80, deprem bölgesindeki (11 il) KOBİ'lerde %90'dır. Proje bütçesi üst sınırı mikro/küçük ölçekte 15.000.000 TL, orta ölçekte 24.000.000 TL, büyük ölçekte 51.500.000 TL'dir. (Kaynak: TÜBİTAK 1832 çağrı sayfası, tubitak.gov.tr, 2026-09-23 doğrulandı.)",
  ];

  if (eksikAlanlar.length > 0) {
    return sonuc(
      meta.programId, meta.programAdi, meta.kurum, "belirsiz",
      "Somut bir ret sebebi görünmüyor ama ön koşulları tam değerlendirmek için eksik bilgi var.",
      gerekceler,
      [...uyarilar, `Eksik bilgiler: ${eksikAlanlar.join(", ")}.`],
      true,
      "28 Eylül 2026 (2026-2 çağrısı, kapandı)"
    );
  }

  return sonuc(meta.programId, meta.programAdi, meta.kurum, "uygun", "Kuruluş, başvuru şartlarını sağlıyor ve somut bir ret sinyali yok. Ar-Ge niteliği hakem değerlendirmesinde ayrıca incelenir.", gerekceler, uyarilar, true, "28 Eylül 2026 (2026-2 çağrısı, kapandı)");
}

// --- 9) KOSGEB Dijital ve Yeşil Dönüşüm Destek Programı (KOBİ Dijital Dönüşüm DP) ---
// Kaynak: research/destek-uygunluk/kosgeb-dijital-yesil-donusum.md
// --- 9a) KOBİ Dijital Dönüşüm Destek Programı ---
// Kaynak: research/destek-uygunluk/kosgeb-dijital-yesil-donusum.md — 2026-09-17'de
// "Yeşil Sanayi Destek Programı"ndan AYRILDI (iki bağımsız program olduğu doğrulandı,
// ortak DDX/Mali Karne şartı yok).
// Rev.No:05 Yönerge (birincil kaynak, pdftotext ile tam metin okundu, 2026-09-18) MADDE 7:
// (1) TTK'da tanımlı gerçek veya tüzel kişi statüsü yeterli — sermaye şirketi şartı YOK
// (önceki kod şahıs işletmelerini haksız yere reddediyordu, düzeltildi).
// (2) Mikro ölçekli işletmeler yararlanamaz (önceki kod bunu kontrol etmiyordu, düzeltildi).
// (6) EBRD'nin "Uygun Bulunmayan Sektör/Faaliyetler Tablosu" kapsamındaki faaliyetler de
// hariç — bu ön analizde ayrı bir alan olarak sorulmuyor, uyarı olarak belirtiliyor.
// (7) Son mali yıl Öz Kaynaklar Toplamı pozitif VE son 3 mali yıldan en az birinde Faaliyet
// Kârı pozitif olmalı — artık sert bir soru (maliYeterlilikSaglaniyorMu), sadece uyarı değil.
export function kosgebDijitalDonusumDegerlendir(g: DestekBasvuruGirdisi): ProgramSonucuTaslak {
  const meta = { programId: "kosgeb-dijital-donusum", programAdi: "KOBİ Dijital Dönüşüm Destek Programı", kurum: "KOSGEB" };
  const gerekceler: string[] = [];
  const eksikAlanlar: string[] = [];

  const mali = kobiMaliUstDeger(g.yillikNetSatisHasilatiTl, g.maliBilancoTl);
  const olcek = kobiOlceguHesapla(g.calisanSayisi, mali);
  if (olcek === "mikro" || olcek === "kobi_disi") {
    gerekceler.push(`İşletme ölçeği "${olcek}" — bu program yalnızca küçük veya orta büyüklükteki işletmelere açık (mikro işletmeler ve büyük ölçekli firmalar başvuramaz).`);
    return sonuc(meta.programId, meta.programAdi, meta.kurum, "uygun_degil", "KOBİ ölçek şartı sağlanmıyor.", gerekceler);
  }
  if (olcek === null) {
    if (g.calisanSayisi === undefined) eksikAlanlar.push("çalışan sayısı");
    if (mali === undefined) eksikAlanlar.push("yıllık net satış hasılatı veya mali bilanço");
  }

  if (g.naceKodu === undefined) eksikAlanlar.push("NACE kodu");
  else if (!imalatSektoruMu(g.naceKodu)) {
    gerekceler.push("Bu program NACE Kısım C (İmalat, 10-33) sektöründeki işletmelere açık — girilen NACE kodu imalat dışında görünüyor.");
    return sonuc(meta.programId, meta.programAdi, meta.kurum, "uygun_degil", "Sektör (NACE) kapsam dışı.", gerekceler);
  }

  // Yönerge Rev.05 MADDE 7/1-2: KOSGEB veri tabanında kayıtlı ve aktif olmak, İşletme Beyanı güncel olmak.
  if (g.kosgebVeriTabaniKayitliMi === false) {
    gerekceler.push("Destek programından yararlanmak için işletmenin KOSGEB sisteminde kayıtlı ve aktif olması gerekir (MADDE 7/1) — kaydınız yok.");
    return sonuc(meta.programId, meta.programAdi, meta.kurum, "uygun_degil", "KOSGEB veri tabanı kaydı yok.", gerekceler);
  }
  if (g.kosgebVeriTabaniKayitliMi === undefined) eksikAlanlar.push("KOSGEB veri tabanı kaydının aktif olup olmadığı");
  if (g.kobiBilgiSistemiKayitGuncelMi === false) {
    gerekceler.push("İşletme Beyanı'nın güncel olması gerekir (MADDE 7/2) — beyannameniz güncel değil.");
    return sonuc(meta.programId, meta.programAdi, meta.kurum, "uygun_degil", "İşletme Beyanı güncel değil.", gerekceler);
  }
  if (g.kobiBilgiSistemiKayitGuncelMi === undefined) eksikAlanlar.push("İşletme Beyanı'nın güncel olup olmadığı");

  // MADDE 7/5 + Başvuru Kontrol Tablosu madde 4 (ret sebebi): onaylı rapor ve geçerlilik süresi içinde başvuru.
  if (g.ddxRaporuVarMi === false) {
    gerekceler.push("Başvurunun ön şartı olan, Bakanlık Makamı Olur'u ile belirlenen kurumlarca yetkilendirilmiş danışmandan alınmış onaylı dijital dönüşüm/olgunluk değerlendirme raporu henüz alınmamış.");
    return sonuc(meta.programId, meta.programAdi, meta.kurum, "uygun_degil", "Dönüşüm raporu eksik.", gerekceler);
  }
  if (g.ddxRaporuVarMi === undefined) eksikAlanlar.push("dijital dönüşüm/olgunluk değerlendirme raporu durumu");
  else if (g.ddxRaporuGecerliMi === false) {
    gerekceler.push("Raporun geçerlilik tarihi/yol haritası süresi (belirtilmemişse onay tarihinden itibaren 1 yıl) geçmiş — başvuru bu süre içinde yapılmalı (MADDE 7/5).");
    return sonuc(meta.programId, meta.programAdi, meta.kurum, "uygun_degil", "Rapor geçerlilik süresi dolmuş.", gerekceler);
  } else if (g.ddxRaporuGecerliMi === undefined) eksikAlanlar.push("raporun geçerlilik süresi içinde olup olmadığı");

  // MADDE 7/6 + Kontrol Tablosu madde 6 (ret sebebi): EBRD Uygun Bulunmayan Sektör ve Faaliyetler Tablosu.
  if (g.ebrdUygunBulunmayanFaaliyetMi === true) {
    gerekceler.push("Ana faaliyet kodunuz veya faaliyetiniz EBRD'nin 'Uygun Bulunmayan Sektör ve Faaliyetler Tablosu' kapsamında (MADDE 7/6) — bu program için başvuru yapılamaz.");
    return sonuc(meta.programId, meta.programAdi, meta.kurum, "uygun_degil", "EBRD uygun bulunmayan faaliyet listesinde.", gerekceler);
  }
  if (g.ebrdUygunBulunmayanFaaliyetMi === undefined) eksikAlanlar.push("faaliyetin EBRD Uygun Bulunmayan Sektör ve Faaliyetler Tablosu'nda olup olmadığı");

  // MADDE 5/3: işletme bu programdan bir kez yararlanabilir.
  if (g.dijitalDonusumDahaOnceKullanildiMi === true) {
    gerekceler.push("İşletme bu destek programından yalnızca bir kez yararlanabilir (MADDE 5/3) — bu hak daha önce kullanılmış.");
    return sonuc(meta.programId, meta.programAdi, meta.kurum, "uygun_degil", "Destek hakkı daha önce kullanılmış.", gerekceler);
  }
  if (g.dijitalDonusumDahaOnceKullanildiMi === undefined) eksikAlanlar.push("bu programdan daha önce yararlanıp yararlanmadığınız");

  // MADDE 6/2 ve 7/8: kredi/desteklemeye esas tutar alt limiti 1.000.000 TL, üst limit 20.000.000 TL.
  if (g.planlananDijitalYatirimTutariTl === undefined) eksikAlanlar.push("planlanan makine/teçhizat/yazılım/donanım yatırım tutarı");
  else if (g.planlananDijitalYatirimTutariTl < 1_000_000) {
    gerekceler.push(`Planlanan yatırım tutarı (${g.planlananDijitalYatirimTutariTl.toLocaleString("tr-TR")} TL), Kurul kararındaki desteklemeye esas tutar için aranan 1.000.000 TL alt limitinin altında (MADDE 7/8).`);
    return sonuc(meta.programId, meta.programAdi, meta.kurum, "uygun_degil", "Asgari yatırım tutarı sağlanmıyor.", gerekceler);
  } else if (g.planlananDijitalYatirimTutariTl > 20_000_000) {
    gerekceler.push(`Planlanan yatırım tutarı (${g.planlananDijitalYatirimTutariTl.toLocaleString("tr-TR")} TL) 20.000.000 TL üst kredi limitini aşıyor; destek bu limite kadar olan kısım için geçerli olur.`);
  } else {
    gerekceler.push(`Planlanan yatırım tutarı (${g.planlananDijitalYatirimTutariTl.toLocaleString("tr-TR")} TL) 1.000.000-20.000.000 TL aralığında.`);
  }

  // MADDE 5/2 ve 12/7: yeni makine/teçhizat/yazılım/donanım; Kurul gider kalemlerini rapor önerilerine göre değerlendirir.
  if (g.dijitalGiderlerRaporlaUyumluMu === false) {
    gerekceler.push("Alınacak makine/teçhizat/yazılım/donanım yeni olmalı ve gider kalemleri dijital dönüşüm raporundaki önerilerle uyumlu olmalı (MADDE 5/2, 12/7) — bu uyum sağlanmıyor.");
    return sonuc(meta.programId, meta.programAdi, meta.kurum, "uygun_degil", "Gider kalemleri rapor/yenilik şartıyla uyumlu değil.", gerekceler);
  }
  if (g.dijitalGiderlerRaporlaUyumluMu === undefined) eksikAlanlar.push("gider kalemlerinin yeni olması ve rapordaki önerilerle uyumlu olması");

  if (g.maliYeterlilikSaglaniyorMu === false) {
    gerekceler.push("MADDE 7/6: son mali yıl Öz Kaynaklar Toplamı'nın pozitif olması VE son 3 mali yıldan en az birinde Faaliyet Kârı'nın pozitif olması gerekiyor — bu sağlanmıyor.");
    return sonuc(meta.programId, meta.programAdi, meta.kurum, "uygun_degil", "Mali yeterlilik şartı sağlanmıyor.", gerekceler);
  }
  if (g.maliYeterlilikSaglaniyorMu === undefined) eksikAlanlar.push("son mali yıl Öz Kaynaklar Toplamı ve son 3 mali yıl Faaliyet Kârı durumu");

  gerekceler.push("KOBİ ölçeği, imalat sektörü, rapor, EBRD listesi, tekrar başvuru ve mali yeterlilik şartlarının hepsi sağlanıyor.");

  const uyarilar = [
    "Bu destek hibe değildir: banka kredisinin faiz giderine geri ödemesiz destek (alt limit 1.000.000 TL, üst limit 20.000.000 TL) ile Kurul onaylı makine/teçhizat/yazılım/donanım gider kalemlerinden oluşur. Azami vade 36 ay (+6 ay ödemesiz dönem opsiyonu), program süresi 24 aydır.",
    "Başvuru sürekli açıktır (dönemsel çağrı yok); başvurular önce şekil/kontrol aşamasından, sonra Kurul'dan (oy çokluğu, MADDE 12/6) geçer. Kurul, finansal yeterliliği protokol bankaların paylaştığı veriye göre değerlendirir; ardından protokollü bankaya kredi başvurusu yapılır ve banka kendi kredi değerlendirmesini ayrıca yapar. Bunlar başvuru sonrası aşamalardır.",
    "Yönerge (Rev.05, 05.07.2026) ve Başvuru Kontrol Tablosu uyarınca başvuruda ayrıca bir 'mali karne' belgesi istenmez; finansal yeterlilik bankalar üzerinden Kurul'ca değerlendirilir.",
  ];

  if (eksikAlanlar.length > 0) {
    return sonuc(
      meta.programId, meta.programAdi, meta.kurum, "belirsiz",
      "Girilen bilgilerle ön koşulların çoğu sağlanıyor, ancak bazı alanlar eksik.",
      gerekceler,
      [...uyarilar, `Eksik bilgiler: ${eksikAlanlar.join(", ")}.`]
    );
  }

  return sonuc(
    meta.programId, meta.programAdi, meta.kurum, "uygun",
    "Girilen bilgilere göre başvuru şartlarının tamamı sağlanıyor. Kurul kararı ve banka kredi değerlendirmesi başvuru sonrası ayrı aşamalardır.",
    gerekceler,
    uyarilar
  );
}

// --- 9b) Yeşil Sanayi Destek Programı ---
// Kaynak: research/destek-uygunluk/yesil-sanayi-destek-programi.md — 2026-09-17'de resmi
// Yönerge'nin (Rev.No:04) tam metni birincil kaynaktan (webdosya.kosgeb.gov.tr, pdftotext ile)
// okundu. Önceki sürüm ikincil kaynağa dayanıyordu ve birkaç önemli noktada yanlıştı: mikro
// ölçek istisnası kontrol edilmiyordu, NACE/imalat hard rule'u Yönerge'de yok (sektör çağrıya
// bağlı), proje teması 4'lü değil resmi 2 Alt Bileşen yapısında, destek oranı/süre yanlıştı
// ve EN ÖNEMLİSİ: destek HİBE DEĞİL, GERİ ÖDEMELİ — bu hiç belirtilmiyordu.
export function kosgebYesilSanayiDegerlendir(g: DestekBasvuruGirdisi): ProgramSonucuTaslak {
  const meta = { programId: "kosgeb-yesil-sanayi", programAdi: "Yeşil Sanayi Destek Programı", kurum: "KOSGEB" };
  const gerekceler: string[] = [];
  const eksikAlanlar: string[] = [];
  const uyarilar = [
    "Bu destek HİBE DEĞİLDİR, GERİ ÖDEMELİDİR: 12 ay ödemesiz dönemin ardından 6 eşit taksitte geri ödenir; zamanında ödenirse faizsizdir, gecikirse yasal faiz işler ve teminat nakde çevrilebilir.",
    "Destek oranı Alt Bileşen 1.1'de (enerji sistemlerinin karbonsuzlaştırılması) %60, Alt Bileşen 1.2'de (iklim eylemi/kaynak verimliliği/sürdürülebilirlik) %70'tir; deprem bölgesindeki (11 il) illerde hasar derecesine göre azami %90'a çıkabilir. Proje süresi 8-24 ay (4 ay katları).",
    "Kodda henüz sorulmayan ek ön koşullar da var: şirket sermayesinin en az %75'inin özel sektöre ait olması ve kamu çoğunluk kontrolü bulunmaması, asgari bir kredi skoru, Çevresel-Sosyal Yönetim Sistemi riskinin düşük/orta olması, kuruluşun en az 2 yıldır faaliyette olması, Alt Bileşen 1.1 için yıllık enerji tüketiminin en az 20 TEP olması, Dünya Bankası'nın \"uygun bulunmayan faaliyet\" listesinde olmama ve aynı anda yalnızca 1 çağrıya/toplamda en fazla 2 projeye başvurabilme sınırı. Bunlar başvuru öncesi KOSGEB ile mutlaka teyit edilmelidir.",
    "Şu an açık bir çağrı bulunmuyor: 2023-01 (güneş enerjisi) ve 2023-02 (temiz ve döngüsel ekonomi) çağrılarının başvuru dönemi 30 Kasım 2024'te sona erdi, yeni çağrı tespit edilemedi; yeni çağrı için kosgeb.gov.tr takip edilmelidir.",
    "Sektör kapsamı genel Yönerge'de sabitlenmemiş, ilan edilen çağrıya göre belirleniyor — güncel çağrı kapsamı kosgeb.gov.tr üzerinden teyit edilmelidir.",
  ];

  const mali = kobiMaliUstDeger(g.yillikNetSatisHasilatiTl, g.maliBilancoTl);
  const olcek = kobiOlceguHesapla(g.calisanSayisi, mali);
  if (olcek === "mikro" || olcek === "kobi_disi") {
    gerekceler.push(`İşletme ölçeği "${olcek}" — bu program yalnızca küçük veya orta büyüklükteki işletmelere açık (mikro işletmeler ve büyük ölçekli firmalar başvuramaz).`);
    return sonuc(meta.programId, meta.programAdi, meta.kurum, "uygun_degil", "KOBİ ölçek şartı sağlanmıyor.", gerekceler, uyarilar);
  }
  if (olcek === null) {
    if (g.calisanSayisi === undefined) eksikAlanlar.push("çalışan sayısı");
    if (mali === undefined) eksikAlanlar.push("yıllık net satış hasılatı veya mali bilanço");
  }

  if (g.yesilSanayiProjeTemasi === undefined || g.yesilSanayiProjeTemasi === "emin_degil") {
    eksikAlanlar.push("projenin Alt Bileşen 1.1 (enerji sistemlerinin karbonsuzlaştırılması) mi yoksa Alt Bileşen 1.2 (iklim eylemi/kaynak verimliliği/sürdürülebilirlik) mi kapsamına girdiği");
  } else if (g.yesilSanayiProjeTemasi === "alt_bilesen_1_1") {
    gerekceler.push("Proje, Alt Bileşen 1.1 (enerji sistemlerinin karbonsuzlaştırılması, örn. GES) kapsamıyla örtüşüyor — destek oranı %60.");
  } else {
    gerekceler.push("Proje, Alt Bileşen 1.2 (iklim eylemi, kaynak verimliliği, sürdürülebilirlik) kapsamıyla örtüşüyor — destek oranı %70.");
  }

  if (eksikAlanlar.length > 0) {
    return sonuc(
      meta.programId, meta.programAdi, meta.kurum, "belirsiz",
      "Girilen bilgilerle ön koşulların bir kısmı sağlanıyor, ancak bazı alanlar eksik.",
      gerekceler,
      [...uyarilar, `Eksik bilgiler: ${eksikAlanlar.join(", ")}.`],
      true,
      "30 Kasım 2024 (2023-01 ve 2023-02 çağrıları, kapandı)"
    );
  }

  return sonuc(
    meta.programId, meta.programAdi, meta.kurum, "kismen_uygun",
    "Girilen bilgilere göre ölçek ve tema kriterleri sağlanıyor; yukarıdaki ek ön koşullar ve nihai onay KOSGEB Kurulu'nun değerlendirmesine tabidir.",
    gerekceler,
    uyarilar,
    true,
    "30 Kasım 2024 (2023-01 ve 2023-02 çağrıları, kapandı)"
  );
}

// --- 10) TKDK - IPARD III Kırsal Kalkınma Destekleri ---
// Kaynak: research/destek-uygunluk/tkdk-ipard.md — 2026-09-17'de tkdk.gov.tr'nin resmi
// tedbir yapısı (Duyuru/Rehber sayfaları, birincil kaynak) doğrulandı: gerçek tedbirler
// M1/101, M3/103, M4/201, M5/202, M7/302 — eski "hayvancılık/GES/kırsal turizm" sınıflaması
// bu resmi yapıyla örtüşmüyordu (GES ve kırsal turizm ayrı tedbir değil, M7/302 alt kalemi).
// Yaş aralığı (18-65) ve tedbir bazlı bütçe limitleri (örn. M7 için 500.000 Euro) yalnızca
// ikincil kaynaktan doğrulanabildi, tkdk.gov.tr'nin tedbir rehberi PDF'leri okunamadı
// (şifreli geldi) — bu yüzden hard rule değil, bilgilendirici uyarı olarak tutuluyor.
export function tkdkDegerlendir(g: DestekBasvuruGirdisi): ProgramSonucuTaslak {
  const meta = { programId: "tkdk-ipard", programAdi: "TKDK IPARD III Kırsal Kalkınma Destekleri", kurum: "Tarım ve Kırsal Kalkınmayı Destekleme Kurumu (TKDK)" };
  const gerekceler: string[] = [];
  const eksikAlanlar: string[] = [];
  const uyarilar = [
    "TKDK hibeleri yalnızca Kurum tarafından ilan edilen çağrı dönemlerinde açılır. 2026 takvimindeki çağrıların hepsi kapandı (son: 12. çağrı, M1/101, başvuru teslimi 7 Eylül 2026'da bitti); Ekim-Aralık 2026 için yeni bir çağrı tespit edilemedi. Yeni çağrı için tkdk.gov.tr/Duyuru takip edilmelidir.",
    "2026 çağrıları 81 ilin tamamından başvuru kabul etti (eskiden görülen 42 il sınırı artık geçerli değil); yeni çağrıda il kapsamı ve tedbir bazlı şartlar çağrı ilanından teyit edilmelidir.",
    "Proje bütçesi alt/üst limitleri TEDBİR BAZINDA değişir (örn. M7/302 için görülen üst limit ~500.000 Euro) — bu ön analizde tek bir aralık varsayılmıyor, kesin limit seçtiğiniz tedbirin güncel Başvuru Çağrı Rehberi'nden teyit edilmelidir.",
    "Yaş (gerçek kişi başvurularında) ve mikro ölçek hariç tutma gibi bazı şartlar yalnızca ikincil kaynaklardan görüldü, TKDK'nın tedbir rehberi PDF'leriyle teyit edilemedi — kesinleştirmek için bir TKDK danışmanına danışmanız önerilir.",
  ];

  if (g.basvuranYasi !== undefined && (g.basvuranYasi < 18 || g.basvuranYasi > 65)) {
    gerekceler.push(`Gerçek kişi başvurularında yaş 18-65 aralığında olmalı — girilen yaş (${g.basvuranYasi}) bu aralığın dışında görünüyor (tüzel kişilik başvurularında bu şart aranmaz). Bu eşik yalnızca ikincil kaynaktan doğrulanabildi, kesinleştirmek gerekir.`);
    return sonuc(meta.programId, meta.programAdi, meta.kurum, "belirsiz", "Yaş şartı gerçek kişi başvurusu için sağlanmıyor gibi görünüyor.", gerekceler, uyarilar);
  }
  if (g.basvuranYasi === undefined) eksikAlanlar.push("başvuranın yaşı (gerçek kişi başvurusuysa)");

  // 2026 çağrıları 81 ilin tamamında geçerli olduğu için il bazlı eleme artık yapılmıyor
  // (tkdkDesteklenenIldeMi alanı eski kayıtlarla uyum için tipte duruyor, formda sorulmuyor).

  const TEDBIR_ETIKET: Record<string, string> = {
    m1_fiziki_varlik: "M1/101 - Tarımsal İşletmelerin Fiziki Varlıkları",
    m3_isleme_pazarlama: "M3/103 - Tarım-Balıkçılık Ürünlerinin İşlenmesi ve Pazarlanması",
    m4_cevre_iklim: "M4/201 - Tarım-Çevre-İklim ve Organik Tarım",
    m5_leader: "M5/202 - LEADER Yerel Kalkınma",
    m7_cesitlendirme: "M7/302 - Çiftlik Faaliyetlerinin Çeşitlendirilmesi (kırsal turizm, yenilenebilir enerji vb. dahil)",
  };
  if (g.tkdkSektoru === undefined) eksikAlanlar.push("yatırımın hangi IPARD III tedbirine girdiği");
  else if (g.tkdkSektoru === "diger") {
    gerekceler.push("Belirtilen yatırım, IPARD III'ün resmi tedbir yapısındaki (M1, M3, M4, M5, M7) alanların hiçbirine net biçimde girmiyor gibi görünüyor.");
  } else {
    gerekceler.push(`Belirtilen yatırım, IPARD III'ün "${TEDBIR_ETIKET[g.tkdkSektoru]}" tedbiriyle örtüşüyor.`);
  }

  if (g.planlananProjeButcesiEuro !== undefined) {
    gerekceler.push(`Planlanan proje bütçesi ${g.planlananProjeButcesiEuro.toLocaleString("tr-TR")} Euro — tedbir bazlı kesin alt/üst limitler için güncel Başvuru Çağrı Rehberi ile teyit edilmelidir.`);
  }

  if (eksikAlanlar.length > 0) {
    return sonuc(
      meta.programId, meta.programAdi, meta.kurum, "belirsiz",
      "Girilen bilgilerle ön koşulların çoğu sağlanıyor, ancak bazı alanlar eksik.",
      gerekceler,
      [...uyarilar, `Eksik bilgiler: ${eksikAlanlar.join(", ")}.`],
      true,
      "2026 çağrıları kapandı (son: 7 Eylül 2026). M7 çağrı ilanı ertelendi, henüz açılmadı; TKDK duyurusu takip edilmeli"
    );
  }

  // Bilerek "kismen_uygun": tedbir bazlı başvuru şartları (ölçek, bütçe limitleri, belgeler) TKDK'nın
  // Başvuru Çağrı Rehberi PDF'lerinden okunamadığı için tam doğrulanamıyor; şu an açık çağrı da yok.
  return sonuc(
    meta.programId, meta.programAdi, meta.kurum, "kismen_uygun",
    "Genel çerçeveye uyuyorsunuz; ancak tedbir bazlı başvuru şartları çağrı rehberiyle teyit edilemediği ve şu an açık çağrı bulunmadığı için net sonuç verilemiyor.",
    gerekceler,
    uyarilar,
    true,
    "2026 çağrıları kapandı (son: 7 Eylül 2026). M7 çağrı ilanı ertelendi, henüz açılmadı; TKDK duyurusu takip edilmeli"
  );
}

// --- 10) Turquality / Marka Destek Programı ---
// Kaynak: research/destek-uygunluk/turquality.md
export function turqualityDegerlendir(g: DestekBasvuruGirdisi): ProgramSonucuTaslak {
  const meta = { programId: "turquality-marka-destek", programAdi: "Turquality / Marka Destek Programı", kurum: "Ticaret Bakanlığı" };
  const gerekceler: string[] = [];
  const eksikAlanlar: string[] = [];
  const uyarilar = [
    // 2026-09-18: 50/80/100 puanlık sistem güncel Genelge'nin (26/06/2026 yürürlük) ana
    // gövdesinde (madde 1-38) doğrulanamadı — eklerde (Ek-1..10) olabilir, bu oturumda
    // erişilemedi. Bu yüzden kesin kural gibi değil, tahmini bilgi olarak sunuluyor.
    "Turquality ile Marka Destek Programı arasındaki seçimin, görevlendirilen danışmanlık firmasının bir ön inceleme raporuna dayandığı biliniyor; sıkça aktarılan 50/80/100 puanlık eşik sistemi (50 altı ret, 50-80 Marka, 80-100 Turquality) güncel Genelge'nin ana metninde doğrulanamadı, tahmini bilgi olarak değerlendirin. Bu araç yalnızca nesnel eşik şartlarını (ihracat tutarı, tescil) kontrol eder; puanlamanın öznel kısmını (marka gücü, kurumsal kapasite) simüle edemez.",
    "MADDE 14/1-ç: Tescil sahibi başvurucunun kendisi, ona organik bağlı bir yurt içi şirket veya aynı holding/şirketler topluluğuna bağlı bir şirket olmalı — organik bağı olmayan farklı bir şirket adına tescil bu programa uygun değildir. MADDE 14/1-d: Markada Türk malı/marka imajına aykırı ifade, sembol veya bir ülke/şehir/bölge ismi bulunmamalı. Bu iki şart bu ön analizde ayrıca sorulmuyor.",
    "MADDE 14/3: 87. fasılda (bağlantılı/otonom/paylaşımlı/elektrikli akıllı cihazlar) üretim yapan işletmeler için ihracat tutarı eşiği aranmıyor — bu istisna bu ön analizde ayrıca sorulmuyor.",
  ];

  // Genelge (26/06/2026 yürürlük) MADDE 14: (a) 3 yıllık ortalama ihracat >= 3M$ ve son 3 takvim yılının
  // her birinde ihracat; (b) yurt içi VE Madrid ülkesinde yurt dışı tescil, başvurudan en az 1 yıl önce
  // alınmış; (c) yurt içi başvuru yurt dışından önce/aynı tarihte; (ç) tescil başvurucu/organik bağlı/aynı
  // holding şirketi adına; (d) Türk malı imajına aykırı unsur yok. (2): son 1 yılda >= 10M$ ihracatta
  // (a)-(b) aranmaz ama iki tescil de bulunmalı. (3): 87. fasıl akıllı cihaz üreticilerinde (a) aranmaz.
  const ortalamaIhracat = g.turqualitySon3YilOrtalamaIhracatUsd;
  const sonYilIhracat = g.turqualitySon1YilIhracatUsd;
  const onMilyonIstisnasi = sonYilIhracat !== undefined && sonYilIhracat >= 10_000_000;
  const ortalamaSaglaniyor = ortalamaIhracat !== undefined && ortalamaIhracat >= 3_000_000;

  if (onMilyonIstisnasi) {
    gerekceler.push("Son 1 yılda en az 10.000.000 ABD Doları ihracat yapılmış — 3 yıllık ortalama ihracat ve tescillerin 1 yıl önce alınmış olması şartları aranmıyor (MADDE 14/2); markanın yurt içi ve yurt dışı tescili yine de bulunmalı.");
  } else if (g.fasil87AkilliCihazUreticisiMi === true) {
    gerekceler.push("87. fasılda bağlantılı/otonom/paylaşımlı/elektrikli akıllı cihaz üretimi yapıldığı belirtilmiş — ihracat tutarı şartı aranmıyor (MADDE 14/3).");
  } else if (ortalamaIhracat !== undefined || sonYilIhracat !== undefined) {
    if (!ortalamaSaglaniyor) {
      if (g.fasil87AkilliCihazUreticisiMi === undefined) {
        eksikAlanlar.push("87. fasılda akıllı cihaz üreticisi olup olmadığınız (ihracat eşiği altındaysanız bu istisna uygulanabilir)");
      } else {
        gerekceler.push("Son 3 yıl ortalama ihracat en az 3.000.000 ABD Doları (ya da son 1 yılda en az 10.000.000 ABD Doları istisnası) şartı sağlanmıyor.");
        return sonuc(meta.programId, meta.programAdi, meta.kurum, "uygun_degil", "İhracat tutarı eşiğin altında.", gerekceler, uyarilar);
      }
    } else {
      gerekceler.push("Son 3 yıl ortalama ihracat 3.000.000 ABD Dolarını sağlıyor.");
      if (g.turqualityHerYilIhracatYapildiMi === false) {
        gerekceler.push("Son 3 takvim yılının her birinde ihracat yapılmış olması gerekir (MADDE 14/1-a) — bu sağlanmıyor.");
        return sonuc(meta.programId, meta.programAdi, meta.kurum, "uygun_degil", "Son 3 takvim yılının her birinde ihracat yok.", gerekceler, uyarilar);
      }
      if (g.turqualityHerYilIhracatYapildiMi === undefined) eksikAlanlar.push("son 3 takvim yılının her birinde ihracat yapılıp yapılmadığı");
    }
  } else {
    eksikAlanlar.push("son 3 yıl ortalama ihracat tutarı (veya son 1 yıl ihracat istisnası)");
  }

  if (g.markaYurtDisiTescilYurtIciTescildenOnceMi === true) {
    gerekceler.push("Yurt dışı marka tescili BAŞVURU tarihi, yurt içi tescil başvuru tarihinden önce yapılmış (MADDE 14/1-c) — bu sıra diskalifiye eden bir durum; yurt içi başvuru, yurt dışı başvurudan önce veya aynı tarihte yapılmış olmalı.");
    return sonuc(meta.programId, meta.programAdi, meta.kurum, "uygun_degil", "Tescil başvuru sırası uygun değil.", gerekceler, uyarilar);
  }
  if (g.markaYurtDisiTescilYurtIciTescildenOnceMi === undefined) eksikAlanlar.push("yurt dışı tescil başvurusunun yurt içi tescil başvurusundan önce mi yapıldığı (aynı tarih sorun değil)");

  if (g.markaYurtIciTescilVarMi === false) {
    gerekceler.push("Başvurulan markanın Türkiye'de tescili bulunmuyor (MADDE 14/1-b).");
    return sonuc(meta.programId, meta.programAdi, meta.kurum, "uygun_degil", "Yurt içi marka tescili eksik.", gerekceler, uyarilar);
  }
  if (g.markaYurtIciTescilVarMi === undefined) eksikAlanlar.push("markanın yurt içi (Türkiye) tescili");

  if (g.markaYurtDisiTescilVarMi === false) {
    gerekceler.push("Aynı markanın Madrid Protokolü'ne taraf en az bir ülkede yurt dışı tescili bulunmuyor (MADDE 14/1-b); tescil süreci başlatılsa bile çoğu durumda tescilin başvurudan en az 1 yıl önce alınmış olması gerekir.");
    return sonuc(meta.programId, meta.programAdi, meta.kurum, "uygun_degil", "Yurt dışı marka tescili yok.", gerekceler, uyarilar);
  }
  if (g.markaYurtDisiTescilVarMi === undefined) eksikAlanlar.push("yurt dışı (Madrid Protokolü ülkesi) marka tescili");

  if (!onMilyonIstisnasi && g.markaYurtIciTescilVarMi === true && g.markaYurtDisiTescilVarMi === true) {
    if (g.markaTescilleriEnAzBirYilOnceMi === false) {
      gerekceler.push("Yurt içi ve yurt dışı tescillerin başvuru tarihinden en az 1 yıl önce alınmış olması gerekir (MADDE 14/1-b) — bu sağlanmıyor.");
      return sonuc(meta.programId, meta.programAdi, meta.kurum, "uygun_degil", "Tescillerin 1 yıl önce alınmış olma şartı sağlanmıyor.", gerekceler, uyarilar);
    }
    if (g.markaTescilleriEnAzBirYilOnceMi === undefined) eksikAlanlar.push("yurt içi ve yurt dışı tescillerin başvurudan en az 1 yıl önce alınıp alınmadığı");
  }

  if (g.markaTescilOrganikBagliSirketAdinaMi === false) {
    gerekceler.push("Yurt içi ve yurt dışı tescillerin aynı şirket adına; şirket, organik bağlı bir yurt içi şirket veya aynı holding/şirketler topluluğu ya da holding şirketi adına kayıtlı olması gerekir (MADDE 14/1-ç) — bu sağlanmıyor.");
    return sonuc(meta.programId, meta.programAdi, meta.kurum, "uygun_degil", "Tescil sahibi şirket şartı sağlanmıyor.", gerekceler, uyarilar);
  }
  if (g.markaTescilOrganikBagliSirketAdinaMi === undefined) eksikAlanlar.push("tescillerin başvurucu veya organik bağlı/aynı holding şirketi adına olup olmadığı");

  if (g.markadaImajaAykiriUnsurVarMi === true) {
    gerekceler.push("Markada Türk malı/markası imajına zarar verecek veya aykırı olacak ifade, sembol, şekil, işaret ya da ülke/şehir/bölge ismi bulunuyor (MADDE 14/1-d; bu hususa Bakanlık karar verir).");
    return sonuc(meta.programId, meta.programAdi, meta.kurum, "uygun_degil", "Marka imajı şartı sağlanmıyor.", gerekceler, uyarilar);
  }
  if (g.markadaImajaAykiriUnsurVarMi === undefined) eksikAlanlar.push("markada Türk malı imajına aykırı ifade veya ülke/şehir/bölge ismi olup olmadığı");

  if (eksikAlanlar.length > 0) {
    return sonuc(
      meta.programId, meta.programAdi, meta.kurum, "belirsiz",
      "Girilen bilgilerle başvuru şartlarının çoğu sağlanıyor, ancak bazı alanlar eksik.",
      gerekceler,
      [...uyarilar, `Eksik bilgiler: ${eksikAlanlar.join(", ")}.`]
    );
  }

  gerekceler.push("MADDE 14'teki ihracat, tescil (süre, sıra, sahip şirket) ve marka imajı şartlarının hepsi sağlanıyor.");
  return sonuc(
    meta.programId, meta.programAdi, meta.kurum, "uygun",
    "Genelge MADDE 14'teki başvuru şartlarının tamamı sağlanıyor. Turquality mi Marka Destek Programı mı kapsamına alınacağınız, başvuru sonrası danışmanlık firmasının ön inceleme çalışmasında belirlenir.",
    gerekceler,
    [
      ...uyarilar,
      "Başvurunun kabulünden sonra yapılacak ön inceleme çalışması için danışmanlık firmasına 300.000 TL ödenir (ödeme/çalışma süresi içinde yapılmazsa başvuru olumsuz sayılır, 6 ay yeniden başvurulamaz — MADDE 15); başvuru Ek-4'teki belgelerle Destek Yönetim Sistemi üzerinden yapılır.",
    ]
  );
}

// --- 11) KOSGEB Stratejik Ürün Destek Programı ---
// Kaynak: research/destek-uygunluk/kosgeb-stratejik-urun.md — UE-13/08 (Rev. 24/03/2026),
// birincil kaynaktan (pdftotext) doğrulandı, 2026-09-18. İki aşamalı: Bakanlık ön başvuru
// (Teknoloji Odaklı Sanayi Hamlesi) → KOSGEB. Nihai karar Bakanlık Değerlendirme Komitesi'ne
// bağlı, KOSGEB Kurulu yalnızca gider kalemi uygunluğunu inceleyip görüş sunar (MADDE 17,
// 19-20); onay "kazanılmış hak teşkil etmez" (MADDE 15/4) — bu başvuru sonrası aşamadır; başvuru şartları sağlanıyorsa "uygun".
export function kosgebStratejikUrunDegerlendir(g: DestekBasvuruGirdisi): ProgramSonucuTaslak {
  const meta = { programId: "kosgeb-stratejik-urun", programAdi: "KOSGEB Stratejik Ürün Destek Programı", kurum: "KOSGEB / Sanayi ve Teknoloji Bakanlığı" };
  const gerekceler: string[] = [];
  const eksikAlanlar: string[] = [];

  if (g.sirketTuru !== undefined && g.sirketTuru !== "limited" && g.sirketTuru !== "anonim" && g.sirketTuru !== "diger_sermaye") {
    gerekceler.push("Bu program yalnızca Türkiye'de yerleşik sermaye şirketi statüsündeki KOBİ'lere açık.");
    return sonuc(meta.programId, meta.programAdi, meta.kurum, "uygun_degil", "Şirket türü uygun değil.", gerekceler);
  }
  if (g.sirketTuru === undefined) eksikAlanlar.push("şirket türü");

  const mali1 = kobiMaliUstDeger(g.yillikNetSatisHasilatiTl, g.maliBilancoTl);
  const olcek1 = kobiOlceguHesapla(g.calisanSayisi, mali1);
  if (olcek1 === "kobi_disi") {
    gerekceler.push("KOSGEB yasal olarak yalnızca KOBİ ölçeğindeki işletmeleri destekleyebiliyor — büyük ölçekli firmalar Bakanlığın Hamle Programı'ndan doğrudan yararlanır, bu KOSGEB ayağı kapsamına girmez.");
    return sonuc(meta.programId, meta.programAdi, meta.kurum, "uygun_degil", "KOBİ ölçek şartı sağlanmıyor.", gerekceler);
  }
  if (olcek1 === null) {
    if (g.calisanSayisi === undefined) eksikAlanlar.push("çalışan sayısı");
    if (mali1 === undefined) eksikAlanlar.push("yıllık net satış hasılatı veya mali bilanço");
  }

  if (g.stratejikUrunBakanlikBasvuruDurumu === "reddedildim") {
    gerekceler.push("Sanayi ve Teknoloji Bakanlığı'na yapılan ön başvuru reddedilmiş — bu program iki aşamalı olduğu için (Bakanlık ön başvuru → KOSGEB), bu aşamayı geçmeden KOSGEB ayağı değerlendirilemez.");
    return sonuc(meta.programId, meta.programAdi, meta.kurum, "uygun_degil", "Bakanlık ön başvurusu reddedilmiş.", gerekceler);
  }
  if (g.stratejikUrunBakanlikBasvuruDurumu === "sonuc_bekliyor") {
    gerekceler.push("Bakanlık ön başvurusu yapılmış, sonuç henüz bekleniyor — kesin başvuruya davet edilmeden KOSGEB ayağı değerlendirilemez.");
    return sonuc(meta.programId, meta.programAdi, meta.kurum, "belirsiz", "Bakanlık ön başvuru sonucu bekleniyor.", gerekceler, [
      "Kesin başvuruya davet edilirseniz Portal üzerinden KOSGEB'e yönlendirilirsiniz; o aşamada bu analizi güncelleyebiliriz.",
    ]);
  }
  if (g.stratejikUrunBakanlikBasvuruDurumu === undefined || g.stratejikUrunBakanlikBasvuruDurumu === "yapmadim") {
    eksikAlanlar.push("Sanayi ve Teknoloji Bakanlığı'na (Teknoloji Odaklı Sanayi Hamlesi Programı) ön başvuru yapılıp yapılmadığı");
  } else {
    gerekceler.push("Bakanlık ön başvurusu kesin başvuruya davet edilme aşamasına ulaşmış.");
  }

  if (g.stratejikUrunOncelikliListede === false) {
    gerekceler.push("Üretilecek ürün, Bakanlığın ilgili çağrı dönemi Öncelikli Ürün Listesi'nde yer almıyor — bu program yalnızca listedeki orta-yüksek/yüksek teknolojili ürünleri kapsıyor (MADDE 5).");
    return sonuc(meta.programId, meta.programAdi, meta.kurum, "uygun_degil", "Ürün öncelikli listede değil.", gerekceler);
  }
  if (g.stratejikUrunOncelikliListede === undefined) eksikAlanlar.push("üretilecek ürünün Bakanlığın Öncelikli Ürün Listesi'nde yer alıp almadığı");
  else gerekceler.push("Üretilecek ürün Öncelikli Ürün Listesi'yle örtüşüyor.");

  if (g.kosgebVeriTabaniKayitliMi === false) {
    gerekceler.push("KOSGEB Bilgi Sistemi (KBS) kaydınız aktif ve güncel değil — KOSGEB aşamasına geçebilmek için kaydın aktif olması gerekir.");
    return sonuc(meta.programId, meta.programAdi, meta.kurum, "uygun_degil", "KBS kaydı aktif/güncel değil.", gerekceler);
  }
  if (g.kosgebVeriTabaniKayitliMi === undefined) eksikAlanlar.push("KOSGEB Bilgi Sistemi (KBS) kaydının aktif ve güncel olup olmadığı");

  if (g.yeniPersonelIstihdamPlaniVarMi === true) {
    gerekceler.push("Son 4 aydır işletmede istihdam edilmemiş yeni personel istihdamı planlanıyor — personel gideri ayrıca geri ödemesiz desteklenebilir (üst limitin %30'u).");
  }
  if (g.yerliMaliBelgesiPlaniVarMi === true) {
    gerekceler.push("Yerli Malı Belgesi'yle alım planlanıyor — geri ödemesiz destek oranı %45'e kadar çıkabilir (standart oran %60 toplam destek, kalem bazında değişir).");
  }

  const uyarilar1 = [
    "Toplam destek üst limiti 6.000.000 TL (1.800.000 TL geri ödemesiz + 4.200.000 TL geri ödemeli); proje süresi 8-36 ay.",
    "Nihai karar Sanayi ve Teknoloji Bakanlığı Değerlendirme Komitesi'ne aittir; KOSGEB Kurulu yalnızca gider kalemi uygunluğu görüşü sunar. Başvuru/taahhütname onayı kazanılmış hak teşkil etmez.",
    "Başvurular sürekli değil, Bakanlığın ilan ettiği çağrı dönemlerinde (Mobilite, Üretimde Yapısal Dönüşüm, Sağlık ve Kimya Ürünleri, Dijital Dönüşüm vb.) yapılır; güncel çağrı takvimi kosgeb.gov.tr'den teyit edilmelidir.",
  ];

  if (eksikAlanlar.length > 0) {
    return sonuc(
      meta.programId, meta.programAdi, meta.kurum, "belirsiz",
      "Girilen bilgilerle ön koşulların bir kısmı sağlanıyor, ancak bazı alanlar eksik.",
      gerekceler,
      [...uyarilar1, `Eksik bilgiler: ${eksikAlanlar.join(", ")}.`]
    );
  }

  return sonuc(
    meta.programId, meta.programAdi, meta.kurum, "uygun",
    "Girilen bilgilere göre başvuru şartlarının tamamı sağlanıyor. Bakanlık Değerlendirme Komitesi kararı başvuru sonrası ayrı bir aşamadır.",
    gerekceler,
    uyarilar1
  );
}

// --- 12) KOSGEB Küresel Rekabetçilik Destek Programı ---
// Kaynak: research/destek-uygunluk/kosgeb-kuresel-rekabetcilik.md — UE-38/01 (Rev. 07/03/2025),
// birincil kaynaktan doğrulandı, 2026-09-18. KOBİGEL'in devamı DEĞİL — 2025'te başlatılan
// ayrı/yeni bir kredi (faiz/kâr payı desteği) programı. Dört alternatif uygunluk yolundan
// biri sağlanmalı (MADDE 6). Kurul (≥50/100) + Jüri (nihai, itiraz edilemez) değerlendirmesi
// var; bunlar başvuru sonrası aşamalardır, başvuru şartları sağlanıyorsa "uygun".
export function kosgebKureselRekabetcilikDegerlendir(g: DestekBasvuruGirdisi): ProgramSonucuTaslak {
  const meta = { programId: "kosgeb-kuresel-rekabetcilik", programAdi: "KOSGEB Küresel Rekabetçilik Destek Programı", kurum: "KOSGEB" };
  const gerekceler: string[] = [];
  const eksikAlanlar: string[] = [];

  if (g.sirketTuru !== undefined && g.sirketTuru !== "limited" && g.sirketTuru !== "anonim") {
    gerekceler.push("Bu program yalnızca limited veya anonim şirketlere açık.");
    return sonuc(meta.programId, meta.programAdi, meta.kurum, "uygun_degil", "Şirket türü uygun değil.", gerekceler);
  }
  if (g.sirketTuru === undefined) eksikAlanlar.push("şirket türü");

  const mali2 = kobiMaliUstDeger(g.yillikNetSatisHasilatiTl, g.maliBilancoTl);
  const olcek2 = kobiOlceguHesapla(g.calisanSayisi, mali2);
  if (olcek2 === "kobi_disi") {
    gerekceler.push("Bu program yalnızca KOBİ ölçeğindeki işletmelere açık — büyük ölçekli firmalar kapsam dışı.");
    return sonuc(meta.programId, meta.programAdi, meta.kurum, "uygun_degil", "KOBİ ölçek şartı sağlanmıyor.", gerekceler);
  }
  if (olcek2 === null) {
    if (g.calisanSayisi === undefined) eksikAlanlar.push("çalışan sayısı");
    if (mali2 === undefined) eksikAlanlar.push("yıllık net satış hasılatı veya mali bilanço");
  }

  if (g.kureselRekabetcilikDahaOnceKullanildiMi === true) {
    gerekceler.push("Bu programdan işletme başına yalnızca bir kez yararlanılabiliyor — bu hak daha önce kullanılmış.");
    return sonuc(meta.programId, meta.programAdi, meta.kurum, "uygun_degil", "Destek hakkı daha önce kullanılmış.", gerekceler);
  }
  if (g.kureselRekabetcilikDahaOnceKullanildiMi === undefined) eksikAlanlar.push("daha önce yararlanma durumu");

  const KRESEL_KRITER_ETIKET: Record<string, string> = {
    hizli_buyuyen_teknoloji_ihracat: "hızlı büyüyen işletme + orta-yüksek/yüksek teknoloji + 3 yıl art arda ihracat artışı",
    hizli_buyuyen_ihracat_arge: "hızlı büyüyen işletme + 3 yıl art arda ihracat VE Ar-Ge artışı",
    yuksek_teknoloji_oncelikli_urun: "yüksek teknoloji + orta ölçek + Hamle Programı öncelikli ürün listesi",
    turcorn_100: "Turcorn 100 Programı'na kabul edilmiş olma",
  };
  if (g.kureselRekabetcilikKriteri === undefined) {
    eksikAlanlar.push("dört alternatif uygunluk kriterinden (MADDE 6) hangisini sağladığınız");
  } else if (g.kureselRekabetcilikKriteri === "hicbiri") {
    gerekceler.push("MADDE 6'daki dört alternatif uygunluk kriterinden (hızlı büyüme+teknoloji+ihracat, hızlı büyüme+ihracat+Ar-Ge, yüksek teknoloji+öncelikli ürün, Turcorn 100) hiçbiri sağlanmıyor.");
    return sonuc(meta.programId, meta.programAdi, meta.kurum, "uygun_degil", "Uygunluk kriterlerinden hiçbiri sağlanmıyor.", gerekceler);
  } else if (g.kureselRekabetcilikKriteri === "yuksek_teknoloji_oncelikli_urun" && g.sanayiSicilBelgesiVarMi === false) {
    gerekceler.push("Bu kriter (yüksek teknoloji + öncelikli ürün) geçerli bir Sanayi Sicil Belgesi'ni şart koşuyor — bu belge yok.");
    return sonuc(meta.programId, meta.programAdi, meta.kurum, "uygun_degil", "Sanayi Sicil Belgesi eksik.", gerekceler);
  } else {
    gerekceler.push(`Uygunluk kriterlerinden biri sağlanıyor: ${KRESEL_KRITER_ETIKET[g.kureselRekabetcilikKriteri]}.`);
  }

  if (g.kureselRekabetcilikKrediTutariTl !== undefined && (g.kureselRekabetcilikKrediTutariTl < 30_000_000 || g.kureselRekabetcilikKrediTutariTl > 75_000_000)) {
    gerekceler.push(`Talep edilen kredi tutarı (${g.kureselRekabetcilikKrediTutariTl.toLocaleString("tr-TR")} TL), 2026 Yılı 1. Başvuru Dönemi çağrısının kredi aralığının (30.000.000-75.000.000 TL) dışında kalıyor.`);
  }

  const uyarilar2 = [
    "Bu bir hibe değil, bankadan kullanılan ticari krediye faiz/kâr payı desteğidir (geri ödemesiz destek kısmı, anapara işletmeye geri ödemelidir); azami vade 36 ay, proje süresi 24 ay (+6 ay uzatılabilir).",
    "Kredinin faiz/kâr payı oranının en fazla 20 puanlık kısmı KOSGEB tarafından geri ödemesiz karşılanır (sabit bir TL üst limiti değil, puan bazlı bir mekanizmadır); anlaşmalı bankanın uyguladığı oran 20 puanın üzerindeyse aşan kısmı işletmeye aittir. (Kaynak: KOSGEB 2026 Yılı 1. Başvuru Dönemi duyurusu, kosgeb.gov.tr, 2026-09-23 doğrulandı.)",
    "Değerlendirme iki aşamalı: Kurul 100 üzerinden puanlar (ortalama en az 50 olmalı), nihai kararı Jüri verir ve bu karara itiraz edilemez.",
    "Başvurular sürekli değil, dönemsel çağrılarla alınıyor; 2026 Yılı 1. Başvuru Dönemi 30 Eylül 2026'da kapandı — yeni dönem ilan edilene kadar başvuru alınmaz, güncel durum kosgeb.gov.tr'den teyit edilmelidir.",
  ];

  if (eksikAlanlar.length > 0) {
    return sonuc(
      meta.programId, meta.programAdi, meta.kurum, "belirsiz",
      "Girilen bilgilerle ön koşulların çoğu sağlanıyor, ancak bazı alanlar eksik.",
      gerekceler,
      [...uyarilar2, `Eksik bilgiler: ${eksikAlanlar.join(", ")}.`],
      true,
      "30 Eylül 2026 (1. dönem, kapandı)"
    );
  }

  return sonuc(
    meta.programId, meta.programAdi, meta.kurum, "uygun",
    "Girilen bilgilere göre başvuru şartlarının tamamı sağlanıyor. Kurul puanlaması ve Jüri kararı başvuru sonrası ayrı bir aşamadır.",
    gerekceler,
    uyarilar2,
    true,
    "30 Eylül 2026 (1. dönem, kapandı)"
  );
}

// --- 13) KOSGEB YÖNDE - Yönderlik ve Değerlendirme Destek Programı ---
// Kaynak: research/destek-uygunluk/kosgeb-yonde.md — resmi Yönerge (20.08.2026) taranmış/
// sıkıştırılmış PDF olduğu için tam metin okunamadı, iki bağımsız ikincil kaynakla çapraz
// doğrulandı (orta-yüksek güven), 2026-09-18. Doğrudan yatırım DEĞİL — danışmanlık/analiz/
// yol haritası hizmeti (dijital dönüşüm, sürdürülebilirlik raporlaması, YODA).
export function kosgebYondeDegerlendir(g: DestekBasvuruGirdisi): ProgramSonucuTaslak {
  const meta = { programId: "kosgeb-yonde", programAdi: "KOSGEB YÖNDE - Yönderlik ve Değerlendirme Destek Programı", kurum: "KOSGEB" };
  const gerekceler: string[] = [];
  const eksikAlanlar: string[] = [];

  const mali3 = kobiMaliUstDeger(g.yillikNetSatisHasilatiTl, g.maliBilancoTl);
  const olcek3 = kobiOlceguHesapla(g.calisanSayisi, mali3);
  if (olcek3 === "mikro" || olcek3 === "kobi_disi") {
    gerekceler.push(`İşletme ölçeği "${olcek3}" — bu program yalnızca küçük veya orta büyüklükteki işletmelere açık (mikro işletmeler ve büyük ölçekli firmalar başvuramaz).`);
    return sonuc(meta.programId, meta.programAdi, meta.kurum, "uygun_degil", "KOBİ ölçek şartı sağlanmıyor.", gerekceler);
  }
  if (olcek3 === null) {
    if (g.calisanSayisi === undefined) eksikAlanlar.push("çalışan sayısı");
    if (mali3 === undefined) eksikAlanlar.push("yıllık net satış hasılatı veya mali bilanço");
  }

  if (g.naceKodu === undefined) eksikAlanlar.push("NACE kodu");
  else if (!imalatSektoruMu(g.naceKodu)) {
    gerekceler.push("Bu program NACE Kısım C (İmalat, 10-33) sektöründeki işletmelere açık — girilen NACE kodu imalat dışında görünüyor.");
    return sonuc(meta.programId, meta.programAdi, meta.kurum, "uygun_degil", "Sektör (NACE) kapsam dışı.", gerekceler);
  }

  if (g.yondeDahaOnceYararlanildiMi === true) {
    gerekceler.push("Bu programdan işletme başına yalnızca bir kez yararlanılabiliyor — bu hak daha önce kullanılmış.");
    return sonuc(meta.programId, meta.programAdi, meta.kurum, "uygun_degil", "Destek hakkı daha önce kullanılmış.", gerekceler);
  }
  if (g.yondeDahaOnceYararlanildiMi === undefined) eksikAlanlar.push("daha önce yararlanma durumu");

  const YONDE_HIZMET_ETIKET: Record<string, string> = {
    dijital_donusum_yol_haritasi: "Dijital Dönüşüm Değerlendirme Analizi ve Yol Haritası",
    surdurulebilirlik_raporlamasi: "Sürdürülebilirlik Raporlaması",
    yoda_analizi: "Yalın Olgunluk Değerlendirme Analizi (YODA)",
    birden_fazla: "birden fazla hizmet kalemi",
  };
  // Yönerge Rev.3 (05/07/2026) MADDE 9/1, 9/4: sistemde kayıtlı ve aktif olmak, İşletme Beyanı güncel olmak.
  if (g.kosgebVeriTabaniKayitliMi === false) {
    gerekceler.push("Destek programından yararlanmak için işletmenin KOSGEB sisteminde kayıtlı ve aktif olması gerekir (MADDE 9/1) — kaydınız yok.");
    return sonuc(meta.programId, meta.programAdi, meta.kurum, "uygun_degil", "KOSGEB veri tabanı kaydı yok.", gerekceler);
  }
  if (g.kosgebVeriTabaniKayitliMi === undefined) eksikAlanlar.push("KOSGEB veri tabanı kaydının aktif olup olmadığı");
  if (g.kobiBilgiSistemiKayitGuncelMi === false) {
    gerekceler.push("İşletme Beyanı'nın güncel olması gerekir (MADDE 9/4) — beyannameniz güncel değil.");
    return sonuc(meta.programId, meta.programAdi, meta.kurum, "uygun_degil", "İşletme Beyanı güncel değil.", gerekceler);
  }
  if (g.kobiBilgiSistemiKayitGuncelMi === undefined) eksikAlanlar.push("İşletme Beyanı'nın güncel olup olmadığı");

  if (g.yondeHizmetTuru === undefined) eksikAlanlar.push("hangi YÖNDE hizmetinden (dijital dönüşüm yol haritası / sürdürülebilirlik raporlaması / YODA) yararlanmak istediğiniz");
  else {
    gerekceler.push(`Talep edilen hizmet: ${YONDE_HIZMET_ETIKET[g.yondeHizmetTuru]}.`);
    const dijitalMi = g.yondeHizmetTuru === "dijital_donusum_yol_haritasi";
    const yodaMi = g.yondeHizmetTuru === "yoda_analizi";
    const surdurulebilirlikMi = g.yondeHizmetTuru === "surdurulebilirlik_raporlamasi";
    const hepsi = g.yondeHizmetTuru === "birden_fazla";

    // Danışman yetkisi: dijital dönüşümde TÜSSDE belgeli danışman (MADDE 6/2), YODA'da Bakanlıkça
    // bildirilen yalın dönüşüm danışmanı (MADDE 8/2); sürdürülebilirlikte güvence denetimi (MADDE 7/3, 7/5).
    if (dijitalMi || yodaMi) {
      if (g.yondeDanismanYetkiliMi === false) {
        gerekceler.push(dijitalMi
          ? "Dijital dönüşüm danışmanlığı yalnızca TÜSSDE tarafından belgelendirilmiş dijital dönüşüm danışmanlarından alınabilir (MADDE 6/2) — danışmanınız bu niteliğe sahip değil."
          : "YODA hizmeti yalnızca Bakanlıkça bildirilen yalın dönüşüm danışmanlarından alınabilir (MADDE 8/2) — danışmanınız bu niteliğe sahip değil.");
        return sonuc(meta.programId, meta.programAdi, meta.kurum, "uygun_degil", "Danışman yetki şartı sağlanmıyor.", gerekceler);
      }
      if (g.yondeDanismanYetkiliMi === undefined) eksikAlanlar.push(dijitalMi ? "danışmanın TÜSSDE belgeli dijital dönüşüm danışmanı olup olmadığı" : "danışmanın Bakanlıkça bildirilen yalın dönüşüm danışmanı olup olmadığı");
    }
    if (surdurulebilirlikMi) {
      if (g.yondeGuvenceDenetimiVarMi === false) {
        gerekceler.push("Sürdürülebilirlik raporu TSRS'ye uygun hazırlanmalı ve güvence denetimi KGK tarafından yetkilendirilmiş bağımsız denetim kuruluşunca yapılmış olmalı (MADDE 7/2-3) — bu sağlanmıyor.");
        return sonuc(meta.programId, meta.programAdi, meta.kurum, "uygun_degil", "Güvence denetimi şartı sağlanmıyor.", gerekceler);
      }
      if (g.yondeGuvenceDenetimiVarMi === undefined) eksikAlanlar.push("sürdürülebilirlik raporunun TSRS'ye uygunluğu ve bağımsız denetim kuruluşunca güvence denetimi");
      if (g.yondeRaporlamaYiliUygunMu === false) {
        gerekceler.push("Raporlamaya esas yıl, program başlangıç tarihinden en fazla 1 yıl öncesine ait olmalı (MADDE 7/5) — bu sağlanmıyor.");
        return sonuc(meta.programId, meta.programAdi, meta.kurum, "uygun_degil", "Raporlama yılı şartı sağlanmıyor.", gerekceler);
      }
      if (g.yondeRaporlamaYiliUygunMu === undefined) eksikAlanlar.push("raporlama yılının program başlangıcından en fazla 1 yıl öncesine ait olup olmadığı");
    }
    if (hepsi) {
      // Birden fazla hizmet seçildiyse her biri bağımsızdır: hiçbiri için yetki yoksa uygun değil, bazıları varsa uygun olanlar listelenir.
      if (g.yondeDanismanYetkiliMi === false && g.yondeGuvenceDenetimiVarMi === false) {
        gerekceler.push("Ne yetkili bir danışman (dijital dönüşüm / YODA) ne de güvence denetimli sürdürülebilirlik raporu bulunuyor — hizmet kalemlerinin hiçbiri için şart sağlanmıyor.");
        return sonuc(meta.programId, meta.programAdi, meta.kurum, "uygun_degil", "Hizmet kalemlerinin hiçbiri için şart sağlanmıyor.", gerekceler);
      }
      if (g.yondeDanismanYetkiliMi === undefined) eksikAlanlar.push("dijital dönüşüm/YODA danışmanının yetkili olup olmadığı");
      if (g.yondeGuvenceDenetimiVarMi === undefined) eksikAlanlar.push("sürdürülebilirlik raporu için bağımsız denetim kuruluşu güvence denetimi");
    }
  }

  gerekceler.push("KOBİ ölçeği (mikro hariç), imalat sektörü, KOSGEB kaydı, İşletme Beyanı ve tekrar başvuru şartları sağlanıyor.");

  const uyarilar3 = [
    "Bu bir yatırım desteği değil, danışmanlık/analiz hizmeti desteğidir: %80 oranında, geri ödemesiz (hibe); toplam üst limit 280.000 TL (dijital dönüşüm 40.000 TL, sürdürülebilirlik 200.000 TL, YODA 40.000 TL; hizmet başına 20.000/100.000/20.000 TL), süre 36 ay.",
    "Başvuru sürekli açıktır; başvurular Kurul/Jüri puanlamasına değil, mevzuata uygunluk ve şekil yönünden sorumlu personel kontrolüne tabidir (Yönerge Rev.3, 05/07/2026, MADDE 11). Fatura düzenleme (danışmanın sahibi/ortağı/çalışanı olduğu kuruluş) ve hizmet tarihi gibi ödeme aşaması şartları ayrıca geçerlidir.",
    "Bu hizmetin çıktısı (yol haritası/rapor) başka bir KOSGEB programına (örn. Kapasite Geliştirme, KOBİ Dijital Dönüşüm) zorunlu ön koşul değildir, bağımsız bir destektir.",
  ];

  if (eksikAlanlar.length > 0) {
    return sonuc(
      meta.programId, meta.programAdi, meta.kurum, "belirsiz",
      "Girilen bilgilerle ön koşulların çoğu sağlanıyor, ancak bazı alanlar eksik.",
      gerekceler,
      [...uyarilar3, `Eksik bilgiler: ${eksikAlanlar.join(", ")}.`]
    );
  }

  return sonuc(
    meta.programId, meta.programAdi, meta.kurum, "uygun",
    "Girilen bilgilere göre başvuru şartlarının tamamı sağlanıyor. Başvuru KOSGEB personeli tarafından mevzuata uygunluk ve şekil yönünden kontrol edilir.",
    gerekceler,
    uyarilar3
  );
}

// --- 14) Ar-Ge Merkezi Statüsü ---
// Kaynak: research/destek-uygunluk/arge-merkezi-statusu.md — 5746 sayılı Kanun, birincil
// kaynağa (agtm.sanayi.gov.tr) SSL hatasıyla erişilemedi, birden fazla bağımsız ikincil
// kaynakla (mali müşavirlik siteleri, sitenin kendi blog yazısı) çapraz doğrulandı, orta
// güven, 2026-09-18. Personel eşiği Cumhurbaşkanı kararıyla 50'den 15'e indirilmiş (bazı
// sektörlerde 30); teşvik süresi 2028 sonuna uzatılmış (7555 sayılı Kanun, Seri No:10 Tebliğ).
export function argeMerkeziStatusuDegerlendir(g: DestekBasvuruGirdisi): ProgramSonucuTaslak {
  const meta = { programId: "arge-merkezi-statusu", programAdi: "Ar-Ge Merkezi Statüsü", kurum: "Sanayi ve Teknoloji Bakanlığı" };
  const gerekceler: string[] = [];
  const eksikAlanlar: string[] = [];
  const uyarilar4 = [
    "Personel eşiği ve teşvik oranları sık güncellendiği için (son değişiklik 7555 sayılı Kanun ve Eylül 2025 tarihli Seri No:10 Tebliğ) başvuru öncesi Sanayi ve Teknoloji Bakanlığı Ar-Ge Teşvikleri Genel Müdürlüğü ile teyit edilmelidir.",
  ];

  if (g.argeMerkeziStatusuVarMi === true) {
    gerekceler.push("Ar-Ge Merkezi statünüz zaten mevcut.");
    return sonuc(
      meta.programId, meta.programAdi, meta.kurum, "uygun",
      "Ar-Ge Merkezi statünüz mevcut; teşviklerden yararlanabilirsiniz.",
      gerekceler,
      [
        ...uyarilar4,
        "Sağlanan başlıca teşvikler: Ar-Ge indirimi (%100, koşullu +%50), gelir vergisi stopajı teşviki (doktora %95/yüksek lisans %90/diğer %80), SGK işveren hissesinin yarısının Hazine tarafından karşılanması, damga vergisi istisnası. 7555 sayılı Kanun'la gelir vergisi stopajı ve damga vergisi istisnası brüt asgari ücretin 40 katıyla sınırlandırıldı (01/08/2025'ten itibaren).",
      ]
    );
  }
  if (g.argeMerkeziStatusuVarMi === undefined) eksikAlanlar.push("Ar-Ge Merkezi statüsünün zaten olup olmadığı");

  if (g.tamZamanEsdegerArgePersoneliSayisi !== undefined && g.tamZamanEsdegerArgePersoneliSayisi < 15) {
    gerekceler.push(`Tam zaman eşdeğer Ar-Ge personeli sayınız (${g.tamZamanEsdegerArgePersoneliSayisi}) asgari eşiğin (15, bazı sektörlerde 30) altında.`);
    return sonuc(meta.programId, meta.programAdi, meta.kurum, "uygun_degil", "Asgari Ar-Ge personeli şartı sağlanmıyor.", gerekceler, uyarilar4);
  }
  if (g.tamZamanEsdegerArgePersoneliSayisi === undefined) eksikAlanlar.push("tam zaman eşdeğer Ar-Ge personeli sayısı");
  else gerekceler.push(`Tam zaman eşdeğer Ar-Ge personeli sayınız (${g.tamZamanEsdegerArgePersoneliSayisi}) bilinen asgari eşiğin (15) üzerinde — bazı sektörlerde (örn. otomotiv) eşik 30'a çıkabilir, NACE kodunuza göre teyit edilmelidir.`);

  if (g.argeFaaliyetleriAyriBirimdeMi === false) {
    gerekceler.push("Ar-Ge faaliyetlerinin şirketin diğer birimlerinden fiziksel olarak ayrılmış bir alanda yürütülmesi zorunlu şartı sağlanmıyor.");
    return sonuc(meta.programId, meta.programAdi, meta.kurum, "uygun_degil", "Ayrı Ar-Ge birimi şartı sağlanmıyor.", gerekceler, uyarilar4);
  }
  if (g.argeFaaliyetleriAyriBirimdeMi === undefined) eksikAlanlar.push("Ar-Ge faaliyetlerinin ayrı/bağımsız bir birimde yürütülüp yürütülmediği");

  if (eksikAlanlar.length > 0) {
    return sonuc(
      meta.programId, meta.programAdi, meta.kurum, "belirsiz",
      "Girilen bilgilerle ön koşulların bir kısmı sağlanıyor, ancak bazı alanlar eksik.",
      gerekceler,
      [...uyarilar4, `Eksik bilgiler: ${eksikAlanlar.join(", ")}.`]
    );
  }

  return sonuc(
    meta.programId, meta.programAdi, meta.kurum, "uygun",
    "Girilen bilgilere göre Ar-Ge Merkezi statüsü için başvuru şartlarını (personel eşiği, ayrı birim) sağlıyorsunuz. Bakanlığın belge incelemesi ve yerinde inceleme heyeti değerlendirmesi başvuru sonrası ayrı bir aşamadır.",
    gerekceler,
    uyarilar4
  );
}

// --- 15) Tasarım Merkezi Statüsü ---
// Kaynak: research/destek-uygunluk/tasarim-merkezi-statusu.md — 5746 sayılı Kanun, birincil
// kaynağa (agtm.sanayi.gov.tr) SSL hatasıyla erişilemedi, ikincil kaynaklarla (sitenin kendi
// blog yazısı dahil) orta güvenle doğrulandı, 2026-09-18. Ar-Ge Merkezi'nden AYRI bir statü,
// daha düşük personel eşiği (10 TZE); ikisi birlikte alınabilir (karşılıklı dışlayıcı değil).
export function tasarimMerkeziStatusuDegerlendir(g: DestekBasvuruGirdisi): ProgramSonucuTaslak {
  const meta = { programId: "tasarim-merkezi-statusu", programAdi: "Tasarım Merkezi Statüsü", kurum: "Sanayi ve Teknoloji Bakanlığı" };
  const gerekceler: string[] = [];
  const eksikAlanlar: string[] = [];
  const uyarilar5 = [
    "Ar-Ge Merkezi ile büyük ölçüde aynı vergi/SGK teşvik mekanizmasını kullanır; temel bilimler mezunu ek istihdam desteği Tasarım Merkezleri için geçerli değildir. Başvuru öncesi Bakanlık ile teyit edilmelidir.",
  ];

  if (g.tasarimMerkeziStatusuVarMi === true) {
    gerekceler.push("Tasarım Merkezi statünüz zaten mevcut.");
    return sonuc(
      meta.programId, meta.programAdi, meta.kurum, "uygun",
      "Tasarım Merkezi statünüz mevcut; teşviklerden yararlanabilirsiniz.",
      gerekceler,
      uyarilar5
    );
  }
  if (g.tasarimMerkeziStatusuVarMi === undefined) eksikAlanlar.push("Tasarım Merkezi statüsünün zaten olup olmadığı");

  if (g.tasarimPersoneliSayisiTze !== undefined && g.tasarimPersoneliSayisiTze < 10) {
    gerekceler.push(`Münhasıran tasarım faaliyetinde çalışan tam zaman eşdeğer personel sayınız (${g.tasarimPersoneliSayisiTze}) asgari eşiğin (10) altında.`);
    return sonuc(meta.programId, meta.programAdi, meta.kurum, "uygun_degil", "Asgari tasarım personeli şartı sağlanmıyor.", gerekceler, uyarilar5);
  }
  if (g.tasarimPersoneliSayisiTze === undefined) eksikAlanlar.push("münhasıran tasarım faaliyetinde çalışan tam zaman eşdeğer personel sayısı");
  else gerekceler.push(`Tasarım personeli sayınız (${g.tasarimPersoneliSayisiTze}) asgari eşiğin (10) üzerinde.`);

  if (g.tasarimBirimiAyriOrganizeMi === false) {
    gerekceler.push("Tasarım faaliyetinin fiziksel olarak ayrılmış, giriş-çıkışı izlenebilir ayrı bir birim/alan olarak örgütlenmesi zorunlu şartı sağlanmıyor.");
    return sonuc(meta.programId, meta.programAdi, meta.kurum, "uygun_degil", "Ayrı tasarım birimi şartı sağlanmıyor.", gerekceler, uyarilar5);
  }
  if (g.tasarimBirimiAyriOrganizeMi === undefined) eksikAlanlar.push("tasarım biriminin ayrı/bağımsız organize edilip edilmediği");

  if (eksikAlanlar.length > 0) {
    return sonuc(
      meta.programId, meta.programAdi, meta.kurum, "belirsiz",
      "Girilen bilgilerle ön koşulların bir kısmı sağlanıyor, ancak bazı alanlar eksik.",
      gerekceler,
      [...uyarilar5, `Eksik bilgiler: ${eksikAlanlar.join(", ")}.`]
    );
  }

  return sonuc(
    meta.programId, meta.programAdi, meta.kurum, "uygun",
    "Girilen bilgilere göre Tasarım Merkezi statüsü için başvuru şartlarını (personel eşiği, ayrı birim) sağlıyorsunuz. Bakanlığın belge incelemesi ve yerinde inceleme heyeti değerlendirmesi başvuru sonrası ayrı bir aşamadır.",
    gerekceler,
    uyarilar5
  );
}

// --- 16) TÜBİTAK 1812 - Yatırım Tabanlı Girişimcilik Destek Programı (BiGG Yatırım) ---
// Kaynak: research/destek-uygunluk/tubitak-1812.md — 2026-1 Ön Tohum Yatırım çağrı duyurusu,
// birincil kaynaktan (tubitak.gov.tr) doğrulandı, 2026-09-18. 1501/1507/1832'den TAMAMEN
// AYRI bir mekanizma: kurulu şirketlere hibe değil, henüz şirketi olmayan/yeni kurulan
// girişimciye kuluçka merkezi aracılığıyla hisse karşılığı doğrudan TÜBİTAK yatırımı.
export function tubitak1812Degerlendir(g: DestekBasvuruGirdisi): ProgramSonucuTaslak {
  const meta = { programId: "tubitak-1812", programAdi: "TÜBİTAK 1812 - Yatırım Tabanlı Girişimcilik Destek Programı (BiGG Yatırım)", kurum: "TÜBİTAK" };
  const gerekceler: string[] = [];
  const eksikAlanlar: string[] = [];
  const uyarilar6 = [
    "Program 3 fazlıdır: Faz 1 kuluçka merkezi hızlandırma (eğitim/mentorluk), Faz 2 Ön Tohum Yatırım (~1.350.000 TL karşılığında %3 hisse), Faz 3 Tohum Yatırım (büyüme, %10'a kadar). Destek hibe değil, TÜBİTAK'ın doğrudan hisse karşılığı yatırımıdır.",
    "2026-2 çağrısı 30 Eylül 2026'da kapandı (uzatma duyurusu yok) — dönemsel çağrılarla ilerler, sürekli değildir; sonraki çağrı takvimi tubitak.gov.tr'den takip edilmelidir.",
  ];

  if (g.girisimciSirketDurumu === "kurulu_sirket_3yil_uzeri") {
    gerekceler.push("Bu program henüz şirketi olmayan veya yeni kurulmuş girişimcilere yöneliktir — kurulu, köklü bir şirket iseniz bu programın hedef kitlesi değilsiniz. TÜBİTAK 1501/1507 (kurumsal Ar-Ge hibe desteği) daha uygun olabilir.");
    return sonuc(meta.programId, meta.programAdi, meta.kurum, "uygun_degil", "Kurulu/köklü şirketler için uygun değil.", gerekceler);
  }
  if (g.girisimciSirketDurumu === undefined) eksikAlanlar.push("henüz şirketiniz olup olmadığı / girişim aşamanız");

  if (g.hisseKarsiligiYatirimKabulEdiyorMu === false) {
    gerekceler.push("Bu program hibe değil, hisse karşılığı (equity) yatırım sağlıyor — hisse vermeyi kabul etmiyorsanız bu program size uygun değil, hibe esaslı TÜBİTAK 1507 veya KOSGEB Girişimci Destek Programı'na bakılabilir.");
    return sonuc(meta.programId, meta.programAdi, meta.kurum, "uygun_degil", "Hisse karşılığı yatırım kabul edilmiyor.", gerekceler);
  }
  if (g.hisseKarsiligiYatirimKabulEdiyorMu === undefined) eksikAlanlar.push("hisse karşılığı (equity) yatırımı kabul edip etmediğiniz");

  if (g.kuluckaFaz1TamamlandiMi === false) {
    gerekceler.push("Ön Tohum/Tohum Yatırım aşamasına geçmeden önce bir kuluçka merkezinin yürüttüğü Faz 1 hızlandırma programının tamamlanmış olması gerekiyor.");
    return sonuc(meta.programId, meta.programAdi, meta.kurum, "belirsiz", "Kuluçka merkezi hızlandırma programı henüz tamamlanmamış.", gerekceler, [
      ...uyarilar6,
      "Önce bir uygulayıcı kuruluşun (kuluçka merkezi) hızlandırma programına başvurmanız gerekiyor; bu tamamlandıktan sonra Ön Tohum Yatırım başvurusu yapılabilir.",
    ]);
  }
  if (g.kuluckaFaz1TamamlandiMi === undefined) eksikAlanlar.push("kuluçka merkezi Faz 1 hızlandırma programının tamamlanıp tamamlanmadığı");
  else gerekceler.push("Kuluçka merkezi Faz 1 hızlandırma programı tamamlanmış.");

  gerekceler.push("Girişim aşamanız ve hisse karşılığı yatırım kabulünüz bu programın hedef profiliyle örtüşüyor.");

  if (eksikAlanlar.length > 0) {
    return sonuc(
      meta.programId, meta.programAdi, meta.kurum, "belirsiz",
      "Girilen bilgilerle ön koşulların çoğu sağlanıyor, ancak bazı alanlar eksik.",
      gerekceler,
      [...uyarilar6, `Eksik bilgiler: ${eksikAlanlar.join(", ")}.`],
      true,
      "30 Eylül 2026 (2026-2 çağrısı, kapandı)"
    );
  }

  return sonuc(
    meta.programId, meta.programAdi, meta.kurum, "uygun",
    "Girilen bilgilere göre başvuru şartlarının tamamı sağlanıyor. Ön Tohum Yatırım kararı TÜBİTAK'ın değerlendirme sürecinde ayrıca verilir.",
    gerekceler,
    uyarilar6,
    true,
    "30 Eylül 2026 (2026-2 çağrısı, kapandı)"
  );
}

// --- 17) TÜBİTAK 1707 - Siparişe Dayalı Ar-Ge Projeleri için KOBİ Destekleme Çağrısı ---
// Kaynak: research/destek-uygunluk/tubitak-1707.md — üçlü yapı (Müşteri Kuruluş + Tedarikçi
// KOBİ + TÜBİTAK), birincil kaynaktan (tubitak.gov.tr duyuru sayfaları) orta-yüksek güvenle
// doğrulandı, 2026-09-18. 1501/1507'nin paylaştığı ekip/ret sinyali mantığını kullanır —
// bütçe/ilişki alanları ise siparişe dayalı yapıya özel, kendi alanları var.
export function tubitak1707Degerlendir(g: DestekBasvuruGirdisi): ProgramSonucuTaslak {
  const meta = { programId: "tubitak-1707", programAdi: "TÜBİTAK 1707 - Siparişe Dayalı Ar-Ge Projeleri için KOBİ Destekleme Çağrısı", kurum: "TÜBİTAK" };
  const gerekceler: string[] = [];
  const eksikAlanlar: string[] = [];

  if (g.sirketTuru !== undefined && g.sirketTuru !== "limited" && g.sirketTuru !== "anonim") {
    gerekceler.push("Bu programa (Tedarikçi KOBİ tarafı) yalnızca Türkiye'de yerleşik sermaye şirketleri başvurabilir.");
    return sonuc(meta.programId, meta.programAdi, meta.kurum, "uygun_degil", "Kuruluş türü uygun değil.", gerekceler);
  }
  if (g.sirketTuru === undefined) eksikAlanlar.push("şirket türü");

  const mali7 = kobiMaliUstDeger(g.yillikNetSatisHasilatiTl, g.maliBilancoTl);
  const olcek7 = kobiOlceguHesapla(g.calisanSayisi, mali7);
  if (olcek7 === "kobi_disi") {
    gerekceler.push("Tedarikçi taraf yalnızca KOBİ ölçeğindeki işletmeler olabilir.");
    return sonuc(meta.programId, meta.programAdi, meta.kurum, "uygun_degil", "KOBİ ölçek şartı sağlanmıyor.", gerekceler);
  }
  if (olcek7 === null) {
    if (g.calisanSayisi === undefined) eksikAlanlar.push("çalışan sayısı");
    if (mali7 === undefined) eksikAlanlar.push("yıllık net satış hasılatı veya mali bilanço");
  }

  if (g.musteriKurulusVarMi === false) {
    gerekceler.push("Bu program, büyük bir firmanın veya kamu kurumunun (Müşteri Kuruluş) siparişi/talebi üzerine Ar-Ge projesi geliştiren KOBİ'lere yönelik — böyle bir Müşteri Kuruluş belirtilmemiş. Kendi projenizi geliştiriyorsanız TÜBİTAK 1501/1507 daha uygun olabilir.");
    return sonuc(meta.programId, meta.programAdi, meta.kurum, "uygun_degil", "Müşteri Kuruluş yok — 1501/1507'ye bakılabilir.", gerekceler);
  }
  if (g.musteriKurulusVarMi === undefined) eksikAlanlar.push("projenin bir Müşteri Kuruluşun (büyük firma/kamu kurumu) siparişi üzerine olup olmadığı");

  if (g.musteriKurulusIliskiliTarafMi === true) {
    gerekceler.push("Müşteri Kuruluş ile aranızda ortaklık, sermaye ilişkisi, ortak yönetim veya akrabalık bulunuyor — bu durum doğrudan ret sebebidir.");
    return sonuc(meta.programId, meta.programAdi, meta.kurum, "uygun_degil", "Müşteri Kuruluş ile ilişkili taraf durumu var.", gerekceler);
  }
  if (g.musteriKurulusIliskiliTarafMi === undefined) eksikAlanlar.push("Müşteri Kuruluş ile ortaklık/sermaye/yönetim ilişkisi veya akrabalık olup olmadığı");

  if (g.musteriKurulusFinansmanTaahhuduVarMi === false) {
    gerekceler.push("Müşteri Kuruluş'un proje giderlerinin en az %40'ını karşılama taahhüdü bu programın temel şartlarından biri — bu taahhüt henüz yok.");
    eksikAlanlar.push("Müşteri Kuruluş'un finansman taahhüdü (İşbirliği Sözleşmesi)");
  } else if (g.musteriKurulusFinansmanTaahhuduVarMi === undefined) {
    eksikAlanlar.push("Müşteri Kuruluş'un giderlerin en az %40'ını karşılama taahhüdü olup olmadığı");
  } else {
    gerekceler.push("Müşteri Kuruluş'un en az %40 finansman taahhüdü mevcut.");
  }

  const retSinyali7 = argeEkipRetSinyaliVarMi(g);
  if (retSinyali7) {
    gerekceler.push(retSinyali7);
    return sonuc(meta.programId, meta.programAdi, meta.kurum, "uygun_degil", "Ön değerlendirmede ret riski yüksek somut bir sinyal var.", gerekceler);
  }

  if (g.siparisArGeProjeButcesiTl !== undefined && g.siparisArGeProjeButcesiTl > 10_000_000) {
    gerekceler.push(`Proje bütçesi (${g.siparisArGeProjeButcesiTl.toLocaleString("tr-TR")} TL), programın azami proje bütçesi olan 10.000.000 TL'yi aşıyor — bütçenin bu limite çekilmesi gerekir.`);
    return sonuc(meta.programId, meta.programAdi, meta.kurum, "uygun_degil", "Proje bütçesi azami limiti aşıyor.", gerekceler);
  }
  const oncelikliAlanNotu1707 = oncelikliAlanGerekcesi(g.argeOncelikliAlanKategorisi);
  if (oncelikliAlanNotu1707) gerekceler.push(oncelikliAlanNotu1707);
  if (g.siparisArGeProjeButcesiTl === undefined) eksikAlanlar.push("proje bütçesi (azami 10.000.000 TL)");
  else gerekceler.push(`Proje bütçesi (${g.siparisArGeProjeButcesiTl.toLocaleString("tr-TR")} TL) 10.000.000 TL limiti içinde.`);

  const uyarilar7 = [
    "TÜBİTAK kabul edilen giderin %40'ını hibe olarak karşılar, Müşteri Kuruluş en az %40'ını finanse eder (kalan kısım KOBİ'ye ait olabilir) — bu, 1501/1507'de olmayan üçlü bir finansman modelidir.",
    "Azami proje bütçesi 10.000.000 TL, azami süre 24 aydır.",
    "Başvuruda Müşteri Kuruluş ile yapılan İşbirliği Sözleşmesi (taslak), Ekonomik Fizibilite Raporu ve Taahhütname hazırlanmalıdır; Müşteri Kuruluş ortak başvuru sahibi olarak PRODİS'te yer alır.",
    "2026-3 çağrısında (1 Eylül-13 Kasım 2026) TÜBİTAK'ın 2026-2028 öncelikli konularından 'Endüstride Teknolojik Sıçrama' ve 'Dijital Liderlik' konularındaki projeler değerlendirmede önceliklidir; konu kapsamı başvuru öncesi çağrı duyurusundan teyit edilmelidir.",
    "Ar-Ge/yenilik niteliği hakem ve Grup Yürütme Kurulu (GYK) tarafından proje bazında değerlendirilir; bu, başvuru sonrası ayrı bir aşamadır.",
  ];

  if (eksikAlanlar.length > 0) {
    return sonuc(
      meta.programId, meta.programAdi, meta.kurum, "belirsiz",
      "Girilen bilgilerle ön koşulların çoğu sağlanıyor, ancak bazı alanlar eksik.",
      gerekceler,
      [...uyarilar7, `Eksik bilgiler: ${eksikAlanlar.join(", ")}.`],
      undefined,
      "13 Kasım 2026 (2026-3 çağrısı)"
    );
  }

  return sonuc(
    meta.programId, meta.programAdi, meta.kurum, "uygun",
    "Girilen bilgilere göre başvuru şartlarının tamamı sağlanıyor. Hakem/GYK değerlendirmesi başvuru sonrası ayrı bir aşamadır.",
    gerekceler,
    uyarilar7,
    undefined,
    "13 Kasım 2026 (2026-3 çağrısı)"
  );
}

// --- 18) TÜBİTAK 1831 - Yeşil İnovasyon Teknoloji Mentörlük Programı ---
// Kaynak: research/destek-uygunluk/tubitak-1831.md — Çağrı Duyurusu (1831-2024-1, 15/05/2025
// güncellemesi) tam metin madde madde okundu, 2026-09-18, yüksek güven. TÜBİTAK 1832 (Ar-Ge
// projesi) ve KOSGEB Yeşil Sanayi'den (yatırım) AYRI — Ar-Ge projesi/yatırım değil, TÜBİTAK'ın
// "Çözüm Ortakları" listesinden alınan danışmanlık/mentörlük hizmeti; diğer yeşil dönüşüm
// programlarına ön koşul değildir, birbirini dışlamaz.
export function tubitak1831Degerlendir(g: DestekBasvuruGirdisi): ProgramSonucuTaslak {
  const meta = { programId: "tubitak-1831", programAdi: "TÜBİTAK 1831 - Yeşil İnovasyon Teknoloji Mentörlük Programı", kurum: "TÜBİTAK" };
  const gerekceler: string[] = [];
  const eksikAlanlar: string[] = [];

  if (g.sirketTuru !== undefined && g.sirketTuru !== "limited" && g.sirketTuru !== "anonim" && g.sirketTuru !== "diger_sermaye") {
    gerekceler.push("Bu programa yalnızca Türkiye'de yerleşik sermaye şirketleri başvurabilir (MADDE 10.1) — şahıs işletmesi, vakıf/dernek/kooperatif, adi ortaklık başvuramaz.");
    return sonuc(meta.programId, meta.programAdi, meta.kurum, "uygun_degil", "Kuruluş türü uygun değil.", gerekceler);
  }
  if (g.sirketTuru === undefined) eksikAlanlar.push("şirket türü");

  if (g.turkiyedeYerlesikMi === false) {
    gerekceler.push("Türkiye'de yerleşik olmayan kuruluşlar başvuramaz (MADDE 10.1).");
    return sonuc(meta.programId, meta.programAdi, meta.kurum, "uygun_degil", "Türkiye'de yerleşiklik şartı sağlanmıyor.", gerekceler);
  }

  const mali8 = kobiMaliUstDeger(g.yillikNetSatisHasilatiTl, g.maliBilancoTl);
  const olcek8 = kobiOlceguHesapla(g.calisanSayisi, mali8);
  if (olcek8 === "kobi_disi") {
    gerekceler.push("Bu program yalnızca KOBİ ölçeğindeki işletmelere açık (MADDE 10.1).");
    return sonuc(meta.programId, meta.programAdi, meta.kurum, "uygun_degil", "KOBİ ölçek şartı sağlanmıyor.", gerekceler);
  }
  if (olcek8 === null) {
    if (g.calisanSayisi === undefined) eksikAlanlar.push("çalışan sayısı");
    if (mali8 === undefined) eksikAlanlar.push("yıllık net satış hasılatı veya mali bilanço");
  }

  if (g.ortakliBasvuruMu1831 === true) {
    gerekceler.push("MADDE 10.2 uyarınca bu programda ortaklı (konsorsiyum) başvuru kabul edilmiyor — tek başına KOBİ olarak başvurulmalı.");
    return sonuc(meta.programId, meta.programAdi, meta.kurum, "uygun_degil", "Ortaklı başvuru kabul edilmiyor.", gerekceler);
  }
  if (g.ortakliBasvuruMu1831 === undefined) eksikAlanlar.push("başvurunun tek başına mı yoksa ortaklı mı yapılacağı");

  if (g.cozumOrtagiListedeMi === false) {
    gerekceler.push("MADDE 5.5 uyarınca hizmet alınacak danışmanlık kuruluşunun TÜBİTAK'ın 'Çözüm Ortakları' listesinde yer alması gerekiyor — listede değilse başvuru değerlendirmeye alınmıyor.");
    return sonuc(meta.programId, meta.programAdi, meta.kurum, "uygun_degil", "Çözüm ortağı listede değil.", gerekceler);
  }
  if (g.cozumOrtagiListedeMi === undefined) eksikAlanlar.push("hizmet alınacak danışmanlık kuruluşunun TÜBİTAK Çözüm Ortakları listesinde olup olmadığı");

  if (g.basvuru1831DahaOnceKacKezKullanildi !== undefined && g.basvuru1831DahaOnceKacKezKullanildi >= 3) {
    gerekceler.push("MADDE 10.3 uyarınca aynı KOBİ bu programdan en fazla 3 kez yararlanabiliyor — bu hak dolmuş.");
    return sonuc(meta.programId, meta.programAdi, meta.kurum, "uygun_degil", "Kullanım hakkı dolmuş (en fazla 3 kez).", gerekceler);
  }
  if (g.ayniCozumOrtagiIleKacProje !== undefined && g.ayniCozumOrtagiIleKacProje >= 2) {
    gerekceler.push("Aynı Çözüm Ortağı ile en fazla 2 proje yürütülebiliyor — bu sınıra ulaşılmış.");
    return sonuc(meta.programId, meta.programAdi, meta.kurum, "uygun_degil", "Aynı çözüm ortağıyla proje sınırına ulaşılmış.", gerekceler);
  }

  gerekceler.push("Şirket türü, yerleşiklik, KOBİ ölçeği ve tekil başvuru şartları sağlanıyor.");

  const uyarilar8 = [
    "Bu bir Ar-Ge projesi veya yatırım desteği değildir — TÜBİTAK'ın Çözüm Ortakları listesinden alınan bir mentörlük/teknik yardım hizmetidir: mevcut durum tespiti, boşluk analizi, çözüm geliştirme ve Yol Haritası Raporu.",
    "Destek oranı %90; üst limit dolar bazlı (KDV hariç 7.000 USD) ve dönemsel olarak TL'ye çevriliyor — güncel TL tutarı başvuru anında TÜBİTAK'tan teyit edilmelidir.",
    "TÜBİTAK 1832 (Ar-Ge projesi) veya KOSGEB Yeşil Sanayi (yatırım) programlarına ön koşul değildir, onlarla birlikte veya bağımsız yürütülebilir; Yol Haritası Raporu ileride bu programlara başvuruda kullanılabilir.",
    "Değerlendirme 4 boyutlu bir panel puanlamasına tabidir (her biri %25 ağırlık); kadın liderlik/ortaklık/çalışan çoğunluğu +3 bonus puan sağlayabilir.",
    "Başvurular sürekli açık (dönemsel çağrı değil), TÜBİTAK ayrıca duyuru yapana kadar (program bütçesi tükenene kadar) kabul ediliyor.",
  ];

  if (eksikAlanlar.length > 0) {
    return sonuc(
      meta.programId, meta.programAdi, meta.kurum, "belirsiz",
      "Girilen bilgilerle ön koşulların çoğu sağlanıyor, ancak bazı alanlar eksik.",
      gerekceler,
      [...uyarilar8, `Eksik bilgiler: ${eksikAlanlar.join(", ")}.`]
    );
  }

  return sonuc(
    meta.programId, meta.programAdi, meta.kurum, "uygun",
    "Girilen bilgilere göre başvuru şartlarının tamamı sağlanıyor. Panel puanlaması başvuru sonrası ayrı bir aşamadır.",
    gerekceler,
    uyarilar8
  );
}

// --- 19) Teknopark (Teknoloji Geliştirme Bölgesi) Statüsü ---
// Kaynak: research/destek-uygunluk/teknopark-statusu.md — 4691 sayılı Kanun, MADDE 14(g) ve
// Geçici Madde 2 (resmigazete.gov.tr konsolide metni, birincil kaynak, orta güven), 2026-09-18.
// Ar-Ge Merkezi/Tasarım Merkezi'yle (5746 sayılı Kanun) AYNI faaliyet için AYNI ANDA
// kullanılamaz (5746 MADDE 4/5, çifte teşvik yasağı) — farklı birim/faaliyetler için ikisi
// birden mümkün. Teşvikler 31/12/2028 ile sınırlı.
export function teknoparkStatusuDegerlendir(g: DestekBasvuruGirdisi): ProgramSonucuTaslak {
  const meta = { programId: "teknopark-statusu", programAdi: "Teknopark (Teknoloji Geliştirme Bölgesi) Statüsü", kurum: "Sanayi ve Teknoloji Bakanlığı" };
  const gerekceler: string[] = [];
  const eksikAlanlar: string[] = [];
  const uyarilar = [
    "Teşvikler (gelir/kurumlar vergisi istisnası, KDV istisnası, gelir vergisi stopajı terkini, damga vergisi istisnası, SGK işveren payı desteği) 31/12/2028 tarihine kadar geçerlidir (4691 sayılı Kanun Geçici Madde 2); 2028 sonrası için henüz bir uzatım mevzuata girmedi.",
    "İstisna yalnızca bölge içi Ar-Ge/yazılım/tasarım/yenilik faaliyetinden doğan kazanca uygulanır — bölge dışı faaliyet geliriyle karışık muhasebeleştirilmemelidir.",
  ];

  if (g.teknoparkFaaliyetTuru === "kapsam_disi") {
    gerekceler.push("Faaliyetiniz 4691 sayılı Kanun MADDE 14(g)'nin kapsadığı Ar-Ge, yazılım geliştirme, tasarım veya yenilik faaliyeti niteliğinde görünmüyor.");
    return sonuc(meta.programId, meta.programAdi, meta.kurum, "uygun_degil", "Faaliyet türü kapsam dışı.", gerekceler);
  }
  if (g.teknoparkFaaliyetTuru === undefined) eksikAlanlar.push("faaliyetinizin Ar-Ge/yazılım geliştirme/tasarım/yenilik niteliğinde olup olmadığı");

  if (g.teknoparkStatusuVarMi === true) {
    gerekceler.push("Teknopark (TGB) statünüz zaten mevcut.");
    if (g.argeVeyaTasarimMerkeziTesvikiAyniFaaliyetIcinAliniyorMu === true) {
      gerekceler.push("5746 sayılı Kanun MADDE 4/5 uyarınca aynı faaliyet/personel için hem Ar-Ge/Tasarım Merkezi teşvikinden hem Teknopark teşvikinden AYNI ANDA yararlanılamaz — hangi rejimin kullanılacağı netleştirilmeli.");
      return sonuc(
        meta.programId, meta.programAdi, meta.kurum, "kismen_uygun",
        "Teknopark statünüz var, ancak aynı faaliyet için çifte teşvik yasağı (MADDE 4/5) nedeniyle hangi rejimi kullanacağınız netleştirilmeli.",
        gerekceler,
        uyarilar
      );
    }
    if (g.teknoparkKazancAyristirmaYapiliyorMu === false) {
      gerekceler.push("Bölge içi/dışı kazanç ayrıştırması henüz yapılmıyor — istisna yalnızca bölge içi faaliyetten doğan kazanca uygulandığı için bu ayrım gerekiyor.");
    } else if (g.teknoparkKazancAyristirmaYapiliyorMu === undefined) {
      eksikAlanlar.push("bölge içi/dışı kazanç ayrıştırmasının yapılıp yapılmadığı");
    }
    if (eksikAlanlar.length > 0) {
      return sonuc(
        meta.programId, meta.programAdi, meta.kurum, "belirsiz",
        "Teknopark statünüz var, ancak bazı alanlar eksik.",
        gerekceler,
        [...uyarilar, `Eksik bilgiler: ${eksikAlanlar.join(", ")}.`]
      );
    }
    return sonuc(
      meta.programId, meta.programAdi, meta.kurum, "uygun",
      "Teknopark statünüz mevcut; belirttiğiniz faaliyet türü için teşviklerden yararlanabilirsiniz.",
      gerekceler,
      uyarilar
    );
  }
  if (g.teknoparkStatusuVarMi === undefined) eksikAlanlar.push("Teknopark (TGB) statüsünün zaten olup olmadığı");

  gerekceler.push("Faaliyet türünüz Teknopark kapsamındaki alanlarla örtüşüyor gibi görünüyor.");

  if (eksikAlanlar.length > 0) {
    return sonuc(
      meta.programId, meta.programAdi, meta.kurum, "belirsiz",
      "Girilen bilgilerle ön koşulların bir kısmı sağlanıyor, ancak bazı alanlar eksik.",
      gerekceler,
      [...uyarilar, `Eksik bilgiler: ${eksikAlanlar.join(", ")}.`]
    );
  }

  return sonuc(
    meta.programId, meta.programAdi, meta.kurum, "uygun",
    "Faaliyet türünüz Teknopark (TGB) kapsamında; başvuru şartlarını sağlıyorsunuz. Başvuru ilgili TGB'nin yönetici şirketine yapılır, Proje Değerlendirme Komisyonu kararı başvuru sonrası ayrı bir aşamadır.",
    gerekceler,
    uyarilar
  );
}

// --- 20) KOSGEB TEKMER (Teknoloji Merkezi) — Girişimci/İşletme Kabulü ---
// Kaynak: research/destek-uygunluk/kosgeb-tekmer.md — Uygulama Esasları (Yürürlük 07/10/2025,
// birincil kaynak, pdftotext ile tam metin okundu), 2026-09-18. KRİTİK: KOSGEB'in nakit
// desteği (Kuruluş/Performans/Hızlandırma Desteği) doğrudan girişimciye/işletmeye DEĞİL,
// TEKMER'i kuran-işleten İşletici Kuruluşa (üniversite, TGB yönetici şirketi, TTO, OSB,
// oda/borsa, vakıf/dernek, melek yatırımcı, tüzel firma — MADDE 8) gider. Girişimci/işletme
// olarak KOSGEB'e değil, ilgili (fiilen kurulmuş) bir TEKMER'in kendi Proje Değerlendirme
// Kurulu'na başvurulur — standart, madde bazlı bir eşik yok, bu yüzden bu evaluator hiçbir
// zaman kesin "uygun" dönmez (kabul edildiğini bildiren kullanıcı hariç) ve süreci net
// biçimde açıklar.
export function kosgebTekmerDegerlendir(g: DestekBasvuruGirdisi): ProgramSonucuTaslak {
  const meta = { programId: "kosgeb-tekmer", programAdi: "KOSGEB TEKMER (Teknoloji Merkezi) — Girişimci/İşletme Kabulü", kurum: "KOSGEB" };
  const gerekceler: string[] = [];
  const eksikAlanlar: string[] = [];
  const uyarilar = [
    "Bu, KOSGEB'e yaptığınız doğrudan bir başvuru DEĞİLDİR — KOSGEB'in nakit desteği (Kuruluş Desteği, Performans Desteği, Hızlandırma Desteği) TEKMER'i işleten kuruluşa (üniversite, TGB yönetici şirketi, TTO, OSB, oda/borsa vb.) gider. Siz, ilgili TEKMER'in kendi Proje Değerlendirme Kurulu'na başvurup kabul edilmeniz gerekiyor; bu karar KOSGEB'in genel/standart bir kriterine değil, o TEKMER'in kendi değerlendirmesine bağlıdır.",
    "TEKMER'in girişimciye/işletmeye sunduğu başlıca imkanlar: ofis/çalışma alanı tahsisi, mentorluk, eğitim, danışmanlık, ağlara erişim, yatırımcı bulma desteği, hızlandırıcı program; kabul edilirseniz 5746 sayılı Kanun kapsamında Ar-Ge vergi/SGK muafiyetlerinden de yararlanabilirsiniz.",
    "TEKMER, TÜBİTAK 1812 (BiGG) veya KOSGEB İş Kurma/İş Geliştirme Desteği gibi diğer girişimcilik destekleriyle birlikte kullanılabilir — dışlayıcı değildir.",
  ];

  if (g.tekmerBasvuruDurumu === "kabul_edildim") {
    gerekceler.push("İlgili TEKMER'in Proje Değerlendirme Kurulu'nca kabul edildiğiniz belirtilmiş.");
    return sonuc(meta.programId, meta.programAdi, meta.kurum, "uygun", "İlgili TEKMER tarafından kabul edilmişsiniz.", gerekceler, uyarilar);
  }
  if (g.tekmerBasvuruDurumu === "reddedildim") {
    gerekceler.push("Başvurduğunuz TEKMER'in Proje Değerlendirme Kurulu'nca reddedildiğiniz belirtilmiş — her TEKMER'in kendi kurulu ayrı karar verdiği için başka bir TEKMER'e (tema/bölge uygunsa) tekrar başvurmanız mümkündür.");
    return sonuc(meta.programId, meta.programAdi, meta.kurum, "uygun_degil", "Başvurduğunuz TEKMER tarafından reddedilmiş.", gerekceler, uyarilar);
  }

  if (g.tekmerTemaUyumu === "uyumsuz") {
    gerekceler.push("İş fikriniz, bilinen TEKMER temalarıyla (enerji, savunma, ilaç/medikal, biyoteknoloji, yazılım/yapay zeka, elektronik vb.) örtüşmüyor.");
    return sonuc(meta.programId, meta.programAdi, meta.kurum, "uygun_degil", "TEKMER temasıyla örtüşmüyor.", gerekceler, uyarilar);
  }
  if (g.tekmerTemaUyumu === undefined || g.tekmerTemaUyumu === "emin_degil") eksikAlanlar.push("iş fikrinizin TEKMER temalarından (enerji, savunma, ilaç/medikal, biyoteknoloji, yazılım/YZ vb.) biriyle örtüşüp örtüşmediği");
  else gerekceler.push("İş fikriniz bilinen TEKMER temalarından biriyle örtüşüyor.");

  if (g.yakinBolgedeTekmerVarMi === false) {
    gerekceler.push("Bölgenizde veya hedeflediğiniz ilde faal bir TEKMER bulunmadığı belirtilmiş — bu durumda başvurabileceğiniz bir TEKMER yok.");
    return sonuc(meta.programId, meta.programAdi, meta.kurum, "uygun_degil", "Erişilebilir bir TEKMER bulunmuyor.", gerekceler, uyarilar);
  }
  if (g.yakinBolgedeTekmerVarMi === undefined) eksikAlanlar.push("bölgenizde/hedeflediğiniz ilde faal bir TEKMER olup olmadığı");

  if (eksikAlanlar.length > 0) {
    return sonuc(
      meta.programId, meta.programAdi, meta.kurum, "belirsiz",
      "Girilen bilgilerle ön koşulların bir kısmı sağlanıyor, ancak bazı alanlar eksik.",
      gerekceler,
      [...uyarilar, `Eksik bilgiler: ${eksikAlanlar.join(", ")}.`]
    );
  }

  return sonuc(
    meta.programId, meta.programAdi, meta.kurum, "uygun",
    "İş fikriniz TEKMER temalarıyla örtüşüyor ve erişebileceğiniz bir TEKMER var; ilgili TEKMER'e kabul başvurusu yapabilirsiniz. Kabul kararı o TEKMER'in Proje Değerlendirme Kurulu tarafından başvuru sonrası verilir.",
    gerekceler,
    uyarilar
  );
}

// --- İstihdamı Koruma Destek Programı (2026-2 dönemi) ---
// Kaynak: app/blog/istihdami-koruma-destek-programi-2026/page.tsx (KOSGEB'in 28/08/2026
// tarihli "kapsamı genişletildi" duyurusu ve Uygulama Esasları'na dayalı, sourced içerik).
// 2026-2 döneminde (1 Eylül-31 Ekim 2026 başvuru) sadece finansman desteği açık; performans
// desteği (3.500 TL) bu dönemde yok. Büyük ölçekli + yatırım teşvik belgeli işletmeler için
// ayrı bir "ilave istihdam" formülü var (Sanayi ve Teknoloji Bakanlığı kanalı) — bu ayrı ve
// daha karmaşık senaryo burada tam modellenmiyor, yalnızca bilgilendirici not olarak geçiyor.
export function istihdamiKorumaDegerlendir(g: DestekBasvuruGirdisi): ProgramSonucuTaslak {
  const meta = {
    programId: "istihdami-koruma-destek-programi",
    programAdi: "İstihdamı Koruma Destek Programı (2026-2 Dönemi)",
    kurum: "KOSGEB / Sanayi ve Teknoloji Bakanlığı",
  };
  const gerekceler: string[] = [];
  const eksikAlanlar: string[] = [];
  const uyarilar = [
    "2026-2 dönemi başvuruları 1 Eylül - 31 Ekim 2026 tarihleri arasında açık; bu tarihten sonra bu dönem için yeni başvuru alınmaz.",
    "Program dönemsel yürütülüyor: 2026-2 dönemi kapandıktan sonra KOSGEB yeni bir dönem (2026-3 vb.) açabilir, farklı kurallarla (örn. performans desteğinin geri gelmesi/kaldırılması, farklı referans-koruma dönemi tarihleri) — bu analiz yalnızca 2026-2 dönemi kurallarını yansıtıyor, yeni dönem açıldığında güncel duyuru kontrol edilmelidir.",
    "Bu dönemde yalnızca finansman desteği (kredi faiz/kâr payının 12 puana kadarki kısmı, geri ödemesiz) var — performans desteği (çalışan başına aylık 3.500 TL) bu dönemde uygulanmıyor.",
    "Kredi limiti, Ocak-Haziran 2026 dönemine ait aylık ortalama prime esas kazanç toplamına göre hesaplanır; KOBİ'lerde üst limit 50.000.000 TL, büyük işletmelerde 150.000.000 TL.",
  ];

  if (g.naceKodu === undefined) eksikAlanlar.push("NACE kodu");
  else if (!imalatSektoruMu(g.naceKodu)) {
    gerekceler.push("Bu program yalnızca NACE Kısım C (İmalat, 10-33) sektöründeki işletmelere açık — girilen NACE kodu imalat dışında görünüyor.");
    return sonuc(meta.programId, meta.programAdi, meta.kurum, "uygun_degil", "Sektör (NACE) kapsam dışı.", gerekceler);
  }

  const mali = kobiMaliUstDeger(g.yillikNetSatisHasilatiTl, g.maliBilancoTl);
  const olcek = kobiOlceguHesapla(g.calisanSayisi, mali);
  if (olcek === null) {
    if (g.calisanSayisi === undefined) eksikAlanlar.push("çalışan sayısı");
    if (mali === undefined) eksikAlanlar.push("yıllık net satış hasılatı veya mali bilanço");
  } else if (olcek === "kobi_disi") {
    gerekceler.push("Büyük ölçekli işletmeler 2026-2 döneminde kapsama dahil edildi, ANCAK başvuru KOSGEB yerine doğrudan Sanayi ve Teknoloji Bakanlığı'na yapılır ve yatırım teşvik belgeniz varsa kredi limiti/hak ediş için farklı bir formül (ilave istihdam taahhüdünüzün yarısı × 180 gün prim eşdeğeri) geçerlidir — bu ön analiz bu senaryoyu ayrıntılı hesaplamıyor.");
  } else {
    gerekceler.push(`İşletme ölçeği "${olcek}" — KOBİ ölçeğinde, başvuru KOSGEB üzerinden yapılır.`);
    if (g.kobiBilgiSistemiKayitGuncelMi === false) {
      gerekceler.push("KOBİ Bilgi Sistemi kaydı/beyannamesi güncel değil — bu, KOBİ ölçeğindeki işletmeler için zorunlu bir ön koşul.");
      return sonuc(meta.programId, meta.programAdi, meta.kurum, "uygun_degil", "KOBİ Bilgi Sistemi kaydı güncel değil.", gerekceler);
    }
    if (g.kobiBilgiSistemiKayitGuncelMi === undefined) eksikAlanlar.push("KOBİ Bilgi Sistemi kaydı/beyannamesinin güncel olup olmadığı");
  }

  if (g.referansDonemSigortaliCalisaniVarMi === false) {
    gerekceler.push("Ocak-Haziran 2026 referans döneminde sigortalı çalışanı olmayan (ortalama prim günü sıfır olan) işyerleri kapsam dışı.");
    return sonuc(meta.programId, meta.programAdi, meta.kurum, "uygun_degil", "Referans dönemde sigortalı çalışan bulunmuyor.", gerekceler);
  }
  if (g.referansDonemSigortaliCalisaniVarMi === undefined) eksikAlanlar.push("Ocak-Haziran 2026 referans döneminde sigortalı çalışan olup olmadığı");

  if (g.istihdamiKorumaTaahhutEdebilirMi === false) {
    gerekceler.push("Ocak-Haziran 2026 ortalama prim gün sayısının Temmuz-Aralık 2026 boyunca (en az 6 ay) korunamayacağı belirtilmiş — bu, desteğin çekirdek şartı.");
    return sonuc(meta.programId, meta.programAdi, meta.kurum, "uygun_degil", "İstihdamı koruma taahhüdü karşılanamıyor.", gerekceler);
  }
  if (g.istihdamiKorumaTaahhutEdebilirMi === undefined) {
    eksikAlanlar.push("Ocak-Haziran 2026 ortalama prim gün sayınızı Temmuz-Aralık 2026'da koruyup koruyamayacağınız");
  } else {
    gerekceler.push("Ocak-Haziran 2026 ortalama prim gün sayısını Temmuz-Aralık 2026 boyunca koruyabileceğiniz belirtilmiş — somut bir kişi sayısı şartı yok, kendi geçmiş ortalamanıza göre değerlendirilir.");
  }

  if (g.kosgebVadesiGecmisBorcuVarMi === true) {
    gerekceler.push("KOSGEB'e yapılandırılmamış, vadesi geçmiş bir borç bulunuyor — bu, başvuru için engel teşkil ediyor (yapılandırma yapılırsa başvurulabilir).");
    return sonuc(meta.programId, meta.programAdi, meta.kurum, "uygun_degil", "Yapılandırılmamış KOSGEB borcu var.", gerekceler);
  }
  if (g.kosgebVadesiGecmisBorcuVarMi === undefined) eksikAlanlar.push("KOSGEB'e vadesi geçmiş (yapılandırılmamış) borç olup olmadığı");

  // KOSGEB duyurusu (28/08/2026): 2026 Ocak-Haziran dönemine ait muhtasar ve prim hizmet beyannameleri mevcut olmalı.
  if (g.ocakHaziranBeyannameleriVarMi === false) {
    gerekceler.push("2026 Ocak-Haziran dönemine ait muhtasar ve prim hizmet beyannameleri mevcut olmalı — bu beyannameler bulunmuyor.");
    return sonuc(meta.programId, meta.programAdi, meta.kurum, "uygun_degil", "Ocak-Haziran 2026 beyannameleri yok.", gerekceler);
  }
  if (g.ocakHaziranBeyannameleriVarMi === undefined) eksikAlanlar.push("2026 Ocak-Haziran dönemine ait muhtasar ve prim hizmet beyannamelerinin mevcut olup olmadığı");

  if (eksikAlanlar.length > 0) {
    return sonuc(
      meta.programId, meta.programAdi, meta.kurum, "belirsiz",
      "Girilen bilgilerle ön koşulların bir kısmı sağlanıyor, ancak bazı alanlar eksik.",
      gerekceler,
      [...uyarilar, `Eksik bilgiler: ${eksikAlanlar.join(", ")}.`],
      undefined,
      "31 Ekim 2026"
    );
  }

  return sonuc(
    meta.programId, meta.programAdi, meta.kurum, "uygun",
    "Girilen bilgilere göre başvuru şartlarının tamamı sağlanıyor. Kredi limiti hesabı ve protokollü banka kredi değerlendirmesi başvuru sonrası aşamalardır.",
    gerekceler,
    uyarilar,
    undefined,
    "31 Ekim 2026"
  );
}

// --- KOSGEB Yapay Zeka Kredi Programı ---
// Kaynak: kosgeb.gov.tr/site/tr/genel/destekdetay/9414 ve Yapay Zeka Kredi Yönergesi (13/06/2026);
// başvuru 9 Temmuz - 31 Aralık 2026, KOBİ Bilgi Sistemi. Mikro dahil tüm KOBİ'ler başvurabilir.
export function kosgebYapayZekaKrediDegerlendir(g: DestekBasvuruGirdisi): ProgramSonucuTaslak {
  const meta = { programId: "kosgeb-yapay-zeka-kredi", programAdi: "KOSGEB Yapay Zeka Kredi Programı", kurum: "KOSGEB" };
  const gerekceler: string[] = [];
  const eksikAlanlar: string[] = [];
  const SON = "31 Aralık 2026";

  const mali = kobiMaliUstDeger(g.yillikNetSatisHasilatiTl, g.maliBilancoTl);
  const olcek = kobiOlceguHesapla(g.calisanSayisi, mali);
  if (olcek === "kobi_disi") {
    gerekceler.push("Program yalnızca KOBİ ölçeğindeki işletmelere açık — girilen çalışan sayısı/ciro büyük ölçekli firma sınırını aşıyor.");
    return sonuc(meta.programId, meta.programAdi, meta.kurum, "uygun_degil", "KOBİ ölçek şartı sağlanmıyor.", gerekceler, undefined, undefined, SON);
  }
  if (olcek === null) {
    if (g.calisanSayisi === undefined) eksikAlanlar.push("çalışan sayısı");
    if (mali === undefined) eksikAlanlar.push("yıllık net satış hasılatı veya mali bilanço");
  }

  if (g.kosgebVeriTabaniKayitliMi === false) {
    gerekceler.push("İşletmenin KOSGEB Veri Tabanı'nda kayıtlı ve aktif olması gerekir — kaydınız yok.");
    return sonuc(meta.programId, meta.programAdi, meta.kurum, "uygun_degil", "KOSGEB veri tabanı kaydı yok.", gerekceler, undefined, undefined, SON);
  }
  if (g.kosgebVeriTabaniKayitliMi === undefined) eksikAlanlar.push("KOSGEB veri tabanı kaydının aktif olup olmadığı");

  if (g.kobiBilgiSistemiKayitGuncelMi === false) {
    gerekceler.push("İşletme Beyanı'nın güncel ve aktif olması gerekir — beyannameniz güncel değil.");
    return sonuc(meta.programId, meta.programAdi, meta.kurum, "uygun_degil", "İşletme Beyanı güncel değil.", gerekceler, undefined, undefined, SON);
  }
  if (g.kobiBilgiSistemiKayitGuncelMi === undefined) eksikAlanlar.push("İşletme Beyanı'nın güncel olup olmadığı");

  if (g.teknogirisimRozetiGecerliMi === false) {
    gerekceler.push("Başvuru tarihi itibarıyla geçerli bir Teknogirişim Rozeti şarttır; rozeti olmayan ya da süresi dolan işletmeler diğer şartları sağlasa da başvuramaz. Rozet, Sanayi ve Teknoloji Bakanlığı'nın teknogirisim.sanayi.gov.tr portalından alınır (3 yıl geçerli).");
    return sonuc(meta.programId, meta.programAdi, meta.kurum, "uygun_degil", "Geçerli Teknogirişim Rozeti yok.", gerekceler, undefined, undefined, SON);
  }
  if (g.teknogirisimRozetiGecerliMi === undefined) eksikAlanlar.push("geçerli Teknogirişim Rozeti olup olmadığı");

  gerekceler.push("KOBİ ölçeği, KOSGEB kaydı, İşletme Beyanı ve Teknogirişim Rozeti şartları sağlanıyor.");

  const uyarilar = [
    "Kredi nakit olarak hesaba yatmaz; yalnızca KOSGEB protokollü yapay zeka hizmet sağlayıcılarından (GPU/CPU/RAM, bulut, veri depolama, AI platformları) alınacak hizmetlerin ödemesinde GO Dijital Cüzdan üzerinden kullanılır.",
    "Tutar 500.000 TL - 5.000.000 TL, faiz ve komisyon yok; vade 24 ay (ilk 12 ay ödemesiz, sonra 4 eşit taksit). 12 ay içinde kullanılmayan tutar iptal edilir.",
    "GO Dijital Cüzdan hesabı gerekir (yoksa başvuru sürecinde açılabilir) ve kredinin kullanılabilmesi için bankadan Kesin Teminat Mektubu sunulmalıdır; bunlar başvuru sonrası hazırlanacak belgelerdir.",
    "Başvurular 9 Temmuz - 31 Aralık 2026 arasında KOBİ Bilgi Sistemi üzerinden alınıyor; Kararname 9497 kapsamındaki sektör şartı ayrıca teyit edilmelidir.",
  ];

  if (eksikAlanlar.length > 0) {
    return sonuc(
      meta.programId, meta.programAdi, meta.kurum, "belirsiz",
      "Somut bir ret sebebi görünmüyor ama başvuru şartlarını tam değerlendirmek için eksik bilgi var.",
      gerekceler, [...uyarilar, `Eksik bilgiler: ${eksikAlanlar.join(", ")}.`], undefined, SON
    );
  }
  return sonuc(
    meta.programId, meta.programAdi, meta.kurum, "uygun",
    "Başvuru şartlarının tamamını (KOBİ, KOSGEB kaydı, İşletme Beyanı, Teknogirişim Rozeti) sağlıyorsunuz.",
    gerekceler, uyarilar, undefined, SON
  );
}
