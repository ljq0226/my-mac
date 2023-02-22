import React from 'react'
import { Apple, BatteryCharge, CloseWifi, More, Search, SwitchButton, Wifi } from '@icon-park/react'
import { shallow } from 'zustand/shallow'
import Applemenu from '../menu/Applemenu'
import WifiMenu from '../menu/WifiMenu'
import ControlCenter from '../menu/ControlCenter'
import TopbarItem from './TopbarItem'
import dayjs from '@/configs/day'
import { themeStore, useControlStore } from '@/store'
interface TopBarState {
  date: Date
  showControlCenter: boolean
  showWifiMenu: boolean
  showAppleMenu: boolean
}

const Topbar = () => {
  const [dark, setDark, brightness, setBrightness] = themeStore(state => [state.dark, state.setDark, state.brightness, state.setBrightness], shallow)

  const [wifi, wifiSwitch, showWifiMenu, wifiMenuSwitch, showAppleMenu, appleMenuSwitch, showControlCenter, controlCenterSwitch]
    = useControlStore(state =>
      [state.wifi, state.wifiSwitch, state.showWifiMenu, state.wifiMenuSwitch, state.showAppleMenu, state.appleMenuSwitch, state.showControlCenter, state.controlCenterSwitch], shallow,
    )

  const date = new Date()
  return (
    <div className={`w-full h-8 px-2 fixed top-0  
       text-sm text-white bg-gray-700/10 backdrop-blur-2xl shadow transition
       flex  justify-between`} >
      {/* Apple Icon  */}
      <div onClick={() => {
        appleMenuSwitch(!showAppleMenu)
      }} className=' flex justify-center w-[30px] items-center  relative  hover:bg-gray-400 '>

        <TopbarItem Icon={<Apple theme="filled" size="16" fill={dark ? '#000' : '#fff'} />}></TopbarItem>
        {/* Apple Menu Switch */}
        {showAppleMenu && <Applemenu appleMenuSwitch={appleMenuSwitch} />}

      </div>
      {/* flex empty block */}
      <div className="flex-1"></div>
      {/* right icons list  */}
      <div className='flex items-center justify-end h-full space-x-2 '>
        <div className='relative'>
          {wifi
            ? <TopbarItem clickHandler={wifiMenuSwitch} value={showWifiMenu} Icon={<Wifi theme="outline" size="16" fill={dark ? '#000' : '#fff'} />}></TopbarItem>
            : <TopbarItem Icon={<CloseWifi theme="outline" size="16" fill={dark ? '#000' : '#fff'} />}></TopbarItem>
          }
          {showWifiMenu && <WifiMenu wifi={wifi} wifiSwitch={wifiSwitch} wifiMenuSwitch={wifiMenuSwitch} dark={dark} />}
        </div>

        <TopbarItem Icon={<Search theme="outline" size="16" fill={dark ? '#000' : '#fff'} />}></TopbarItem>
        <TopbarItem Icon={<More theme="outline" size="16" fill={dark ? '#000' : '#fff'} />}></TopbarItem>
        <TopbarItem Icon={<BatteryCharge theme="outline" size="16" fill={dark ? '#000' : '#fff'} />}></TopbarItem>

        <div className='relative'>
          <TopbarItem Icon={<SwitchButton theme="outline" size="16" fill={dark ? '#000' : '#fff'} />}></TopbarItem>
          {showControlCenter && <ControlCenter dark={dark} setDark={setDark} brightness={brightness} setBrightness={setBrightness} />}

        </div>

        <div className={dark ? 'text-black' : ''}>{dayjs(date).format('MMMD ddd  HH:mm')}</div>
      </div>

    </div>
  )
}

export default Topbar
