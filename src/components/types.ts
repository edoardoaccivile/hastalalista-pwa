export interface GiocoStart {
  giocoAttivo: string;
  biscottiGioco1: [];
  biscottiGioco2: [];
  biscottiGioco3: [];
  loading: boolean;
}
export interface ParolaTS {
  id: string;
  scoperta: boolean;
  parola: string;
}
export interface BiscottoTS {
  id?: string;
  indizio?: string;
  categoria?: string;
  active: boolean;
  usato: boolean;
  parole: ParolaTS[];
}
export interface BiscottoProps {
  number?: string;
  indizio?: string;
  categoria?: string;
  active: boolean;
  usato: boolean;
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

export interface GiochiProps {
  allBiscotti: BiscottoTS[];
  handleGiocoAttivo: (giocoId: string) => void;
}

export interface StatoGioco1 {
  categoriaScelta: { biscottoScelto: BiscottoTS };
  giocoInCorso: boolean;
  mostraParole: boolean;
  avanzamento: number;
}

export interface StatoGioco2 {
  avanzamento: number;
}

export interface CategoriaParolaProps {
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  number: string;
  categoria: string;
  scoperta: boolean;
}

export interface TitoloCatProps {
  categoria: string;
}
