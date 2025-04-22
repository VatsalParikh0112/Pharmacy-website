import React from "react";
import BG from "../../assets/Contact/BG.jpeg";
import Email from "../../assets/Contact/Email.png";
import Call from "../../assets/Contact/Call.png";
import Time from "../../assets/Contact/Time.png";

const ContactUs = () => {
  return (
    <div>
      <div className="relative h-[450px] w-full overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-center bg-cover bg-no-repeat z-0 w-full h-full"
          style={{ backgroundImage: `url(${BG})` }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#29B48B] bg-opacity-35 z-10" />

        {/* Content */}
        <div className="relative z-20 flex items-center justify-center h-full px-[16px] md:px-[32px] lg:px-[80px] ">
          <div className="flex flex-col items-center text-white text-center font-inter gap-[8px] md:gap-[10px]  ">
            <div className="font-bold text-[24px] md:text-[48px] md:leading-[52.8px] ">
              Contact Us
            </div>
            <div className=" text-[12px] md:text-[20px] md:leading-[28px] ">
              We’re here to answer your questions and support your healthcare
              journey.
            </div>
          </div>
        </div>
      </div>

      <div className=" flex flex-col items-center px-[16px] py-[40px] gap-[36px] md:px-[32px] md:py-[80px] md:gap-[48px] lg:px-[80px] lg:py-[80px] ">
        <div className=" flex flex-col font-inter text-center gap-[8px] md:gap-[12px] ">
          <div className=" font-semibold text-[20px] md:text-[32px] md:leading-[44px] ">
            How Can We Help You?
          </div>
          <div className=" text-[12px] md:text-[18px] md:leading-[22.4px] ">
            We’re here to help any questions you might have
          </div>
        </div>

        <div
          className="flex flex-col items-start w-full max-w-[850px] gap-[20px] px-[20px] py-[24px] md:gap-[24px] rounded-lg bg-white"
          style={{ boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.25)" }}
        >
          <div className=" font-roboto font-medium text-[20px] md:text-[28px] ">
            Send Us Message
          </div>

          <div className=" flex flex-col w-full items-start gap-[12px] px-[10px] md:gap-[32px] ">
            <div className="flex flex-col w-full items-start gap-[10px]">
              <div className=" font-roboto text-[14px] leading-[16px] md:text-[20px] md:leading-[23px] ">
                Enter your full name
              </div>
              <input
                type="text"
                className="border cursor-text w-full rounded-[4px] border-[rgba(0,0,0,0.5)] text-[12px] md:text-[16px] h-[30px] md:h-[40px] "
              />
            </div>
            <div className="flex flex-col w-full items-start gap-[10px]">
              <div className=" font-roboto text-[14px] leading-[16px] md:text-[20px] md:leading-[23px] ">
                Enter your email
              </div>
              <input
                type="text"
                className="border cursor-text w-full rounded-[4px] border-[rgba(0,0,0,0.5)] text-[12px] md:text-[16px] h-[30px] md:h-[40px] "
              />
            </div>
            <div className="flex flex-col w-full items-start gap-[10px]">
              <div className=" font-roboto text-[14px] leading-[16px] md:text-[20px] md:leading-[23px] ">
                What’s the topic?
              </div>
              <input
                type="text"
                className="border cursor-text w-full rounded-[4px] border-[rgba(0,0,0,0.5)] text-[12px] md:text-[16px] h-[30px] md:h-[40px] "
              />
            </div>
            <div className="flex flex-col w-full items-start gap-[10px]">
              <div className="font-roboto text-[14px] leading-[16px] md:text-[20px] md:leading-[23px]">
                Type your message...
              </div>
              <textarea className="border cursor-text w-full rounded-[4px] border-[rgba(0,0,0,0.5)] text-[12px] md:text-[16px] h-[120px] md:h-[140px] p-[12px] resize-none" />
            </div>
          </div>

          <div className=" flex w-full items-center justify-center ">
            <button className=" flex font-poppins w-full max-w-[430px] items-center justify-center rounded-[4px] bg-[#29B48B] text-white px-[16px] py-[10px] text-[14px] leading-[19.6px] ">
              Send Message
            </button>
          </div>
        </div>

        <div>
          <div className=" flex flex-col gap-[16px] md:flex-row md:justify-between w-full">
            <div
              className="flex flex-col items-center xl:items-center xl:flex-row rounded-lg bg-white gap-[16px] py-[12px] px-[20px] md:py-[20px] md:gap-[20px] md:w-[240px] lg:w-[310px] xl:w-[406px]"
              style={{ boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.25)" }}
            >
              <img src={Call} />
              <div className=" flex flex-col items-center text-center font-inter gap-[8px] md:gap-[12px] ">
                <div className=" font-medium text-[16px] leading-[25.2px] ">
                  Call Us
                </div>
                <div className=" text-[12px] leading-[16.8px] opacity-70 ">
                  +1 (555) 123-4567
                </div>
              </div>
            </div>
            <div
              className="flex flex-col items-center xl:items-center xl:flex-row rounded-lg bg-white gap-[16px] py-[12px] px-[20px] md:py-[20px] md:gap-[20px] md:w-[240px] lg:w-[310px] xl:w-[406px]"
              style={{ boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.25)" }}
            >
              <img src={Email} />
              <div className=" flex flex-col items-center text-center font-inter gap-[8px] md:gap-[12px] ">
                <div className=" font-medium text-[16px] leading-[25.2px] ">
                  Email Us
                </div>
                <div className=" text-[12px] leading-[16.8px] opacity-70 ">
                  support@company.com
                </div>
              </div>
            </div>
            <div
              className="flex flex-col items-center xl:items-center xl:flex-row rounded-lg bg-white gap-[16px] py-[12px] px-[20px] md:py-[20px] md:gap-[20px] md:w-[240px] lg:w-[310px] xl:w-[406px]"
              style={{ boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.25)" }}
            >
              <img src={Time} />
              <div className=" flex flex-col items-center text-center font-inter gap-[8px] md:gap-[12px] ">
                <div className=" font-medium text-[16px] leading-[25.2px] ">
                  Office Hours
                </div>
                <div className=" text-[12px] leading-[16.8px] opacity-70 ">
                  Mon-Fri: 9AM - 6PM EST
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
