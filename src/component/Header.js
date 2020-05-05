import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="">Quality Survey Time</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Link to="/signin">
            <Nav.Link href="/">Sign In</Nav.Link>
          </Link>

          <Link to="/">
            <Nav.Link href="/">Make Survey</Nav.Link>
          </Link>
        </Nav>
        <Nav>
          <Link to="/signin">
            <Nav.Link href="/">Login</Nav.Link>
          </Link>
          <Link to="/signin">
            <Nav.Link href="/signup">Sign Up</Nav.Link>
          </Link>
          <Link to="/signout">
            <Nav.Link href="/signout">Sign Out</Nav.Link>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
