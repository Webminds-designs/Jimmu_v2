import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import service1 from "../assets/images/service1.jpg";
import service2 from "../assets/images/service2.jpg";
import service3 from "../assets/images/service3.jpg";
import service4 from "../assets/images/service4.jpg";

const ServiceSection = ({ number, title, description, image, alt, index }) => {
  const { ref, inView } = useInView({ threshold: 0.5 });
  const controls = useAnimation();

  React.useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        filter: "brightness(1)",
      });
    } else {
      controls.start({
        opacity: 1, 
        y: 50,
        filter: "brightness(1)", 
      });
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      className="h-screen flex items-start justify-center"
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.8 }}
      style={{ position: "sticky", top: 0 }}
    >
      <section className="w-full flex items-start justify-center h-full bg-primary">
        <div className="max-w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start px-4 md:px-0 h-full">
          {/* Left Section */}
          <div className="flex flex-row items-center md:items-start justify-between m-4 md:m-10">
            <h1 className="text-[100px] md:text-[200px] font-bold text-secondary leading-none">
              {number}
            </h1>
            <p className="text-secondary text-base md:text-lg font-semibold">
              (Services)
            </p>
          </div>

          {/* Right Section */}
          <div className="mt-6 md:mt-14 flex flex-col gap-10 md:gap-28 items-center md:items-start">
            <h2 className="text-xl md:text-6xl font-semibold text-secondary text-center md:text-left">
              {title}
            </h2>

            {/* Image */}
            <div className="w-[300px] md:w-[400px] flex justify-center md:justify-start">
              <img
                src={image}
                alt={alt}
                className="rounded-2xl shadow-md object-cover w-[250px] md:w-[350px] h-[100px] md:h-[140px]"
              />
            </div>

            {/* Description */}
            <p className="text-base md:text-[25px] text-secondary text-center md:text-left">
              {description}
            </p>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

const ServicePage = () => {
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
    title: "Technical security & Counter measures",
    description:
      "Advanced solutions to detect and prevent unauthorized surveillance and breaches.",
    image: service2,
    alt: "Technical security and Counter measures",
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
    title: "Assets tracing & Forfeiture",
    description: "Investigating and recovering hidden assets across jurisdictions.",
    image: service4,
    alt: "Assets tracing and Forfeiture",
  },
];

export default ServicePage;
