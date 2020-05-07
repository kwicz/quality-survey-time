import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Form, Card, Button } from 'react-bootstrap';
import firebase from 'firebase/app';
import {useHistory} from 'react-router-dom';
import { useFirestore } from 'react-redux-firebase';

function SurveySubmit(props) {
  const submissions = useFirestore().collection('submissions');
  const history = useHistory();
  const [ selected, setSelected ] = useState([])
  
  // Will take submission data and insert it into the submissions table in Firebase
  function addSubmissionToFirestore(event) {
    event.preventDefault();
    history.push('/');
    const submitThis = {
      authorId: props.selectedSurvey.authorId,
      authorEmail: props.selectedSurvey.authorEmail,
      name: props.selectedSurvey.name,
      userId: firebase.auth().currentUser.uid,
      userEmail: firebase.auth().currentUser.email,
      surveyId: props.selectedSurvey.surveyId,
      survey: [...selected]
    }
    return submissions.add(submitThis);
  }

  // If survey is selected, return survey to user. Otherwise, redirect user to their dashboard.
	if (props.selectedSurvey === '') {
		return <Redirect to="/takesurvey" />;
	} else {
		return (
			<div>
				<h1>{props.selectedSurvey.name}</h1>
        <Form onSubmit={addSubmissionToFirestore}>
          {/* //questions section */}
          {props.selectedSurvey.survey.map((q, index) => {
            return (
              <Card style={{ marginBottom: 5 }} key={index}>
                <Card.Header>
                  <Card.Title>
                    Question {index + 1}: {q.question}
                  </Card.Title>
                </Card.Header>
                <Card.Body>
                  {q.answers.map((answer, index) => (
                    <Form.Check key={answer + index}
                      name={q.question} 
                      type="radio" 
                      id={index} 
                      label={answer}
                      onChange={() => {setSelected([ ...selected,{question: q.question, answer: answer} ])}}
                      value={answer}/>
                  ))}
                </Card.Body>
              </Card>
            );
          })}
          <Button type="submit">Submit </Button>
        </Form>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		selectedSurvey: state.selectedSurvey
	};
};

// eslint-disable-next-line
SurveySubmit = connect(mapStateToProps)(SurveySubmit);

export default SurveySubmit;
