import React from "react";
import Personal from "../../assets/Patient/Personal.png";

const PatientInfo = () => {
  return (
    <>
      <div className=" flex flex-col w-full lg:items-center lg:justify-center lg:flex-row px-[16px] md:px-[32px] py-[30px] md:py-[60px] lg:py-[60px] gap-[24px] lg:gap-[49px] ">
        <div className=" flex flex-col items-center order-1 lg:order-2 ">
          <img className=" w-[240px] h-[240px] md:w-[274px] md:h-[274px] lg:w-[362px] lg:h-[362px] " src={Personal} alt="" />
        </div>
        <div className=" flex flex-col items-start w-full lg:w-[631px] xl:w-[829px] rounded-[8px] border border-black/20 bg-white shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] order-2 lg:order-1 gap-[24px] px-[20px] py-[20px] md:gap-[36px] ">
          <div className=" font-inter font-semibold text-[20px] leading-[25.2px] ">
            Personal Info
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

            <div className=" flex flex-col md:flex-row md:justify-between items-end w-full gap-[16px] md:gap-[43px] ">
              <div className=" flex flex-col gap-[8px] w-full ">
                <div className=" py-[10px] px-[10px] text-[16px] leading-[22px] ">
                  Date of Birth
                </div>
                <input
                  type="Date"
                  className="border cursor-text w-full rounded-[8px] border-[rgba(0,0,0,0.5)] text-[14px] leading-[22px] px-[10px] py-[10px] "
                  placeholder=" Select Date "
                />
              </div>
              <div className=" flex flex-col gap-[8px] w-full h-full ">
                <div className=" py-[10px] px-[10px] text-[16px] leading-[22px] ">
                  Select Gender
                </div>
                <select className="border appearance-none cursor-pointer w-full h-full rounded-[8px] border-[rgba(0,0,0,0.5)] text-[14px] leading-[22px] px-[10px] py-[10px] ">
                  <option value="">Select Option</option>
                  <option value="option1">Male</option>
                  <option value="option2">Female</option>
                  <option value="option2">Prefer Not to say</option>
                </select>
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

export default PatientInfo;
