import React from 'react';
import Header from './Header';
import { Container, Col, Row } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Signin from './Signin/Signin';
import Signup from './Signin/Signup';
import Signout from './Signin/Signout';
import SurveyCreate from './Survey/SurveyCreate';
import SurveyEdit from './Survey/SurveyEdit';
import SurveyList from './Survey/SurveyList';
import SurveySubmit from './Survey/SurveySubmit';
import SurveySubmissions from './Survey/SurveySubmissions';
import Dashboard from './Dashboard';
import SurveyDetails from './Survey/SurveyDetails';
import { connect } from 'react-redux';
import styled from 'styled-components';
import img from '../img/bg03.jpg';

const AppStyle = styled.div`
  background-image: url(${img});
  background-size: cover;
  min-height: 95vh;
  padding: 50px;
  `;

function App(props) {
  
  const { dispatch } = props;

  function handleUpdateSelectedSurvey(action) {  
    dispatch(action);
  }

  return (
    
    <Router>
      <Header />
        <AppStyle>
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
          <Route path="/makesurvey">
            <Row>
              <Col md={{ span: 8, offset: 2 }}>
                <SurveyCreate />
              </Col>
            </Row>
          </Route>
          <Route path="/takesurvey">
            <Row>
              <Col md={{ span: 8, offset: 2 }}>
                <SurveyList onSurveyClick={handleUpdateSelectedSurvey}/>
              </Col>
            </Row>
          </Route>
          <Route path="/submitsurvey">
            <Row>
              <Col md={{ span: 8, offset: 2 }}>
                <SurveySubmit />
              </Col>
            </Row>
          </Route>
          <Route path="/editsurvey">
            <Row>
              <Col md={{ span: 8, offset: 2 }}>
                <SurveyEdit />
              </Col>
            </Row>
          </Route>
          <Route path="/surveydetails">
            <Row>
              <Col md={{ span: 8, offset: 2 }}>
                <SurveyDetails />
              </Col>
            </Row>
          </Route>
          <Route path="/surveysubmissions">
            <Row>
              <Col md={{ span: 8, offset: 2 }}>
                <SurveySubmissions />
              </Col>
            </Row>
          </Route>
          <Route path="/">
            <Row>
              <Col md={{ span: 8, offset: 2 }}>
                <Dashboard onSurveySelect={handleUpdateSelectedSurvey}/>
              </Col>
            </Row>
          </Route>
        </Switch>
      </Container>
    </AppStyle>
    </Router>
  );
}
const mapStateToProps = (state) => {
  return {
    selectedSurvey: state.selectedSurvey
  }
}
// eslint-disable-next-line
App = connect(mapStateToProps)(App)
export default App;
