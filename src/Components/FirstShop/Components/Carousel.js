import { Container, Row, Col, Carousel,Nav, Button,Navbar,NavDropdown, Card } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import {React, useState,} from 'react';
import "../Components/Carousel.css";
import imgone from "../Components/Media/health/health two 640x853.jpg";
import imgtwo from "../Components/Media/office/Rob1 640x853.jpg";
import imgthree from "../Components/Media/health/health one 640x853.jpg";

// Klassiches Bootstrap Carousel mit drei Produktbildern 
export const Carouselfunction = () => {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  }
  
  return (
    <>
    <Carousel id="carouselforrobotshop595135" variant="" activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imgone}
          alt="First slide"
        />
        <Carousel.Caption>
        
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
      <Carousel.Item >
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
    </Carousel>
    </>
  )
}

export default Carouselfunction;