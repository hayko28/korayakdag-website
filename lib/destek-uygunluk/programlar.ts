import { DestekBasvuruGirdisi, ProgramSonucuTaslak, SonucDurumu, UretimYatirimNiteligi } from "./types";
import {
  ilinBolgesi,
  imalatSektoruMu,
  isletmeYasiYil,
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
  uyarilar?: string[]
): ProgramSonucuTaslak {
  return { programId, programAdi, kurum, durum, ozet, gerekceler, uyarilar };
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
    meta.programId, meta.programAdi, meta.kurum, "kismen_uygun",
    "Girilen bilgilere göre başvuru ön koşullarının tamamı sağlanıyor; nihai kabul Kurul/Jüri puanlaması ve rekabetçi sıralamaya bağlıdır.",
    gerekceler,
    uyarilar
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

  const mali = g.yillikNetSatisHasilatiTl !== undefined || g.maliBilancoTl !== undefined
    ? Math.max(g.yillikNetSatisHasilatiTl ?? 0, g.maliBilancoTl ?? 0)
    : undefined;
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
    "Bu program hibe değil, banka kredisinin faiz/kâr payı giderine destektir (anapara işletmeye geri ödemelidir); kredi üst limiti savunma/havacılık/uzay tedarikçi iş birliğinde EYDEP sertifika seviyesine göre 25-30 milyon TL'ye çıkabilir.",
    "YODA raporunun (ve dijital dönüşüm track'inde dijital dönüşüm/olgunluk değerlendirme raporunun) başvuru tarihinden geriye en fazla 1 yıl içinde alınmış olması gerekiyor — bu ön analizde raporun tarihi sorulmuyor, başvuru öncesi kontrol edilmelidir.",
    "MADDE 18 uyarınca Kurul her projeyi 100 üzerinden puanlar (50 altı ret), 50 ve üzeri olanlar sınırlı kontenjan için rekabetçi bir sıralamaya tabi tutulur — ön koşulların sağlanması başvuru hakkı verir, kesin onay anlamına gelmez.",
    "Uygulama Esasları sık güncelleniyor (bu program son 4 ayda 2 kez revize edildi); başvuru anında KOSGEB'in güncel metniyle teyit edilmelidir.",
  ];
  if (buyumeUyari) uyarilar.push(buyumeUyari);

  if (eksikAlanlar.length > 0) {
    return sonuc(
      meta.programId, meta.programAdi, meta.kurum, "belirsiz",
      "Girilen bilgilerle ön koşulların çoğu sağlanıyor, ancak bazı alanlar eksik.",
      gerekceler,
      [...uyarilar, `Eksik bilgiler: ${eksikAlanlar.join(", ")}.`]
    );
  }

  return sonuc(
    meta.programId, meta.programAdi, meta.kurum, "kismen_uygun",
    "Girilen bilgilere göre başvuru ön koşullarının tamamı sağlanıyor; nihai kabul Kurul puanlaması (≥50/100) ve kontenjan sıralamasına bağlıdır.",
    gerekceler,
    uyarilar
  );
}

// --- 3) Yatırım Teşvik Belgesi ---
// Kaynak: research/destek-uygunluk/yatirim-tesvik-belgesi.md (9903 sayılı Karar + Tebliğ 2025/1)
// Karmaşıklığı nedeniyle bu değerlendirme HİÇBİR ZAMAN kesin "uygun" döndürmez,
// en fazla "kismen_uygun" (ön kategori tahmini) verir.
export function yatirimTesvikBelgesiDegerlendir(g: DestekBasvuruGirdisi): ProgramSonucuTaslak {
  const meta = { programId: "yatirim-tesvik-belgesi", programAdi: "Yatırım Teşvik Belgesi", kurum: "Sanayi ve Teknoloji Bakanlığı" };
  const gerekceler: string[] = [];
  const eksikAlanlar: string[] = [];
  const uyarilar = [
    "Bu sonuç yalnızca bir ön kategori tahminidir; EK-3'teki satır bazlı özel şartlar (asgari kapasite, m², oda sayısı vb.) yatırımınızın tam tanımına göre ayrıca kontrol edilmelidir.",
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

  if (eksikAlanlar.length > 0) {
    return sonuc(
      meta.programId, meta.programAdi, meta.kurum, "belirsiz",
      "Girilen bilgilerle kesin bir ön kategori belirlenemedi.",
      gerekceler,
      [...uyarilar, `Eksik bilgiler: ${eksikAlanlar.join(", ")}.`]
    );
  }

  return sonuc(
    meta.programId, meta.programAdi, meta.kurum, "kismen_uygun",
    "Girilen bilgilere göre yatırımınız teşvik sisteminin genel çerçevesine uyuyor gibi görünüyor.",
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
  return `Proje, TÜBİTAK'ın 2026-2028 Öncelikli Ar-Ge ve Yenilik Konuları kataloğunun "${ETIKET[kategori]}" ana hedef kategorisiyle uyumlu işaretlenmiş — güncel öncelikli alanlarla örtüşme, değerlendirmede olumlu bir sinyal olarak görülür.`;
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

  gerekceler.push("Kuruluş türü ve Türkiye'de yerleşiklik şartı sağlanıyor, somut bir ret sinyali görülmedi.");
  gerekceler.push("KOBİ zorunluluğu yoktur — büyük ölçekli sermaye şirketleri de (TÜBİTAK'ın dönemsel olarak belirlediği bir üst eşiğin altında kalmak kaydıyla) başvurabilir.");

  const uyarilar = [
    "Ar-Ge/yenilik niteliği nihai olarak hakem ve Grup Yürütme Kurulu (GYK) tarafından proje bazında değerlendirilir; bu araç bu değerlendirmeyi öngöremez.",
    "Proje başına TÜBİTAK katkısı güncel çağrıya göre değişir (2026/2 çağrısında 20 milyon TL); destek oranı %60 (büyük ölçekli) ile %75 (KOBİ) arasındadır.",
  ];

  if (eksikAlanlar.length > 0) {
    return sonuc(
      meta.programId, meta.programAdi, meta.kurum, "belirsiz",
      "Somut bir ret sebebi görünmüyor ama ön koşulları tam değerlendirmek için eksik bilgi var.",
      gerekceler,
      [...uyarilar, `Eksik bilgiler: ${eksikAlanlar.join(", ")}.`]
    );
  }

  return sonuc(
    meta.programId, meta.programAdi, meta.kurum, "kismen_uygun",
    "Kuruluş, ön koşulları (şirket türü, yerleşiklik) sağlıyor ve somut bir ret sinyali yok.",
    gerekceler,
    uyarilar
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

  const mali = g.yillikNetSatisHasilatiTl !== undefined || g.maliBilancoTl !== undefined
    ? Math.max(g.yillikNetSatisHasilatiTl ?? 0, g.maliBilancoTl ?? 0)
    : undefined;
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

  const uyarilar = [
    "Ar-Ge/yenilik niteliği nihai olarak hakem ve Grup Yürütme Kurulu (GYK) tarafından proje bazında değerlendirilir; bu araç bu değerlendirmeyi öngöremez.",
    "Güncel çağrıda (2026/2) azami proje bütçesi 3.500.000 TL, destek oranı %75 olarak görülüyor (dönemsel olarak değişebilir).",
  ];

  if (eksikAlanlar.length > 0) {
    return sonuc(
      meta.programId, meta.programAdi, meta.kurum, "belirsiz",
      "Somut bir ret sebebi görünmüyor ama ön koşulları tam değerlendirmek için eksik bilgi var.",
      gerekceler,
      [...uyarilar, `Eksik bilgiler: ${eksikAlanlar.join(", ")}.`]
    );
  }

  return sonuc(
    meta.programId, meta.programAdi, meta.kurum, "kismen_uygun",
    "Kuruluş, ön koşulların tamamını (tür, ölçek, proje sayısı) sağlıyor ve somut bir ret sinyali yok.",
    gerekceler,
    uyarilar
  );
}

// --- 6) KOSGEB Ar-Ge, Ür-Ge ve İnovasyon Destek Programı ---
// Kaynak: research/destek-uygunluk/kosgeb-arge-urge-inovasyon.md (blog: kosgeb-arge-urge-inovasyon-destek-programi-2026)
export function kosgebArgeUrgeInovasyonDegerlendir(g: DestekBasvuruGirdisi): ProgramSonucuTaslak {
  const meta = { programId: "kosgeb-arge-urge-inovasyon", programAdi: "KOSGEB Ar-Ge, Ür-Ge ve İnovasyon Destek Programı", kurum: "KOSGEB" };
  const gerekceler: string[] = [];
  const eksikAlanlar: string[] = [];

  if (g.sirketTuru === "dernek_vakif_kooperatif_birlik_adi_ortaklik") {
    gerekceler.push("Bu program, iş fikrine dayalı gerçek kişi girişimcilere veya KOBİ ölçeğindeki sermaye şirketlerine açık — dernek/vakıf/kooperatif/birlik/adi ortaklık statüsü kapsam dışı.");
    return sonuc(meta.programId, meta.programAdi, meta.kurum, "uygun_degil", "Kuruluş türü kapsam dışı.", gerekceler);
  }

  if (g.sirketTuru !== undefined && g.sirketTuru !== "sahis") {
    const mali = g.yillikNetSatisHasilatiTl !== undefined || g.maliBilancoTl !== undefined
      ? Math.max(g.yillikNetSatisHasilatiTl ?? 0, g.maliBilancoTl ?? 0)
      : undefined;
    const olcek = kobiOlceguHesapla(g.calisanSayisi, mali);
    if (olcek === "kobi_disi") {
      gerekceler.push("Şirket kurulmuşsa bu program yalnızca KOBİ ölçeğindeki (mikro/küçük/orta) sermaye şirketlerine açık — girilen çalışan sayısı/ciro büyük ölçekli firma sınırını aşıyor.");
      return sonuc(meta.programId, meta.programAdi, meta.kurum, "uygun_degil", "KOBİ ölçek şartı sağlanmıyor.", gerekceler);
    }
    if (olcek === null) {
      if (g.calisanSayisi === undefined) eksikAlanlar.push("çalışan sayısı");
      if (mali === undefined) eksikAlanlar.push("yıllık net satış hasılatı veya mali bilanço");
    }
  }

  // Girişimci (henüz şirketi olmayan veya şahıs işletmesi) için "ömür boyu en fazla
  // 1 defa" kuralı — KOBİ'ler için sınırsız olduğundan yalnızca bu grupta soruluyor/kontrol ediliyor.
  const girisimciKapsaminda = g.sirketTuru === undefined || g.sirketTuru === "sahis";
  if (girisimciKapsaminda && g.argeUrgeGirisimciDahaOnceKullanildiMi === true) {
    return sonuc(
      meta.programId, meta.programAdi, meta.kurum, "uygun_degil",
      "Girişimci olarak bu destek hakkı daha önce kullanılmış.",
      ["Ar-Ge ve İnovasyon Projesi kapsamında girişimciler bu destekten ömür boyu en fazla 1 kez yararlanabiliyor — bu hak daha önce kullanılmış."]
    );
  }
  if (girisimciKapsaminda && g.argeUrgeGirisimciDahaOnceKullanildiMi === undefined) {
    eksikAlanlar.push("girişimci olarak bu destekten daha önce yararlanılıp yararlanılmadığı");
  }

  gerekceler.push("Henüz şirketi olmayan, bir iş fikrine dayalı 'Yeni Girişimci' olarak (ömür boyu en fazla 1 defa) ya da kurulu bir KOBİ olarak (Ar-Ge/İnovasyon projesinde sınırsız, Ür-Ge projesinde en fazla 3 kez) başvurulabilir; aynı anda yalnızca 1 proje desteklenir.");
  gerekceler.push("Ar-Ge Merkezi statüsünün aksine asgari personel sayısı, teknopark kaydı veya ciro şartı aranmaz.");

  const uyarilar = [
    "Destek üst limiti ve oranları kalem bazında (nitelikli personel, makine-teçhizat, sınai mülkiyet vb.) değişir ve güncel çağrıya göre farklılık gösterebilir — bu ön analizde tek bir rakam varsayılmıyor, kesin tutar KOSGEB'in güncel Uygulama Esasları ile teyit edilmelidir.",
    "Ür-Ge (Ürün Geliştirme) kapsamının, ürünün daha önce desteklenmiş bir Ar-Ge/yenilik projesi, patent, doktora çalışması veya TÜR Deneyim Belgesi gibi bir kaynaktan doğmuş olmasını gerektirdiği görülüyor, ancak bu şart bu oturumda birincil kaynaktan tam teyit edilemedi — başvuru öncesi KOSGEB ile netleştirilmelidir.",
    "Aynı gider kalemi için Yatırım Teşvik Belgesi gibi başka bir kurumdan eşzamanlı destek alınamaz.",
    "Başvurular KOBİ Bilgi Sistemi (KBS) üzerinden yılın herhangi bir tarihinde yapılabilir; nihai kabul Değerlendirme ve Karar Kurulu'na aittir — bu yüzden bu araç kesin \"uygun\" değil, en fazla \"ön koşulları sağlıyor\" sonucu verir.",
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
    meta.programId, meta.programAdi, meta.kurum, "kismen_uygun",
    "Girilen bilgilere göre ön koşullar sağlanıyor; nihai kabul Değerlendirme ve Karar Kurulu'na aittir.",
    gerekceler,
    uyarilar
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
  } else {
    eksikAlanlar.push("İhracatçı Birliği üyeliği durumu");
  }

  if (g.dysKayitliMi === undefined) eksikAlanlar.push("Destek Yönetim Sistemi (DYS) kaydı durumu");
  else if (g.dysKayitliMi) gerekceler.push("Destek Yönetim Sistemi (DYS) kaydı mevcut — başvuru altyapısı hazır.");

  if (eksikAlanlar.length > 0) {
    return sonuc(
      meta.programId, meta.programAdi, meta.kurum, "belirsiz",
      "Girilen bilgilerle hangi destek kaleminin uygun olduğu netleşmedi.",
      gerekceler,
      [...uyarilar, `Eksik bilgiler: ${eksikAlanlar.join(", ")}.`]
    );
  }

  return sonuc(
    meta.programId, meta.programAdi, meta.kurum, "kismen_uygun",
    "Girilen bilgilere göre ihracat destekleri kapsamına genel olarak uyuyorsunuz; hangi alt kalemin uygun olduğu faaliyetinize göre netleştirilmelidir.",
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
    "Bu program dönemsel çağrılarla açılır (Türkiye Yeşil Sanayi Projesi kapsamında); güncel çağrı takvimi ve bütçe üst limiti TÜBİTAK TEYDEB üzerinden teyit edilmelidir.",
  ];

  if (eksikAlanlar.length > 0) {
    return sonuc(
      meta.programId, meta.programAdi, meta.kurum, "belirsiz",
      "Somut bir ret sebebi görünmüyor ama ön koşulları tam değerlendirmek için eksik bilgi var.",
      gerekceler,
      [...uyarilar, `Eksik bilgiler: ${eksikAlanlar.join(", ")}.`]
    );
  }

  return sonuc(meta.programId, meta.programAdi, meta.kurum, "kismen_uygun", "Kuruluş, ön koşulları sağlıyor ve somut bir ret sinyali yok.", gerekceler, uyarilar);
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

  const mali = g.yillikNetSatisHasilatiTl !== undefined || g.maliBilancoTl !== undefined
    ? Math.max(g.yillikNetSatisHasilatiTl ?? 0, g.maliBilancoTl ?? 0)
    : undefined;
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

  if (g.ddxRaporuVarMi === false) {
    gerekceler.push("Başvurunun ön şartı olan dijital dönüşüm/olgunluk değerlendirme raporu henüz alınmamış.");
    return sonuc(meta.programId, meta.programAdi, meta.kurum, "uygun_degil", "Dönüşüm raporu eksik.", gerekceler);
  }
  if (g.ddxRaporuVarMi === undefined) eksikAlanlar.push("dijital dönüşüm/olgunluk değerlendirme raporu durumu");

  if (g.maliKarneVarMi === false) {
    gerekceler.push("Başvurunun ön şartı olan güncel mali yeterlilik bilgisi (bankaların paylaştığı finansal veri üzerinden Kurul'ca değerlendirilir) henüz sağlanmamış.");
    return sonuc(meta.programId, meta.programAdi, meta.kurum, "uygun_degil", "Mali yeterlilik bilgisi eksik.", gerekceler);
  }
  if (g.maliKarneVarMi === undefined) eksikAlanlar.push("mali yeterlilik bilgisi durumu");

  if (g.maliYeterlilikSaglaniyorMu === false) {
    gerekceler.push("MADDE 7/7: son mali yıl Öz Kaynaklar Toplamı'nın pozitif olması VE son 3 mali yıldan en az birinde Faaliyet Kârı'nın pozitif olması gerekiyor — bu sağlanmıyor.");
    return sonuc(meta.programId, meta.programAdi, meta.kurum, "uygun_degil", "Mali yeterlilik şartı sağlanmıyor.", gerekceler);
  }
  if (g.maliYeterlilikSaglaniyorMu === undefined) eksikAlanlar.push("son mali yıl Öz Kaynaklar Toplamı ve son 3 mali yıl Faaliyet Kârı durumu");

  gerekceler.push("KOBİ ölçeği, imalat sektörü ve mali yeterlilik şartları sağlanıyor.");

  const uyarilar = [
    "Bu destek hibe değildir: banka kredisinin faiz giderine geri ödemesiz destek (alt limit 1.000.000 TL, üst limit 20.000.000 TL) ile Kurul onaylı makine/teçhizat/yazılım/donanım gider kalemlerinden oluşur. Azami vade 36 ay (+6 ay ödemesiz dönem opsiyonu), program süresi 24 aydır.",
    "EBRD'nin 'Uygun Bulunmayan Sektör/Faaliyetler Tablosu' kapsamındaki ana faaliyetler kapsam dışıdır — bu ön analizde ayrıca sorulmuyor, başvuru öncesi kontrol edilmelidir.",
    "MADDE 12/6 uyarınca nihai onay Kurul'un oy çokluğuyla verdiği bir karardır; ön koşulların tamamının sağlanması otomatik onay anlamına gelmez.",
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
    meta.programId, meta.programAdi, meta.kurum, "kismen_uygun",
    "Girilen bilgilere göre başvuru ön koşullarının tamamı sağlanıyor; nihai kabul Kurul'un oy çokluğuyla verdiği karara bağlıdır.",
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
    "Sektör kapsamı genel Yönerge'de sabitlenmemiş, ilan edilen çağrıya göre belirleniyor — güncel çağrı kapsamı kosgeb.gov.tr üzerinden teyit edilmelidir.",
  ];

  const mali = g.yillikNetSatisHasilatiTl !== undefined || g.maliBilancoTl !== undefined
    ? Math.max(g.yillikNetSatisHasilatiTl ?? 0, g.maliBilancoTl ?? 0)
    : undefined;
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
      [...uyarilar, `Eksik bilgiler: ${eksikAlanlar.join(", ")}.`]
    );
  }

  return sonuc(
    meta.programId, meta.programAdi, meta.kurum, "kismen_uygun",
    "Girilen bilgilere göre ölçek ve tema kriterleri sağlanıyor; yukarıdaki ek ön koşullar ve nihai onay KOSGEB Kurulu'nun değerlendirmesine tabidir.",
    gerekceler,
    uyarilar
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
    "TKDK hibeleri yalnızca Kurum tarafından ilan edilen çağrı dönemlerinde, belirlenen desteklenen illerde ve tedbirlerde açılır; güncel çağrı takvimi tkdk.gov.tr/Duyuru üzerinden teyit edilmelidir.",
    "Desteklenen il listesi 42 il olarak görülüyor (tkdk.gov.tr SSS sayfası); kaynak sayfa eski tarihli olabilir, güncel il listesi başvuru öncesi mutlaka teyit edilmelidir.",
    "Proje bütçesi alt/üst limitleri TEDBİR BAZINDA değişir (örn. M7/302 için görülen üst limit ~500.000 Euro) — bu ön analizde tek bir aralık varsayılmıyor, kesin limit seçtiğiniz tedbirin güncel Başvuru Çağrı Rehberi'nden teyit edilmelidir.",
    "Yaş (gerçek kişi başvurularında) ve mikro ölçek hariç tutma gibi bazı şartlar yalnızca ikincil kaynaklardan görüldü, TKDK'nın tedbir rehberi PDF'leriyle teyit edilemedi — kesinleştirmek için bir TKDK danışmanına danışmanız önerilir.",
  ];

  if (g.basvuranYasi !== undefined && (g.basvuranYasi < 18 || g.basvuranYasi > 65)) {
    gerekceler.push(`Gerçek kişi başvurularında yaş 18-65 aralığında olmalı — girilen yaş (${g.basvuranYasi}) bu aralığın dışında görünüyor (tüzel kişilik başvurularında bu şart aranmaz). Bu eşik yalnızca ikincil kaynaktan doğrulanabildi, kesinleştirmek gerekir.`);
    return sonuc(meta.programId, meta.programAdi, meta.kurum, "belirsiz", "Yaş şartı gerçek kişi başvurusu için sağlanmıyor gibi görünüyor.", gerekceler, uyarilar);
  }
  if (g.basvuranYasi === undefined) eksikAlanlar.push("başvuranın yaşı (gerçek kişi başvurusuysa)");

  if (g.tkdkDesteklenenIldeMi === false) {
    gerekceler.push("Yatırımın yapılacağı il, TKDK'nın o çağrı dönemi için belirlediği desteklenen iller arasında değil.");
    return sonuc(meta.programId, meta.programAdi, meta.kurum, "uygun_degil", "İl kapsam dışı.", gerekceler, uyarilar);
  }
  if (g.tkdkDesteklenenIldeMi === undefined) eksikAlanlar.push("yatırım ilinin TKDK destekli iller arasında olup olmadığı");

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
      [...uyarilar, `Eksik bilgiler: ${eksikAlanlar.join(", ")}.`]
    );
  }

  return sonuc(
    meta.programId, meta.programAdi, meta.kurum, "kismen_uygun",
    "Girilen bilgilere göre genel çerçeveye uyuyorsunuz; kesin uygunluk güncel çağrı dönemine göre belirlenir.",
    gerekceler,
    uyarilar
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

  const ortalamaIhracat = g.turqualitySon3YilOrtalamaIhracatUsd;
  const sonYilIhracat = g.turqualitySon1YilIhracatUsd;
  const ihracatEsigiSaglaniyor =
    (ortalamaIhracat !== undefined && ortalamaIhracat >= 3_000_000) ||
    (sonYilIhracat !== undefined && sonYilIhracat >= 10_000_000);

  if (ortalamaIhracat !== undefined || sonYilIhracat !== undefined) {
    if (!ihracatEsigiSaglaniyor) {
      gerekceler.push(
        "Son 3 yıl ortalama ihracat en az 3.000.000 ABD Doları (ya da son 1 yılda en az 10.000.000 ABD Doları istisnası) şartı sağlanmıyor."
      );
      return sonuc(meta.programId, meta.programAdi, meta.kurum, "uygun_degil", "İhracat tutarı eşiğin altında.", gerekceler, uyarilar);
    }
    gerekceler.push("İhracat tutarı eşiği (3 yıl ortalama 3.000.000 USD veya son 1 yılda 10.000.000 USD) sağlanıyor.");
  } else {
    eksikAlanlar.push("son 3 yıl ortalama ihracat tutarı (veya son 1 yıl ihracat istisnası)");
  }

  if (g.markaYurtDisiTescilYurtIciTescildenOnceMi === true) {
    gerekceler.push("Yurt dışı marka tescili BAŞVURU tarihi, yurt içi tescil başvuru tarihinden önce yapılmış (MADDE 14/1-c) — bu sıra diskalifiye eden bir durum; yurt içi başvuru, yurt dışı başvurudan önce veya aynı tarihte yapılmış olmalı.");
    return sonuc(meta.programId, meta.programAdi, meta.kurum, "uygun_degil", "Tescil başvuru sırası uygun değil.", gerekceler, uyarilar);
  }
  if (g.markaYurtDisiTescilYurtIciTescildenOnceMi === undefined) eksikAlanlar.push("yurt dışı tescil başvurusunun yurt içi tescil başvurusundan önce mi yapıldığı (aynı tarih sorun değil)");

  if (g.markaYurtIciTescilVarMi === false) {
    gerekceler.push("Başvurulan markanın başvuru tarihinden en az 1 yıl önce alınmış yurt içi tescili bulunmuyor.");
    return sonuc(meta.programId, meta.programAdi, meta.kurum, "uygun_degil", "Yurt içi marka tescili eksik.", gerekceler, uyarilar);
  }
  if (g.markaYurtIciTescilVarMi === undefined) eksikAlanlar.push("yurt içi marka tescili (en az 1 yıl önce alınmış)");

  if (g.markaYurtDisiTescilVarMi === false) {
    gerekceler.push("Aynı markanın Madrid Protokolü'ne taraf en az bir ülkede yurt dışı tescili bulunmuyor.");
    return sonuc(meta.programId, meta.programAdi, meta.kurum, "belirsiz", "Yurt dışı marka tescili henüz yok.", gerekceler, [
      ...uyarilar,
      "MADDE 14/1-b, yurt içi tescille aynı bağlayıcılıkta 'en az 1 yıl önce alınmış olma' şartını yurt dışı tescil için de arıyor — bu şart başvuru anına kadar 'tamamlanabilir' değil, süreci önceden (en az 1 yıl önceden) başlatmanız gerekir, son ana bırakılmamalı.",
    ]);
  }
  if (g.markaYurtDisiTescilVarMi === undefined) eksikAlanlar.push("yurt dışı (Madrid Protokolü ülkesi) marka tescili");

  if (eksikAlanlar.length > 0) {
    return sonuc(
      meta.programId, meta.programAdi, meta.kurum, "belirsiz",
      "Girilen bilgilerle nesnel eşik şartlarının çoğu sağlanıyor, ancak bazı alanlar eksik.",
      gerekceler,
      [...uyarilar, `Eksik bilgiler: ${eksikAlanlar.join(", ")}.`]
    );
  }

  return sonuc(
    meta.programId, meta.programAdi, meta.kurum, "kismen_uygun",
    "İhracat tutarı ve marka tescili eşiklerini sağlıyorsunuz; Turquality mi yoksa Marka Destek Programı mı kapsamına alınacağınız danışmanlık firmasının ön inceleme puanına bağlı.",
    gerekceler,
    uyarilar
  );
}

// --- 11) KOSGEB Stratejik Ürün Destek Programı ---
// Kaynak: research/destek-uygunluk/kosgeb-stratejik-urun.md — UE-13/08 (Rev. 24/03/2026),
// birincil kaynaktan (pdftotext) doğrulandı, 2026-09-18. İki aşamalı: Bakanlık ön başvuru
// (Teknoloji Odaklı Sanayi Hamlesi) → KOSGEB. Nihai karar Bakanlık Değerlendirme Komitesi'ne
// bağlı, KOSGEB Kurulu yalnızca gider kalemi uygunluğunu inceleyip görüş sunar (MADDE 17,
// 19-20); onay "kazanılmış hak teşkil etmez" (MADDE 15/4) — tavan hep "kismen_uygun".
export function kosgebStratejikUrunDegerlendir(g: DestekBasvuruGirdisi): ProgramSonucuTaslak {
  const meta = { programId: "kosgeb-stratejik-urun", programAdi: "KOSGEB Stratejik Ürün Destek Programı", kurum: "KOSGEB / Sanayi ve Teknoloji Bakanlığı" };
  const gerekceler: string[] = [];
  const eksikAlanlar: string[] = [];

  if (g.sirketTuru !== undefined && g.sirketTuru !== "limited" && g.sirketTuru !== "anonim" && g.sirketTuru !== "diger_sermaye") {
    gerekceler.push("Bu program yalnızca Türkiye'de yerleşik sermaye şirketi statüsündeki KOBİ'lere açık.");
    return sonuc(meta.programId, meta.programAdi, meta.kurum, "uygun_degil", "Şirket türü uygun değil.", gerekceler);
  }
  if (g.sirketTuru === undefined) eksikAlanlar.push("şirket türü");

  const mali1 = g.yillikNetSatisHasilatiTl !== undefined || g.maliBilancoTl !== undefined
    ? Math.max(g.yillikNetSatisHasilatiTl ?? 0, g.maliBilancoTl ?? 0)
    : undefined;
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
    meta.programId, meta.programAdi, meta.kurum, "kismen_uygun",
    "Girilen bilgilere göre ön koşullar sağlanıyor; nihai kabul Bakanlık Değerlendirme Komitesi'nin kararına bağlıdır.",
    gerekceler,
    uyarilar1
  );
}

// --- 12) KOSGEB Küresel Rekabetçilik Destek Programı ---
// Kaynak: research/destek-uygunluk/kosgeb-kuresel-rekabetcilik.md — UE-38/01 (Rev. 07/03/2025),
// birincil kaynaktan doğrulandı, 2026-09-18. KOBİGEL'in devamı DEĞİL — 2025'te başlatılan
// ayrı/yeni bir kredi (faiz/kâr payı desteği) programı. Dört alternatif uygunluk yolundan
// biri sağlanmalı (MADDE 6). Kurul (≥50/100) + Jüri (nihai, itiraz edilemez) değerlendirmesi
// var, bu yüzden tavan "kismen_uygun".
export function kosgebKureselRekabetcilikDegerlendir(g: DestekBasvuruGirdisi): ProgramSonucuTaslak {
  const meta = { programId: "kosgeb-kuresel-rekabetcilik", programAdi: "KOSGEB Küresel Rekabetçilik Destek Programı", kurum: "KOSGEB" };
  const gerekceler: string[] = [];
  const eksikAlanlar: string[] = [];

  if (g.sirketTuru !== undefined && g.sirketTuru !== "limited" && g.sirketTuru !== "anonim") {
    gerekceler.push("Bu program yalnızca limited veya anonim şirketlere açık.");
    return sonuc(meta.programId, meta.programAdi, meta.kurum, "uygun_degil", "Şirket türü uygun değil.", gerekceler);
  }
  if (g.sirketTuru === undefined) eksikAlanlar.push("şirket türü");

  const mali2 = g.yillikNetSatisHasilatiTl !== undefined || g.maliBilancoTl !== undefined
    ? Math.max(g.yillikNetSatisHasilatiTl ?? 0, g.maliBilancoTl ?? 0)
    : undefined;
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

  if (g.kureselRekabetcilikKrediTutariTl !== undefined && (g.kureselRekabetcilikKrediTutariTl < 5_000_000 || g.kureselRekabetcilikKrediTutariTl > 50_000_000)) {
    gerekceler.push(`Talep edilen kredi tutarı (${g.kureselRekabetcilikKrediTutariTl.toLocaleString("tr-TR")} TL), programın kredi aralığının (5.000.000-50.000.000 TL) dışında kalıyor.`);
  }

  const uyarilar2 = [
    "Bu bir hibe değil, bankadan kullanılan ticari krediye faiz/kâr payı desteğidir (geri ödemesiz destek kısmı, anapara işletmeye geri ödemelidir); azami vade 36 ay, proje süresi 24 ay (+6 ay uzatılabilir).",
    "İşletme başına yıllık faiz/kâr payı desteği üst limiti 10.000.000 TL'dir.",
    "Değerlendirme iki aşamalı: Kurul 100 üzerinden puanlar (ortalama en az 50 olmalı), nihai kararı Jüri verir ve bu karara itiraz edilemez.",
    "Başvurular sürekli kabul ediliyor (dönem/tarih aralığı yok); güncel başvuru kılavuzu kosgeb.gov.tr'den teyit edilmelidir.",
  ];

  if (eksikAlanlar.length > 0) {
    return sonuc(
      meta.programId, meta.programAdi, meta.kurum, "belirsiz",
      "Girilen bilgilerle ön koşulların çoğu sağlanıyor, ancak bazı alanlar eksik.",
      gerekceler,
      [...uyarilar2, `Eksik bilgiler: ${eksikAlanlar.join(", ")}.`]
    );
  }

  return sonuc(
    meta.programId, meta.programAdi, meta.kurum, "kismen_uygun",
    "Girilen bilgilere göre ön koşullar sağlanıyor; nihai kabul Kurul puanlaması ve Jüri kararına bağlıdır.",
    gerekceler,
    uyarilar2
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

  const mali3 = g.yillikNetSatisHasilatiTl !== undefined || g.maliBilancoTl !== undefined
    ? Math.max(g.yillikNetSatisHasilatiTl ?? 0, g.maliBilancoTl ?? 0)
    : undefined;
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
  if (g.yondeHizmetTuru === undefined) eksikAlanlar.push("hangi YÖNDE hizmetinden (dijital dönüşüm yol haritası / sürdürülebilirlik raporlaması / YODA) yararlanmak istediğiniz");
  else gerekceler.push(`Talep edilen hizmet: ${YONDE_HIZMET_ETIKET[g.yondeHizmetTuru]}.`);

  gerekceler.push("KOBİ ölçeği ve imalat sektörü şartları sağlanıyor.");

  const uyarilar3 = [
    "Bu bir yatırım desteği değil, danışmanlık/analiz hizmeti desteğidir: %80 oranında, geri ödemesiz (hibe); toplam üst limit 280.000 TL (hizmet kalemlerine göre alt limitlere bölünür), süre 36 ay.",
    "Değerlendirme sürecinin (kurul/jüri mi, yoksa nesnel eşik kontrolü mü) tam detayı bu oturumda birincil kaynaktan teyit edilemedi — güvenlik payı olarak tavan 'kısmen uygun' tutuldu.",
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
    meta.programId, meta.programAdi, meta.kurum, "kismen_uygun",
    "Girilen bilgilere göre ön koşullar sağlanıyor.",
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
    meta.programId, meta.programAdi, meta.kurum, "kismen_uygun",
    "Girilen bilgilere göre Ar-Ge Merkezi statüsü için asgari şartları sağlıyor gibi görünüyorsunuz; nihai statü Bakanlığın belge incelemesi ve yerinde inceleme heyeti değerlendirmesine bağlıdır.",
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
    meta.programId, meta.programAdi, meta.kurum, "kismen_uygun",
    "Girilen bilgilere göre Tasarım Merkezi statüsü için asgari şartları sağlıyor gibi görünüyorsunuz; nihai statü Bakanlığın belge incelemesi ve yerinde inceleme heyeti değerlendirmesine bağlıdır.",
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
    "2026-1 çağrısı: hızlandırma 2 Mart 2026-31 Temmuz 2028, başvuru 15 Haziran-3 Temmuz 2026 — dönemsel çağrılarla ilerler, sürekli değildir; güncel çağrı takvimi tubitak.gov.tr'den teyit edilmelidir.",
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
      [...uyarilar6, `Eksik bilgiler: ${eksikAlanlar.join(", ")}.`]
    );
  }

  return sonuc(
    meta.programId, meta.programAdi, meta.kurum, "kismen_uygun",
    "Girilen bilgilere göre ön koşullar sağlanıyor; Ön Tohum Yatırım kararı TÜBİTAK'ın değerlendirme sürecine bağlıdır.",
    gerekceler,
    uyarilar6
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

  const mali7 = g.yillikNetSatisHasilatiTl !== undefined || g.maliBilancoTl !== undefined
    ? Math.max(g.yillikNetSatisHasilatiTl ?? 0, g.maliBilancoTl ?? 0)
    : undefined;
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
    gerekceler.push(`Proje bütçesi (${g.siparisArGeProjeButcesiTl.toLocaleString("tr-TR")} TL), programın üst limitini (10.000.000 TL) aşıyor.`);
  }

  const uyarilar7 = [
    "TÜBİTAK kabul edilen giderin %40'ını hibe olarak karşılar, Müşteri Kuruluş en az %40'ını finanse eder (kalan kısım KOBİ'ye ait olabilir) — bu, 1501/1507'de olmayan üçlü bir finansman modelidir.",
    "Azami proje bütçesi 10.000.000 TL, azami süre 24 aydır.",
    "Ar-Ge/yenilik niteliği nihai olarak hakem ve Grup Yürütme Kurulu (GYK) tarafından proje bazında değerlendirilir; bu araç bu değerlendirmeyi öngöremez.",
    "2026'da dönemsel çağrılarla açılıyor (2026-3 çağrısı 1 Eylül-13 Kasım 2026 aktif görünüyor); güncel çağrı takvimi tubitak.gov.tr'den teyit edilmelidir.",
  ];

  if (eksikAlanlar.length > 0) {
    return sonuc(
      meta.programId, meta.programAdi, meta.kurum, "belirsiz",
      "Girilen bilgilerle ön koşulların çoğu sağlanıyor, ancak bazı alanlar eksik.",
      gerekceler,
      [...uyarilar7, `Eksik bilgiler: ${eksikAlanlar.join(", ")}.`]
    );
  }

  return sonuc(
    meta.programId, meta.programAdi, meta.kurum, "kismen_uygun",
    "Girilen bilgilere göre ön koşullar sağlanıyor; nihai kabul hakem/GYK değerlendirmesine bağlıdır.",
    gerekceler,
    uyarilar7
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

  const mali8 = g.yillikNetSatisHasilatiTl !== undefined || g.maliBilancoTl !== undefined
    ? Math.max(g.yillikNetSatisHasilatiTl ?? 0, g.maliBilancoTl ?? 0)
    : undefined;
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
    meta.programId, meta.programAdi, meta.kurum, "kismen_uygun",
    "Girilen bilgilere göre ön koşullar sağlanıyor; nihai kabul panel puanlamasına bağlıdır.",
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
    meta.programId, meta.programAdi, meta.kurum, "kismen_uygun",
    "Girilen bilgilere göre Teknopark'a (TGB) aday olabilirsiniz; başvuru ilgili TGB'nin yönetici şirketine yapılır ve Proje Değerlendirme Komisyonu'nun kararına bağlıdır.",
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
  if (g.tekmerTemaUyumu === undefined) eksikAlanlar.push("iş fikrinizin TEKMER temalarından (enerji, savunma, ilaç/medikal, biyoteknoloji, yazılım/YZ vb.) biriyle örtüşüp örtüşmediği");
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
    meta.programId, meta.programAdi, meta.kurum, "kismen_uygun",
    "İş fikriniz ve erişiminiz uygun görünüyor; ilgili TEKMER'e kabul başvurusu yapmanız önerilir (nihai karar o TEKMER'in kendi kuruluna bağlıdır).",
    gerekceler,
    uyarilar
  );
}
