import React, { useEffect } from 'react';
import Blockies from 'react-blockies';
import jwt_decode from 'jwt-decode';

export const Profile = ({ auth, setAuthorization }) => {
  const { accessToken } = auth;

  const {
    payload: { publicAddress },
  } = jwt_decode(accessToken);

  useEffect(() => {
    if (!publicAddress) {
      setAuthorization(false);
    } else {
      setAuthorization(true);
    }
  }, [publicAddress]);

  return (
    <div className="Profile flex justify-between">
      <Blockies seed={publicAddress} />
      <div>{publicAddress}</div>
    </div>
  );
};
export default Profile;
