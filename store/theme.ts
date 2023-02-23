import { create } from 'zustand'

interface themeState {
  dark: boolean
  brightness: number
  sound: number
  setDark: (value: boolean) => void
  setBrightness: (value: number) => void
  setSound: (value: number) => void
}

const themeStore = create<themeState>(set => ({
  dark: false,
  brightness: 80,
  sound: 80,
  setDark: value => set(() => ({ dark: value })),
  setBrightness: value => set(() => ({ brightness: value })),
  setSound: value => set(() => ({ sound: value })),
}))

export default themeStore
