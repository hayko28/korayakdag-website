// Başvuru öncesi tamamlanabilen şartlar (kayıt, belge, rapor, rozet...) için ortak kayıt defteri.
// Kural motoru bu tür eksiklerde programı elemez: "hizli" olanlar kartı 🟢 uygun bırakıp "başvuru
// öncesi tamamlanacaklar" listesine eklenir, "sari" (başkasının kararına bağlı/aylar süren) olanlar
// kartı 🟡 "ön hazırlık gerekli" yapar. Yapısal şartlar (ölçek, sektör, personel eşiği...) hâlâ 🔴.
// Değerlendirme fonksiyonları senkron çalıştığı için modül düzeyinde basit bir toplayıcı yeterlidir;
// index.ts her programdan önce sıfırlar, sonra sonucu uygular.
import type { ProgramSonucuTaslak } from "./types";

type Tip = "hizli" | "sari";
let kayit: Record<Tip, string[]> = { hizli: [], sari: [] };

export function hazirlikBaslat() {
  kayit = { hizli: [], sari: [] };
}

// gerekceler verilirse, hemen önce eklenen olumsuz gerekçe satırı (✓ ile yanıltmasın diye) çıkarılır.
export function hazirlikKaydet(tip: Tip, metin: string, gerekceler?: string[]) {
  if (gerekceler && gerekceler.length > 0) gerekceler.pop();
  if (!kayit[tip].includes(metin)) kayit[tip].push(metin);
}

export function hazirlikUygula(t: ProgramSonucuTaslak): ProgramSonucuTaslak {
  const { hizli, sari } = kayit;
  const hepsi = [...hizli, ...sari];
  if (hepsi.length === 0 || t.durum === "uygun_degil") return t;
  if (t.durum === "uygun" && sari.length === 0) {
    return { ...t, tamamlanacaklar: hepsi, ozet: `Başvuru şartlarını sağlıyorsunuz; başvuru öncesi tamamlanması gerekenler: ${hizli.join("; ")}.` };
  }
  if (t.durum === "uygun") {
    return { ...t, durum: "belirsiz", onHazirlikGerekli: true, tamamlanacaklar: hepsi, ozet: `Ön hazırlık gerekli: ${hepsi.join("; ")}. Tamamladığınızda başvuru yapabilirsiniz.` };
  }
  return { ...t, tamamlanacaklar: hepsi };
}
