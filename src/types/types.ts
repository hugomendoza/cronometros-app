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
  createCronometer: (by: Chronometer) => void;
}
