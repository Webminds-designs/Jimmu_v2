import React, { useState, useEffect } from "react";

import logo from "../assets/images/Logo.png";
import { Link, Events } from "react-scroll";

const Header = () => {
  const [isVisible, setIsVisible] = useState(true); // Header visibility state
  const [lastScrollY, setLastScrollY] = useState(0); // Track last scroll position
  const [activeSection, setActiveSection] = useState("home"); // Active section state

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Toggle header visibility based on scroll direction
      setIsVisible(!(currentScrollY > lastScrollY && currentScrollY > 50));

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    // Register scroll events
    Events.scrollEvent.register("begin", () => {});
    Events.scrollEvent.register("end", () => {});

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full bg-transparent transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
      style={{ zIndex: 50 }}
    >
      <div className="flex flex-col sm:flex-row items-center justify-between p-4">
        {/* Logo Section */}
        <div className="flex items-center w-[100px]">
          <img src={logo} alt="Logo" className="w-full h-auto" />
        </div>

        {/* Navigation Menu */}
        <div className="flex-1 flex justify-center mt-2 md:mr-24">
          <div className="bg-white shadow-md rounded-full flex items-center justify-center px-4 pt-2 pb-3">
            <ul className="flex flex-wrap justify-center gap-6 px-6">
              {[
                { id: "home", label: "Home" },
                { id: "services", label: "Services" },
                { id: "about-us", label: "About Us" },
                { id: "blogs", label: "Blogs" },
              ].map((section) => (
                <li key={section.id} className="relative">
                  <Link
                    to={section.id}
                    smooth={true}
                    duration={500}
                    offset={-40}
                    spy={true}
                    onSetActive={() => setActiveSection(section.id)}
                    className={`cursor-pointer text-secondary hover:font-bold transition ${
                      activeSection === section.id ? "font-bold" : ""
                    }`}
                  >
                    {section.label}
                  </Link>
                  {activeSection === section.id && (
                    <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-[0.4rem] h-[0.4rem] rounded-full bg-secondary"></span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
