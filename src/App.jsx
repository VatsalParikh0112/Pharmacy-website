import React from 'react';
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import 'typeface-roboto';
import 'typeface-inter';
import 'typeface-poppins';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Homepage from './pages/Homepage/Homepage';
import About from "./pages/Homepage/About";
import ContactUs from "./pages/Homepage/ContactUs";
import FollowUs from "./pages/Homepage/FollowUs";
import PharmacyLayout from './components/PharmacyLayout';
import PatientLayout from './components/PatientLayout';

const App = () => {
  const location = useLocation();
  const isPharmacyPage = location.pathname.startsWith("/PharmacyHomepage");
  const isPatientPage = location.pathname.startsWith("/PatientHomepage");

  return (
    <>
      {/* Show the correct navbar only for non-patient and non-pharmacy pages */}
      {!isPharmacyPage && !isPatientPage && <Navbar />}

      {/* App Routes */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/About" element={<About />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/FollowUs" element={<FollowUs />} />

        {/* Pharmacy Section (Separate Layout) */}
        <Route path="/PharmacyHomepage/*" element={<PharmacyLayout />} />

        {/* Patient Section (Now includes its own Navbar & Footer) */}
        <Route path="/PatientHomepage/*" element={<PatientLayout />} />

        {/* Redirect unknown routes to Homepage */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      {/* Show the correct footer only for non-patient and non-pharmacy pages */}
      {!isPharmacyPage && !isPatientPage && <Footer />}
    </>
  );
};

export default App;
