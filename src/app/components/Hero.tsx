"use client"
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import Typewriter from 'typewriter-effect';

const Hero = () => {
  return (
    
      <section className="text-balck-600 body-font bg-slate-200 ">
         
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-red-900">
    I am
        <br className="hidden lg:inline-block " />
        <Typewriter
  options={{
    strings: ['Web Developer', 'Graphic Designer'],
    autoStart: true,
    loop: true,
  }}
/>
       
      </h1>
      <div className='w-[100px] h-[2px] bg-blue-700'></div>
      <p className="mb-8 leading-relaxed px-2 text-justify mr-5 ">
      Hello! I'm a passionate web developer with a strong foundation in HTML, tailwind CSS, and typescript. I enjoy creating responsive and user-friendly websites that deliver a great experience. With experience in both front-end and back-end development, I can bring ideas to life effectively. I'm always eager to learn new technologies and improve my skills. 
      Let's connect and build something amazing together!
      </p>
      <div className="flex justify-center">
        <Link href={"#Home"}>
       
        <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Home
        </button>
        </Link>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <Image
        className="object-cover object-center rounded mx-auto w-[15rem]"
        alt="hero"
        width={300}
        height={300}
        src={require("../../../public/girl image.png")}
      />
 
    </div>
  </div>
</section>

  
  )
}

export default Hero


