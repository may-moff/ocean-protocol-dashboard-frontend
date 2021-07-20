import React from 'react'
import Login from './../Login'
import ButtonDefault from '../ButtonDefault'
import Profile from '../Profile'

const LogInButtonLanding = (props) => {
  const { onLoggedIn, auth, onLoggedOut, setAuthorization, setPublicAddress } =
    props

  return (
    <div>
      {auth ? (
        <div className="flex">
          <div className="mx-10">
            <Profile
              auth={auth}
              setAuthorization={setAuthorization}
              setPublicAddress={setPublicAddress}
            />
          </div>
          <ButtonDefault function={onLoggedOut} name="Logout" />
        </div>
      ) : (
        <Login onLoggedIn={onLoggedIn} />
      )}
    </div>
  )
}

export default LogInButtonLanding
