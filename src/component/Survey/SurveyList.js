import React from 'react';
import SurveyItem from './SurveyItem';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';

function SurveyList(props) {
  useFirestoreConnect([ { collection: 'surveys' } ]);

  const surveys = useSelector((state) => state.firestore.ordered.surveys);

  let renderList;
  if (isLoaded(surveys)) {
    renderList = surveys.map((a) => <SurveyItem surveyObj={a} key={a.id} />);
  } else {
    renderList = 'loading..';
  }

  return <div>{renderList}</div>;
}

SurveyList.propTypes = {};

export default SurveyList;
