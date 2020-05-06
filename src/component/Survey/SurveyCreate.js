import React from 'react';
import { useFirestore } from 'react-redux-firebase';
import { Form, Button } from 'react-bootstrap';
import firebase from 'firebase/app';
import { Redirect } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

function SurveyCreate(props) {
	const surveys = useFirestore().collection('surveys');
	const history = useHistory();

	function addSurveyToFirestore(event) {
		event.preventDefault();
		history.push('/');
		return surveys.add({
			authorEmail: firebase.auth().currentUser.email,
			authorId: firebase.auth().currentUser.uid,
			name: event.target.name.value,
			survey: [
				{
					question: event.target.question1.value,
					answers: [ event.target.answer1.value, event.target.answer2.value, event.target.answer3.value ]
				}
      ]
			
		});
	}

	if (firebase.auth().currentUser === null) {
		return <Redirect to="signin" />;
	} else {
		return (
			<div>
				<h1>ADD FORM</h1>
				<Form onSubmit={addSurveyToFirestore}>
					<Form.Group controlId="formBasicEmail">
						<Form.Label>name</Form.Label>
						<Form.Control type="text" name="name" placeholder="Survey Name" />
						<Form.Text className="text-muted">Survey Name</Form.Text>
					</Form.Group>

					<Form.Group controlId="formBasicQuestion">
						<Form.Label>Question 1</Form.Label>
						<Form.Control type="text" name="question1" placeholder="Question" />
					</Form.Group>

					<Form.Group controlId="formBasicQuestion">
						<Form.Label>answer1</Form.Label>
						<Form.Control type="text" name="answer1" placeholder="Answer option" />
					</Form.Group>
					<Form.Group controlId="formBasicQuestion">
						<Form.Label>answer2</Form.Label>
						<Form.Control type="text" name="answer2" placeholder="Answer option" />
					</Form.Group>
					<Form.Group controlId="formBasicQuestion">
						<Form.Label>answer3</Form.Label>
						<Form.Control type="text" name="answer3" placeholder="Answer option" />
					</Form.Group>

					<Button variant="primary" type="submit">
						Submit
					</Button>
				</Form>
			</div>
		);
	}
}

export default SurveyCreate;
