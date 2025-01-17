import React from "react";
import { NavLink } from "react-router-dom";

const logo = "assets/logo.png";

const NavBar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="club-logo" />
      <div className="nav-links">
        <NavLink to="/home" className="nav-link">
          Főoldal
        </NavLink>
        <NavLink to="/kapcsolatok" className="nav-link">
          Kapcsolatok
        </NavLink>
        <NavLink to="/palyazatok" className="nav-link">
          Pályázatok
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
