import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand as={Link} to="/">Quality Survey Time</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <NavItem>
             <Nav.Link as={Link} to="/makesurvey" > Make Survey </Nav.Link>
          </NavItem>
          <Nav.Link as={Link} to="/takesurvey">
           Take Survey
          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link  as={Link} to="/signin">
            Login
          </Nav.Link>
          <Nav.Link as={Link} to="/signup">
            Sign Up
          </Nav.Link>
          <Nav.Link as={Link} to="/signout">
            Sign Out
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
