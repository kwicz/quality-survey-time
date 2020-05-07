import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import firebase from 'firebase/app';
import FlashMessage from './FlashMessage';

function Signout() {
  const [ successMessage, setSuccessMessage ] = useState('');
  const [ errorMessage, setErrorMessage ] = useState('');

  const cardStyle = {
    marginTop: '3rem'
  };

  function doSignOut() {
    firebase.auth().signOut().then(function() {
      setSuccessMessage('You have been signed out');
    }).catch(function(error) {
      setErrorMessage(error.message);
    });
  }

  return (
    <React.Fragment>
      <FlashMessage successMessage={successMessage} errorMessage={errorMessage} />
      <Card style={cardStyle}>
        <Card.Header>
          <h1>Sign Out</h1>
        </Card.Header>
        <Card.Body className="text-center">
          <Button size="lg" variant="outline-success" onClick={doSignOut}>
            Sign out
          </Button>
        </Card.Body>
      </Card>
    </React.Fragment>
  );
}

export default Signout;
