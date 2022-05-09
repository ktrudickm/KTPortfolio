import React from 'react'
import Me from '../../images/me.jpg'

const hero = () => {
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">Hi, I'm Kendall</span>
          <span className="block text-indigo-600">Welcome to my portfolio.</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div class="mb-4 ml-3 inline-flex rounded-full shadow">
            <img src={Me} class="object-scale-down h-50 w-96 rounded-full ..." alt=""/>
        </div>
        </div>
      </div>
    </div>
  )
}

export default hero
