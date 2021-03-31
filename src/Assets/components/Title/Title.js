import React from 'react'
import { Container, Row, Col } from "react-bootstrap";

export default function Title(props) {
  return (
    <Container fluid className='titleContainer'>
      <Row className='titleRow justify-content-center'>
        <div className="py-md-0 pl-1 servicesTitle ">
            <h2 className="serviceTitle1">Our </h2>
            <h2 className="serviceTitle2"> Services</h2>
          </div>
        <h1>{props.title}</h1>
      </Row>
    </Container>

  )
}
