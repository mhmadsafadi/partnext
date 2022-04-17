import React from "react";
import { Row, Col, Form, FloatingLabel } from "react-bootstrap";
import "./forms.css";

const Forms = () => {
    return (
        <Form>
            <Row className="mb-4">
                <Form.Group as={Col} md controlId="formGridName" className="mb-4 mb-md-0">
                    <FloatingLabel controlId="floatingName" label="Full name">
                        <Form.Control type="text" placeholder="Full name" />
                    </FloatingLabel>
                </Form.Group>
                <Form.Group as={Col} md controlId="formGridPassword">
                    <FloatingLabel controlId="floatingPassword" label="Password">
                        <Form.Control type="password" placeholder="Password" />
                    </FloatingLabel>
                </Form.Group>
            </Row>

            <Form.Group className="mb-4" controlId="formGridEmail">
                <FloatingLabel controlId="floatingEmail" label="Email address" className="mb-3" >
                    <Form.Control type="email" placeholder="name@example.com" />
                </FloatingLabel>
            </Form.Group>

            <Form.Group className="mb-4" controlId="formGridTextarea">
                <FloatingLabel controlId="floatingTextarea" label="What would you like to talk about?">
                    <Form.Control as="textarea" placeholder="Leave a comment here" style={{ height: '200px' }} />
                </FloatingLabel>
            </Form.Group>

            <button type="submit" className="btn-form w-100">
                Let’s Talk
            </button>
        </Form>
    );
};

export default Forms;
