import React from 'react'
 import Nav from "react-bootstrap/Nav";
 import Navbar from "react-bootstrap/Navbar";
 import NavDropdown from "react-bootstrap/NavDropdown";
  import Container from "react-bootstrap/Container";



function NavigationBar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Recipes</Nav.Link>
            {/* <Nav.Link href="#pricing">Pro Verison+</Nav.Link> */}
     
          </Nav>
          <Nav>
            <Nav.Link><a></a></Nav.Link>
            <Nav.Link href="#deets">Login</Nav.Link>
            <Nav.Link eventKey={2}>
              Sign-up
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
