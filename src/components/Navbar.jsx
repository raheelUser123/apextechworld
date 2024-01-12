import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CustomNavbar = () => {
  return (
    <Navbar  expand="lg">
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav className="" style={{ maxHeight: '100px' }} navbarScroll>
          <Link class="nav-link " to="/" active>Home</Link>
          <Link class="nav-link " to="/aboutus">About Us</Link>
          <Link class="nav-link " to="/services">Services</Link>
          <Link class="nav-link " to="/careers">Careers</Link>
          {/* <NavDropdown title="Services" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#">Marketing Services</NavDropdown.Item>
            <NavDropdown.Item href="#">Web Services</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#">Logo Services</NavDropdown.Item>
          </NavDropdown> */}
          <Link class="nav-link " to="/contactus" disabled>Contact Us</Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
