import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../Assets/logo.svg";
import { Login } from "./Login";
import { Profile } from "./Profile";
import ButtonDefault from "./ButtonDefault";
import NewJob from "./Create-job/NewJob";

function Navbar({ onLoggedIn, auth, onLoggedOut, setAuthorization }) {
  return (
    <nav className="bg-bgreylighter">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            <div className="mr-8">
              <NavLink to="/" className="flex items-center py-2 px-4 ">
                <img className="h-12 w-12" src={logo} alt="logo" />
              </NavLink>
            </div>
            <div className="flex items-center space-x-4 text-bgrey transform ">
              <div className="transform hover:-translate-y-0.5 duration-300">
                <NavLink to="/">Home</NavLink>
              </div>
              <div className="transform hover:-translate-y-0.5 duration-300">
                <NavLink to="/dashboard">Dashboard</NavLink>
              </div>
              <div className="transform hover:-translate-y-0.5 duration-300">
                <NavLink to="/NewJob">New Job</NavLink>
              </div>

              {/* <div className="transform hover:-translate-y-0.5 duration-300">
                <NavLink to="/jobs/1">First Job</NavLink>
              </div> */}
            </div>
          </div>
          <div className="flex items-center space-x-6 ">
            {auth ? (
              <div className="flex">
                <div className="mx-10">
                  <Profile auth={auth} setAuthorization={setAuthorization} />
                </div>
                <ButtonDefault function={onLoggedOut} name="Logout" />
              </div>
            ) : (
              <Login onLoggedIn={onLoggedIn} />
            )}
            {/*  <a
              href="#"
              className="py-1 px-3 text-bwhite bg-bpink rounded shadow hover:bg-bpurple duration-500"
            >
              Connect Your Wallet
            </a> */}
            {/* <a
              href="#"
              className="py-5 px-3 text-bgrey transform hover:-translate-y-0.5 duration-300"
            >
              Settings
            </a> */}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
