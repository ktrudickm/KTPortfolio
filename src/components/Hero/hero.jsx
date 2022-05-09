import React from 'react'
import Me from '../../images/me.jpg'

const hero = () => {
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:content-center lg:justify-center lg:justify-between">
        <div className="tracking-tight text-center text-gray-900">
          <h3 className="block text-5xl lg:text-left leading-loose font-extrabold tracking-tight text-center text-gray-900">Hi, I'm Kendall 👋🏻</h3>
          <h3 className="block text-4xl tracking-tight text-center text-gray-900 lg:text-left font-bold text-indigo-600">welcome to my portfolio!</h3>
        </div>
        <div className="mt-8 flex justify-center lg:mt-0 lg:flex-shrink-0">
          <div class="mb-4 ml-3 inline-flex rounded-full shadow">
            <img src={Me} class="object-scale-down h-50 w-96 rounded-full ..." alt=""/>
        </div>
        </div>
      </div>
    </div>
  )
}

export default hero;
