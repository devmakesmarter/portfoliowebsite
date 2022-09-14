import 'bootstrap/dist/css/bootstrap.min.css';
import "./Navbarwithboots.css";
import { Container, Row, Col, Carousel,Nav, Button,Navbar,NavDropdown, Card } from 'react-bootstrap';
import React from 'react'

export  const Navbarwithboots =  () => {

  return (
    <>
         <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Brand href="#home">Ismail Erdogan</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">Startseite</Nav.Link>
            <Nav.Link href="#Projektbeginn">Projekte</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

      
    </>
  )
}
