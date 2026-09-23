"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import type { DestekBasvuruGirdisi, KatalogEslesme, ProgramSonucu, SonucDurumu } from "@/lib/destek-uygunluk/types";
import { YATIRIM_TESVIK_ILLER, ilinBolgesi, yatirimAsgariTutarTl } from "@/lib/destek-uygunluk/yardimcilar";
import { naceAciklamaBul } from "@/lib/destek-uygunluk/nace-lookup";
import { HIZMET_HEDEF_SECENEKLERI, programaBagliHizmetleriBul, type HizmetOnerisi } from "@/lib/destek-uygunluk/hizmet-onerileri";

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

// 11/05/2026 Yönerge güncellemesiyle sadece bu iki istisna kaldı (eskiden 6 kategori vardı).
const HIZLI_BUYUME_MUAFIYET_SECENEKLERI = [
  { value: "yok", label: "Muafiyet yok — büyüme şartı üzerinden değerlendirilsin" },
  { value: "teknogirisim_rozeti", label: "Teknogirişim Rozeti sahibiyim" },
  { value: "tedarikci_gelistirme_isbirligi", label: "Tedarikçi geliştirmeye yönelik belirlenen sektörlerde iş birliği" },
];

const PROJE_NITELIGI_SECENEKLERI = [
  { value: "yeni_urun", label: "Yeni ürün geliştirme" },
  { value: "mevcut_urun_gelistirme", label: "Mevcut ürünün geliştirilmesi/iyileştirilmesi" },
  { value: "uretim_teknolojisi_gelistirme", label: "Yeni üretim teknolojisi/tekniği geliştirme" },
  { value: "belirsiz", label: "Henüz netleşmedi" },
];

// 1501 MADDE 10/2-13, 1507 MADDE 9/2-12 (2026 Uygulama Esasları, birincil kaynaktan
// doğrulandı): makine/teçhizat/tesis alımının projedeki rolüne göre üç farklı sonuç var,
// tek bir "yatırım ağırlıklı mı?" evet/hayır sorusu bunu ayırt edemediği için değiştirildi.
const URETIM_YATIRIM_NITELIGI_SECENEKLERI = [
  { value: "yok", label: "Projede makine/teçhizat/tesis alımı yok" },
  { value: "arge_hizmetinde", label: "Alımlar doğrudan Ar-Ge'ye hizmet ediyor (tasarım, prototip, pilot tesis, test/ölçüm cihazı)" },
  { value: "seri_uretimde_de_kullanilacak", label: "Ar-Ge sonrası seri üretimde de kullanılacak zorunlu ekipman/kalıp" },
  { value: "esas_amac_uretim_kapasitesi", label: "Projenin esas amacı üretim kapasitesi kurmak, Ar-Ge içeriği yok/zayıf" },
];

const ARGE_KAYNAGI_SECENEKLERI = [
  { value: "tamamen_kurulus_ici", label: "Tamamen kuruluş içinde yürütülüyor" },
  { value: "kismen_disaridan", label: "Kısmen dışarıdan hizmet alımı var" },
  { value: "buyuk_olcude_disaridan", label: "Büyük ölçüde dışarıdan yürütülüyor" },
];

const ARGE_ONCELIKLI_ALAN_SECENEKLERI = [
  { value: "emin_degil", label: "Emin değilim / atla" },
  { value: "endustride_teknolojik_sicrama", label: "Endüstride Teknolojik Sıçrama (batarya, ileri malzeme, robotik, yarı iletken, medikal teknolojiler vb.)" },
  { value: "dijital_liderlik", label: "Dijital Liderlik (yapay zeka, siber güvenlik, kuantum, yeni nesil haberleşme vb.)" },
  { value: "yesil_donusum", label: "Yeşil Dönüşüm (temiz enerji, yeşil hidrojen, karbon yakalama, sektörel yeşil teknolojiler vb.)" },
  { value: "kapsam_disi", label: "Bu kategorilerin hiçbirine girmiyor" },
];

const IHRACAT_TURU_SECENEKLERI = [
  { value: "fiziksel_mal", label: "Fiziksel mal / ürün ihracatı" },
  { value: "hizmet", label: "Hizmet ihracatı (yazılım, danışmanlık, sağlık turizmi, eğitim vb.)" },
  { value: "her_ikisi", label: "Her ikisi" },
];

// IPARD III'ün resmi tedbir yapısı (tkdk.gov.tr, birincil kaynaktan doğrulandı, 2026-09-17).
const TKDK_SEKTOR_SECENEKLERI = [
  { value: "m1_fiziki_varlik", label: "M1 - Tarımsal İşletmelerin Fiziki Varlıkları" },
  { value: "m3_isleme_pazarlama", label: "M3 - Tarım-Balıkçılık Ürünlerinin İşlenmesi ve Pazarlanması" },
  { value: "m4_cevre_iklim", label: "M4 - Tarım-Çevre-İklim ve Organik Tarım" },
  { value: "m5_leader", label: "M5 - LEADER Yerel Kalkınma" },
  { value: "m7_cesitlendirme", label: "M7 - Çiftlik Faaliyetlerinin Çeşitlendirilmesi (kırsal turizm, yenilenebilir enerji vb. dahil)" },
  { value: "diger", label: "Bunların hiçbirine girmiyor / emin değilim" },
];

const ARGE_DURUMU_SECENEKLERI = [
  { value: "yok", label: "Yok, planlamıyorum" },
  { value: "planliyorum", label: "Yok ama yapmayı planlıyorum / yeni başlıyorum" },
  { value: "var_kucuk", label: "Var, yeni/küçük ölçekli" },
  { value: "var_kurumsal", label: "Var, kurumsallaşmış (Ar-Ge Merkezi vb.)" },
];

const IHRACAT_DURUMU_SECENEKLERI = [
  { value: "yok", label: "Yok" },
  { value: "planliyorum", label: "Yok ama planlıyorum" },
  { value: "yapiyorum", label: "Evet, düzenli ihracat yapıyorum" },
];

const DONUSUM_DURUMU_SECENEKLERI = [
  { value: "yok", label: "Yok" },
  { value: "planliyorum", label: "Yok ama planlıyorum" },
  { value: "yapiyorum", label: "Evet, uyguluyorum" },
];

// KOSGEB Yeşil Sanayi Destek Programı Yönergesi'nin resmi 2 Alt Bileşen yapısı (birincil
// kaynaktan doğrulandı, 2026-09-17) — eski 4'lü sınıflama resmi terim değildi.
const YESIL_SANAYI_TEMA_SECENEKLERI = [
  { value: "alt_bilesen_1_1", label: "Alt Bileşen 1.1: Enerji sistemlerinin karbonsuzlaştırılması (örn. GES)" },
  { value: "alt_bilesen_1_2", label: "Alt Bileşen 1.2: İklim eylemi, kaynak verimliliği, sürdürülebilirlik" },
  { value: "emin_degil", label: "Emin değilim" },
];

const KIRSAL_YATIRIM_DURUMU_SECENEKLERI = [
  { value: "yok", label: "Yok" },
  { value: "planliyorum", label: "Yok ama planlıyorum" },
  { value: "yapiyorum", label: "Evet, mevcut bir yatırımım var" },
];

// UE-13/08 Rev. 24/03/2026 MADDE 14-17 (birincil kaynak) — iki aşamalı başvuru sürecinin durumu.
const STRATEJIK_URUN_BASVURU_SECENEKLERI = [
  { value: "yapmadim", label: "Henüz yapmadım" },
  { value: "sonuc_bekliyor", label: "Yaptım, sonuç bekliyorum" },
  { value: "kesin_basvuruya_davet_edildim", label: "Kesin başvuruya davet edildim" },
  { value: "reddedildim", label: "Reddedildim" },
];

// UE-38/01 Rev. 07/03/2025 MADDE 6 (birincil kaynak) — dört alternatif uygunluk yolundan biri.
const KURESEL_REKABETCILIK_KRITER_SECENEKLERI = [
  { value: "hizli_buyuyen_teknoloji_ihracat", label: "Hızlı büyüyen işletme + orta-yüksek/yüksek teknoloji + 3 yıl art arda ihracat artışı" },
  { value: "hizli_buyuyen_ihracat_arge", label: "Hızlı büyüyen işletme + 3 yıl art arda ihracat VE Ar-Ge artışı" },
  { value: "yuksek_teknoloji_oncelikli_urun", label: "Yüksek teknoloji + orta ölçek + Hamle Programı öncelikli ürün listesi" },
  { value: "turcorn_100", label: "Turcorn 100 Programı'na kabul edildim" },
  { value: "hicbiri", label: "Hiçbiri / emin değilim" },
];

const YONDE_HIZMET_SECENEKLERI = [
  { value: "dijital_donusum_yol_haritasi", label: "Dijital Dönüşüm Değerlendirme Analizi ve Yol Haritası" },
  { value: "surdurulebilirlik_raporlamasi", label: "Sürdürülebilirlik Raporlaması" },
  { value: "yoda_analizi", label: "Yalın Olgunluk Değerlendirme Analizi (YODA)" },
  { value: "birden_fazla", label: "Birden fazlası" },
];

// TÜBİTAK 1812 (BiGG Yatırım) — 1501/1507/1832'den ayrı, girişim aşaması sorusu.
const GIRISIMCI_SIRKET_DURUMU_SECENEKLERI = [
  { value: "henuz_sirket_yok", label: "Henüz şirketim yok, iş fikri aşamasındayım" },
  { value: "yeni_kurulmus_girisim_sirketi", label: "Yeni kurulmuş bir girişim şirketim var" },
  { value: "kurulu_sirket_3yil_uzeri", label: "3 yıldan uzun süredir kurulu, köklü bir şirketim var" },
];

// 4691 sayılı Kanun MADDE 14(g) (birincil kaynak) — Teknopark kapsamındaki faaliyet türleri.
const TEKNOPARK_FAALIYET_TURU_SECENEKLERI = [
  { value: "yazilim_gelistirme", label: "Yazılım geliştirme" },
  { value: "arge", label: "Ar-Ge" },
  { value: "tasarim", label: "Tasarım" },
  { value: "yenilik", label: "Yenilik (inovasyon)" },
  { value: "kapsam_disi", label: "Bunların hiçbiri değil" },
];

const TEKNOPARK_BASVURU_ASAMASI_SECENEKLERI = [
  { value: "basvurmadim", label: "Henüz başvurmadım" },
  { value: "basvurdu_sonuc_bekliyor", label: "Başvurdum, sonuç bekliyorum" },
  { value: "kabul_edildi", label: "Kabul edildim" },
];

const TEKMER_TEMA_UYUMU_SECENEKLERI = [
  { value: "uyumlu", label: "Uyumlu (enerji, savunma, ilaç/medikal, biyoteknoloji, yazılım/YZ vb.)" },
  { value: "kismen_uyumlu", label: "Kısmen uyumlu / emin değilim" },
  { value: "uyumsuz", label: "Uyumsuz" },
  { value: "emin_degil", label: "Bilmiyorum" },
];

const TEKMER_BASVURU_DURUMU_SECENEKLERI = [
  { value: "henuz_basvurmadim", label: "Henüz başvurmadım" },
  { value: "basvurdu_bekliyor", label: "Başvurdum, sonuç bekliyorum" },
  { value: "kabul_edildim", label: "Kabul edildim" },
  { value: "reddedildim", label: "Reddedildim" },
];

const ONCELIKLI_GRUP_SECENEKLERI = [
  { value: "yok", label: "Yok" },
  { value: "kadin", label: "Kadın girişimci" },
  { value: "genc", label: "Genç girişimci (35 yaş altı)" },
  { value: "engelli", label: "Engelli girişimci" },
  { value: "gazi_sehit_yakini", label: "Gazi veya birinci derece şehit yakını" },
];

const ADIMLAR = ["Şirket Bilgileri", "Şirket Hedefleri", "Ön Analiz", "Detaylı Program Analizi", "Sonuç"];

// Yalnızca UI etiketleri — motorun ürettiği gerçek durum değerleri
// (uygun / kismen_uygun / belirsiz / uygun_degil) değişmedi.
const DURUM_STIL: Record<SonucDurumu, { renk: string; etiket: string }> = {
  uygun: { renk: "border-green-300 bg-green-50 text-green-800", etiket: "🟢 Ön Uygun" },
  // kismen_uygun: nesnel kriterler bu araçla kontrol edilebildiği kadarıyla
  // karşılanıyor, ama nihai karar sizin girdiğiniz bilgiden değil dış bir
  // değerlendirmeden çıkıyor (danışmanlık puanlaması, E-TUYS incelemesi vb.).
  kismen_uygun: { renk: "border-blue-300 bg-blue-50 text-blue-800", etiket: "🔵 Koşullu Uygun — Resmi Değerlendirmeye Tabi" },
  // belirsiz: eksikAlanlar dolu — karar sizin daha fazla bilgi girmenize bağlı.
  belirsiz: { renk: "border-amber-300 bg-amber-50 text-amber-800", etiket: "🟡 Bilgi Eksik — Tamamlayın" },
  uygun_degil: { renk: "border-red-300 bg-red-50 text-red-800", etiket: "🔴 İlk Elemede Uygun Değil" },
};

// cagriKapali === true olan programlar için durum rengini/etiketini ezer — kriterler
// sağlansa bile programın GÜNCEL çağrı/başvuru dönemi kapalıyken "Ön Uygun"/"Koşullu
// Uygun" gösterip "hemen başvurabilirsiniz" izlenimi vermemek için ayrı bir rozet.
const CAGRI_KAPALI_STIL = { renk: "border-orange-300 bg-orange-50 text-orange-800", etiket: "🟠 Kriterler Uygun — Çağrı Şu An Kapalı" };
const kartStili = (s: ProgramSonucu) => (s.cagriKapali ? CAGRI_KAPALI_STIL : DURUM_STIL[s.durum]);

const PUAN_RENK = (puan: number) =>
  puan >= 8 ? "text-green-600" : puan >= 5 ? "text-blue-600" : puan >= 3 ? "text-amber-600" : "text-red-600";

// Kart başlığındaki sağ üst gösterge. Yalnızca "uygun" durumunda ham puan (XX/100)
// gösterilir — bu, tek durum kategorisi ki puan gerçekten "ön koşulların tamamı
// doğrulandı" anlamına geliyor. Diğer durumlarda ham puan göstermek yanıltıcı:
// "kismen_uygun" için düşük bir sayı (60-80), nesnel kriterlerin TAMAMI
// sağlandığında bile hep aynı görünür (nihai karar resmi/danışman değerlendirmesine
// bağlı programlarda tasarım gereği asla "uygun"a çıkmaz — bkz. TÜBİTAK/Turquality/
// Yatırım Teşvik/İhracat Destekleri/TKDK/Yeşil Sanayi), bu da "neden hep %70'te
// takılı kalıyor" izlenimi yaratıyordu. Puan sıralamada (index.ts) kullanılmaya
// devam ediyor, sadece bu rozette gösterilmiyor.
function DurumGostergesi({ durum, puan }: { durum: SonucDurumu; puan: number }) {
  if (durum === "uygun") {
    return (
      <div className="text-center" title="Bu puan başvurunun kabul edilme ihtimali değildir; şirket bilgilerinizin programın kriterleriyle eşleşme düzeyini gösteren bir ön değerlendirme skorudur.">
        <div className={`text-2xl font-black leading-none ${PUAN_RENK(puan)}`}>{puan * 10}</div>
        <div className="text-[10px] font-semibold uppercase tracking-wide text-gray-400">Uygunluk<br />Eşleşmesi</div>
      </div>
    );
  }
  if (durum === "kismen_uygun") {
    return (
      <div className="text-center" title="Girdiğiniz bilgilerle nesnel ön kriterlerin tamamı sağlanıyor; nihai karar resmi başvuru veya danışmanlık değerlendirmesine bağlıdır, bu yüzden bir yüzde ile gösterilmiyor.">
        <div className="text-2xl leading-none text-blue-600">✓</div>
        <div className="text-[10px] font-semibold uppercase tracking-wide text-gray-400">Kriterler<br />Sağlanıyor</div>
      </div>
    );
  }
  if (durum === "belirsiz") {
    return (
      <div className="text-center" title="Henüz eksik bilgi var; kartı açıp tamamladığınızda sonuç netleşir.">
        <div className="text-2xl leading-none text-amber-500">…</div>
        <div className="text-[10px] font-semibold uppercase tracking-wide text-gray-400">Bilgi<br />Bekleniyor</div>
      </div>
    );
  }
  return (
    <div className="text-center" title="Girilen bilgilerle ilk elemede uygun görünmüyor.">
      <div className="text-2xl leading-none text-red-500">✕</div>
      <div className="text-[10px] font-semibold uppercase tracking-wide text-gray-400">Uygun<br />Görünmüyor</div>
    </div>
  );
}

type PersonaAlanlari = Record<string, string>;

const PERSONALAR: { ikon: string; baslik: string; aciklama: string; alanlar: PersonaAlanlari }[] = [
  {
    ikon: "🌱",
    baslik: "Yeni girişimciyim",
    aciklama: "İş fikrimi hayata geçirmek veya yeni kurduğum işletmemi büyütmek için destek arıyorum.",
    alanlar: { yeniGirisimciMi: "evet" },
  },
  {
    ikon: "🏭",
    baslik: "Mevcut işletmem büyüyor",
    aciklama: "Kurulu bir işletmem var, yeni yatırım/kapasite artırımı planlıyorum.",
    alanlar: { yeniGirisimciMi: "hayir", yatirimPlanlaniyorMu: "evet" },
  },
  {
    ikon: "🌍",
    baslik: "İhracat yapıyorum",
    aciklama: "Yurt dışı pazarlara açılmak veya mevcut ihracatımı büyütmek istiyorum.",
    alanlar: { yeniGirisimciMi: "hayir", ihracatDurumu: "yapiyorum" },
  },
  {
    ikon: "🔬",
    baslik: "Yeni ürün / Ar-Ge projem var",
    aciklama: "Yeni bir ürün, teknoloji veya üretim yöntemi geliştiriyorum.",
    alanlar: { yeniGirisimciMi: "hayir", argeDurumu: "planliyorum" },
  },
  {
    ikon: "🌾",
    baslik: "Kırsal / tarımsal yatırımım var",
    aciklama: "Hayvancılık, tarımsal üretim, gıda işleme veya kırsal turizm alanında yatırım planlıyorum.",
    alanlar: { yeniGirisimciMi: "hayir", kirsalYatirimDurumu: "yapiyorum" },
  },
];

const ZORUNLU_HUNI_ALANLARI: { anahtar: string; etiket: string }[] = [
  { anahtar: "yeniGirisimciMi", etiket: "Yeni bir girişimci misiniz?" },
  { anahtar: "imalatciMi", etiket: "İmalat/üretim sektöründe mi faaliyet gösteriyorsunuz?" },
  { anahtar: "yatirimPlanlaniyorMu", etiket: "Yeni tesis, genişleme veya modernizasyon yatırımı planlıyor musunuz?" },
  { anahtar: "argeDurumu", etiket: "Ar-Ge / yenilik durumunuz nedir?" },
  { anahtar: "ihracatDurumu", etiket: "İhracat durumunuz nedir?" },
  { anahtar: "donusumDurumu", etiket: "Dijital veya yeşil dönüşüm yatırımı" },
  { anahtar: "kirsalYatirimDurumu", etiket: "Kırsal alanda bir yatırımınız var mı?" },
];

export default function DestekUygunlukForm() {
  const [g, setG] = useState<Girdi>({});
  const [submitting, setSubmitting] = useState(false);
  const [sonuclar, setSonuclar] = useState<ProgramSonucu[] | null>(null);
  const [duzenleModuAcik, setDuzenleModuAcik] = useState(false);
  const [katalogOnerileri, setKatalogOnerileri] = useState<KatalogEslesme[]>([]);
  const [hizmetOnerileri, setHizmetOnerileri] = useState<HizmetOnerisi[]>([]);
  const [hata, setHata] = useState("");
  const [seciliPersonalar, setSeciliPersonalar] = useState<Set<number>>(new Set());
  const [kvkkOnay, setKvkkOnay] = useState(false);
  const [acikSonuclar, setAcikSonuclar] = useState<Set<string>>(new Set());
  const [duzenleAcik, setDuzenleAcik] = useState<Set<string>>(new Set());
  // İlk dolduruşta formu 3 ekrana (Şirket Bilgileri → Sorular/Hedefler → İletişim)
  // bölen sihirbaz adımı — sadece görünümü değiştirir, sorular/kurallar/uygunluk
  // mantığı hiç değişmedi. "Cevapları düzenle" (sonuç varken geri dönme) modunda
  // wizard uygulanmaz, tüm bölümler tek sayfada kalır (mevcut davranış).
  const [wizardAdim, setWizardAdim] = useState<1 | 2 | 3>(1);

  const set = (key: string, value: string) => setG((prev) => ({ ...prev, [key]: value }));

  // hizmetHedefleri, destek motoru tarafından okunmayan, yalnızca hizmet
  // eşleştirmede kullanılan çoktan seçmeli bir alan — tek bir "g" anahtarında
  // virgülle ayrılmış liste olarak tutulur (diğer flat state alanlarıyla aynı desen).
  const hizmetHedefiSecili = (deger: string) => (g.hizmetHedefleri ?? "").split(",").includes(deger);
  const hizmetHedefiDegistir = (deger: string) => {
    const mevcut = new Set((g.hizmetHedefleri ?? "").split(",").filter(Boolean));
    if (mevcut.has(deger)) mevcut.delete(deger);
    else mevcut.add(deger);
    set("hizmetHedefleri", Array.from(mevcut).join(","));
  };

  const personaSec = (index: number) => {
    setSeciliPersonalar((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
    setG((prev) => ({ ...prev, ...PERSONALAR[index].alanlar }));
    document.getElementById("bolum-1")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const sonucAcKapa = (programId: string) =>
    setAcikSonuclar((prev) => {
      const next = new Set(prev);
      if (next.has(programId)) next.delete(programId);
      else next.add(programId);
      return next;
    });

  const duzenleAcKapa = (programId: string) =>
    setDuzenleAcik((prev) => {
      const next = new Set(prev);
      if (next.has(programId)) next.delete(programId);
      else next.add(programId);
      return next;
    });

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

      yeniGirisimciMi: bool("yeniGirisimciMi"),
      imalatciMi: bool("imalatciMi"),
      yatirimPlanlaniyorMu: bool("yatirimPlanlaniyorMu"),
      argeDurumu: (g.argeDurumu as DestekBasvuruGirdisi["argeDurumu"]) || undefined,
      ihracatDurumu: (g.ihracatDurumu as DestekBasvuruGirdisi["ihracatDurumu"]) || undefined,
      donusumDurumu: (g.donusumDurumu as DestekBasvuruGirdisi["donusumDurumu"]) || undefined,
      kirsalYatirimDurumu: (g.kirsalYatirimDurumu as DestekBasvuruGirdisi["kirsalYatirimDurumu"]) || undefined,

      kosgebVeriTabaniKayitliMi: bool("kosgebVeriTabaniKayitliMi"),
      ileriGirisimciEgitimiTamamlandiMi: bool("ileriGirisimciEgitimiTamamlandiMi"),
      ortaklikPayiYuzde: num("ortaklikPayiYuzde"),
      girisimciMunferitTemsilYetkisiVarMi: bool("girisimciMunferitTemsilYetkisiVarMi"),
      oncelikliGrup: (g.oncelikliGrup as DestekBasvuruGirdisi["oncelikliGrup"]) || undefined,
      isGelistirmeDestegiDahaOnceKullanildiMi: bool("isGelistirmeDestegiDahaOnceKullanildiMi"),

      kapasiteProgramiDahaOnceKullanildiMi: bool("kapasiteProgramiDahaOnceKullanildiMi"),
      kapasiteDijitalDonusumTrackiMi: bool("kapasiteDijitalDonusumTrackiMi"),
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
      uretimYatirimNiteligi: (g.uretimYatirimNiteligi as DestekBasvuruGirdisi["uretimYatirimNiteligi"]) || undefined,
      projeEkibindeLisansMezunuVarMi: bool("projeEkibindeLisansMezunuVarMi"),
      argeFaaliyetiKaynagi: (g.argeFaaliyetiKaynagi as DestekBasvuruGirdisi["argeFaaliyetiKaynagi"]) || undefined,
      talepEdilenProjeButcesiTl: num("talepEdilenProjeButcesiTl"),

      teydebBekleyenProjeSayisi: num("teydebBekleyenProjeSayisi"),
      teydebOnayliProjeSayisi: num("teydebOnayliProjeSayisi"),
      ortakliBasvuruMu: bool("ortakliBasvuruMu"),
      teknogirisimSermayeSirketiMi: bool("teknogirisimSermayeSirketiMi"),
      argeOncelikliAlanKategorisi: (g.argeOncelikliAlanKategorisi as DestekBasvuruGirdisi["argeOncelikliAlanKategorisi"]) || undefined,
      projeYesilDonusumHedefliMi: bool("projeYesilDonusumHedefliMi"),
      projeEndustriyelOlcekYatirimMi: bool("projeEndustriyelOlcekYatirimMi"),

      yuksekVeyaOrtaYuksekTeknolojiUrunMu: bool("yuksekVeyaOrtaYuksekTeknolojiUrunMu"),

      ihracatTuru: (g.ihracatTuru as DestekBasvuruGirdisi["ihracatTuru"]) || undefined,
      ihracatciBirligiUyesiMi: bool("ihracatciBirligiUyesiMi"),
      dysKayitliMi: bool("dysKayitliMi"),
      fuarKatilimiVarMi: bool("fuarKatilimiVarMi"),
      yurtDisindaBirimDepoKiralamaVarMi: bool("yurtDisindaBirimDepoKiralamaVarMi"),
      yurtDisindaReklamTanitimVarMi: bool("yurtDisindaReklamTanitimVarMi"),
      pazaraGirisBelgesiIhtiyaciVarMi: bool("pazaraGirisBelgesiIhtiyaciVarMi"),
      markaTesciliVarMi: bool("markaTesciliVarMi"),

      istihdamiKorumaTaahhutEdebilirMi: bool("istihdamiKorumaTaahhutEdebilirMi"),
      referansDonemSigortaliCalisaniVarMi: bool("referansDonemSigortaliCalisaniVarMi"),
      kobiBilgiSistemiKayitGuncelMi: bool("kobiBilgiSistemiKayitGuncelMi"),
      kosgebVadesiGecmisBorcuVarMi: bool("kosgebVadesiGecmisBorcuVarMi"),

      ddxRaporuVarMi: bool("ddxRaporuVarMi"),
      maliKarneVarMi: bool("maliKarneVarMi"),
      maliYeterlilikSaglaniyorMu: bool("maliYeterlilikSaglaniyorMu"),
      yesilSanayiProjeTemasi: (g.yesilSanayiProjeTemasi as DestekBasvuruGirdisi["yesilSanayiProjeTemasi"]) || undefined,

      basvuranYasi: num("basvuranYasi"),
      tkdkDesteklenenIldeMi: bool("tkdkDesteklenenIldeMi"),
      tkdkSektoru: (g.tkdkSektoru as DestekBasvuruGirdisi["tkdkSektoru"]) || undefined,
      planlananProjeButcesiEuro: num("planlananProjeButcesiEuro"),

      turqualitySon3YilOrtalamaIhracatUsd: num("turqualitySon3YilOrtalamaIhracatUsd"),
      turqualitySon1YilIhracatUsd: num("turqualitySon1YilIhracatUsd"),
      markaYurtIciTescilVarMi: bool("markaYurtIciTescilVarMi"),
      markaYurtDisiTescilVarMi: bool("markaYurtDisiTescilVarMi"),
      markaYurtDisiTescilYurtIciTescildenOnceMi: bool("markaYurtDisiTescilYurtIciTescildenOnceMi"),

      stratejikUrunBakanlikBasvuruDurumu: (g.stratejikUrunBakanlikBasvuruDurumu as DestekBasvuruGirdisi["stratejikUrunBakanlikBasvuruDurumu"]) || undefined,
      stratejikUrunOncelikliListede: bool("stratejikUrunOncelikliListede"),
      yeniPersonelIstihdamPlaniVarMi: bool("yeniPersonelIstihdamPlaniVarMi"),
      yerliMaliBelgesiPlaniVarMi: bool("yerliMaliBelgesiPlaniVarMi"),

      kureselRekabetcilikKriteri: (g.kureselRekabetcilikKriteri as DestekBasvuruGirdisi["kureselRekabetcilikKriteri"]) || undefined,
      kureselRekabetcilikKrediTutariTl: num("kureselRekabetcilikKrediTutariTl"),
      kureselRekabetcilikDahaOnceKullanildiMi: bool("kureselRekabetcilikDahaOnceKullanildiMi"),

      yondeDahaOnceYararlanildiMi: bool("yondeDahaOnceYararlanildiMi"),
      yondeHizmetTuru: (g.yondeHizmetTuru as DestekBasvuruGirdisi["yondeHizmetTuru"]) || undefined,

      argeMerkeziStatusuVarMi: bool("argeMerkeziStatusuVarMi"),
      tamZamanEsdegerArgePersoneliSayisi: num("tamZamanEsdegerArgePersoneliSayisi"),
      argeFaaliyetleriAyriBirimdeMi: bool("argeFaaliyetleriAyriBirimdeMi"),

      tasarimMerkeziStatusuVarMi: bool("tasarimMerkeziStatusuVarMi"),
      tasarimPersoneliSayisiTze: num("tasarimPersoneliSayisiTze"),
      tasarimBirimiAyriOrganizeMi: bool("tasarimBirimiAyriOrganizeMi"),

      girisimciSirketDurumu: (g.girisimciSirketDurumu as DestekBasvuruGirdisi["girisimciSirketDurumu"]) || undefined,
      kuluckaFaz1TamamlandiMi: bool("kuluckaFaz1TamamlandiMi"),
      hisseKarsiligiYatirimKabulEdiyorMu: bool("hisseKarsiligiYatirimKabulEdiyorMu"),

      musteriKurulusVarMi: bool("musteriKurulusVarMi"),
      musteriKurulusIliskiliTarafMi: bool("musteriKurulusIliskiliTarafMi"),
      musteriKurulusFinansmanTaahhuduVarMi: bool("musteriKurulusFinansmanTaahhuduVarMi"),
      siparisArGeProjeButcesiTl: num("siparisArGeProjeButcesiTl"),

      cozumOrtagiListedeMi: bool("cozumOrtagiListedeMi"),
      ortakliBasvuruMu1831: bool("ortakliBasvuruMu1831"),
      basvuru1831DahaOnceKacKezKullanildi: num("basvuru1831DahaOnceKacKezKullanildi"),
      ayniCozumOrtagiIleKacProje: num("ayniCozumOrtagiIleKacProje"),

      teknoparkStatusuVarMi: bool("teknoparkStatusuVarMi"),
      teknoparkFaaliyetTuru: (g.teknoparkFaaliyetTuru as DestekBasvuruGirdisi["teknoparkFaaliyetTuru"]) || undefined,
      teknoparkKazancAyristirmaYapiliyorMu: bool("teknoparkKazancAyristirmaYapiliyorMu"),
      argeVeyaTasarimMerkeziTesvikiAyniFaaliyetIcinAliniyorMu: bool("argeVeyaTasarimMerkeziTesvikiAyniFaaliyetIcinAliniyorMu"),
      teknoparkBasvuruAsamasi: (g.teknoparkBasvuruAsamasi as DestekBasvuruGirdisi["teknoparkBasvuruAsamasi"]) || undefined,

      tekmerTemaUyumu: (g.tekmerTemaUyumu as DestekBasvuruGirdisi["tekmerTemaUyumu"]) || undefined,
      yakinBolgedeTekmerVarMi: bool("yakinBolgedeTekmerVarMi"),
      tekmerBasvuruDurumu: (g.tekmerBasvuruDurumu as DestekBasvuruGirdisi["tekmerBasvuruDurumu"]) || undefined,

      iletisimAdSoyad: g.iletisimAdSoyad || undefined,
      iletisimEposta: g.iletisimEposta || undefined,
      iletisimTelefon: g.iletisimTelefon || undefined,
      ekAciklama: g.ekAciklama || undefined,
      hizmetHedefleri: g.hizmetHedefleri ? g.hizmetHedefleri.split(",").filter(Boolean) : undefined,
    };
  };

  const zorunluAlanlarSayisi = ZORUNLU_HUNI_ALANLARI.length + 2; // + ad soyad, e-posta
  const doldurulanSayisi =
    ZORUNLU_HUNI_ALANLARI.filter((a) => g[a.anahtar]).length + (g.iletisimAdSoyad ? 1 : 0) + (g.iletisimEposta ? 1 : 0);
  const ilerlemeYuzdesi = Math.round((doldurulanSayisi / zorunluAlanlarSayisi) * 100);

  // İlk dolduruş sırasında (henüz sonuç yok) form 3 ekrana bölünmüş bir sihirbaz
  // olarak gösterilir; sonuç varken "cevapları düzenle" ile geri dönülürse mevcut
  // (tüm bölümler tek sayfada) davranış korunur.
  const wizardAktif = sonuclar === null;

  // 5 adımlık gösterge için hangi adımın aktif olduğunu mevcut state'ten türetir.
  const aktifAdim = (() => {
    if (wizardAktif) return wizardAdim === 1 ? 1 : 2;
    if (duzenleModuAcik) {
      return ZORUNLU_HUNI_ALANLARI.some((a) => g[a.anahtar]) || seciliPersonalar.size > 0 ? 2 : 1;
    }
    if (acikSonuclar.size === 0) return 3;
    const acikProgramlar = sonuclar.filter((s) => acikSonuclar.has(s.programId));
    const hepsiNetlesti = acikProgramlar.every((s) => s.durum === "uygun" || s.durum === "uygun_degil");
    return hepsiNetlesti ? 5 : 4;
  })();

  // Analizi çalıştırır (ilk gönderim veya bir kartın "Analizi Güncelle" butonu için ortak).
  // Başarılıysa güncel sonuç listesini döner (state henüz güncellenmeden çağırana lazım olabiliyor).
  const calistirAnaliz = async (): Promise<ProgramSonucu[] | null> => {
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
      setKatalogOnerileri(data.katalogOnerileri ?? []);
      setHizmetOnerileri(data.hizmetOnerileri ?? []);
      return data.sonuclar as ProgramSonucu[];
    } catch (err) {
      setHata(err instanceof Error ? err.message : "Bir hata oluştu.");
      return null;
    } finally {
      setSubmitting(false);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setHata("");
    const eksik = ZORUNLU_HUNI_ALANLARI.find((a) => !g[a.anahtar]);
    if (eksik) {
      setHata(`Lütfen "${eksik.etiket}" sorusunu cevaplayın.`);
      if (wizardAktif) setWizardAdim(2);
      document.getElementById("bolum-2")?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    if (!kvkkOnay) {
      setHata("Devam etmek için KVKK Aydınlatma Metni'ni onaylamanız gerekiyor.");
      return;
    }
    const ilkKezMi = sonuclar === null;
    const yeniSonuclar = await calistirAnaliz();
    if (yeniSonuclar) {
      if (ilkKezMi) {
        setAcikSonuclar(new Set(yeniSonuclar.slice(0, 1).map((s) => s.programId)));
      }
      setDuzenleModuAcik(false);
      window.scrollTo({ top: document.getElementById("sonuclar")?.offsetTop ?? 0, behavior: "smooth" });
    }
  };

  // Bir sonuç kartındaki "Analizi Güncelle" butonu: aynı analizi tekrar çalıştırır,
  // yalnızca o kartı (ve varsa daha önce açık olanları) açık tutar.
  const kartGuncelle = async (programId: string) => {
    await calistirAnaliz();
    setAcikSonuclar((prev) => new Set(prev).add(programId));
    // Güncelleme bitince düzenleme alanı otomatik kapanır — kart temiz görünür,
    // tekrar düzeltmek isterse aşağıdaki "Cevapları Düzenle" ile yine açabilir.
    setDuzenleAcik((prev) => {
      const next = new Set(prev);
      next.delete(programId);
      return next;
    });
  };

  if (sonuclar && !duzenleModuAcik) {
    return (
      <div id="sonuclar" className="space-y-6">
        <AdimGostergesi aktifAdim={aktifAdim} />
        <div className="rounded-2xl border border-amber-300 bg-amber-50 p-5 text-sm text-amber-900">
          Bu sonuçlar, girdiğiniz bilgilere dayalı bir <strong>ön değerlendirmedir</strong>, başvurunuzun kabul
          edilme ihtimali değildir. "Uygunluk Eşleşmesi" yalnızca profilinizin programın bilinen şartlarıyla ne
          kadar örtüştüğünü gösterir; resmi başvuru sonucu ya da kesin uygunluk teyidi yerine geçmez. Mevzuat
          sık güncellenir; kesin sonuç için ilgili kurumun güncel şartları ve bir danışman değerlendirmesi
          gereklidir.
        </div>

        <div>
          <p className="mb-1 text-xs font-bold uppercase tracking-wide text-orange-500">🎯 Destek &amp; Finansman Fırsatları</p>
          <h2 className="text-lg font-bold text-[#071A2F]">
            Şirketiniz için {sonuclar.length} potansiyel fırsat tespit ettik
          </h2>
          <div className="mt-3 flex flex-wrap gap-4 text-sm">
            <span className="flex items-center gap-1.5">
              🟢 <strong>{sonuclar.filter((s) => s.durum === "uygun" && !s.cagriKapali).length}</strong> ön uygun
            </span>
            <span className="flex items-center gap-1.5">
              🔵 <strong>{sonuclar.filter((s) => s.durum === "kismen_uygun" && !s.cagriKapali).length}</strong> koşullu uygun
            </span>
            {sonuclar.some((s) => s.cagriKapali) && (
              <span className="flex items-center gap-1.5">
                🟠 <strong>{sonuclar.filter((s) => s.cagriKapali).length}</strong> çağrısı şu an kapalı
              </span>
            )}
            <span className="flex items-center gap-1.5">
              🟡 <strong>{sonuclar.filter((s) => s.durum === "belirsiz").length}</strong> bilgi eksik
            </span>
            <span className="flex items-center gap-1.5">
              🔴 <strong>{sonuclar.filter((s) => s.durum === "uygun_degil").length}</strong> ilk elemede uygun değil
            </span>
          </div>
          <p className="mt-3 text-sm text-gray-500">Eşleşmeye göre sıralandı — detay kriterleri görmek için bir karta tıklayın.</p>
        </div>

        {sonuclar.map((s) => {
          const acik = acikSonuclar.has(s.programId);
          const stil = kartStili(s);
          return (
            <div key={s.programId} className={`rounded-2xl border shadow-sm transition ${stil.renk}`}>
              <button
                type="button"
                onClick={() => sonucAcKapa(s.programId)}
                className="flex w-full flex-wrap items-center justify-between gap-3 p-6 text-left"
                aria-expanded={acik}
              >
                <div className="min-w-0">
                  <div className="mb-1 flex flex-wrap items-center gap-2">
                    <h3 className="text-lg font-bold text-[#071A2F]">{s.programAdi}</h3>
                    <span className={`rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-wide ${stil.renk}`}>
                      {stil.etiket}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{s.kurum} — {s.ozet}</p>
                </div>
                <div className="flex flex-shrink-0 items-center gap-3">
                  <DurumGostergesi durum={s.durum} puan={s.puan} />
                  <span className={`flex h-8 w-8 items-center justify-center rounded-full border text-sm transition ${acik ? "rotate-180" : ""}`}>
                    ▾
                  </span>
                </div>
              </button>
              {acik && (() => {
                const { eksikKriterler, digerUyarilar } = uyarilariAyikla(s.uyarilar);
                const olumsuz = s.durum === "uygun_degil";
                return (
                  <div className="border-t border-black/10 p-6 pt-5 space-y-5">
                    <p className="text-xs italic text-gray-500">
                      Bu skor, verdiğiniz bilgiler ile program kriterleri arasındaki eşleşmeyi gösterir. Başvurunun kabul edileceği anlamına gelmez.
                    </p>
                    <div>
                      <p className="mb-2 text-xs font-bold uppercase tracking-wide text-gray-500">
                        Neden bu sonucu aldınız?
                      </p>
                      <ul className="space-y-1.5 text-sm text-gray-800">
                        {s.gerekceler.map((gerekce, i) => (
                          <li key={i} className="flex gap-2">
                            <span className={olumsuz ? "text-red-500" : "text-green-600"}>{olumsuz ? "✗" : "✓"}</span>
                            <span>{gerekce}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {eksikKriterler.length > 0 && (
                      <div>
                        <p className="mb-2 text-xs font-bold uppercase tracking-wide text-gray-500">
                          Eksik / Doğrulanması Gereken Kriterler
                        </p>
                        <ul className="space-y-1.5 text-sm text-gray-800">
                          {eksikKriterler.map((kriter, i) => (
                            <li key={i} className="flex gap-2">
                              <span className="text-amber-500">⚠</span>
                              <span>{kriter}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {digerUyarilar.length > 0 && (
                      <div>
                        <p className="mb-2 text-xs font-bold uppercase tracking-wide text-gray-500">
                          Başvuru Öncesi Dikkat Edilmesi Gerekenler
                        </p>
                        <ul className="space-y-1 text-xs text-gray-600">
                          {digerUyarilar.map((uyari, i) => <li key={i}>ⓘ {uyari}</li>)}
                        </ul>
                      </div>
                    )}

                    {(() => {
                      const zorunluAcik = s.durum === "belirsiz";
                      const duzenleGorunur = zorunluAcik || duzenleAcik.has(s.programId);
                      return (
                        <div className="rounded-xl border border-gray-200 bg-white">
                          <button
                            type="button"
                            onClick={() => !zorunluAcik && duzenleAcKapa(s.programId)}
                            aria-expanded={duzenleGorunur}
                            className={`flex w-full items-center justify-between gap-3 p-4 text-left ${zorunluAcik ? "cursor-default" : ""}`}
                          >
                            <p className="text-xs font-bold uppercase tracking-wide text-gray-500">
                              {zorunluAcik
                                ? "Sonucu netleştirmek için bu soruları cevaplayın"
                                : "✏️ Cevapları Düzenle"}
                            </p>
                            {!zorunluAcik && (
                              <span className={`flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border text-xs transition ${duzenleGorunur ? "rotate-180" : ""}`}>
                                ▾
                              </span>
                            )}
                          </button>
                          {duzenleGorunur && (
                            <div className="border-t border-gray-100 p-5 pt-4">
                              <ProgramSorulari programId={s.programId} g={g} set={set} />
                              <button
                                type="button"
                                onClick={() => kartGuncelle(s.programId)}
                                disabled={submitting}
                                className="mt-5 rounded-xl bg-[#071A2F] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#0F2A47] disabled:opacity-60"
                              >
                                {submitting ? "Güncelleniyor…" : "Analizi Güncelle"}
                              </button>
                            </div>
                          )}
                        </div>
                      );
                    })()}

                    <div className="rounded-xl bg-gray-50 p-4 text-sm text-gray-700">
                      <span className="font-bold text-[#071A2F]">Bundan sonra ne yapmalıyım? </span>
                      {s.cagriKapali
                        ? "Kriterleri sağlıyorsunuz ama programın güncel çağrı/başvuru dönemi şu an kapalı — hemen başvuru yapılamaz. Yeni dönem açıldığında hazır olmak için süreci şimdiden birlikte planlayabiliriz, bizimle görüşün."
                        : s.durum === "uygun"
                        ? "Bu program için başvuru sürecini birlikte planlayalım — aşağıdaki İletişime Geç'e tıklayın."
                        : s.durum === "belirsiz"
                        ? "Yukarıdaki eksik bilgileri tamamlayıp \"Analizi Güncelle\"ye basın; net değilseniz bizimle görüşün."
                        : s.durum === "kismen_uygun"
                        ? "Girdiğiniz bilgilere göre nesnel ön şartları sağlıyorsunuz; nihai karar resmi başvuru/danışmanlık değerlendirmesiyle netleşir. Süreci birlikte planlamak için bizimle görüşün."
                        : olumsuz &&
                          "Bu program şu an için uygun görünmüyor; yukarıdaki cevaplardan biri değiştiyse (örn. şimdi bir belgeniz varsa) güncelleyip \"Analizi Güncelle\"ye basabilirsiniz. Diğer sonuçlarınıza ve aşağıdaki danışmanlık alanlarına da göz atabilirsiniz."}
                    </div>

                    {(() => {
                      // "uygun_degil" (kesin ret) durumunda hizmet önerisi göstermiyoruz —
                      // ret genelde bu hizmetlerin çözemeyeceği bir sebepten (şirket türü,
                      // ölçek vb.). "belirsiz" dahil ediliyor çünkü eksik olan şart (ör.
                      // marka tescili, DDX raporu) tam da bu hizmetlerin çözdüğü şey olabilir.
                      if (s.durum === "uygun_degil") return null;
                      const hizmetler = programaBagliHizmetleriBul(s.programId);
                      if (hizmetler.length === 0) return null;
                      return (
                        <div className="space-y-2">
                          {hizmetler.map((h) => (
                            <Link
                              key={h.id}
                              href={h.href}
                              className="flex items-center justify-between gap-3 rounded-xl border border-orange-200 bg-orange-50 p-4 transition hover:border-orange-400"
                            >
                              <div>
                                <div className="text-xs font-bold uppercase tracking-wide text-orange-500">💼 Bu programla ilgili hizmetimiz</div>
                                <div className="text-sm font-bold text-[#071A2F]">{h.ikon} {h.baslik}</div>
                              </div>
                              <span className="flex-shrink-0 text-sm font-semibold text-orange-600">İncele →</span>
                            </Link>
                          ))}
                        </div>
                      );
                    })()}
                  </div>
                );
              })()}
            </div>
          );
        })}
        {hizmetOnerileri.length > 0 && (
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <p className="mb-1 text-xs font-bold uppercase tracking-wide text-orange-500">💼 Hizmetler</p>
            <h3 className="mb-1 text-lg font-bold text-[#071A2F]">Şirketiniz İçin Değerlendirilebilecek Hizmetler</h3>
            <p className="mb-4 text-sm text-gray-600">
              Verdiğiniz bilgiler ve belirttiğiniz hedefler doğrultusunda aşağıdaki hizmet alanları sizin için
              değerlendirilebilir. Bunlar destek/teşvik programı değil, danışmanlık hizmetidir; bu yüzden
              yukarıdaki gibi bir uygunluk skoru taşımaz.
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {hizmetOnerileri.map((h) => (
                <Link
                  key={h.id}
                  href={h.href}
                  className="rounded-xl border border-gray-200 bg-white p-4 transition hover:border-orange-400 hover:shadow-md"
                >
                  <div className="text-sm font-bold text-[#071A2F]">{h.ikon} {h.baslik} →</div>
                  <div className="mt-1 text-xs leading-relaxed text-gray-500">{h.aciklama}</div>
                  <div className="mt-2 text-xs font-semibold text-orange-600">🎯 {h.neden}</div>
                </Link>
              ))}
            </div>
          </div>
        )}
        {katalogOnerileri.length > 0 && (
          <div className="rounded-2xl border border-orange-200 bg-orange-50 p-6">
            <h3 className="mb-1 text-lg font-bold text-[#071A2F]">Ayrıca İlginizi Çekebilir</h3>
            <p className="mb-4 text-sm text-gray-600">
              Verdiğiniz cevaplara göre, yukarıdaki detaylı analiz dışında kalan genel destek kataloğundan öne
              çıkan diğer programlar — bunlar için ayrı bir uygunluk hesabı yapılmadı, sadece ön tarama sonucu
              önerilir.
            </p>
            <ul className="space-y-2">
              {katalogOnerileri.map((k, i) => (
                <li key={i} className="rounded-xl border border-orange-100 bg-white p-3 text-sm">
                  <a href={k.kaynakUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-[#071A2F] hover:text-orange-600 hover:underline">
                    {k.ad}
                  </a>
                  <span className="ml-2 text-gray-500">
                    {k.kurum}
                    {k.sonBasvuruTarihi ? ` — Son başvuru: ${k.sonBasvuruTarihi}` : ""}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="rounded-2xl border border-gray-200 bg-[#071A2F] p-8 text-center text-white shadow-lg">
          <p className="mb-2 text-lg font-semibold">Şirketiniz için uygun seçenekleri birlikte değerlendirelim.</p>
          <p className="mb-4 text-sm text-white/70">Sonuçları birlikte değerlendirip başvuru sürecini konuşalım mı?</p>
          <Link href="/#contact" className="inline-block rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600">
            Uzmanla Görüşmek İstiyorum
          </Link>
        </div>
        <button
          type="button"
          onClick={() => setDuzenleModuAcik(true)}
          className="text-sm font-semibold text-orange-500 hover:underline"
        >
          ← Şirket bilgilerini / huni sorularını düzenle
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-10">
      {sonuclar && duzenleModuAcik && (
        <button
          type="button"
          onClick={() => setDuzenleModuAcik(false)}
          className="flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm font-bold text-[#071A2F] shadow-sm transition hover:border-orange-400 hover:text-orange-600"
        >
          ← Sonuçlara dön (bilgiler kaybolmaz)
        </button>
      )}

      <div className="sticky top-[78px] z-10 -mx-6 border-b border-gray-200 bg-white/95 px-6 py-3 backdrop-blur sm:mx-0 sm:rounded-2xl sm:border sm:shadow-sm">
        <div className="mb-2 overflow-x-auto">
          <AdimGostergesi aktifAdim={aktifAdim} />
        </div>
        <div className="mb-1.5 flex items-center justify-between text-xs font-semibold text-gray-500">
          <span>Form ilerlemesi</span>
          <span>%{ilerlemeYuzdesi}</span>
        </div>
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-100">
          <div className="h-full rounded-full bg-orange-500 transition-all" style={{ width: `${ilerlemeYuzdesi}%` }} />
        </div>
      </div>

      {(!wizardAktif || wizardAdim === 1) && (
        <div className="grid gap-3 sm:grid-cols-3">
          <div className="flex items-center gap-2.5 rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700">
            <span className="text-lg">⚡</span> Anında sonuç — bekleme yok
          </div>
          <div className="flex items-center gap-2.5 rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700">
            <span className="text-lg">🆓</span> Tamamen ücretsiz, taahhüt yok
          </div>
          <div className="flex items-center gap-2.5 rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700">
            <span className="text-lg">🔒</span> Verileriniz yalnızca analiz için kullanılır
          </div>
        </div>
      )}

      {(!wizardAktif || wizardAdim === 1) && (
        <>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-xl font-bold text-[#071A2F]">Şirketiniz için hangileri geçerli?</h2>
            <p className="mb-5 mt-1 text-sm text-gray-500">
              Birden fazlasını seçebilirsiniz — aşağıdaki bazı soruları sizin için önceden işaretleyelim. İstediğiniz an değiştirebilirsiniz.
            </p>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {PERSONALAR.map((p, i) => (
                <button
                  key={p.baslik}
                  type="button"
                  onClick={() => personaSec(i)}
                  aria-pressed={seciliPersonalar.has(i)}
                  className={`relative rounded-2xl border p-4 text-left transition hover:border-orange-400 hover:shadow-md ${
                    seciliPersonalar.has(i) ? "border-orange-500 bg-orange-50" : "border-gray-200 bg-white"
                  }`}
                >
                  {seciliPersonalar.has(i) && (
                    <span className="absolute right-3 top-3 flex h-5 w-5 items-center justify-center rounded-full bg-orange-500 text-xs text-white">✓</span>
                  )}
                  <div className="mb-2 text-3xl">{p.ikon}</div>
                  <div className="mb-1 text-sm font-bold text-[#071A2F]">{p.baslik}</div>
                  <div className="text-xs leading-relaxed text-gray-500">{p.aciklama}</div>
                </button>
              ))}
            </div>
          </div>

          <Bolum baslik="1. Şirket Bilgileri" aciklama="Bu bilgiler tüm programların ön değerlendirmesinde kullanılır." id="bolum-1">
            <div className="grid gap-5 sm:grid-cols-2">
              <Metin etiket="Şirket Unvanı" deger={g.sirketUnvani} onChange={(v) => set("sirketUnvani", v)} />
              <Secim etiket="Şirket Türü" deger={g.sirketTuru} onChange={(v) => set("sirketTuru", v)} secenekler={SIRKET_TURU_SECENEKLERI} />
              <Tarih etiket="Kuruluş Tarihi" deger={g.kurulusTarihi} onChange={(v) => set("kurulusTarihi", v)} />
              <div>
                <Metin etiket="NACE Kodu (örn. 62.01)" deger={g.naceKodu} onChange={(v) => set("naceKodu", v)} placeholder="62.01" />
                {g.naceKodu && naceAciklamaBul(g.naceKodu) && (
                  <p className="mt-1.5 text-xs text-gray-500">→ {naceAciklamaBul(g.naceKodu)}</p>
                )}
              </div>
              <CalisanSayisiAlani deger={g.calisanSayisi} onChange={(v) => set("calisanSayisi", v)} />
              <div>
                <Tutar etiket="Yıllık Net Satış Hasılatı" deger={g.yillikNetSatisHasilatiTl} onChange={(v) => set("yillikNetSatisHasilatiTl", v)} />
                <p className="mt-1.5 text-xs text-gray-500">
                  Son kapanmış mali yılınızın rakamı; yıldan yıla değişiyorsa yaklaşık girmeniz yeterli.
                </p>
              </div>
              <div>
                <Tutar etiket="Mali Bilanço (opsiyonel)" deger={g.maliBilancoTl} onChange={(v) => set("maliBilancoTl", v)} />
                <p className="mt-1.5 text-xs text-gray-500">
                  Bilanço toplam aktifiniz. KOBİ ölçeğinde ciro veya bilançodan hangisi eşiğin altındaysa o esas
                  alınır, ikisini de bilmiyorsanız sadece ciroyu girmeniz yeterli.
                </p>
              </div>
              <EvetHayir etiket="Türkiye'de yerleşik mi?" deger={g.turkiyedeYerlesikMi} onChange={(v) => set("turkiyedeYerlesikMi", v)} />
              <EvetHayir
                etiket="Kırsal kalkınma yatırımı planlıyorsanız: yatırım ili, TKDK'nın desteklenen illeri arasında mı?"
                deger={g.tkdkDesteklenenIldeMi}
                onChange={(v) => set("tkdkDesteklenenIldeMi", v)}
              />
            </div>
          </Bolum>
        </>
      )}

      {(!wizardAktif || wizardAdim === 2) && (
      <Bolum baslik="2. Birkaç Kısa Soru" aciklama="Bu cevaplara göre aşağıda sadece size uygun olabilecek program bölümleri açılır — ilgisiz onlarca soruyla uğraşmazsınız." id="bolum-2">
        <div className="grid gap-5 sm:grid-cols-2">
          <EvetHayir zorunlu etiket="Yeni bir girişimci misiniz? (kuruluşu 3 yıldan az veya henüz iş fikri aşamasında)" deger={g.yeniGirisimciMi} onChange={(v) => set("yeniGirisimciMi", v)} />
          <EvetHayir zorunlu etiket="İmalat/üretim sektöründe mi faaliyet gösteriyorsunuz?" deger={g.imalatciMi} onChange={(v) => set("imalatciMi", v)} />
          <EvetHayir zorunlu etiket="Yeni tesis, genişleme veya modernizasyon yatırımı planlıyor musunuz?" deger={g.yatirimPlanlaniyorMu} onChange={(v) => set("yatirimPlanlaniyorMu", v)} />
          <Secim zorunlu etiket="Ar-Ge / yenilik durumunuz nedir?" deger={g.argeDurumu} onChange={(v) => set("argeDurumu", v)} secenekler={ARGE_DURUMU_SECENEKLERI} />
          <Secim zorunlu etiket="İhracat durumunuz nedir?" deger={g.ihracatDurumu} onChange={(v) => set("ihracatDurumu", v)} secenekler={IHRACAT_DURUMU_SECENEKLERI} />
          <Secim zorunlu etiket="Dijital veya yeşil dönüşüm yatırımı" deger={g.donusumDurumu} onChange={(v) => set("donusumDurumu", v)} secenekler={DONUSUM_DURUMU_SECENEKLERI} />
          <Secim zorunlu etiket="Kırsal alanda (tarım, hayvancılık, kırsal turizm vb.) bir yatırımınız var mı?" deger={g.kirsalYatirimDurumu} onChange={(v) => set("kirsalYatirimDurumu", v)} secenekler={KIRSAL_YATIRIM_DURUMU_SECENEKLERI} />
          <Secim etiket="Öncelikli grup" deger={g.oncelikliGrup} onChange={(v) => set("oncelikliGrup", v)} secenekler={ONCELIKLI_GRUP_SECENEKLERI} />
        </div>
        <div className="mt-5">
          <Etiket>Ek hedefleriniz var mı? (opsiyonel, birden fazla seçebilirsiniz)</Etiket>
          <p className="mb-3 text-xs text-gray-500">
            Bunlar destek/teşvik uygunluğunu etkilemez, yalnızca sonuç ekranında size uygun danışmanlık
            hizmetlerini önerebilmemiz için kullanılır.
          </p>
          <div className="flex flex-wrap gap-2">
            {HIZMET_HEDEF_SECENEKLERI.map((h) => (
              <button
                key={h.value}
                type="button"
                aria-pressed={hizmetHedefiSecili(h.value)}
                onClick={() => hizmetHedefiDegistir(h.value)}
                className={`rounded-full border px-3.5 py-1.5 text-sm transition ${
                  hizmetHedefiSecili(h.value)
                    ? "border-orange-500 bg-orange-50 text-orange-700"
                    : "border-gray-200 bg-white text-gray-600 hover:border-orange-300"
                }`}
              >
                {h.label}
              </button>
            ))}
          </div>
        </div>
      </Bolum>
      )}

      {(!wizardAktif || wizardAdim === 3) && (
        <>
          <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5 text-sm text-blue-900">
            Programlara özel sorular burada değil, sonuç ekranında ilgili programın kartına tıklayınca çıkacak —
            şimdi sadece genel bilgileri doldurmanız yeterli.
          </div>

          <Bolum baslik="3. İletişim Bilgileri" aciklama="Sonuçları görebilmek ve gerekirse detaylı değerlendirme için sizinle iletişime geçebilmemiz için gereklidir.">
            <div className="grid gap-5 sm:grid-cols-2">
              <Metin etiket="Ad Soyad" deger={g.iletisimAdSoyad} onChange={(v) => set("iletisimAdSoyad", v)} zorunlu />
              <Metin etiket="E-posta" tip="email" deger={g.iletisimEposta} onChange={(v) => set("iletisimEposta", v)} zorunlu />
              <Metin etiket="Telefon" tip="tel" deger={g.iletisimTelefon} onChange={(v) => set("iletisimTelefon", v)} />
            </div>
            <label className="mt-5 block">
              <Etiket>Eklemek istediğiniz bir şey var mı? (opsiyonel)</Etiket>
              <textarea
                value={g.ekAciklama ?? ""}
                onChange={(e) => set("ekAciklama", e.target.value)}
                rows={3}
                placeholder="Yukarıdaki sorulara sığmayan bir durum, özel bir hedefiniz veya sormak istediğiniz bir şey varsa buraya yazabilirsiniz."
                className={girdiSinifi}
              />
            </label>
            <label className="mt-5 flex items-start gap-2.5 text-sm text-gray-600">
              <input
                type="checkbox"
                checked={kvkkOnay}
                onChange={(e) => setKvkkOnay(e.target.checked)}
                className="mt-0.5 h-4 w-4 rounded border-gray-300 accent-orange-500"
              />
              <span>
                Kişisel verilerimin bu ön analiz kapsamında işlenmesine ilişkin{" "}
                <Link href="/gizlilik-politikasi" target="_blank" className="font-semibold text-orange-600 hover:underline">
                  KVKK Aydınlatma Metni
                </Link>
                &apos;ni okudum, onaylıyorum.
              </span>
            </label>
          </Bolum>
        </>
      )}

      {hata && <p role="alert" className="rounded-lg bg-red-50 p-3 text-sm text-red-700">{hata}</p>}

      {wizardAktif ? (
        <div className="flex items-center justify-between gap-3">
          {wizardAdim > 1 ? (
            <button
              type="button"
              onClick={() => {
                setWizardAdim((a) => (a === 3 ? 2 : 1));
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="rounded-xl border border-gray-300 px-6 py-3.5 font-semibold text-[#071A2F] transition hover:border-orange-400"
            >
              ← Geri
            </button>
          ) : (
            <span />
          )}
          {wizardAdim < 3 ? (
            <button
              type="button"
              onClick={() => {
                setWizardAdim((a) => (a === 1 ? 2 : 3));
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="rounded-xl bg-orange-500 px-8 py-3.5 font-semibold text-white transition hover:bg-orange-600"
            >
              Devam Et →
            </button>
          ) : (
            <button
              type="submit"
              disabled={submitting}
              className="rounded-xl bg-orange-500 px-8 py-3.5 font-semibold text-white transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {submitting ? "Analiz ediliyor…" : "Uygunluk Analizini Görüntüle"}
            </button>
          )}
        </div>
      ) : (
        <button
          type="submit"
          disabled={submitting}
          className="w-full rounded-xl bg-orange-500 px-6 py-4 text-lg font-semibold text-white transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {submitting ? "Analiz ediliyor…" : "Bilgileri Güncelle ve Sonuçlara Dön"}
        </button>
      )}
    </form>
  );
}

// Sonuç kartı "belirsiz" durumdaysa, o programa özel eksik soruları kartın
// içinde gösterir. Şirket Bilgileri/huni soruları burada tekrar sorulmaz —
// yalnızca o programa özgü Katman 2 alanları.
// KOBİ ölçeği (çalışan sayısı + yıllık ciro/bilanço) birden fazla programda
// kriter olarak kontrol ediliyor. Bu alanlar zaten Şirket Bilgileri'nde
// sorulduğu için burada TEKRAR "eksik" gibi görünmesin diye: doluysa salt
// okunur bir onay satırı, boşsa (kullanıcı Bölüm 1'de atlamışsa) aynı
// state anahtarına bağlı düzenlenebilir alan gösterir — Bölüm 1'e
// dönmeye gerek kalmaz, buradan girilen değer oraya da yansır.
function KobiOlcegiAlanlari({ g, set }: { g: Girdi; set: (k: string, v: string) => void }) {
  const calisanDolu = !!g.calisanSayisi;
  const ciroDolu = !!(g.yillikNetSatisHasilatiTl || g.maliBilancoTl);
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      {calisanDolu ? (
        <div className="rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-800">
          ✓ Çalışan sayınız: <strong>{g.calisanSayisi}</strong> — kriter açısından değerlendirildi.
        </div>
      ) : (
        <CalisanSayisiAlani deger={g.calisanSayisi} onChange={(v) => set("calisanSayisi", v)} />
      )}
      {ciroDolu ? (
        <div className="rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-800">
          ✓ Yıllık ciro/bilanço bilginiz alındı — kriter açısından değerlendirildi.
        </div>
      ) : (
        <Tutar etiket="Yıllık Net Satış Hasılatı" deger={g.yillikNetSatisHasilatiTl} onChange={(v) => set("yillikNetSatisHasilatiTl", v)} />
      )}
    </div>
  );
}

function ProgramSorulari({ programId, g, set }: { programId: string; g: Girdi; set: (k: string, v: string) => void }) {
  switch (programId) {
    case "kosgeb-is-gelistirme":
      return (
        <div className="grid gap-5 sm:grid-cols-2">
          <EvetHayir etiket="KOSGEB Veri Tabanı'na kayıtlı mı?" deger={g.kosgebVeriTabaniKayitliMi} onChange={(v) => set("kosgebVeriTabaniKayitliMi", v)} />
          <EvetHayir etiket="İleri girişimci eğitimi tamamlandı mı?" deger={g.ileriGirisimciEgitimiTamamlandiMi} onChange={(v) => set("ileriGirisimciEgitimiTamamlandiMi", v)} />
          <Sayi etiket="Girişimcinin ortaklık payı (%)" deger={g.ortaklikPayiYuzde} onChange={(v) => set("ortaklikPayiYuzde", v)} />
          <EvetHayir etiket="Girişimci münferit temsile yetkili mi?" deger={g.girisimciMunferitTemsilYetkisiVarMi} onChange={(v) => set("girisimciMunferitTemsilYetkisiVarMi", v)} />
          <EvetHayir etiket="İş Geliştirme Desteği (veya alternatifi Faiz/Kâr Payı Desteği) daha önce kullanıldı mı? (İş Kurma Desteği ayrı, bunu etkilemez)" deger={g.isGelistirmeDestegiDahaOnceKullanildiMi} onChange={(v) => set("isGelistirmeDestegiDahaOnceKullanildiMi", v)} />
          <EvetHayir etiket="İmalat/üretim sektöründe mi faaliyet gösteriyorsunuz?" deger={g.imalatciMi} onChange={(v) => set("imalatciMi", v)} />
        </div>
      );
    case "kosgeb-kapasite-gelistirme":
      return (
        <>
          <KobiOlcegiAlanlari g={g} set={set} />
          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            <EvetHayir etiket="Bu program daha önce kullanıldı mı?" deger={g.kapasiteProgramiDahaOnceKullanildiMi} onChange={(v) => set("kapasiteProgramiDahaOnceKullanildiMi", v)} />
            <EvetHayir
              etiket="Başvurunuz dijital dönüşüm yatırımı track'inde mi? (Hayır ise genel ölçek büyütme track'i varsayılır)"
              deger={g.kapasiteDijitalDonusumTrackiMi}
              onChange={(v) => set("kapasiteDijitalDonusumTrackiMi", v)}
            />
            {g.kapasiteDijitalDonusumTrackiMi === "evet" && (
              <EvetHayir
                etiket="Dijital dönüşüm/olgunluk değerlendirme raporunuz var mı?"
                deger={g.ddxRaporuVarMi}
                onChange={(v) => set("ddxRaporuVarMi", v)}
              />
            )}
            <EvetHayir etiket="Sanayi Sicil Belgesi var mı? (imalat için)" deger={g.sanayiSicilBelgesiVarMi} onChange={(v) => set("sanayiSicilBelgesiVarMi", v)} />
            <EvetHayir etiket="YODA raporu var mı? (imalat için)" deger={g.yodaRaporuVarMi} onChange={(v) => set("yodaRaporuVarMi", v)} />
            <Secim etiket="Hızlı büyüme muafiyeti" deger={g.hizliBuyumeMuafiyeti} onChange={(v) => set("hizliBuyumeMuafiyeti", v)} secenekler={HIZLI_BUYUME_MUAFIYET_SECENEKLERI} />
            <Tutar etiket="Talep edilen kredi tutarı" deger={g.talepEdilenKrediTutariTl} onChange={(v) => set("talepEdilenKrediTutariTl", v)} />
          </div>
          <p className="mb-2 mt-5 text-sm font-semibold text-[#071A2F]">Son 3 yıl çalışan sayısı (muafiyetiniz yoksa doldurun)</p>
          <div className="mb-4 grid grid-cols-3 gap-3">
            <Sayi etiket="1. yıl" deger={g.son3YilCalisan_1} onChange={(v) => set("son3YilCalisan_1", v)} />
            <Sayi etiket="2. yıl" deger={g.son3YilCalisan_2} onChange={(v) => set("son3YilCalisan_2", v)} />
            <Sayi etiket="3. yıl (güncel)" deger={g.son3YilCalisan_3} onChange={(v) => set("son3YilCalisan_3", v)} />
          </div>
          <p className="mb-2 text-sm font-semibold text-[#071A2F]">Son 3 yıl net satış</p>
          <div className="grid grid-cols-3 gap-3">
            <Tutar etiket="1. yıl" deger={g.son3YilNetSatis_1} onChange={(v) => set("son3YilNetSatis_1", v)} />
            <Tutar etiket="2. yıl" deger={g.son3YilNetSatis_2} onChange={(v) => set("son3YilNetSatis_2", v)} />
            <Tutar etiket="3. yıl (güncel)" deger={g.son3YilNetSatis_3} onChange={(v) => set("son3YilNetSatis_3", v)} />
          </div>
        </>
      );
    case "kosgeb-dijital-donusum":
      return (
        <div>
          <KobiOlcegiAlanlari g={g} set={set} />
          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            <EvetHayir etiket="Dijital dönüşüm/olgunluk değerlendirme raporunuz var mı?" deger={g.ddxRaporuVarMi} onChange={(v) => set("ddxRaporuVarMi", v)} />
            <EvetHayir etiket="Güncel mali yeterlilik bilginiz (bankaların paylaştığı finansal veri) var mı?" deger={g.maliKarneVarMi} onChange={(v) => set("maliKarneVarMi", v)} />
            <EvetHayir etiket="Son mali yıl Öz Kaynaklar Toplamınız pozitif mi VE son 3 mali yıldan en az birinde Faaliyet Kârınız pozitif mi?" deger={g.maliYeterlilikSaglaniyorMu} onChange={(v) => set("maliYeterlilikSaglaniyorMu", v)} />
          </div>
        </div>
      );
    case "kosgeb-yesil-sanayi":
      return (
        <div>
          <KobiOlcegiAlanlari g={g} set={set} />
          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            <Secim etiket="Projenizin teması nedir?" deger={g.yesilSanayiProjeTemasi} onChange={(v) => set("yesilSanayiProjeTemasi", v)} secenekler={YESIL_SANAYI_TEMA_SECENEKLERI} />
          </div>
        </div>
      );
    case "yatirim-tesvik-belgesi": {
      const bolge = ilinBolgesi(g.yatirimIli);
      const asgari = bolge ? yatirimAsgariTutarTl(bolge) : null;
      return (
        <div className="grid gap-5 sm:grid-cols-2">
          <Secim etiket="Yatırım İli" deger={g.yatirimIli} onChange={(v) => set("yatirimIli", v)} secenekler={YATIRIM_TESVIK_ILLER.map((il) => ({ value: il, label: il }))} />
          <div>
            <Metin etiket="Yatırım Konusu NACE Kodu" deger={g.yatirimKonusuNaceKodu} onChange={(v) => set("yatirimKonusuNaceKodu", v)} placeholder={g.naceKodu || "62.01"} />
            <p className="mt-1.5 text-xs text-gray-500">
              Şirketinizin genel NACE kodundan farklı olabilir (örn. şirketiniz ticaretle uğraşıyor ama üretim
              yatırımı yapıyorsanız). Aynıysa şirket bilgilerinizdeki kodu ({g.naceKodu || "—"}) yazabilirsiniz.
            </p>
          </div>
          <div>
            <Tutar etiket="Planlanan Sabit Yatırım Tutarı" deger={g.planlananSabitYatirimTutariTl} onChange={(v) => set("planlananSabitYatirimTutariTl", v)} />
            {asgari ? (
              <p className="mt-1.5 text-xs font-semibold text-orange-600">
                {g.yatirimIli} ({bolge}. bölge) için 2026 asgari tutar: {asgari.toLocaleString("tr-TR")} TL
              </p>
            ) : (
              <p className="mt-1.5 text-xs text-gray-500">Önce yukarıdan ili seçerseniz o bölgenin asgari tutarını burada gösteririm.</p>
            )}
          </div>
          <div>
            <Secim etiket="Yatırım Türü" deger={g.yatirimTuru} onChange={(v) => set("yatirimTuru", v)} secenekler={YATIRIM_TURU_SECENEKLERI} />
            <p className="mt-1.5 text-xs text-gray-500">
              Sadece yeni makine/ekipman almayı planlıyorsanız: kapasitenizi artıracaksa <strong>Tevsi</strong>,
              mevcut makineleri yenileyecekseniz <strong>Modernizasyon</strong> seçin — resmî kararda ayrı bir
              "makine alımı" kategorisi yok, bu ikisinden birine giriyor.
            </p>
          </div>
          <EvetHayir etiket="Dijital veya Yeşil Dönüşüm Programı kapsamında mı?" deger={g.dijitalVeyaYesilDonusumMu} onChange={(v) => set("dijitalVeyaYesilDonusumMu", v)} />
          <EvetHayir etiket="Mevcut bir tesisiniz var mı?" deger={g.mevcutTesisVarMi} onChange={(v) => set("mevcutTesisVarMi", v)} />
          <EvetHayir etiket="Yüksek veya orta-yüksek teknolojili ürün üretimi mi?" deger={g.yuksekVeyaOrtaYuksekTeknolojiUrunMu} onChange={(v) => set("yuksekVeyaOrtaYuksekTeknolojiUrunMu", v)} />
        </div>
      );
    }
    case "tubitak-1501":
    case "tubitak-1507":
    case "tubitak-1832":
      return (
        <>
          <p className="mb-4 rounded-lg bg-blue-50 px-3 py-2 text-xs text-blue-800">
            ℹ️ Aşağıdaki sorular (üretim yatırımı sorusu hariç) aynı Ar-Ge projenizle ilgili olduğu için TÜBİTAK
            1501, 1507 ve 1832 kartları arasında ortaktır — birinde verdiğiniz cevap diğerlerinde de görünür.
          </p>
          <div className="grid gap-5 sm:grid-cols-2">
            <Secim etiket="Proje niteliği" deger={g.projeNiteligi} onChange={(v) => set("projeNiteligi", v)} secenekler={PROJE_NITELIGI_SECENEKLERI} />
            {programId === "tubitak-1832" ? (
              <EvetHayir
                etiket="Proje, esas itibariyle endüstriyel ölçekte bir üretim/kapasite yatırımı mı? (pilot/demonstrasyon ölçekli ekipman alımı bu kapsamda sayılmaz)"
                deger={g.projeEndustriyelOlcekYatirimMi}
                onChange={(v) => set("projeEndustriyelOlcekYatirimMi", v)}
              />
            ) : (
              <Secim
                etiket="Projenizdeki makine/teçhizat/tesis alımlarının rolünü en iyi hangisi tanımlar?"
                deger={g.uretimYatirimNiteligi}
                onChange={(v) => set("uretimYatirimNiteligi", v)}
                secenekler={URETIM_YATIRIM_NITELIGI_SECENEKLERI}
              />
            )}
            <EvetHayir etiket="Proje ekibinde ilgili alanda lisans mezunu var mı?" deger={g.projeEkibindeLisansMezunuVarMi} onChange={(v) => set("projeEkibindeLisansMezunuVarMi", v)} />
            <Secim etiket="Ar-Ge faaliyeti nasıl yürütülüyor?" deger={g.argeFaaliyetiKaynagi} onChange={(v) => set("argeFaaliyetiKaynagi", v)} secenekler={ARGE_KAYNAGI_SECENEKLERI} />
            <Tutar etiket="Talep edilecek proje bütçesi (opsiyonel)" deger={g.talepEdilenProjeButcesiTl} onChange={(v) => set("talepEdilenProjeButcesiTl", v)} />
            <Secim etiket="Proje, TÜBİTAK'ın 2026-2028 Öncelikli Ar-Ge ve Yenilik Konuları kataloğuyla uyumlu mu?" deger={g.argeOncelikliAlanKategorisi} onChange={(v) => set("argeOncelikliAlanKategorisi", v)} secenekler={ARGE_ONCELIKLI_ALAN_SECENEKLERI} />
          </div>
          {programId === "tubitak-1507" && (
            <>
              <p className="mb-2 mt-5 text-sm font-semibold text-[#071A2F]">Yalnızca TÜBİTAK 1507 için</p>
              <div className="grid gap-5 sm:grid-cols-2">
                <Sayi etiket="TEYDEB'de hâlen bekleyen (değerlendirmede) proje sayısı" deger={g.teydebBekleyenProjeSayisi} onChange={(v) => set("teydebBekleyenProjeSayisi", v)} />
                <Sayi etiket="TEYDEB'de destek kararı verilmiş (onaylı) proje sayısı" deger={g.teydebOnayliProjeSayisi} onChange={(v) => set("teydebOnayliProjeSayisi", v)} />
                <EvetHayir etiket="Ortaklı bir başvuru mu?" deger={g.ortakliBasvuruMu} onChange={(v) => set("ortakliBasvuruMu", v)} />
                <EvetHayir etiket="Teknogirişim sermaye şirketi mi?" deger={g.teknogirisimSermayeSirketiMi} onChange={(v) => set("teknogirisimSermayeSirketiMi", v)} />
              </div>
            </>
          )}
          {programId === "tubitak-1832" && (
            <>
              <p className="mb-2 mt-5 text-sm font-semibold text-[#071A2F]">Yalnızca TÜBİTAK 1832 (Sanayide Yeşil Dönüşüm) için</p>
              <div className="grid gap-5 sm:grid-cols-2">
                <EvetHayir etiket="Proje, üretimde enerji/kaynak verimliliği, atık azaltımı veya düşük karbonlu üretim gibi somut bir yeşil dönüşüm hedefi taşıyor mu?" deger={g.projeYesilDonusumHedefliMi} onChange={(v) => set("projeYesilDonusumHedefliMi", v)} />
              </div>
            </>
          )}
        </>
      );
    case "ticaret-bakanligi-ihracat-destekleri":
      return (
        <div>
          <div className="grid gap-5 sm:grid-cols-2">
            <Secim etiket="İhracat türünüz" deger={g.ihracatTuru} onChange={(v) => set("ihracatTuru", v)} secenekler={IHRACAT_TURU_SECENEKLERI} />
            <EvetHayir etiket="İlgili İhracatçı Birliği'ne üye misiniz?" deger={g.ihracatciBirligiUyesiMi} onChange={(v) => set("ihracatciBirligiUyesiMi", v)} />
            <EvetHayir etiket="Destek Yönetim Sistemi (DYS)'ne kayıtlı mısınız?" deger={g.dysKayitliMi} onChange={(v) => set("dysKayitliMi", v)} />
          </div>
          {(g.ihracatTuru === "fiziksel_mal" || g.ihracatTuru === "her_ikisi") && (
            <>
              <p className="mb-2 mt-5 text-sm font-semibold text-[#071A2F]">Hangi faaliyetleri yapıyor veya yapmayı planlıyorsunuz?</p>
              <div className="grid gap-5 sm:grid-cols-2">
                <EvetHayir etiket="Yurt içi/dışı fuarlara katılıyor musunuz veya katılmayı planlıyor musunuz? (uçak/konaklama desteği için)" deger={g.fuarKatilimiVarMi} onChange={(v) => set("fuarKatilimiVarMi", v)} />
                <EvetHayir etiket="Yurt dışında birim/depo kiralıyor musunuz veya kiralamayı planlıyor musunuz?" deger={g.yurtDisindaBirimDepoKiralamaVarMi} onChange={(v) => set("yurtDisindaBirimDepoKiralamaVarMi", v)} />
                <EvetHayir etiket="Yurt dışında reklam/tanıtım faaliyeti yürütüyor musunuz veya yürütmeyi planlıyor musunuz?" deger={g.yurtDisindaReklamTanitimVarMi} onChange={(v) => set("yurtDisindaReklamTanitimVarMi", v)} />
                <EvetHayir etiket="Ürününüz için yurt dışında zorunlu bir sertifika/test/ruhsat alıyor musunuz veya almayı planlıyor musunuz?" deger={g.pazaraGirisBelgesiIhtiyaciVarMi} onChange={(v) => set("pazaraGirisBelgesiIhtiyaciVarMi", v)} />
                <EvetHayir etiket="Tescilli bir markanız var mı?" deger={g.markaTesciliVarMi} onChange={(v) => set("markaTesciliVarMi", v)} />
                <EvetHayir etiket="Büyük bir küresel tedarik zincirine girmeye çalışıyor musunuz veya bunu planlıyor musunuz?" deger={g.kureselTedarikZinciriVarMi} onChange={(v) => set("kureselTedarikZinciriVarMi", v)} />
                <EvetHayir etiket="Yurt dışı pazaryerleri veya kendi e-ticaret siteniz üzerinden satış yapıyor musunuz veya yapmayı planlıyor musunuz?" deger={g.eIhracatVarMi} onChange={(v) => set("eIhracatVarMi", v)} />
              </div>
            </>
          )}
        </div>
      );
    case "turquality-marka-destek":
      return (
        <div className="grid gap-5 sm:grid-cols-2">
          <Tutar etiket="Son 3 yıl ortalama ihracat" deger={g.turqualitySon3YilOrtalamaIhracatUsd} onChange={(v) => set("turqualitySon3YilOrtalamaIhracatUsd", v)} birim="$" />
          <Tutar etiket="Son 1 yıl ihracat (10M$ istisnası için, opsiyonel)" deger={g.turqualitySon1YilIhracatUsd} onChange={(v) => set("turqualitySon1YilIhracatUsd", v)} birim="$" />
          <EvetHayir etiket="Markanın yurt içi tescili var mı? (en az 1 yıl önce)" deger={g.markaYurtIciTescilVarMi} onChange={(v) => set("markaYurtIciTescilVarMi", v)} />
          <EvetHayir etiket="Markanın Madrid Protokolü ülkesinde yurt dışı tescili var mı?" deger={g.markaYurtDisiTescilVarMi} onChange={(v) => set("markaYurtDisiTescilVarMi", v)} />
          <EvetHayir etiket="Yurt dışı tescil, yurt içi tescilden önce mi yapıldı?" deger={g.markaYurtDisiTescilYurtIciTescildenOnceMi} onChange={(v) => set("markaYurtDisiTescilYurtIciTescildenOnceMi", v)} />
        </div>
      );
    case "tkdk-ipard":
      return (
        <div className="grid gap-5 sm:grid-cols-2">
          <Sayi etiket="Başvuranın yaşı (gerçek kişi başvurusuysa)" deger={g.basvuranYasi} onChange={(v) => set("basvuranYasi", v)} />
          <Secim etiket="Yatırımınız hangi IPARD III tedbirine giriyor?" deger={g.tkdkSektoru} onChange={(v) => set("tkdkSektoru", v)} secenekler={TKDK_SEKTOR_SECENEKLERI} />
          <Tutar etiket="Planlanan proje bütçesi" deger={g.planlananProjeButcesiEuro} onChange={(v) => set("planlananProjeButcesiEuro", v)} birim="€" />
        </div>
      );
    case "kosgeb-stratejik-urun":
      return (
        <div className="grid gap-5 sm:grid-cols-2">
          <Secim etiket="Sanayi ve Teknoloji Bakanlığı'na (Teknoloji Odaklı Sanayi Hamlesi) ön başvuru durumunuz nedir?" deger={g.stratejikUrunBakanlikBasvuruDurumu} onChange={(v) => set("stratejikUrunBakanlikBasvuruDurumu", v)} secenekler={STRATEJIK_URUN_BASVURU_SECENEKLERI} />
          <EvetHayir etiket="Üreteceğiniz ürün, Bakanlığın Öncelikli Ürün Listesi'nde yer alıyor mu?" deger={g.stratejikUrunOncelikliListede} onChange={(v) => set("stratejikUrunOncelikliListede", v)} />
          <EvetHayir etiket="KOSGEB Bilgi Sistemi (KBS) kaydınız aktif ve güncel mi?" deger={g.kosgebVeriTabaniKayitliMi} onChange={(v) => set("kosgebVeriTabaniKayitliMi", v)} />
          <EvetHayir etiket="Son 4 aydır işletmede istihdam edilmemiş yeni personel istihdamı planlıyor musunuz?" deger={g.yeniPersonelIstihdamPlaniVarMi} onChange={(v) => set("yeniPersonelIstihdamPlaniVarMi", v)} />
          <EvetHayir etiket="Yerli Malı Belgesi'yle alım yapmayı planlıyor musunuz?" deger={g.yerliMaliBelgesiPlaniVarMi} onChange={(v) => set("yerliMaliBelgesiPlaniVarMi", v)} />
        </div>
      );
    case "kosgeb-kuresel-rekabetcilik":
      return (
        <div className="grid gap-5 sm:grid-cols-2">
          <Secim etiket="Aşağıdaki dört kriterden hangisi işletmenizi tanımlıyor?" deger={g.kureselRekabetcilikKriteri} onChange={(v) => set("kureselRekabetcilikKriteri", v)} secenekler={KURESEL_REKABETCILIK_KRITER_SECENEKLERI} />
          {g.kureselRekabetcilikKriteri === "yuksek_teknoloji_oncelikli_urun" && (
            <EvetHayir etiket="Geçerli bir Sanayi Sicil Belgeniz var mı?" deger={g.sanayiSicilBelgesiVarMi} onChange={(v) => set("sanayiSicilBelgesiVarMi", v)} />
          )}
          <Tutar etiket="Talep etmeyi planladığınız kredi tutarı" deger={g.kureselRekabetcilikKrediTutariTl} onChange={(v) => set("kureselRekabetcilikKrediTutariTl", v)} />
          <EvetHayir etiket="Bu programdan daha önce yararlandınız mı?" deger={g.kureselRekabetcilikDahaOnceKullanildiMi} onChange={(v) => set("kureselRekabetcilikDahaOnceKullanildiMi", v)} />
        </div>
      );
    case "kosgeb-yonde":
      return (
        <div className="grid gap-5 sm:grid-cols-2">
          <Secim etiket="Hangi YÖNDE hizmetinden yararlanmak istiyorsunuz?" deger={g.yondeHizmetTuru} onChange={(v) => set("yondeHizmetTuru", v)} secenekler={YONDE_HIZMET_SECENEKLERI} />
          <EvetHayir etiket="Bu programdan daha önce yararlandınız mı?" deger={g.yondeDahaOnceYararlanildiMi} onChange={(v) => set("yondeDahaOnceYararlanildiMi", v)} />
        </div>
      );
    case "istihdami-koruma-destek-programi":
      return (
        <div className="grid gap-5 sm:grid-cols-2">
          <EvetHayir etiket="Ocak-Haziran 2026 döneminde sigortalı çalışanınız var mıydı?" deger={g.referansDonemSigortaliCalisaniVarMi} onChange={(v) => set("referansDonemSigortaliCalisaniVarMi", v)} />
          <EvetHayir etiket="Ocak-Haziran 2026 ortalama prim gün sayınızı Temmuz-Aralık 2026'da (en az 6 ay) koruyabilir misiniz?" deger={g.istihdamiKorumaTaahhutEdebilirMi} onChange={(v) => set("istihdamiKorumaTaahhutEdebilirMi", v)} />
          <EvetHayir etiket="KOBİ Bilgi Sistemi kaydınız ve beyannameniz güncel mi?" deger={g.kobiBilgiSistemiKayitGuncelMi} onChange={(v) => set("kobiBilgiSistemiKayitGuncelMi", v)} />
          <EvetHayir etiket="KOSGEB'e vadesi geçmiş (yapılandırılmamış) bir borcunuz var mı?" deger={g.kosgebVadesiGecmisBorcuVarMi} onChange={(v) => set("kosgebVadesiGecmisBorcuVarMi", v)} />
        </div>
      );
    case "arge-merkezi-statusu":
      return (
        <div className="grid gap-5 sm:grid-cols-2">
          <EvetHayir etiket="Ar-Ge Merkezi statünüz zaten var mı?" deger={g.argeMerkeziStatusuVarMi} onChange={(v) => set("argeMerkeziStatusuVarMi", v)} />
          {g.argeMerkeziStatusuVarMi !== "evet" && (
            <>
              <Sayi etiket="Tam zaman eşdeğer Ar-Ge personeli sayınız" deger={g.tamZamanEsdegerArgePersoneliSayisi} onChange={(v) => set("tamZamanEsdegerArgePersoneliSayisi", v)} />
              <EvetHayir etiket="Ar-Ge faaliyetleriniz fiziksel olarak ayrı bir birimde mi yürütülüyor?" deger={g.argeFaaliyetleriAyriBirimdeMi} onChange={(v) => set("argeFaaliyetleriAyriBirimdeMi", v)} />
            </>
          )}
        </div>
      );
    case "tasarim-merkezi-statusu":
      return (
        <div className="grid gap-5 sm:grid-cols-2">
          <EvetHayir etiket="Tasarım Merkezi statünüz zaten var mı?" deger={g.tasarimMerkeziStatusuVarMi} onChange={(v) => set("tasarimMerkeziStatusuVarMi", v)} />
          {g.tasarimMerkeziStatusuVarMi !== "evet" && (
            <>
              <Sayi etiket="Münhasıran tasarım faaliyetinde çalışan tam zaman eşdeğer personel sayınız" deger={g.tasarimPersoneliSayisiTze} onChange={(v) => set("tasarimPersoneliSayisiTze", v)} />
              <EvetHayir etiket="Tasarım faaliyetiniz fiziksel olarak ayrı, izlenebilir bir birim/alan olarak mı örgütlü?" deger={g.tasarimBirimiAyriOrganizeMi} onChange={(v) => set("tasarimBirimiAyriOrganizeMi", v)} />
            </>
          )}
        </div>
      );
    case "tubitak-1812":
      return (
        <div className="grid gap-5 sm:grid-cols-2">
          <Secim etiket="Girişim aşamanız nedir?" deger={g.girisimciSirketDurumu} onChange={(v) => set("girisimciSirketDurumu", v)} secenekler={GIRISIMCI_SIRKET_DURUMU_SECENEKLERI} />
          <EvetHayir etiket="Bir kuluçka merkezinin Faz 1 hızlandırma programını tamamladınız mı?" deger={g.kuluckaFaz1TamamlandiMi} onChange={(v) => set("kuluckaFaz1TamamlandiMi", v)} />
          <EvetHayir etiket="Hisse karşılığı (equity) yatırımı kabul ediyor musunuz?" deger={g.hisseKarsiligiYatirimKabulEdiyorMu} onChange={(v) => set("hisseKarsiligiYatirimKabulEdiyorMu", v)} />
        </div>
      );
    case "tubitak-1707":
      return (
        <div className="grid gap-5 sm:grid-cols-2">
          <EvetHayir etiket="Projeniz büyük bir firma veya kamu kurumunun (Müşteri Kuruluş) siparişi/talebi üzerine mi?" deger={g.musteriKurulusVarMi} onChange={(v) => set("musteriKurulusVarMi", v)} />
          <EvetHayir etiket="Müşteri Kuruluş ile aranızda ortaklık/sermaye/yönetim ilişkisi veya akrabalık var mı?" deger={g.musteriKurulusIliskiliTarafMi} onChange={(v) => set("musteriKurulusIliskiliTarafMi", v)} />
          <EvetHayir etiket="Müşteri Kuruluş, proje giderlerinin en az %40'ını karşılamayı taahhüt ediyor mu?" deger={g.musteriKurulusFinansmanTaahhuduVarMi} onChange={(v) => set("musteriKurulusFinansmanTaahhuduVarMi", v)} />
          <Tutar etiket="Proje bütçesi" deger={g.siparisArGeProjeButcesiTl} onChange={(v) => set("siparisArGeProjeButcesiTl", v)} />
        </div>
      );
    case "tubitak-1831":
      return (
        <div className="grid gap-5 sm:grid-cols-2">
          <EvetHayir etiket="Hizmet almayı planladığınız danışmanlık kuruluşu TÜBİTAK'ın Çözüm Ortakları listesinde mi?" deger={g.cozumOrtagiListedeMi} onChange={(v) => set("cozumOrtagiListedeMi", v)} />
          <EvetHayir etiket="Bu başvuruyu başka bir kuruluşla ortaklaşa mı yapacaksınız?" deger={g.ortakliBasvuruMu1831} onChange={(v) => set("ortakliBasvuruMu1831", v)} />
          <Sayi etiket="Bu programı daha önce kaç kez kullandınız?" deger={g.basvuru1831DahaOnceKacKezKullanildi} onChange={(v) => set("basvuru1831DahaOnceKacKezKullanildi", v)} />
          <Sayi etiket="Aynı çözüm ortağıyla kaç proje yürüttünüz?" deger={g.ayniCozumOrtagiIleKacProje} onChange={(v) => set("ayniCozumOrtagiIleKacProje", v)} />
        </div>
      );
    case "teknopark-statusu":
      return (
        <div>
          <EvetHayir etiket="Teknopark (TGB) statünüz zaten var mı?" deger={g.teknoparkStatusuVarMi} onChange={(v) => set("teknoparkStatusuVarMi", v)} />
          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            <Secim etiket="Faaliyetinizin niteliği nedir?" deger={g.teknoparkFaaliyetTuru} onChange={(v) => set("teknoparkFaaliyetTuru", v)} secenekler={TEKNOPARK_FAALIYET_TURU_SECENEKLERI} />
            {g.teknoparkStatusuVarMi === "evet" ? (
              <>
                <EvetHayir etiket="Bölge içi/dışı kazanç ayrıştırması yapılıyor mu?" deger={g.teknoparkKazancAyristirmaYapiliyorMu} onChange={(v) => set("teknoparkKazancAyristirmaYapiliyorMu", v)} />
                <EvetHayir etiket="Aynı faaliyet için Ar-Ge Merkezi veya Tasarım Merkezi teşviki de alınıyor mu?" deger={g.argeVeyaTasarimMerkeziTesvikiAyniFaaliyetIcinAliniyorMu} onChange={(v) => set("argeVeyaTasarimMerkeziTesvikiAyniFaaliyetIcinAliniyorMu", v)} />
              </>
            ) : (
              <Secim etiket="Başvuru aşamanız nedir?" deger={g.teknoparkBasvuruAsamasi} onChange={(v) => set("teknoparkBasvuruAsamasi", v)} secenekler={TEKNOPARK_BASVURU_ASAMASI_SECENEKLERI} />
            )}
          </div>
        </div>
      );
    case "kosgeb-tekmer":
      return (
        <div className="grid gap-5 sm:grid-cols-2">
          <Secim etiket="İş fikriniz TEKMER temalarıyla ne kadar örtüşüyor?" deger={g.tekmerTemaUyumu} onChange={(v) => set("tekmerTemaUyumu", v)} secenekler={TEKMER_TEMA_UYUMU_SECENEKLERI} />
          <EvetHayir etiket="Bölgenizde/hedeflediğiniz ilde faal bir TEKMER var mı?" deger={g.yakinBolgedeTekmerVarMi} onChange={(v) => set("yakinBolgedeTekmerVarMi", v)} />
          <Secim etiket="Bir TEKMER'e başvuru durumunuz nedir?" deger={g.tekmerBasvuruDurumu} onChange={(v) => set("tekmerBasvuruDurumu", v)} secenekler={TEKMER_BASVURU_DURUMU_SECENEKLERI} />
        </div>
      );
    default:
      return null;
  }
}

// Huni cevaplarına göre, kural motorunun değerlendirmediği ama alakalı
// olabilecek Koray Akdağ danışmanlık hizmetlerini önerir (site içi hub
// sayfalarına bağlanır, ayrı bir uygunluk hesabı yapılmaz).
// Motor, eksik/doğrulanması gereken alanları uyarılar dizisine tek bir
// "Eksik bilgiler: A, B, C." cümlesi olarak yazıyor (bkz. lib/destek-uygunluk/
// programlar.ts — tüm fonksiyonlarda aynı sabit önek). Bu fonksiyon o cümleyi
// ayrıştırıp madde madde gösterir; motor değişmedi, sadece sunum ayrıştırıldı.
const EKSIK_BILGI_ONEKI = "Eksik bilgiler: ";
function uyarilariAyikla(uyarilar?: string[]): { eksikKriterler: string[]; digerUyarilar: string[] } {
  if (!uyarilar) return { eksikKriterler: [], digerUyarilar: [] };
  const eksikSatiri = uyarilar.find((u) => u.startsWith(EKSIK_BILGI_ONEKI));
  const digerUyarilar = uyarilar.filter((u) => u !== eksikSatiri);
  const eksikKriterler = eksikSatiri
    ? eksikSatiri.slice(EKSIK_BILGI_ONEKI.length).replace(/\.$/, "").split(",").map((s) => s.trim()).filter(Boolean)
    : [];
  return { eksikKriterler, digerUyarilar };
}

function AdimGostergesi({ aktifAdim }: { aktifAdim: number }) {
  return (
    <div className="flex flex-wrap items-center gap-x-1 gap-y-2 text-xs font-semibold">
      {ADIMLAR.map((etiket, i) => {
        const adimNo = i + 1;
        const tamamlandi = adimNo < aktifAdim;
        const aktif = adimNo === aktifAdim;
        return (
          <div key={etiket} className="flex items-center gap-1">
            <span
              className={`flex items-center gap-1.5 rounded-full px-2.5 py-1 ${
                aktif ? "bg-[#071A2F] text-white" : tamamlandi ? "text-green-600" : "text-gray-400"
              }`}
            >
              <span>{tamamlandi ? "✓" : String(adimNo).padStart(2, "0")}</span>
              <span className="hidden sm:inline">{etiket}</span>
            </span>
            {adimNo < ADIMLAR.length && <span className="text-gray-300">→</span>}
          </div>
        );
      })}
    </div>
  );
}

function Bolum({ baslik, aciklama, children, id }: { baslik: string; aciklama?: string; children: React.ReactNode; id?: string }) {
  return (
    <section id={id} className="scroll-mt-24 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
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

// Çalışan sayısı, KOBİ ölçeğini belirleyen resmi eşiklerden (10/50/250) hangi
// tarafta olduğunuzu anlamak için soruluyor — tam sayı bilmiyorsanız aralık
// seçmeniz yeterli, alttaki kutuya da doğrudan tam sayı girebilirsiniz.
const CALISAN_ARALIKLARI = [
  { etiket: "1-9 kişi", deger: "5" },
  { etiket: "10-49 kişi", deger: "25" },
  { etiket: "50-249 kişi", deger: "100" },
  { etiket: "250+ kişi", deger: "300" },
];

function CalisanSayisiAlani({ deger, onChange }: { deger?: string; onChange: (v: string) => void }) {
  // Aralık butonu seçildiğinde, arka planda (eşik hesabı için) temsili bir sayı
  // yazılır ama bunu kullanıcıya "girdiğiniz sayı" gibi göstermeyiz — sadece
  // hangi butonun seçili olduğu vurgulanır. Kullanıcı gerçekten tam sayısını
  // biliyorsa "Tam sayıyı ben gireceğim" ile manuel moda geçebilir.
  const seciliAralik = CALISAN_ARALIKLARI.find((a) => a.deger === deger);
  const [manuelMod, setManuelMod] = useState(!!deger && !seciliAralik);

  if (!manuelMod) {
    return (
      <div>
        <Etiket>Çalışan Sayısı</Etiket>
        <div className="mb-1.5 flex flex-wrap gap-2">
          {CALISAN_ARALIKLARI.map((a) => (
            <button
              key={a.etiket}
              type="button"
              onClick={() => onChange(a.deger)}
              aria-pressed={deger === a.deger}
              className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition ${
                deger === a.deger
                  ? "border-orange-500 bg-orange-50 text-orange-700"
                  : "border-gray-200 bg-white text-gray-600 hover:border-orange-300"
              }`}
            >
              {a.etiket}
            </button>
          ))}
        </div>
        <button
          type="button"
          onClick={() => {
            // Aralık seçiliyken (temsili sayı state'te duruyor) manuel moda
            // geçerken bu sahte sayıyı temizleriz — ekranda boş görünüp
            // arka planda eski aralık değeri kalmasın.
            if (seciliAralik) onChange("");
            setManuelMod(true);
          }}
          className="text-xs font-semibold text-orange-600 hover:underline"
        >
          Tam sayıyı biliyorum, kendim gireceğim
        </button>
        <p className="mt-1.5 text-xs text-gray-500">Yalnızca 10/50/250 eşiklerinin hangi tarafında olduğunuz önemli — yaklaşık olması yeterli.</p>
      </div>
    );
  }

  return (
    <div>
      <Etiket>Çalışan Sayısı</Etiket>
      <input
        type="number"
        value={seciliAralik ? "" : deger ?? ""}
        onChange={(e) => onChange(e.target.value)}
        className={girdiSinifi}
      />
      <button
        type="button"
        onClick={() => setManuelMod(false)}
        className="mt-1.5 text-xs font-semibold text-gray-500 hover:text-orange-600 hover:underline"
      >
        ← Aralık seçmek istiyorum
      </button>
    </div>
  );
}

function Tutar({ etiket, deger, onChange, birim = "TL" }: { etiket: string; deger?: string; onChange: (v: string) => void; birim?: string }) {
  const formatted = deger ? Number(deger.replace(/[^0-9]/g, "")).toLocaleString("tr-TR") : "";
  return (
    <label className="block">
      <Etiket>{etiket}</Etiket>
      <div className="relative">
        <input
          type="text"
          inputMode="numeric"
          value={formatted}
          onChange={(e) => onChange(e.target.value.replace(/[^0-9]/g, ""))}
          className={`${girdiSinifi} pr-14`}
        />
        <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-sm font-semibold text-gray-400">{birim}</span>
      </div>
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

const butonSinifi = (secili: boolean) =>
  `rounded-xl border px-4 py-2.5 text-sm font-semibold transition ${
    secili ? "border-orange-500 bg-orange-50 text-orange-700" : "border-gray-300 bg-white text-gray-700 hover:border-orange-300"
  }`;

// 8'den fazla seçenekte buton grid kullanışsızlaşıyor (örn. 81 il) — o durumda dropdown'a düşer.
function Secim({ etiket, deger, onChange, secenekler, zorunlu }: { etiket: string; deger?: string; onChange: (v: string) => void; secenekler: { value: string; label: string }[]; zorunlu?: boolean }) {
  if (secenekler.length > 8) {
    return (
      <label className="block">
        <Etiket zorunlu={zorunlu}>{etiket}</Etiket>
        <select value={deger ?? ""} onChange={(e) => onChange(e.target.value)} required={zorunlu} className={girdiSinifi}>
          <option value="">Seçiniz</option>
          {secenekler.map((s) => <option key={s.value} value={s.value}>{s.label}</option>)}
        </select>
      </label>
    );
  }
  return (
    <div className="block sm:col-span-2">
      <Etiket zorunlu={zorunlu}>{etiket}</Etiket>
      <div className="flex flex-wrap gap-2">
        {secenekler.map((s) => (
          <button key={s.value} type="button" onClick={() => onChange(s.value)} className={butonSinifi(deger === s.value)}>
            {s.label}
          </button>
        ))}
      </div>
    </div>
  );
}

function EvetHayir({ etiket, deger, onChange, zorunlu }: { etiket: string; deger?: string; onChange: (v: string) => void; zorunlu?: boolean }) {
  return (
    <div className="block">
      <Etiket zorunlu={zorunlu}>{etiket}</Etiket>
      <div className="flex flex-wrap gap-2">
        <button type="button" onClick={() => onChange("evet")} className={butonSinifi(deger === "evet")}>Evet</button>
        <button type="button" onClick={() => onChange("hayir")} className={butonSinifi(deger === "hayir")}>Hayır</button>
        {!zorunlu && deger && (
          <button type="button" onClick={() => onChange("")} className="rounded-xl px-3 py-2.5 text-xs font-semibold text-gray-400 hover:text-gray-600">
            Temizle
          </button>
        )}
      </div>
    </div>
  );
}
