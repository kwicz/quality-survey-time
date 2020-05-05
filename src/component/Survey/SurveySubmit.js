import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function SurveySubmit(props) {
return <div> {props.selectedSurvey.name}</div>;
}

SurveySubmit.propTypes = {};

const mapStateToProps = (state) => {
  return {
    selectedSurvey: state.selectedSurvey
  }
}


SurveySubmit = connect(mapStateToProps)(SurveySubmit)

export default SurveySubmit;
