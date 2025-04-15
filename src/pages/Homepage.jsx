import React from "react";
import { useState } from "react";
import search from "../assets/Homepage/search.png";
import cl from "../assets/Homepage/cl.png";
import cr from "../assets/Homepage/cr.png";
import mdcl from "../assets/Homepage/mdcl.png";
import mdcr from "../assets/Homepage/mdcr.png";
import OTC from "../assets/Homepage/Carousel/OTC.png";
import Supplies from "../assets/Homepage/Carousel/Supplies.png";
import Easy from "../assets/Homepage/Carousel/Easy.png";
import Bell from "../assets/Homepage/Carousel/Bell.png";
import Location from "../assets/Homepage/Carousel/Location.png";
import Time from "../assets/Homepage/Carousel/Time.png";
import ABC from "../assets/Homepage/ABC.jpg";
import ABC2 from "../assets/Homepage/ABC2.png";

const Homepage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [cl, cr, mdcl];

  return (
    <>
      <div className="flex flex-col gap-[8px] ">
        {/* Homepage */}
        <div className=" flex flex-col items-start ">
          {/* Hero section */}
          <div
            className=" flex justify-start lg:justify-between items-center self-stretch bg-[#F2F4F8] px-[16px] py-[83px] md:py-[138px] md:pl-[32px] md:pr-[219px] lg:py-[80px] lg:px-[80px] xl:py-[100px] xl:px-[80px] "
            style={{
              background:
                "linear-gradient(285deg, rgba(240, 253, 252, 0.80) 7.57%, rgba(207, 242, 230, 0.80) 106.54%)",
            }}
          >
            <div className=" flex flex-col items-start gap-[20px] md:gap-[24px] ">
              <div className=" flex flex-col items-start gap-[14px] md:gap-[24px] ">
                <div className=" flex font-inter flex-col items-start self-stretch gap-[14px] md:gap-[16px] ">
                  <div className=" font-medium text-[14px] leading-[22px] md:text-[16px] lg:text-[18px] ">
                    Welcome to Find My Pharmacy
                  </div>
                  <div className=" self-stretch font-bold text-[24px] leading-[32px] md:text-[32px] md:leading-[44px] lg:text-[36px] lg:w-[517px] ">
                    The Best Way To Find&nbsp;
                    <span className=" text-[#29B48B] ">Pharmacy</span>
                  </div>
                </div>
                <div className=" break-words text-[12px] font-poppins leading-[20px]  md:text-[14px] md:leading-[22.4px] lg:text-[16px] ">
                  <span className="font-normal">
                    Tell us about medicine, we will connect you with pharmacy
                    who has it in stock.
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
                  className="flex justify-center items-center font-poppins text-center text-white bg-[#29B48B] text-[12px] leading-[22.4px] gap-[8px] rounded-[4px] w-[160px] h-[40px] md:p-[16px] md:w-[185px] lg:w-[200px] lg:h-[50px] lg:text-[16px] "
                >
                  <img src={search} alt="" />
                  Find a Pharmacy
                </button>
              </div>
            </div>

            <img
              className=" hidden rounded-lg lg:block xl:hidden w-[435px] h-[430px] "
              src={ABC}
              alt=""
            />
            <img
              className=" hidden rounded-lg xl:block w-[640px] h-[430px] "
              src={ABC2}
              alt=""
            />
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

            {/* carousel */}
            <div className="flex w-full h-full justify-center rounded-[4px] md:px-[32px]">
              <div className="relative w-full overflow-hidden h-full bg-[#F2F2F2] rounded-[8px]">
                {/* Slide Container */}
                <div
                  className="flex h-full transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {/* Slide 1 - e.g. Image Left, Text Right */}
                  <div className="w-full flex-shrink-0 flex flex-col justify-between items-center h-full pt-[20px] px-[16px] md:px-[32px]">
                    <div className="flex flex-col font-inter items-center gap-[8px] max-w-[800px]">
                      <div className="text-center font-bold text-[16px] md:text-[20px] md:leading-[35.2px] lg:text-[24px]">
                      One Place,  No Cost
                      </div>
                      <div className="text-center opacity-70 text-[12px] md:text-[16px] lg:text-[18px]">
                      Our platform simplifies your healthcare journey by bringing all pharmacy services to your fingertips.
                      </div>
                    </div>

                    {/* Cards Section */}
                    <div className="flex flex-col lg:flex-row w-full gap-[12px] md:gap-[18px] lg:gap-[32px] py-[12px] lg:items-stretch">
                      {/* Card 1 */}
                      <div className="flex flex-col items-center bg-white shadow-md rounded-[8px] px-[20px] py-[12px] gap-[16px] md:py-[14px] lg:py-[16px] w-full lg:w-[274px] xl:w-[352px] flex-1">
                        <img
                          className="w-[32px] h-[32px] md:w-[44px] md:h-[44px]"
                          src={OTC}
                        />
                        <div className="flex flex-col font-inter text-center gap-[6px] lg:gap-[13px]">
                          <div className="font-semibold text-[14px] md:text-[18px] lg:text-[20px] lg:leading-[35.2px]">
                          Search Prescription & OTC medications nearby
                          </div>
                          <div className="opacity-50 text-[12px] md:text-[14px] lg:text-[16px] lg:leading-[28px]">
                          Find your medications without calling multiple pharmacies, Check availability
                          </div>
                        </div>
                      </div>

                      {/* Card 2 */}
                      <div className="flex flex-col items-center bg-white shadow-md rounded-[8px] px-[20px] py-[12px] gap-[16px] md:py-[14px] lg:py-[16px] w-full lg:w-[274px] xl:w-[352px] flex-1">
                        <img
                          className="w-[32px] h-[32px] md:w-[44px] md:h-[44px]"
                          src={Supplies}
                        />
                        <div className="flex flex-col font-inter text-center gap-[6px] lg:gap-[13px]">
                          <div className="font-semibold text-[14px] md:text-[18px] lg:text-[20px] lg:leading-[35.2px]">
                          Locate pharmacies with medical supplies
                          </div>
                          <div className="opacity-50 text-[12px] md:text-[14px] lg:text-[16px] lg:leading-[28px]">
                          From bandages to blood pressure monitors, find all medical supplies for you
                          </div>
                        </div>
                      </div>

                      {/* Card 3 */}
                      <div className="flex flex-col items-center bg-white shadow-md rounded-[8px] px-[20px] py-[12px] gap-[16px] md:py-[14px] lg:py-[16px] w-full lg:w-[274px] xl:w-[352px] flex-1">
                        <img
                          className="w-[32px] h-[32px] md:w-[44px] md:h-[44px]"
                          src={Easy}
                        />
                        <div className="flex flex-col font-inter text-center gap-[6px] lg:gap-[13px]">
                          <div className="font-semibold text-[14px] md:text-[18px] lg:text-[20px] lg:leading-[35.2px]">
                          Find services easily
                          </div>
                          <div className="opacity-50 text-[12px] md:text-[14px] lg:text-[16px] lg:leading-[28px]">
                          Locate specialized pharmacies that offer custom medication compounding for you
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Slide 2 - e.g. Fullscreen image with overlay */}
                  <div className="w-full flex-shrink-0 flex flex-col justify-between items-center h-full pt-[20px] px-[16px] md:px-[32px]">
                    <div className="flex flex-col font-inter items-center gap-[8px] max-w-[800px]">
                      <div className="text-center font-bold text-[16px] md:text-[20px] md:leading-[35.2px] lg:text-[24px]">
                        Save Time and Effort
                      </div>
                      <div className="text-center opacity-70 text-[12px] md:text-[16px] lg:text-[18px]">
                        Save valuable time and effort with our streamlined
                        pharmacy search process.
                      </div>
                    </div>

                    {/* Cards Section */}
                    <div className="flex flex-col lg:flex-row w-full gap-[12px] md:gap-[18px] lg:gap-[32px] py-[12px] lg:items-stretch">
                      {/* Card 1 */}
                      <div className="flex flex-col items-center bg-white shadow-md rounded-[8px] px-[20px] py-[12px] gap-[16px] md:py-[14px] lg:py-[16px] w-full lg:w-[274px] xl:w-[352px] flex-1">
                        <img
                          className="w-[32px] h-[32px] md:w-[44px] md:h-[44px]"
                          src={Bell}
                        />
                        <div className="flex flex-col font-inter text-center gap-[6px] lg:gap-[13px]">
                          <div className="font-semibold text-[14px] md:text-[18px] lg:text-[20px] lg:leading-[35.2px]">
                            Quick Acces to Pharmacy Information
                          </div>
                          <div className="opacity-50 text-[12px] md:text-[14px] lg:text-[16px] lg:leading-[28px]">
                            Avoid long waits or uncessary trips to pharmacies
                            that may not have what you need
                          </div>
                        </div>
                      </div>

                      {/* Card 2 */}
                      <div className="flex flex-col items-center bg-white shadow-md rounded-[8px] px-[20px] py-[12px] gap-[16px] md:py-[14px] lg:py-[16px] w-full lg:w-[274px] xl:w-[352px] flex-1">
                        <img
                          className="w-[32px] h-[32px] md:w-[44px] md:h-[44px]"
                          src={Location}
                        />
                        <div className="flex flex-col font-inter text-center gap-[6px] lg:gap-[13px]">
                          <div className="font-semibold text-[14px] md:text-[18px] lg:text-[20px] lg:leading-[35.2px]">
                            Instant Availablity Checks
                          </div>
                          <div className="opacity-50 text-[12px] md:text-[14px] lg:text-[16px] lg:leading-[28px]">
                            Directly request medication availability, saving
                            time compared to calling multiple pharmacies.
                          </div>
                        </div>
                      </div>

                      {/* Card 3 */}
                      <div className="flex flex-col items-center bg-white shadow-md rounded-[8px] px-[20px] py-[12px] gap-[16px] md:py-[14px] lg:py-[16px] w-full lg:w-[274px] xl:w-[352px] flex-1">
                        <img
                          className="w-[32px] h-[32px] md:w-[44px] md:h-[44px]"
                          src={Time}
                        />
                        <div className="flex flex-col font-inter text-center gap-[6px] lg:gap-[13px]">
                          <div className="font-semibold text-[14px] md:text-[18px] lg:text-[20px] lg:leading-[35.2px]">
                            Quick Response Time
                          </div>
                          <div className="opacity-50 text-[12px] md:text-[14px] lg:text-[16px] lg:leading-[28px]">
                            Receive answers within 15 minutes, ensuring you get
                            the information you need without delay.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Slide 3 - e.g. Text Top, Image Bottom */}
                  <div className="w-full flex-shrink-0 flex flex-col justify-between items-center h-full pt-[20px] px-[16px] md:px-[32px]">
                    <div className="flex flex-col font-inter items-center gap-[8px] max-w-[800px]">
                      <div className="text-center font-bold text-[16px] md:text-[20px] md:leading-[35.2px] lg:text-[24px]">
                        Designed with Patients in Mind
                      </div>
                      <div className="text-center opacity-70 text-[12px] md:text-[16px] lg:text-[18px]">
                        FindMyPharmacy is built for you—fast, secure, and easy
                        to use, every step of the way.
                      </div>
                    </div>

                    {/* Cards Section */}
                    <div className="flex flex-col lg:flex-row w-full gap-[12px] md:gap-[18px] lg:gap-[32px] py-[12px] lg:items-stretch">
                      {/* Card 1 */}
                      <div className="flex flex-col items-center bg-white shadow-md rounded-[8px] px-[20px] py-[12px] gap-[16px] md:py-[14px] lg:py-[16px] w-full lg:w-[274px] xl:w-[352px] flex-1">
                        <img
                          className="w-[32px] h-[32px] md:w-[44px] md:h-[44px]"
                          src={Location}
                        />
                        <div className="flex flex-col font-inter text-center gap-[6px] lg:gap-[13px]">
                          <div className="font-semibold text-[14px] md:text-[18px] lg:text-[20px] lg:leading-[35.2px]">
                            Easy Navigation
                          </div>
                          <div className="opacity-50 text-[12px] md:text-[14px] lg:text-[16px] lg:leading-[28px]">
                            The platform is simple to use, making it easy for
                            anyone to search for pharmacies and request
                            medication availability.
                          </div>
                        </div>
                      </div>

                      {/* Card 2 */}
                      <div className="flex flex-col items-center bg-white shadow-md rounded-[8px] px-[20px] py-[12px] gap-[16px] md:py-[14px] lg:py-[16px] w-full lg:w-[274px] xl:w-[352px] flex-1">
                        <img
                          className="w-[32px] h-[32px] md:w-[44px] md:h-[44px]"
                          src={Time}
                        />
                        <div className="flex flex-col font-inter text-center gap-[6px] lg:gap-[13px]">
                          <div className="font-semibold text-[14px] md:text-[18px] lg:text-[20px] lg:leading-[35.2px]">
                            General Inquiries Section
                          </div>
                          <div className="opacity-50 text-[12px] md:text-[14px] lg:text-[16px] lg:leading-[28px]">
                            It allows you to easily ask pharmacies any questions
                            you may have about medications, general health or
                            services offered.
                          </div>
                        </div>
                      </div>

                      {/* Card 3 */}
                      <div className="flex flex-col items-center bg-white shadow-md rounded-[8px] px-[20px] py-[12px] gap-[16px] md:py-[14px] lg:py-[16px] w-full lg:w-[274px] xl:w-[352px] flex-1">
                        <img
                          className="w-[32px] h-[32px] md:w-[44px] md:h-[44px]"
                          src={Bell}
                        />
                        <div className="flex flex-col font-inter text-center gap-[6px] lg:gap-[13px]">
                          <div className="font-semibold text-[14px] md:text-[18px] lg:text-[20px] lg:leading-[35.2px]">
                            Transparent Communication
                          </div>
                          <div className="opacity-50 text-[12px] md:text-[14px] lg:text-[16px] lg:leading-[28px]">
                            Enables open communication between patient and
                            pharmacies which is "End to End Encrypted”.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Slide 4 - Another custom layout */}
                </div>

                {/* Navigation Buttons */}
                <button
                  onClick={() =>
                    setCurrentSlide(
                      (prev) => (prev - 1 + slides.length) % slides.length
                    )
                  }
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/40 text-white px-3 py-1 rounded-full z-10"
                >
                  ‹
                </button>
                <button
                  onClick={() =>
                    setCurrentSlide((prev) => (prev + 1) % slides.length)
                  }
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/40 text-white px-3 py-1 rounded-full z-10"
                >
                  ›
                </button>
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
