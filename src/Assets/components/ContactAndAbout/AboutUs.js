import React from "react";

export default function AboutUs() {
  return (
    <div className="aboutUs">
      <div className="aboutUsTitleWrapper">
        <h1 className="aboutUsTitle1">About</h1>
        <h1 className="aboutUsTitle2"> Our Business</h1>
      </div>
      <p className="aboutUsParagraph pt-2 mb-0">
        Welcome to East Village Landscaping. We are a full-service landscaping company delivering every service your lawn needs to
        look its best. We provide high quality work and long-lasting relationships with our customers.
      </p>
      <p className="aboutUsParagraph pt-2 mb-0">
        Let us have the opportunity to bring out the best in your lawn and landscape. Browse our website, check out our gallery,
        read our client testimonials, then contact us for a free estimate on your landscape desires.
      </p>
      <p className="aboutUsParagraph pt-2 mb-2">
        Our service area includes: East Longmeadow, Longmeadow, surrounding areas of Springfield, Hampden, Wilbraham, and Enfield,
        CT.
      </p>
      <a className="phone" href={"Tel: 413-847-0617"}>
        <i class="fas fa-phone"></i>
        <h4> 413-847-0617</h4>
      </a>
      <br />
      <a className="email" href={"mailto: contact@eastvillagelandscaping.com"}>
        <i class="fas fa-envelope"></i>
        <h4> contact@eastvillagelandscaping.com</h4>
      </a>
      <h4 className="aboutUsReadMore py-2">
        <a href="#/">READ MORE</a>
      </h4>
    </div>
  );
}
