import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Navbar/logo.png";
import profilebtn from "../assets/Dashboard/profilebtn.png";
import Logoutbtn from "../assets/Dashboard/Logoutbtn.png";
import menu from "../assets/Navbar/menu.png";
import close from "../assets/Navbar/close.png";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [selectedItem, setSelectedItem] = useState("Current Request");
  const [selectedMenu, setSelectedMenu] = useState("Current Request");

  const handleScroll = () => {
    if (window.scrollY > 661) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false); // Update selected item
  };

  return (
    <>
      <motion.div
        className={`sticky top-0 z-10 bg-white flex justify-between items-center self-stretch border-b-[1px] border-[rgba(0,0,0,0.10)] h-[85px] p-[16px] md:px-[32px] md:py-[24px] lg:px-[80px]`}
        initial={{ opacity: 1 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Logo */}
        <Link
          to="/Homepage"
          className="flex justify-center items-center md:w-[260px] md:h-[43px] md:py-[1px] md:gap-[8px] "
        >
          <img src={logo} alt="Logo" />
          <div className="hidden md:block font-bold text-[24px] leading-[24px] text-[#29B48B]">
            Find MyPharmacy
          </div>
        </Link>

        {/* Menu */}
        <div className="flex items-center md:gap-[16px] md:h-[48px] xl:gap-[80px] ">
          <div className="flex gap-[16px] items-center order-1 xl:order-2 ">
            <Link to="/PatientHomepage" className="hidden md:block">
              <div className="flex items-center gap-[8px]">
                <img src={profilebtn} alt="Profile Button" />
                <div className="hidden md:block font-inter text-[14px] leading-[19.6px]">
                  Parikh Vatsal
                </div>
              </div>
            </Link>
            <Link to="/Homepage">
              <img
                className="hidden lg:block"
                src={Logoutbtn}
                alt="Logout Button"
              />
            </Link>
          </div>
          <div className="flex items-center order-2 xl:order-1 ">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none xl:hidden"
            >
              <img src={menu} className=" h-[25px] w-[25px] " alt="Menu" />
            </button>

            {/* menu starts */}
            <div className="hidden xl:flex justify-between font-inter font-semibold items-center w-[518px] h-[46px]">
              <Link
                to="/PatientHomepage"
                onClick={() => setSelectedMenu("Current Request")}
                className={`font-normal p-[10px] text-[16px] leading-[25.2px] cursor-pointer relative ${
                  selectedMenu === "Current Request"
                    ? "text-[#29B48B]"
                    : "text-black"
                }`}
              >
                New Request
                {selectedMenu === "Current Request" && (
                  <div className="absolute bottom-[-5px] left-0 right-0 h-[2px] bg-[#29B48B]"></div>
                )}
              </Link>
              <Link
                to="/PatientHomepage/PatientInfo"
                onClick={() => setSelectedMenu("PatientInfo")}
                className={`font-normal p-[10px] text-[16px] leading-[25.2px] cursor-pointer relative ${
                  selectedMenu === "PatientInfo"
                    ? "text-[#29B48B]"
                    : "text-black"
                }`}
              >
                PatientInfo
                {selectedMenu === "PatientInfo" && (
                  <div className="absolute bottom-[-5px] left-0 right-0 h-[2px] bg-[#29B48B]"></div>
                )}
              </Link>
              <Link
                to="/PatientHomepage/PatientInsurance"
                onClick={() => setSelectedMenu("InsuranceInfo")}
                className={`font-normal p-[10px] text-[16px] leading-[25.2px] cursor-pointer relative ${
                  selectedMenu === "InsuranceInfo"
                    ? "text-[#29B48B]"
                    : "text-black"
                }`}
              >
                Insurance Info
                {selectedMenu === "InsuranceInfo" && (
                  <div className="absolute bottom-[-5px] left-0 right-0 h-[2px] bg-[#29B48B]"></div>
                )}
              </Link>
              <Link
                to="/PatientHomepage/PatientHistory"
                onClick={() => setSelectedMenu("History")}
                className={`font-normal p-[10px] text-[16px] leading-[25.2px] cursor-pointer relative ${
                  selectedMenu === "History" ? "text-[#29B48B]" : "text-black"
                }`}
              >
                History
                {selectedMenu === "History" && (
                  <div className="absolute bottom-[-5px] left-0 right-0 h-[2px] bg-[#29B48B]"></div>
                )}
              </Link>
            </div>
            {/* menu ends */}
          </div>
        </div>
      </motion.div>

      {/* hamburger Menu */}
      {isOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "tween", duration: 0.3 }}
          className="fixed xl:hidden top-0 right-0 flex flex-col w-[228px] h-full py-8 items-start gap-[8px] bg-[#155A46] shadow-lg z-50"
        >
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4"
          >
            <img src={close} alt="Close" />
          </button>
          <ul className="text-white w-full py-[20px]">
            <div className="flex flex-col py-[20px] px-[16px] gap-[4px] text-white">
              <div className="text-[20px] leading-[22px]">Hello!</div>
              <div className="text-[14px] leading-[19.6px]">
                Welcome, Vatsal Parikh
              </div>
            </div>
            <Link to="/PatientHomepage">
              <li onClick={() => handleItemClick("Current Request")}>
                <div
                  className={`flex items-center gap-[10px] p-[10px] ${
                    selectedItem === "Current Request" ? "bg-[#29B48B]" : ""
                  }`} // Change background if selected
                >
                  New Request
                </div>
              </li>
            </Link>

            <Link to="/PatientHomepage/PatientInfo">
              <li onClick={() => handleItemClick("patientInfo")}>
                <div
                  className={`flex items-center gap-[10px] p-[10px] ${
                    selectedItem === "patientInfo" ? "bg-[#29B48B]" : ""
                  }`} // Change background if selected
                >
                  Personal Info
                </div>
              </li>
            </Link>

            <Link to="/PatientHomepage/patientInsurance">
              <li onClick={() => handleItemClick("InsuranceInfo")}>
                <div
                  className={`flex items-center gap-[10px] p-[10px] ${
                    selectedItem === "InsuranceInfo" ? "bg-[#29B48B]" : ""
                  }`} // Change background if selected
                >
                  Insurance Info
                </div>
              </li>
            </Link>

            <Link to="/PatientHomepage/PatientHistory">
              <li onClick={() => handleItemClick("PatientHistory")}>
                <div
                  className={`flex items-center gap-[10px] p-[10px] ${
                    selectedItem === "PatientHistory" ? "bg-[#29B48B]" : ""
                  }`} // Change background if selected
                >
                  History
                </div>
              </li>
            </Link>

            <Link to="/Homepage" className=" lg:hidden ">
              <li onClick={() => handleItemClick("Homepage")}>
                <div
                  className={`flex items-center gap-[10px] p-[10px] ${
                    selectedItem === "Homepage" ? "bg-[#29B48B]" : ""
                  }`} // Change background if selected
                >
                  Logout
                </div>
              </li>
            </Link>
          </ul>
        </motion.div>
      )}
      {/* hamburger menu ends */}
    </>
  );
};

export default Navbar;
