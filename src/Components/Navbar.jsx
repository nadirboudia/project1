import logo from "../assets/food-logo.png" 
import { FaCartShopping } from "react-icons/fa6"
import Darkmode from "./Darkmode"

const Navbar = () => {
  return (
    <div>
            <div className="flex shadow-md  mx-auto bg-white dark:bg-gray-900      dark:duration-300  sticky backdrop-blur-sm ">
             <div className="flex m-5 ml-20 container items-center ">
            <img src={logo} alt="" className="h-10 w-10 " />
            <span className="ml-2 dark:text-white text-black text-3xl font-bold tracking-wide">
                Quick
            </span>
            </div>
           
            <Darkmode className="" />
        
           <ul className="sm:flex justify-between items-center  ml-5 mr-10 hidden ">
          <li>
          <a href="" className=" text-black  hover:duration-300 dark:text-white inline-block py-4 px-4 dark:hover:duration-300 dark:hover:text-primary hover:text-primary text-black">Home</a>
          </li>
          <li>
          <a href="" className=" text-black  hover:duration-300 dark:text-white inline-block py-4 px-4 dark:hover:duration-300 dark:hover:text-primary hover:text-primary text-black">services</a>

          </li>
          <li>
          <a href="" className=" text-black dark:text-white inline-block py-4 px-4 hover:text-primary dark:hover:duration-300 dark:hover:text-primary hover:duration-300 text-black">Contact</a>
          </li>
          
         </ul>
            
        
            <button className="  flex hover:scale-105 duration-300  bg-gradient-to-r from-primary to-secondary text-white mr-5 my-5 px-5 items-center  rounded-full sm:hidden">
             Order
             <FaCartShopping className=" mx-1 text-xl text-white drop-shadow-sm cursor-pointer" />
             </button>
             
           
      </div>























    </div>
  )
}

export default Navbar
