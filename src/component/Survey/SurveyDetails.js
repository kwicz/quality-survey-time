import React from 'react';
import { Card } from 'react-bootstrap';
import SurveyItem from './SurveyItem';

function SurveyDetails(props) {
  const { title, author, q1, a1, a2, a3 } = props;

  return (
    <React.Fragment>
      <Card>
        <Card.Title>
          <h1>Survey Details</h1>
        </Card.Title>
        <Card.Body>
          <p>Survey Title: {title}</p>
          <p>Created By: {author}</p>
          <p>Question 1: {q1} </p>
          <p>Answer 1: {a1} </p>
          <p>Answer 2: {a2} </p>
          <p>Answer 3: {a3} </p>
        </Card.Body>
      </Card>
    </React.Fragment>
  );
}

export default SurveyDetails;
