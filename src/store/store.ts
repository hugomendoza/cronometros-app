import { create } from 'zustand'
import { ChronometersState } from '@/types'

const useChronometerStore = create<ChronometersState>()((set) => ({
  chronometers: [],
  // createCronometer: (by) => set((state) => ({ chronometers: state.chronometers.concat(by) }))
  createCronometer: (by) => set((state) => ({ chronometers: [...state.chronometers, by] }))
}))

export default useChronometerStore
