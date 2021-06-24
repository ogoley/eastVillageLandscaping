import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

export default function AboutUsMain() {
  return (
    <Container fluid className="aboutUsMainContainer px-0">
      <Row className="py-3 py-md-5 justify-content-center aboutUsMainRow mx-auto">
        <Col xs={12} lg={9} className="aboutUsMainCol">
          <div className="aboutUsMain">
            <div className="aboutUsMainTitleWrapper">
              <h1 className="aboutUsMainTitle1">About</h1>
              <h1 className="aboutUsMainTitle2"> Our Business</h1>
            </div>
            <p className="aboutUsMainParagraph pt-2 mb-0">
              Established in 2002 by Darrin Adams, East Village Landscaping is a family owned business focused on providing the
              best quality service in the market. Our goal is to establish and maintain long-term relationships with customers
              built on honesty, value, and superior performance. Most of our customers have been with us from the very beginning
              and have become familiar with not only our work, but with our family.
            </p>
            <p className="aboutUsMainParagraph pt-2 mb-0">
              Thank you for visiting our website. We look forward to the opportunity to work with you.
            </p>

            <h4 className="aboutUsMainReadMore py-2">
              <a href="#/">READ MORE</a>
            </h4>
          </div>
        </Col>
        <Col xs={12} lg={3} className="aboutUsMainCol">
          <Row>
            <Image className="aboutUsGaurentee mx-auto" src={require("../../images/gaurentee.png")}></Image>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
