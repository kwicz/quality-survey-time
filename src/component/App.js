import React from 'react';
import SurveyController from './Survey/SurveyController';
import Header from './Header';
import { Container, Col, Row } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Signin from './Signin/Signin';
import Signup from './Signin/Signup';
import Signout from './Signin/Signout';
import SurveyCreate from './Survey/SurveyCreate';
import SurveyEdit from './Survey/SurveyEdit';
import SurveyList from './Survey/SurveyList';

function App() {
  return (
    <Router>
      <Header />
      <Container fluid>
        <Switch>
          <Route path="/signin">
            <Row>
              <Col md={{ span: 6, offset: 3 }}>
                <Signin />
              </Col>
            </Row>
          </Route>
          <Route path="/signup">
            <Row>
              <Col md={{ span: 6, offset: 3 }}>
                <Signup />
              </Col>
            </Row>
          </Route>
          <Route path="/signout">
            <Row>
              <Col md={{ span: 6, offset: 3 }}>
                <Signout />
              </Col>
            </Row>
          </Route>
          <Route path="/">
            <Row>
              <Col md={{ span: 8, offset: 2 }}>
                <SurveyController />
              </Col>
            </Row>
          </Route>
          <Route path="/makesurvey">
            <Row>
              <Col md={{ span: 8, offset: 2 }}>
                <SurveyController />
              </Col>
            </Row>
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
