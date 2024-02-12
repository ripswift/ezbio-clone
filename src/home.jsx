import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './home.css';
import App from './App'; 

function Main() {
  return (
    <Router>
      <Switch>
        <Route path="/shadow" component={App} /> {}
        <Route exact path="/" component={Home} /> {}
        {}
      </Switch>
    </Router>
  );
}

function Home() {
  return (
    <div>
      {}
    </div>
  );
}

export default Main;
