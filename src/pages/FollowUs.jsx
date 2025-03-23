import React from "react";
import Google from "../assets/Follow US/Google.png";
import Facebook from "../assets/Follow US/Facebook.png";
import Insta from "../assets/Follow US/Insta.png";
import Youtube from "../assets/Follow US/Youtube.png";
import Twitter from "../assets/Follow US/Twitter.png";
import Linkedin from "../assets/Follow US/Linkedin.png";

const FollowUs = () => {
  return (
    <>
      <div className=" flex flex-col items-center gap-[56px] ">
        <div className=" flex flex-col bg-gray-500 items-start justify-center h-[550px] w-full text-white ">
          <div className=" flex flex-col md:w-[535px] gap-[12px] px-[16px] md:px-[32px] md:gap-[16px] ">
            <div className=" font-inter font-semibold text-[20px] leading-[22px] md:w-[270px] md:text-[32px] md:leading-[35.2px] ">
              Stay Connected Follow Us
            </div>
            <div className=" font-poppins text-[12px] leading-[16.8px] md:text-[16px] md:leading-[24px] ">
              Join our community for the latest health tips, promotions, and
              updates. Get exclusive access to special offers and be part of our
              growing family. Stay informed with expert wellness advice, early
              access to new products, and members-only discounts.
            </div>
          </div>
        </div>
        <div className=" flex flex-col items-center gap-[56px] pb-[56px] px-[16px] md:px-[32px] ">
          <div className=" flex flex-col items-center gap-[32px] ">
            <div className=" flex flex-col items-center gap-[10px] p-[10px] ">
              <div className=" font-inter font-semibold text-[20px] leading-[22px] md:text-[32px] md:leading-[35.2px] ">
                Connect with Us
              </div>
              <div className=" font-inter text-[12px] leading-[16.8px] md:text-[16px] md:leading-[22.4px] ">
                Follow us on social media to stay updated
              </div>
            </div>
            <div className=" flex flex-wrap items-center justify-center gap-[12px] md:gap-[60px] ">
              <div className=" flex justify-center items-center rounded-[4px] shadow-md h-[60px] w-[60px] p-[15px] ">
                <img src={Google} />
              </div>
              <div className=" flex justify-center items-center rounded-[4px] shadow-md h-[60px] w-[60px] p-[15px] ">
                <img src={Facebook} />
              </div>
              <div className=" flex justify-center items-center rounded-[4px] shadow-md h-[60px] w-[60px] p-[15px] ">
                <img src={Insta} />
              </div>
              <div className=" flex justify-center items-center rounded-[4px] shadow-md h-[60px] w-[60px] p-[15px] ">
                <img src={Twitter} />
              </div>
              <div className=" flex justify-center items-center rounded-[4px] shadow-md h-[60px] w-[60px] p-[15px] ">
                <img src={Linkedin} />
              </div>
              <div className=" flex justify-center items-center rounded-[4px] shadow-md h-[60px] w-[60px] p-[15px] ">
                <img src={Youtube} />
              </div>
            </div>
          </div>

          <div className=" flex flex-col items-center gap-[32px] py-[56px]  ">
            <div className=" flex flex-col items-center justify-center gap-[12px] ">
              <div className=" font-inter font-semibold text-[20px] leading-[22px] ">
                Subscribe To Our Newsletter
              </div>
              <div className=" font-inter text-center text-[12px] leading-[16.8px] ">
                Get 10% off on your first order and stay connect with new
                product
              </div>
            </div>
            <div className=" flex justify-center items-center gap-[12px] ">
              <input
                type="text"
                placeholder="Enter Your Email"
                className=" flex justify-center items-start h-[40px] rounded border border-gray-300 p-[10px] "
              />

              <button className=" flex items-center bg-[#29B48B] text-white border rounded h-[40px] py-[10px] px-[16px] ">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FollowUs;
