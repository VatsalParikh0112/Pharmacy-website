import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Main from "../../assets/Patient/Main.png";
import Main2 from "../../assets/Patient/Main2.png";
import Location from "../../assets/Patient/Location.png";
import Search from "../../assets/Patient/Search.png";

import Close from "../../assets/Patient/Close.png";


const PatientSearch = () => {
  const [brandName, setBrandName] = useState("");
  const [strength, setStrength] = useState("");
  const [ndc, setNdc] = useState("");
  const location = useLocation();
  const searchTerm = location.state?.searchTerm || "";
  const [recentSearches, setRecentSearches] = useState([]);
  const [activeInputs, setActiveInputs] = useState({
    brandName: false,
    strength: false,
    ndc: false,
  });

  const handleSearch = () => {
    const terms = [searchTerm, brandName, strength, ndc].filter(Boolean);
    terms.forEach((term) => {
      if (!recentSearches.includes(term)) {
        setRecentSearches((prev) => [term, ...prev].slice(0, 10));
      }
    });

    setSearchTerm("");
    setBrandName("");
    setStrength("");
    setNdc("");
  };

  const handleRemoveSearch = (item) => {
    setRecentSearches(recentSearches.filter((search) => search !== item));
  };

  return (
    <div className="flex flex-col gap-[60px] w-full">
      
      <div className="flex flex-col md:items-center relative min-h-[720px] md:min-h-[550px]">
        <div
          className="absolute z-0 flex items-center w-full h-[400px] md:h-[500px] md:px-[32px] lg:px-[80px]"
          style={{
            background:
              "linear-gradient(285deg, rgba(240, 253, 252, 0.80) 7.57%, rgba(207, 242, 230, 0.80) 106.54%)",
          }}
        >
          <div className="absolute flex flex-col items-start gap-[14px] px-[16px] z-0 md:gap-[24px] md:w-[364px] lg:w-[467px] xl:w-[517px]">
            <div className="flex flex-col gap-[14px] md:gap-[16px]">
              <div className="font-inter font-medium text-[14px] leading-[22px] md:text-[20px] md:leading-[22px]">
                Welcome to Find My Pharmacy
              </div>
              <div className="font-inter text-[24px] font-bold leading-[32px] md:text-[32px] md:leading-[35.2px] lg:text-[40px] lg:leading-[44px]">
                Your Coolness Is Our
                <span className="text-[#29B48B]"> Priority</span>
              </div>
            </div>
            <div className="font-inter text-[12px] font-normal leading-[20px] md:text-[16px] md:leading-[22.4px]">
              Discover nearby pharmacies that have the medicine you need in just
              an easy search.
            </div>
          </div>
          <img
            className="ml-auto w-[224px] h-[324px] md:hidden"
            src={Main}
            alt="Main"
          />
          <img
            className="ml-auto w-[500px] h-[500px] hidden md:block"
            src={Main2}
            alt="Main"
          />
        </div>

        {/* Search Bar */}
        <div className="relative z-10 top-[339px] md:top-[395px] flex flex-col bg-white border shadow-lg py-[24px] px-[16px] gap-[16px] md:px-[20px] md:gap-[18px] md:w-[636px] md:rounded-[12px] lg:px-[24px] lg:w-[846px] xl:w-[880px]">
          <div className="flex flex-col gap-[24px]">
            {/* Location Display */}
            <div className="flex items-center justify-between">
              <div className="flex gap-[4px] items-center">
                <img src={Location} alt="Location" />
                <div className="w-[116px] text-[12px] font-poppins md:w-auto">
                  <div>
                    <span className="opacity-50">Showing result for : </span>
                    New York, NY 10001
                  </div>
                </div>
              </div>
              <div className="text-[12px] font-poppins">{searchTerm}</div>
            </div>

            {/* Inputs */}
            <div className="flex flex-col gap-[12px] md:flex-row md:gap-[16px] md:items-center w-full">
              <div className="flex flex-col md:flex-row items-center justify-between gap-[12px] w-full">
                {/* Brand Name */}
                <div className="flex flex-col gap-[8px] w-full">
                  <div className="font-inter text-[14px]">Brand Name</div>
                  <div
                    className={`flex items-center gap-[12px] rounded-sm bg-[rgba(242,248,246,0.5)] shadow-[inset_0_0_4px_0_rgba(0,0,0,0.05)] w-full h-[40px] p-[4px] transition-opacity duration-300 ${
                      activeInputs.brandName || brandName
                        ? "opacity-100"
                        : "opacity-50"
                    }`}
                  >
                    <img src={Search} alt="Search" />
                    <input
                      className="font-medium font-inter text-[12px] leading-[19.6px] w-full bg-transparent outline-none"
                      type="text"
                      placeholder="Enter Brand Name"
                      value={brandName}
                      onChange={(e) => setBrandName(e.target.value)}
                      onFocus={() =>
                        setActiveInputs((prev) => ({
                          ...prev,
                          brandName: true,
                        }))
                      }
                      onBlur={() =>
                        setActiveInputs((prev) => ({
                          ...prev,
                          brandName: false,
                        }))
                      }
                    />
                    {brandName && (
                      <div
                        className="cursor-pointer"
                        onClick={() => setBrandName("")}
                      >
                        <img src={Close} alt="Clear Search" />
                      </div>
                    )}
                  </div>
                </div>

                {/* Strength */}
                <div className="flex flex-col gap-[8px] w-full">
                  <div className="font-inter text-[14px]">Strength</div>
                  <div
                    className={`flex items-center gap-[12px] rounded-sm bg-[rgba(242,248,246,0.5)] shadow-[inset_0_0_4px_0_rgba(0,0,0,0.05)] w-full h-[40px] p-[4px] transition-opacity duration-300 ${
                      activeInputs.strength || strength
                        ? "opacity-100"
                        : "opacity-50"
                    }`}
                  >
                    <img src={Search} alt="Search" />
                    <input
                      className="font-medium font-inter text-[12px] leading-[19.6px] w-full bg-transparent outline-none"
                      type="text"
                      placeholder="Enter strength"
                      value={strength}
                      onChange={(e) => setStrength(e.target.value)}
                      onFocus={() =>
                        setActiveInputs((prev) => ({ ...prev, strength: true }))
                      }
                      onBlur={() =>
                        setActiveInputs((prev) => ({
                          ...prev,
                          strength: false,
                        }))
                      }
                    />
                    {strength && (
                      <div
                        className="cursor-pointer"
                        onClick={() => setStrength("")}
                      >
                        <img src={Close} alt="Clear Search" />
                      </div>
                    )}
                  </div>
                </div>

                {/* NDC */}
                <div className="flex flex-col gap-[8px] w-full">
                  <div className="font-inter text-[14px]">NDC</div>
                  <div
                    className={`flex items-center gap-[12px] rounded-sm bg-[rgba(242,248,246,0.5)] shadow-[inset_0_0_4px_0_rgba(0,0,0,0.05)] w-full h-[40px] p-[4px] transition-opacity duration-300 ${
                      activeInputs.ndc || ndc ? "opacity-100" : "opacity-50"
                    }`}
                  >
                    <img src={Search} alt="Search" />
                    <input
                      className="font-medium font-inter text-[12px] leading-[19.6px] w-full bg-transparent outline-none"
                      type="text"
                      placeholder="Enter NDC Number"
                      value={ndc}
                      onChange={(e) => setNdc(e.target.value)}
                      onFocus={() =>
                        setActiveInputs((prev) => ({ ...prev, ndc: true }))
                      }
                      onBlur={() =>
                        setActiveInputs((prev) => ({ ...prev, ndc: false }))
                      }
                    />
                    {ndc && (
                      <div
                        className="cursor-pointer"
                        onClick={() => setNdc("")}
                      >
                        <img src={Close} alt="Clear Search" />
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <button
                onClick={handleSearch}
                className="flex bg-[#29B48B] text-white items-center justify-center p-[12px] rounded-[4px] text-[14px] leading-[19.6px] md:px-[32px] md:py-[12px]"
              >
                Search
              </button>
            </div>
          </div>

          {/* Recently Searched */}
          <div className="flex flex-col font-poppins gap-[12px]">
            <div className="text-[12px] leading-[16.8px]">
              Recently looking for : "{searchTerm}"
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

      {/* Medication Section Placeholder */}
      <div className="flex flex-col md:flex-row md:justify-between px-[16px] py-[32px] gap-[24px] md:gap-[0px] md:px-[32px] md:py-[48px] lg:px-[80px] lg:py-[48px] items-center">

        {/* map heading */}
          <div className=" w-full text-start font-inter font-semibold leading-[35.2px] text-[18px] ">Search Result: "{searchTerm}"</div>

        {/* google map */}
          <div>
            
          </div>
          <div></div>
      </div>
    </div>
  );
};

export default PatientSearch;
