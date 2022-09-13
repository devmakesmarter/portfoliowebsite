import {React, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Next.css";
import { Container, Row, Col, Carousel  } from 'react-bootstrap';
import { Quizapp } from '../Quizapp/Quiz';
import {ToDo} from "../ToDo/ToDo";
import pictureone from "../Popup/pexels-lilartsy-1194775.jpg";


export  const Next =  () => {

  return (
    <div>

        <Container id="convonbtzsv" className="container" >
            <Row className="row">
            <Carousel  >
      <Carousel.Item >
        <img
          className="d-block w-100"
          src={pictureone}
          alt="First slide"
        />
    
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
       
        <img
          className="d-block w-100  "
          src={pictureone}
          alt="First slide"
        />
       

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
     
        <img
          className="d-block w-100"
          src={pictureone}
          alt="First slide"
        />
      

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
            </Row>
            <Row>
                <Col className="col-6 d-flex justify-content-center align-items-center " ><p> jdkl sdassad aasdsa dwwewd eqdsghzjzthf  asdas  d faskl f sdklfj </p></Col>
                <Col>bbbbbbbbbbbbbbb sdfsda dsf asdfds afsdfewffsa fweeasfdsfewawc sfsdaf ewf awefas fsa</Col>
                <Col>ccccccccccccccccccc sfsad wefg trhztjztbd ffsdvsfe vfgrfecvfe c</Col>
                <Col>dddddddddddddd</Col>
               </Row>

               


        </Container>
      



    </div>
  )
}
