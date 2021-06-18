import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import JobDetail from './components/JobDetail';
import Jobboard from './components/job-board/Jobboard';

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
            <Jobboard />
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
