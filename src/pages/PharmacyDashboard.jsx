import React from "react";
import CurrentClr from "../assets/Dashboard/CurrentClr.png";
import NewClr from "../assets/Dashboard/NewClr.png";
import RejectClr from "../assets/Dashboard/RejectClr.png";
import RecallClr from "../assets/Dashboard/RecallClr.png";

const PharmacyDashboard = () => {
  return (
    <>
      <div className=" flex flex-col w-full px-[16px] gap-[86px] md:px-[32px] ">
        <div className="relative w-full h-[378px] flex justify-center">
          {/* Background Box */}
          <div className="absolute top-0 w-full h-[252px] border rounded-lg bg-gray-400 bg-gradient-to-b z-0"></div>

          {/* Content Wrapper (Overlapping the Background Box) */}
          <div className="absolute top-[150px] w-full flex flex-col items-center gap-[14px] z-10">
            {/* Profile Image */}
            <img className="w-[125px] h-[125px] rounded-full bg-gray-600 object-cover" />

            {/* Pharmacy Information */}
            <div className="flex flex-col items-center gap-[8px] w-full">
              <div className="text-center text-black font-medium text-[20px] leading-[24px]">
                Pharmacy Name
              </div>
              <div className="text-black text-[18px] leading-[25.2px] whitespace-nowrap">
                xz Pharmacy, Ahmedabad, Gujarat
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row font-inter justify-center md:justify-between items-start md:items-center self-stretch gap-[12px] md:gap-y-[24px] ">
          <div className=" flex md:flex-col lg:flex-row items-center self-stretch justify-between md:justify-center  rounded-lg border border-black/10 py-[10px] px-[16px] h-[80px] md:py-[32px] md:px-[24px] md:w-[170px] md:h-full md:gap-[24px] lg:w-[265px] ">
            <div className=" order-1 md:order-2 flex flex-col items-center lg:items-start ">
              <div className=" text-[13px] leading-[19.6px] " >Current Request</div>
              <div className=" text-[20px] leading-[22px] font-semibold md:leading-[35.2px] " >500</div>
            </div>
            <div className=" order-2 md:order-1 ">
              <img src={CurrentClr} alt="" />
            </div>
          </div>

          <div className=" flex md:flex-col lg:flex-row items-center self-stretch justify-between  md:justify-center rounded-lg border border-black/10  py-[10px] px-[16px] h-[80px] md:py-[32px] md:px-[24px] md:w-[170px] md:h-full md:gap-[24px] lg:w-[265px] ">
            <div className=" order-1 md:order-2 flex flex-col items-center md:items-start ">
              <div className=" text-[13px] leading-[19.6px] " >New Request</div>
              <div className=" text-[20px] leading-[22px] font-semibold md:leading-[35.2px] " >1000</div>
            </div>
            <div className=" order-2 md:order-1 " >
              <img src={NewClr} alt="" />
            </div>
          </div>

          <div className=" flex md:flex-col lg:flex-row items-center self-stretch justify-between md:justify-center  rounded-lg border border-black/10 py-[10px] px-[16px] h-[80px] md:py-[32px] md:px-[24px] md:w-[170px] md:h-full md:gap-[24px] lg:w-[265px] ">
            <div className=" order-1 md:order-2 flex flex-col items-center md:items-start ">
              <div className=" text-[13px] leading-[19.6px] " >Rejected Request</div>
              <div className=" text-[20px] leading-[22px] font-semibold md:leading-[35.2px] " >500</div>
            </div>
            <div className=" order-2 md:order-1 " >
              <img src={RejectClr} alt="" />
            </div>
          </div>
          
          <div className=" flex md:flex-col lg:flex-row items-center self-stretch justify-between md:justify-center  rounded-lg border border-black/10 py-[10px] px-[16px] h-[80px] md:py-[32px] md:px-[24px] md:w-[170px] md:h-full md:gap-[24px] lg:w-[265px] ">
            <div className=" order-1 md:order-2 flex flex-col items-center md:items-start ">
              <div className=" text-[13px] leading-[19.6px] " >Recall Request</div>
              <div className=" text-[20px] leading-[22px] font-semibold md:leading-[35.2px] " >500</div>
            </div>
            <div className=" order-2 md:order-1 " >
              <img src={RecallClr} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PharmacyDashboard;
