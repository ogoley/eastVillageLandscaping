import React from "react";

export default function AboutUs() {
  return (
    <div className="aboutUs">
      <div className="aboutUsTitleWrapper">
        <h1 className="aboutUsTitle1">About</h1>
        <h1 className="aboutUsTitle2"> Our Business</h1>
      </div>
      <p className="aboutUsParagraph pt-2 mb-0">
        Again, this is sample text for the business and it's supposed to represent how amazing we are and how good of a job we do!
        Again, this is sample text for the business and it's supposed to represent how amazing we are and how good of a job we do!
        Some other stuff.
      </p>
      <p className="aboutUsParagraph pt-2 mb-0">
        Again, this is sample text for the business and it's supposed to represent how amazing we are and how good of a job we do!
        Again, this is sample text for the business and it's supposed to represent how amazing we are and how good of a job we do!
        Again, this is sample text for the business and it's supposed to represent how amazing we are and how good of a job we do!
      </p>
      <p className="aboutUsParagraph pt-2 mb-2">
        Again, this is sample text for the business and it's supposed to represent how amazing we are and how good of a job we do!
        Again, this is sample text for the business and it's supposed to represent how amazing we are and how good of a job we do!
      </p>
      <a className="phone" href={"Tel: 413-847-0617"}>
      <i class="fas fa-phone"></i>
      <h4> 413-847-0617</h4>
      </a>
      <br/>
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
