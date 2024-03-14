import { create } from 'zustand'
import { ChronometersState } from '@/types'

const useChronometerStore = create<ChronometersState>()((set) => ({
  chronometers: [],
  openDrawer: false,
  createCronometer: (by) => set((state) => ({ chronometers: [...state.chronometers, by] })),
  setOpenDrawer: (isOpen) => set(() => ({ openDrawer: isOpen }))
  // createCronometer: (by) => set((state) => ({ chronometers: state.chronometers.concat(by) }))
}))

export default useChronometerStore
