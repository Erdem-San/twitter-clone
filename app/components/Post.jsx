import React from 'react'
import Image from 'next/image'
import {EllipsisHorizontalCircleIcon, ChatBubbleOvalLeftEllipsisIcon, TrashIcon, HeartIcon, ShareIcon, ChartBarIcon} from '@heroicons/react/24/outline'

export default function Post({post}) {
  return (
    <div className=' border-b  border-gray-600'>
      
      <div className="flex cursor-pointer p-3 w-full">
      {/* user image */}
      <Image
        className="rounded-full mr-4 w-10 h-10 object-cover object-center"
        width={500}
        height={500}
        src={post.userImage}
        alt="user-img"
      />
      {/* right side */}
      <div>
        {/* Header */}

        <div className="flex items-center justify-between">
          {/* post user info */}
          <div className="flex items-center space-x-1 whitespace-nowrap">
            <h4 className="font-bold text-[15px] sm:text-[16px] hover:underline">
              {post.name}
            </h4>
            <span className="text-sm sm:text-[15px]">@{post.username} - </span>
            <span className="text-sm sm:text-[15px] hover:underline">
              {post.timestamp}
            </span>
          </div>

          {/* dot icon */}
          <EllipsisHorizontalCircleIcon className="h-10 hoverEffect w-10 hover:bg-sky-100 hover:text-sky-500 p-2" />
        </div>

        {/* post text */}

        <p className="text-gray-100 text-[15px sm:text-[16px] mb-2">
          {post.text}
        </p>

        {/* post image */}

        <Image
        className="rounded-2xl min-w-full h-[400px] mr-2 object-cover object-center"
        width={540}
        height={540} 
        src={post.img} 
        alt="image" 
        />

        {/* icons */}

        <div className="flex justify-between text-gray-500 p-2">          
          <ChatBubbleOvalLeftEllipsisIcon className="h-9 w-9 hoverEffect p-2 rounded-full hover:text-red-600 hover:bg-red-100 transition duration-500 ease-in-out cursor-pointer
hover:bg-opacity-30" />
          <TrashIcon className="h-9 w-9 hoverEffect p-2 rounded-full hover:text-red-600 hover:bg-red-100 transition duration-500 ease-in-out cursor-pointer
hover:bg-opacity-30" />
          <HeartIcon className="h-9 w-9 hoverEffect p-2 rounded-full hover:text-red-600 hover:bg-red-100 transition duration-500 ease-in-out cursor-pointer
hover:bg-opacity-30" />
          <ShareIcon className="h-9 w-9 hoverEffect p-2 rounded-full hover:text-sky-500 hover:bg-sky-100 transition duration-500 ease-in-out cursor-pointer
hover:bg-opacity-30" />
          <ChartBarIcon className="h-9 w-9 hoverEffect p-2 rounded-full hover:text-sky-500 hover:bg-sky-100 transition duration-500 ease-in-out cursor-pointer
hover:bg-opacity-30" />
        </div>
      </div>
    </div>
    
    </div>
  )
}
