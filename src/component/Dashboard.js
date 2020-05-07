import React from 'react';
import { Card, Row, Col, Spinner } from 'react-bootstrap';
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import firebase from 'firebase/app';
import {v4} from "uuid";


function Dashboard(props) {
  // Find current user in Firebase

  const loadingStyle = {
    textAlign: 'center'
  };
  const auth = firebase.auth();
  useFirestoreConnect([ { collection: 'surveys' }, { collection: 'submissions' } ]);

  // Handle loading surveys user has created and taken
  const surveys = useSelector((state) => state.firestore.ordered.surveys);
  const submissions = useSelector((state) => state.firestore.ordered.submissions);

  let renderSurveyList;
  let renderSubmissionList;
	let user;
  //Surveys you made
  if (isLoaded(surveys) && isLoaded(auth) && auth.currentUser != null) {
    user = auth.currentUser;
    renderSurveyList = surveys
      .filter((item) => {
        return item.authorId === user.uid;
      })
      .map((a) => (
        <Link
          onClick={() => {
            handleSelectedSurveyClick(a);
          }}
          to="surveydetails"
          id={a.id}
          key={a.id}
          title={a.name}
        >
          <li>{a.name}</li>
        </Link>
      ));
  } else {
    renderSurveyList = (
      <div style={loadingStyle}>
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </div>
    );
  }

  function handleSelectedSurveyClick(surveyObj) {
    const action = {
      type: 'UPDATE_SELECTED',
      name: surveyObj.name,
      survey: surveyObj.survey,
      surveyId: surveyObj.id,
      authorEmail: surveyObj.authorEmail,
      authorId: surveyObj.authorId
    };
    props.onSurveySelect(action);
  }

  //surveys I have taken

  if (isLoaded(submissions) && isLoaded(auth) && auth.currentUser != null) {
		user = auth.currentUser;
    renderSubmissionList = submissions
      .filter((item) => {
        return item.userId === user.uid;
      })
      .map((a) => (
        <Link
          onClick={() => {
            handleSelectedSurveyClick(a);
          }}
          to="surveysubmissions"
          id={a.userId}
          key={v4()}
          title={a.name}
        >
          <li>{a.name}</li>
        </Link>
      ));
  } else {
    renderSubmissionList = (
      <div style={loadingStyle}>
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </div>
    );
  }

  if (isLoaded(auth) && auth.currentUser !== null && user.email !== undefined) {
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
              <Card.Body>{renderSurveyList}</Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Header>
                <Card.Title>Surveys You've Taken</Card.Title>
              </Card.Header>
              <Card.Body>{renderSubmissionList}</Card.Body>
            </Card>
          </Col>
        </Row>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <h1>Please Log in to view this page. </h1>

        <Row>
          <Col>
            <Card>
              <Card.Header>
                <Card.Title>Surveys You've Created</Card.Title>
              </Card.Header>
              <Card.Body>{renderSurveyList}</Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Header>
                <Card.Title>Surveys You've Taken</Card.Title>
              </Card.Header>
              <Card.Body>{renderSubmissionList}</Card.Body>
            </Card>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default Dashboard;
