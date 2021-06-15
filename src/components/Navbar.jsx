import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <span />
      <NavLink to="/dashboard">Dashboard</NavLink>
      <NavLink to="/jobs/1">First Job</NavLink>
    </div>
  );
}

export default Navbar;
