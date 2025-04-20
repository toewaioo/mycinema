// src/NavBar.js
import React, { useState, useEffect } from "react";

const NavBar = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  };

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos, visible]);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollPos > currentScrollPos;
    setPrevScrollPos(currentScrollPos);
    setVisible(visible);
  };
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav
      className={`sticky top-0 w-full p-2 md:pl-16 md:pr-16  transition duration-300 ${
        visible
          ? "translate-y-0 backdrop-blur-lg bg-white bg-opacity-5"
          : "-translate-y-full"
      }`}
    >
      <div className="flex items-center justify-between flex-wrap">
        <div className="flex items-center flex-shrink-0  mr-6">
          <span className="font-semibold text-xl tracking-tight">
            <img width="130px" height="130px" src="cm-logo-dark.png"></img>
          </span>
        </div>
        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className="flex items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white"
          >
            <svg
              className="fill-current h-3 w-3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          className={`w-full lg:flex lg:items-center lg:w-auto ${
            menuOpen ? "" : "hidden"
          }`}
        >
          <div className="text-sm lg:flex-grow">
            <a
              onClick={() => scrollToSection("home")}
              className="block mt-4 lg:inline-block lg:mt-0 hover:text-blue-500 mr-4 cursor-pointer"
            >
              Home
            </a>
            <a
              onClick={() => scrollToSection("feature")}
              className="block mt-4 lg:inline-block lg:mt-0 hover:text-blue-500 mr-4 cursor-pointer"
            >
              Feature
            </a>
            <a
              onClick={() => scrollToSection("download")}
              className="block mt-4 lg:inline-block lg:mt-0 hover:text-blue-500 cursor-pointer"
            >
              Download
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
