import React from 'react'
import { Container, Row, Col, Image } from "react-bootstrap";

export default function Footer() {
  return (
    <Container fluid className="footerContainer px-0">
      <Row className="justify-content-center footerRow py-md-2 py-lg-3 mx-auto">
        <Col xs={12} md={5}className="footerLeft ">
          <h3>East Village Landscaping</h3>
          <h4>contact@eastvillagelandscaping.com</h4>
          <h4>Springfield, MA 01108</h4>
          <h5>413-847-0617</h5>
        </Col>
        <Col xs={12} md={2} className="gaurenteeCol ">
          <Image className="gaurenteeImg mx-auto" src={require("../../images/gaurentee.png")}></Image>
        </Col>
        <Col xs={12} md={5}className="footerRight">
          <h5>Accepted Payment</h5>
          <div className="payments">
          <i class="fab fa-cc-visa"></i>
          <i class="fab fa-cc-mastercard"></i>
          <i class="fab fa-cc-discover"></i>
          <i class="fab fa-cc-amex"></i>
          <i class="fas fa-money-bill"></i>
          <i class="fas fa-money-check"></i>
          </div>
          
          <h4>© 2021 East Village Landscaping </h4>
          <h5>Design by J.Ogoley</h5>
        </Col>
      </Row>
    </Container>
  )
}
