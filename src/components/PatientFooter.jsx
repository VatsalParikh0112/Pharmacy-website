import React from "react";
import whitelogo from "../assets/Footer/whitelogo.png";
import whatsapp from "../assets/Footer/whatsapp.png";
import mail from "../assets/Footer/mail.png";
import twitter from "../assets/Footer/twitter.png";
import insta from "../assets/Footer/insta.png";
import facebook from "../assets/Footer/facebook.png";
import linkedin from "../assets/Footer/linkedin.png";

const PatientFooter = () => {
  return (
    <>
      <div className=" flex flex-col itmes-center font-inter text-white bg-[#26C193] gap-[16px] px-[16px] py-[32px] md:px-[32px] md:py-[48px] lg:px-[80px] lg:py-[64px] xl:px-[80px] xl:py-[80px] ">
        {/* footer details */}
        <div className=" flex flex-col md:flex-row flex-wrap items-start justify-between gap-y-[32px]  ">
          <div className=" flex flex-col items-start gap-[12px] h-[66.7px] md:gap-[22px] md:w-[288px]  ">
            <div className=" flex items-center h-[22.667px] gap-[5.844px] md:gap-[8.25px]  ">
              <img
                className=" w-[23.906px] h-[21.25px] md:w-[33.75px] md:h-[30px] "
                src={whitelogo}
                alt=""
              />
              <div className=" font-bold leading-[17px] text-[17px] md:leading-[24px] md:text-[24px] ">
                Find MyPharmacy
              </div>
            </div>
            <div className=" leading-[16px] text-[14px] w-[257px] md:leading-[20px] md:text-[16px] font-thin ">
              Your trusted partner in finding the right pharmacy.
            </div>
          </div>

          <div className="hidden md:flex flex-col items-start gap-[20px] w-[288px] h-[161px] lg:w-[152px] xl:w-[288px] ">
            <div className=" self-stretch font-bold text-[18px] leading-[18px] h-[21px] ">
              Quick Links
            </div>
            <div className="flex flex-col self-stretch items-start gap-[8px] ">
              <div className=" cursor-pointer text-[16px] leading-[16px] h-[20px] ">Current Request</div>
              <div className=" cursor-pointer text-[16px] leading-[16px] h-[20px] ">
                Patient Info
              </div>
              <div className=" cursor-pointer text-[16px] leading-[16px] h-[20px] ">
                Insurance Info
              </div>
              <div className=" cursor-pointer text-[16px] leading-[16px] h-[20px] ">
                History
              </div>
            </div>
          </div>

          <div className=" flex flex-col items-start py-[3px] gap-[12px] h-[86px] md:w-[288px] md:h-[106px] md:gap-[20px] lg:w-[221px] xl:w-[288px] ">
            <div className=" font-bold leading-[18px] text-[14px] md:text-[18px] md:leading-[18px] ">
              Support
            </div>
            <div className=" flex flex-col items-start gap-[8px] h-[56px] ">
              <div className=" flex items-center gap-[8px] py-[2px] h-[20px] ">
                <img className=" cursor-pointer w-[14px] h-[16px] " src={whatsapp} alt="" />
                <div className=" cursor-pointer font-[16px] leading-[16px] ">
                  +123 456 789 0
                </div>
              </div>
              <div className=" flex items-center gap-[8px] py-[2px] h-[20px] ">
                <img className=" w-[14px] h-[16px] " src={mail} alt="" />
                <div className=" font-[16px] leading-[16px] ">
                  support@findpharma.com
                </div>
              </div>
            </div>
          </div>

          <div className=" flex flex-col items-start gap-[12px] py-[3px] h-[78px] md:w-[288px] md:h-[106px] md:gap-[20px] lg:w-[138px] xl:w-[288px] ">
            <div className=" font-bold text-[14px] leading-[18px] md:text-[18px] md:leading-[18px] ">
              Follow Us
            </div>
            <div className=" flex gap-[16px] ">
              <img className=" cursor-pointer w-[24px] h-[24px] " src={facebook} alt="" />
              <img className=" cursor-pointer w-[24px] h-[24px] " src={twitter} alt="" />
              <img className=" cursor-pointer w-[24px] h-[24px] " src={insta} alt="" />
              <img className=" cursor-pointer w-[24px] h-[24px] " src={linkedin} alt="" />
            </div>
          </div>
        </div>

        {/* copyrights */}
        <div className=" text-center border-white border-t-[1px] text-[12px] leading-[16px] pt-[12px] px-[10px] ">
          © 2025 FindMy Pharma. All rights reserved.
        </div>
      </div>
    </>
  );
};

export default PatientFooter;
