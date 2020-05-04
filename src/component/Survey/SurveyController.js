import React from 'react';
import PropTypes from 'prop-types';
import SurveyCreate from './SurveyCreate';
import SurveyEdit from './SurveyEdit';
import SurveyList from './SurveyList';
import SurveySubmit from './SurveySubmit';
import { connect } from 'react-redux';
import { withFirestore } from 'react-redux-firebase';

function SurveyController(props) {
  const handleUpdateSelectedSurvey = () => {};

  return (
    <div>
      SurveyController
      <SurveyList />
      <SurveyCreate />
      <SurveyEdit />
      <SurveySubmit />
    </div>
  );
}

SurveyController.propTypes = {};
const mapStateToProps = (state) => {
  return state;
};

// eslint-disable-next-line
SurveyController = connect(mapStateToProps)(SurveyController);
export default withFirestore(SurveyController);
