
export enum ThemeMode {
  JUJUTSU = 'JUJUTSU',
  SLAYER = 'SLAYER'
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  technique: string;
}

export interface MessageData {
  name: string;
  email: string;
  message: string;
}
