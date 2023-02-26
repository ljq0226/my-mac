import React from 'react'
import Topbar from '../components/topbar/Topbar'
import Launchpad from '../components/desktop/Launchpad'
import { wallpapers } from '@/lib'
import { themeStore } from '@/store'
import useMouseCorner from '@/hooks/useMouseCorner'
import Dock from '@/components/desktop/Dock'
const Desktop = (props: any) => {
  const dark = themeStore(state => state.dark)
  const brightness = themeStore(s => s.brightness)

  const handleMouseCorner = (show: boolean) => {
  }

  useMouseCorner(handleMouseCorner)

  return (
    <div className="flex w-full h-full overflow-hidden bg-center bg-cover felx-column"
      style={{
        backgroundImage: `url(${dark ? wallpapers.night : wallpapers.day})`,
        filter: `brightness( ${(brightness as number) * 0.7 + 50}% )`,
      }}
    >
      <Topbar></Topbar>
      {/* LaunchPad */}
      <Launchpad></Launchpad>
      {/* Dock */}
      <Dock></Dock>
    </div>
  )
}

export default Desktop
