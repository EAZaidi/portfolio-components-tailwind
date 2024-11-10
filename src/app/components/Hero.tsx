import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <div id='hero' className='min-h-screen bg-no-repeat bg-[url(/IMG-20201208-WA0017.jpg)] bg-cover'
    style={{backgroundSize: "25%", backgroundPosition: "left 150px top 180px " }}>
    
    
     <Navbar />
     <div className='container grid lg:grid-cols-2 h-[calc(30vh-30px)]'></div>
      <div className='hidden lg:block'></div>
      <div className='text-[50px] sm:text-[70px] font-bold leading-tight flex justify-around items-center'>
      <div>
          <p data-aos="zoom-in">I'm</p>
          <p data-aos="zoom-in">Essa</p>
          <p data-aos="zoom-in">Abbas Zaidi</p>
          </div>
        </div>   
    </div>
  )
}

export default Hero