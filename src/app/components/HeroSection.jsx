"use client"
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

function HeroSection() {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div
         className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
           <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600"> Hello, I&apos;m {" "}</span>
          <br />
        <TypeAnimation
        sequence={[
        // Same substring at the start will only be typed out once, initially
        'RAJAT',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Web Developer',
        1000,
        
        ]}
        wrapper="span"
        speed={50}
        repeat={Infinity}
        />

          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg  mb-6 lg:text-xl">
          I&apos;m B. Tech (C.S) pre-final Year student,I am passionate building the 
          sites and learning new technologies that improves the lives of those around me.
          </p>
          <div>
            <button  className="bg-[#FFD700] hover:bg-slate-200 w-full sm:w-fit text-white py-3 px-6 rounded-full bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500 mr-4">
              Hire Me
            </button>
            <button className="bg-[#121212] py-1 px-1  rounded-full bg-gradient-to-r from-blue-500 via-primary-500 to-secondary-500 hover:bg-slate-800 w-full sm:w-fit text-white mt-3 ">
              <span className="block bg-[#121212] hover-bg-slate-800 rounded-full px-5 py-2 ">Download CV</span>
            </button>  
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/hero-image2.png"
              alt="hero image"
              className="rounded-full"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
