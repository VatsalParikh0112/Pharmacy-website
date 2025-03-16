import React from "react";
import search from "../assets/Homepage/search.png";
import cl from "../assets/Homepage/cl.png";
import cr from "../assets/Homepage/cr.png";
import mdcl from "../assets/Homepage/mdcl.png";
import mdcr from "../assets/Homepage/mdcr.png";

const Homepage = () => {
  return (
    <>
      <div className="flex flex-col gap-[8px] ">
        {/* Homepage */}
        <div className=" flex flex-col items-start ">
          {/* Hero section */}
          <div className=" flex justify-center lg:justify-between items-center self-stretch bg-[#F2F4F8] px-[16px] py-[83px] md:py-[138px] md:pl-[32px] md:pr-[219px] lg:py-[80px] lg:px-[80px] xl:py-[100px] xl:px-[80px] ">
            <div className=" flex flex-col items-start gap-[20px] md:gap-[24px] ">
              <div className=" flex flex-col items-start gap-[14px] md:gap-[24px] ">
                <div className=" flex font-inter flex-col items-start self-stretch gap-[14px] md:gap-[16px] ">
                  <div className=" font-medium text-[14px] leading-[22px] md:text-[16px] lg:text-[18px] ">
                    Welcome to Find My Pharmacy
                  </div>
                  <div className=" self-stretch font-bold text-[24px] leading-[32px] md:text-[32px] md:leading-[44px] md:w-[490px] lg:text-[36px] lg:w-[517px] ">
                    The Best Way To Find{" "}
                    <span className=" text-[#29B48B] ">Pharmacy</span>
                  </div>
                </div>
                <div className=" break-words text-[12px] font-poppins leading-[20px]  md:text-[14px] md:leading-[22.4px] lg:text-[16px] ">
                  <span className="font-normal">
                    Tell us about medicine, we will connect you with pharmacy
                    who has it in stock.{" "}
                  </span>
                  <br />
                  <span className=" font-semibold ">
                    It’s fast and reliable
                  </span>
                </div>
              </div>

              <div>
                <button
                  type="button"
                  class="flex justify-center items-center font-poppins text-center text-white bg-[#29B48B] text-[12px] leading-[22.4px] gap-[8px] rounded-[4px] w-[160px] h-[40px] md:p-[16px] lg:w-[200px] lg:h-[50px] lg:text-[16px] "
                >
                  <img src={search} alt="" />
                  Find a Pharmacy
                </button>
              </div>
            </div>

            <div className=" hidden lg:block bg-gray-500 w-[435px] h-[430px] xl:w-[640px] xl:h-[430px] "></div>
          </div>

          {/* Features */}
          <div className=" flex flex-col items-center self-stretch gap-[36px] py-[32px] px-[16px] md:gap-[48px] md:py-[42px] md:px-[32px] lg:py-[52px] lg:px-[80px] xl:py-[56px] xl:px-[80px] ">
            <div className=" flex flex-col items-start self-stretch gap-[8px] md:gap-[14px] lg:gap-[14px] ">
              <div className=" font-inter text-[#249C79] text-[14px] leading-[22.4px] lg:text-[16px] xl:text-[18px] ">
                Features
              </div>
              <div className=" font-inter font-semibold text-[20px] leading-[28px] md:text-[24px] md:leading-[30px] lg:text-[28px] lg:leading-[35.2px] xl:text-[32px] ">
                Why Choose Find My Pharma?
              </div>
              <div className=" font-poppins opacity-80 text-[12px] leading-[20px] md:text-[14px] md:leading-[20px] lg:text-[16px] lg:leading-[22.4px] ">
                Discover how Find Pharma simplifies your search for nearby
                pharmacies. Our platform offers essential features to enhance
                your experience.
              </div>
            </div>

            <div className="flex  w-full justify-center bg-[#7F7F7F] rounded-[4px] h-[350px] md:h-[500px] md:px-[32px] ">
              <div className=" flex items-center justify-between w-full gap-[12px] px-[2px] md:gap-[102px] lg:gap-[146px] ">
                <img className=" md:hidden " src={cl} />
                <img className=" hidden md:block " src={mdcl} />
                <div className="flex flex-col items-start gap-[12px] md:gap-[14px]">
                  <div className="text-white font-semibold text-[20px] leading-[22px] md:text-[24px] md:leading-[35.2px] ">
                    Real Time Pharmacy Search
                  </div>
                  <p className="text-white text-[14px] leading-[19.6px] md:text-[18px] md:leading-[28px] ">
                    Find nearby pharmacy with verified details
                  </p>
                </div>
                <img className=" md:hidden " src={cr} />
                <img className=" hidden md:block " src={mdcr} />
              </div>
            </div>
          </div>

          {/* Process */}
          <div className=" flex flex-col items-center self-stretch bg-[#F2F4F8] gap-[36px] py-[32px] px-[16px] md:gap-[48px] md:py-[42px] md:px-[32px] lg:py-[52px] lg:px-[80px] xl:py-[56px] xl:px-[80px]  ">
            <div className=" flex flex-col items-start self-stretch gap-[8px] md:gap-[14px] lg:gap-[14px] ">
              <div className=" font-inter text-[#249C79] text-[14px] leading-[22.4px] lg:text-[16px] xl:text-[18px] ">
                Process
              </div>
              <div className=" font-inter font-semibold text-[20px] leading-[28px] md:text-[24px] md:leading-[30px] lg:text-[28px] lg:leading-[35.2px] xl:text-[32px] ">
                Follow These Simple Steps to Find Pharmacies
              </div>
              <div className=" font-poppins opacity-80 text-[12px] leading-[20px] md:text-[14px] md:leading-[20px] lg:text-[16px] lg:leading-[22.4px] ">
                Finding a pharmacy with your medicine is easy! Enter the details
                and zip code to get matched with nearby stocked pharmacies.
              </div>
            </div>

            <div className=" flex flex-col items-start   gap-[36px] md:gap-[48px] xl:gap-[52px] w-[288px] md:w-[704px] lg:w-[992px] xl:w-[1281px] ">
              <div className=" flex flex-col items-start self-stretch gap-[8px] md:gap-[14px] lg:gap-[24px] ">
                <img className=" bg-gray-500 w-full h-[150px] md:h-[462px] lg:h-[473px] xl:h-[611px]  "></img>
                <div className=" flex flex-col itmes-start  gap-[8px] md:gap-[12px] lg:gap-[16px] ">
                  <div className=" font-semibold font-inter text-[14px] leading-[24px] md:text-[22px] md:leading-[26.4px] lg:text-[24px] lg:leading-[26.4px] ">
                    Step 2: Select Your Preferred Dose
                  </div>
                  <div className=" font-poppins text-[12px] leading-[20px] md:text-[16px] md:leading-[20px] ">
                    Choose the dosage that suits your needs.
                  </div>
                </div>
              </div>

              <div className=" flex flex-col items-start self-stretch gap-[8px] md:gap-[14px] lg:gap-[24px] ">
                <img className=" bg-gray-500 w-full h-[150px] md:h-[462px] lg:h-[473px] xl:h-[611px]  "></img>
                <div className=" flex flex-col itmes-start  gap-[8px] md:gap-[12px] lg:gap-[16px] ">
                  <div className=" font-semibold font-inter text-[14px] leading-[24px] md:text-[22px] md:leading-[26.4px] lg:text-[24px] lg:leading-[26.4px] ">
                    Step 3: Get Matched with Pharmacies
                  </div>
                  <div className=" font-poppins text-[12px] leading-[20px] md:text-[16px] md:leading-[20px] ">
                    Receive a list of pharmacies with stock.
                  </div>
                </div>
              </div>

              <div className=" flex flex-col items-start self-stretch gap-[8px] md:gap-[14px] lg:gap-[24px] ">
                <img className=" bg-gray-500 w-full h-[150px] md:h-[462px] lg:h-[473px] xl:h-[611px]  "></img>
                <div className=" flex flex-col itmes-start  gap-[8px] md:gap-[12px] lg:gap-[16px] ">
                  <div className=" font-semibold font-inter text-[14px] leading-[24px] md:text-[22px] md:leading-[26.4px] lg:text-[24px] lg:leading-[26.4px] ">
                    Step 1: Enter Your Medicine Name And Zip Code
                  </div>
                  <div className=" font-poppins text-[12px] leading-[20px] md:text-[16px] md:leading-[20px] ">
                    Provide the name of your medicine and zip code
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
