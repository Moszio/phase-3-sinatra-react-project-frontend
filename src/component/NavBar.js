import React from "react";
import { NavLink } from "react-router-dom";


const NavBar = () => {
  return (
    <div>
      <NavLink
        to="/"
        exact
        
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        exact
      >
        About
      </NavLink>
      <NavLink
        to="/login"
        exact

      >
        Login
      </NavLink>
    </div>
  );
}

export default NavBar;