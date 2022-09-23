import 'bootstrap/dist/css/bootstrap.min.css';

import {React, useState, useEffect, useReducer} from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink, Link, withRouter } from "react-router-dom";
import { Container, Row, Col, Carousel,Nav, Button,Navbar,NavDropdown, Card } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Header } from '../Components/Header';
import {Shoppingcart} from "../Components/Shoppingcart";

export const Shoppingcartoverview = ({shoppingcart, handleDelete}) => {

    // Dieser Funktion mappt alle gekauften Artikel um Sie anschließend aufzulisten
    const overview =  shoppingcart.map((prev,key) => {             
        return  <Row key={key}> <Col className="col-2"  ><img onClick={handleDelete} id={prev.time} className="d-block w-100" src={prev.img}></img></Col><Col className="col-6 d-flex justify-content-center align-items-center "><h3 className=""> Anzahl : 1</h3></Col><Col className="col-2 d-flex justify-content-center align-items-center " ><p className="" >{prev.price + "€"}</p></Col><Col className="col-2 d-flex justify-content-center align-items-center " ><Button className="btn-dark" onClick={handleDelete} id={prev.time}>X</Button></Col></Row>
    })
    
    // Dies ist der Text, wenn jemand zu den Artikeln kommt und noch nichts im Warenkorb hat 
    const noArticles = <Row><Col className="col-12 d-flex justify-content-center align-items-center"> <p className="text-center" >Leider haben Sie noch keine Artikel in Ihrem Warenkorb</p> </Col></Row>

    // Dies ist ein Alert falls jemand zum Bezahlvorgang will 
    const handleCheckout = () => {
        alert("Aktuell ist ein Bezahlvorgang nicht möglich.")
    }

    return (
      <>
        <Container>
            <Row>
               <Col className="col-12 justify-content-center align-items-center"><h1 className="text-center" >Warenkorb</h1></Col>
            </Row>
            {shoppingcart.length > 0 ? overview : noArticles}
            <Shoppingcart shoppingcart={shoppingcart}  />
            <Container > 
               <Row>
                 <LinkContainer to="/shoppingoverview"> 
                    <Col className="font-weight-bold"><Button  onClick={handleCheckout}  className="btn btn-success btn-lg btn-block w-100  ">Zur Kasse</Button> </Col>
                 </LinkContainer>
               </Row>
            </Container>
        </Container> 
      </>
  )
  }
  
  export default Shoppingcartoverview;