import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

export default function ServicesSmall() {
  const paveString = "Stone & Cement Paving";
  const gardenString = "Landscaping & Gardening";
  return (
    <Container fluid className="serviceContainer">
      <Row className="justify-content-center my-md-5">
        <Col md={3} className="serviceSmall m-2 m-md-0">
          <div className="py-1 text-nowrap servicesSmallTitle ">
            <h5 className="p-0 m-0">Our</h5>
            <h2 className="p-0 m-0 sameLine">Services</h2>
          </div>
          <p className="py-2">
            This is our example text of the services we offer. We have been offering these fake services for over one million
            years. This is our example text of the services we offer. We have been offering these fake services for over one
            million years. This is our example text of the services we offer. We have been offering these fake services for over
            one million years.
          </p>
          <h4 className="pushLinkDown">
            <a href="#/">READ MORE</a>
          </h4>
        </Col>
        <Col md={8}>
          <Row>
            <Col md={4} >
              <div className="imgContainer">
                <Image src={require("../images/lawn.jpg")}></Image>
              </div>
              <h5 className="pt-2">{gardenString}</h5>
              <p className="mb-1">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
                type specimen book.
              </p>
              <h4 className="servicesSmallReadMe">
                <a href="#/">READ MORE</a>
              </h4>
            </Col>
            <Col md={4}>
              <div className="imgContainer">
                <Image src={require("../images/plow.jpg")}></Image>
              </div>
              <h5 className="pt-2"> Snow Removal</h5>
              <p className="mb-1">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
                type specimen book.
              </p>
              <h4 className="servicesSmallReadMe">
                <a href="#/">READ MORE</a>
              </h4>
            </Col>
            <Col md={4}>
              <div className="imgContainer">
                <Image src={require("../images/stonePave.jpeg")}></Image>
              </div>
              <h5 className="pt-2">{paveString} </h5>
              <p className="mb-1">
                {" "}
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
                type specimen book.
              </p>
              <h4 className="servicesSmallReadMe">
                <a href="#/">READ MORE</a>
              </h4>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
