import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <div>
      {/* Section 1: About Us */}
      <section className="relative h-screen bg-[#FDF9F3]">
        <div className="absolute top-0 left-0 p-8 z-10">
          <h1
            className="text-[150px] font-bold text-[#2D2D2D]"
            style={{ fontFamily: "SF Pro Display" }}
          >
            About Us
          </h1>
        </div>
        <div className="absolute bottom-0 left-0 p-8 z-10">
          <h2
            className="text-[32px] font-regular text-[#2D2D2D]"
            style={{ fontFamily: "SF Pro Display" }}
          >
            Our Mission
          </h2>
        </div>
        <div className="absolute bottom-0 right-0 p-8 text-right z-10">
          <h2
            className="text-[60px] font-regular text-[#2D2D2D]"
            style={{ fontFamily: "SF Pro Display" }}
          >
            Expert guidance for life’s challenges
          </h2>
        </div>
        <motion.div
          className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#FFAA29] rounded-full z-0"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </section>

      {/* Section 2: Insights and Guidance */}
      <section className="relative h-screen bg-[#FDF9F3] flex">
        <div className="w-1/2 relative flex items-center justify-center">
          <motion.div
            className="absolute w-full h-full bg-[#FFAA29] rounded-full z-0"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
        </div>
        <div className="w-1/2 p-8 flex flex-col justify-center z-10">
          <h2
            className="text-[48px] font-medium text-[#2D2D2D]"
            style={{ fontFamily: "SF Pro Display" }}
          >
            Providing expert insights and practical guidance to support you every step of the way.
          </h2>
          <p
            className="text-[32px] font-regular text-[#2D2D2D]"
            style={{ fontFamily: "SF Pro Display" }}
          >
            At Jimmu Global Trusted Resources, our BLOGS section is your go-to destination for expert insights,
            practical tips, and thought-provoking content. We aim to empower you with knowledge, guiding you through
            every step of your journey with care and expertise. 
            Explore a wealth of resources designed to inform, inspire, and support you.
          </p>
        </div>
      </section>

      {/* Section 3: Comprehensive Support */}
      <section className="relative h-screen bg-[#FDF9F3] grid grid-rows-2 gap-8 p-8">
        <div className="row-span-1 flex flex-col justify-center z-10">
          <h2
            className="text-[48px] font-medium text-[#2D2D2D]"
            style={{ fontFamily: "SF Pro Display" }}
          >
            Comprehensive Support
          </h2>
          <p
            className="text-[26px] font-regular text-[#2D2D2D]"
            style={{ fontFamily: "SF Pro Display" }}
          >
            We provide customized strategies to navigate the complexities of divorce, ensuring your wealth and reputation remain secure.
          </p>
        </div>
        <div className="row-span-1 flex flex-col justify-center z-10">
          <h2
            className="text-[48px] font-medium text-[#2D2D2D]"
            style={{ fontFamily: "SF Pro Display" }}
          >
            Expert Guidance
          </h2>
          <p
            className="text-[26px] font-regular text-[#2D2D2D]"
            style={{ fontFamily: "SF Pro Display" }}
          >
            Our team of experts is here to support you through every step of the process.
          </p>
        </div>
        <div className="row-span-1 flex flex-col justify-center z-10">
          <h2
            className="text-[48px] font-medium text-[#2D2D2D]"
            style={{ fontFamily: "SF Pro Display" }}
          >
            Emotional Well-being
          </h2>
          <p
            className="text-[26px] font-regular text-[#2D2D2D]"
            style={{ fontFamily: "SF Pro Display" }}
          >
            We tackle the toughest legal and financial challenges, delivering solutions that minimize stress and safeguard your future.
          </p>
        </div>
        <motion.div
          className="absolute top-0 left-0 w-1/2 h-1/2 bg-[#FFAA29] rounded-full z-0"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-[#FFAA29] rounded-full z-0"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </section>
    </div>
  );
};

export default AboutUs;