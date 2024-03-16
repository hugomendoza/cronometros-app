import { create } from 'zustand'
import { ChronometersState } from '@/types'

const useChronometerStore = create<ChronometersState>()((set) => ({
  chronometers: [],
  openDrawer: false,
  editChrono: false,
  activeChrono: {
    title: '',
    description: '',
    id: '',
    colorSchema: ''
  },
  createCronometer: (by) => set((state) => ({ chronometers: [...state.chronometers, by] })),
  setOpenDrawer: (isOpen) => set(() => ({ openDrawer: isOpen })),
  editChronometer: (active) => set(() => ({ editChrono: active })),
  setActiveChrono: (id:string) => set((state) => ({ activeChrono: state.chronometers.find(chrono => chrono.id === id) }))
  // createCronometer: (by) => set((state) => ({ chronometers: state.chronometers.concat(by) }))
}))

export default useChronometerStore
