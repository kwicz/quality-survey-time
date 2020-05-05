import React from 'react';
import PropTypes from 'prop-types';
import { Card, Form, Button } from 'react-bootstrap';
import firebase from 'firebase/app';

function Signout() {
  const cardStyle = {
    marginTop: '3rem'
  };

  function doSignOut() {
    firebase
      .auth()
      .signOut()
      .then(function() {
        console.log('Successfully signed out!');
      })
      .catch(function(error) {
        console.log(error.message);
      });
  }

  return (
    <Card style={cardStyle}>
      <Card.Header>
        <h1>Sign Out</h1>
      </Card.Header>
      <Card.Body>
        <button onClick={doSignOut}>Sign out</button>
      </Card.Body>
    </Card>
  );
}

export default Signout;
