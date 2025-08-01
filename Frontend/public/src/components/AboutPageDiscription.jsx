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
                    <h2>Step inside and you're welcomed by a warm, cozy space with elegant wooden furniture, soft lighting, and relaxing music. </h2>
                </div>
                <p className="mid">Our restaurant is nestled in a calm and inviting neighborhood, away from the city's noise. Surrounded by lush greenery and blooming flowers, it offers a peaceful atmosphere for family meals and friendly gatherings. The fresh air and natural setting add a special touch to every visit.</p>
                <Link to="/">Discover More{""}
                                <span><HiOutlineArrowNarrowRight/></span></Link>
            </div>
            <div className="banner1">
                <img src="/about2.jpg" alt="about" />
            </div>
        </div>
    </section>
  );
};

export default About;