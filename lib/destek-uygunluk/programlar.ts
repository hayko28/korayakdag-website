import { DestekBasvuruGirdisi, ProgramSonucu, SonucDurumu } from "./types";
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
): ProgramSonucu {
  return { programId, programAdi, kurum, durum, ozet, gerekceler, uyarilar };
}

// --- 1) KOSGEB İş Geliştirme Desteği (Girişimci Destek Programı) ---
// Kaynak: research/destek-uygunluk/kosgeb-is-gelistirme.md (UE-35/10)
export function kosgebIsGelistirmeDegerlendir(g: DestekBasvuruGirdisi): ProgramSonucu {
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

  if (g.isGelistirmeDestegiDahaOnceKullanildiMi === true) {
    gerekceler.push("Girişimci Destek Programı kapsamındaki desteklerden (İş Geliştirme dahil) bir kez faydalanılabiliyor — bu hak daha önce kullanılmış.");
    return sonuc(meta.programId, meta.programAdi, meta.kurum, "uygun_degil", "Destek hakkı daha önce kullanılmış.", gerekceler);
  }
  if (g.isGelistirmeDestegiDahaOnceKullanildiMi === undefined) eksikAlanlar.push("daha önce yararlanma durumu");

  if (g.kosgebVeriTabaniKayitliMi === false) eksikAlanlar.push("KOSGEB Veri Tabanı kaydı henüz yok (başvuru öncesi tamamlanmalı)");

  gerekceler.push("İşletme yaşı, NACE sektörü, ileri girişimci eğitimi, ortaklık payı ve tekrar başvuru şartlarının hepsi sağlanıyor.");

  if (eksikAlanlar.length > 0) {
    return sonuc(
      meta.programId, meta.programAdi, meta.kurum, "belirsiz",
      "Girilen bilgilerle ön koşulların çoğu sağlanıyor, ancak bazı alanlar eksik.",
      gerekceler,
      [`Eksik bilgiler: ${eksikAlanlar.join(", ")}.`]
    );
  }

  return sonuc(meta.programId, meta.programAdi, meta.kurum, "uygun", "Girilen bilgilere göre ön koşulların tamamı sağlanıyor.", gerekceler, [
    "Nihai onay KOSGEB'in başvuru anındaki değerlendirmesine tabidir; bu bir ön analizdir.",
  ]);
}

// --- 2) KOSGEB Kapasite Geliştirme Destek Programı ---
// Kaynak: research/destek-uygunluk/kosgeb-kapasite-gelistirme.md (UE-37/08)
export function kosgebKapasiteGelistirmeDegerlendir(g: DestekBasvuruGirdisi): ProgramSonucu {
  const meta = {
    programId: "kosgeb-kapasite-gelistirme",
    programAdi: "KOSGEB Kapasite Geliştirme Destek Programı",
    kurum: "KOSGEB",
  };
  const gerekceler: string[] = [];
  const eksikAlanlar: string[] = [];

  if (g.sirketTuru !== undefined && g.sirketTuru !== "limited" && g.sirketTuru !== "anonim") {
    gerekceler.push("Bu program yalnızca limited veya anonim şirketlere açık — şahıs işletmeleri başvuramaz.");
    return sonuc(meta.programId, meta.programAdi, meta.kurum, "uygun_degil", "Şirket türü uygun değil.", gerekceler);
  }
  if (g.sirketTuru === undefined) eksikAlanlar.push("şirket türü");

  const mali = g.yillikNetSatisHasilatiTl !== undefined || g.maliBilancoTl !== undefined
    ? Math.max(g.yillikNetSatisHasilatiTl ?? 0, g.maliBilancoTl ?? 0)
    : undefined;
  const olcek = kobiOlceguHesapla(g.calisanSayisi, mali);
  if (olcek === "mikro" || olcek === "kobi_disi") {
    gerekceler.push(`İşletme ölçeği "${olcek}" — bu program yalnızca küçük veya orta büyüklükteki işletmelere açık (mikro işletmeler ve büyük ölçekli firmalar başvuramaz).`);
    return sonuc(meta.programId, meta.programAdi, meta.kurum, "uygun_degil", "KOBİ ölçek şartı sağlanmıyor.", gerekceler);
  }
  if (olcek === null) eksikAlanlar.push("çalışan sayısı / yıllık ciro-bilanço");

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
    "Bu program hibe değil, banka kredisinin faiz/kâr payı giderine destektir (anapara işletmeye geri ödemelidir).",
    "Uygulama Esasları sık güncelleniyor; başvuru anında KOSGEB'in güncel metniyle teyit edilmelidir.",
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

  return sonuc(meta.programId, meta.programAdi, meta.kurum, "uygun", "Girilen bilgilere göre ön koşulların tamamı sağlanıyor.", gerekceler, uyarilar);
}

// --- 3) Yatırım Teşvik Belgesi ---
// Kaynak: research/destek-uygunluk/yatirim-tesvik-belgesi.md (9903 sayılı Karar + Tebliğ 2025/1)
// Karmaşıklığı nedeniyle bu değerlendirme HİÇBİR ZAMAN kesin "uygun" döndürmez,
// en fazla "kismen_uygun" (ön kategori tahmini) verir.
export function yatirimTesvikBelgesiDegerlendir(g: DestekBasvuruGirdisi): ProgramSonucu {
  const meta = { programId: "yatirim-tesvik-belgesi", programAdi: "Yatırım Teşvik Belgesi", kurum: "Sanayi ve Teknoloji Bakanlığı" };
  const gerekceler: string[] = [];
  const eksikAlanlar: string[] = [];
  const uyarilar = [
    "Bu sonuç yalnızca bir ön kategori tahminidir; EK-3'teki satır bazlı özel şartlar (asgari kapasite, m², oda sayısı vb.) yatırımınızın tam tanımına göre ayrıca kontrol edilmelidir.",
    "Kesin başvuru E-TUYS üzerinden yapılır ve mutlaka bir teşvik danışmanı/YMM ile teyit edilmelidir.",
  ];

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

function argeRetSinyalleriVarMi(g: DestekBasvuruGirdisi): string | null {
  if (g.uretimAltyapisiYatirimiAgirlikliMi === true) {
    return "Proje, üretim/üretim altyapısına yönelik yatırım ağırlıklı (tesis-tezgah alımı) olarak işaretlenmiş — bu tür projeler Ar-Ge içeriği taşımadığı gerekçesiyle doğrudan reddedilebilir.";
  }
  if (g.projeEkibindeLisansMezunuVarMi === false) {
    return "Proje ekibinde konuyla ilgili en az lisans derecesine sahip personel bulunmadığı belirtilmiş — bu, ön değerlendirmede doğrudan ret sebebi olabilir.";
  }
  if (g.argeFaaliyetiKaynagi === "buyuk_olcude_disaridan") {
    return "Ar-Ge faaliyetinin büyük ölçüde dışarıdan hizmet alımıyla yapıldığı belirtilmiş — kuruluşun kendi Ar-Ge katkısının yetersiz görülme riski var.";
  }
  return null;
}

// --- 4) TÜBİTAK 1501 - Sanayi Ar-Ge Projeleri Destekleme Programı ---
// Kaynak: research/destek-uygunluk/tubitak-1501.md
export function tubitak1501Degerlendir(g: DestekBasvuruGirdisi): ProgramSonucu {
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
  if (g.uretimAltyapisiYatirimiAgirlikliMi === undefined) eksikAlanlar.push("proje niteliği (üretim yatırımı ağırlıklı mı)");

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
export function tubitak1507Degerlendir(g: DestekBasvuruGirdisi): ProgramSonucu {
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
  if (olcek === null) eksikAlanlar.push("çalışan sayısı / yıllık ciro-bilanço");

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
