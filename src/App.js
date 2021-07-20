import './App.css'
import { Switch, Route, useHistory } from 'react-router-dom'
import React, { useState, useEffect, useReducer } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import JobDetail from './components/JobDetail'
import Dashboard from './components/job-board/Dashboard'
import NewJob from './components/Create-job/NewJob'
import formReducer from './reducers/formReducer'
const LS_KEY = 'login-with-metamask:auth'

const currentJobInitializer = {
  parseKeys: [],
  result: {},
  removedItemsHistory: []
}

export const App = () => {
  const [state, setState] = useState({})
  const [authorization, setAuthorization] = useState(false)
  const [publicAddress, setPublicAddress] = useState('')
  const [currentJob, dispatchCurrentJob] = useReducer(
    formReducer,
    currentJobInitializer
  )
  const [content, setContent] = useState({
    parseKeys: [],
    result: {},
    removedItemsHistory: []
  })

  let history = useHistory()

  useEffect(() => {
    const ls = window.localStorage.getItem(LS_KEY)
    const auth = ls && JSON.parse(ls)
    setState({ auth })
  }, [])

  // useEffect(() => console.log(content), [content])

  const handleLoggedIn = (auth) => {
    console.log(auth)
    localStorage.setItem(LS_KEY, JSON.stringify(auth))
    setState({ auth })
  }

  const handleLoggedOut = () => {
    localStorage.removeItem(LS_KEY)
    setState({ auth: undefined })
    history.push('/')
    setAuthorization(false)
  }

  const { auth } = state

  return (
    <>
      <Navbar
        onLoggedIn={handleLoggedIn}
        auth={auth}
        onLoggedOut={handleLoggedOut}
        setAuthorization={setAuthorization}
        setPublicAddress={setPublicAddress}
      />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/dashboard">
          {authorization ? (
            <Dashboard />
          ) : (
            <div className="flex justify-center justify-items-center mt-12 bg-balertred">
              <h1 className="text-white">
                Please login to access your personal dashboard
              </h1>
            </div>
          )}
        </Route>
        <Route path="/jobs/:id">
          <JobDetail
            currentJob={currentJob}
            dispatchCurrentJob={dispatchCurrentJob}
          />
        </Route>
        <Route path="/NewJob">
          {authorization ? (
            <NewJob
              currentJob={currentJob}
              dispatchCurrentJob={dispatchCurrentJob}
              pubblicAddress={publicAddress}
            />
          ) : (
            <div className="flex justify-center justify-items-center mt-12 bg-balertred">
              <h1 className="text-white">Please login to create a new job</h1>
            </div>
          )}
        </Route>
      </Switch>
    </>
  )
}

export default App
