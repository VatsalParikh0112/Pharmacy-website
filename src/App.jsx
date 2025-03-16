import React from 'react';
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import FollowUs from "./pages/FollowUs";
import PharmacyLayout from './components/PharmacyLayout';

const App = () => {
  const location = useLocation();
  const isPharmacyPage = location.pathname.startsWith("/PharmacyHomepage");

  return (
    <>
      {/* Show the correct navbar */}
      {!isPharmacyPage && <Navbar />}

      {/* App Routes */}
      <Routes>
        <Route path="/" element={<Homepage />} /> {/* Default Route */}
        <Route path="/About" element={<About />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/FollowUs" element={<FollowUs />} />

        {/* Pharmacy Section (Separate Layout) */}
        <Route path="/PharmacyHomepage/*" element={<PharmacyLayout />} />

        {/* Redirect unknown routes to Homepage */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      {/* Show Footer only on non-pharmacy pages */}
      {!isPharmacyPage && <Footer />}
    </>
  );
};

export default App;