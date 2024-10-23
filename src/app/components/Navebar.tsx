"use client"

import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { AiOutlineCloudDownload } from "react-icons/ai";
import { FaBeer } from 'react-icons/fa';




export default function Navebar() {
  return (
  <div className='bg-white z-50 sticky top-0'>
   <header className="text-red-600 body-font font-bold  ">
  <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-red-900 mb-4 md:mb-0">
      <Image src={require("../../../public/logo7.png")}alt="logo " width={150} height={150} className='w-16'/>
    
    </a>
    
    <Image src={require("../../../public/name1.gif")}alt="name " width={200} height={200} className='w-30' />
    
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center  justify-center text-lg ">
      <Link href={"/"}className="mr-10 hover:text-blue-600 ">
      Home
      </Link>
      <Link href={"#About"} className="mr-10 hover:text-blue-600">
      About
      </Link>
      <Link href={"#Skills"}className="mr-10  hover:text-blue-600">
      Skills
      
      </Link>
      <Link href={"#project"}className="mr-10 hover:text-blue-600">
      Project
      </Link>
         <Link href={"#Contact"}className="mr-10 hover:text-blue-600">
         Contact
         
         </Link>
         
    </nav>
     <a href='/cv .pdf'>
       <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
       download CV
       <AiOutlineCloudDownload className='text-xl ml-2'/>
     </button>
       </a>
     
      </div>
   
 
       

</header>

  </div>
  )
}


