import React, { useState, useEffect } from 'react';
import bg from "../assets/Footer_bg.png";
import layer from "../assets/layer.png"
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Footer_New = () => {
  const [time, setTime] = useState('');
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"], // Adjust how early/late the effect starts
  });
    // Scale from 0.8 to 1.2 based on scroll
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1.6]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 1], [0, 1, 1]);
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      let hours = now.getHours();
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const seconds = now.getSeconds().toString().padStart(2, '0');
      const ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12 || 12;
      const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes}:${seconds} ${ampm}`;
      setTime(formattedTime);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative max-h-screen w-full overflow-hidden bg-white text-[]  rounded-t-3xl">
      {/* Background Image with Fixed Parallax Effect */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed', // Parallax effect
          transition: 'background-position 0.1s ease-out',
        }}
      />
       <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${layer})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        
        }}
      />

      {/* Content Layer */}
      <div className="relative z-10 flex flex-col justify-between h-full p-6">
        {/* Top Content */}
        <div className="flex flex-col sm:flex-row justify-between text-center sm:m-28 m-6">
          {/* Left Nav */}
          <div className="space-y-2 sm:text-start text-start sm:w-auto w-full z-30">
            <a href='#home'><p className="text-2xl hover:underline cursor-pointer">Home</p></a>
            <a href='#services'><p className="text-2xl hover:underline cursor-pointer">Services</p></a>
            <a href='#about-us'><p className="text-2xl hover:underline cursor-pointer">About Us</p></a>
            <a href='#blogs'><p className="text-2xl hover:underline cursor-pointer">Blogs</p></a>
          </div>

          {/* Email Subscription */}
          <div className="sm:text-left text-center max-w-xs w-full sm:mt-0 mt-6">
            <p className="text-xl mb-2">
              Get fresh updates and inspiration in your inbox.
            </p>
            <div className="border-b border-black flex items-center p-1">
              <input
                type="email"
                placeholder="Email address"
                className="bg-transparent outline-none w-full placeholder-gray-900 text-sm"
              />
              <span className="text-gray-900 ml-2">→</span>
            </div>
          </div>
        </div>

        {/* Middle Title */}
        <div className="flex-grow min-h-0 flex items-center justify-center align-text-top sm:mt-0 ">
            <motion.div
        ref={targetRef}
        style={{ scale, opacity }} className="md:text-[20vw] text-[25vw] font-extrabold leading-none text-[#222222] font-CARMINE md:mb-32">Jimmu</motion.div >
        </div>

        {/* Footer */}
        <div className="flex sm:flex-row flex-col justify-between text-xs items-center border-t border-black pt-4 sm:px-6 px-4">
          <p className="text-center sm:text-left">
            © JIMMU. {new Date().getFullYear()}. All rights reserved.  
          </p>
          <p>Developed by
          <a href="https://webmindsdesigns.com/" className="hover:underline">WebMinds</a></p>
          <div className="space-x-4 sm:mt-0 mt-4">
            <a href="#" className="hover:underline">Instagram</a>
            <a href="#" className="hover:underline">LinkedIn</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer_New;
