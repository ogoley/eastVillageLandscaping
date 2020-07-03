import React from "react";
import {  Container, Row, Col, Form } from "react-bootstrap";

export default function AboutUsSmall() {
  return (
    <Container fluid className="aboutUsContainer">
      <Row className="py-2 py-md-5 aboutUsRow mx-auto">
        <Col md={6} className="aboutUsCol p-4">
          <h1>I'm gonna be the very best that noone ever was</h1>
        </Col>
        <Col md={6} className="aboutUsCol p-4">
          <Form.Group className="mb-1"controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text">We'll never share your email with anyone else.</Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicName pb-0">
            <Form.Label>Name</Form.Label>
            <Form.Control type="email" placeholder="Enter your name" />
          </Form.Group>
          <Form.Group controlId="formBasicSubject pb-0">
            <Form.Label>Title</Form.Label>
            <Form.Control type="email" placeholder="Enter phone number" />
          </Form.Group>
          <Form.Group controlId="formBasicMessage">
            <Form.Label>Messasge</Form.Label>
            <Form.Control type="message" placeholder="Enter your message" />
          </Form.Group>
        </Col>
      </Row>
    </Container>
  );
}
