import React, { useState, useEffect } from "react";
import Blockies from "react-blockies";
import jwt_decode from "jwt-decode";
// import jwt_decode from "jwt-decode";

export const Profile = ({ auth, onLoggedOut }) => {
  const [state, setState] = useState({
    loading: false,
    user: undefined,
  });

  useEffect(() => {
    const { accessToken } = auth;
    const {
      payload: { id },
    } = jwt_decode(accessToken);
    // jwt_decode<jwt_decoded>(accessToken);

    fetch(`${process.env.REACT_APP_BACKEND_URL}/users/${id}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((response) => response.json())
      .then((user) => setState({ ...state, user }))
      .catch(window.alert);
  }, []);

  //   setState({ ...state, loading: true });

  const { accessToken } = auth;

  const {
    payload: { publicAddress },
  } = jwt_decode(accessToken);
  //   jwt_decode<jwt_decoded>(accessToken);

  return (
    <div className="Profile">
      <p>
        Logged in as <Blockies seed={publicAddress} />
      </p>
      <div>
        My publicAddress is <pre>{publicAddress}</pre>
      </div>

      <p>
        <button onClick={onLoggedOut}>Logout</button>
      </p>
    </div>
  );
};
export default Profile;
