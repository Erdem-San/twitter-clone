import { SparklesIcon } from '@heroicons/react/24/solid'
import React from 'react'
import Input from './Input'
import Post from './Post'

export default function Feed() {

  const posts = [
    {
      id: "1",
      name: "Erdem Sandıkçı",
      username: "Erdemsan",
      userImage: "https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
      img: "https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
      text: "nice view",
      timestamp: "2 min ago"
    },
    {
      id: "2",
      name: "Ramazan Sandıkçı",
      username: "Rmzsnd",
      userImage: "https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      img: "https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      text: "wow!",
      timestamp: "5 hours ago"
    },
    {
      id: "3",
      name: "Kamile Sandıkçı",
      username: "Kamramer",
      userImage: "https://images.unsplash.com/photo-1665686306574-1ace09918530?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      img: "https://images.unsplash.com/photo-1665686306574-1ace09918530?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      text: "that's nice",
      timestamp: "3 days ago"
    }
  ]


  return (
    <div className='border-l border-r border-gray-600 col-span-4 sm:col-span-3 xl:col-span-2 w-full'>
        <div className='flex sticky top-0 border-b border-gray-600 h-16 z-50 backdrop-blur-sm px-2 items-center justify-between space-x-2 text-bold'>
            <h2>Home</h2>
            <SparklesIcon className='h-8 transition duration-500 ease-in-out cursor-pointer flex items-center justify-center hover:bg-gray-200 hover:bg-opacity-30 hover:text-blue-400 rounded-full p-1'/>
        </div>
       <Input/>
       {posts.map((post)=>(
        <Post key={post.id} post={post}/>
        ))}
       
    </div>
  )
}
