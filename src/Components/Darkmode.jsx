import React from 'react'
import darkPng from "../assets/website/dark-mode-button.png"
import lightPng from "../assets/website/light-mode-button.png"
import { useState ,useEffect } from 'react'


const Darkmode = () => {
const[theme , setTheme]=useState(
     localStorage.getItem("item")? localStorage.getItem("item"): "light"
);
const element =document.documentElement;

React.useEffect(() =>{
    if(theme === "dark"){
        element.classList.add("dark");
        localStorage.setItem("theme", "dark");
    }else{
        element.classList.remove("dark");
        localStorage.setItem("theme", "light")
    }
},[theme]);

        const changeTheme=()=>{
            if(theme==="light"){
                setTheme("dark")
            }else{
                setTheme("light")
            }
        }
  return (
    <div className='relative'>
        <img src={darkPng} alt=""
        onClick={changeTheme}
        className={` sm:w-[100px]  w-[120px]  pt-7 pr-2  absolute  right-0 z-10 cursor-pointer
        drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 ${theme !== "dark" ? "opacity-0" : "opacity-100"} ` }
         />
         <img src={lightPng} alt=""
        onClick={changeTheme}
        className={`  sm:w-[100px] pt-7 pr-2 w-[120px] 
        drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 `}
         />
    </div>
  )
}

export default Darkmode
