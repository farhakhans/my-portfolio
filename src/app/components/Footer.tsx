
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { BsYoutube } from "react-icons/bs";
import { FaLinkedin } from 'react-icons/fa';


const Footer = () => {
  return (
    <div className='bg-blue-50'>
      <footer className="text-gray-600 body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
    <Image src={require("../../../public/logo7.png")}alt="logo " width={150} height={150} className='w-16'/>
      <span className="ml-3 text-xl">Farhana Ahsan Khan</span>
    </a>
    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
      © 2024 Farhana Ahsan Khan 
   
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <Link
      target='blank'
       href={"https://www.youtube.com/@fzknaatchannel"} className="text-gray-500">
       
       <BsYoutube className="text-2xl hover:text-[#ff0000]"/>
      </Link>
      </span>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <Link
      target='blank'
       href={"https://www.linkedin.com/in/farhana-khan-4a3b73262/"} className="text-blue-700">
       
       <FaLinkedin  className='text-2xl hover:text-[#2735ffa8]'/>
      </Link>
      </span>
  </div>
</footer>

    </div>
  )
}

export default Footer
