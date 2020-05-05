import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { useFirestoreConnect, isLoaded, isEmpty, firestore } from 'react-redux-firebase';
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom';


function Dashboard(props) {

  useFirestoreConnect([
    { collection: 'surveys' }
  ])

  const surveys = useSelector(state => state.firestore.ordered.surveys)

  // const userSurveys = surveys.where('userName', '==', 'thisUser' );


  function deleteSurvey(id) {
    console.log('delete clicked')
    // firestore.delete({ collection: 'surveys', doc: id });
  }

  let renderList;

  if (isLoaded(surveys)) {
    renderList = surveys.map((a) => <Link onClick='' to='surveydetails'><li>{a.title}</li></Link>);
  } else {
    renderList = 'loading...';
  }

  return (
    <React.Fragment>
      <h1>Your Dashboard</h1>
      <Row>
        <Col>
          <Card>
            <Card.Title>Surveys You've Created</Card.Title>
            <Card.Body>
              {renderList}
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Title>Surveys You've Taken</Card.Title>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
}

export default Dashboard;
