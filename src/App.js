import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import JobDetail from "./components/JobDetail";
import JobBoard from "./components/job-board/JobBoard";
import { Login } from "./components/Login";
import { Profile } from "./components/Profile";

const LS_KEY = "login-with-metamask:auth";

export const App = () => {
  const [state, setState] = useState({});

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
  };

  const { auth } = state;

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
            <div className="App-intro">
              {auth ? (
            <Profile auth={auth} onLoggedOut={handleLoggedOut} />
            ) : (
            <Login onLoggedIn={handleLoggedIn} />
          )}
        </div>
          </Route>
          <Route path="/jobboard">
            <JobBoard />
          </Route>
          <Route path="/jobs/:id">
            <JobDetail />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
