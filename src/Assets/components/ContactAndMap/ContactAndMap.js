import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

export default function ContactAndMap() {
  return (
    <Container fluid className="contactAndMapContainer px-0">
      <Row className="justify-content-center contactAndMapRow mx-auto">
        <Col xs={12} lg={6} className="contactAndMapCol contactCol">
          <h1 >East Village Landscaping</h1>
          <h3 >Springfield MA, 01108</h3>
          <a className="contactPhone mt-1" href={"Tel: 413-847-0617"}>
              <i class="fas fa-phone displayInline"></i>
              <h5> 413-847-0617</h5>
            </a>
            <a className="contactEmail pb-2" href={"mailto: contact@eastvillagelandscaping.com"}>
              <i class="fas fa-envelope v"></i>
              <h5> contact@eastvillagelandscaping.com</h5>
            </a>
            <Button href={'/#ContactUs'}className="mb-3 mx-auto">Contact Us!</Button>
        </Col>
        <Col xs={12} lg={6} className="contactAndMapCol my-2">
          <iframe
            title="serviceLocation"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d94712.00836027521!2d-72.616381381069!3d42.1128191539221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e6e62c08e4b81f%3A0x1d1808da41b9aabd!2sSpringfield%2C%20MA!5e0!3m2!1sen!2sus!4v1613863124125!5m2!1sen!2sus"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </Col>
      </Row>
    </Container>
  );
}
