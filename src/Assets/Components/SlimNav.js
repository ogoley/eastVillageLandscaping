import React from "react";
import { Navbar, Row, Col } from "react-bootstrap";

export default function SlimNav() {
  return (
    <Navbar className="slimNav" expand="lg">
      <Row className="mx-auto">
        <Col md={6} className="phone">
          {" "}
          <a href="Tel: 413-847-0617">413-847-0617</a>
        </Col>
        <Col className="location" md={6}>
          <a
            href="https://www.google.com/maps/place/Springfield,+MA/@42.1128192,-72.6163813,12z"
            className="text-nowrap m-0"
          >
            Springfield, MA 01108
          </a>
        </Col>
      </Row>
    </Navbar>
  );
}
