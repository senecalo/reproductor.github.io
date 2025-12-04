import { Song } from './types';

export const INITIAL_SONGS: Song[] = [
  {
    id: 1,
    title: "Cyberpunk City",
    artist: "AI Tunes",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3",
    cover: "https://picsum.photos/400/400?random=1"
  },
  {
    id: 2,
    title: "Neon Dreams",
    artist: "Synthwave Bot",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    cover: "https://picsum.photos/400/400?random=2"
  },
  {
    id: 3,
    title: "Digital Horizon",
    artist: "Future Beats",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    cover: "https://picsum.photos/400/400?random=3"
  }
];

export const INITIAL_PROMPT = "Crea un reproductor de música en Python usando 'pygame' y 'tkinter'. Debe incluir un botón 'Agregar' para seleccionar archivos MP3 desde el disco duro o USB, permitir reproducir, pausar, y saltar canciones. Incluye una lista de reproducción y barra de progreso.";