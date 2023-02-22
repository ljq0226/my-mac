import { create } from 'zustand'

interface controlState {
  date: Date
  wifi: boolean
  showControlCenter: boolean
  showWifiMenu: boolean
  showAppleMenu: boolean
  wifiSwitch: (value: boolean) => void
}

const useControlStore = create<controlState>(set => ({
  date: new Date(),
  wifi: true,
  showControlCenter: false,
  showWifiMenu: false,
  showAppleMenu: false,
  wifiSwitch: value => set(state => ({ wifi: value })),
}))

export default useControlStore
