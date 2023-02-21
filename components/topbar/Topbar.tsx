import React from 'react'
import { Apple, BatteryCharge, More, Search, SwitchButton, Wifi } from '@icon-park/react'
import TopbarItem from './TopbarItem'
import { themeStore } from '@/store'

interface TopBarState {
  date: Date
  showControlCenter: boolean
  showWifiMenu: boolean
  showAppleMenu: boolean
}

const Topbar = () => {
  const dark = themeStore(state => state.dark)
  const data = new Date()
  return (
    <div className={`w-full h-8 px-2 fixed top-0 hstack 
       text-sm text-white bg-gray-700/10 backdrop-blur-2xl shadow transition
       flex  justify-between`} >
      <div className='flex justify-center w-[30px] items-center'>
        <Apple theme="filled" size="16" fill={dark ? '#000' : '#fff'} />
      </div>
      <div className="flex-1"></div>
      <div className='flex items-center justify-end h-full space-x-2 basis-1/6'>
        <TopbarItem Icon={<Wifi theme="outline" size="16" fill="#333" />}></TopbarItem>
        <TopbarItem Icon={<Search theme="outline" size="16" fill="#333" />}></TopbarItem>
        <TopbarItem Icon={<More theme="outline" size="16" fill="#333" />}></TopbarItem>
        <TopbarItem Icon={<BatteryCharge theme="outline" size="16" fill="#333" />}></TopbarItem>
        <TopbarItem Icon={<SwitchButton theme="outline" size="16" fill="#333" />}></TopbarItem>

      </div>

    </div>
  )
}

export default Topbar
