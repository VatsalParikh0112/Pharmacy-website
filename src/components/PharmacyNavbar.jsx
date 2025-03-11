import React, { useState } from "react";
import logo from "../assets/Navbar/logo.png";
import btn1 from "../assets/Navbar/btn1.png";
import pbtn1 from "../assets/Navbar/pbtn1.png";
import phbtn2 from "../assets/Navbar/phbtn2.png";
import menu from "../assets/Navbar/menu.png";
import close from "../assets/Navbar/close.png";
import Profilebtn from "../assets/Dashboard/Profilebtn.png";
import Line from "../assets/Dashboard/Line.png";
import Bell from "../assets/Dashboard/bell.png";
import Logoutbtn from "../assets/Dashboard/Logoutbtn.png";
import { motion } from "framer-motion";

const PharmacyNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className=" flex items-center self-stretch border-b-[1px] border-[rgba(0,0,0,0.10)] h-[80px] p-[18px] md:px-[32px] gap-[64px] ">
        {/* logo */}
        <div className=" flex justify-center items-center md:h-[50px] md:py-[1px] md:gap-[8px] lg:w-[240px] ">
          <img className=" w-[24px] h-[24px] " src={logo} alt="Logo" />
          <div className=" hidden md:block font-bold text-[18px] leading-[25.8px] text-[#29B48B]">
            Find MyPharmacy
          </div>
        </div>

        {/* hamburger menu */}
        <div className=" w-full flex justify-between items-center ">
          <div className=" flex flex-col font-inter ">
            <div className=" font-medium text-[24px] leading-[26.4px] ">Hello!</div>
            <div className=" text-[16px] leading-[22.4px] opacity-80 ">Welcome, Vatsal Parikh</div>
          </div>
          <div className="grid grid-flow-col items-center justify-center gap-[16px] ">
            <div className=" hidden md:flex items-center gap-[4px] ">
              <img src={Bell} alt="Button" />
            </div>
            <div className=" hidden md:flex items-center gap-[4px] ">
              <img src={Line} alt="Button" />
            </div>
            <div className=" flex items-center gap-[4px] ">
              <img src={Profilebtn} alt="Button" />
              <div className=" hidden md:block font-inter text-[14px] leading-[19.6px] ">
                Parikh Vatsal
              </div>
            </div>
            <div className=" block  ">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="focus:outline-none lg:hidden"
              >
                <img src={menu} alt="Menu" />
              </button>
              <img className=" hidden lg:block " src={Logoutbtn} alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* Menu */}
      {isOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "tween", duration: 0.3 }}
          className="fixed top-0 right-0 flex flex-col w-[228px] h-full py-8 items-start gap-[8px] bg-[#155A46] shadow-lg z-50"
        >
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4"
          >
            <img src={close} alt="Close" />
          </button>
          <ul className=" text-white ">
            <li>
              <a href="#" className=" flex items-center gap-[10px] p-[10px]  ">
                Home
              </a>
            </li>
            <li>
              <a href="#" className=" flex items-center gap-[10px] p-[10px]  ">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className=" flex items-center gap-[10px] p-[10px]  ">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className=" flex items-center gap-[10px] p-[10px]  ">
                Follow Us
              </a>
            </li>
          </ul>
        </motion.div>
      )}
    </>
  );
};

export default PharmacyNavbar;
