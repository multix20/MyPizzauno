import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const NavigationBar = () => {
  const total = 25000;
  const token = false;

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#">🍕 Pizzería Mamma Mía</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#">🍕 Home</Nav.Link>
          {token ? (
            <>
              <Nav.Link href="#">🔓 Profile</Nav.Link>
              <Nav.Link href="#">🔒 Logout</Nav.Link>
            </>
          ) : (
            <>
              <Nav.Link href="#">🔐 Login</Nav.Link>
              <Nav.Link href="#">🔐 Register</Nav.Link>
            </>
          )}
          <Nav.Link href="#">🛒 Total: ${total.toLocaleString()}</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
