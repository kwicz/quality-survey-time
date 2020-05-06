import React, { useState } from 'react';
import { useFirestore } from 'react-redux-firebase';
import { Form, Button, Card, FormControl } from 'react-bootstrap';
import firebase from 'firebase/app';
import { Redirect } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import Question from './Question';

function SurveyCreate(props) {
	const surveys = useFirestore().collection('surveys');
	const history = useHistory();
	const blankQuestion = { question: '', answers: [] };

	const [ surveyState, setSurveyState ] = useState([ ]);

	function addSurveyToFirestore(event) {
		event.preventDefault();
		surveys.add({
			authorEmail: firebase.auth().currentUser.email,
			authorId: firebase.auth().currentUser.uid,
			name: event.target.name.value,
			survey: surveyState
		});
		history.push('/');
	}

	const addNewQuestion = () => {
		setSurveyState([ ...surveyState, { ...blankQuestion } ]);
	};

	const updateQuestionInState = (event) => {
		// surveyState = [ {question: "", answers: []},  {question: "", answers: []}]

		const [ name, indexString ] = event.target.name.split(',');
		const index = parseInt(indexString);
		console.log("index =>", index)

		let surveyStateCopy = surveyState;
		let updateQuestion = surveyState[index];

		//checking what type of input
		// update prop in temp state object.
		if (name === 'question') {
			updateQuestion.question = event.target.value;
		} else if (name === 'answer1') {
			updateQuestion.answers[0] = event.target.value;
		} else if (name === 'answer2') {
			updateQuestion.answers[1] = event.target.value;
		} else if (name === 'answer3') {
			updateQuestion.answers[2] = event.target.value;
		}

		console.log(updateQuestion);
		surveyStateCopy[index] = updateQuestion;

		setSurveyState(surveyStateCopy);
	};

	if (firebase.auth().currentUser === null) {
		return <Redirect to="signin" />;
	} else {
		return (
			<div>
				<label htmlFor="basic-url">How Many questions</label>

				<Form onSubmit={addSurveyToFirestore}>
					<Form.Group>
						<Form.Label>Name of Survey</Form.Label>
						<Form.Control type="text" name="name" placeholder="Survey Name" />
						<Form.Text className="text-muted">Survey Name</Form.Text>
					</Form.Group>

					{surveyState.map((val, index) => {
						const questionId = `question-${index}`;
						return (
							<Card key={`cat-${index}`}>
								<Card.Body>
									<Form.Group controlId="formBasicQuestion">
										<Form.Label>Question {index + 1}</Form.Label>
										<Form.Control
											type="text"
											name={`question,${index}`}
											id={`${index}`}
											placeholder="Question"
											onChange={updateQuestionInState}
										/>
									</Form.Group>

									<Form.Group controlId="formBasicQuestion">
										<Form.Label>answer1</Form.Label>
										<Form.Control
											type="text"
											name={`answer1,${index}`}
											placeholder="Answer option"
											onChange={updateQuestionInState}
										/>
									</Form.Group>
									<Form.Group controlId="formBasicQuestion">
										<Form.Label>answer2</Form.Label>
										<Form.Control
											type="text"
											name={`answer2,${index}`}
											placeholder="Answer option"
											onChange={updateQuestionInState}
										/>
									</Form.Group>
									<Form.Group controlId="formBasicQuestion">
										<Form.Label>answer3</Form.Label>
										<Form.Control
											type="text"
											name={`answer3,${index}`}
											placeholder="Answer option"
											onChange={updateQuestionInState}
										/>
									</Form.Group>
								</Card.Body>
							</Card>
						);
					})}

					<Button variant="info" onClick={addNewQuestion}> 
            Add Question 
          </Button>
					<Button variant="primary" type="submit">
						Submit
					</Button>
				</Form>
			</div>
		);
	}
}

export default SurveyCreate;
