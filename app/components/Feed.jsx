import { SparklesIcon } from '@heroicons/react/24/solid'
import React from 'react'

export default function Feed() {
  return (
    <div className='border-l border-r border-gray-600 col-span-4 sm:col-span-2 h-[2500px]'>
        <div className='flex sticky top-0 border-b border-gray-600 h-16 z-50 backdrop-blur-sm px-2 items-center justify-between space-x-2 text-bold'>
            <h2>Home</h2>
            <SparklesIcon className='h-8 hover:bg-gray-200 hover:text-blue-400 rounded-full p-1'/>
        </div>


        <div className='p-2'>
            lorem ipsum
        </div>
    </div>
  )
}
