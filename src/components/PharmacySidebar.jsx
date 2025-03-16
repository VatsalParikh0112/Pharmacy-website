import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const PharmacySidebar = () => {
  // State to keep track of the selected background color
  const [selectedColor, setSelectedColor] = useState("bg-blue-200");

  useEffect(() => {
    setSelectedColor("bg-blue-200");
  }, []);

  // Function to handle item click
  const handleItemClick = (color) => {
    setSelectedColor(color);
  };

  return (
    <>
      <div className="sticky hidden lg:flex flex-col items-center gap-[190px] h-[926px] w-[272px]  border-r-[1px]  ">
        <div className="flex flex-col items-start gap-[24px]">
          <div className="relative flex flex-col items-center w-full h-[228px]">
            <div className="absolute top-0 w-[272px] h-[114px] bg-gray-400 z-0"></div>
            <div className="absolute top-[57px] flex flex-col items-center gap-[14px] w-[240px] z-10">
              <img
                className="bg-gray-600 rounded-[50px] w-[100px] h-[100px]"
                src=""
                alt=""
              />
              <div className="flex flex-col items-center self-stretch gap-[4px] font-inter">
                <div className="text-[16px] leading-[25.2px] font-medium">
                  Pharmacy Name
                </div>
                <div className="text-[14px] leading-[19.6px]">
                  xz Pharmacy, Ahmedabad, Gujarat
                </div>
              </div>
            </div>
          </div>

          {/* dashboard starts */}
          <div className="flex flex-col items-center px-[32px] gap-[10px]">
            <Link to="/PharmacyHomepage/PharmacyDashboard">
              <div
                className={`flex items-center cursor-pointer rounded-lg gap-[4px] w-[208px] p-[8px] ${
                  selectedColor === "bg-blue-200" ? "bg-[#3698A1]" : "bg-white"
                }`}
                onClick={() => handleItemClick("bg-blue-200")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M5 12H3L12 3L21 12H19"
                    stroke={selectedColor === "bg-blue-200" ? "white" : "black"}
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5 12V19C5 19.5304 5.21071 20.0391 5.58579 20.4142C5.96086 20.7893 6.46957 21 7 21H17C17.5304 21 18.0391 20.7893 18.4142 20.4142C18.7893 20.0391 19 19.5304 19 19V12"
                    stroke={selectedColor === "bg-blue-200" ? "white" : "black"}
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10 12H14V16H10V12Z"
                    stroke={selectedColor === "bg-blue-200" ? "white" : "black"}
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div
                  className={`font-inter text-[14px] leading-[19.6px] ${
                    selectedColor === "bg-blue-200"
                      ? "text-white"
                      : "text-black"
                  }`}
                >
                  Dashboard
                </div>
              </div>
            </Link>

            <Link to="/PharmacyHomepage/PharmacyCurrent" >
              <div
                className={`flex items-center cursor-pointer rounded-lg gap-[4px] w-[208px] p-[8px] ${
                  selectedColor === "bg-green-200" ? "bg-[#3698A1]" : "bg-white"
                }`}
                onClick={() => handleItemClick("bg-green-200")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M9 5H7C6.46957 5 5.96086 5.21071 5.58579 5.58579C5.21071 5.96086 5 6.46957 5 7V19C5 19.5304 5.21071 20.0391 5.58579 20.4142C5.96086 20.7893 6.46957 21 7 21H17C17.5304 21 18.0391 20.7893 18.4142 20.4142C18.7893 20.0391 19 19.5304 19 19V7C19 6.46957 18.7893 5.96086 18.4142 5.58579C18.0391 5.21071 17.5304 5 17 5H15M9 5C9 4.46957 9.21071 3.96086 9.58579 3.58579C9.96086 3.21071 10.4696 3 11 3H13C13.5304 3 14.0391 3.21071 14.4142 3.58579C14.7893 3.96086 15 4.46957 15 5M9 5C9 5.53043 9.21071 6.03914 9.58579 6.41421C9.96086 6.78929 10.4696 7 11 7H13C13.5304 7 14.0391 6.78929 14.4142 6.41421C14.7893 6.03914 15 5.53043 15 5M9 12H9.01M13 12H15M9 16H9.01M13 16H15"
                    stroke={
                      selectedColor === "bg-green-200" ? "white" : "black"
                    }
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div
                  className={`font-inter text-[14px] leading-[19.6px] ${
                    selectedColor === "bg-green-200"
                      ? "text-white"
                      : "text-black"
                  }`}
                >
                  Current Request
                </div>
              </div>
            </Link>

            <div
              className={`flex items-center cursor-pointer rounded-lg gap-[4px] w-[208px] p-[8px] ${
                selectedColor === "bg-yellow-200" ? "bg-[#3698A1]" : "bg-white"
              }`}
              onClick={() => handleItemClick("bg-yellow-200")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M14.2359 19C15.1009 19 15.5579 20.024 14.9809 20.668C14.6061 21.0875 14.1469 21.4229 13.6333 21.6525C13.1197 21.8821 12.5635 22.0005 12.0009 22C11.4384 22.0005 10.8821 21.8821 10.3686 21.6525C9.85502 21.4229 9.39577 21.0875 9.02094 20.668C8.46894 20.052 8.86294 19.089 9.65494 19.007L9.76494 19.001L14.2359 19Z"
                  stroke={selectedColor === "bg-yellow-200" ? "white" : "black"}
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11.9999 2C13.3579 2 14.5059 2.903 14.8749 4.141L14.9209 4.312L14.9289 4.355C16.0313 4.9769 16.9707 5.8511 17.6702 6.906C18.3696 7.9609 18.8092 9.16648 18.9529 10.424L18.9809 10.711L18.9999 11V13.931L19.0209 14.067C19.1579 14.8038 19.5656 15.4627 20.1639 15.914L20.3309 16.031L20.4929 16.13C21.3529 16.617 21.0529 17.896 20.1159 17.994L19.9999 18H3.99995C2.97195 18 2.61295 16.636 3.50695 16.13C3.88798 15.9144 4.21719 15.618 4.47149 15.2616C4.72578 14.9052 4.89899 14.4974 4.97895 14.067L4.99995 13.924L5.00095 10.954C5.06192 9.64788 5.44211 8.37661 6.10823 7.25147C6.77436 6.12632 7.70611 5.18161 8.82195 4.5L9.06995 4.354L9.07995 4.311C9.2214 3.71303 9.54289 3.17284 10.001 2.76334C10.4592 2.35384 11.0319 2.09473 11.6419 2.021L11.8239 2.004L11.9999 2Z"
                  stroke={selectedColor === "bg-yellow-200" ? "white" : "black"}
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div
                className={`font-inter text-[14px] leading-[19.6px] ${
                  selectedColor === "bg-yellow-200"
                    ? "text-white"
                    : "text-black"
                }`}
              >
                New Request
              </div>
            </div>
            <div
              className={`flex items-center cursor-pointer rounded-lg gap-[4px] w-[208px] p-[8px] ${
                selectedColor === "bg-red-200" ? "bg-[#3698A1]" : "bg-white"
              }`}
              onClick={() => handleItemClick("bg-red-200")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 2L12.324 2.001L12.642 2.005L13.258 2.022L13.557 2.035L14.136 2.069L14.689 2.115C19.474 2.579 21.421 4.526 21.885 9.311L21.931 9.864L21.965 10.443C21.97 10.541 21.975 10.641 21.978 10.742L21.995 11.358L22 12L21.995 12.642L21.978 13.258L21.965 13.557L21.931 14.136L21.885 14.689C21.421 19.474 19.474 21.421 14.689 21.885L14.136 21.931L13.557 21.965C13.459 21.97 13.359 21.975 13.258 21.978L12.642 21.995L12 22L11.358 21.995L10.742 21.978L10.443 21.965L9.864 21.931L9.311 21.885C4.526 21.421 2.579 19.474 2.115 14.689L2.069 14.136L2.035 13.557C2.03014 13.4574 2.0258 13.3577 2.022 13.258L2.005 12.642C2.002 12.432 2 12.218 2 12L2.001 11.676L2.005 11.358L2.022 10.742L2.035 10.443L2.069 9.864L2.115 9.311C2.579 4.526 4.526 2.579 9.311 2.115L9.864 2.069L10.443 2.035C10.541 2.03 10.641 2.025 10.742 2.022L11.358 2.005C11.568 2.002 11.782 2 12 2ZM10.511 9.14C10.3015 9.01528 10.0536 8.9714 9.81401 9.01663C9.57441 9.06186 9.35959 9.19307 9.20995 9.38558C9.06031 9.5781 8.98617 9.81865 9.00146 10.062C9.01675 10.3054 9.12043 10.5347 9.293 10.707L10.585 12L9.293 13.293L9.21 13.387C9.05459 13.588 8.98151 13.8406 9.0056 14.0935C9.02969 14.3464 9.14916 14.5807 9.33972 14.7488C9.53029 14.9168 9.77767 15.006 10.0316 14.9982C10.2856 14.9905 10.527 14.8863 10.707 14.707L12 13.415L13.293 14.707L13.387 14.79C13.588 14.9454 13.8406 15.0185 14.0935 14.9944C14.3464 14.9703 14.5807 14.8508 14.7488 14.6603C14.9168 14.4697 15.006 14.2223 14.9982 13.9684C14.9905 13.7144 14.8863 13.473 14.707 13.293L13.415 12L14.707 10.707L14.79 10.613C14.9454 10.412 15.0185 10.1594 14.9944 9.90647C14.9703 9.65355 14.8508 9.41928 14.6603 9.25125C14.4697 9.08321 14.2223 8.99402 13.9684 9.00177C13.7144 9.00953 13.473 9.11365 13.293 9.293L12 10.585L10.707 9.293L10.613 9.21L10.511 9.14Z"
                  stroke={selectedColor === "bg-red-200" ? "white" : "black"}
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div
                className={`font-inter text-[14px] leading-[19.6px] ${
                  selectedColor === "bg-red-200" ? "text-white" : "text-black"
                }`}
              >
                Rejected Request
              </div>
            </div>
            <div
              className={`flex items-center cursor-pointer rounded-lg gap-[4px] w-[208px] p-[8px] ${
                selectedColor === "bg-gray-300" ? "bg-[#3698A1]" : "bg-white"
              }`}
              onClick={() => handleItemClick("bg-gray-300")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 8V12L14 14"
                  stroke={selectedColor === "bg-gray-300" ? "white" : "black"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3.05078 11.002C3.27487 8.80208 4.30105 6.76163 5.93351 5.26999C7.56598 3.77834 9.69048 2.93991 11.9017 2.91465C14.1128 2.88939 16.2559 3.67908 17.922 5.13306C19.5882 6.58703 20.6607 8.6035 20.935 10.7978C21.2092 12.992 20.6661 15.2104 19.4091 17.0298C18.1522 18.8491 16.2694 20.1421 14.1201 20.6619C11.9707 21.1817 9.70519 20.892 7.75578 19.8481C5.80636 18.8042 4.3095 17.0791 3.55078 15.002M3.05078 20.002V15.002H8.05078"
                  stroke={selectedColor === "bg-gray-300" ? "white" : "black"}
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div
                className={`font-inter text-[14px] leading-[19.6px] ${
                  selectedColor === "bg-gray-300" ? "text-white" : "text-black"
                }`}
              >
                History
              </div>
            </div>
            <div
              className={`flex items-center cursor-pointer rounded-lg gap-[4px] w-[208px] p-[8px] ${
                selectedColor === "bg-purple-200" ? "bg-[#3698A1]" : "bg-white"
              }`}
              onClick={() => handleItemClick("bg-purple-200")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M13 9V9.01M9 9V9.01M17 9V9.01M5 19V6C5 5.20435 5.31607 4.44129 5.87868 3.87868C6.44129 3.31607 7.20435 3 8 3H18C18.7956 3 19.5587 3.31607 20.1213 3.87868C20.6839 4.44129 21 5.20435 21 6V12C21 12.7956 20.6839 13.5587 20.1213 14.1213C19.5587 14.6839 18.7956 15 18 15H9L5 19Z"
                  stroke={selectedColor === "bg-purple-200" ? "white" : "black"}
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div
                className={`font-inter text-[14px] leading-[19.6px] ${
                  selectedColor === "bg-purple-200"
                    ? "text-white"
                    : "text-black"
                }`}
              >
                General Inquiries
              </div>
            </div>
          </div>
          {/* dashboard ends */}
        </div>

        <div className="flex flex-col items-center py-[12px] px-[32px] gap-[43px]">
          <div className="flex flex-col items-start gap-[28px] font-inter">
            <div className="text-[16px] leading-[25.2px]">Contact us</div>
            <div className="flex flex-col items-start gap-[12px]">
              <div className="text-[12px] leading-[19.6px]">
                Ph : +91 7990876497
              </div>
              <div className="text-[12px] leading-[19.6px]">
                Email : vatsalparikh0112@gmail.com
              </div>
            </div>
          </div>
          <div className="font-poppins text-[12px] leading-[16.8px] opacity-50">
            HIPPA / COPYRIGHT / T&C
          </div>
        </div>
      </div>
    </>
  );
};

export default PharmacySidebar;
