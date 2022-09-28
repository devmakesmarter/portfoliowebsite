
import { Container, Row, Col, Carousel,Nav, Button,Navbar,NavDropdown, Card } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import {React, useState, useEffect, useReducer} from 'react';
import "../Components/Productdetails.css";
import musterimg from "../Components/Media/health/health one 640x853.jpg";


export const Productdetails = ({productdetailsimages}) => {

    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const imgone = productdetailsimages?.imgone;
  const imgtwo = productdetailsimages?.imgtwo;
  const imgthree = productdetailsimages?.imgthree;
  const description = productdetailsimages?.description;
  const route = productdetailsimages?.route;
  
   
    
  return (
    <>
   
    <Container id="containerforproductdetails874561897">
        
        <Row>
            <Col className="col-0 col-lg-4"></Col>
            <Col className="col-12 col-lg-4"><Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imgone}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imgtwo}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imgthree}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3></h3>
          <p>
            
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel></Col>
            <Col className="col-0 col-lg-4"></Col>
        </Row>
        <Row>
            <Col className="col-0 col-lg-4"></Col>
            <Col className="col-12 col-lg-4" > <h6 className="text-center">{description}</h6></Col>
            <Col className="col-0 col-lg-4"></Col>
        </Row>
        <Row>
        <LinkContainer to={typeof(route) == "string"  ? route : "/"}>
          <Nav.Link><Row>  <Col> 
            <Button className=" btn btn-dark btn-block w-100 ">Zurück</Button>
            </Col></Row>
            </Nav.Link>
          </LinkContainer>
        </Row>

    </Container>
      
    </>
  )
}

export default Productdetails;