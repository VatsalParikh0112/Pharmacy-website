import React from "react";
import { Routes, Route } from "react-router-dom";
import PharmacyNavbar from "./PharmacyNavbar";
import PharmacySidebar from "../components/PharmacySidebar";
import Homepage from "../pages/Homepage/Homepage";
import PharmacyDashboard from "../pages/Pharmacy/PharmacyDashboard";
import PharmacyCurrent from "../pages/Pharmacy/PharmacyCurrent";
import PharmacyNew from "../pages/Pharmacy/PharmacyNew";
import PharmacyReject from "../pages/Pharmacy/PharmacyReject";
import PharmacyHistory from "../pages/Pharmacy/PharmacyHistory";
import PharmacyInquiries from "../pages/Pharmacy/PharmacyInquiries";

const PharmacyLayout = () => {
  return (
    <>
      <PharmacyNavbar />

      <div className="flex  h-[calc(100vh-80px)]">
        <div className=" hidden lg:block w-[240px] fixed top-[80px] left-0 h-[calc(100vh-80px)] bg-white  z-40 ">
          <PharmacySidebar />
        </div>

        <div className=" lg:pl-[272px] w-full overflow-y-auto ">
          <Routes>
            <Route path="Homepage" element={<Homepage />} />
            <Route index element={<PharmacyDashboard />} /> {/* Default page */}
            <Route path="PharmacyDashboard" element={<PharmacyDashboard />} />
            <Route path="PharmacyCurrent" element={<PharmacyCurrent />} />
            <Route path="PharmacyNew" element={<PharmacyNew />} />
            <Route path="PharmacyReject" element={<PharmacyReject />} />
            <Route path="PharmacyHistory" element={<PharmacyHistory />} />
            <Route path="PharmacyInquiries" element={<PharmacyInquiries />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default PharmacyLayout;
