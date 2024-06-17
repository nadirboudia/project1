
import { FaEnvelope } from "react-icons/fa6";
import logo from '../assets/food-logo.png'
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { IoLogoTiktok } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div className="w-full bg-gray-200 dark:bg-gray-950 ">
      <div className="bg-orangeColor flex items-center   justify-around p-10">
        <div className="flex  flex-col ">
          <h1 className="text-black dark:text-white tracking-wide font-bold text-lg">
            Join Us Now
          </h1>
          <p className="text-black dark:text-white mt-2  ">
            Join us now for searching for services or find a job
          </p>
        </div>
       
      </div>
      <div className=" py-10  text-primary px-20 ">
        <div className="flex   flex-col md:flex-row    justify-around  items-center">
          <div className="my-4 md:my-0">
            
              <div className="flex ">
              <img
                src={logo}
                className="max-w-[50px] max-h-[50px]  hover:scale-105 duration-300  "
                alt="ourBrand"
              />
              <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary  m-2 font-bold text-2xl  ">
                Quick
              </h1>
              </div>
            
          </div>
          <div className="flex  justify-between  items-center ">
            <div className="flex mx-4 justify-center items-center">
              
                {" "}
                <FaEnvelope className="text-blueColor    hover:scale-105  hover:shadow-white hover:shadow-md  rounded-full bg-orangeColor p-2 text-3xl " />
              {" "}
              <div className="ml-3 flex text-black dark:text-white text-xs flex-col ">
                <h2 className="font-semibold  whitespace-nowrap">Mail Us</h2>
                <p className="text-[10px] whitespace-nowrap">
                 n_boudia@estin.dz
                </p>
              </div>
            </div>
            <div className="flex mx-4 justify-center items-center">
            
                {" "}
                <FaPhoneAlt className="   hover:scale-105 hover:shadow-white hover:shadow-md rounded-full bg-orangeColor p-2 text-3xl " />
              
              <div className="ml-3 flex text-xs flex-col ">
                <h2 className="font-semibold whitespace-nowrap text-black dark:text-white ">Call Us</h2>
                <p className="text-[10px] whitespace-nowrap text-black dark:text-white">0542364189</p>
              </div>
            </div>
            <div className="flex   mx-4 justify-center items-center">
              
                {" "}
                <FaLocationDot className="text-blueColor     hover:scale-105 hover:shadow-white hover:shadow-md   rounded-full bg-orangeColor p-2 text-3xl " />
              {" "}
              <div className="ml-3 flex text-black dark:text-white text-xs flex-col ">
                <h2 className="font-semibold whitespace-nowrap text-black dark:text-white">Location </h2>
                <p className="text-[10px] whitespace-nowrap text-black dark:text-white">Saida ,Algeria</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-around  mt-9 border-t border-b dark:border-white  border-black  p-4 ">
          <p className="text-[12px] text-black dark:text-white items-center pt-6    hidden md:block">
            {" "}
            "Tell me what you eat, and I will tell you who you are." 
            "Cooking is all about people <br /> Food is maybe the only universal 
            thing that really has the power to bring <br /> everyone together. No matter what culture, everywhere around the world, people eat together." — Guy Fieri
          </p>
          <div className="flex flex-col  text-black dark:text-white items-center  mb-10 ml-10">
            <h1 className="text-xs hover:underline underline-offset-1 whitespace-nowrap  mb-1">
              Explore
            </h1>
            <h1 className="text-xs hover:underline underline-offset-1 whitespace-nowrap text-black dark:text-white  mb-1">
              About Us
            </h1>
            <h1 className="text-xs hover:underline text-black dark:text-white underline-offset-1 whitespace-nowrap  mb-1">
              Our Services
            </h1>
            <h1 className="text-xs hover:underline text-black dark:text-white underline-offset-1 whitespace-nowrap  mb-1">
              Our Workers
            </h1>
          </div>

          <div className="flex flex-col text-black dark:text-white items-center  mb-10 ml-10">
            <h1 className="text-xs hover:underline underline-offset-1 whitespace-nowrap  mb-1">
              Explore
            </h1>
            <h1 className="text-xs hover:underline underline-offset-1 whitespace-nowrap  mb-1">
              About Us
            </h1>
            <h1 className="text-xs hover:underline underline-offset-1 whitespace-nowrap  mb-1">
              Our Services
            </h1>
            <h1 className="text-xs hover:underline underline-offset-1 whitespace-nowrap  mb-1">
              Our Workers
            </h1>
          </div>
        </div>


        <div className="flex  items-center  justify-center gap-2       mt-7">
          
            <FaEnvelope className="text-blueColor hover:shadow-md  hover:bg-white   hover:text-red-600  hover:shadow-red-600  rounded-full p-2 bg-grayColor  lg:text-4xl  text-3xl " />
          
          
            <FaFacebook className="text-blueColor   hover:shadow-md hover:shadow-blue-700   hover:text-blue-900 hover:bg-white  rounded-full p-2 bg-grayColor text-3xl lg:text-4xl " />
          
          
            <FaInstagram className="text-blueColor hover:bg-pink-700   hover:shadow-md hover:shadow-white   hover:text-white rounded-full bg- p-2 bg-grayColor text-3xl lg:text-4xl " />
          
          
                    
            <IoLogoTiktok className="text-blueColor  hover:shadow-md hover:shadow-white  hover:text-white hover:bg-indigo-950 rounded-full p-2 bg-grayColor text-3xl lg:text-4xl " />
          
        </div>

        <p className="text-center  text-black dark:text-white mt-7 text-sm ">
          Copyright @ Quick{" "}
        </p>
      </div>
    </div>
  );
}

export default Footer;
