import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { useFirestore } from 'react-redux-firebase';

function Dashboard(props) {
  return (
    <React.Fragment>
      <h1>Your Dashboard</h1>
      <Row>
        <Col>
          <Card>
            <Card.Title>Surveys You've Created</Card.Title>
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
