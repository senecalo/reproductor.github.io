export interface Song {
  id: number;
  title: string;
  artist: string;
  url: string; // URL for the web simulation
  cover: string;
}

export interface GenerationState {
  code: string;
  isLoading: boolean;
  error: string | null;
}

export enum PlayerState {
  PLAYING = 'PLAYING',
  PAUSED = 'PAUSED',
  STOPPED = 'STOPPED'
}