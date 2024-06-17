import React from 'react'
import app_store from '../assets/app_store.png';
import play_store from "../assets/play_store.png";
import mobile_bike from "../assets/mobile_bike.gif"



const AppStore = () => {
  return (
    <div className='bg-gray-100 dark:bg-gray-800 py-14'>
      <div className='container '>
        <div className='grid md:grid-cols-2 grid-cols-1 items-center gap-4 '>
        <div className=' md:m-10 m-10 space-y-6 max-w-xl mx-auto '>
            <h1 className='text-2xl text-center sm:text-left sm:text-4xl font-semibold dark:text-gray-400 text-gray-700'>Foodly is Available for Android and IOS</h1>
            <div className='mt-7 flex flex-wrap justify-center sm:justify-start items-center '>
            <a href="#">
                <img src={app_store} alt="playstore" className='max-w-[150px] sm:max-w-[150px] md:max-w-[200px] ' />
            </a>
                
            <a href="#">
                <img src={play_store} alt="playstore" className='max-w-[150px] sm:max-w-[150px] md:max-w-[200px] ' />
            </a>
        </div>
        </div>
        <div>
            <img src={mobile_bike} alt="" className='  max-w-[300px] mx-auto rounded-md shadow-md dark:shadow-sm mt-3 dark:shadow-primary ' />
        </div>
       
        </div>

      </div>
    </div>
  )
}

export default AppStore
