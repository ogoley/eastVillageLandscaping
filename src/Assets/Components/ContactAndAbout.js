import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";

export default function ContactAndAbout() {
  return (
    <Container fluid className="aboutUsContainer px-0 pb-md-3">
      <Row className="justify-content-center aboutUsRow mx-auto">
        <Col xs={12} md={5} className='pt-3 pt-md-4 aboutUsCol'>
            <AboutUs></AboutUs>
        </Col>
        <Col xs={12} md={5} className='pt-3 pt-md-4 aboutUsCol'>
            <ContactUs></ContactUs>
        </Col>
      </Row>
    </Container>
  );
}

/*
 pt-2 pt-md-4 mx-auto aboutUsRow     
*/
