import programlarData from "@/research/tesvik-takip/programlar.json";

export interface TesvikProgram {
  id: string;
  ad: string;
  kurum: string;
  durum: "acik" | "kapali";
  sonBasvuruTarihi: string | null;
  kaynakUrl: string;
  not: string;
}

interface ProgramlarFile {
  sonGuncelleme: string;
  programlar: TesvikProgram[];
}

const data = programlarData as ProgramlarFile;

// Kaynak tarama sırasında listeye karışan, gerçek bir program olmayan
// arayüz metinleri (ör. "Program Durumuna Göre Filtrele").
const EXCLUDED_IDS = new Set([
  "yad-turkiye-kalkinma-ve-yatirim-bankasi-program-durumuna-gore-filtrele",
]);

export function getTesvikProgramlari(): TesvikProgram[] {
  return data.programlar.filter((p) => !EXCLUDED_IDS.has(p.id) && p.ad.trim().length > 3);
}

export function getSonGuncelleme(): string {
  return data.sonGuncelleme;
}

export function getKurumListesi(programlar: TesvikProgram[]): string[] {
  return Array.from(new Set(programlar.map((p) => p.kurum))).sort();
}
