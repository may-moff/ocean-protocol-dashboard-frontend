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
      console.log(publicAddress, id)
      setAuthorization(true)
      setCurrentUser({ address: publicAddress, userId: id })
    }
  }, [publicAddress, id])

  return (
    <div className="flex justify-center justify-items-center items-center">
      <div className="mx-3">
        <Blockies seed={publicAddress} />
      </div>

      <div className="place-content-center text-base">{publicAddress}</div>
    </div>
  )
}
export default Profile
