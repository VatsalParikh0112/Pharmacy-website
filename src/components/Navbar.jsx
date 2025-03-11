import React, { useState } from "react";
import logo from "../assets/Navbar/logo.png";
import btn1 from "../assets/Navbar/btn1.png";
import pbtn1 from "../assets/Navbar/pbtn1.png";
import phbtn2 from "../assets/Navbar/phbtn2.png";
import menu from "../assets/Navbar/menu.png";
import close from "../assets/Navbar/close.png";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className=" grid grid-flow-col top-[200px] justify-between items-center self-stretch border-b-[1px] border-[rgba(0,0,0,0.10)] h-[75px] p-[16px] md:h-[95px] md:px-[32px] md:py-[24px] lg:px-[80px] ">
        {/* logo */}
        <div className=" flex justify-center items-center md:w-[258.75px] md:h-[43px] md:py-[1px] md:gap-[8px] ">
          <img src={logo} alt="Logo" />
          <div className=" hidden md:block font-bold  text-[24px] leading-[24px] text-[#29B48B]">
            Find MyPharmacy
          </div>
        </div>

        {/* hamburger menu */}
        <div className="grid grid-flow-col items-center justify-center gap-[12px] w-[70.5px] h-[29.5px] md:gap-[24px] md:h-[48px] md:w-[203px] lg:w-[364px] xl:w-[831px] xl:gap-[80px] ">
          <div className=" flex gap-[16px] order-1 xl:order-2 ">
            <div className=" md:hidden ">
              <img src={btn1} alt="Button" />
            </div>
            <div className=" hidden lg:block ">
              <img src={phbtn2} alt="Button" />
            </div>
            <div className=" hidden md:block ">
              <img src={pbtn1} alt="Button" />
            </div>
          </div>
          <div className=" block order-2 xl:order-1 ">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none xl:hidden"
            >
              <img src={menu} alt="Menu" />
            </button>
            
            <div className=" hidden xl:flex justify-between font-inter font-semibold items-center w-[435px] h-[46px]  ">
              <div className=" font-normal p-[10px] text-[16px] leading-[25.2px] ">Home</div>
              <div className=" font-normal p-[10px] text-[16px] leading-[25.2px] ">About Us</div>
              <div className=" font-normal p-[10px] text-[16px] leading-[25.2px] ">Contact Us</div>
              <div className=" font-normal p-[10px] text-[16px] leading-[25.2px] ">Follow Us</div>
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

export default Navbar;
