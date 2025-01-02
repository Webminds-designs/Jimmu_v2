import React from "react";
import { motion } from "framer-motion";

const AboutUs_Se01 = () => (
  <motion.section
    className="relative min-h-screen bg-[#FDF9F3] flex items-center justify-center"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
    {/* Title at the top */}
    <div className="absolute top-0 left-0 p-6 sm:p-8 z-10">
      <h1
        className="text-[48px] sm:text-[80px] md:text-[100px] lg:text-[120px] font-bold text-[#2D2D2D]"
        style={{ fontFamily: "SF_Bold" }}
      >
        About Us
      </h1>
    </div>

    {/* Mission text at the bottom left */}
    <div className="absolute bottom-0 left-0 p-6 sm:p-8 z-10">
      <h2
        className="text-[18px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-regular text-[#2D2D2D]"
        style={{ fontFamily: "SF_Regular" }}
      >
        Our Mission
      </h2>
    </div>

    {/* Guidance text at the bottom right */}
    <div className="absolute bottom-0 right-0 p-6 sm:p-8 text-right z-10">
      <h2
        className="text-[20px] sm:text-[30px] md:text-[40px] lg:text-[50px] font-regular text-[#2D2D2D]"
        style={{ fontFamily: "SF_Regular" }}
      >
        Expert guidance <br /> for life’s challenges
      </h2>
    </div>

    {/* Animated Circle in the Center */}
    <motion.div
      className="absolute w-16 sm:w-24 md:w-28 lg:w-32 h-16 sm:h-24 md:h-28 lg:h-32 bg-[#FFAA29] rounded-full z-0"
      initial={{ y: 200, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      exit={{ y: -200, opacity: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.5 }}
    />
  </motion.section>
);

export default AboutUs_Se01;