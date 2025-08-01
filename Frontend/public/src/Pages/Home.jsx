import React from "react";
import HeroSection from "../components/HeroSection";
import About from "../components/About";
import Otherinfo from "../components/Otherinfo";
import Menu from "../components/Menu";
import Team from "../components/Team";
import Reservation from "../components/Reservation";
import Footer from "../components/Footer";
import Aboutus from "../components/Aboutus";

const Home =() =>{
    return (
        <>
        <HeroSection/>
        <About/>
        <Otherinfo/>
        <Menu/>
        <Aboutus/>
        <Team/>
        <Reservation/>
        <Footer/>
        </>
    )
}
export default Home