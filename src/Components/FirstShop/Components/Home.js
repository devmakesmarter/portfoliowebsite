import { Container, Row, Col, Carousel,Nav, Button,Navbar,NavDropdown, Card } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import {React, useState, useEffect, useReducer} from 'react';
import "../Components/Product.css";
import {Carouselfunction} from "../Components/Carousel";

// Diese Componente ist die Startseite und beinhaltet ein Carousel. Die Col´s um das Carousel sorgen dafür dass es nicht ein ganzen Screen übernimmt und es nicht überpropotional 
// überhand nimmt. 

export const Home = () => {

  

    
  return (
    <>
    <Container id="containerforhome1452879">
        <Row className="">
            <Col className="col-12 d-flex justify-content-center align-items-center"><h3 className="text-center" >Willkommen bei Erdogan-Robotics</h3></Col>
        </Row>
        <Row>
            <Col className="col-0 col-lg-4"></Col>
            <Col className="col-12 col-lg-4"><Carouselfunction/></Col>
            <Col className="col-0 col-lg-4"></Col>
        </Row>
        <Row>
            <Col className="col-12"></Col>
        </Row>
    </Container>
    </>
  )
}

export default Home;