import "./App.css";
import { Switch, Route, useHistory } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";

import Home from "./components/Home";
import JobDetail from "./components/JobDetail";
import Dashboard from "./components/job-board/Dashboard";
import NewJob from "./components/Create-job/NewJob";
import { Login } from "./components/Login";
import { Profile } from "./components/Profile";

const LS_KEY = "login-with-metamask:auth";

export const App = () => {
  const [state, setState] = useState({});
  const [authorization, setAuthorization] = useState(false);

  let history = useHistory();

  useEffect(() => {
    // Access token is stored in localstorage
    const ls = window.localStorage.getItem(LS_KEY);
    const auth = ls && JSON.parse(ls);
    setState({ auth });
  }, []);

  const handleLoggedIn = (auth) => {
    console.log(auth);
    localStorage.setItem(LS_KEY, JSON.stringify(auth));
    setState({ auth });
  };

  const handleLoggedOut = () => {
    localStorage.removeItem(LS_KEY);
    setState({ auth: undefined });
    history.push("/");
    setAuthorization(false);
  };

  const { auth } = state;

  return (
    <>
      <Navbar
        onLoggedIn={handleLoggedIn}
        auth={auth}
        onLoggedOut={handleLoggedOut}
        setAuthorization={setAuthorization}
      />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/dashboard">
          {authorization ? (
            <Dashboard />
          ) : (
            <h1>Please login to access your personal dashboard</h1>
          )}
        </Route>
        <Route path="/jobs/:id">
          <JobDetail />
        </Route>
        <Route path="/NewJob">
          {authorization ? (
            <NewJob />
          ) : (
            <h1>Please login to create a new job</h1>
          )}
        </Route>
      </Switch>
    </>
  );
};

export default App;
