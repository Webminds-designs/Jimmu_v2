import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import service1 from "../assets/images/service1.jpg";
import service2 from "../assets/images/service2.jpg";
import service3 from "../assets/images/service3.jpg";
import service4 from "../assets/images/service4.jpg";

const ServiceSection = ({ number, title, description, image, alt, index, isDarkened }) => {
  const brightness = isDarkened ? 0.7 : 1; // Darken if isDarkened is true
  const isServiceThree = index === 2; // Check if this is the third service

  return (
    <motion.div
      className="h-screen flex items-start justify-center service-section"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      style={{
        position: "sticky",
        top: 0,
        filter: `brightness(${brightness})`,
        transition: "filter 0.5s ease-in-out",
      }}
    >
      <section className="w-full flex items-start justify-center h-full bg-primary p-6">

        <div className="w-fit grid grid-cols-1 md:grid-cols-2 items-start px-2 sm:px-4 md:px-0 h-full">

          {/* Left Section */}

          <div className="flex  flex-col md:flex-row items-center md:items-start justify-between m-2 sm:m-4 md:m-10 ">
            <h1 className="text-[100px] md:text-[350px] font-bold text-secondary leading-none md:pt-0 pt-10 md:pl-10 pl-0">
              {number}
            </h1>

            <p className="text-secondary text-base md:text-lg font-semibold">
              (Services)
            </p>
          </div>

          {/* Right Section */}
          <div
            className={`mt-4 sm:mt-6 md:mt-14 flex flex-col gap-8 sm:gap-10 md:gap-28 items-center md:items-start ${
              isServiceThree ? "gap-8 sm:gap-10 md:gap-36" : ""
            }`}
          >
            <h2 className="text-3xl md:text-[4rem]  md:leading-[5rem]  font-semibold text-secondary text-center md:text-left">
              {title}
            </h2>

            {/* Image */}
            <div className="w-[300px] md:w-[400px] flex justify-center md:justify-start">
              <img
                src={image}
                alt={alt}
                className="rounded-2xl shadow-md object-cover w-[250px] md:w-[400px] h-[100px] md:h-[180px]"
              />
            </div>

            {/* Description */}
            <p className="text-base md:font-semibold leading-[1.4rem] md:leading-[2rem] md:text-[25px] text-secondary text-center md:text-left">
              {description}
            </p>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

const ServicePage = () => {
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".service-section");
      let activeIndex = 0;

      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();

        // Check if the top of the section is entering the viewport
        if (rect.top >= 0 && rect.top < window.innerHeight) {
          activeIndex = index;
        }
      });

      setCurrentSection(activeIndex);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative">
      {services.map((service, index) => (
        <ServiceSection
          key={index}
          number={service.number}
          title={service.title}
          description={service.description}
          image={service.image}
          alt={service.alt}
          index={index}
          isDarkened={index < currentSection} // Darken sections before the current one
        />
      ))}
    </div>
  );
};

const services = [
  {
    number: "1",
    title: "Investigations & Surveillance",
    description:
      "Discreet, professional monitoring and fact-finding for legal and private matters.",
    image: service1,
    alt: "Investigations and Surveillance",
  },
  {
    number: "2",
    title: "Technical Security & Counter Measures",
    description:
      "Advanced solutions to detect and prevent unauthorized surveillance and breaches.",
    image: service2,
    alt: "Technical Security and Counter Measures",
  },
  {
    number: "3",
    title: "Cyber Investigators",
    description:
      "Expert analysis and tracking of digital crimes, data breaches, and online threats.",
    image: service3,
    alt: "Cyber Investigators",
  },
  {
    number: "4",
    title: "Assets Tracing & Forfeiture",
    description:
      "Investigating and recovering hidden assets across jurisdictions.",
    image: service4,
    alt: "Assets Tracing and Forfeiture",
  },
];

export default ServicePage;