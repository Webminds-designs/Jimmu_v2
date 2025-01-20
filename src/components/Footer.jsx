import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ctaImage from "../assets/images/CTA.jpeg"; // Ensure the image path is correct
import logo from "../assets/images/jimmuB2.png";

const ConnectWithUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, offset: 200 });
  }, []);

  return (
    <section
      id="connect-with-us"
      className="bg-gray-50 py-12 px-8 mt-20"
      style={{ fontFamily: "SF_Regular, sans-serif" }}
    >
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        {/* Left Section: Call to Action */}
        <div className="text-left space-y-6" data-aos="fade-right">
          <h2
            className="text-[50px] md:text-[62px] lg:text-[62px] font-bold text-[#2D2D2D] leading-tight"
            style={{ fontFamily: "SF_Bold, sans-serif" }}
          >
            Connect with us <br />
            <span
              className="text-[39px] md:text-[48px] lg:text-[48px] font-bold text-[#FFAA29]"
              style={{ fontFamily: "SF_Bold, sans-serif" }}
            >
              via Call or Email
            </span>
          </h2>
          <p
            className="text-[20px] font-bold text-[#2D2D2D]"
            style={{ fontFamily: "SF_Bold, sans-serif" }}
          >
            Have questions?
          </p>
          <p className="text-[20px] text-[#2D2D2D]">
            Don’t hesitate to call or email us, we’d love to hear from you!
          </p>
          <div
            className="flex flex-wrap gap-4 md:gap-6 justify-center md:justify-start"
            data-aos="zoom-in"
          >
            <button
              onClick={() => window.open("tel:+447983637117", "_self")}
              className="px-4 py-2 md:px-4 md:py-2 bg-[#FFFAF4] text-[#2D2D2D] text-[18px] md:text-[24px] font-semibold rounded-lg shadow-md hover:shadow-lg hover:bg-[#FFAA29] transition"
              style={{ fontFamily: "SF_Medium, sans-serif" }}
            >
              Call Us
            </button>
            <button
              onClick={() =>
                window.open("mailto:damian@jimmu.global.com", "_self")
              }
              className="px-4 py-2 md:px-4 md:py-2 bg-[#FFFAF4] text-[#2D2D2D] text-[18px] md:text-[24px] font-semibold rounded-lg shadow-md hover:shadow-lg hover:bg-[#FFAA29] transition"
              style={{ fontFamily: "SF_Medium, sans-serif" }}
            >
              Email Us
            </button>
          </div>
        </div>

        {/* Right Section: Image */}
        <div
          className="flex justify-center md:justify-end"
          data-aos="fade-left"
        >
          <img
            src={ctaImage}
            alt="Customer Support"
            className="w-full max-w-sm md:max-w-lg lg:max-w-xl rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, offset: 200 });
  }, []);

  const handleSmoothScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer
      className="bg-[#FFAA29] py-12 px-8 mx-8 rounded-3xl"
      style={{ fontFamily: "SF_Regular, sans-serif" }}
    >
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* JIMMU Logo */}
        <div
          className="flex items-center justify-start md:w-1/3"
          data-aos="fade-up"
        >
          {/* <h1
            className="text-[96px] text-[#FFFAF4] font-SF_Regular"
            // style={{ fontFamily: "Carmine, serif" }}
          >
            JIMMU
          </h1> */}
          <img src={logo} alt="JIMMU" className="w-auto h-24" />
        </div>

        {/* Navigation Links */}
        <div
          className="flex flex-col md:flex-row md:justify-end md:w-2/3 gap-10 md:gap-20 mt-8 md:mt-0 text-center md:text-left"
          data-aos="fade-in"
        >
          {[
            {
              title: "Navigate",
              links: [
                { name: "Home", id: "home" },
                { name: "Services", id: "services" },
              ],
            },
            {
              title: "Company",
              links: [
                { name: "About Us", id: "about-us" },
                { name: "Contact Us", id: "contact-us" },
                { name: "Career", id: "career" },
              ],
            },
            {
              title: "Learn",
              links: [
                { name: "Blogs", id: "blogs" },
                { name: "Ebooks", id: "ebooks" },
              ],
            },
            {
              title: "Socials",
              links: [
                { name: "Instagram", id: "instagram" },
                { name: "Facebook", id: "facebook" },
                { name: "X", id: "x" },
              ],
            },
          ].map((section, index) => (
            <div key={index}>
              <h4
                className="text-[25px] font-semibold text-[#2D2D2D] mb-2"
                style={{ fontFamily: "SF_Bold, sans-serif" }}
              >
                {section.title}
              </h4>
              <ul className="space-y-1 text-[18px]">
                {section.links.map((link) => (
                  <li
                    key={link.id}
                    className="hover:text-[#2D2D2D] cursor-pointer"
                    onClick={() => handleSmoothScroll(link.id)}
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

const FooterBottom = () => {
  return (
    <div
      className="bg-[#FFFAF4] text-center text-[12px] text-[#2D2D2D] py-4"
      style={{ fontFamily: "SF_Regular, sans-serif" }}
    >
      © JIMMU. 2024. All rights reserved. | Developed by WebMinds
    </div>
  );
};

export { ConnectWithUs, Footer, FooterBottom };
