import React from 'react'
import Image from 'next/image'
import SidebarMenuItem from './SidebarMenuItem'
import { HomeIcon } from '@heroicons/react/24/solid'
import {
  HashtagIcon,
  BellIcon,
  InboxIcon,
  BookmarkIcon,
  ClipboardIcon,
  UserIcon,
  EllipsisHorizontalCircleIcon,
  EllipsisHorizontalIcon
}
  from '@heroicons/react/24/outline'

export default function Sidebar() {
  return (
    <div className='hidden sm:flex sm:mr-14 xl:mr-0 p-4'>
      <div className='fixed xl:items-start min-h-screen flex flex-col justify-between'>
        {/* Twitter Logo */}
        <div className='space-y-4'>
          <Image
            src="/logo.png"
            width={32}
            height={32}
            alt="Logo"
            className='ml-3'
          />

          {/* Menu */}

          <SidebarMenuItem active text="Home" Icon={HomeIcon} />
          <SidebarMenuItem text="Explore" Icon={HashtagIcon} />
          <SidebarMenuItem text="Notifications" Icon={BellIcon} />
          <SidebarMenuItem text="Message" Icon={InboxIcon} />
          <SidebarMenuItem text="Bookmarks" Icon={BookmarkIcon} />
          <SidebarMenuItem text="Lists" Icon={ClipboardIcon} />
          <SidebarMenuItem text="Profile" Icon={UserIcon} />
          <SidebarMenuItem text="More" Icon={EllipsisHorizontalCircleIcon} />

          {/* Button */}

          <button className='transition duration-500 ease-in-out bg-blue-400 text-white rounded-full w-56 h-12 shadow-md hover:brightness-15 text-lg hidden xl:inline'>Tweet</button>
        </div>

        {/* Mini-Profile */}
        <div className='transition duration-500 ease-in-out cursor-pointer hover:bg-gray-200 hover:bg-opacity-30 rounded-full hover:text-blue-400 hidden sm:flex space-x-3 items-center mb-5 p-3'>
          <img className='rounded-full w-10 h-10' alt="user image" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhHaQdd9mUANh7_JhLInDbMAf0HTWxUBHq5Jc8kM5wyykiDPaIle9-X-cjbV_IH1NyYOcAa1zzTMO1sKt_4uyOSxXgxHDXx5kbo4mnhtLcu0zNiOENr-csyKf8i8ouO8_LsDrhF6h178kUQFlfXct11KfNgfEGUPYCPXOlZ0766t1Ly8tqR6aVPROTW/s1600/img_avatar-removebg-preview%20%281%29.png" />
          <div className='hidden xl:inline'>
            <h4>Erdem Sandıkçı</h4>
            <p className='font-thin'>@Erdemsan</p>
          </div>
          <EllipsisHorizontalIcon className='w-8 h-8 hidden xl:inline' />
        </div>

      </div>
    </div>
  )
}
