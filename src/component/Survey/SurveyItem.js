import React from 'react';
import PropTypes from 'prop-types';
import { Card, Dropdown, DropdownButton, Button } from 'react-bootstrap';
import { useFirestore } from 'react-redux-firebase';

function SurveyItem(props) {
  const firestore = useFirestore();

  function deleteSurvey() {
    firestore.delete({ collection: 'surveys', doc: props.surveyObj.id });
  }

  return (
    <Card>
      <Card.Header>
        <Card.Title>{props.surveyObj.name} </Card.Title>
      </Card.Header>
      <Card.Body>
        <p>Question: {props.surveyObj.question1}</p>
        <DropdownButton key="secondary" id={`dropdown-variants-secondary`} variant={'secondary'} title={'Answers'}>
          <Dropdown.Item eventKey="1">{props.surveyObj.answer1}</Dropdown.Item>
          <Dropdown.Item eventKey="2">{props.surveyObj.answer2}</Dropdown.Item>
          <Dropdown.Item eventKey="3">{props.surveyObj.answer3}</Dropdown.Item>
        </DropdownButton>

        <Button onClick={deleteSurvey} variant="danger">
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
}

SurveyItem.propTypes = {};

export default SurveyItem;
