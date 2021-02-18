import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SingleService from "./SingleService";
import OurServices from "./OurServices";
import { services, ourServices } from "../../config/Services";

export default function ServicesSmall() {
  return (
    <Container fluid className="serviceContainer">
      <Row className="justify-content-center my-md-5">
        <Col md={3} className="serviceSmall m-2 m-md-0">
          <OurServices title1={ourServices.title1} title2={ourServices.title2} text={ourServices.text}></OurServices>
        </Col>
        <Col md={7}>
          <Row>
            {services.map((service) => {
              return <SingleService title={service.title} text={service.text} imgUrl={service.imgUrl}></SingleService>;
            })}
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
