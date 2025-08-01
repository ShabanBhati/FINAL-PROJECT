import React from "react";
import {Link} from "react-router-dom";
import {HiOutlineArrowNarrowRight} from "react-icons/hi";

const About = () => {
  return (
    <section className="about" id="about">
        <div className="container">
            <div className="banner">
                <div className="top">
                    <h1 className="heading">About us</h1>
                    <h2>We deliver the TASTE.</h2>
                </div>
                <p className="mid">We believe food is more than just a meal – it's an experience.  
                  From locally sourced ingredients to freshly prepared dishes,  
                  every bite is crafted with passion and love.</p>
                <Link to="/about-us">Explore menu{""}
                <span><HiOutlineArrowNarrowRight/></span></Link>
            </div>
            <div className="banner">
                <img src="/about1.jpg" alt="about" />
            </div>
        </div>
    </section>
  );
};

export default About;