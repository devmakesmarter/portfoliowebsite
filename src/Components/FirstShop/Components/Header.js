import { Container, Row, Col, Carousel,Nav, Button,Navbar,NavDropdown, Card } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import React from 'react';
import "../Components/Header.css";

export const Header = () => {

  // In den Grundzügen handelt es sich um einen standard Nav Element von Bootstrap 
  // Folgende Modifikationen wurden vorgenommen. Die Backgroundfarbe wurde geändert auf Gelb
  // dieses Nav hat zwei CSS Klassen, eine davon ist active. immer wenn ein Element angeklickt ist und der Pfad eingeschlagen wird es active 
  // die Farbe habe über eine Header.css auf zwingend schwarz umgeschrieben. Somit ist die Route die angewählt ist auch schwarz. default Key habe ich entfernt.
  return (
    <>
    <Container id="containerfortheheader846481864"> 
      <Col> 
        <Nav  fill variant="tabs" >
          <Nav.Item >
            <LinkContainer  to="/shophome" eventKey="link-1">
              <Nav.Link className="bg-warning link-light" >Home</Nav.Link>
            </LinkContainer>
          </Nav.Item> 
          <Nav.Item>
            <LinkContainer  to="/robotoffice" eventKey="link-2">
              <Nav.Link className="bg-warning link-light" >Office</Nav.Link>
            </LinkContainer>
          </Nav.Item> 
          <Nav.Item>
            <LinkContainer to="robottech">
              <Nav.Link className="bg-warning link-light" eventKey="link-3">Tech</Nav.Link>
            </LinkContainer>
          </Nav.Item>
          <Nav.Item>
            <LinkContainer to="/robothealth">
              <Nav.Link className="bg-warning link-light"  eventKey="link-4" >Health</Nav.Link>
            </LinkContainer>
          </Nav.Item>
        </Nav>
      </Col>
    </Container>
    
    
      
    </>
  )
}
