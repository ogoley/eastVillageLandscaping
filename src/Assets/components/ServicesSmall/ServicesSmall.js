import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SingleService from "./SingleService";
import OurServices from "./OurServices";
import { services, ourServices } from "../../config/Services";

export default function ServicesSmall() {

  

  return (
    <Container fluid className="serviceContainer px-0">
      <Row className="justify-content-center serviceSmallRow py-md-4 py-lg-5 mx-auto">
        <Col md={3} className="serviceSmall">
          <OurServices title1={ourServices.title1} title2={ourServices.title2} text={ourServices.text}></OurServices>
        </Col>
        <Col md={9}>
          <Row>
            {services.slice(0, 3).map((service) => {
              return <SingleService title={service.title} text={service.text} imgUrl={service.imgUrl}></SingleService>;
            })}
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
