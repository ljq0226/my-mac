import React from 'react'

interface TopbarItemProps {
  Icon: React.ReactNode
}

const TopbarItem = (props: TopbarItemProps) => {
  return (
    <div className='px-1 rounded hover:bg-gray-400'>
      {props.Icon}
    </div>
  )
}

export default TopbarItem
