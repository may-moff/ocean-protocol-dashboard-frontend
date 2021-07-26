import React, { useEffect } from 'react'
import Blockies from 'react-blockies'
import jwt_decode from 'jwt-decode'

export const Profile = ({ auth, setAuthorization, setCurrentUser }) => {
  const { accessToken } = auth

  const {
    payload: { publicAddress, id }
  } = jwt_decode(accessToken)

  useEffect(() => {
    if (!publicAddress) {
      setAuthorization(false)
    } else {
      setAuthorization(true)
      setCurrentUser({ address: publicAddress, userId: id })
    }
  }, [publicAddress, id, setAuthorization, setCurrentUser])

  return (
    <div className="flex justify-center justify-items-center items-center">
      <div className="mx-3">
        <Blockies className="rounded-full" seed={publicAddress} />
      </div>

      <div className="place-content-center text-base ">
        {publicAddress.replace(/(\d{3})(.*)(\d{3})/, '$1(***)$3')}
      </div>
    </div>
  )
}
export default Profile
