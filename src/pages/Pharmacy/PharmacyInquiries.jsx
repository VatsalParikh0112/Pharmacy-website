import React, { useState } from "react";
import Edit from "../../assets/General/Edit.png";
import List from "../../assets/General/List.png";
import Info from "../../assets/General/Info.png";
import Call from "../../assets/General/Call.png";
import Msg from "../../assets/General/Msg.png";
import Gender from "../../assets/General/Gender.png";
import DOB from "../../assets/General/DOB.png";
import Mail from "../../assets/General/Mail.png";
import Location from "../../assets/General/Location.png";

const PharmacyInquiries = () => {
  const [editMode, setEditMode] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null); // selected list index

  const handleEditToggle = () => {
    setEditMode(!editMode);
  };

  const handleDelete = (index) => {
    console.log(`Delete message ${index + 1}`);
    // Add delete logic here if needed
  };

  const handleItemClick = (index) => {
    setSelectedIndex(index);
  };

  return (
    <>
      <div className=" flex h-screen w-full ">
        <div className="flex flex-col w-full h-full md:w-[300px] lg:w-[350px] overflow-y-auto ">
          {/* Header */}
          <div className="flex justify-between items-center w-full pt-[16px] md:pt-[26px] pb-[26px] px-[12px]">
            <div className="font-inter text-[20px] leading-[28px]">
              Messaging
            </div>
            <button onClick={handleEditToggle}>
              <img src={Edit} alt="Edit" />
            </button>
          </div>

          {/* Lists */}
          <div className="flex flex-col items-start w-full border-b border-gray-300 ">
            {[...Array(5)].map((_, index) => (
              <div
                key={index}
                onClick={() => handleItemClick(index)}
                className={`w-full shadow-sm border-t border-gray-300 py-[20px] px-[12px] flex gap-[8px] cursor-pointer transition-colors ${
                  selectedIndex === index ? "bg-blue-100" : "bg-white"
                }`}
              >
                <div className="flex items-center">
                  {editMode ? (
                    <button
                      onClick={(e) => {
                        e.stopPropagation(); // prevent list click
                        handleDelete(index);
                      }}
                      className="text-red-600 text-sm px-2 py-1 border border-red-600 rounded hover:bg-red-50"
                    >
                      Delete
                    </button>
                  ) : (
                    <img src={List} alt={`Avatar ${index}`} />
                  )}
                </div>
                <div className="w-full flex flex-col gap-[4px]">
                  <div className="w-full flex justify-between">
                    <div className="font-inter text-[16px]">
                      User {index + 1}
                    </div>
                    <div className="font-inter text-[12px] text-gray-500">
                      May {10 + index}
                    </div>
                  </div>
                  <div className="font-inter text-[12px] leading-[16.8px] text-gray-700">
                    This is a sample message preview for users {index + 1}.
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* List messages */}
        <div
          data-id="list-section"
          className="h-[calc(100vh-80px)] hidden md:flex flex-col justify-between items-center border-x"
        >
          {/* Top */}
          <div className=" flex h-[80px] w-full justify-between py-[14px] px-[16px] border-b border-gray-300 ">
            <div className=" flex gap-[12px] items-center ">
              <div>
                <img src={List} alt="" />
              </div>
              <div className=" flex flex-col ">
                <div className=" font-inter font-medium text-[16px] leading-[25.2px] ">
                  Brooklyn Simmons
                </div>
                <div className=" font-inter text-[12px] leading-[16.8px] ">
                  (406) 555-0120
                </div>
              </div>
            </div>
            <div className=" lg:hidden flex items-center gap-[20px] ">
              <button className=" flex items-center gap-[8px] py-[12px] pl-[16px] pr-[20px] h-[42px] bg-[#22C55E] rounded ">
                <div>
                  <img src={Call} alt="" />
                </div>
                <div className=" text-white font-inter font-medium text-[14px] leading-[19.6px] ">
                  Call
                </div>
              </button>
              <div>
                <img src={Info} alt="" />
              </div>
            </div>
          </div>

          {/* Mid */}
          <div className=" flex flex-col items-center gap-[11px] ">
            <div>
              <img src={Msg} alt="" />
            </div>
            <div className=" font-inter text-[14px] leading-[19.6px] text-center ">
              No Message Yet
            </div>
            <div className=" opacity-50 font-inter text-[12px] leading-[16.8px] text-center ">
              Be the first who says “Hi”
            </div>
          </div>

          {/* Bottom */}
          <div className=" flex flex-col gap-[20px] px-[12px] py-[12px] ">
            <div className=" flex flex-wrap justify-center items-center gap-y-[16px] gap-x-[12px] ">
              <div className=" py-[10px] px-[10px] rounded-[4px] border border-[#D9D9D9] shadow-[0px_2px_6px_0px_rgba(0,0,0,0.25)] text-center font-inter leading-[19.6px] ">
                Hi, How are you?
              </div>
              <div className=" py-[10px] px-[10px] rounded-[4px] border border-[#D9D9D9] shadow-[0px_2px_6px_0px_rgba(0,0,0,0.25)] text-center font-inter leading-[19.6px] ">
                Hey Brooklyn, what’s up?
              </div>
              <div className=" py-[10px] px-[10px] rounded-[4px] border border-[#D9D9D9] shadow-[0px_2px_6px_0px_rgba(0,0,0,0.25)] text-center font-inter leading-[19.6px] ">
                Hello, nice to meet you
              </div>
            </div>
            <input
              type="text"
              className=" bg-[#F4F6F8] border rounded-[8px] py-[10px] px-[20px] "
              placeholder=" Write Message... "
            />
          </div>
        </div>

        {/* List info */}
        <div className=" hidden lg:flex flex-col h-full w-[380px] py-[12px] gap-[12px] overflow-y-auto ">
          <div className=" flex flex-col items-center gap-[12px] px-[4px] py-[12px] border-b border-gray-300 ">
            <div>
              <img src={List} alt="" />
            </div>
            <div className=" flex flex-col items-center gap-[12px] ">
              <div className=" font-inter font-medium text-[16px] leading-[25.2px] ">
                Brooklyn Simmons
              </div>
              <div className=" font-inter text-[12px] leading-[16.8px] ">
                Female, 28
              </div>
            </div>
            <button className=" flex items-center gap-[8px] py-[12px] pl-[16px] pr-[20px] h-[42px] bg-[#22C55E] rounded ">
              <div>
                <img src={Call} alt="" />
              </div>
              <div className=" text-white font-inter font-medium text-[14px] leading-[19.6px] ">
                Call
              </div>
            </button>
          </div>

          {/* Patient Details */}
          <div className=" flex flex-col py-[10px] px-[10px] gap-[10px] border-b border-gray-300 ">
            <div className=" font-inter text-[14px] leading-[19.6px] ">
              Patient Details
            </div>
            <div className=" flex items-center justify-between px-[10px] py-[10px] ">
              <div className=" flex items-center gap-[10px] ">
                <div>
                  <img src={Gender} alt="" />
                </div>
                <div className=" font-inter text-[14px] leading-[19.6px] ">
                  Gender
                </div>
              </div>
              <div className=" opacity-50 font-inter text-[14px] leading-[19.6px] ">
                Female
              </div>
            </div>
            <div className=" flex items-center justify-between px-[10px] py-[10px] ">
              <div className=" flex items-center gap-[10px] ">
                <div>
                  <img src={DOB} alt="" />
                </div>
                <div className=" font-inter text-[14px] leading-[19.6px] ">
                  DOB
                </div>
              </div>
              <div className=" opacity-50 font-inter text-[14px] leading-[19.6px] ">
                27/02/1976
              </div>
            </div>
          </div>

          {/* Contact Details */}
          <div className=" flex flex-col py-[10px] px-[10px] gap-[10px] border-b border-gray-300 ">
            <div className=" font-inter text-[14px] leading-[19.6px] ">
              Contact Details
            </div>
            <div className=" flex items-center justify-between px-[10px] py-[10px] ">
              <div className=" flex items-center gap-[10px] ">
                <div>
                  <img src={Gender} alt="" />
                </div>
                <div className=" font-inter text-[14px] leading-[19.6px] ">
                  Phone
                </div>
              </div>
              <div className=" opacity-50 font-inter text-[14px] leading-[19.6px] ">
                (406) 555-0120
              </div>
            </div>
            <div className=" flex items-center justify-between px-[10px] py-[10px] ">
              <div className=" flex items-center gap-[10px] ">
                <div>
                  <img src={Mail} alt="" />
                </div>
                <div className=" font-inter text-[14px] leading-[19.6px] ">
                  Mail
                </div>
              </div>
              <div className=" opacity-50 font-inter text-[14px] leading-[19.6px] ">
                xyz@gmail.com
              </div>
            </div>
            <div className=" flex items-center justify-between px-[10px] py-[10px] ">
              <div className=" flex items-center gap-[10px] ">
                <div>
                  <img src={Location}/>
                </div>
                <div className=" font-inter text-[14px] leading-[19.6px] ">
                  Address
                </div>
              </div>
              <div className=" opacity-50 font-inter text-[14px] leading-[19.6px] ">
                Ahmedabad, Gujarat
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
        @media (min-width: 768px) {
          div[data-id="list-section"] {
            width: calc(100vw - 300px);
          }
        }
        @media (min-width: 1152px) {
          div[data-id="list-section"] {
            width: calc(100vw - 730px);
          }
        }
      `}
      </style>
    </>
  );
};

export default PharmacyInquiries;
