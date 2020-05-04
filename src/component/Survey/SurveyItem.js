import React from 'react';
import PropTypes from 'prop-types';
import { Card, Dropdown, DropdownButton, Button } from 'react-bootstrap';
import { useFirestore } from 'react-redux-firebase';

function SurveyItem(props) {
  const { onClickingEdit, surveyObj } = props;
  const firestore = useFirestore();

  function deleteSurvey() {
    firestore.delete({ collection: 'surveys', doc: surveyObj.id });
  }

  return (
    <Card>
      <Card.Header>
        <Card.Title>{surveyObj.name} </Card.Title>
      </Card.Header>
      <Card.Body>
        <p>Question: {surveyObj.question1}</p>
        <DropdownButton
          key="secondary"
          id={`dropdown-variants-secondary`}
          variant={'secondary'}
          title={'Answers'}
          onSelect={function(evt) {
            console.log(evt);
          }}
        >
          <Dropdown.Item eventKey="1">{surveyObj.answer1}</Dropdown.Item>
          <Dropdown.Item eventKey="2">{surveyObj.answer2}</Dropdown.Item>
          <Dropdown.Item eventKey="3">{surveyObj.answer3}</Dropdown.Item>
        </DropdownButton>

        <Button onClick={deleteSurvey} variant="danger">
          Delete
        </Button>
        <Button variant="info" onClick={onClickingEdit}>
          Edit
        </Button>
      </Card.Body>
    </Card>
  );
}

SurveyItem.propTypes = {
  onClickingEdit: PropTypes.func
};

export default SurveyItem;
