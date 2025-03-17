import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Navbar/logo.png";
import btn1 from "../assets/Navbar/btn1.png";
import pbtn1 from "../assets/Navbar/pbtn1.png";
import phbtn2 from "../assets/Navbar/phbtn2.png";
import menu from "../assets/Navbar/menu.png";
import close from "../assets/Navbar/close.png";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [selectedItem, setSelectedItem] = useState("Home");
  const [selectedMenu, setSelectedMenu] = useState("Home");

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
    setSelectedItem(item); // Update selected item
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
        <div className="flex justify-center items-center md:w-[260px] md:h-[43px] md:py-[1px] md:gap-[8px] ">
          <img src={logo} alt="Logo" />
          <div className="hidden md:block font-bold text-[24px] leading-[24px] text-[#29B48B]">
            Find MyPharmacy
          </div>
        </div>

        {/* Hamburger Menu */}
        <div className="grid grid-flow-col items-center justify-center gap-[12px] w-[70.5px] h-[29.5px] md:gap-[24px] md:h-[48px] md:w-[203px] lg:w-[364px] xl:w-[831px] xl:gap-[80px] ">
          <div className="flex gap-[16px] order-1 xl:order-2 ">
            <div className="md:hidden">
              <img src={btn1} alt="Button" />
            </div>
            <Link to="/PharmacyHomepage" className="hidden lg:block">
              <img src={phbtn2} alt="Button" />
            </Link>
            <div className="hidden md:block">
              <img src={pbtn1} alt="Button" />
            </div>
          </div>
          <div className="block order-2 xl:order-1 ">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none xl:hidden"
            >
              <img src={menu} alt="Menu" />
            </button>

            {/* menu starts */}
            <div className="hidden xl:flex justify-between font-inter font-semibold items-center w-[435px] h-[46px]">
              <Link
                to="/"
                onClick={() => setSelectedMenu("Home")}
                className={`font-normal p-[10px] text-[16px] leading-[25.2px] cursor-pointer relative ${
                  selectedMenu === "Home" ? "text-[#29B48B]" : "text-black"
                }`}
              >
                Home
                {selectedMenu === "Home" && (
                  <div className="absolute bottom-[-5px] left-0 right-0 h-[2px] bg-[#29B48B]"></div>
                )}
              </Link>
              <Link
                to="/About"
                onClick={() => setSelectedMenu("About Us")}
                className={`font-normal p-[10px] text-[16px] leading-[25.2px] cursor-pointer relative ${
                  selectedMenu === "About Us" ? "text-[#29B48B]" : "text-black"
                }`}
              >
                About Us
                {selectedMenu === "About Us" && (
                  <div className="absolute bottom-[-5px] left-0 right-0 h-[2px] bg-[#29B48B]"></div>
                )}
              </Link>
              <Link
                to="/ContactUs"
                onClick={() => setSelectedMenu("Contact Us")}
                className={`font-normal p-[10px] text-[16px] leading-[25.2px] cursor-pointer relative ${
                  selectedMenu === "Contact Us"
                    ? "text-[#29B48B]"
                    : "text-black"
                }`}
              >
                Contact Us
                {selectedMenu === "Contact Us" && (
                  <div className="absolute bottom-[-5px] left-0 right-0 h-[2px] bg-[#29B48B]"></div>
                )}
              </Link>
              <Link
                to="/FollowUs"
                onClick={() => setSelectedMenu("Follow Us")}
                className={`font-normal p-[10px] text-[16px] leading-[25.2px] cursor-pointer relative ${
                  selectedMenu === "Follow Us" ? "text-[#29B48B]" : "text-black"
                }`}
              >
                Follow Us
                {selectedMenu === "Follow Us" && (
                  <div className="absolute bottom-[-5px] left-0 right-0 h-[2px] bg-[#29B48B]"></div>
                )}
              </Link>
            </div>
            {/* menu ends */}
          </div>
        </div>
      </motion.div>

      {/* Menu */}
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
            <Link to="/">
              <li onClick={() => handleItemClick("Home")}>
                <div
                  className={`flex items-center gap-[10px] p-[10px] ${
                    selectedItem === "Home" ? "bg-[#29B48B]" : ""
                  }`} // Change background if selected
                >
                  Home
                </div>
              </li>
            </Link>

            <Link to="/About">
              <li onClick={() => handleItemClick("About Us")}>
                <div
                  className={`flex items-center gap-[10px] p-[10px] ${
                    selectedItem === "About Us" ? "bg-[#29B48B]" : ""
                  }`} // Change background if selected
                >
                  About Us
                </div>
              </li>
            </Link>

            <Link to="/ContactUs">
              <li onClick={() => handleItemClick("Contact Us")}>
                <div
                  className={`flex items-center gap-[10px] p-[10px] ${
                    selectedItem === "Contact Us" ? "bg-[#29B48B]" : ""
                  }`} // Change background if selected
                >
                  Contact Us
                </div>
              </li>
            </Link>

            <Link to="/FollowUs">
              <li onClick={() => handleItemClick("Follow Us")}>
                <div
                  className={`flex items-center gap-[10px] p-[10px] ${
                    selectedItem === "Follow Us" ? "bg-[#29B48B]" : ""
                  }`} // Change background if selected
                >
                  Follow Us
                </div>
              </li>
            </Link>

            <Link to="/PharmacyHomepage">
              <li
                className="block lg:hidden"
                onClick={() => handleItemClick("Pharmacy Login")}
              >
                <div
                  className={`flex items-center gap-[10px] p-[10px] ${
                    selectedItem === "Pharmacy Login" ? "bg-[#29B48B]" : ""
                  }`} // Change background if selected
                >
                  Pharmacy Login
                </div>
              </li>
            </Link>
          </ul>
        </motion.div>
      )}
      {/* menu ends */}
    </>
  );
};

export default Navbar;
