import React, { createContext, useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../navigation/Navbar";
import DesignNavbar from "../Navigation/DesignNavbar";

export const NavbarContext = createContext();
export const NavbarColorContext = createContext();
export const NavbarTypeContext = createContext();

const NavContext = ({ children }) => {
  const [navColor, setNavColor] = useState("white");
  const [navOpen, setNavOpen] = useState(false);
  const [isDefaultNavbar, setIsDefaultNavbar] = useState(false);

  const navGreenRef = useRef(null);
  const location = useLocation().pathname;

  // Update navbar color based on route
  useEffect(() => {
    if (location === "/project" || location === "/agence" || location === "/blogs") {
      setNavColor("black");
    } else {
      setNavColor("white");
    }
  }, [location]);

  useEffect(() => {
    const checkNavbar = () => {
      const isLargeScreen = window.innerWidth >= 1024;
      if (!isLargeScreen) {
        setIsDefaultNavbar(true); 
      } else {
        if (location === "/" || location === "/contact" || location === "/blog") {
          setIsDefaultNavbar(true); 
        } else {
          setIsDefaultNavbar(false); 
        }
      }
    };
    checkNavbar();
    window.addEventListener("resize", checkNavbar);

    return () => window.removeEventListener("resize", checkNavbar);
  }, [location]);

  return (
    <NavbarContext.Provider value={[navOpen, setNavOpen]}>
      <NavbarColorContext.Provider value={[navColor, setNavColor]}>
        <NavbarTypeContext.Provider value={isDefaultNavbar}>
          {isDefaultNavbar ? <Navbar /> : <DesignNavbar />}
          {children}
        </NavbarTypeContext.Provider>
      </NavbarColorContext.Provider>
    </NavbarContext.Provider>
  );
};

export default NavContext;
