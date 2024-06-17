import React from 'react'
import Img2 from "../assets/biryani2.png"
const ServicesData = [
  {
    id: 1,
    img: Img2,
    name: "Biryani",
    description:
      "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet.",
  },
  {
    id: 2,
    img: Img2,
    name: "Chiken kari",
    description:
      "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet",
  },
  {
    id: 3,
    img: Img2,
    name: "Cold Cofee",
    description:
      "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet",
  },
];

const Services = () => {
  return (
    <div className='py-10 justify-center dark:bg-gray-900'>
        <div className='container justify-center items-center lg:mx-auto '>
            <div className='text-center space-y-1 mb-20 max-w-[400px] mx-auto'>
                <p className='text-1xl  bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary '>Our Services</p>
                <h1 className='text-3xl font-bold dark:text-white'>Services</h1>
                <p className='text-xs text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nulla commodi error doloribus reprehenderit, alias vero odio reiciendis? Magni voluptates autem repellat praesentium aspernatur? Veniam iure quam voluptate qui et?</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 mr-12 lg:ml-12 md:ml-8   gap-14  '>
             {
              ServicesData.map(({id,img, name ,description}) =>{
                return(
                  <div key={id } className='mx-auto ml-8 lg:m-2  group rounded-2xl bg-white dark:hover:bg-primary dark:bg-gray-800 hover:bg-primary hover:text-white duration-300 p-4 shadow-xl '>
                    <div className='h-[100px]'>
                      <img src={img} alt="" className='group-hover:scale-105 group-hover:rotate-6 duration-300
                        max-w-[200px] mx-auto block transform -translate-y-14' />
                    </div>
                    <div className='p-4 space-y-3 text-center '> 
                      <h1 className='text-xl font-bold group dark:text-white '>{name}</h1>
                      <p className='text-gray-500 text-sm line-clamp-2 group-hover:text-white'>{description}</p>
                    </div>

                  </div>
                  
                );
              }
             )
             }   
            </div>

        </div>
      
    </div>
  )
}

export default Services
