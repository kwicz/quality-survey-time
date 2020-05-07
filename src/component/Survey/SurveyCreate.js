import React, { useState } from 'react';
import { useFirestore } from 'react-redux-firebase';
import { Form, Button, Card, Col, Row } from 'react-bootstrap';
import firebase from 'firebase/app';
import { Redirect } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

function SurveyCreate(props) {
  const surveys = useFirestore().collection('surveys');
  const history = useHistory();
  const blankQuestion = { question: '', answers: [] };

  const [ surveyState, setSurveyState ] = useState([]);

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

    surveyStateCopy[index] = updateQuestion;

    setSurveyState(surveyStateCopy);
	};
	
	const cardStyle = {
		margin: '20px',
		boxShadow: '0px 2px 17px -9px rgba(0,0,0,0.57)'

	}

  if (firebase.auth().currentUser === null) {
    return <Redirect to="signin" />;
  } else {
    return (
      <div>
        <Card style={cardStyle}>
          <Form onSubmit={addSurveyToFirestore}>
            <Card.Body >
              <Form.Group>
                <Form.Label>What would you like to name your survey?</Form.Label>
                <Form.Control type="text" name="name" placeholder="Survey Name" required="required" autoComplete="SurveyName"/>
              </Form.Group>
            </Card.Body>

            {surveyState.map((val, index) => {
              return (
                <Card key={`key-${index}`} style={cardStyle} >
                  <Card.Body>
                    <Form.Group >
                      <Form.Label>Provide a Question</Form.Label>
                      <Form.Control
                        type="text"
                        name={`question,${index}`}
                        id={`${index}`}
                        placeholder={`Question #${index + 1}`}
                        onChange={updateQuestionInState}
                      />
                    </Form.Group>

                    <Form.Group >
                      <Form.Label>Provide 3 Potential Answers</Form.Label>
                      <Form.Control
                        type="text"
                        name={`answer1,${index}`}
                        placeholder="Answer Option 1"
                        onChange={updateQuestionInState}
                      />
                    </Form.Group>
                    <Form.Group >
                      <Form.Control
                        type="text"
                        name={`answer2,${index}`}
                        placeholder="Answer Option 2"
                        onChange={updateQuestionInState}
                      />
                    </Form.Group>
                    <Form.Group >
                      <Form.Control
                        type="text"
                        name={`answer3,${index}`}
                        placeholder="Answer Option 3"
                        onChange={updateQuestionInState}
                      />
                    </Form.Group>
                  </Card.Body>
                </Card>
              );
            })}
            <Card.Body>
              <Row>
                <Col xs={6} className="text-center">
                  <Button variant="info" onClick={addNewQuestion} size="lg" block>
                    Add Question
                  </Button>
                </Col>
                <Col xs={6} className="text-center">
                  <Button variant="primary" type="submit" size="lg" block>
                    Submit
                  </Button>
                </Col>
              </Row>
            </Card.Body>
          </Form>
        </Card>
      </div>
    );
  }
}

export default SurveyCreate;
