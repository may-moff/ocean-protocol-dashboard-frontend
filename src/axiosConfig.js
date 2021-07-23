import axios from 'axios'
const LS_KEY = 'login-with-metamask:auth'

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL
})

axiosInstance.interceptors.request.use((config) => {
  const ls = localStorage.getItem(LS_KEY)
  if (!ls) return config
  const auth = ls && JSON.parse(ls)
  config.headers['ocean-auth-token'] = auth.accessToken
  return config
})

export default axiosInstance
