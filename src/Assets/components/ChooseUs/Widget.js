import React from 'react'
import {  Row, Col } from "react-bootstrap";

export default function Widget(props) {
  return (
    <Col xs={12} md={6} lg={4} className="widgetOuter">
      <div className="widgetInner p-2">
        <Row className="mx-0">
          <Col className='icon' xs={2}>
            <i className={`fas fa-` + props.icon}></i>
          </Col>
          <Col xs={10} className="text my-auto">
          <h5 className='title mb-0'>{props.title}</h5>
          </Col>
        </Row>
        <p className='text px-2 pt-2'>
            {props.text}
        </p>

      </div>
    </Col>
  )
}
