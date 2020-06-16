export interface ParolaTS {
  id: string;
  scoperta: boolean;
  parola: string;
}

export interface BiscottoTS {
  id: string;
  indizio: string;
  categoria: string;
  active: boolean;
  usato: boolean;
  parole: ParolaTS[];
}

export interface Gioco1Props {
  allBiscotti: BiscottoTS[];
  handleGiocoAttivo: (giocoId: string) => void;
}

export interface StatoGioco1 {
  categoriaScelta: { biscottoScelto: BiscottoTS };
  giocoInCorso: boolean;
  mostraParole: boolean;
  avanzamento: number;
}
