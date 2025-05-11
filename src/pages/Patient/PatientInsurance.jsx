import React, { useState } from "react";
import Insurance from "../../assets/Patient/Insurance.png";

const PatientInsurance = () => {
  const [activeButton, setActiveButton] = useState(null);

  return (
    <>
      <div className=" flex flex-col w-full lg:items-center lg:justify-center lg:flex-row px-[16px] md:px-[32px] py-[30px] md:py-[60px] lg:py-[60px] gap-[24px] lg:gap-[49px] ">
        <div className=" flex flex-col items-center order-1 lg:order-2 ">
          <img
            className=" w-[240px] h-[240px] md:w-[274px] md:h-[274px] lg:w-[362px] lg:h-[362px] "
            src={Insurance}
            alt=""
          />
        </div>
        <div className=" flex flex-col items-start w-full lg:w-[631px] xl:w-[829px] rounded-[8px] border border-black/20 bg-white shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] order-2 lg:order-1 gap-[24px] px-[20px] py-[20px] md:gap-[36px] ">
          <div className=" font-inter font-semibold text-[20px] leading-[25.2px] ">
            Insurance Info
          </div>
          <div className=" flex flex-col font-inter flex-start w-full gap-[20px] ">
            <div className=" flex flex-col md:flex-row md:justify-between w-full gap-[16px] md:gap-[43px] ">
              <div className=" flex flex-col gap-[8px] w-full ">
                <div className=" py-[10px] px-[10px] text-[16px] leading-[22px] ">
                  First Name
                </div>
                <input
                  type="text"
                  className="border cursor-text w-full rounded-[8px] border-[rgba(0,0,0,0.5)] text-[14px] leading-[22px] px-[10px] py-[10px] "
                  placeholder=" Enter Your First Name "
                />
              </div>
              <div className=" flex flex-col gap-[8px] w-full ">
                <div className=" py-[10px] px-[10px] text-[16px] leading-[22px] ">
                  Last Name
                </div>
                <input
                  type="text"
                  className="border cursor-text w-full rounded-[8px] border-[rgba(0,0,0,0.5)] text-[14px] leading-[22px] px-[10px] py-[10px] "
                  placeholder=" Enter Your Last Name "
                />
              </div>
            </div>

            <div className=" flex flex-col md:flex-row md:justify-between w-full gap-[16px] md:gap-[43px] ">
              <div className=" flex flex-col gap-[8px] w-full ">
                <div className=" py-[10px] px-[10px] text-[16px] leading-[22px] ">
                  Phone Number
                </div>
                <input
                  type="text"
                  className="border cursor-text w-full rounded-[8px] border-[rgba(0,0,0,0.5)] text-[14px] leading-[22px] px-[10px] py-[10px] "
                  placeholder=" (+1)123 456 789 "
                />
              </div>
              <div className=" flex flex-col gap-[8px] w-full ">
                <div className=" py-[10px] px-[10px] text-[16px] leading-[22px] ">
                  Email Id
                </div>
                <input
                  type="text"
                  className="border cursor-text w-full rounded-[8px] border-[rgba(0,0,0,0.5)] text-[14px] leading-[22px] px-[10px] py-[10px] "
                  placeholder=" Youremail@gmail.com "
                />
              </div>
            </div>

            <div className=" flex flex-col md:flex-row md:justify-between items-center w-full gap-[16px] md:gap-[43px] ">
              <div className=" flex flex-col items-center gap-[8px] w-full ">
                <div className=" py-[10px] px-[10px] text-[16px] leading-[22px] ">
                  Insurance Number
                </div>
                <div className="flex items-center gap-[8px] md:gap-[16px] lg:gap-[32px] h-[48px] px-[12px] rounded-lg border border-black/10 bg-[rgba(242,248,246,0.5)]">
                  {[1, 2, 3].map((num) => (
                    <button
                      key={num}
                      onClick={() => setActiveButton(num)} // ✅ set active on click
                      className={`flex h-[32px] py-[8px] px-[16px] justify-center items-center border rounded-[8px]
              ${
                activeButton === num
                  ? "bg-[#29B48B] text-white border-[#29B48B]"
                  : "bg-[#FCFDFD] text-black border-[#C7D5D1]"
              }`}
                    >
                      {num}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <div className=" flex w-full items-center justify-center ">
                <button className=" flex font-poppins w-full max-w-[430px] items-center justify-center rounded-[4px] bg-[#29B48B] text-white px-[16px] py-[10px] text-[14px] leading-[19.6px] ">
                  Save / Update
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PatientInsurance;
