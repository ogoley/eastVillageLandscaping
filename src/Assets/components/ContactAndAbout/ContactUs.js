import React from "react";
import { Row, Col, Button } from "react-bootstrap";

export default function contactUs() {
  return (
    <div className="contactUs">
      <div className="contactUsTitle pt-2 pb-2 mb-3">
        
        <h3 className='mb-0 contactTitle1'>Send Us A</h3>
        <h3 className='mb-0 contactTitle2' > Message</h3>
        </div>
      <form id="contact-form" method="post">
        <Row xs={10}className="mx-0">
          <Col xs={12} sm={6} lg={12} className="mx-auto">
            <input
              type="text"
              id="name-input"
              placeholder="Your name"
              className="form-control contactInput"
            />
            <br />
            <input
              type="phone"
              id="phone-input"
              placeholder="Your phone number"
              className="form-control contactInput"
            />
            <br />
            <input
              type="email"
              id="email-input"
              placeholder="Your email"
              className="form-control contactInput"
            />
            <br />
          </Col>
          <Col className='mx-auto'>
            <textarea
              id="description-input"
              rows="3"
              placeholder="Your Message"
              className="form-control contactInput"
            ></textarea>
            <br />
          </Col>
        </Row>
        <Button className="mb-3 mx-auto">
            Submit
        </Button>
      </form>
    </div>
  );
}
