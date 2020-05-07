import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useFirestore } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { useHistory, Redirect } from "react-router-dom";

function SurveySubmissions(props) {
  const { name, authorEmail, survey, surveyId} = props.selectedSurvey;

  const history = useHistory();
  const firestore = useFirestore();

  function deleteSubmission() {
    firestore.delete({ collection: 'submissions', doc: surveyId });
    history.push('/');
  }
  if (props.selectedSurvey !== "") {
    return (
      <React.Fragment>
        <Card>
          <Card.Title>
            <Card.Header><h1>Survey Submissions</h1></Card.Header>
          </Card.Title>
          <Card.Body>
            <p>Survey Title: {name}</p>
            <p>Created By: {authorEmail}</p>
            {survey.map((item, index) => {
            return ( <div key={index}>
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
  } else {
    return (<Redirect to="/"/>)
  }
}

const mapStateToProps = (state) => {
  return {
    selectedSurvey: state.selectedSurvey
  }
}

// eslint-disable-next-line
SurveySubmissions = connect(mapStateToProps)(SurveySubmissions)

export default SurveySubmissions;
