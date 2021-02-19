import React from "react";
import Widget from './Widget'
import { Container, Row, Col } from "react-bootstrap";

export default function ChooseUs() {
  return (
    <Container fluid className="chooseUsContainer px-0">
      <Row className="chooseUsRow py-md-4 py-lg-5 mx-auto">
        <div className="chooseTitle pb-2">
          <h1 className="chooseTitle1">Why </h1>
          <h1 className="chooseTitle2">Choose Us?</h1>
        </div>
        <Row className='widgetRow'>
        <Widget></Widget>
        <Widget></Widget>
        <Widget></Widget>
        <Widget></Widget>
        <Widget></Widget>
        <Widget></Widget>
        </Row>
      </Row>
    </Container>
  );
}
