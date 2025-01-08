import React, { useState, useEffect, useRef } from "react";
import { IoMenu } from "react-icons/io5";
import { MdOutlineClose } from "react-icons/md";
import logo from "../assets/images/Logo.png";

const Header = ({ setOverlayVisible }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("home");
  const mobileMenuRef = useRef(null);

  const handleScroll = () => {
    if (isMobileMenuOpen) return; // Disable scroll effect when the menu is open

    const currentScrollY = window.scrollY;
    setShowHeader(lastScrollY > currentScrollY || currentScrollY <= 0);
    setLastScrollY(currentScrollY);

    const sections = ["home", "services", "about-us", "blogs"];
    let foundActiveSection = false;

    sections.forEach((section) => {
      const sectionElement = document.getElementById(section);
      if (sectionElement) {
        const { top, height } = sectionElement.getBoundingClientRect();
        if (top <= 100 && top + height > 100 && !foundActiveSection) {
          setActiveSection(section);
          foundActiveSection = true;
        }
      }
    });

    if (!foundActiveSection) {
      setActiveSection(""); // Fallback for no active section
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isMobileMenuOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMobileMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
        setOverlayVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobileMenuOpen, setOverlayVisible]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setOverlayVisible(!isMobileMenuOpen);
  };

  const links = [
    { name: "Home", id: "home" },
    { name: "Services", id: "services" },
    { name: "About Us", id: "about-us" },
    { name: "Blogs", id: "blogs" },
  ];

  return (
    <header
      className={`fixed top-0 w-screen z-50 transition-transform duration-300  bg-primary md:bg-transparent ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex items-center justify-between px-8 py-4 md:py-8">
        {/* Logo Section */}
        <div className="flex items-center w-[80px] md:w-[100px] md:ml-10 ">
          <img src={logo} alt="Logo" className="w-full h-auto" />
        </div>

        {/* Nav for Desktop */}
        <div className="hidden md:flex-1 md:flex justify-center mt-2 mr-[11%]">
          <div className="bg-white shadow-md rounded-full flex items-center justify-center px-4 pt-2 pb-3">
            <ul className="flex flex-wrap justify-center gap-6 px-6">
              {links.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={() => setActiveSection(link.id)}
                    className={`relative font-medium transition ${
                      activeSection === link.id
                        ? "font-semibold text-secondary"
                        : "text-secondary hover:font-semibold"
                    }`}
                  >
                    {link.name}
                    {activeSection === link.id && (
                      <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-[0.4rem] h-[0.4rem] rounded-full bg-secondary"></span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-2xl" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <MdOutlineClose /> : <IoMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav
          ref={mobileMenuRef}
          className="md:hidden flex flex-col items-center space-y-4 px-6 py-4 bg-primary shadow-lg z-50"
        >
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => {
                setIsMobileMenuOpen(false);
                setOverlayVisible(false);
                setActiveSection(link.id);
              }}
              className={`font-medium transition ${
                activeSection === link.id
                  ? "font-semibold text-secondary"
                  : "text-secondary hover:font-semibold"
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
