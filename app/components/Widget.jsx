"use client";
import React from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import { useState } from 'react';
import News from './News'

export default function Widget({ newsResults, randomUserResults }) {
  const [articleNum, setArticleNum] = useState(3);
  const [randomUserNum, setRandomUserNum] = useState(3);

  // if (!newsResults) {
  //   return null; // Return null or a loading indicator if newsResults is not available yet
  // }

  return (
    <div className='hidden p-3 md:flex md:flex-col'>
       <div className="w-full sticky top-0 z-50">
        <div className="flex items-center p-3 rounded-full  relative">
          <MagnifyingGlassIcon className="h-5 z-50 text-gray-500" />
          <input
            className="absolute inset-0 rounded-full pl-11 placeholder:font-light border-gray-500 text-gray-500 focus:shadow-lg dark:focus:text-gray-300  dark:focus:bg-zinc-600 dark:bg-zinc-900 "
            type="text"
            placeholder="Search Twitter"
          />
        </div>
      </div>   
      
      <div className="text-gray-300 space-y-3  dark:bg-zinc-900 rounded-xl pt-2 mt-4 w-full ">
        <h4 className="font-bold text-xl px-4">Whats happening</h4>
          {newsResults.slice(0, articleNum).map((article) => (
            <div
              key={article.title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <News key={article.title} article={article} />
            </div>
          ))}
        <button
          onClick={() => setArticleNum(articleNum + 3)}
          className="text-blue-300 pl-4 pb-3 hover:text-blue-400"
        >
          Show more
        </button>
      </div>

      <div className="sticky top-16 text-gray-300 space-y-3  dark:bg-zinc-900 pt-2 rounded-xl w-full mt-4">
        <h4 className="font-bold text-xl px-4">Who to follow</h4>
          {randomUserResults?.slice(0, randomUserNum).map((randomUser) => (
            <div
              key={randomUser.login.username}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <div
                key={randomUser.login.username}
                className="flex items-center px-4 py-2  cursor-pointer hover:bg-zinc-700 transition duration-500 ease-out"
              >
                <img
                  className="rounded-full"
                  width="40"
                  src={randomUser.picture.thumbnail}
                  alt=""
                />
                <div className="truncate ml-4 leading-5">
                  <h4 className="font-bold hover:underline text-[14px] truncate">
                    {randomUser.login.username}
                  </h4>
                  <h5 className="text-[13px] text-gray-500 truncate">
                    {randomUser.name.first + " " + randomUser.name.last}
                  </h5>
                </div>
                <button className="ml-auto bg-black text-white rounded-full text-sm px-3.5 py-1.5 font-bold">
                  Follow
                </button>
              </div>
            </div>
          ))}
        <button
          onClick={() => setRandomUserNum(randomUserNum + 3)}
          className="text-blue-300 pl-4 pb-3 hover:text-blue-400"
        >
          Show more
        </button>
      </div>
  
    </div>
  )
}
