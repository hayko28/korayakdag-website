import { DestekBasvuruGirdisi, ProgramSonucu } from "./types";
import {
  kosgebIsGelistirmeDegerlendir,
  kosgebKapasiteGelistirmeDegerlendir,
  tubitak1501Degerlendir,
  tubitak1507Degerlendir,
  yatirimTesvikBelgesiDegerlendir,
} from "./programlar";

export * from "./types";
export { YATIRIM_TESVIK_ILLER } from "./yardimcilar";

export function tumProgramlariDegerlendir(girdi: DestekBasvuruGirdisi): ProgramSonucu[] {
  return [
    kosgebIsGelistirmeDegerlendir(girdi),
    kosgebKapasiteGelistirmeDegerlendir(girdi),
    yatirimTesvikBelgesiDegerlendir(girdi),
    tubitak1501Degerlendir(girdi),
    tubitak1507Degerlendir(girdi),
  ];
}
