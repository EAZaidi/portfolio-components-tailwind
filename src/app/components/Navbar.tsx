"use client"
import React from 'react'
import { LuMenu } from "react-icons/lu";
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
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
            <div className='navbar-menu-icon' onClick={toggleMenu}>
            {isMenuOpen ? <LuMenu size={30}/>:<LuMenu size={30}/>}
            </div>

            {isMenuOpen && (
        <ul className={`navbar-menu ${isMenuOpen ? 'open' : '' }`}>
          <li className='menulink'>
            <a href="#hero" onClick={toggleMenu}>Home</a>
          </li>
          <li className='menulink'>
            <a href="#about" onClick={toggleMenu}>About</a>
          </li>
          <li className='menulink'>
            <a href="#projects" onClick={toggleMenu}>Projects</a>
          </li>
          <li className='menulink'>
            <a href="#skills" onClick={toggleMenu}>Skills</a>
          </li>
          <li className='menulink'>
            <a href="#contact" onClick={toggleMenu}>Contact</a>
          </li>

        </ul>
      )}
    
        </div>
    </div>
  )
}

export default Navbar