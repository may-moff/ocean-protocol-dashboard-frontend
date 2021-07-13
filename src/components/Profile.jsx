import React, { useEffect } from 'react';
import Blockies from 'react-blockies';
import jwt_decode from 'jwt-decode';

export const Profile = ({ auth, setAuthorization, setPublicAddress }) => {
  const { accessToken } = auth;

  const {
    payload: { publicAddress },
  } = jwt_decode(accessToken);

  useEffect(() => {
    if (!publicAddress) {
      setAuthorization(false);
    } else {
      setAuthorization(true);
      setPublicAddress(publicAddress);
    }
  }, [publicAddress]);

  return (
    <div className="flex justify-between">
      <div className="mx-3">
        <Blockies seed={publicAddress} />
      </div>

      <div className=" text-lg">{publicAddress}</div>
    </div>
  );
};
export default Profile;
