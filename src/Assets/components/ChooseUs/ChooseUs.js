import React from "react";
import Widget from "./Widget";
import { chooseUs } from "../../config/Services";
import { Container, Row, Col } from "react-bootstrap";

export default function ChooseUs() {
  return (
    <Container fluid className="chooseUsContainer px-0">
      <Row className="chooseUsRow py-4 py-md-4 py-lg-5 mx-auto">
        <div className="chooseTitle pb-2 ml-3">
          <h1 className="chooseTitle1">Why </h1>
          <h1 className="chooseTitle2">Choose Us?</h1>
        </div>
        <Row className="widgetRow mx-auto">
          {chooseUs.map((el) => {
           return <Widget icon={el.icon} title={el.title} text={el.text}></Widget>;
          })}
        </Row>
      </Row>
    </Container>
  );
}
