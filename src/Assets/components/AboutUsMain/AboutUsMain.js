import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

export default function AboutUsMain() {
  return (
    <Container fluid className="aboutUsMainContainer px-0">
      <Row className="py-3 py-md-5 justify-content-center aboutUsMainRow mx-auto">
        <Col xs={12} lg={8} className="aboutUsMainCol">
          <div className="aboutUsMain">
            <div className="aboutUsMainTitleWrapper">
              <h1 className="aboutUsMainTitle1">About</h1>
              <h1 className="aboutUsMainTitle2"> Our Business</h1>
            </div>
            <p className="aboutUsMainParagraph pt-2 mb-0">
              East Village Landscaping was started 30 years ago by the current owner, Darrin. It started when he was only 16 years
              old and at that point Darrin didn't have a car and would get rides from his father so he could earn some extra cash
              as a kid. After 30 years that childhood venture turned into a full scale, professional landscaping business.
            </p>
            <p className="aboutUsMainParagraph pt-2 mb-0">
              East Village Landscaping offers a wide variety of services to the greater springfield area and surrounding towns. We
              take on all sizes of project from small mowing jobs to industrial plot maintence. Aside from typical landscaping
              services we offer a range of other possibilites like gardens, stone-walls and fire-places.
            </p>
            <p className="aboutUsMainParagraph pt-2 mb-0">
              East Village Landscaping was started 30 years ago by the current owner, Darrin. It started when he was only 16 years
              old and at that point Darrin didn't have a car and would get rides from his father so he could earn some extra cash
              as a kid. After 30 years that childhood venture turned into a full scale, professional landscaping business.
            </p>
            <p className="aboutUsMainParagraph pt-2 mb-0">
              East Village Landscaping offers a wide variety of services to the greater springfield area and surrounding towns. We
              take on all sizes of project from small mowing jobs to industrial plot maintence. Aside from typical landscaping
              services we offer a range of other possibilites like gardens, stone-walls and fire-places.
            </p>
           
            <h4 className="aboutUsMainReadMore py-2">
              <a href="#/">READ MORE</a>
            </h4>
          </div>
        </Col>
        <Col xs={12} lg={4} className="aboutUsMainCol">
          <Row>
            <Image className="aboutUsLogo mx-auto" src={require("../../images/scapeLogo.png")}></Image>
          </Row>
          <Row>
            <Image className="aboutUsGaurentee mx-auto" src={require("../../images/gaurentee.png")}></Image>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
