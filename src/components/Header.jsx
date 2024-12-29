import React, { useState, useEffect } from "react";
import logo from "../assets/images/logo.png";

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false); // Hide on scroll down
      } else {
        setIsVisible(true); // Show on scroll up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full bg-transparent transition-transform duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`} style={{ zIndex: 50 }}
      >
        <div className="flex flex-col sm:flex-row items-center justify-between p-6">
          {/* Logo Section */}
          <div className="flex items-center w-[100px]">
            <img src={logo} alt="Logo" className="w-full h-auto " />
          </div>

          {/* Navigation Menu */}
          <div className="flex-1 flex justify-center md:mr-24">
            <div className="bg-white shadow-md rounded-full flex items-center justify-center px-2 py-2 mt-4 sm:mt-0 mr-4">
              <ul className="flex flex-wrap justify-center gap-6 px-6">
                <li>
                  <a href="#home" className="text-secondary">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-secondary">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#about-us" className="text-secondary">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#blogs" className="text-secondary">
                    Blogs
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
