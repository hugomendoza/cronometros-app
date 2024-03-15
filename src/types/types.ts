export interface Chronometer {
  editChronometer: boolean;
  title: string;
  description: string;
  id: string;
  running: boolean;
  minutes: number;
  hours: number;
  seconds: number;
  miliseconds: number;
  colorSchema: string;
}

export interface ChronometersState {
  chronometers: Chronometer[];
  openDrawer: boolean;
  setOpenDrawer: (isOpen: boolean) => void;
  createCronometer: (by: Chronometer) => void;
}

export interface PropsTimer {
  milisegundos: number;
  segundos: number;
  minutos: number;
  horas: number;
}
