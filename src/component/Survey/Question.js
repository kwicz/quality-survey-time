import React from 'react';
import {Form } from "react-bootstrap";

function Question(props) {
    const count = new Array(props.count)
	return (
		<div>
            {count.map((item, index) => {
                return <div>{index}
			<Form.Group controlId="formBasicQuestion">
				<Form.Label>Question 1</Form.Label>
				<Form.Control type="text" name="question1" placeholder="Question" />
			</Form.Group>

			<Form.Group controlId="formBasicQuestion">
				<Form.Label>answer1</Form.Label>
				<Form.Control type="text" name="answer1" placeholder="Answer option" />
			</Form.Group>
			<Form.Group controlId="formBasicQuestion">
				<Form.Label>answer2</Form.Label>
				<Form.Control type="text" name="answer2" placeholder="Answer option" />
			</Form.Group>
			<Form.Group controlId="formBasicQuestion">
				<Form.Label>answer3</Form.Label>
				<Form.Control type="text" name="answer3" placeholder="Answer option" />
			</Form.Group>
            </div>
            })}
		</div>
	);
}

export default Question;
