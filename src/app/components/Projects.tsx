
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const Projects = () => {
  return (
    <div id='project'>
  <section className="text-green-600 body-font bg-pink-100">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-10">
      <h1 className="sm:text-3xl text-2xl font-medium title-font  text-red-900  ">
        My Projects
      </h1>
     
    </div>
    <div className="flex flex-wrap -m-5  mt-2">
      <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require("../../../public/Cv.jpg")}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
            Cv Project
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
          Cv 
            </h1>
            <p className="leading-relaxed">
           This is the project which i have created for those own  Cv Projects.
            </p>
            
       
         
          </div>
        </div>
        </div>
        
        
        <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require("../../../public/countdown.png")}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
            Countdown Projects
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
          Countdown
            </h1>
            <p className="leading-relaxed">
           This is the project which i have created for those own  Countdown Projects.
            </p>
            
       
         
          </div>
        </div>
      
     
        
          
        </div>
        <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require("../../../public/urdu image.png")}
          />
          
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-2">
          INPAGE PROJECT
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
          INPAGE URDU LANGUAGE
            </h1>
            <p className="leading-relaxed">
           This is the project which i have created for those own  Urdu Inpage Projects.
            </p>
             </div>
             
       </div>
        
        </div>
        <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require("../../../public/resumebuilder.jpg")}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
          Resume Buider Projects
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
          Resume Builder
            </h1>
            <p className="leading-relaxed">
           This is the project which i have created for those own  Resume Builder Projects.
            </p>
            
       
         
          </div>
          
        </div>
        
        </div>
        
        <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require("../../../public/herat.gif")}
          />
          
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-2">
          Graphic Designer
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
          Graphic Designer
            </h1>
            <p className="leading-relaxed">
           This is the project which i have created for those own  Graphic Designer Projects.
            </p>
             </div>
             
       </div>
        
        </div>
        
             </div>
             
             
             
       </div>
       <div className='object-center'>
       <Link href={"#Home"}>
       
       <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg ">
        
         Home
       </button>
       
       </Link>
       </div>

  
</section>


    </div>
  )
}

export default Projects
