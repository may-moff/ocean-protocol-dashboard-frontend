import React from "react";
import Web3 from "web3";

// let web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
let web3 = new Web3(Web3.givenProvider || undefined);
// web3.eth.getAccounts().then(console.log);
// web3.eth.getCoinbase().then(console.log);
console.log(web3);

function Login() {
  const handleClick = async () => {
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
    fetch(
      `${process.env.REACT_APP_BACKEND_URL}/users?publicAddress=${publicAddress}`
    ).then((response) => response.json());
    // If yes, retrieve it. If no, create it.
    //   .then((users) => (users.length ? users[0] : handleSignup(publicAddress)));
  };

  return (
    <div>
      {/* <MetaMaskLoginButton /> */}
      <button onClick={handleClick}>Login with MetaMask</button>
    </div>
  );
}

export default Login;
