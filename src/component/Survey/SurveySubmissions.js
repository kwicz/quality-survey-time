import React from 'react';
import { Card, Button } from 'react-bootstrap';
import SurveyItem from './SurveyItem';
import { useFirestore } from 'react-redux-firebase';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";

function SurveySubmissions(props) {
  const { name, authorEmail, survey, surveyId} = props.selectedSurvey;
  console.log(survey)

  const history = useHistory();
  const firestore = useFirestore();

  function deleteSubmission() {
    firestore.delete({ collection: 'submissions', doc: surveyId });
    history.push('/');
  }

  return (
    <React.Fragment>
      <Card>
        <Card.Title>
          <Card.Header><h1>Survey Submissions</h1></Card.Header>
        </Card.Title>
        <Card.Body>
          <p>Survey Title: {name}</p>
          <p>Created By: {authorEmail}</p>
          {survey.map((item) => {
           return ( <div>
            <p>Question 1: {item.question} </p>
            <p>Answer : {item.answer} </p>
      
            </div>
            )
          })}
          
        </Card.Body>

        <Button onClick={deleteSubmission} variant="danger">
          Delete
        </Button>
        
      </Card>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    selectedSurvey: state.selectedSurvey
  }
}

SurveySubmissions = connect(mapStateToProps)(SurveySubmissions)

export default SurveySubmissions;
