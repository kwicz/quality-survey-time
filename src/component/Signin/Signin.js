import React from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import firebase from 'firebase/app';

function Signin() {
  const cardStyle = {
    marginTop: '3rem'
  };

  function doSignIn(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('successfully signed in');
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  return (
    <Card style={cardStyle}>
      <Card.Title>
        <Card.Header> LogIn </Card.Header>
      </Card.Title>
      <Card.Body>
        <Form onSubmit={doSignIn}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name="email" />
            <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" name="password" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default Signin;
