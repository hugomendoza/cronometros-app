export interface Chronometer {
  title: string;
  description: string;
  id: string;
  colorSchema: string;
}

export interface ChronometersState {
  chronometers: Chronometer[];
  openDrawer: boolean;
  editChrono: boolean;
  activeChrono: Chronometer;
  setOpenDrawer: (isOpen: boolean) => void;
  createCronometer: (by: Chronometer) => void;
  editChronometer: (active: boolean) => void;
  setActiveChrono: (id: string) => void;
}

export interface PropsTimer {
  milisegundos: number;
  segundos: number;
  minutos: number;
  horas: number;
}
