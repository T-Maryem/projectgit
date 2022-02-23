//mport { BrowserRouter as Switch, Route, Redirect } from 'react-router-dom';
//import { BrowserRouter } from 'react-router-dom' 
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
  
} from "react-router-dom";
import UserPage from './container/UserPage';

import './App.css';

function App() {
  const username = prompt("Enter a Github Username");
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/:userName" component ={UserPage} />
            <Redirect to ={`/${username}`} />
            <UserPage />
          
          
         
        </Switch>
      </div>
    </Router>
  );
} 

export default App;
