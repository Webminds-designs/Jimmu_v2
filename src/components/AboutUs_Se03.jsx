import React from "react";
import { motion } from "framer-motion";

const AboutUs_Se03 = () => (
  <motion.section
    className="relative min-h-screen bg-[#FDF9F3] flex items-center justify-center overflow-hidden"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 50 }}
    transition={{ duration: 0.5 }}
  >
    <motion.div
      className="absolute -top-[125px] -left-[125px] md:-top-[250px] md:-left-[250px] p-6 sm:p-8 mix-blend-multiply z-10 bg-assent w-[250px] h-[250px] md:w-[500px] md:h-[500px] rounded-full"
      initial={{ opacity: 0, x: -50, scale: 0.5 }}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      delay={0.6}
    />
    <motion.div
      className="absolute -bottom-[125px] -right-[125px] md:-bottom-[250px] md:-right-[250px] mix-blend-multiply  p-6 sm:p-8 z-10 bg-assent w-[250px] h-[250px] md:w-[500px] md:h-[500px] rounded-full"
      initial={{ opacity: 0, x: 50, scale: 0.5 }}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      delay={0.6}
    />
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 p-6 sm:p-8">
      {/* Card 1: Comprehensive Support */}
      <CustomCard
        number="01"
        title="Comprehensive Support"
        description="We address the challenges of dividing significant assets, offering clear solutions to protect your financial interests during divorce."
        animationDelay={0.6}
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
      />
      {/* Card 2: Emotional Well-being */}
      <CustomCard
        number="02"
        title="Emotional Well-being"
        description="We tackle the toughest legal and financial challenges, delivering solutions that minimize stress and safeguard your future."
        animationDelay={0.8}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
      />
      {/* Card 3: Legal Guidance */}
      <CustomCard
        number="03"
        title="Legal Guidance"
        description="We provide customized strategies to navigate the complexities of divorce, ensuring your wealth and reputation remain secure."
        animationDelay={1.0}
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
      />
    </div>
  </motion.section>
);

const CustomCard = ({
  number,
  title,
  description,
  animationDelay,
  initial,
  whileInView,
}) => (
  <motion.div
    className="relative border border-black/20 dark:border-white/20 max-w-sm w-full mx-auto p-8 h-auto group flex flex-col justify-between bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:translate-y-[-5px] hover:shadow-2xl"
    initial={initial}
    whileInView={whileInView}
    transition={{ duration: animationDelay, ease: "easeOut" }}
    // viewport={{ once: true, amount: 0.2 }}
  >
    {/* Number Badge */}
    <div className="absolute w-16 h-16 bg-[#FFAA29] rounded-full -top-5 -right-5 flex items-center justify-center shadow-lg">
      <p className="text-white text-lg font-bold">{number}</p>
    </div>

    {/* Card Title */}
    <div className="text-center">
      <h2 className="text-[36px] sm:text-[48px] font-bold text-black group-hover:text-[#FFAA29] transition-colors duration-300">
        {title}
      </h2>
    </div>

    {/* Card Description */}
    <p className="text-[20px] sm:text-[26px] text-gray-500 group-hover:text-[#2D2D2D] transition-colors duration-300 mt-4 text-center">
      {description}
    </p>
  </motion.div>
);

export default AboutUs_Se03;
