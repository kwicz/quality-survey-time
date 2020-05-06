import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Form, Card, Button } from 'react-bootstrap';
import firebase from 'firebase/app';
import {useHistory} from 'react-router-dom';
import { useFirestore } from 'react-redux-firebase';

function SurveySubmit(props) {
  const submissions = useFirestore().collection('submissions');
  const history = useHistory();
  const [ selected, setSelected ] = useState({})
  
  console.log("PROPS", props)
	// const qObj = {
  //   authorEmail: "email",
  //   authorId: "Id",
  //   name: 'title',
	// 	survey: [
	// 		{
	// 			question: 'How would you like your cheese?',
	// 			answers: [ `By the beach`, `In the grass`, `At your mom's` ]
	// 		},
	// 		{
	// 			question: 'How do you run?',
	// 			answers: [ `good`, `bad`, `okay` ]
	// 		}
	// 	]
  // };
  
  function addSubmissionToFirestore(event) {
    event.preventDefault();

    console.log(selected);

    history.push('/');
    const submitThis = {
      title: props.selectedSurvey.name,
      userId: firebase.auth().currentUser.uid,
      userEmail: firebase.auth().currentUser.email,
      surveyId: props.selectedSurvey.surveyId,
      survey: {...selected}
      
    }
    console.log("...SELECTED:", submitThis.survey)
    console.log("SUBMIT THIS: ", submitThis);
    return submissions.add(submitThis);
  }

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
						<Card>
							<Card.Header>
								<Card.Title>
									Question {index + 1}: {q.question}
								</Card.Title>
							</Card.Header>
							<Card.Body>
							
                {q.answers.map((answer, index) => (
                  <Form.Check 
                    name={q.question} 
                    type="radio" 
                    id={index} 
                    label={answer}
                    onChange={() => {setSelected({ ...selected,[q.question]: answer })}}
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

SurveySubmit.propTypes = {};

const mapStateToProps = (state) => {
	return {
		selectedSurvey: state.selectedSurvey
	};
};

SurveySubmit = connect(mapStateToProps)(SurveySubmit);

export default SurveySubmit;
