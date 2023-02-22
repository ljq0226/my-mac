import React from 'react'
import { Moon, SunOne } from '@icon-park/react'
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'

interface ControlCenterProps {
  dark: boolean
  brightness: number
  setBrightness: (value: number) => void
  setDark: (value: boolean) => void
}

interface BaseProps {
  Icon: any
}

const ControlCenter = ({ dark, setDark, brightness, setBrightness }: ControlCenterProps) => {
  const bg = dark ? 'bg-[#2d3440]/90 border-gray-500' : 'bg-white/50'

  return (
    <div className={`absolute p-3  rounded-[13px] w-80 h-96 top-7 -left-44 flex flex-col shadow ${dark ? 'bg-[#1a2133]/90 ' : 'bg-white/40'}`} >
      <div className="flex w-full ">
        <div className={`flex mr-3 rounded-[13px] border  shadow w-40 h-36 ${bg}`}>

        </div>
        <div className="flex flex-col w-40 shadow h-36">
          {/* Change Mode */}
          <div className={`flex p-3 py-4 rounded-[13px] h-16 border shadow ${bg}`}
            onClick={() => setDark(!dark)}
          >
            <div className={`w-8 h-8 py-[5px] text-center border rounded-full ${dark ? 'bg-primary' : 'bg-gray-200'}`} >
              {dark ? <Moon theme="filled" size="16" fill="#fff" /> : <SunOne theme="outline" size="16" fill="#000000" />}

            </div>
            <h2 className={`align-middle py-[5px] pl-2 font-medium text-md ${dark ? 'text-white' : 'text-black'}`} >{dark ? 'Dark Mode' : 'Light Mode'}</h2>
          </div>

          <div className='flex h-16'>
            <div></div>
            <h2>Keyboard</h2>
          </div>

        </div>

      </div>
      {/* Display */}
      <div className='flex flex-col p-2 my-2 rounded-[13px] bg-white/50'>
        <div className="flex w-full slider">
          <div className="flex items-center justify-center bg-gray-100 border-gray-300 rounded-l-full w-7 h-7">
            {/* <span className={`${icon} text-gray-500 text-xs`} /> */}
            <SunOne theme="outline" size="12" fill="#000" />
          </div>
          <Slider
            min={1}
            max={100}
            value={brightness}
            tooltip={false}
            orientation="horizontal"
            onChange={(v: number) => setBrightness(v)}
            className="w-full"
            trackClassName="bg-gray-300"
            thumbClassName="w-6 h-6 bg-white border-2 border-gray-300 rounded-full shadow-md"
          />
        </div>
      </div>
      {/* Sound */}
      <div className='flex flex-col p-2 my-2 rounded-[13px] bg-white/50'>
        <div className="flex w-full slider">
          <div className="flex items-center justify-center bg-gray-100 border-gray-300 rounded-l-full w-7 h-7">
            {/* <span className={`${icon} text-gray-500 text-xs`} /> */}
            <SunOne theme="outline" size="12" fill="#000" />
          </div>
          <Slider
            min={1}
            max={100}
            value={brightness}
            tooltip={false}
            orientation="horizontal"
            onChange={(v: number) => setBrightness(v)}
            className="w-full"
            trackClassName="bg-gray-300"
            thumbClassName="w-6 h-6 bg-white border-2 border-gray-300 rounded-full shadow-md"
          />
        </div>
      </div>

    </div >
  )
}

const Base = () => {
  return (
    <div>asd</div>
  )
}

export default ControlCenter
