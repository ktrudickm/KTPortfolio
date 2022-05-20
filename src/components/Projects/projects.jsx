import React from 'react'
import Soccer from '../../images/soccer.jpeg'
import Short from '../../images/shrt.png'
import Weather from '../../images/weather.jpeg'

const projects = () => {
  return (
    <>
    <div class="container my-12 mx-auto px-4 md:px-12">
    <h1 className="block tracking-tight mx-auto text-5xl mt-12 mb-8 text-center font-extrabold">Projects</h1>
        <div class="flex flex-wrap -mx-1 lg:-mx-4">
            <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 grid grid-cols-1">
                <div class="overflow-hidden rounded-lg shadow-lg grid grid-cols-1">
                    <img class="block h-auto w-full" src={Soccer} alt="soccer"></img>
                    <div class=" leading-tight px-6 p-3 md:p-4">
                        <div class="font-bold text-xl mb-2">League Tracker</div>
                    </div>
                    <div class="flex items-center justify-between leading-none p-6 md:p-4">
                        <p class="text-gray-700 text-base">
                        Full-Stack app for staying up to date with local recreational sport leagues. Ability to view team stats, player stats, and league data.
                        </p>
                    </div>
                    <div class="px-6 pt-3 pb-2">
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#React.js</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Node.js</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Axios</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#MongoDB</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Express.js</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#HTML/CSS</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Full-Stack</span>
                    </div>
                    <div className="px-5 py-5 sm:px-8 sm:py-8">
                        <div className="mt-2 text-sm">
                            <a href="https://shielded-hollows-83621.herokuapp.com/" className="font-medium text-indigo-600 hover:text-indigo-500">
                             {' '}
                             Deployed Project <span aria-hidden="true">&rarr;</span>
                            </a>
                        </div>
                        <div className="mt-2 text-sm">
                            <a href="https://github.com/ktrudickm/League_Tracker" className="font-medium text-indigo-600 hover:text-indigo-500">
                             {' '}
                             Github Repository <span aria-hidden="true">&rarr;</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 grid grid-cols-1">
                <div class="overflow-hidden rounded-lg shadow-lg grid grid-cols-1">
                    <img class="block h-auto w-full" src={Weather} alt="soccer"></img>
                    <div class="leading-tight px-6 p-3 md:p-4">
                        <div class="font-bold text-xl mb-2">Weather Dashboard</div>
                    </div>
                    <div class="flex items-center justify-between leading-none p-6 md:p-4">
                        <p class="text-gray-700 text-base">
                        Application that utilizes the OpenWeather API to allow users to search a city of their choice and view both hourly and 5-day weather data for the searched city.
                        </p>
                    </div>
                    <div class="px-6 pt-3 pb-2">
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#JavaScript</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#API</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#jQuery</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#HTML/CSS</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Backend</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Frontend</span>
                    </div>
                    <div className="px-5 py-5 sm:px-8 sm:py-8">
                        <div className="mt-2 text-sm">
                            <a href="https://ktrudickm.github.io/Weather-Dashboard/" className="font-medium text-indigo-600 hover:text-indigo-500">
                             {' '}
                             Deployed Project <span aria-hidden="true">&rarr;</span>
                            </a>
                        </div>
                        <div className="mt-2 text-sm">
                            <a href="https://github.com/ktrudickm/Weather-Dashboard" className="font-medium text-indigo-600 hover:text-indigo-500">
                             {' '}
                             Github Repository <span aria-hidden="true">&rarr;</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 grid grid-cols-1">
                <div class="overflow-hidden rounded-lg shadow-lg grid grid-cols-1">
                    <img class="block h-auto w-full" src={Short} alt="soccer"></img>
                    <div class="leading-tight px-6 p-3 md:p-4">
                        <div class="font-bold text-xl mb-2">URL Shortener</div>
                    </div>
                    <div class="flex items-center justify-between leading-none p-6 md:p-4">
                        <p class="text-gray-700 text-base">
                        URL shortening web app utilizing JavaScript, React, and shrtcode API to shorten long urls into more manageable urls.
                        </p>
                    </div>
                    <div class="px-6 pt-3 pb-2">
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#JavaScript</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#React</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Axios</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#HTML/CSS</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Backend</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Frontend</span>
                    </div>
                    <div className="px-5 py-5 sm:px-8 sm:py-8">
                        <div className="mt-2 text-sm">
                            <a href="https://ktrudickm.github.io/URL-Shortener/" className="font-medium text-indigo-600 hover:text-indigo-500">
                             {' '}
                             Deployed Project <span aria-hidden="true">&rarr;</span>
                            </a>
                        </div>
                        <div className="mt-2 text-sm">
                            <a href="https://github.com/ktrudickm/URL-Shortener" className="font-medium text-indigo-600 hover:text-indigo-500">
                             {' '}
                             Github Repository <span aria-hidden="true">&rarr;</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    </>
    


    // <>
    // <div className="max-w-7xl mx-auto pb-10 px-4 sm:px-6">
    //     <h1 className="block tracking-tight mx-auto text-5xl mt-12 mb-8 text-center font-extrabold">Projects</h1>
    //     <div className="flex flex-wrap flex-row py-6 md:justify-start md:space-x-10" >
    //         <div class="max-w-sm grow-0 h-100 w-1/3 grid rounded overflow-hidden shadow-lg sm:w-1 md:w-1/3 lg:w-1/3">
    //             <img class="w-full" src={Soccer} alt="soccer"></img>
    //             <div class="px-6 py-4">
    //                 <div class="font-bold text-xl mb-2">League Tracker</div>
    //                 <p class="text-gray-700 text-base">
    //                 Full-Stack app for staying up to date with local recreational sport leagues. Ability to view team stats, player stats, and league data.
    //                 </p>
    //             </div>
    //             <div class="px-6 pt-4 pb-2">
    //                 <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#React.js</span>
    //                 <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Node.js</span>
    //                 <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Axios</span>
    //                 <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#MongoDB</span>
    //                 <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Express.js</span>
    //                 <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#HTML/CSS</span>
    //             </div>
    //             <div className="px-5 py-2 sm:px-8 sm:py-8">
    //                     <div className="mt-2 text-sm">
    //                       <a href="https://shielded-hollows-83621.herokuapp.com/" className="font-medium text-indigo-600 hover:text-indigo-500">
    //                         {' '}
    //                         Deployed Project <span aria-hidden="true">&rarr;</span>
    //                       </a>
    //                     </div>
    //                     <div className="mt-2 text-sm">
    //                       <a href="https://github.com/ktrudickm/League_Tracker" className="font-medium text-indigo-600 hover:text-indigo-500">
    //                         {' '}
    //                         Github Repository <span aria-hidden="true">&rarr;</span>
    //                       </a>
    //                     </div>
    //                   </div>
    //         </div>
    //         <div class="max-w-sm grow-0 h-100 w-1/3 grid rounded overflow-hidden shadow-lg sm:w-1 md:w-1/3 lg:w-1/3">
    //             <img class="w-full" src={Weather} alt="soccer"></img>
    //             <div class="px-6 py-4">
    //                 <div class="font-bold text-xl mb-2">Weather Dashboard</div>
    //                 <p class="text-gray-700 text-base">
    //                     Application that utilizes the OpenWeather API to retrieve hourly and 5-day weather data for a searched city.
    //                 </p>
    //             </div>
    //             <div class="px-6 pt-4 pb-2 align-bottom">
    //                 <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#JavaScript</span>
    //                 <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#HTML/CSS</span>
    //                 <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#jQuery</span>
    //                 <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#API</span>
    //             </div>
    //             <div className="px-5 py-5 sm:px-8 sm:py-8 align-bottom">
    //                 <div className="mt-2 text-sm">
    //                     <a href="https://ktrudickm.github.io/Weather-Dashboard/" className="font-medium text-indigo-600 hover:text-indigo-500">
    //                     {' '}
    //                     Deployed Project <span aria-hidden="true">&rarr;</span>
    //                     </a>
    //                 </div>
    //                 <div className="mt-2 text-sm">
    //                     <a href="https://github.com/ktrudickm/Weather-Dashboard" className="font-medium text-indigo-600 hover:text-indigo-500">
    //                     {' '}
    //                     Github Repository <span aria-hidden="true">&rarr;</span>
    //                     </a>
    //                 </div>
    //             </div>
    //         </div>
    //         <div class="max-w-sm grow-0 h-100 w-1/3 grid rounded overflow-hidden shadow-lg sm:w-1 md:w-1/3 lg:w-1/3">
    //             <img class="w-full" src={Short} alt="soccer"></img>
    //             <div class="px-6 py-4">
    //                 <div class="font-bold text-xl mb-2">URL Shortener</div>
    //                 <p class="text-gray-700 text-base">
    //                     URL shortening web app utilizing JavaScript, React, and shrtcode API to shorten long urls into more manageable urls.
    //                 </p>
    //             </div>
    //             <div class="px-6 pt-4 pb-2 align-text-bottom">
    //                 <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#JavaScript</span>
    //                 <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#React.js</span>
    //                 <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Axios</span>
    //                 <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#HTML/CSS</span>
    //             </div>
    //             <div className="px-5 py-5 sm:px-8 sm:py-8 align-bottom">
    //                 <div className="mt-2 text-sm">
    //                     <a href="https://ktrudickm.github.io/URL-Shortener/" className="font-medium text-indigo-600 hover:text-indigo-500">
    //                     {' '}
    //                     Deployed Project <span aria-hidden="true">&rarr;</span>
    //                     </a>
    //                 </div>
    //                 <div className="mt-2 text-sm">
    //                     <a href="https://github.com/ktrudickm/URL-Shortener" className="font-medium text-indigo-600 hover:text-indigo-500">
    //                     {' '}
    //                     Github Repository <span aria-hidden="true">&rarr;</span>
    //                     </a>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // </div>
    // </>
  )
}

export default projects;