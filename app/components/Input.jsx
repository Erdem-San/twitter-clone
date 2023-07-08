import React from 'react'
import { PhotoIcon, ChartBarIcon, FaceSmileIcon, CalendarDaysIcon } from '@heroicons/react/24/outline'

export default function Input() {
    return (
        <div className='p-2'>
                <section className="w-full flex">
                    <div className="mr-1">
                    <img className='rounded-full w-10 h-10' alt="user image" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhHaQdd9mUANh7_JhLInDbMAf0HTWxUBHq5Jc8kM5wyykiDPaIle9-X-cjbV_IH1NyYOcAa1zzTMO1sKt_4uyOSxXgxHDXx5kbo4mnhtLcu0zNiOENr-csyKf8i8ouO8_LsDrhF6h178kUQFlfXct11KfNgfEGUPYCPXOlZ0766t1Ly8tqR6aVPROTW/s1600/img_avatar-removebg-preview%20%281%29.png" />
                    </div>
                    <div className="flex-1">
                        <textarea className="w-full p-2 bg-transparent outline-none placeholder-gray-400 text-white resize-none" rows="4" placeholder="What's happening?"></textarea>
                        <div className="flex items-center justify-between pt-2 border-t border-gray-700">
                            <div className="flex">
                                <PhotoIcon className="h-6 w-6 mr-2 text-blue-600 hover:text-blue-400 cursor-pointer"/>
                                <ChartBarIcon className="h-6 w-6 mr-2 text-blue-600 hover:text-blue-400 cursor-pointer"/>
                                <FaceSmileIcon className="h-6 w-6 mr-2 text-blue-600 hover:text-blue-400 cursor-pointer"/>
                                <CalendarDaysIcon  className="h-6 w-6 mr-2 text-blue-600 hover:text-blue-400 cursor-pointer"/>
                            </div>
                            <div>
                                <button className="transition duration-500 ease-in-out bg-blue-500 bg-opacity-50 hover:bg-opacity-100 text-white text-opacity-50 hover:text-opacity-100 py-2 px-3 rounded-full text-base font-bold focus:outline-none">Tweet</button>
                            </div>
                        </div>
                    </div>
                </section>
        </div>
    )
}
