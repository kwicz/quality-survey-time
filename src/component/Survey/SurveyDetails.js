import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';
import SurveyItem from './SurveyItem';
import { useFirestore } from 'react-redux-firebase';
import { Link } from 'react-router-dom';

function SurveyDetails(props) {
  const { title, author, q1, a1, a2, a3 } = props;
  // const { onClickingEdit } = props;

  const firestore = useFirestore();

  function onClickingEdit() {
    console.log('edit button click');
  }

  function deleteSurvey(id) {
    firestore.delete({ collection: 'surveys', doc: id });
  }

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

        <Button onClick={deleteSurvey} variant="danger">
          Delete
        </Button>
        <Link to="/editsurvey">
          <Button variant="info" onClick={onClickingEdit}>
            Edit
          </Button>
        </Link>
      </Card>
    </React.Fragment>
  );
}

SurveyItem.propTypes = {
  onClickingEdit: PropTypes.func
};

export default SurveyDetails;
