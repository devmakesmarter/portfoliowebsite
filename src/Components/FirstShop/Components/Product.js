
import { Container, Row, Col, Carousel,Nav, Button,Navbar,NavDropdown, Card } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import {React, useState, useEffect, useReducer} from 'react';
import "../Components/Product.css";
import { NavLink } from 'react-router-dom';

// Dies ist die Grundkomponente. Hier wird auch das Layout der einzelnen Komponenten bestimmt. 
// Aus dem Datenarray werden die einzelnen Props runtergeschickt und angezeigt.

export const Product = ({img, description, price,handlePrice,id, handleNavigation}) => {

    
   
    
  return (
    <>
   
    <Container id="containerforproduct5498131"> 
        <Row>
        <LinkContainer to="/productdetails">
          <Nav.Link to="" className="spezialclassforthisnavlinks" > 
            <Col><img  onClick={handleNavigation} className="img-fluid w-100" id={id}  src={img}/> </Col>
            </Nav.Link>
            </LinkContainer>
        </Row>
        <Row className="spezialformobile">
            <Col className="d-flex justify-content-center align-items-center"><p className="nomargin text-center">{description}</p></Col>
        </Row>
        <Row>
            <Col className="col-12"><Button onClick={handlePrice} id={id}  className="btn btn-dark btn-lg btn-block w-100 text-light">{price + " €"}</Button></Col>
        </Row>
    </Container>
      
    </>
  )
}

export default Product;