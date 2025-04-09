import React, { useState } from "react";
import Main from "../assets/Patient/Main.png";
import Main2 from "../assets/Patient/Main2.png";
import Location from "../assets/Patient/Location.png";
import Search from "../assets/Patient/Search.png";
import Filter from "../assets/Patient/Filter.png";
import Close from "../assets/Patient/Close.png";
import Medication from "../assets/Patient/Medication.png";
import Ortho from "../assets/Patient/Ortho.png";
import Respiratory from "../assets/Patient/Respiratory.png";
import Wound from "../assets/Patient/Wound.png";
import Diabetic from "../assets/Patient/Diabetic.png";
import Diagnostic from "../assets/Patient/Diagnostic.png";
import Eye from "../assets/Patient/Eye.png";
import Post from "../assets/Patient/Post.png";
import Mobility from "../assets/Patient/Mobility.png";

const PatientHomepage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [recentSearches, setRecentSearches] = useState([]);
  const [inputActive, setInputActive] = useState(false);

  // Handle input change with max length of 15 characters
  const handleInputChange = (e) => {
    if (e.target.value.length <= 15) {
      setSearchTerm(e.target.value);
    }
  };

  // Handle search submission
  const handleSearch = () => {
    if (searchTerm.trim() !== "" && !recentSearches.includes(searchTerm)) {
      setRecentSearches([searchTerm, ...recentSearches].slice(0, 10)); // Limit to last 10 searches
    }
    setSearchTerm("");
  };

  // Remove item from recently searched
  const handleRemoveSearch = (item) => {
    setRecentSearches(recentSearches.filter((search) => search !== item));
  };

  return (
    <div className="flex flex-col gap-[60px] w-full">
      {/* full hero section */}
      <div className="flex flex-col md:items-center relative h-[605px] ">
        {/* Hero section */}
        <div
          className="absolute z-0 flex items-center w-full h-[400px] md:h-[500px] md:px-[32px] lg:px-[80px] "
          style={{
            background:
              "linear-gradient(285deg, rgba(240, 253, 252, 0.80) 7.57%, rgba(207, 242, 230, 0.80) 106.54%)",
          }}
        >
          <div className="absolute flex flex-col items-start gap-[14px] px-[16px] z-0 md:gap-[24px] md:w-[364px] lg:w-[467px] xl:w-[517px]  ">
            <div className=" flex flex-col gap-[14px] md:gap-[16px] ">
              <div className="font-inter font-medium  text-[14px] leading-[22px] md:text-[20px] md:leading-[22px] ">
                Welcome to Find My Pharmacy
              </div>
              <div className="font-inter text-[24px] font-bold leading-[32px] md:text-[32px] md:leading-[35.2px] lg:text-[40px] lg:leading-[44px] ">
                Your Coolness Is Our
                <span className="text-[#29B48B]"> Priority</span>
              </div>
            </div>
            <div className="font-inter text-[12px] font-normal leading-[20px] md:text-[16px] md:leading-[22.4px] ">
              Discover nearby pharmacies that have the medicine you need in just
              an easy search.
            </div>
          </div>
          <img
            className="ml-auto w-[224px] h-[324px] md:hidden "
            src={Main}
            alt="Main"
          />
          <img
            className="ml-auto w-[500px] h-[500px] hidden md:block "
            src={Main2}
            alt="Main"
          />
        </div>

        {/* Search Bar */}
        <div className=" relative z-10 top-[339px] md:top-[395px] flex flex-col bg-white border shadow-lg  py-[24px] px-[16px] gap-[16px] md:px-[20px] md:gap-[18px] md:w-[636px] md:rounded-[12px] lg:px-[24px] lg:w-[846px] xl:w-[880px] ">
          <div className="flex flex-col gap-[24px]">
            {/* Location Display */}
            <div className="flex items-center justify-between ">
              <div className="flex gap-[4px] items-center ">
                <img src={Location} alt="Location" />
                <div className="w-[116px] text-[12px] font-poppins md:w-auto ">
                  <div>
                    <span className="opacity-50">Showing result for :</span>
                    New York, NY 10001
                  </div>
                </div>
              </div>
              <div className="text-[12px] font-poppins">Change Location</div>
            </div>

            {/* Search Input */}
            <div className="flex flex-col gap-[12px] md:flex-row md:gap-[16px] md:items-center w-full ">
              <div className="flex gap-[16px] md:gap-[8px] w-full ">
                <div
                  className={`flex items-center gap-[12px] rounded-sm bg-[rgba(242,248,246,0.5)] shadow-[inset_0_0_4px_0_rgba(0,0,0,0.05)] w-full p-[4px] transition-opacity duration-300 ${
                    inputActive || searchTerm ? "opacity-100" : "opacity-50"
                  }`}
                >
                  <img src={Search} alt="Search" />
                  <input
                    className="font-medium font-inter text-[12px] leading-[19.6px] w-full bg-transparent outline-none"
                    type="text"
                    placeholder="Search medicine here..."
                    value={searchTerm}
                    onChange={handleInputChange}
                    onFocus={() => setInputActive(true)}
                    onBlur={() => setInputActive(false)}
                  />
                  {searchTerm && (
                    <div
                      className="cursor-pointer"
                      onClick={() => setSearchTerm("")}
                    >
                      <img src={Close} alt="Clear Search" />
                    </div>
                  )}
                </div>
                <div
                  className={`p-[8px] rounded-sm bg-[rgba(242,248,246,0.5)] shadow-[inset_0_0_4px_0_rgba(0,0,0,0.05)] cursor-pointer md:p-[12px] ${
                    inputActive || searchTerm ? "opacity-100" : "opacity-50"
                  }`}
                >
                  <img src={Filter} alt="Filter" />
                </div>
              </div>

              <button
                onClick={handleSearch}
                className="flex bg-[#29B48B] text-white items-center justify-center p-[12px] rounded-[4px] text-[14px] leading-[19.6px] md:px-[32px] md:py-[12px]  "
              >
                Search
              </button>
            </div>
          </div>

          {/* Recently Searched */}
          <div className="flex flex-col font-poppins gap-[12px]">
            <div className="text-[12px] leading-[16.8px]">
              Recently looking for :
            </div>
            <div className="flex gap-[8px] overflow-x-auto whitespace-nowrap scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 p-[4px]">
              {recentSearches.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center rounded-sm bg-[rgba(242,248,246,0.5)] shadow-[inset_0_0_4px_0_rgba(0,0,0,0.05)] px-[8px] py-[4px] gap-[10px] w-max"
                >
                  <div className="text-[12px] leading-[16.8px]">{item}</div>
                  <div
                    className="h-[16px] w-[16px] cursor-pointer"
                    onClick={() => handleRemoveSearch(item)}
                  >
                    <img src={Close} alt="Close icon" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Medication */}
      <div className=" flex flex-col md:flex-row md:justify-between px-[16px] py-[24px] gap-[20px] md:gap-[0px] md:px-[32px] md:py-[48px] lg:px-[80px] lg:py-[48px] items-center  ">
        <div className=" flex flex-col gap-[16px] md:w-[520px] lg:w-[750px] ">
          <div className=" flex gap-[10px] ">
            <div>
              <img className=" h-[24px] w-[24px] " src={Medication} alt="" />
            </div>
            <div className=" font-inter font-medium text-[18px] leading-[25.2px] md:text-[20px] md:leading-[25.2px] ">
              Need Personalized Medication?
            </div>
          </div>
          <div className=" font-poppins opacity-50 text-[14px] leading-[22.4px] md:text-[16px] md:leading-[22.4px] ">
            Find nearby compounding pharmacies that offer customized
            prescriptions tailored to your specific needs. Our network includes
            trusted professionals who can help with specialized medications.
          </div>
        </div>
        <button className=" flex justify-center items-center bg-[#29B48B] text-white font-poppins rounded-[4px] text-[14px] leading-[19.6px] py-[12px] px-[16px] w-[160px]  ">
          Explore now
        </button>
      </div>

      <div className=" flex flex-col gap-[40px] py-[12px] px-[16px] md:px-[32px] lg:px-[80px] ">
        <div className=" flex flex-col font-inter gap-[12px] items-center lg:items-start ">
          <div className=" text-[20px] leading-[22px] font-semibold md:text-[24px] md:leading-[26.4px] ">
            Medical Supplies Categories
          </div>
          <div className=" text-[14px] leading-[19.6px] text-center md:text-[16px] md:leading-[22.4px] lg:text-start ">
            Find the right supplies for every healthcare need.
          </div>
        </div>
        <div className=" flex flex-wrap gap-y-[16px] gap-x-[20px] justify-center font-inter font-medium ">
          <div className=" flex flex-col items-center lg:items-start bg-white shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] w-[288px] rounded-[4px] gap-[10px] px-[16px] py-[20px] md:w-[339px] lg:w-[314px] xl:w-[302px] ">
            <div>
              <img src={Ortho} alt="" />
            </div>
            <div className=" text-[18px] leading-[25.2px] ">
              Orthopedic Supplies
            </div>
          </div>
          <div className=" flex flex-col items-center lg:items-start bg-white shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] w-[288px] rounded-[4px] gap-[10px] px-[16px] py-[20px] md:w-[339px] lg:w-[314px] xl:w-[302px] ">
            <div>
              <img src={Respiratory} alt="" />
            </div>
            <div className=" text-[18px] leading-[25.2px] ">
              Respiratory Care
            </div>
          </div>
          <div className=" flex flex-col items-center lg:items-start bg-white shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] w-[288px] rounded-[4px] gap-[10px] px-[16px] py-[20px] md:w-[339px] lg:w-[314px] xl:w-[302px] ">
            <div>
              <img src={Mobility} alt="" />
            </div>
            <div className=" text-[18px] leading-[25.2px] ">Mobility Aids</div>
          </div>
          <div className=" flex flex-col items-center lg:items-start bg-white shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] w-[288px] rounded-[4px] gap-[10px] px-[16px] py-[20px] md:w-[339px] lg:w-[314px] xl:w-[302px] ">
            <div>
              <img src={Wound} alt="" />
            </div>
            <div className=" text-[18px] leading-[25.2px] ">Wound Care</div>
          </div>
          <div className=" flex flex-col items-center lg:items-start bg-white shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] w-[288px] rounded-[4px] gap-[10px] px-[16px] py-[20px] md:w-[339px] lg:w-[314px] xl:w-[302px] ">
            <div>
              <img src={Diabetic} alt="" />
            </div>
            <div className=" text-[18px] leading-[25.2px] ">
              Diabetic Supplies
            </div>
          </div>
          <div className=" flex flex-col items-center lg:items-start bg-white shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] w-[288px] rounded-[4px] gap-[10px] px-[16px] py-[20px] md:w-[339px] lg:w-[314px] xl:w-[302px] ">
            <div>
              <img src={Diagnostic} alt="" />
            </div>
            <div className=" text-[18px] leading-[25.2px] ">
              Diagnostic Devices
            </div>
          </div>
          <div className=" flex flex-col items-center lg:items-start bg-white shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] w-[288px] rounded-[4px] gap-[10px] px-[16px] py-[20px] md:w-[339px] lg:w-[314px] xl:w-[302px] ">
            <div>
              <img src={Eye} alt="" />
            </div>
            <div className=" text-[18px] leading-[25.2px] ">Eye & Ear Care</div>
          </div>
          <div className=" flex flex-col items-center lg:items-start bg-white shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] w-[288px] rounded-[4px] gap-[10px] px-[16px] py-[20px] md:w-[339px] lg:w-[314px] xl:w-[302px] ">
            <div>
              <img src={Post} alt="" />
            </div>
            <div className=" text-[18px] leading-[25.2px] ">
              Post-Surgery Care
            </div>
          </div>
        </div>
      </div>

      <div className=" flex flex-col gap-[40px] py-[12px] pb-[60px] px-[16px] md:px-[32px] lg:px-[80px] w-full ">
        <div className=" flex flex-col gap-[12px] items-center justify-between ">
          <div className=" font-inter font-semibold text-[20px] leading-[35.2px] md:text-[32px] md:leading-[35.2px] ">
            How It’s Work
          </div>
          <div className=" font-poppins text-[14px] leading-[22.4px] md:text-[16px] md:leading-[22.4px] ">
            Find your medicine in simple steps
          </div>
        </div>

        <div className=" flex flex-col gap-[20px] md:flex-row md:gap-[40px] md:justify-between w-full ">
          <div className=" flex flex-col gap-[16px] font-inter items-center md:gap-[30px] md:w-[186px] lg:w-[304px] xl:w-[400px]  ">
            <div className=" flex h-[50px] w-[50px] bg-[#29B48B] py-[10px] items-center justify-center rounded-full ">
              <div className=" font-bold text-[24px] text-white ">1</div>
            </div>
            <div className=" flex flex-col items-center gap-[12px] md:gap-[30px] ">
              <div className=" font-bold text-[16px] leading-[20px] md:text-[20px] md:leading-[20px] ">Enter Details</div>
              <div className=" opacity-50 text-[14px] leading-[20px] text-center md:text-[16px] md:leading-[20px]">
                Enter medicine details and ZIP code
              </div>
            </div>
          </div>
          <div className=" flex flex-col gap-[16px] font-inter items-center md:gap-[30px] md:w-[186px] lg:w-[304px] xl:w-[400px] ">
            <div className=" flex h-[50px] w-[50px] bg-[#29B48B] py-[10px] items-center justify-center rounded-full ">
              <div className=" font-bold text-[24px] text-white ">2</div>
            </div>
            <div className=" flex flex-col items-center gap-[12px] md:gap-[30px] ">
              <div className=" font-bold text-[16px] leading-[20px] md:text-[20px] md:leading-[20px] ">Select Preferences</div>
              <div className=" opacity-50 text-[14px] leading-[20px] text-center md:text-[16px] md:leading-[20px]">
              Select preferred dose and pharmacy
              </div>
            </div>
          </div>
          <div className=" flex flex-col gap-[16px] font-inter items-center md:gap-[30px] md:w-[186px] lg:w-[304px] xl:w-[400px] ">
            <div className=" flex h-[50px] w-[50px] bg-[#29B48B] py-[10px] items-center justify-center rounded-full ">
              <div className=" font-bold text-[24px] text-white ">3</div>
            </div>
            <div className=" flex flex-col items-center gap-[12px] md:gap-[30px] ">
              <div className=" font-bold text-[16px] leading-[20px] md:text-[20px] md:leading-[20px] ">Get Medicine</div>
              <div className=" opacity-50 text-[14px] leading-[20px] text-center md:text-[16px] md:leading-[20px]">
              Get your medicine with verified pharmacy details
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientHomepage;
