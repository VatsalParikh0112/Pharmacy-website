import React from "react";
import { Routes, Route } from "react-router-dom";
import PatientNavbar from "./PatientNavbar";
import PatientFooter from "./PatientFooter";
import Homepage from "../pages/Homepage/Homepage";
import PatientCurrent from "../pages/Patient/PatientCurrent";
import PatientHomepage from "../pages/Patient/PatientHomepage";
import PatientInfo from "../pages/Patient/PatientInfo";
import PatientInsurance from "../pages/Patient/PatientInsurance";
import PatientHistory from "../pages/Patient/PatientHistory"


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
