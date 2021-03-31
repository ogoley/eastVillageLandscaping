import React from "react";
import { Container, Row, Col, ListGroup, Image } from "react-bootstrap";
import { useState, useEffect } from "react";
import Title from "../Title/Title";
import { services } from "../../config/Services";

export default function Services() {
  const [serviceKey, setOpen] = useState({title: services[0].title, index: 0});
  const [isMobile, setIsMobile] = useState(window.matchMedia("(max-width: 768px)").matches);
  useEffect(() => {
    function updateIsMobile() {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches);
      console.log(isMobile);
    }
    window.addEventListener("resize", updateIsMobile);
    return () => {
      window.removeEventListener("resize", updateIsMobile);
    };
  }, []);

  let ourList = null;
  if (!isMobile) {
    ourList = (
      <ListGroup defaultActiveKey="#link1" id="serviceList">
        {services.map((service, index) => {
          return (
            <ListGroup.Item className="serviceListItem my-1" variant="service" action onClick={() => setOpen({title:service.title, index})}>
              {service.title}
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    );
  } else {
    // Where we would put dropdown

  }

  const currentService = services[serviceKey.index]
  return (
    <Container fluid className="servicesContainer px-0">
      <Title title={serviceKey.title}></Title>
      <Row className="servicesRow justify-content-center mx-auto py-3">
        <Row className="serviceRow">
          <Col xs={12} md={3} className="px-0">
            {ourList}
          </Col>
          <Col xs={12} md={9}  className='textAndImage'>
            <Col xs={12} md={6} >
              <p>{currentService.text} </p>
              <p>{currentService.text} </p>
              
            </Col>
            <Col xs={12} md={6}>
            <Image className="serviceImage mx-auto" src={require("../../images/" + currentService.imgUrl )}></Image>
            <Image className="serviceImage mx-auto" src={require("../../images/" + currentService.imgUrl2)}></Image>
            <Image className="serviceImage mx-auto" src={require("../../images/" + currentService.imgUrl3)}></Image>
            </Col>
          </Col>
        </Row>
      </Row>
    </Container>
  );
}

// <Image className="serviceImage mx-auto" src={require("../../images/" )}></Image>
// <Image className="serviceImage mx-auto" src={require("../../images/" )}></Image>
// <Image className="serviceImage mx-auto" src={require("../../images/" )}></Image>
