import React from "react";
import { Navbar, Nav, NavDropdown, Image } from "react-bootstrap";

export default function Navi() {
  return (
    <Navbar className="customNav" bg="light" expand="lg">
      <Navbar.Brand className="mx-auto pr-md-5" href="#home">
        <Image src={require("../images/scapeLogo.png")} alt="Landscaping Logo" width="177" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="mx-md-auto mx-2" id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link className="px-3  text-nowrap" href="#home">
            Home
          </Nav.Link>
          <Nav.Link className="px-3  text-nowrap has-divider"  href="#link">
            About Us
          </Nav.Link>
          <NavDropdown className="px-3 px-md-0 text-nowrap has-divider"  title="Services" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link className="px-3  text-nowrap has-divider"  href="#link">
            Contact Us
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
