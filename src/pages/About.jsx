import React, { useEffect, useState } from "react";
import Who from "../assets/About/Who.png";
import Who768 from "../assets/About/Who768.png";
import Vision from "../assets/About/Vision.png";
import Vision768 from "../assets/About/Vision768.png";
import Location from "../assets/About/Location.png";
import Verify from "../assets/About/Verify.png";
import Search from "../assets/About/Search.png";
import Accurate from "../assets/About/Accurate.png";
import Community from "../assets/About/Community.png";
import Secure from "../assets/About/Secure.png";

const About = () => {
  return (
    <>
      <div className="flex flex-col gap-[8px] ">
        {/* About US */}
        <div className=" flex flex-col items-start ">
          {/* Hero section */}
          <div
            className=" hero-section flex justify-start lg:justify-between items-center self-stretch bg-[#F2F4F8] px-[16px] py-[83px] h-[450px] md:py-[138px] md:pl-[32px] md:pr-[219px] lg:py-[80px] lg:px-[80px] xl:py-[100px] xl:px-[80px] "
            style={{
              background:
                "linear-gradient(285deg, rgba(240, 253, 252, 0.80) 7.57%, rgba(207, 242, 230, 0.80) 106.54%)",
            }}
          >
            <div className=" flex flex-col items-start gap-[20px] md:gap-[24px] ">
              <div className=" flex flex-col items-start gap-[14px] md:gap-[24px] ">
                <div className=" flex font-inter flex-col items-start self-stretch gap-[14px] md:gap-[16px] ">
                  <div className=" self-stretch font-bold text-[24px] leading-[32px] md:text-[32px] md:leading-[44px] lg:text-[36px] lg:w-[517px] ">
                    FindMy Pharmacy Your&nbsp;
                    <div className=" text-[#29B48B] ">
                      Trusted Healthcare Partner
                    </div>
                  </div>
                </div>
                <div className=" break-words text-[12px] font-poppins leading-[20px]  md:text-[14px] md:leading-[22.4px] lg:text-[16px] ">
                  <span className="font-normal">
                    Connecting you with trusted, licensed pharmacies near you
                    quickly, securely, and conveniently.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Who we are */}
          <div className=" flex flex-col md:flex-row items-center md:justify-between self-stretch gap-[20px] py-[32px] px-[16px] md:gap-[40px] md:py-[80px] md:px-[32px] lg:px-[80px] xl:px-[80px] ">
            <div className=" flex flex-col items-start gap-[20px] md:gap-[14px] lg:gap-[14px] max-w-[579px] ">
              <div className=" font-inter font-semibold text-[20px] leading-[28px] md:text-[32px] md:leading-[35.2px] ">
                Who We Are
              </div>
              <div className=" flex flex-col gap-[16px] ">
                <div className=" font-poppins opacity-80 text-[12px] leading-[20px] md:text-[14px] md:leading-[26px] lg:text-[16px] lg:leading-[22.4px] ">
                  FindMy Pharmacy is a U.S.-based platform created with the
                  vision of transforming how people access pharmacy services. We
                  believe in using technology to bridge the gap between
                  healthcare providers and communities.
                </div>
                <div className=" font-poppins opacity-80 text-[12px] leading-[20px] md:text-[14px] md:leading-[26px] lg:text-[16px] lg:leading-[22.4px] ">
                  We are a team of passionate developers, healthcare advocates,
                  and innovators dedicated to building tools that simplify your
                  pharmacy experience.
                </div>
              </div>
            </div>

            <img
              className=" md:hidden xl:block md:h-[261px] md:w-[291px] lg:h-[331px] lg:w-[461px] xl:h-[358px] xl:w-[579px] "
              src={Who}
            />
            <img
              className=" hidden md:block xl:hidden md:h-[261px] md:w-[291px] lg:h-[331px] lg:w-[461px] xl:h-[358px] xl:w-[579px] "
              src={Who768}
            />
          </div>

          {/* What we offer */}
          <div className=" flex flex-col items-center self-stretch bg-[#F2F4F8] gap-[20px] py-[32px] px-[16px] md:gap-[48px] md:py-[80px] md:px-[32px] lg:px-[80px] xl:px-[80px] ">
            <div className=" text-center font-inter font-semibold text-[20px] leading-[22px] md:text-[32px] md:leading-[35.2px] ">
              What We Offer
            </div>
            <div className=" flex flex-col gap-[16px] lg:flex-row lg:justify-between w-full">
              <div className=" flex flex-col items-start xl:items-center xl:flex-row rounded border border-black/50 gap-[16px] py-[12px] px-[20px] md:py-[20px] md:gap-[20px] lg:w-[310px] xl:w-[406px] ">
                <img src={Location} />
                <div className=" flex flex-col font-inter gap-[8px] md:gap-[12px] ">
                  <div className=" font-medium text-[16px] leading-[25.2px] ">
                    Real-Time Pharmacy Locator
                  </div>
                  <div className=" text-[12px] leading-[16.8px] opacity-70 ">
                    Find open pharmacies near you, complete with maps, contact
                    info, and opening hours.
                  </div>
                </div>
              </div>
              <div className=" flex flex-col items-start xl:items-center xl:flex-row rounded border border-black/50 gap-[16px] py-[12px] px-[20px] md:py-[20px] md:gap-[20px] lg:w-[310px] xl:w-[406px] ">
                <img src={Verify} />
                <div className=" flex flex-col font-inter gap-[8px] md:gap-[12px] ">
                  <div className=" font-medium text-[16px] leading-[25.2px] ">
                    Verified Pharmacist Portal
                  </div>
                  <div className=" text-[12px] leading-[16.8px] opacity-70 ">
                    A secure access point exclusively for licensed pharmacists
                    to manage profiles, inventory, and health updates.
                  </div>
                </div>
              </div>
              <div className=" flex flex-col items-start xl:items-center xl:flex-row rounded border border-black/50 gap-[16px] py-[12px] px-[20px] md:py-[20px] md:gap-[20px] lg:w-[310px] xl:w-[406px] ">
                <img src={Search} />
                <div className=" flex flex-col font-inter gap-[8px] md:gap-[12px] ">
                  <div className=" font-medium text-[16px] leading-[25.2px] ">
                    Smart Search & Filter
                  </div>
                  <div className=" text-[12px] leading-[16.8px] opacity-70 ">
                    Easily filter pharmacies by services offered, languages
                    spoken, 24/7 availability, and more.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className=" flex flex-col items-center self-stretch bg-[#F2F4F8] gap-[20px] py-[32px] px-[16px] md:gap-[48px] md:py-[80px] md:px-[32px] lg:px-[80px] xl:px-[80px] ">
            <div className=" text-center font-inter font-semibold text-[20px] leading-[22px] md:text-[32px] md:leading-[35.2px] ">
              Why Choose Us
            </div>
            <div className=" flex flex-col gap-[16px] lg:flex-row lg:justify-between w-full">
              <div className=" flex flex-col items-start xl:items-center xl:flex-row rounded border border-black/50 gap-[16px] py-[12px] px-[20px] md:py-[20px] md:gap-[20px] lg:w-[310px] xl:w-[406px] ">
                <img src={Accurate} />
                <div className=" flex flex-col font-inter gap-[8px] md:gap-[12px] ">
                  <div className=" font-medium text-[16px] leading-[25.2px] ">
                    Accurate & Updated Listings
                  </div>
                  <div className=" text-[12px] leading-[16.8px] opacity-70 ">
                    We ensure all information is verified and current, so you
                    never waste time.
                  </div>
                </div>
              </div>
              <div className=" flex flex-col items-start xl:items-center xl:flex-row rounded border border-black/50 gap-[16px] py-[12px] px-[20px] md:py-[20px] md:gap-[20px] lg:w-[310px] xl:w-[406px] ">
                <img src={Secure} />
                <div className=" flex flex-col font-inter gap-[8px] md:gap-[12px] ">
                  <div className=" font-medium text-[16px] leading-[25.2px] ">
                    Secure & Private
                  </div>
                  <div className=" text-[12px] leading-[16.8px] opacity-70 ">
                    We prioritize your data security and privacy, always.
                  </div>
                </div>
              </div>
              <div className=" flex flex-col items-start xl:items-center xl:flex-row rounded border border-black/50 gap-[16px] py-[12px] px-[20px] md:py-[20px] md:gap-[20px] lg:w-[310px] xl:w-[406px] ">
                <img src={Community} />
                <div className=" flex flex-col font-inter gap-[8px] md:gap-[12px] ">
                  <div className=" font-medium text-[16px] leading-[25.2px] ">
                    Community First
                  </div>
                  <div className=" text-[12px] leading-[16.8px] opacity-70 ">
                    We’re committed to making healthcare more accessible,
                    especially in underserved areas.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Our Vision */}
          <div className=" flex flex-col md:flex-row items-center md:justify-between self-stretch gap-[20px] py-[32px] px-[16px] md:gap-[40px] md:py-[80px] md:px-[32px] lg:px-[80px] xl:px-[80px] ">
            <div className=" flex flex-col items-start gap-[20px] md:gap-[14px] lg:gap-[14px] max-w-[579px] ">
              <div className=" font-inter font-semibold text-[20px] leading-[28px] md:text-[32px] md:leading-[35.2px] ">
                Our Vision
              </div>
              <div className=" flex flex-col gap-[16px] ">
                <div className=" font-poppins opacity-80 text-[12px] leading-[20px] md:text-[14px] md:leading-[26px] lg:text-[16px] lg:leading-[22.4px] ">
                  To become the leading digital bridge between patients and
                  pharmacies, ensuring no one is ever too far from the care they
                  need.
                </div>
                <div className=" font-poppins opacity-80 text-[12px] leading-[20px] md:text-[14px] md:leading-[26px] lg:text-[16px] lg:leading-[22.4px] ">
                  Through innovation, inclusivity, and a commitment to service,
                  we strive to become the go-to bridge between patients and
                  pharmacy care worldwide — making healthcare smarter, faster,
                  and more human.
                </div>
              </div>
            </div>

            <img
              className=" md:hidden xl:block md:h-[261px] md:w-[291px] lg:h-[331px] lg:w-[461px] xl:h-[358px] xl:w-[579px] "
              src={Vision}
            />
            <img
              className=" hidden md:block xl:hidden md:h-[261px] md:w-[291px] lg:h-[331px] lg:w-[461px] xl:h-[358px] xl:w-[579px] "
              src={Vision768}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;