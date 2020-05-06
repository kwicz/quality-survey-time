import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { useFirestoreConnect, isEmpty, firestore, useFirestore, withFirestore, isLoaded } from 'react-redux-firebase';
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import firebase from 'firebase/app';

function Dashboard(props) {
  
  // Find current user
  const auth = firebase.auth();

  useFirestoreConnect([
    { collection: 'surveys' }
  ])

  // Handle loading surveys user has created and taken
  const surveys = useSelector(state => state.firestore.ordered.surveys)
  const submissions = useSelector(state => state.firestore.ordered.submissions)

  let renderSurveyList;
  let renderSubmissionList;
  
  if (isLoaded(surveys) && isLoaded(auth) && auth.currentUser != null) {
    var user = auth.currentUser;   
    renderSurveyList = surveys.filter((item) => { return item.authorId === user.uid } ).map((a) => 
    <Link onClick={() => {handleSurveyClick(a)}} to='surveydetails' id={a.id} key={a.id} title={a.name}>
      <li>{a.name}</li>
      </Link>);
  } else {
    renderSurveyList = 'loading...';
  }
  
  function handleSurveyClick(surveyObj) {
    const action = { 
      type: "UPDATE_SELECTED",
      name: surveyObj.name,
      survey: surveyObj.survey,
      surveyId: surveyObj.id,
      authorEmail: surveyObj.authorEmail, 
      authorId: surveyObj.authorId,
    }
    props.onSurveySelect(action)
  }


  if (isLoaded(auth) && auth.currentUser != null) {
    return (
      <React.Fragment>
        <h1>Welcome, {user.email}!</h1>
        <h1>Your Dashboard</h1>
        <Row>
          <Col>
            <Card>
              <Card.Header>
                <Card.Title>Surveys You've Created</Card.Title>
              </Card.Header>
              <Card.Body>
                {renderSurveyList}
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Header>
                <Card.Title>Surveys You've Taken</Card.Title>
              </Card.Header>
            </Card>
          </Col>
        </Row>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <h1>Welcome, stranger!</h1>
        <h1>Your Dashboard</h1>
        <Row>
          <Col>
            <Card>
              <Card.Title>Surveys You've Created</Card.Title>
              <Card.Body>
                {renderSurveyList}
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Title>Surveys You've Taken</Card.Title>
              <Card.Body>

              </Card.Body>
            </Card>
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}

export default Dashboard;
