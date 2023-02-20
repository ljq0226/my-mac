import { create } from 'zustand'

interface themeState {
  dark: boolean
  brightness: number
  setDark: (value: boolean) => void
  setBrightness: (value: number) => void
}

const themeStore = create<themeState>(set => ({
  dark: false,
  brightness: 80,
  setDark: value => set(() => ({ dark: value })),
  setBrightness: value => set(() => ({ brightness: value })),
}))

export default themeStore
