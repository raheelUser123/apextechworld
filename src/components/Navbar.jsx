import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const CustomNavbar = () => {
  return (
    <Navbar  expand="lg">
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav className="" style={{ maxHeight: '100px' }} navbarScroll>
          <Nav.Link href="#" active>Home</Nav.Link>
          <Nav.Link href="#">About Us</Nav.Link>
          <NavDropdown title="Services" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#">Marketing Services</NavDropdown.Item>
            <NavDropdown.Item href="#">Web Services</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#">Logo Services</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#" disabled>Contact Us</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
