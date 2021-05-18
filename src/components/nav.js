import React from "react";
import Flip from "react-reveal/Flip";
import { FaRegSun } from "react-icons/fa";
import { Navbar, NavDropdown, Nav } from "react-bootstrap";

const nav = () => {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="md"
      className="nav__bg"
      fixed="top"
    >
      <Navbar.Brand href="/" className="d-flex align-items-center">
        <Flip bottom>
          <FaRegSun size={28} className="mr-2" color="#fff" />
          Al's Window Tinting
        </Flip>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Flip bottom>
            <Nav.Link href="/services">Services</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Flip>

          <Flip bottom>
            <NavDropdown title="Galleries" id="basic-nav-dropdown">
              <Flip bottom>
                <NavDropdown.Item href="/auto-gallery">
                  Auto Gallery
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/commercial-residential-gallery">
                  Commericial/Residential Gallery
                </NavDropdown.Item>
              </Flip>
            </NavDropdown>
          </Flip>
        </Nav>
        <Nav className="ml-auto">
          <Flip bottom>
            <Nav.Link href="tel:661-679-8468" style={{ color: "white" }}>
              +1 (661) 679-8468
            </Nav.Link>
          </Flip>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default nav;
