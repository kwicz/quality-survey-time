import React from 'react';
import SurveyController from './Survey/SurveyController';
import Header from './Header';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Container>
        <SurveyController />
      </Container>
    </React.Fragment>
  );
}

export default App;
