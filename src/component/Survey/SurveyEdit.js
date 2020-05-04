import React from 'react';
import PropTypes from 'prop-types';
import { useFirestore } from 'react-redux-firebase';
import { Form, Button } from 'react-bootstrap';

function SurveyEdit(props) {
  const surveys = useFirestore().collection('surveys');

  function updateSurveyInFirestore(event) {
    event.preventDefault();
    return surveys.add({
      name: event.target.name.value,
      question1: event.target.question1.value,
      answer1: event.target.answer1.value,
      answer2: event.target.answer2.value,
      answer3: event.target.answer3.value
    });
  }

  return (
    <div>
      <h1> EDIT FORM </h1>
      <Form onSubmit={updateSurveyInFirestore}>
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

SurveyEdit.propTypes = {};

export default SurveyEdit;
