
import { request } from 'http'
import Image from 'next/image'
import React from 'react'
import { BiFullscreen } from 'react-icons/bi'
import Home from '../page'
import Link from 'next/link'

const About = () => {
  return (
    <div id='About'>
 

      <section className="text-gray-600 body-font bg-pink-100">
  <div className="container mx-auto flex px-5 py-24 items-center justify-center  flex-col">
  
    <div className="text-left lg:w-2/3 w-full">
      <h1 className="title-font sm:text-4xl text-5xl mb-5 font-medium text-red-900 py-8 text-center ">
       About me
      </h1>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <Image
        className="object-cover object-center p-3 rounded mx-auto w-[15rem]"
        alt="hero"
        width={300}
        height={300}
        src={require("../../../public/girl image.png")}
      />
      </div>

      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <Image
        className=" mr-11  w-[10rem]  "
        alt="hero"
        width={300}
        height={300}
        src={require("../../../public/flower.gif")}
      />
 
    </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <Image
        className=" mr-11  w-[25rem] -ml-4 "
        alt="hero"
        width={1000}
        height={1000}
        src={require("../../../public/name2.gif")}
      />
 
    </div>
   
      <p className="mb-5 leading-relaxed  text-justify-   ">
      I am a passionate web developer and graphic designer with a strong focus on creating visually engaging and functional digital experiences. With expertise in front-end development, I build responsive and user-friendly websites using modern technologies like HTML, CSS, JavaScript, and React. My graphic design skills complement my development work, allowing me to craft clean, aesthetic visuals. 
      I enjoy working on projects that combine creativity and technology to deliver outstanding results
      </p>
      </div>
        
   <div className="flex justify-center ml-1">
        <div className='object-left'>
        <Link href={"#Home"}>
           <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg mb-4 ">
          Home
        </button>
       </Link>
   <br></br>
        <Link href={"/cv folder/cv2.jpg"}>
           <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-4 focus:outline-none hover:bg-blue-600 rounded text-lg mb-4  ">
          View CV
        </button>
      
       </Link>
       </div>
      
        
        
        
        
      
    </div>
  </div>
</section>

    </div>
  )
}

export default About
