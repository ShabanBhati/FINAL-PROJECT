import React from "react";
import AboutNavbar from "../components/AboutNavbar.jsx";
import { Link } from "react-router-dom";

import AboutPageDiscription from "../components/AboutPageDiscription";
import Footer from "../components/Footer.jsx";
import Reservation from "../components/Reservation.jsx";

const AboutPage = () => {
  return (
     <>
        <AboutNavbar />
        <AboutPageDiscription/>
        <Reservation />
        <Footer />
      
        </>
  );
};

export default AboutPage;