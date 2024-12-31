import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import hero1 from "../assets/images/hero1.png";
import hero2 from "../assets/images/hero2.png";
import hero3 from "../assets/images/hero3.png";

import Arrow1 from "../assets/images/arrow1.png";
import Arrow2 from "../assets/images/arrow2.png";

const HeroSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    triggerOnce: false,
    threshold: 0.2,
  });
  const [showPopup, setShowPopup] = useState(false); // State to control popup visibility

  const handleCallClick = () => {
    const isMobile = /Mobi|Android/i.test(navigator.userAgent); // Detect if the user is on mobile
    if (isMobile) {
      // Open the phone app
      window.location.href = "tel:+1234567890";
    } else {
      // Show the popup on desktop
      setShowPopup(true);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const textVariant = {
    hidden: { y: "100%", opacity: 0 },
    visible: {
      y: "0%",
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
      className="bg-primary min-h-screen text-center px-4 sm:px-8 relative z-10"
    >
      <div className="max-w-4xl mx-auto pt-32 md:pt-36">
        {/* Welcome Text */}
        <div className="overflow-hidden pb-1">
          <motion.h2
            className="text-md sm:text-lg text-secondary uppercase tracking-widest mb-6 leading-relaxed"
            variants={textVariant}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            Welcome to JIMMU
          </motion.h2>
        </div>

        {/* Main Heading */}

        <div className="overflow-hidden pb-5">
          <motion.h1
            className="text-3xl md:text-6xl font-bold text-secondary leading-tight"
            variants={textVariant}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            We Carry Over 30 Years Of <br />
          </motion.h1>
        </div>

        <div className="flex flex-wrap justify-center gap-4 items-center mt-5 mb-3">
          <div className="overflow-hidden pb-1">
            <motion.h1
              className="text-3xl md:text-6xl font-bold text-secondary leading-tight"
              variants={textVariant}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              Experience
            </motion.h1>
          </div>

          <div className="flex flex-wrap justify-center items-center relative bg-primary gap-2">
            <motion.img
              src={hero1}
              alt="Experience 1"
              className="w-12 sm:w-14 md:w-[70px] h-auto z-10 relative"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{
                duration: 1.4,
                ease: [0.22, 0.61, 0.36, 1],
                delay: 0.4,
              }}
            />
            <motion.img
              src={hero2}
              alt="Experience 2"
              className="w-12 sm:w-14 md:w-[70px] relative z-20 -ml-4 sm:-ml-6 md:-ml-8"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{
                duration: 1.6,
                ease: [0.22, 0.61, 0.36, 1],
                delay: 0.5,
              }}
            />
            <motion.img
              src={hero3}
              alt="Experience 3"
              className="w-12 sm:w-14 md:w-[70px] relative z-20 -ml-4 sm:-ml-6 md:-ml-8"
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
              className="text-3xl md:text-6xl font-bold text-secondary leading-tight"
              variants={textVariant}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              So You Can
            </motion.h1>
          </div>
        </div>

        <div className="flex justify-center gap-2 items-center ">
          <div className="overflow-hidden">
            <motion.h1
              className="text-3xl md:text-[59px] font-bold text-secondary leading-tight"
              variants={textVariant}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              Move Forward With Confidence
            </motion.h1>
          </div>

          <div className="flex ml-1">
            {/* Arrow1 */}
            <motion.img
              src={Arrow1}
              alt="Arrow 1"
              className="w-8 sm:w-12 md:w-[50px] h-auto absolute"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{
                duration: 1.5,
                ease: [0.22, 0.61, 0.36, 1],
                delay: isInView ? 0.6 : 0,
              }}
            />

            {/* Arrow2 */}
            <motion.img
              src={Arrow2}
              alt="Arrow 2"
              className="w-8 sm:w-12 md:w-[50px] h-auto relative"
              initial={{ opacity: 0, x: -20 }}
              animate={
                isInView ? { opacity: 1, x: 20 } : { opacity: 0, x: -20 }
              }
              transition={{
                duration: 1.7,
                ease: [0.22, 0.61, 0.36, 1],
                delay: isInView ? 0.8 : 0,
              }}
            />
          </div>
        </div>

        <div className="overflow-hidden pb-1">
          <motion.p
            className="text-sm sm:text-lg text-gray-600 font-normal mx-1 md:mt-12 md:mb-2 leading-relaxed"
            variants={textVariant}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            Utilizing our skills and experience, we can manage all aspects of
            High Net Worth Divorces with reactive and proactive methods.
          </motion.p>
        </div>

        <div className="overflow-hidden pb-1">
          <motion.button
            className="mt-8 bg-assent text-secondary text-sm sm:text-lg font-semibold py-2 px-4 rounded-lg hover:bg-orange-400"
            variants={textVariant}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            onClick={handleCallClick}
          >
            Call Us
          </motion.button>
        </div>

        {/* Popup for Desktop */}
        {showPopup && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg text-center">
              <p className="text-lg ">Call us at: +1 234 567 890</p>
              <button
                className="mt-4 bg-assent text-secondary text-sm sm:text-lg font-semibold py-2 px-4 rounded-lg hover:bg-orange-400"
                onClick={closePopup}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
