import React from "react";
import { Routes, Route } from "react-router-dom";
import PharmacyNavbar from "./PharmacyNavbar";
import PharmacyDashboard from "../pages/PharmacyDashboard";
import Homepage from "../pages/Homepage";
import PharmacyCurrent from "../pages/PharmacyCurrent";
import PharmacySidebar from "../components/PharmacySidebar";

const PharmacyLayout = () => {
  return (
    <>
      <PharmacyNavbar />

      <div className="flex">
        <PharmacySidebar />

        <Routes>
          <Route path="/" element={<PharmacyDashboard />} />
          <Route path="/PharmacyCurrent" element={<PharmacyCurrent />} />
          <Route path="/Homepage" element={<Homepage />} />
        </Routes>
      </div>
    </>
  );
};

export default PharmacyLayout;