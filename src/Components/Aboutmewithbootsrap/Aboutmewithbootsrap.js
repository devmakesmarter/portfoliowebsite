import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Aboutmewithbootsrap.css";
import { Container, Row, Col, Carousel,Nav, Button,Navbar,NavDropdown, Card } from 'react-bootstrap';
import foto from "../Uebermich/Pictures/uebermich.jpg";
import pictureone from "../Popup/pexels-lilartsy-1194775.jpg";
import picturetwo from "../Firststepwithbootstrap/pexels-fleur-van-deijck-12857746.jpg";
import { BrowserRouter as Router, Route, Switch, NavLink, Link } from "react-router-dom";
import {Quizapp} from "../Quizapp/Quiz";
import {ToDo} from "../../Components/ToDo/ToDo";
import { Calculator } from '../Calculator/Calculator';


export  const Aboutmewithbootsrap = () => {
 
    return (
   
   <>
       
        <Container id="aboutmewithbootstrap89465648">
        <Row>
           <Col className="col-6"><Link to="/quiz">Quiz </Link> </Col><Col className="col-6"  ><Link to="/bonson">Taschedsffasdnrechner</Link></Col>
           
        </Row>
        <Row>
          <Route path="/quiz">
            <Col className=" col-12 d-flex justify-content-center align-items-center"> <Quizapp/></Col>
          </Route>
          <Route path="/bonson">  
            <Col className=" col d-flex justify-content-center align-items-center" ><Calculator/> </Col>
            <Col className=" col d-flex justify-content-center align-items-center" ><Calculator/> </Col>
          </Route>
        </Row>
         

        </Container>

      

      

    </>
  )
}
