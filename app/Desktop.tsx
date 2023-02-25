import React from 'react'
import Topbar from '../components/topbar/Topbar'
import Dock from '../components/desktop/Dock'
import { wallpapers } from '@/lib'
import { themeStore } from '@/store'
import useMouseCorner from '@/hooks/useMouseCorner'

const Desktop = (props: any) => {
  const dark = themeStore(state => state.dark)
  const brightness = themeStore(s => s.brightness)
  // useMouseCorner((p) => {
  //   console.log(' asdad111', p)
  // })

  const handleMouseCorner = (position: string) => {
    console.log(`Mouse in ${position} corner`)
  }

  useMouseCorner(handleMouseCorner)

  return (
    <div className="w-full h-full overflow-hidden bg-center bg-cover"
      style={{
        backgroundImage: `url(${dark ? wallpapers.night : wallpapers.day})`,
        filter: `brightness( ${(brightness as number) * 0.7 + 50}% )`,
      }}
    >
      <Topbar></Topbar>

      <Dock></Dock>
    </div>
  )
}

export default Desktop
