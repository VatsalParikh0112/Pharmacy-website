import React, { useState, useEffect, useRef } from "react";
import { useSwipeable } from "react-swipeable";
import search from "../../assets/Homepage/search.png";
import smBG from "../../assets/Homepage/smBG.png";
import mdBG from "../../assets/Homepage/mdBG.png";
import lgBG from "../../assets/Homepage/lgBG.png";
import xlBG from "../../assets/Homepage/xlBG.png";
import Search from "../../assets/Homepage/Carousel/Search.png";
import Down from "../../assets/Homepage/Carousel/Down.png";
import CarouselBG1 from "../../assets/Homepage/Carousel/BG1.jpg";

const Homepage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [manualOverride, setManualOverride] = useState(false);
  const [bgImage, setBgImage] = useState(smBG);
  const slides = [0, 1, 2, 3];
  const carouselRef = useRef(null);

  // Responsive background image
  useEffect(() => {
    const updateBackground = () => {
      const width = window.innerWidth;
      if (width >= 1440) setBgImage(xlBG);
      else if (width >= 1152) setBgImage(lgBG);
      else if (width >= 768) setBgImage(mdBG);
      else setBgImage(smBG);
    };
    updateBackground();
    window.addEventListener("resize", updateBackground);
    return () => window.removeEventListener("resize", updateBackground);
  }, []);

  // Auto-slide unless in manual mode
  useEffect(() => {
    if (manualOverride) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [manualOverride]);

  // Resume auto-slide on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (carouselRef.current && !carouselRef.current.contains(event.target)) {
        setManualOverride(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const swipeHandlers = useSwipeable({
    onSwipedUp: () => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setManualOverride(true);
    },
    onSwipedDown: () => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setManualOverride(true);
    },
    trackMouse: true, // allows drag on desktop
  });
  return (
    <>
      <div className="flex flex-col gap-[8px] ">
        {/* Homepage */}
        <div className=" flex flex-col items-start ">
          {/* Hero section */}
          <div
            className=" flex justify-start lg:justify-between items-center self-stretch bg-black/30 text-white h-[500px] px-[16px] py-[83px] md:py-[138px] md:pl-[32px] md:pr-[219px] lg:py-[80px] lg:px-[80px] xl:py-[100px] xl:px-[80px] "
            style={{
              height: "500px",
              width: "100%",
              backgroundImage: `url(${bgImage})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundBlendMode: "overlay",
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
              <div className="relative w-full overflow-hidden h-full text-white rounded-[8px]">
                {/* Slide Container */}
                <div
                  className="flex h-full transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {/* Slide 1 - e.g. Image Left, Text Right */}
                  <div
                    className="w-full flex-shrink-0 flex flex-col items-center bg-black/30 justify-center h-[500px] "
                    style={{
                      width: "100%",
                      backgroundImage: `url(${CarouselBG1})`,
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      backgroundBlendMode: "overlay",
                    }}
                  >
                    <div className=" font-inter flex flex-col items-start w-full max-w-[656px] gap-[16px] px-[16px] md:px-[24px] ">
                      <div className=" font-bold text-[20px] md:text-[24px] md:leading-[35.2px] lg:text-[32px] ">
                        All Your Pharmacy Needs, Absolutely Free
                      </div>
                      <div className=" text-[12px] leading-[22px] md:text-[16px] md:leading-[28px] lg:text-[20px] ">
                        Find medications, medical supplies, and compounding
                        services — all in one place and at zero cost.
                      </div>
                    </div>
                  </div>

                  {/* Slide 2 - e.g. Fullscreen image with overlay */}
                  <div
                    className="w-full flex-shrink-0 flex flex-col items-center bg-black/30 justify-center h-[500px] "
                    style={{
                      width: "100%",
                      backgroundImage: `url(${CarouselBG1})`,
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      backgroundBlendMode: "overlay",
                    }}
                  >
                    <div className=" flex justify-between items-center px-[16px] md:px-[24px] xl:px-[32px] ">
                      <div className=" font-inter flex flex-col items-start gap-[16px] w-full ">
                        <div className=" font-bold text-[20px] md:text-[24px] md:leading-[35.2px] lg:text-[32px] ">
                          Save Time with Smart Search
                        </div>
                        <div className=" text-[12px] leading-[22px] md:text-[16px] md:leading-[28px] lg:text-[20px] ">
                          Quickly check availability and get pharmacy info — no
                          more calling around or waiting endlessly.
                        </div>
                      </div>
                      <div className=" hidden md:flex flex-col w-full font-inter bg-[#E0E0E0] text-black rounded-[8px] py-[32px] px-[28px] gap-[24px]  ">
                        <div className=" font-semibold text-[#29B48B] text-[24px] leading-[28px] ">
                          Search
                        </div>
                        <div className=" flex flex-col gap-[20px] ">
                          <div className=" flex justify-between items-center bg-white rounded-[8px] py-[14px] px-[20px] ">
                            <div className=" text-[20px] leading-[28px] ">
                              Medication
                            </div>
                            <img src={Search} className=" h-[30px] w-[30px] " />
                          </div>
                          <div className=" flex justify-between items-center bg-white rounded-[8px] py-[14px] px-[20px] ">
                            <div className=" text-[20px] leading-[28px] ">
                              Select Quantity
                            </div>
                            <img src={Down} className=" h-[30px] w-[30px] " />
                          </div>
                          <div className=" flex justify-between items-center bg-white rounded-[8px] py-[14px] px-[20px] ">
                            <div className=" text-[20px] leading-[28px] ">
                              Zip Code
                            </div>
                            <img src={Search} className=" h-[30px] w-[30px] " />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Slide 3 - e.g. Text Top, Image Bottom */}
                  <div
                    className="w-full flex-shrink-0 flex flex-col items-center bg-black/30 justify-center h-[500px] "
                    style={{
                      width: "100%",
                      backgroundImage: `url(${CarouselBG1})`,
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      backgroundBlendMode: "overlay",
                    }}
                  >
                    <div className=" font-inter flex flex-col items-start w-full max-w-[656px] gap-[16px] px-[16px] md:px-[24px] ">
                      <div className=" font-bold text-[20px] md:text-[24px] md:leading-[35.2px] lg:text-[32px] ">
                        Built for You, the Patient
                      </div>
                      <div className=" text-[12px] leading-[22px] md:text-[16px] md:leading-[28px] lg:text-[20px] ">
                        Navigate easily, ask questions, and connect directly
                        with pharmacies — all with encrypted communication.
                      </div>
                    </div>
                  </div>

                  {/* Slide 4 - Another custom layout */}
                  <div
                    className="w-full flex-shrink-0 flex flex-col items-center bg-black/30 justify-center h-[500px] "
                    style={{
                      width: "100%",
                      backgroundImage: `url(${CarouselBG1})`,
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      backgroundBlendMode: "overlay",
                    }}
                  >
                    <div className=" font-inter flex flex-col items-start w-full max-w-[656px] gap-[16px] px-[16px] md:px-[24px] ">
                      <div className=" font-bold text-[20px] md:text-[24px] md:leading-[35.2px] lg:text-[32px] ">
                        Why Choose FindMyPharmacy?
                      </div>
                      <div className=" text-[12px] leading-[22px] md:text-[16px] md:leading-[28px] lg:text-[20px] ">
                        One platform. Countless benefits. Free access, fast
                        responses, and complete support for all your pharmacy
                        needs.
                      </div>
                    </div>
                  </div>
                </div>
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
