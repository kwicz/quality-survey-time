import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';
import SurveyItem from './SurveyItem';
import { useFirestore, useFirestoreConnect } from 'react-redux-firebase';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { useHistory, Redirect } from 'react-router-dom';

function SurveyDetails(props) {
  // Destructuring selectedSurvey from redux store
  const { name, authorEmail, survey, surveyId } = props.selectedSurvey;

  // From react-router. Allows redirect functionality.
  const history = useHistory();

  // Grabs submissions from Firebase
  const firestore = useFirestore();
  useFirestoreConnect([ { collection: 'submissions' } ]);
  const submissions = useSelector((state) => state.firestore.ordered.submissions);

  // Click handling
  function onClickingEdit() {
    console.log('edit button click');
  }

  function deleteSurvey() {
    firestore.delete({ collection: 'surveys', doc: surveyId });
    history.push('/');
  }

  if (props.selectedSurvey !== '') {
    // Get the count of how many times this survey was taken.
    const thisSurvey = submissions.filter((item) => {
      return item.surveyId === surveyId;
    });
    const surveyCount = thisSurvey.length;

    return (
      <React.Fragment>
        <Card>
          <Card.Title>
            <Card.Header>
              <h1>Survey Details</h1>
            </Card.Header>
          </Card.Title>
          <Card.Body>
            <p>Survey Title: {name}</p>
            <p>Created By: {authorEmail}</p>
            <p>Number of Times Taken: {surveyCount}</p>
            {survey.map((item, index) => {
              return (
                <div key={index}>
                  <p>Question 1: {item.question} </p>
                  <p>Answer 1: {item.answers[0]} </p>
                  <p>Answer 2: {item.answers[1]} </p>
                  <p>Answer 3: {item.answers[2]} </p>
                </div>
              );
            })}
          </Card.Body>

          <Button onClick={deleteSurvey} variant="danger">
            Delete
          </Button>

          <Button variant="info" onClick={onClickingEdit}>
            <Link to="/editsurvey">Edit</Link>
          </Button>
        </Card>
      </React.Fragment>
    );
  } else {
    return <Redirect to="/" />;
  }
}

SurveyItem.propTypes = {
  onClickingEdit: PropTypes.func
};

const mapStateToProps = (state) => {
  return {
    selectedSurvey: state.selectedSurvey
  };
};

// eslint-disable-next-line
SurveyDetails = connect(mapStateToProps)(SurveyDetails);

export default SurveyDetails;
