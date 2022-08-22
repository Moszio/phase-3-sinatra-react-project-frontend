import React from "react";
import { NavLink } from "react-router-dom";


const NavBar = () => {
  return (
    <div className="navbar">
        <div className="navbar-company-name">
            <p>FFS LOGISTIC</p>
        </div>
        <div>
            <img src="./Logo.jpg" alt="compnay-logo" className="navbar-company-logo"/>
        </div>
        <div className="navbar-btn-container">
        <NavLink
            to="/"
            exact
            className="navbar-btn"
        >
            Home
        </NavLink>
        <NavLink
            to="/about"
            exact
            className="navbar-btn"
        >
            About
        </NavLink>
        <NavLink
            to="/login"
            exact
            className="navbar-btn"
        >
            Login
        </NavLink>
        </div>
    </div>
  );
}

export default NavBar;