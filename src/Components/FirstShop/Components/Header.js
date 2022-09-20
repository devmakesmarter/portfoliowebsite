import { Container, Row, Col, Carousel,Nav, Button,Navbar,NavDropdown, Card } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import React from 'react';

export const Header = () => {

  return (
    <>

    <Container className>
        
        <Nav  fill variant="tabs" defaultActiveKey="/impressum">
      <Nav.Item>
        <LinkContainer  to="/impressum" eventKey="/impressum">
        <Nav.Link href="/home">Office</Nav.Link>
        </LinkContainer>
      </Nav.Item>
      <Nav.Item>
        <LinkContainer to="">
        <Nav.Link eventKey="link-1">Tech</Nav.Link>
        </LinkContainer>
      </Nav.Item>
      
      <Nav.Item>
      <LinkContainer to=""> 
        <Nav.Link eventKey="disabled" >
          Health
        </Nav.Link>
        </LinkContainer>
      </Nav.Item>
    </Nav>
      

    </Container>
     
      
    </>
  )
}
