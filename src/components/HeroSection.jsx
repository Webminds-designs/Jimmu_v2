import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import hero1 from "../assets/images/hero1.png";
import hero2 from "../assets/images/hero2.png";
import hero3 from "../assets/images/hero3.png";
import Arrow1 from "../assets/images/arrow1.png";

const HeroSection = () => {
  const sectionRef = useRef(null); 
  const isInView = useInView(sectionRef, { triggerOnce: false, threshold: 0.2 }); 

  // Animation variant for the text moving upward
  const textVariant = {
    hidden: { y: "100%", opacity: 0 }, // Start below the mask
    visible: {
      y: "0%", // Fully revealed
      opacity: 1,
      transition: {
        duration: 1.5, 
        ease: [0.22, 0.61, 0.36, 1], 
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="bg-primary h-screen text-center"
    >
      <div className="max-w-4xl mx-auto pt-28 md:pt-36">
        {/* Welcome Text */}
        <div className="overflow-hidden"> 
          <motion.h2
            className="text-md text-secondary uppercase tracking-widest mb-6"
            variants={textVariant}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            Welcome to JIMMU
          </motion.h2>
        </div>

        {/* Main Heading */}
        <div className="overflow-hidden"> 
          <motion.h1
            className="text-4xl sm:text-5xl font-bold text-secondary leading-tight"
            variants={textVariant}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            We Carry Over 30 Years Of <br />
          </motion.h1>
        </div>

        <div className="flex flex-row justify-center gap-5 items-center my-6">
          <div className="overflow-hidden"> 
            <motion.h1
              className="text-4xl sm:text-5xl font-bold text-secordary"
              variants={textVariant}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              Experience
            </motion.h1>
          </div>

          <div className="flex justify-center items-center relative bg-primary">
            
            {/* First Image */}
            <motion.img
              src={hero1}
              alt="Experience 1"
              className="w-16 h-14 z-10 relative"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{
                duration: 1.4,
                ease: [0.22, 0.61, 0.36, 1],
                delay: 0.4,
              }}
            />
            {/* Second Image */}
            <motion.img
              src={hero2}
              alt="Experience 2"
              className="w-16 h-14 relative z-20 -ml-8"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{
                duration: 1.6,
                ease: [0.22, 0.61, 0.36, 1],
                delay: 0.5,
              }}
            />
            {/* Third Image */}
            <motion.img
              src={hero3}
              alt="Experience 3"
              className="w-16 h-14 relative z-20 -ml-8"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{
                duration: 1.8,
                ease: [0.22, 0.61, 0.36, 1],
                delay: 0.6,
              }}
            />
          </div>



          <div className="overflow-hidden"> 
            <motion.h1
              className="text-4xl sm:text-5xl font-bold text-secondary"
              variants={textVariant}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              So You Can
            </motion.h1>
          </div>
        </div>

        <div className="flex flex-row justify-center gap-3 items-center md:my-4">
          <div className="overflow-hidden"> 
            <motion.h1
              className="text-4xl sm:text-5xl font-bold text-secondary"
              variants={textVariant}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              Move Forward With Confidence
            </motion.h1>
          </div>

          <motion.img
              src={Arrow1}
              alt="Experience 3"
              className="w-16 h-14 relative"
              initial={{ opacity: 0, x: -10 }}
              animate={isInView ? { opacity: 1, x: 10 } : { opacity: 0, x: -10 }}
              transition={{
                duration: 1.8,
                ease: [0.22, 0.61, 0.36, 1],
                delay: 0.6,
              }}
            />

          
        </div>

        {/* Subtext */}
        <div className="overflow-hidden"> 
          <motion.p
            className="text-lg text-gray-600 font-normal mx-1 md:mt-16 md:mb-12"
            variants={textVariant}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            Utilizing our skills and experience, we can manage all aspects of High
            Net Worth Divorces with reactive and proactive methods.
          </motion.p>
        </div>

        {/* Call To Action */}
        <div className="overflow-hidden"> 
          <motion.button
            className="mt-8 bg-assent text-secondary text-lg font-semibold py-2 px-4 rounded-lg hover:bg-orange-400"
            variants={textVariant}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            Call Us
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
