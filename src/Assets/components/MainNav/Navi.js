import React from "react";
import { Navbar, Nav, Image } from "react-bootstrap";

export default function Navi() {
  return (
    <Navbar className="customNav" bg="light" expand="lg">
      <Navbar.Brand className="mx-auto py-0 pr-lg-5" href="#home">
        <Image src={require("../../images/eastVillage.svg")} alt="Landscaping Logo"/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <div className="middleBorder"></div>
      <Navbar.Collapse className="mx-md-auto mx-2" id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link className="px-3  text-nowrap" href="/">
            Home
          </Nav.Link>
          <Nav.Link className="px-3  text-nowrap has-divider"  href="/about">
            About Us
          </Nav.Link>
          <Nav.Link className="px-3  text-nowrap has-divider"  href="/services">
            Services
          </Nav.Link>
          <Nav.Link className="px-3 text-nowrap has-divider"  href="/#ContactUs">
            Contact Us
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
