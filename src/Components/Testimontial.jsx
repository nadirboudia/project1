import React from 'react'
import Slider from 'react-slick'
const testimonialData = [
    {
      id: 1,
      name: "Samuel",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
      img: "https://picsum.photos/101/101",
    },
    {
      id: 1,
      name: "John Doe",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
      img: "https://picsum.photos/102/102",
    },
    {
      id: 1,
      name: "Smith",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
      img: "https://picsum.photos/103/103",
    },
  ];

const Testimontial = () => {
    var settings = {
        dots: true,
        arrows: false,
        Infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplayspeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
    }
  return (
    <div className=' mx-auto dark:bg-gray-900  '>
          <div className='bg-text-center space-y-1 mb-20 max-w-[400px] mx-auto  '>
                <p className=' text-1xl  bg-clip-text text-center text-transparent bg-gradient-to-r from-primary to-secondary pt-10 '>Testimonial</p>
                <h1 className=' text-3xl font-bold dark:text-white text-center '>Testimontial</h1>
                <p className='text-xs text-gray-400 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nulla commodi error doloribus reprehenderit, alias vero odio reiciendis? Magni voluptates autem repellat praesentium aspernatur? Veniam iure quam voluptate qui et?</p>
            </div>
            <div className='grid grid-cols-1 max-w-[600px] mx-auto gap-6 '>
                    <Slider {...settings}>
                        {testimonialData.map(({id, name, text , img})=>{
                              return(
                                <div key={id} className='my-6  pb-10'>
                                    <div className='flex flex-col justify-center items-center gap-4 text-center shadow-lg mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative p-5'>
                                        <img src={img} alt=""  className=' shadow-sm shadow-orange-200 rounded-full block mx-auto '/>
                                        
                                        <p className='text-gray-500 text-sm pb-2'>{text}</p>
                                        <h1 className='text-xl font-bold  dark:text-white'>{name}</h1>
                                        <p className='text-black/20 text-9xl font-serif absolute top-0 right-0 dark:bg-gradient-to-r from-primary to-secondary bg-clip-text'>
                                                                                ,,
                                        </p>
                                    </div>


                                </div>



                              )      

                        }
                        

                        )

                        }
                    </Slider>
            </div>
    </div>
  )
}

export default Testimontial
    