import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "../pages/Homepage";
import PharmacyNavbar from "./PharmacyNavbar";
import PharmacySidebar from "../components/PharmacySidebar";
import PharmacyDashboard from "../pages/PharmacyDashboard";
import PharmacyCurrent from "../pages/PharmacyCurrent";
import PharmacyNew from "../pages/PharmacyNew";
import PharmacyReject from "../pages/PharmacyReject";
import PharmacyHistory from "../pages/PharmacyHistory";
import PharmacyInquiries from "../pages/PharmacyInquiries";

const PharmacyLayout = () => {
  return (
    <>
      <PharmacyNavbar />

      <div className="flex justify-center lg:justify-start ">
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
