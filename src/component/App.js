import React from 'react';
import SurveyController from './Survey/SurveyController';
import Header from './Header';

function App() {
  return (
    <React.Fragment>
      <Header />
      <SurveyController />
    </React.Fragment>
  );
}

export default App;
