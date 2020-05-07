import React from 'react';
import SurveyItem from './SurveyItem';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';

function SurveyList(props) {
  useFirestoreConnect([ { collection: 'surveys' } ]);

  const surveys = useSelector((state) => state.firestore.ordered.surveys);

  let renderList;

  if (isEmpty(surveys)) {
    renderList = <h2>No surveys have been created yet!</h2>
  } else if (isLoaded(surveys)) {
    renderList = surveys.map((a) => <SurveyItem surveyObj={a} key={a.id} whereSurveyClicked={props.onSurveyClick} />);
  } else {
    renderList = 'loading...';
  }

  return (
    <React.Fragment>
      <h1>Choose a Survey to Take</h1>
      <div>{renderList}</div>
    </React.Fragment>);
}

SurveyList.propTypes = {
  onSurveyClick: PropTypes.func
};


export default SurveyList;
