import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import JobDetail from "./components/JobDetail";
import JobBoard from "./components/job-board/JobBoard";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
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
}

export default App;
