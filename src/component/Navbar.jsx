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
      className={`sticky  w-full p-2 md:pl-16 md:pr-16  top-0 left-0 right-0 z-50 transition-all duration-300   ${
        visible
          ? "translate-y-0 bg-background/80 backdrop-blur-sm border-b"
          : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between flex-wrap">
          <div className="flex items-center flex-shrink-0  mr-6">
            <span className="font-semibold text-xl tracking-tight">
              <img width="130px" height="130px" src="logo.png"></img>
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
                onClick={() => scrollToSection("intro")}
                className="block mt-4 lg:inline-block lg:mt-0 mr-4 hover:text-blue-500 cursor-pointer"
              >
                App Intro
              </a>
              <a
                onClick={() => scrollToSection("download")}
                className="block mt-4 lg:inline-block lg:mt-0 hover:text-blue-500 cursor-pointer"
              >
                Download
              </a>
            </div>
            <a
              href="https://github.com/toewaioo/mycinema-app"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 text-gray-600 hover:text-black transition"
              title="Open Source on GitHub"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-github"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 
    6.53 5.47 7.59.4.07.55-.17.55-.38 
    0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52
    -.01-.53.63-.01 1.08.58 1.23.82.72 1.21 
    1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 
    0-.87.31-1.59.82-2.15-.08-.2-.36-1.01.08-2.11 
    0 0 .67-.21 2.2.82.64-.18 1.32-.27 
    2-.27.68 0 1.36.09 2 .27 1.53-1.04 
    2.2-.82 2.2-.82.44 1.1.16 1.91.08 2.11.51.56.82 
    1.27.82 2.15 0 3.07-1.87 3.75-3.65 
    3.95.29.25.54.73.54 1.48 0 1.07-.01 
    1.93-.01 2.2 0 .21.15.46.55.38A8.013 
    8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
