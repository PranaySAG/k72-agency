import React, { useContext, useRef } from "react";
import { NavbarColorContext, NavbarContext } from "../context/NavContext";
import { useNavigate } from "react-router-dom";

const DesignNavbar = () => {
  const projetsRef = useRef(null);
  const agenceRef = useRef(null);
  const menuRef = useRef(null);

  const [navOpen, setNavOpen] = useContext(NavbarContext);
  const [navColor] = useContext(NavbarColorContext);
  const navigate = useNavigate()
  const handleNavigation = (path) => {
        navigate(path);
    };

  return (
    <div className="z-4 flex fixed top-0 w-full items-start justify-end">
      <div className="lg:p-2.5 mr-auto">
        <div className="lg:w-29 w-24">
          <svg
            className="w-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 103 44"
          >
            <path
              fill={navColor}
              fillRule="evenodd"
              d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"
            ></path>
          </svg>
        </div>
      </div>

      <div
       
        onMouseEnter={() => (projetsRef.current.style.height = "100%")}
        onMouseLeave={() => (projetsRef.current.style.height = "0%")}
        className="lg:h-13 h-10 bg-black bottom-0 relative lg:w-[20vw] w-80 text-white "
      >
        <span className="z-10 absolute bottom-0 ml-1.5 font-[lausanne500] text-xl " >
          PROJETS (16)
        </span>
        <div
         onClick={() => handleNavigation("/project")}
          ref={projetsRef}
          className="bg-[#D3FD50] transition-all absolute top-0 h-0 w-full"
        ></div>
      </div>

      <div
        onMouseEnter={() => (agenceRef.current.style.height = "100%")}
        onMouseLeave={() => (agenceRef.current.style.height = "0%")}
        className="lg:h-25 h-10 bg-black relative lg:w-[27vw] w-80 text-white"
      >
        <span className="z-10 absolute bottom-0 ml-1.5 font-[lausanne500] text-xl">
          AGENCE
        </span>
        <div
          onClick={() => handleNavigation("/agence")}
          ref={agenceRef}
          className="bg-[#D3FD50] transition-all absolute top-0 h-0 w-full"
        ></div>
      </div>

      <div
        onClick={() => setNavOpen(true)}
        onMouseEnter={() => (menuRef.current.style.height = "100%")}
        onMouseLeave={() => (menuRef.current.style.height = "0%")}
        className="lg:h-32 h-10 bg-black relative lg:w-[16vw] w-45 text-white"
      >
        <span className="z-10 absolute bottom-0 ml-1.5 font-[lausanne500] text-xl">
          MENU
        </span>
        <div
          ref={menuRef}
          className="bg-[#D3FD50] transition-all absolute top-0 h-0 w-full"
        ></div>
        <div className="absolute right-3 top-5 -translate-y-1/2 flex flex-col justify-center items-end lg:gap-1.5 gap-0.5">
          <div className="lg:w-15 w-12 h-0.5 bg-white"></div>
          <div className="lg:w-7 w-6 h-0.5 bg-white"></div>
        </div>
      </div>
    </div>
  );
};

export default DesignNavbar;
