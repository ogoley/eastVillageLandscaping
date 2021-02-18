import React from 'react' 
import {  Col, Image } from "react-bootstrap";
// plow, stonepave
export default function SingleService(props) {
  return (
    <Col md={4} >
    <div className="imgContainer">
      <Image className="serviceImage" src={require("../images/" + props.imgUrl)}></Image>
    </div>
    <h5 className="pt-2">{props.title}</h5>
    <p className="mb-1">
      {props.text}
    </p>
    <h4 className="servicesSmallReadMe pt-3">
      <a href="#/">READ MORE</a>
    </h4>
  </Col>

  )
}
