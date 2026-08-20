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
export function kosgebArgeUrgeInovasyonDegerlendir(g: DestekBasvuruGirdisi): ProgramSonucu {
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
    if (olcek === null) eksikAlanlar.push("çalışan sayısı / yıllık ciro-bilanço (KOBİ ölçeği için)");
  }

  gerekceler.push("Henüz şirketi olmayan, bir iş fikrine dayalı 'Yeni Girişimci' olarak (ömür boyu en fazla 1 defa) ya da kurulu bir KOBİ olarak (Ar-Ge/İnovasyon projesinde sınırsız, Ür-Ge projesinde en fazla 3 kez) başvurulabilir; aynı anda yalnızca 1 proje desteklenir.");
  gerekceler.push("Ar-Ge Merkezi statüsünün aksine asgari personel sayısı, teknopark kaydı veya ciro şartı aranmaz; toplam destek üst limiti 900.000 TL'ye kadardır (gider kalemine göre %75-%100 oranında, makine-teçhizatta kısmen geri ödemeli).");

  const uyarilar = [
    "Ür-Ge (Ürün Geliştirme) kapsamı yalnızca KOSGEB'in desteklediği sektörlerdeki KOBİ'lere açıktır ve ürünün daha önce desteklenmiş bir Ar-Ge/yenilik projesi, patent, doktora çalışması veya TÜR Deneyim Belgesi gibi bir kaynaktan doğmuş olması gerekir — Ar-Ge/İnovasyon kapsamında bu şart aranmaz.",
    "Aynı gider kalemi için Yatırım Teşvik Belgesi gibi başka bir kurumdan eşzamanlı destek alınamaz.",
    "Başvurular KOBİ Bilgi Sistemi (KBS) üzerinden yılın herhangi bir tarihinde yapılabilir; nihai kabul Değerlendirme ve Karar Kurulu'na aittir.",
  ];

  if (eksikAlanlar.length > 0) {
    return sonuc(
      meta.programId, meta.programAdi, meta.kurum, "belirsiz",
      "Girilen bilgilerle ön koşulların çoğu sağlanıyor, ancak bazı alanlar eksik.",
      gerekceler,
      [...uyarilar, `Eksik bilgiler: ${eksikAlanlar.join(", ")}.`]
    );
  }

  return sonuc(meta.programId, meta.programAdi, meta.kurum, "uygun", "Girilen bilgilere göre ön koşullar sağlanıyor.", gerekceler, uyarilar);
}

// --- 7) Ticaret Bakanlığı İhracat Destekleri (5973 / 10962 sayılı Kararlar) ---
// Kaynak: research/destek-uygunluk/ticaret-bakanligi-ihracat-destekleri.md (blog: ticaret-bakanligi-ihracat-destekleri-2026)
// Kapsam çok geniş (10'un üzerinde alt destek kalemi) olduğundan bu değerlendirme
// hiçbir zaman kesin "uygun" döndürmez — hangi Karar'a ve hangi alt kaleme
// girdiğinizi belirleyen bir ön yönlendirmedir.
export function ticaretBakanligiIhracatDesteklerDegerlendir(g: DestekBasvuruGirdisi): ProgramSonucu {
  const meta = { programId: "ticaret-bakanligi-ihracat-destekleri", programAdi: "Ticaret Bakanlığı İhracat Destekleri", kurum: "Ticaret Bakanlığı" };
  const gerekceler: string[] = [];
  const eksikAlanlar: string[] = [];
  const uyarilar = [
    "Bu program onlarca alt destek kalemini (Pazara Giriş Belgesi, Marka Tescili, Fuar, Birim Kira, Tanıtım, E-İhracat, Hizmet Sektörleri Atılım Programı vb.) kapsar; hangi kalemin size uygun olduğu ihracat türünüze ve faaliyetinize göre ayrıca değerlendirilmelidir.",
    "Üst limitler her yıl (TÜFE+Yİ-ÜFE)/2 oranında güncellenir; kesin tutarlar başvuru döneminde Destek Yönetim Sistemi (DYS) üzerinden teyit edilmelidir.",
  ];

  if (g.ihracatTuru === undefined) eksikAlanlar.push("ihracat türü (fiziksel mal / hizmet)");
  else if (g.ihracatTuru === "fiziksel_mal") {
    gerekceler.push("Fiziksel mal ihracatı belirtilmiş — 5973 sayılı İhracat Destekleri Hakkında Karar kapsamındaki Pazara Giriş Belgesi, Marka Tescili, Fuar, Birim Kira, Tanıtım, Küresel Tedarik Zinciri ve E-İhracat destekleri (5986 sayılı Karar) değerlendirmeye alınabilir.");
  } else if (g.ihracatTuru === "hizmet") {
    gerekceler.push("Hizmet ihracatı (yazılım/bilişim, danışmanlık, sağlık turizmi, eğitim vb.) belirtilmiş — 1 Ocak 2026'dan itibaren geçerli 10962 sayılı 'Hizmet İhracatının Tanımlanması, Sınıflandırılması ve Hizmet Sektörlerinin Desteklenmesi Hakkında Karar' kapsamındaki Hizmet Sektörleri Atılım Programı ve Markalaşma Programı değerlendirmeye alınabilir.");
  } else {
    gerekceler.push("Hem fiziksel mal hem hizmet ihracatı belirtilmiş — gelir kalemleri kendi niteliğine göre ayrı ayrı, sırasıyla 5973 ve 10962 sayılı Kararlar kapsamında değerlendirilmelidir.");
  }

  if (g.ihracatciBirligiUyesiMi === false) {
    gerekceler.push("İlgili İhracatçı Birliği'ne üyelik, bu destek grubunun neredeyse tamamı için ön koşuldur ve henüz sağlanmamış.");
    return sonuc(meta.programId, meta.programAdi, meta.kurum, "belirsiz", "İhracatçı Birliği üyeliği eksik.", gerekceler, uyarilar);
  }
  if (g.ihracatciBirligiUyesiMi === undefined) eksikAlanlar.push("İhracatçı Birliği üyeliği durumu");

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
export function tubitak1832Degerlendir(g: DestekBasvuruGirdisi): ProgramSonucu {
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

  const retSinyali = argeRetSinyalleriVarMi(g);
  if (retSinyali) {
    gerekceler.push(retSinyali);
    return sonuc(meta.programId, meta.programAdi, meta.kurum, "uygun_degil", "Ön değerlendirmede ret riski yüksek somut bir sinyal var.", gerekceler);
  }

  const oncelikliAlanNotu = oncelikliAlanGerekcesi(g.argeOncelikliAlanKategorisi);
  if (oncelikliAlanNotu) gerekceler.push(oncelikliAlanNotu);

  gerekceler.push("Kuruluş türü, Türkiye'de yerleşiklik ve yeşil dönüşüm hedefi şartları sağlanıyor, somut bir ret sinyali görülmedi.");

  const uyarilar = [
    "Program, Teknoloji Hazırlık Seviyesi (TRL) 3-9 arası, ticarileştirme hedefli teknoloji doğrulama/geliştirme projelerine odaklıdır; nihai Ar-Ge niteliği hakem değerlendirmesine tabidir.",
    "Bu program dönemsel çağrılarla açılır (Dünya Bankası destekli Türkiye Yeşil Sanayi Projesi kapsamında); güncel çağrı takvimi ve bütçe üst limiti TÜBİTAK TEYDEB üzerinden teyit edilmelidir.",
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
export function kosgebDijitalYesilDonusumDegerlendir(g: DestekBasvuruGirdisi): ProgramSonucu {
  const meta = { programId: "kosgeb-dijital-yesil-donusum", programAdi: "KOSGEB Dijital ve Yeşil Dönüşüm Destek Programı", kurum: "KOSGEB" };
  const gerekceler: string[] = [];
  const eksikAlanlar: string[] = [];

  if (g.sirketTuru !== undefined && g.sirketTuru !== "limited" && g.sirketTuru !== "anonim" && g.sirketTuru !== "diger_sermaye") {
    gerekceler.push("Bu program yalnızca sermaye şirketi statüsündeki KOBİ'lere açık.");
    return sonuc(meta.programId, meta.programAdi, meta.kurum, "uygun_degil", "Şirket türü uygun değil.", gerekceler);
  }
  if (g.sirketTuru === undefined) eksikAlanlar.push("şirket türü");

  const mali = g.yillikNetSatisHasilatiTl !== undefined || g.maliBilancoTl !== undefined
    ? Math.max(g.yillikNetSatisHasilatiTl ?? 0, g.maliBilancoTl ?? 0)
    : undefined;
  const olcek = kobiOlceguHesapla(g.calisanSayisi, mali);
  if (olcek === "kobi_disi") {
    gerekceler.push("Bu program yalnızca KOBİ ölçeğindeki işletmelere açık.");
    return sonuc(meta.programId, meta.programAdi, meta.kurum, "uygun_degil", "KOBİ ölçek şartı sağlanmıyor.", gerekceler);
  }
  if (olcek === null) eksikAlanlar.push("çalışan sayısı / yıllık ciro-bilanço");

  if (g.ddxRaporuVarMi === false) {
    gerekceler.push("Başvurunun ön şartı olan Dijital Değişim/Dönüşüm (DDX) raporu henüz alınmamış.");
    return sonuc(meta.programId, meta.programAdi, meta.kurum, "uygun_degil", "DDX raporu eksik.", gerekceler);
  }
  if (g.ddxRaporuVarMi === undefined) eksikAlanlar.push("DDX (Dijital Değişim/Dönüşüm) raporu durumu");

  if (g.maliKarneVarMi === false) {
    gerekceler.push("Başvurunun ön şartı olan güncel Mali Karne henüz alınmamış.");
    return sonuc(meta.programId, meta.programAdi, meta.kurum, "uygun_degil", "Mali Karne eksik.", gerekceler);
  }
  if (g.maliKarneVarMi === undefined) eksikAlanlar.push("Mali Karne durumu");

  gerekceler.push("Şirket türü ve KOBİ ölçeği şartları sağlanıyor; program hem Dijital Dönüşüm (süreç/teknoloji entegrasyonu) hem Yeşil Dönüşüm (kaynak verimliliği, düşük karbonlu üretim, döngüsel ekonomi) yatırımlarını aynı çatı altında destekliyor.");

  const uyarilar = [
    "İşletme başına destek üst limiti 20.000.000 TL'ye kadar olup büyük kısmı geri ödemeli (kredi faiz/kâr payı desteği) niteliktedir; hibe oranı kalem bazında değişir.",
    "24 aylık uygulama süresi ve 36 aya varan vade söz konusudur; kesin oran ve limitler başvuru anında KOSGEB'in güncel Yönergesiyle teyit edilmelidir.",
  ];

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

// --- 10) TKDK - IPARD III Kırsal Kalkınma Destekleri ---
// Kaynak: research/destek-uygunluk/tkdk-ipard.md
export function tkdkDegerlendir(g: DestekBasvuruGirdisi): ProgramSonucu {
  const meta = { programId: "tkdk-ipard", programAdi: "TKDK IPARD III Kırsal Kalkınma Destekleri", kurum: "Tarım ve Kırsal Kalkınmayı Destekleme Kurumu (TKDK)" };
  const gerekceler: string[] = [];
  const eksikAlanlar: string[] = [];
  const uyarilar = [
    "TKDK hibeleri yalnızca Kurum tarafından ilan edilen çağrı dönemlerinde, belirlenen desteklenen illerde ve sektörlerde açılır; güncel çağrı takvimi ve il/sektör listesi tkdk.gov.tr üzerinden teyit edilmelidir.",
    "Proje bütçesi kabul edilebilirlik alt-üst sınırları çağrı dönemine ve tedbire göre değişebilir; 2026 çağrı döneminde genel aralık yaklaşık 5.000-3.000.000 Euro olarak görülüyor.",
  ];

  if (g.basvuranYasi !== undefined && (g.basvuranYasi < 18 || g.basvuranYasi > 65)) {
    gerekceler.push(`Gerçek kişi başvurularında yaş 18-65 aralığında olmalı — girilen yaş (${g.basvuranYasi}) bu aralığın dışında (tüzel kişilik başvurularında bu şart aranmaz).`);
    return sonuc(meta.programId, meta.programAdi, meta.kurum, "belirsiz", "Yaş şartı gerçek kişi başvurusu için sağlanmıyor.", gerekceler, uyarilar);
  }
  if (g.basvuranYasi === undefined) eksikAlanlar.push("başvuranın yaşı (gerçek kişi başvurusuysa)");

  if (g.tkdkDesteklenenIldeMi === false) {
    gerekceler.push("Yatırımın yapılacağı il, TKDK'nın o çağrı dönemi için belirlediği desteklenen iller arasında değil.");
    return sonuc(meta.programId, meta.programAdi, meta.kurum, "uygun_degil", "İl kapsam dışı.", gerekceler, uyarilar);
  }
  if (g.tkdkDesteklenenIldeMi === undefined) eksikAlanlar.push("yatırım ilinin TKDK destekli iller arasında olup olmadığı");

  if (g.tkdkSektoru === undefined) eksikAlanlar.push("yatırım sektörü (hayvancılık / tarımsal üretim / gıda işleme / yenilenebilir enerji / kırsal turizm)");
  else if (g.tkdkSektoru === "diger") {
    gerekceler.push("Belirtilen sektör, TKDK'nın güncel olarak desteklediği ana alanların (hayvancılık, tarımsal üretim, gıda işleme, yenilenebilir enerji/GES, kırsal turizm) dışında görünüyor.");
  } else {
    gerekceler.push(`Belirtilen sektör (${g.tkdkSektoru}), TKDK'nın güncel destek kapsamındaki ana alanlardan biriyle örtüşüyor.`);
  }

  if (g.planlananProjeButcesiEuro !== undefined && (g.planlananProjeButcesiEuro < 5_000 || g.planlananProjeButcesiEuro > 3_000_000)) {
    gerekceler.push(`Planlanan proje bütçesi (${g.planlananProjeButcesiEuro.toLocaleString("tr-TR")} Euro), 2026 çağrı döneminde görülen genel aralığın (5.000-3.000.000 Euro) dışında kalıyor.`);
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
