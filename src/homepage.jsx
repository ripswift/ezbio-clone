// Main.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './homepage.css';
import Home from './home'; // Import Home component
import App from './App'; // Import App component

function Main() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} /> {/* Render Home component on the home page */}
        <Route path="/shadow" component={App} /> {/* Render App component when navigating to /shadow */}
        {/* Add more routes if necessary */}
      </Switch>
    </Router>
  );
}

export default Main;
