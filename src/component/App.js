import React from 'react';
import SurveyController from './Survey/SurveyController';
import Header from './Header';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Signin from './Signin/Signin';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/signin">
          <Signin />
        </Route>
        <Route path="/">
          <SurveyController />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
