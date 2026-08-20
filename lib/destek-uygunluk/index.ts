import { DestekBasvuruGirdisi, ProgramSonucu } from "./types";
import {
  kosgebIsGelistirmeDegerlendir,
  kosgebKapasiteGelistirmeDegerlendir,
  kosgebArgeUrgeInovasyonDegerlendir,
  kosgebDijitalYesilDonusumDegerlendir,
  yatirimTesvikBelgesiDegerlendir,
  tubitak1501Degerlendir,
  tubitak1507Degerlendir,
  tubitak1832Degerlendir,
  ticaretBakanligiIhracatDesteklerDegerlendir,
  tkdkDegerlendir,
} from "./programlar";

export * from "./types";
export { YATIRIM_TESVIK_ILLER } from "./yardimcilar";

export function tumProgramlariDegerlendir(girdi: DestekBasvuruGirdisi): ProgramSonucu[] {
  return [
    kosgebIsGelistirmeDegerlendir(girdi),
    kosgebKapasiteGelistirmeDegerlendir(girdi),
    kosgebArgeUrgeInovasyonDegerlendir(girdi),
    kosgebDijitalYesilDonusumDegerlendir(girdi),
    yatirimTesvikBelgesiDegerlendir(girdi),
    tubitak1501Degerlendir(girdi),
    tubitak1507Degerlendir(girdi),
    tubitak1832Degerlendir(girdi),
    ticaretBakanligiIhracatDesteklerDegerlendir(girdi),
    tkdkDegerlendir(girdi),
  ];
}
