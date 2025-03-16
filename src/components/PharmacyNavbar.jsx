import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../assets/Navbar/logo.png";
import menu from "../assets/Navbar/menu.png";
import close from "../assets/Navbar/close.png";
import Profilebtn from "../assets/Dashboard/Profilebtn.png";
import Line from "../assets/Dashboard/Line.png";
import Bell from "../assets/Dashboard/bell.png";
import Logoutbtn from "../assets/Dashboard/Logoutbtn.png";
import Home from "../assets/Dashboard/Home.png";
import Logout from "../assets/Dashboard/Logout.png";
import Current from "../assets/Dashboard/Current.png";
import New from "../assets/Dashboard/New.png";
import Reject from "../assets/Dashboard/Reject.png";
import History from "../assets/Dashboard/History.png";
import General from "../assets/Dashboard/General.png";

const PharmacyNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [selectedItem, setSelectedItem] = useState("Dashboard"); // Initialize to "Dashboard"

  const handleScroll = () => {
    setIsVisible(window.scrollY <= 661);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleItemClick = (item) => {
    setSelectedItem(item); // Update selected item
  };

  return (
    <>
      <div className="flex items-center justify-between self-stretch border-b-[1px] border-[rgba(0,0,0,0.10)] h-[80px] p-[18px] md:px-[32px] gap-[64px]">
        {/* Logo */}
        <div className="flex justify-center items-center md:h-[50px] md:py-[1px] md:gap-[8px] md:w-[240px]">
          <img className="w-[24px] h-[24px]" src={logo} alt="Logo" />
          <div className="hidden md:block font-bold text-[18px] leading-[25.8px] text-[#29B48B]">
            Find MyPharmacy
          </div>
        </div>

        {/* Hamburger Menu */}
        <div className="lg:w-full flex justify-between items-center">
          <div className="hidden lg:flex flex-col font-inter">
            <div className="font-medium text-[24px] leading-[26.4px]">Hello!</div>
            <div className="text-[16px] leading-[22.4px] opacity-80">Welcome, Vatsal Parikh</div>
          </div>
          <div className="grid grid-flow-col items-center justify-center gap-[16px]">
            <div className="hidden md:flex items-center gap-[4px]">
              <img src={Bell} alt="Notification Bell" />
            </div>
            <div className="hidden md:flex items-center gap-[4px]">
              <img src={Line} alt="Line Separator" />
            </div>
            <div className="flex items-center gap-[4px]">
              <img src={Profilebtn} alt="Profile Button" />
              <div className="hidden md:block font-inter text-[14px] leading-[19.6px]">Parikh Vatsal</div>
            </div>
            <div className="block">
              <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none lg:hidden">
                <img src={menu} alt="Menu" />
              </button>
              <Link to="/Homepage" ><img className="hidden lg:block" src={Logoutbtn} alt="Logout Button" /></Link>
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
          className="fixed xl:hidden top-0 right-0 flex flex-col w-[228px] h-full py-8 items-start gap-[8px] bg-[#155A46] shadow-lg z-50"
        >
          <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4">
            <img src={close} alt="Close Menu" />
          </button>
          <div className="flex flex-col justify-between h-full w-full">
            <div className="w-full">
              <div className="text-white w-full font-inter text-[16px] leading-[22.4px]">
                <div className="flex flex-col py-[20px] px-[16px] gap-[4px]">
                  <div className="text-[20px] leading-[22px]">Hello!</div>
                  <div className="text-[14px] leading-[19.6px]">Welcome, Vatsal Parikh</div>
                </div>
                <div onClick={() => handleItemClick("Dashboard")}>
                  <a
                    href="#"
                    className={`flex items-center gap-[10px] p-[10px] ${
                      selectedItem === "Dashboard" ? "bg-[#29B48B]" : ""
                    }`} // Change background if selected
                  >
                    <img src={Home} alt="Dashboard Icon" />
                    Dashboard
                  </a>
                </div>
                <div onClick={() => handleItemClick("Current Request")}>
                  <a
                    href="#"
                    className={`flex items-center gap-[10px] p-[10px] ${
                      selectedItem === "Current Request" ? "bg-[#29B48B]" : ""
                    }`} // Change background if selected
                  >
                    <img src={Current} alt="Current Request Icon" />
                    Current Request
                  </a>
                </div>
                <div onClick={() => handleItemClick("New Request")}>
                  <a
                    href="#"
                    className={`flex items-center gap-[10px] p-[10px] ${
                      selectedItem === "New Request" ? "bg-[#29B48B]" : ""
                    }`} // Change background if selected
                  >
                    <img src={New} alt="New Request Icon" />
                    New Request
                  </a>
                </div>
                <div onClick={() => handleItemClick("Rejected Request")}>
                  <a
                    href="#"
                    className={`flex items-center gap-[10px] p-[10px] ${
                      selectedItem === "Rejected Request" ? "bg-[#29B48B]" : ""
                    }`} // Change background if selected
                  >
                    <img src={Reject} alt="Rejected Request Icon" />
                    Rejected Request
                  </a>
                </div>
                <div className="block lg:hidden" onClick={() => handleItemClick("History")}>
                  <a
                    href="#"
                    className={`flex items-center gap-[10px] p-[10px] ${
                      selectedItem === "History" ? "bg-[#29B48B]" : ""
                    }`} // Change background if selected
                  >
                    <img src={History} alt="History Icon" />
                    History
                  </a>
                </div>
                <div className="block lg:hidden" onClick={() => handleItemClick("General Inquiries")}>
                  <a
                    href="#"
                    className={`flex items-center gap-[10px] p-[10px] ${
                      selectedItem === "General Inquiries" ? "bg-[#29B48B]" : ""
                    }`} // Change background if selected
                  >
                    <img src={General} alt="General Inquiries Icon" />
                    General Inquiries
                  </a>
                </div>
                <div className="block lg:hidden" onClick={() => handleItemClick("Logout")}>
                  <a
                    href="#"
                    className={`flex items-center gap-[10px] p-[10px] ${
                      selectedItem === "Logout" ? "bg-[#29B48B]" : ""
                    }`} // Change background if selected
                  >
                    <img src={Logout} alt="Logout Icon" />
                    Logout
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center p-[12px] gap-[43px] text-white border-t-[1px] border-[#FFFFFF1A]">
              <div className="flex flex-col items-start gap-[28px] font-inter">
                <div className="text-[16px] leading-[25.2px]">Contact us</div>
                <div className="flex flex-col items-start gap-[12px]">
                  <div className="text-[12px] leading-[19.6px]">Ph: +91 7990876497</div>
                  <div className="text-[12px] leading-[19.6px]">Email: vatsalparikh0112@gmail.com</div>
                </div>
              </div>
              <div className="font-poppins text-[12px] leading-[16.8px] opacity-50">
                HIPAA / COPYRIGHT / T&C
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default PharmacyNavbar;