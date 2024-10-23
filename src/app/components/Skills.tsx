 /* eslint-disable @typescript-eslint/no-unused-vars */
import Image from 'next/image';
import React from 'react'
import { CiSquareCheck } from "react-icons/ci";
import Link from 'next/link'

const Skills = () => {
  return (
    <div id='Skills'>
      
      <section className="text-gray-600 body-font bg-pink-100">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h2 className="text-xs text-blue-500 tracking-widest font-medium title-font mb-1">
            Skills
      </h2>
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-red-900">
       My Skills
      </h1>
    </div>
    <div className="flex flex-wrap -m-4">
        {/*Skills*/}
      
      <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full-100 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-red-700 text-white flex-shrink-0">
            <CiSquareCheck className='text-xl font-bold'/>
            </div>
            <h2 className="text-red-700 text-lg title-font font-medium">
              HTML
            </h2>
          </div>
          <div className="flex-grow">
            <div className='reletive h-1 w-full bg-red-700 rounded-xl'></div>
            <div className='absolute bg-red-700 h-1 rounded-xl w-[24.4%]'></div>
            <p className='font-bold text-red-700 text-right'>Good</p>
          
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full-100 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-red-700 text-white flex-shrink-0">
            <CiSquareCheck className='text-xl font-bold'/>
            </div>
            <h2 className="text-red-700 text-lg title-font font-medium">
              CSS
            </h2>
          </div>
          <div className="flex-grow">
            <div className='reletive h-1 w-full bg-red-700 rounded-xl'></div>
            <div className='absolute bg-red-700 h-1 rounded-xl w-[24.4%]'></div>
            <p className='font-bold text-red-700 text-right'>Good</p>
          
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full-100 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-red-700 text-white flex-shrink-0">
            <CiSquareCheck className='text-xl font-bold'/>
            </div>
            <h2 className="text-red-700 text-lg title-font font-medium">
              JAVA SCRIPT/TYPESCRIPT
            </h2>
          </div>
          <div className="flex-grow">
            <div className='reletive h-1 w-full bg-red-700 rounded-xl'></div>
            <div className='absolute bg-red-700 h-1 rounded-xl w-[24.4%]'></div>
            <p className='font-bold text-red-700 text-right'>Good</p>
          
          </div>
        </div>
      </div>
      
      <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full-100 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-red-700 text-white flex-shrink-0">
            <CiSquareCheck className='text-xl font-bold'/>
            </div>
            
            <h2 className="text-red-700 text-lg title-font font-medium">
          GRAPHIC DESIGNER
            </h2>
          </div>
          <div className="flex-grow">
            <div className='reletive h-1 w-full bg-red-700 rounded-xl'></div>
            <div className='absolute bg-red-700 h-1 rounded-xl w-[24.4%]'></div>
            <p className='font-bold text-red-700 text-right'>Excellent</p>
          
          </div>
          
        </div>
      </div>
      
      
         <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full-100 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-red-700 text-white flex-shrink-0">
            <CiSquareCheck className='text-xl font-bold'/>
            </div>
            <h2 className="text-red-700 text-lg title-font font-medium">
              INPAGE URDU
            </h2>
         </div>
          
          <div className="flex-grow">
            <div className='reletive h-1 w-full bg-red-700 rounded-xl'></div>
            <div className='absolute bg-red-700 h-1 rounded-xl w-[24.4%]'></div>
            <p className='font-bold text-red-700 text-right'>Excellent</p>
          
          
          </div>
          
          
          <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full-100 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full  text-white flex-shrink-0">
            <CiSquareCheck className='text-xl font-bold'/>
            </div>
            
        
            <Link href={"#Home"}>
           <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg mb-4 ">
          Home
        </button>
       
        </Link>
        
          </div>
          
        </div>
      </div>
        </div>
      </div>
        </div>
      </div>
    
  
</section>

    </div>
  )
}

export default Skills
