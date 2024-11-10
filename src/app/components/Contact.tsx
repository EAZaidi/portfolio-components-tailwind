import React from 'react'
import { GoMail } from "react-icons/go";
import { BsTelephoneInbound } from "react-icons/bs";


function Contact() {
  return (
    <div id='contact' className='pt-32 container'>
      
      <div className='grid md:grid-cols-2 gap-10'>
        
        <div className='space-y-8'>
            
            <h2 className='text-5xl' data-aos="zoom-in">Get In Touch</h2>
            <p className='text-gray-600 text-[18px] pt-2' data-aos="zoom-in">
                Drop me a line, send me a message, give me a call or simply reach out to me via email.
            </p>
            
            <div className='flex gap-3 items-start' data-aos="zoom-in">
            <GoMail size={30}/> essa.abbas11@gmail.com
            </div>
            
            <div className='flex gap-3 items-start' data-aos="zoom-in">
            <BsTelephoneInbound size={30}/> +92-343-289-6174
            </div>
        </div>
        
        <div className='space-y-8'>
            <div className='flex flex-col gap-1' data-aos="zoom-in">
                <label htmlFor="name">Name</label>
                <input type="text" 
                className='h-[40px] bg-none cursor-text text-black border border-green-700' id='name' placeholder='Your good name'/>
            </div>
            <div className='flex flex-col gap-1' data-aos="zoom-in">
                <label htmlFor="email">Email</label>
                <input type="email" 
                className='h-[40px] bg-none cursor-text text-black border border-green-700' id='email' placeholder='someone@example.com'/>
            </div>
            <div className='flex flex-col gap-1' data-aos="zoom-in">
                <label htmlFor="msg">Message</label>
                <textarea 
                className='bg-none cursor-text text-black border border-green-700' id='message' rows={8} placeholder='Your message'></textarea>
            </div>
            <button className='bg-green-700 p-2 px-6 hover:bg-green-600' data-aos="zoom-in">Send</button>
        </div>
      </div>
    </div>
  )
}

export default Contact;
