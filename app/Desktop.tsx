import React from 'react'
import Topbar from '../components/topbar/Topbar'
import { wallpapers } from '@/lib'
import { themeStore } from '@/store'

const Desktop = (props: any) => {
  const dark = themeStore(state => state.dark)
  const brightness = themeStore(s => s.brightness)

  return (
    <div className="w-full h-full overflow-hidden bg-center bg-cover"
      style={{
        backgroundImage: `url(${dark ? wallpapers.night : wallpapers.day})`,
        filter: `brightness( ${(brightness as number) * 0.7 + 50}% )`,
      }}
    >
      <Topbar></Topbar>
    </div>
  )
}

export default Desktop
