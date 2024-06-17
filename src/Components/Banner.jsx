import React from 'react'
import food1 from "../assets/biryani5.png"
import {GrSecure} from "react-icons/gr"
import {IoFastFood} from "react-icons/io5"
import {GiFoodTruck} from "react-icons/gi"
const Bannner = () => {
  return (
    <div className='min-h-[550px] dark:bg-gray-900 bg-white pt-10 '>
      <div className=' min-h-[400px]   grid grid-cols-1 lg:grid-cols-2 '>
      <img src={food1} className='   mx-auto justify-center lg:translate-x-1/3 pt-2 mt-4 h-[270px] w-[340px] ' />
     <div className=' mx-auto m-6 mr-12'> 
     <h1 className='text-3xl text-start ml-7  dark:text-white text-black font-bold'>Lorem ipsum dolor sit </h1>
     <p className='pt-5  ml-7 text-gray-400 text-sm'>Lorem ipsum dolor sit amet consectetur, 
     Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
     {" "} Dolorum et dolorem fugiat ipsam? Omnis voluptatibus quisquam sit ullam nam aperiam nisi facere vel, tenetur velit natus. Commodi nesciunt in quae.
     adipisicing elit. Nihil, maiores? Quae voluptate tenetur aut tempora consequatur, explicabo dolorum neque doloribus incidunt quasi magni labore soluta aliquam, molestiae perferendis quaerat numquam!</p>
     <p className='pt-5 ml-7 text-gray-400 text-sm'>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium deleniti, dolorem, perferendis sit facilis quisquam aspernatur, illo magni voluptate reiciendis voluptatibus laborum! Molestias non aliquam libero, facilis sint totam sed!
     </p>
     <div className='flex ml-6  gap-6 mt-4'>
     <div>
          <GrSecure className='text-4xl  h-20 w-20 shadow-md p-5 rounded-full bg-violet-100 dark:bg-violet-400 dark:text-white' />
        </div>
        <div>
          <IoFastFood className='text-4xl h-20 w-20 shadow-md p-5 rounded-full bg-orange-100 dark:bg-orange-400  dark:text-white' />
        </div>
        <div>
          <GiFoodTruck className='text-4xl h-20 w-20 shadow-md p-5 rounded-full bg-green-100 dark:bg-green-400  dark:text-white' />
        </div>
        <div>
        
        </div>
     </div>
     
    <button className='mt-7 ml-7 bg-gradient-to-r from-primary to-secondary text-white py-3 px-5 rounded-full shadow-md hover:scale-105 duration-200 '>
      Order Now 
      </button> 
     
     </div>
    
      
      </div>
      <div >
      <div>
       
      </div>
      </div>
    </div>
  )
}

export default Bannner
