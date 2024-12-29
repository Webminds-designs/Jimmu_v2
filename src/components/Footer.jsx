import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ctaImage from "../assets/images/CTA.jpeg"; // Ensure the image path is correct

const ConnectWithUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, offset: 200 });
  }, []);

  return (
    <section className="bg-gray-50 py-12 px-8 mt-20">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        {/* Left Section: Call to Action */}
        <div className="text-left space-y-6" data-aos="fade-right">
          <h2
            className="text-[62px] font-bold text-[#2D2D2D] leading-tight"
            style={{ fontFamily: "SF Pro Display" }}
          >
            Connect with us <br />
            <span className="text-[48px] font-bold text-[#FFAA29]">via Call or Email</span>
          </h2>
          <p
            className="text-[20px] font-bold text-[#2D2D2D]"
            style={{ fontFamily: "SF Pro Display" }}
          >
            Have questions?
          </p>
          <p
            className="text-[20px] text-[#2D2D2D]"
            style={{ fontFamily: "SF Pro Display" }}
          >
            Don’t hesitate to call or email us, we’d love to hear from you!
          </p>
          <div className="flex gap-6" data-aos="zoom-in">
            <button className="px-8 py-4 bg-[#FFFAF4] text-[#2D2D2D] text-[24px] font-semibold rounded-lg shadow-md hover:shadow-lg hover:bg-[#FFAA29] transition">
              Call Us
            </button>
            <button className="px-8 py-4 bg-[#FFFAF4] text-[#2D2D2D] text-[24px] font-semibold rounded-lg shadow-md hover:shadow-lg hover:bg-[#FFAA29] transition">
              Email Us
            </button>
          </div>
        </div>

        {/* Right Section: Image */}
        <div data-aos="fade-left">
          <img src={ctaImage} alt="Customer Support" className="w-full rounded-xl shadow-lg" />
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, offset: 200 });
  }, []);

  return (
    <footer className="bg-[#FFAA29] py-12 px-8">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* JIMMU Logo */}
        <div className="flex items-center justify-start md:w-1/3" data-aos="fade-up">
          <h1
            className="text-[96px] font-bold text-[#FFFAF4]"
            style={{ fontFamily: "Carmine, serif" }}
          >
            JIMMU
          </h1>
        </div>

        {/* Navigation Links */}
        <div
          className="flex flex-col md:flex-row md:justify-end md:w-2/3 gap-20 mt-8 md:mt-0 text-center md:text-left"
          data-aos="fade-in"
        >
          <div>
            <h4 className="text-[20px] font-semibold text-[#2D2D2D] mb-2">Navigate</h4>
            <ul className="space-y-1 text-[12px]">
              <li className="hover:text-[#2D2D2D]">Home</li>
              <li className="hover:text-[#2D2D2D]">Services</li>
            </ul>
          </div>
          <div>
            <h4 className="text-[20px] font-semibold text-[#2D2D2D] mb-2">Company</h4>
            <ul className="space-y-1 text-[12px]">
              <li className="hover:text-[#2D2D2D]">About Us</li>
              <li className="hover:text-[#2D2D2D]">Contact Us</li>
              <li className="hover:text-[#2D2D2D]">Career</li>
            </ul>
          </div>
          <div>
            <h4 className="text-[20px] font-semibold text-[#2D2D2D] mb-2">Learn</h4>
            <ul className="space-y-1 text-[12px]">
              <li className="hover:text-[#2D2D2D]">Blog</li>
              <li className="hover:text-[#2D2D2D]">Ebooks</li>
            </ul>
          </div>
          <div>
            <h4 className="text-[20px] font-semibold text-[#2D2D2D] mb-2">Socials</h4>
            <ul className="space-y-1 text-[12px]">
              <li className="hover:text-[#2D2D2D]">Instagram</li>
              <li className="hover:text-[#2D2D2D]">Facebook</li>
              <li className="hover:text-[#2D2D2D]">X</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterBottom = () => {
  return (
    <div className="bg-[#2D2D2D] text-center text-[12px] text-[#FFFAF4] py-4">
      © JIMMU. 2024. All rights reserved. | Developed by WebMinds
    </div>
  );
};

export { ConnectWithUs, Footer, FooterBottom };
