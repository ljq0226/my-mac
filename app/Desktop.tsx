import React from 'react'
import Topbar from '../components/Topbar'
import { apps, wallpapers } from '@/configs'
// import type { MacActions } from '@/types'

const Desktop = (props: any) => {
  const dark = true
  const brightness = 80

  const getAppsData = (): void => {
    let showApps = {}
    let appsZ = {}
    let maxApps = {}
    let minApps = {}
    apps.forEach((app) => {
      showApps = {
        ...showApps,
        [app.id]: app.show,
      }
      appsZ = {
        ...appsZ,
        [app.id]: 2,
      }
      maxApps = {
        ...maxApps,
        [app.id]: false,
      }
      minApps = {
        ...minApps,
        [app.id]: false,
      }
    })
  }

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
