import React from 'react'
import {  Col } from "react-bootstrap";

export default function Widget() {
  return (
    <Col xs={4} className="widgetOuter p-0">
      <div className="widgetInner m-2">
        test
      </div>
    </Col>
  )
}
