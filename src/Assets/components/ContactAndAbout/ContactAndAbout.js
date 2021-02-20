import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";

export default function ContactAndAbout() {
  return (
    <Container fluid className="aboutUsContainer px-0 ">
      <Row className="py-3 py-md-5 justify-content-center aboutUsRow mx-auto">
        <Col xs={12} lg={6} className='aboutUsCol'>
            <AboutUs></AboutUs>
        </Col>
        <Col xs={12} lg={6} className='aboutUsCol'>
            <ContactUs ></ContactUs>
        </Col>
      </Row>
    </Container>
  );
}

/*
 pt-2 pt-md-4 mx-auto aboutUsRow     
*/
