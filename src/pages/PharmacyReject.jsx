import React, { useState } from "react";
import { Search, X } from "lucide-react";

const PharmacyReject = () => {
  const [inputValue, setInputValue] = useState("");
  const [openDropdown, setOpenDropdown] = useState(null); // Track which dropdown is open

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleClear = () => {
    setInputValue("");
  };

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index); // Toggle dropdown
  };

  return (
    <div className="flex flex-col gap-[18px] py-[8px] px-[16px] md:py-[24px] md:px-[32px] w-full">
      <div className="flex flex-col gap-[16px] md:gap-[10px] max-w-[466px]">
        <div className="font-inter font-medium text-[18px] leading-[25.2px]">
          Rejected Request
        </div>

        <div className="flex items-center gap-[10px] w-full">
          <div className="flex items-center bg-[#F2F8F680] border shadow-inner border-black/10 shadow-black/10 rounded-[4px] py-[2px] px-[12px] w-full h-[40px] gap-[8px]">
            <Search className="text-gray-500 w-[24px] h-[24px]" />
            <input
              type="text"
              value={inputValue}
              onChange={handleChange}
              placeholder="Search..."
              className="font-inter font-medium opacity-50 text-[14px] leading-[19.2px] w-full bg-transparent border-none focus:outline-none"
            />
            {inputValue && (
              <button
                onClick={handleClear}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-[24px] h-[24px]" />
              </button>
            )}
          </div>
          <div className="rounded-[4px] px-[8px] py-[8px] border border-black/10 bg-[rgba(242,248,246,0.50)] shadow-[inset_0px_0px_4px_0px_rgba(0,0,0,0.10)]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 6C12 6.53043 12.2107 7.03914 12.5858 7.41421C12.9609 7.78929 13.4696 8 14 8C14.5304 8 15.0391 7.78929 15.4142 7.41421C15.7893 7.03914 16 6.53043 16 6M12 6C12 5.46957 12.2107 4.96086 12.5858 4.58579C12.9609 4.21071 13.4696 4 14 4C14.5304 4 15.0391 4.21071 15.4142 4.58579C15.7893 4.96086 16 5.46957 16 6M12 6H4M16 6H20M6 12C6 12.5304 6.21071 13.0391 6.58579 13.4142C6.96086 13.7893 7.46957 14 8 14C8.53043 14 9.03914 13.7893 9.41421 13.4142C9.78929 13.0391 10 12.5304 10 12M6 12C6 11.4696 6.21071 10.9609 6.58579 10.5858C6.96086 10.2107 7.46957 10 8 10C8.53043 10 9.03914 10.2107 9.41421 10.5858C9.78929 10.9609 10 11.4696 10 12M6 12H4M10 12H20M15 18C15 18.5304 15.2107 19.0391 15.5858 19.4142C15.9609 19.7893 16.4696 20 17 20C17.5304 20 18.0391 19.7893 18.4142 19.4142C18.7893 19.0391 19 18.5304 19 18M15 18C15 17.4696 15.2107 16.9609 15.5858 16.5858C15.9609 16.2107 16.4696 16 17 16C17.5304 16 18.0391 16.2107 18.4142 16.5858C18.7893 16.9609 19 17.4696 19 18M15 18H4M19 18H20"
                stroke="black"
                stroke-width="1.25"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Request List */}
      <div className="flex flex-col items-start w-full gap-[12px]">
        {[...Array(10)].map((_, index) => (
          <div
            key={index}
            className="w-full bg-white shadow-sm rounded-[4px] border border-gray-300"
          >
            {/* Request Item */}
            <div className="flex flex-col items-start w-full px-[12px] py-[12px] gap-[10px] md:px-[24px] md:py-[32px] md:gap-[40px]  ">
              <div className=" flex justify-between items-center w-full ">
                <div className="font-inter flex flex-col gap-[2px]">
                  <div className="font-medium text-[14px] leading-[19.6px] md:text-[16px] md:leading-[25.2px] md:font-bold ">
                    Request <span>#{index + 111}</span>
                  </div>
                  <div className="font-normal text-gray-500 text-[12px] leading-[16.8px]  md:text-[14px] md:leading-[19.6px] ">
                    Requested: February 15, 2025, 2.30 PM EST (10 min ago)
                  </div>
                </div>

                {/* Dropdown Button */}
                <div
                  className=" cursor-pointer "
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleDropdown(index);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className={`transition-transform duration-300 md:hidden ${
                      openDropdown === index ? "rotate-180" : ""
                    }`}
                  >
                    <path
                      d="M6 9l6 6 6-6"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                {/* Accept or reject */}
                <div className="font-inter hidden md:flex  gap-[18px] items-center ">
                  <button className="flex justify-center items-center rounded-[4px] text-white px-[24px] py-[12px] border border-[#29B48B] bg-[#EFF9F0]">
                    <div className=" text-center text-[#29B48B] text-[14px] leading-[19.6px] ">
                      Recall
                    </div>
                  </button>
                  
                </div>
              </div>

              {/* medical details */}
              <div className=" hidden md:flex w-full justify-between ">
                <div className=" flex flex-col items-start ">
                  <div className=" font-inter font-normal opacity-50 text-[14px] leading-[19.2px] ">
                    Genric Name
                  </div>
                  <div className=" font-poppins font-medium text-[16px] leading-[25.2px] ">
                    Amoxicillin
                  </div>
                </div>
                <div className=" flex flex-col items-start ">
                  <div className=" font-inter font-normal opacity-50 text-[14px] leading-[19.2px] ">
                    Brand Name
                  </div>
                  <div className=" font-poppins font-medium text-[16px] leading-[25.2px] ">
                    Amoxil
                  </div>
                </div>
                <div className=" flex flex-col items-start ">
                  <div className=" font-inter font-normal opacity-50 text-[14px] leading-[19.2px] ">
                    Strength
                  </div>
                  <div className=" font-poppins font-medium text-[16px] leading-[25.2px] ">
                    500mg
                  </div>
                </div>
                <div className=" flex flex-col items-start ">
                  <div className=" font-inter font-normal opacity-50 text-[14px] leading-[19.2px] ">
                    Dose Form
                  </div>
                  <div className=" font-poppins font-medium text-[16px] leading-[25.2px] ">
                    1 Tablet daily
                  </div>
                </div>
                <div className=" flex flex-col items-start ">
                  <div className=" font-inter font-normal opacity-50 text-[14px] leading-[19.2px] ">
                    NDC
                  </div>
                  <div className=" font-poppins font-medium text-[16px] leading-[25.2px] ">
                    0-123-456-789
                  </div>
                </div>
              </div>
            </div>

            {/* Dropdown Content */}
            {openDropdown === index && (
              <div className="border-t md:hidden border-gray-300 px-[12px] py-[12px] rounded-b-[4px] shadow-md">
                {/* Details */}
                <div className=" flex flex-col gap-[12px] font-inter">
                  <div className=" flex flex-col gap-[4px] font-inter ">
                    <div>
                      <span className=" opacity-50 text-[12px] leading-[16.8px] ">
                        Generic name
                      </span>
                      <p className="font-medium text-[14px] leading-[19.6px] ">
                        Amoxicillin
                      </p>
                    </div>

                    <div>
                      <span className="opacity-50 text-[12px] leading-[16.8px] ">
                        Brand name
                      </span>
                      <p className="font-medium text-[14px] leading-[19.6px]">
                        Amoxil
                      </p>
                    </div>

                    <div>
                      <span className="opacity-50 text-[12px] leading-[16.8px] ">
                        Strength
                      </span>
                      <p className="font-medium text-[14px] leading-[19.6px]">
                        500mg
                      </p>
                    </div>

                    <div>
                      <span className="opacity-50 text-[12px] leading-[16.8px] ">
                        Dose form
                      </span>
                      <p className="font-medium text-[14px] leading-[19.6px]">
                        1 tablet daily
                      </p>
                    </div>

                    <div>
                      <span className="opacity-50 text-[12px] leading-[16.8px]">
                        NDC
                      </span>
                      <p className="font-medium text-[14px] leading-[19.6px]">
                        0123-4567-89
                      </p>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="font-inter flex md:hidden w-full justify-center  gap-[18px] items-center  ">
                    <button className="flex justify-center items-center rounded-[4px] border border-[#29B48B] bg-[#EFF9F0] text-white gap-[8px] py-[12px] px-[24px]  ">
                      <div className=" font-medium text-center text-[14px] leading-[19.6px] text-[#29B48B] ">
                        Recall
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PharmacyReject;
