import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className='h-20 border-t-2 px-10 flex flex-col bg-gray-100'>
      <div className='flex gap-8 items-center justify-center mt-3'>
        <div><FaInstagram/> </div>
        <div><FaFacebook/></div>
        <div><FaTwitter/></div>
        <div><MdEmail/></div>
      </div>
      <div className='flex gap-8 items-center justify-center mt-3'>
      <div>HOME</div>
     <div>ABOUT</div>
     <div>CONTACT</div>
      </div>

    </div>
  )
}

export default Footer
