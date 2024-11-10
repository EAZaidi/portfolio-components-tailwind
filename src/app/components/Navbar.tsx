import React from 'react'
import { LuMenu } from "react-icons/lu";

const Navbar = () => {
  return (
    <div className='container pt-8'>
        <div className='flex justify-between items-center'>
            <div className='text-xl font-medium'>
            </div>
            
            
            
            
            <ul className='gap-10 lg:gap-16 hidden md:flex font-bold'>
                <li className='menulink'><a href="#hero">Home</a></li>
                <li className='menulink'><a href="#about">About Me</a></li>
                <li className='menulink'><a href="#projects">My Projects</a></li>
                <li className='menulink'><a href="#skills">My Skills</a></li>
                <li className='menulink'><a href="#contact">Contact Me</a></li>
            </ul>
            <LuMenu className='md:hidden' size={30}/>
        </div>
    </div>
  )
}

export default Navbar