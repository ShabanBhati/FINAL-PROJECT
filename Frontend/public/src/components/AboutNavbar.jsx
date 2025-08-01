import React from "react";
import { Link } from "react-router-dom";
import { data } from "../restApi.json";

const AboutNavbar = () => {
  return (
    <nav>
      <div className="logo1">Cp</div>

      <div className="navLinks showmenu">
        <div className="links">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </div>
        <div className="links">
          <Link to="/" className="nav-link">
            SERVICES
          </Link>
        </div>
        <div className="links">
          <Link to="/" className="nav-link">
            TEAM
          </Link>
        </div>
        <div className="links">
          <Link to="/" className="nav-link">
            RESERVATION
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default AboutNavbar;