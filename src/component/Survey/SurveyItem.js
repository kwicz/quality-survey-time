import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";

function SurveyItem(props) {

  const cardStyle = {
    margin: '20px',
  }

  const history = useHistory();
  const { surveyObj } = props;
  
  function handleTakeSurveyClick() {
    const action = { 
      type: "UPDATE_SELECTED",
      name: surveyObj.name,
      survey: surveyObj.survey,
      surveyId: surveyObj.id,
      authorEmail: surveyObj.authorEmail, 
      authorId: surveyObj.authorId,
    }
    props.whereSurveyClicked(action);
    history.push('/submitsurvey');
  }

  return (
    <Card style={cardStyle}>
      <Card.Header>
        <Card.Title>{surveyObj.name} </Card.Title>
      </Card.Header>
      <Card.Body>
        <Button onClick={handleTakeSurveyClick}> Take Survey </Button>
      </Card.Body>
    </Card>
  );
}

SurveyItem.propTypes = {
  onClickingEdit: PropTypes.func
};

const mapStateToProps = (state) => {
  return {
    selectedSurvey: state.selectedSurvey
  }
}
// eslint-disable-next-line
SurveyItem = connect(mapStateToProps)(SurveyItem)

export default SurveyItem;
