import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="nav-icon">☰</div>
      <div className="nav-links">
        <NavLink to="/main" className="nav-link">
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
