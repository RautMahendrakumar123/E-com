import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className='h-20 border-t-2 px-10 flex flex-col bg-gray-100'>
      <div className='flex gap-8 items-center justify-center mt-3'>
        <div className='cursor-pointer'><FaInstagram size={30}/> </div>
        <div className='cursor-pointer'><FaFacebook size={30}/></div>
        <div className='cursor-pointer'><FaTwitter size={30}/></div>
        <div className='cursor-pointer'><MdEmail size={30}/></div>
      </div>
      <div className='flex gap-8 items-center justify-center mt-3'>
      <div className='font-bold cursor-pointer'>HOME</div>
     <div className='font-bold cursor-pointer'>ABOUT</div>
     <div className='font-bold cursor-pointer'>CONTACT</div>
      </div>

    </div>
  )
}

export default Footer
