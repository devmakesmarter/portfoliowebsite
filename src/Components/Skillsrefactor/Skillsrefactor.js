import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Skillsrefactor.css";
import toolbox from "../Skills/Picutres/tools 1280 960.jpg";
import { Container, Row, Col, Carousel,Nav, Button,Navbar,NavDropdown, Card } from 'react-bootstrap';



export const Skillsrefactor = () => {
  return (
    <>
    <Container id="skillsrefacot457684" className="border border-5 p-2 border-light" > 
        <Row className="mb-2" >
            <Col className="col-3"><img src={toolbox} className="img-fluid" alt="Tools"></img></Col>
            <Col className="col-9  adjust789465">
                <Row>
                    <Col ><h4>Meine Fähigkeiten</h4></Col>
                </Row>
             </Col>
        </Row>

        <Row className="bg-light adjustrow" > 
        <Col className="adjust789465 col-3">Javascript</Col>
        <Col className="adjust789465 col-3"  >React.js</Col>
        <Col  className="adjust789465 col-3 "   >Bootstrap</Col>
        <Col className="adjust789465 col-3 "  >Html</Col>
        <Col className="adjust789465 col-3"  >GIT</Col>
        <Col className="adjust789465 col-3 " >CSS</Col>
        <Col className="adjust789465 col-3" >SCRUM</Col>
        <Col className="adjust789465 col-3" >Office</Col>
        

        </Row>
        </Container>
    </>
  )
}
