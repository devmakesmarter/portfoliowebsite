import { Container, Row, Col, Carousel,Nav, Button,Navbar,NavDropdown, Card } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import {React, useState, useEffect, useReducer} from 'react';
import "../Components/Product.css";
import {Shoppingcart} from "../Components/Shoppingcart";

import {Product} from "./Product";

export const Productoverviewtech = ({imgone, imgtwo, imgthree, descriptionone,descriptiontwo,descriptionthree, priceone,pricetwo,pricethree,shoppingcart,handlePrice}) => {
 // Entsprechend den Reitern der NavListe gibt es diese Productoverview. Gleichzeitg dienen dieser Componenten auch zum Routen. Es wird hier in geroutet und 
 // von hier werden alle Produkte der Kategorie gelistet
  
  return (
    <>
   
        <Row >
            <Col className="col-6 col-md-4"><Product id="3" handlePrice={handlePrice} img={imgone} description={descriptionone} price={priceone}/></Col>
            <Col className="col-6 col-md-4"><Product id="4" handlePrice={handlePrice} img={imgtwo} description={descriptiontwo} price={pricetwo}/></Col>
            <Col className="col-6 col-md-4"><Product id="5" handlePrice={handlePrice} img={imgthree} description={descriptionthree} price={pricethree}/></Col>
        </Row>
        <Shoppingcart shoppingcart={shoppingcart}/>
        



    
    </>
  )
}

export default Productoverviewtech;