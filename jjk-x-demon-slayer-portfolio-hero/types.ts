
export enum ThemeMode {
  YUJI = 'YUJI',
  GOJO = 'GOJO',
  TANJIRO = 'TANJIRO',
  ZENITSU = 'ZENITSU',
  INOSUKE = 'INOSUKE'
}

export interface HeroContent {
  professionalTitle: string;
  techniqueSummary: string;
  actionCall: string;
  kanjiTitle: string;
}

export interface CharacterConfig {
  name: string;
  professionalRole: string;
  color: string;
  accent: string;
  kanji: string;
  techniqueName: string;
  description: string;
}
