import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Aboutmewithbootsrap.css";
import { Container, Row, Col, Carousel,Nav, Button,Navbar,NavDropdown, Card } from 'react-bootstrap';
import foto from "../Uebermich/Pictures/uebermich.jpg";
import pictureone from "../Popup/pexels-lilartsy-1194775.jpg";
import picturetwo from "../Firststepwithbootstrap/pexels-fleur-van-deijck-12857746.jpg";


export  const Aboutmewithbootsrap = () => {
 
    return (
   
   <>

        <Container id="aboutmewithbootstrap89465648">
            <Row>
            <Carousel >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={foto}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={pictureone}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={picturetwo}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    
            </Row>
            <Row>
            <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={foto}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={pictureone}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={picturetwo}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

            </Row>

        </Container>



      

    </>
  )
}
