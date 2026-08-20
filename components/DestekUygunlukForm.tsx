"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import type { DestekBasvuruGirdisi, ProgramSonucu, SonucDurumu } from "@/lib/destek-uygunluk/types";
import { YATIRIM_TESVIK_ILLER } from "@/lib/destek-uygunluk/yardimcilar";

type Girdi = Record<string, string>;

const SIRKET_TURU_SECENEKLERI = [
  { value: "sahis", label: "Şahıs işletmesi" },
  { value: "limited", label: "Limited şirket" },
  { value: "anonim", label: "Anonim şirket" },
  { value: "diger_sermaye", label: "Diğer sermaye şirketi" },
  { value: "dernek_vakif_kooperatif_birlik_adi_ortaklik", label: "Dernek / Vakıf / Kooperatif / Birlik / Adi Ortaklık" },
];

const YATIRIM_TURU_SECENEKLERI = [
  { value: "komple_yeni", label: "Komple yeni yatırım" },
  { value: "tevsi", label: "Tevsi (kapasite artırımı)" },
  { value: "modernizasyon", label: "Modernizasyon" },
  { value: "urun_cesitlendirme", label: "Ürün çeşitlendirme" },
  { value: "entegrasyon", label: "Entegrasyon" },
  { value: "nakil", label: "Nakil" },
];

const HIZLI_BUYUME_MUAFIYET_SECENEKLERI = [
  { value: "yok", label: "Muafiyet yok — büyüme şartı üzerinden değerlendirilsin" },
  { value: "kosgeb_tubitak_arge_tamamlandi", label: "KOSGEB/TÜBİTAK destekli Ar-Ge projesi tamamlandı (son 5 yıl içinde)" },
  { value: "arge_merkezi_5746", label: "5746 sayılı Kanun kapsamında Ar-Ge Merkezi statüsü" },
  { value: "tur_belgesi", label: "Geçerli Teknolojik Ürün Deneyim (TÜR) belgesi" },
  { value: "tgb_faaliyet_4691", label: "Teknoloji Geliştirme Bölgesi'nde faaliyet (4691 sayılı Kanun)" },
  { value: "tekmer_faaliyet", label: "TEKMER'de faaliyet" },
  { value: "tedarikci_siparis_sozlesmesi", label: "Büyük işletmeyle tedarikçi geliştirme sipariş sözleşmesi" },
];

const PROJE_NITELIGI_SECENEKLERI = [
  { value: "yeni_urun", label: "Yeni ürün geliştirme" },
  { value: "mevcut_urun_gelistirme", label: "Mevcut ürünün geliştirilmesi/iyileştirilmesi" },
  { value: "uretim_teknolojisi_gelistirme", label: "Yeni üretim teknolojisi/tekniği geliştirme" },
  { value: "belirsiz", label: "Henüz netleşmedi" },
];

const ARGE_KAYNAGI_SECENEKLERI = [
  { value: "tamamen_kurulus_ici", label: "Tamamen kuruluş içinde yürütülüyor" },
  { value: "kismen_disaridan", label: "Kısmen dışarıdan hizmet alımı var" },
  { value: "buyuk_olcude_disaridan", label: "Büyük ölçüde dışarıdan yürütülüyor" },
];

const ONCELIKLI_GRUP_SECENEKLERI = [
  { value: "yok", label: "Yok" },
  { value: "kadin", label: "Kadın girişimci" },
  { value: "genc", label: "Genç girişimci (35 yaş altı)" },
  { value: "engelli", label: "Engelli girişimci" },
  { value: "gazi_sehit_yakini", label: "Gazi veya birinci derece şehit yakını" },
];

const DURUM_STIL: Record<SonucDurumu, { renk: string; etiket: string }> = {
  uygun: { renk: "border-green-300 bg-green-50 text-green-800", etiket: "Uygunsunuz" },
  kismen_uygun: { renk: "border-blue-300 bg-blue-50 text-blue-800", etiket: "Muhtemelen uygun — görüşme gerekli" },
  belirsiz: { renk: "border-amber-300 bg-amber-50 text-amber-800", etiket: "Belirsiz — bilgi eksik" },
  uygun_degil: { renk: "border-red-300 bg-red-50 text-red-800", etiket: "Uygun görünmüyor" },
};

export default function DestekUygunlukForm() {
  const [g, setG] = useState<Girdi>({});
  const [submitting, setSubmitting] = useState(false);
  const [sonuclar, setSonuclar] = useState<ProgramSonucu[] | null>(null);
  const [hata, setHata] = useState("");

  const set = (key: string, value: string) => setG((prev) => ({ ...prev, [key]: value }));

  const parseGirdi = (): DestekBasvuruGirdisi => {
    const num = (k: string) => (g[k] ? Number(g[k].replace(/[^0-9.-]/g, "")) : undefined);
    const bool = (k: string) => (g[k] === "" || g[k] === undefined ? undefined : g[k] === "evet");
    const arr3 = (k: string): [number, number, number] | undefined => {
      const a = num(`${k}_1`), b = num(`${k}_2`), c = num(`${k}_3`);
      return a !== undefined && b !== undefined && c !== undefined ? [a, b, c] : undefined;
    };

    return {
      sirketUnvani: g.sirketUnvani || undefined,
      sirketTuru: (g.sirketTuru as DestekBasvuruGirdisi["sirketTuru"]) || undefined,
      kurulusTarihi: g.kurulusTarihi || undefined,
      naceKodu: g.naceKodu || undefined,
      calisanSayisi: num("calisanSayisi"),
      yillikNetSatisHasilatiTl: num("yillikNetSatisHasilatiTl"),
      maliBilancoTl: num("maliBilancoTl"),
      turkiyedeYerlesikMi: bool("turkiyedeYerlesikMi"),

      kosgebVeriTabaniKayitliMi: bool("kosgebVeriTabaniKayitliMi"),
      ileriGirisimciEgitimiTamamlandiMi: bool("ileriGirisimciEgitimiTamamlandiMi"),
      ortaklikPayiYuzde: num("ortaklikPayiYuzde"),
      girisimciMunferitTemsilYetkisiVarMi: bool("girisimciMunferitTemsilYetkisiVarMi"),
      oncelikliGrup: (g.oncelikliGrup as DestekBasvuruGirdisi["oncelikliGrup"]) || undefined,
      isGelistirmeDestegiDahaOnceKullanildiMi: bool("isGelistirmeDestegiDahaOnceKullanildiMi"),

      kapasiteProgramiDahaOnceKullanildiMi: bool("kapasiteProgramiDahaOnceKullanildiMi"),
      sanayiSicilBelgesiVarMi: bool("sanayiSicilBelgesiVarMi"),
      yodaRaporuVarMi: bool("yodaRaporuVarMi"),
      hizliBuyumeMuafiyeti: (g.hizliBuyumeMuafiyeti as DestekBasvuruGirdisi["hizliBuyumeMuafiyeti"]) || undefined,
      son3YilCalisanSayilari: arr3("son3YilCalisan"),
      son3YilNetSatisTl: arr3("son3YilNetSatis"),
      talepEdilenKrediTutariTl: num("talepEdilenKrediTutariTl"),

      yatirimKonusuNaceKodu: g.yatirimKonusuNaceKodu || undefined,
      yatirimIli: g.yatirimIli || undefined,
      planlananSabitYatirimTutariTl: num("planlananSabitYatirimTutariTl"),
      yatirimTuru: (g.yatirimTuru as DestekBasvuruGirdisi["yatirimTuru"]) || undefined,
      dijitalVeyaYesilDonusumMu: bool("dijitalVeyaYesilDonusumMu"),
      mevcutTesisVarMi: bool("mevcutTesisVarMi"),

      projeKonusu: g.projeKonusu || undefined,
      projeNiteligi: (g.projeNiteligi as DestekBasvuruGirdisi["projeNiteligi"]) || undefined,
      uretimAltyapisiYatirimiAgirlikliMi: bool("uretimAltyapisiYatirimiAgirlikliMi"),
      projeEkibindeLisansMezunuVarMi: bool("projeEkibindeLisansMezunuVarMi"),
      argeFaaliyetiKaynagi: (g.argeFaaliyetiKaynagi as DestekBasvuruGirdisi["argeFaaliyetiKaynagi"]) || undefined,
      talepEdilenProjeButcesiTl: num("talepEdilenProjeButcesiTl"),

      teydebBekleyenProjeSayisi: num("teydebBekleyenProjeSayisi"),
      teydebOnayliProjeSayisi: num("teydebOnayliProjeSayisi"),
      ortakliBasvuruMu: bool("ortakliBasvuruMu"),
      teknogirisimSermayeSirketiMi: bool("teknogirisimSermayeSirketiMi"),

      iletisimAdSoyad: g.iletisimAdSoyad || undefined,
      iletisimEposta: g.iletisimEposta || undefined,
      iletisimTelefon: g.iletisimTelefon || undefined,
    };
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setHata("");
    setSubmitting(true);
    try {
      const res = await fetch("/api/destek-uygunluk", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parseGirdi()),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Analiz tamamlanamadı.");
      setSonuclar(data.sonuclar);
      window.scrollTo({ top: document.getElementById("sonuclar")?.offsetTop ?? 0, behavior: "smooth" });
    } catch (err) {
      setHata(err instanceof Error ? err.message : "Bir hata oluştu.");
    } finally {
      setSubmitting(false);
    }
  };

  if (sonuclar) {
    return (
      <div id="sonuclar" className="space-y-6">
        <div className="rounded-2xl border border-amber-300 bg-amber-50 p-5 text-sm text-amber-900">
          Bu sonuçlar, girdiğiniz bilgilere dayalı bir <strong>ön değerlendirmedir</strong> ve resmi başvuru
          sonucu ya da kesin uygunluk teyidi yerine geçmez. Mevzuat sık güncellenir; kesin sonuç için ilgili
          kurumun güncel şartları ve bir danışman değerlendirmesi gereklidir.
        </div>
        {sonuclar.map((s) => (
          <div key={s.programId} className={`rounded-2xl border p-6 shadow-sm ${DURUM_STIL[s.durum].renk}`}>
            <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
              <h3 className="text-lg font-bold text-[#071A2F]">{s.programAdi}</h3>
              <span className={`rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-wide ${DURUM_STIL[s.durum].renk}`}>
                {DURUM_STIL[s.durum].etiket}
              </span>
            </div>
            <p className="mb-3 text-sm text-gray-600">{s.kurum} — {s.ozet}</p>
            <ul className="mb-3 list-disc space-y-1 pl-5 text-sm text-gray-800">
              {s.gerekceler.map((gerekce, i) => <li key={i}>{gerekce}</li>)}
            </ul>
            {s.uyarilar && s.uyarilar.length > 0 && (
              <ul className="space-y-1 border-t border-black/10 pt-3 text-xs text-gray-600">
                {s.uyarilar.map((uyari, i) => <li key={i}>⚠ {uyari}</li>)}
              </ul>
            )}
          </div>
        ))}
        <div className="rounded-2xl border border-gray-200 bg-[#071A2F] p-8 text-center text-white shadow-lg">
          <p className="mb-4 text-lg font-semibold">Sonuçları birlikte değerlendirip başvuru sürecini konuşalım mı?</p>
          <Link href="/#contact" className="inline-block rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600">
            İletişime Geç
          </Link>
        </div>
        <button
          type="button"
          onClick={() => setSonuclar(null)}
          className="text-sm font-semibold text-orange-500 hover:underline"
        >
          ← Bilgileri düzenle
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-10">
      <Bolum baslik="1. Şirket Bilgileri" aciklama="Bu bilgiler tüm programların ön değerlendirmesinde kullanılır.">
        <div className="grid gap-5 sm:grid-cols-2">
          <Metin etiket="Şirket Unvanı" deger={g.sirketUnvani} onChange={(v) => set("sirketUnvani", v)} />
          <Secim etiket="Şirket Türü" deger={g.sirketTuru} onChange={(v) => set("sirketTuru", v)} secenekler={SIRKET_TURU_SECENEKLERI} />
          <Tarih etiket="Kuruluş Tarihi" deger={g.kurulusTarihi} onChange={(v) => set("kurulusTarihi", v)} />
          <Metin etiket="NACE Kodu (örn. 62.01)" deger={g.naceKodu} onChange={(v) => set("naceKodu", v)} placeholder="62.01" />
          <Sayi etiket="Çalışan Sayısı" deger={g.calisanSayisi} onChange={(v) => set("calisanSayisi", v)} />
          <Sayi etiket="Yıllık Net Satış Hasılatı (TL)" deger={g.yillikNetSatisHasilatiTl} onChange={(v) => set("yillikNetSatisHasilatiTl", v)} />
          <Sayi etiket="Mali Bilanço (TL, opsiyonel)" deger={g.maliBilancoTl} onChange={(v) => set("maliBilancoTl", v)} />
          <EvetHayir etiket="Türkiye'de yerleşik mi?" deger={g.turkiyedeYerlesikMi} onChange={(v) => set("turkiyedeYerlesikMi", v)} />
        </div>
      </Bolum>

      <Bolum baslik="2. KOSGEB İş Geliştirme Desteği" aciklama="Cevaplamazsanız bu program 'belirsiz' olarak işaretlenir.">
        <div className="grid gap-5 sm:grid-cols-2">
          <EvetHayir etiket="KOSGEB Veri Tabanı'na kayıtlı mı?" deger={g.kosgebVeriTabaniKayitliMi} onChange={(v) => set("kosgebVeriTabaniKayitliMi", v)} />
          <EvetHayir etiket="İleri girişimci eğitimi tamamlandı mı?" deger={g.ileriGirisimciEgitimiTamamlandiMi} onChange={(v) => set("ileriGirisimciEgitimiTamamlandiMi", v)} />
          <Sayi etiket="Girişimcinin ortaklık payı (%)" deger={g.ortaklikPayiYuzde} onChange={(v) => set("ortaklikPayiYuzde", v)} />
          <EvetHayir etiket="Girişimci münferit temsile yetkili mi?" deger={g.girisimciMunferitTemsilYetkisiVarMi} onChange={(v) => set("girisimciMunferitTemsilYetkisiVarMi", v)} />
          <Secim etiket="Öncelikli grup" deger={g.oncelikliGrup} onChange={(v) => set("oncelikliGrup", v)} secenekler={ONCELIKLI_GRUP_SECENEKLERI} />
          <EvetHayir etiket="Bu destek daha önce kullanıldı mı?" deger={g.isGelistirmeDestegiDahaOnceKullanildiMi} onChange={(v) => set("isGelistirmeDestegiDahaOnceKullanildiMi", v)} />
        </div>
      </Bolum>

      <Bolum baslik="3. KOSGEB Kapasite Geliştirme Destek Programı" aciklama="Son 3 yıla ait veriler 'hızlı büyüyen işletme' şartı için kullanılır.">
        <div className="grid gap-5 sm:grid-cols-2">
          <EvetHayir etiket="Bu program daha önce kullanıldı mı?" deger={g.kapasiteProgramiDahaOnceKullanildiMi} onChange={(v) => set("kapasiteProgramiDahaOnceKullanildiMi", v)} />
          <EvetHayir etiket="Sanayi Sicil Belgesi var mı? (imalat için)" deger={g.sanayiSicilBelgesiVarMi} onChange={(v) => set("sanayiSicilBelgesiVarMi", v)} />
          <EvetHayir etiket="YODA raporu var mı? (imalat için)" deger={g.yodaRaporuVarMi} onChange={(v) => set("yodaRaporuVarMi", v)} />
          <Secim etiket="Hızlı büyüme muafiyeti" deger={g.hizliBuyumeMuafiyeti} onChange={(v) => set("hizliBuyumeMuafiyeti", v)} secenekler={HIZLI_BUYUME_MUAFIYET_SECENEKLERI} />
          <Sayi etiket="Talep edilen kredi tutarı (TL)" deger={g.talepEdilenKrediTutariTl} onChange={(v) => set("talepEdilenKrediTutariTl", v)} />
        </div>
        <p className="mb-2 mt-5 text-sm font-semibold text-[#071A2F]">Son 3 yıl çalışan sayısı (muafiyetiniz yoksa doldurun)</p>
        <div className="mb-4 grid grid-cols-3 gap-3">
          <Sayi etiket="1. yıl" deger={g.son3YilCalisan_1} onChange={(v) => set("son3YilCalisan_1", v)} />
          <Sayi etiket="2. yıl" deger={g.son3YilCalisan_2} onChange={(v) => set("son3YilCalisan_2", v)} />
          <Sayi etiket="3. yıl (güncel)" deger={g.son3YilCalisan_3} onChange={(v) => set("son3YilCalisan_3", v)} />
        </div>
        <p className="mb-2 text-sm font-semibold text-[#071A2F]">Son 3 yıl net satış (TL)</p>
        <div className="grid grid-cols-3 gap-3">
          <Sayi etiket="1. yıl" deger={g.son3YilNetSatis_1} onChange={(v) => set("son3YilNetSatis_1", v)} />
          <Sayi etiket="2. yıl" deger={g.son3YilNetSatis_2} onChange={(v) => set("son3YilNetSatis_2", v)} />
          <Sayi etiket="3. yıl (güncel)" deger={g.son3YilNetSatis_3} onChange={(v) => set("son3YilNetSatis_3", v)} />
        </div>
      </Bolum>

      <Bolum baslik="4. Yatırım Teşvik Belgesi" aciklama="Yatırım konunuz, mevcut faaliyet NACE kodunuzdan farklı olabilir.">
        <div className="grid gap-5 sm:grid-cols-2">
          <Metin etiket="Yatırım Konusu NACE Kodu" deger={g.yatirimKonusuNaceKodu} onChange={(v) => set("yatirimKonusuNaceKodu", v)} placeholder="62.01" />
          <Secim etiket="Yatırım İli" deger={g.yatirimIli} onChange={(v) => set("yatirimIli", v)} secenekler={YATIRIM_TESVIK_ILLER.map((il) => ({ value: il, label: il }))} />
          <Sayi etiket="Planlanan Sabit Yatırım Tutarı (TL)" deger={g.planlananSabitYatirimTutariTl} onChange={(v) => set("planlananSabitYatirimTutariTl", v)} />
          <Secim etiket="Yatırım Türü" deger={g.yatirimTuru} onChange={(v) => set("yatirimTuru", v)} secenekler={YATIRIM_TURU_SECENEKLERI} />
          <EvetHayir etiket="Dijital veya Yeşil Dönüşüm Programı kapsamında mı?" deger={g.dijitalVeyaYesilDonusumMu} onChange={(v) => set("dijitalVeyaYesilDonusumMu", v)} />
          <EvetHayir etiket="Mevcut bir tesisiniz var mı?" deger={g.mevcutTesisVarMi} onChange={(v) => set("mevcutTesisVarMi", v)} />
        </div>
      </Bolum>

      <Bolum baslik="5. TÜBİTAK 1501 ve 1507 (Ar-Ge Destekleri)" aciklama="Ar-Ge niteliği nihai olarak TÜBİTAK hakem heyeti tarafından değerlendirilir; buradaki sorular yalnızca somut ret sinyallerini tarar.">
        <div className="grid gap-5 sm:grid-cols-2">
          <Secim etiket="Proje niteliği" deger={g.projeNiteligi} onChange={(v) => set("projeNiteligi", v)} secenekler={PROJE_NITELIGI_SECENEKLERI} />
          <EvetHayir etiket="Proje üretim/tesis yatırımı ağırlıklı mı?" deger={g.uretimAltyapisiYatirimiAgirlikliMi} onChange={(v) => set("uretimAltyapisiYatirimiAgirlikliMi", v)} />
          <EvetHayir etiket="Proje ekibinde ilgili alanda lisans mezunu var mı?" deger={g.projeEkibindeLisansMezunuVarMi} onChange={(v) => set("projeEkibindeLisansMezunuVarMi", v)} />
          <Secim etiket="Ar-Ge faaliyeti nasıl yürütülüyor?" deger={g.argeFaaliyetiKaynagi} onChange={(v) => set("argeFaaliyetiKaynagi", v)} secenekler={ARGE_KAYNAGI_SECENEKLERI} />
          <Sayi etiket="Talep edilecek proje bütçesi (TL, opsiyonel)" deger={g.talepEdilenProjeButcesiTl} onChange={(v) => set("talepEdilenProjeButcesiTl", v)} />
        </div>
        <p className="mb-2 mt-5 text-sm font-semibold text-[#071A2F]">Yalnızca TÜBİTAK 1507 için</p>
        <div className="grid gap-5 sm:grid-cols-2">
          <Sayi etiket="TEYDEB'de hâlen bekleyen (değerlendirmede) proje sayısı" deger={g.teydebBekleyenProjeSayisi} onChange={(v) => set("teydebBekleyenProjeSayisi", v)} />
          <Sayi etiket="TEYDEB'de destek kararı verilmiş (onaylı) proje sayısı" deger={g.teydebOnayliProjeSayisi} onChange={(v) => set("teydebOnayliProjeSayisi", v)} />
          <EvetHayir etiket="Ortaklı bir başvuru mu?" deger={g.ortakliBasvuruMu} onChange={(v) => set("ortakliBasvuruMu", v)} />
          <EvetHayir etiket="Teknogirişim sermaye şirketi mi?" deger={g.teknogirisimSermayeSirketiMi} onChange={(v) => set("teknogirisimSermayeSirketiMi", v)} />
        </div>
      </Bolum>

      <Bolum baslik="6. İletişim Bilgileri" aciklama="Sonuçları görebilmek ve gerekirse detaylı değerlendirme için sizinle iletişime geçebilmemiz için gereklidir.">
        <div className="grid gap-5 sm:grid-cols-2">
          <Metin etiket="Ad Soyad" deger={g.iletisimAdSoyad} onChange={(v) => set("iletisimAdSoyad", v)} zorunlu />
          <Metin etiket="E-posta" tip="email" deger={g.iletisimEposta} onChange={(v) => set("iletisimEposta", v)} zorunlu />
          <Metin etiket="Telefon" tip="tel" deger={g.iletisimTelefon} onChange={(v) => set("iletisimTelefon", v)} />
        </div>
      </Bolum>

      {hata && <p role="alert" className="rounded-lg bg-red-50 p-3 text-sm text-red-700">{hata}</p>}

      <button
        type="submit"
        disabled={submitting}
        className="w-full rounded-xl bg-orange-500 px-6 py-4 text-lg font-semibold text-white transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {submitting ? "Analiz ediliyor…" : "Uygunluk Analizini Görüntüle"}
      </button>
    </form>
  );
}

function Bolum({ baslik, aciklama, children }: { baslik: string; aciklama?: string; children: React.ReactNode }) {
  return (
    <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
      <h2 className="text-xl font-bold text-[#071A2F]">{baslik}</h2>
      {aciklama && <p className="mb-5 mt-1 text-sm text-gray-500">{aciklama}</p>}
      <div className={aciklama ? "" : "mt-5"}>{children}</div>
    </section>
  );
}

function Etiket({ children, zorunlu }: { children: React.ReactNode; zorunlu?: boolean }) {
  return (
    <span className="mb-2 block text-sm font-semibold text-[#071A2F]">
      {children}
      {zorunlu && <span className="text-orange-500"> *</span>}
    </span>
  );
}

const girdiSinifi = "w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-200";

function Metin({ etiket, deger, onChange, tip = "text", placeholder, zorunlu }: { etiket: string; deger?: string; onChange: (v: string) => void; tip?: string; placeholder?: string; zorunlu?: boolean }) {
  return (
    <label className="block">
      <Etiket zorunlu={zorunlu}>{etiket}</Etiket>
      <input type={tip} value={deger ?? ""} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} required={zorunlu} className={girdiSinifi} />
    </label>
  );
}

function Sayi({ etiket, deger, onChange }: { etiket: string; deger?: string; onChange: (v: string) => void }) {
  return (
    <label className="block">
      <Etiket>{etiket}</Etiket>
      <input type="number" value={deger ?? ""} onChange={(e) => onChange(e.target.value)} className={girdiSinifi} />
    </label>
  );
}

function Tarih({ etiket, deger, onChange }: { etiket: string; deger?: string; onChange: (v: string) => void }) {
  return (
    <label className="block">
      <Etiket>{etiket}</Etiket>
      <input type="date" value={deger ?? ""} onChange={(e) => onChange(e.target.value)} className={girdiSinifi} />
    </label>
  );
}

function Secim({ etiket, deger, onChange, secenekler }: { etiket: string; deger?: string; onChange: (v: string) => void; secenekler: { value: string; label: string }[] }) {
  return (
    <label className="block">
      <Etiket>{etiket}</Etiket>
      <select value={deger ?? ""} onChange={(e) => onChange(e.target.value)} className={girdiSinifi}>
        <option value="">Seçiniz</option>
        {secenekler.map((s) => <option key={s.value} value={s.value}>{s.label}</option>)}
      </select>
    </label>
  );
}

function EvetHayir({ etiket, deger, onChange }: { etiket: string; deger?: string; onChange: (v: string) => void }) {
  return (
    <label className="block">
      <Etiket>{etiket}</Etiket>
      <select value={deger ?? ""} onChange={(e) => onChange(e.target.value)} className={girdiSinifi}>
        <option value="">Bilmiyorum / atla</option>
        <option value="evet">Evet</option>
        <option value="hayir">Hayır</option>
      </select>
    </label>
  );
}
