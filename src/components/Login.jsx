import React, { useState } from 'react'
import Web3 from 'web3'
import axios from '../axiosConfig'

let web3 = new Web3(Web3.givenProvider || undefined)
console.log(web3)

export const Login = ({ onLoggedIn }) => {
  const [loading, setLoading] = useState(false)

  const handleAuthenticate = async ({ publicAddress, signature }) => {
    try {
      const userAuth = await axios.post(`/auth`, {
        publicAddress,
        signature
      })
      return userAuth.data
    } catch (err) {
      console.log(err)
    }
  }

  const handleSignMessage = async ({ publicAddress, nonce }) => {
    try {
      const signature = await web3.eth.personal.sign(
        `I am signing my one-time nonce: ${nonce}`,
        publicAddress,
        ''
      )

      return { publicAddress, signature }
    } catch (err) {
      throw new Error('You need to sign the message to be able to log in.')
    }
  }

  const handleSignup = async (publicAddress) => {
    try {
      const user = await axios.post(`/users`, {
        publicAddress
      })
      return user.data
    } catch (err) {
      console.log(err)
    }
  }

  const handleClickMeta = async () => {
    // Check if MetaMask is installed
    if (!window.ethereum) {
      return window.alert(
        '🦊 Please install MetaMask first, you can find download instructions at www.metamask.io'
      )
    }

    if (!web3) {
      try {
        // Request account access if needed
        await window.ethereum.enable()

        // We don't know window.web3 version, so we use our own instance of Web3
        // with the injected provider given by MetaMask
        web3 = new Web3(window.ethereum)
      } catch (error) {
        window.alert(
          "🦊 If you are already signed into your wallet but not connected to this site, go to your MetaMask account, open the account options menu and click on 'connected sites' --> 'manually connect to current site' 🦊"
        )
        return
      }
    }
    console.log('BOOOYA')

    const coinbase = await web3.eth.getCoinbase()
    console.log(coinbase)
    if (!coinbase) {
      window.alert(
        "🦊 If you are already signed into your wallet but not connected to this site, go to your MetaMask account, open the account options menu and click on 'connected sites' --> 'manually connect to current site' 🦊"
      )
      return
    }

    const publicAddress = coinbase.toLowerCase()
    setLoading(true)
    // Look if user with current publicAddress is already present on backend
    axios
      .get(`/users?publicAddress=${publicAddress}`)
      .then((response) => {
        const users = response.data
        return users.length ? users[0] : handleSignup(publicAddress)
      })
      .then(handleSignMessage)
      // Popup MetaMask confirmation modal to sign message
      // Send signature to backend on the /auth route
      .then(handleAuthenticate)
      // Pass accessToken back to parent component (to save it in localStorage)
      .then(onLoggedIn)
      .catch((err) => {
        window.alert(err)
        console.log(err)
        setLoading(false)
      })
  }

  return (
    <div className="py-1 px-3 text-bwhite bg-bpink rounded shadow hover:bg-bpurple duration-500">
      <button onClick={handleClickMeta}>
        {loading ? 'Loading...' : 'Login with MetaMask'}
      </button>
    </div>
  )
}

export default Login
