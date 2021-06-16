import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div class="flex items-center justify-around flex-wrap">
        <div class="">
          <NavLink to="/">Logo</NavLink>
        </div>
        <div class="justify-between">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/dashboard">Dashboard</NavLink>
          <NavLink to="/">MetaMask</NavLink>
        </div>
      </div>
    </>
  );
}

export default Navbar;
