import React from 'react'

export default function SidebarMenuItem({text, Icon, active}) {
  return (
    <div className='transition duration-500 ease-in-out cursor-pointer flex items-center justify-center hover:bg-gray-200 hover:bg-opacity-30 hover:text-blue-400 rounded-full xl:justify-start 
    w-[52px] xl:w-52 h-[52px] xl:h-auto p-3 space-x-3'>
        <Icon className="h-6 w-6 text-blue-400" /> <span className={`${active && "form-bold"} hidden xl:inline`}>{text}</span>
    </div>
  )
}


