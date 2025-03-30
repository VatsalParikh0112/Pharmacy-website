import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "../pages/Homepage";
import PatientNavbar from "./PatientNavbar";
import PatientCurrent from "../pages/PatientCurrent";
import PatientHomepage from "../pages/PatientHomepage";
import PatientFooter from "./PatientFooter";
import PatientInfo from "../pages/PatientInfo";
import PatientInsurance from "../pages/PatientInsurance";
import PatientHistory from "../pages/PatientHistory"


const PatientLayout = () => {
  return (
    <>
      <PatientNavbar />

      <div className="flex h-full ">
        <Routes>
          <Route path="Homepage" element={<Homepage />} />
          <Route index element={<PatientHomepage />} /> {/* Default page */}
          <Route path="PatientCurrent" element={<PatientCurrent />} />
          <Route path="PatientInfo" element={<PatientInfo />} />
          <Route path="PatientInsurance" element={<PatientInsurance />} />
          <Route path="PatientHistory" element={<PatientHistory />} />
        </Routes>
      </div>

      <PatientFooter />
    </>
  );
};

export default PatientLayout;
