import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.svg'
import { Login } from './Login'
import { Profile } from './Profile'
import ButtonDefault from './atoms/ButtonDefault'

function Navbar({
  onLoggedIn,
  auth,
  onLoggedOut,
  setAuthorization,
  setCurrentUser
}) {
  return (
    <nav className="bg-bgreylighter tablet:w-full">
      <div className="max-w-6xl mx-auto tablet:w-full">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            <div className="mr-8 tablet:hidden">
              <NavLink to="/" className="flex items-center py-2 px-4  ">
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
              <div className="transform hover:-translate-y-0.5 duration-300 tablet:flex-nowrap">
                <NavLink to="/newjob">New Job</NavLink>
              </div>
            </div>
            {/* <div className="flex items-center space-x-6 tablet:space-x-0"> */}
            {auth ? (
              <div className="flex items-center">
                <div className="mx-10 tablet:mx-0">
                  <Profile
                    auth={auth}
                    setAuthorization={setAuthorization}
                    setCurrentUser={setCurrentUser}
                  />
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
      {/* </div> */}
    </nav>
  )
}

export default Navbar
