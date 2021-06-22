import React, { useState, useEffect } from "react";
import Blockies from "react-blockies";
import jwtDecode from "jwt-decode";

// interface Props {
// 	auth: Auth;
// 	onLoggedOut: () => void;
// }

// interface State {
// 	loading: boolean;
// 	user?: {
// 		id: number;
// 		username: string;
// 	};
// 	username: string;
// }

// 	payload: {
// 		id:
// 		publicAddress:

// }

export const Profile = ({ auth, onLoggedOut }) => {
  const [state, setState] = useState({
    loading: false,
    user: undefined,
  });

  useEffect(() => {
    const { accessToken } = auth;
    const {
      payload: { id },
    } = jwtDecode(accessToken);
    // jwtDecode<JwtDecoded>(accessToken);

    fetch(`${process.env.REACT_APP_BACKEND_URL}/users/${id}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((response) => response.json())
      .then((user) => setState({ ...state, user }))
      .catch(window.alert);
  }, []);

  //   const handleSubmit = () => {
  //     const { accessToken } = auth;
  //     const { user } = state;

  setState({ ...state, loading: true });

  if (!user) {
    window.alert(
      "The user id has not been fetched yet. Please try again in 5 seconds."
    );
    return;
  }

  fetch(`${process.env.REACT_APP_BACKEND_URL}/users/${user.id}`, {
    // body: JSON.stringify({ username }),
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    method: "PATCH",
  })
    .then((response) => response.json())
    .then((user) => setState({ ...state, loading: false, user }))
    .catch((err) => {
      window.alert(err);
      setState({ ...state, loading: false });
    });

  const { accessToken } = auth;

  const {
    payload: { publicAddress },
  } = jwtDecode(accessToken);
  //   jwtDecode<JwtDecoded>(accessToken);

  const { loading, user } = state;

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
