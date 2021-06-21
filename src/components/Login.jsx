import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import axios from 'axios';
import ButtonPrimary from './ButtonPrimary';

let web3 = new Web3(Web3.givenProvider || undefined);

console.log(web3);

function Login({ onLoggedIn }) {
  const [loading, setLoading] = useState(false);

  // const handleAuthenticate = ({ publicAddress, signature }) =>
  //   fetch(`${process.env.REACT_APP_BACKEND_URL}/auth`, {
  //     body: JSON.stringify({ publicAddress, signature }),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     method: "POST",
  //   }).then((response) => response.json());

  const handleSignMessage = async ({ publicAddress, nonce }) => {
    try {
      const signature = await web3.eth.personal.sign(
        `I am signing my one-time nonce: ${nonce}`,
        publicAddress,
        ''
      );

      return { publicAddress, signature };
    } catch (err) {
      throw new Error('You need to sign the message to be able to log in.');
    }
  };

  const handleSignup = (publicAddress) => {
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/users`, {
        publicAddress,
      })
      //   {
      //   body: JSON.stringify({ publicAddress }),
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      // })
      .then((response) => response.data);
  };

  const handleClickMeta = async () => {
    // Check if MetaMask is installed
    if (!window.ethereum) {
      return window.alert('Please install MetaMask first.');
    }

    if (!web3) {
      try {
        // Request account access if needed
        await window.ethereum.enable();

        // We don't know window.web3 version, so we use our own instance of Web3
        // with the injected provider given by MetaMask
        web3 = new Web3(window.ethereum);
      } catch (error) {
        return window.alert('You need to allow MetaMask.');
      }
    }

    const coinbase = await web3.eth.getCoinbase();
    console.log('my public address is', coinbase);
    console.log('hi');
    if (!coinbase) {
      return window.alert('Please activate MetaMask first.');
    }

    // const publicAddress = coinbase.toLowerCase();
    const publicAddress = coinbase.toLowerCase();
    setLoading(true);
    console.log('before call', publicAddress);
    // Look if user with current publicAddress is already present on backend

    axios
      .get(
        `${process.env.REACT_APP_BACKEND_URL}/users?publicAddress=${publicAddress}`
      )
      // .then((response) => console.log(response))
      // .then((data) => data.publicAddress)
      .then((response) => {
        const users = response.data;
        return users.length ? users[0] : handleSignup(publicAddress);
      })
      .then(handleSignMessage)
      // (users.length ? users[0] : handleSignup(publicAddress)))
      // Popup MetaMask confirmation modal to sign message
      // Send signature to backend on the /auth route
      // .then(handleAuthenticate)
      // Pass accessToken back to parent component (to save it in localStorage)
      .then(onLoggedIn)
      .catch((err) => {
        window.alert(err);
        console.log(err);
        setLoading(false);
      });
  };

  return (
    <div>
      <button onClick={handleClickMeta}>
        {loading ? 'Loading...' : 'Login with MetaMask'}
      </button>{' '}
    </div>
  );
}

export default Login;
