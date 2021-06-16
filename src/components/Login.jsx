import React, { useState, useEffect } from "react";
import Web3 from "web3";
import axios from "axios";

// let web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
let web3 = new Web3(Web3.givenProvider || undefined);
// web3.eth.getAccounts().then(console.log);
// web3.eth.getCoinbase().then(console.log);
console.log(web3);

function Login() {
  //   const handleSignup = ({ publicAddress }) =>
  //     fetch(`${process.env.REACT_APP_BACKEND_URL}/users`, {
  //       body: JSON.stringify({ publicAddress }),
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       method: "POST",
  //     }).then((response) => response.json());

  const handleClickMeta = async () => {
    // Check if MetaMask is installed
    if (!window.ethereum) {
      window.alert("Please install MetaMask first.");
    }

    if (!web3) {
      try {
        // Request account access if needed
        await window.ethereum.enable();

        // We don't know window.web3 version, so we use our own instance of Web3
        // with the injected provider given by MetaMask
        web3 = new Web3(window.ethereum);
      } catch (error) {
        window.alert("You need to allow MetaMask.");
      }
    }

    const coinbase = await web3.eth.getCoinbase();
    console.log("my public address is", coinbase);
    console.log("hi");
    if (!coinbase) {
      window.alert("Please activate MetaMask first.");
    }

    const publicAddress = coinbase.toLowerCase();
    // Look if user with current publicAddress is already present on backend

    axios
      .get(
        `${process.env.REACT_APP_BACKEND_URL}/users?publicAddress=${publicAddress}`
      )
      .then((response) => response.data)
      .then((data) => {
        console.log(data);
      });

    //   !!!!!!!!!!!!!!!!!!!stop!! function ends after this line!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  };

  return (
    <div>
      <button onClick={handleClickMeta}>Login with MetaMask</button>
    </div>
  );
}

export default Login;
