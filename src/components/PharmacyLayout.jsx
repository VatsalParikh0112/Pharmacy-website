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

      <div className="flex h-full pt-[10px] md:pt-[0px] ">
        <PharmacySidebar />

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
    </>
  );
};

export default PharmacyLayout;
