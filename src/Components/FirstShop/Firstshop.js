import 'bootstrap/dist/css/bootstrap.min.css';
import "../FirstShop/FirstShop.css";
import {React, useState, useEffect, useReducer} from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink, Link, withRouter,Redirect } from "react-router-dom";
import { Container, Row, Col, Carousel,Nav, Button,Navbar,NavDropdown, Card } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Header } from './Components/Header';

import {Productoverviewoffice} from "../FirstShop/Components/Productoverviewoffice";
import {Productoverviewhealth} from "../FirstShop/Components/Productoverviewhealth";
import {Productoverviewtech} from "../FirstShop/Components/Productoverviewtech";
import {Home} from "../FirstShop/Components/Home";
import { Healthdata } from './Components/Data/Health/Healthdata';
import { Officedata } from './Components/Data/Office/Officedata';
import {Techdata} from "./Components/Data/Tech/Techdata";
import {Shoppingcartoverview} from "../FirstShop/Components/Shoppingcartoverview";


// Der Shop ist mit einer Componentenstruktur aufgebaut. Firstshop ist das Parentelement. 
export const Firstshop = () => {

  // In dieser Variable werden die Einkäufe gespeichert. Es wird immer das komplette Object, also mit Beschreibung und Preis etc. gespeichert. 
  // Das ist wichtig, weil darüber später gemappt wird
  const [shoppingcart, setShoppingcart] = useState([]);
  
  // Jeder Button in Product.js einen einzelne Id. Den Key bekommt er von dem jeweiligen Parent {Shoppingcartoverview etc.}
  // Anhand diese ID wird gemacht und der Shoppingcart zugeroutet.
  const handlePrice = (e) => {
    if(e.target.id==="0"){
     setShoppingcart((prev) => ([...prev,{description: Officedata[0]?.description,
     img: Officedata[0]?.img,
     price: Officedata[0]?.price, time: Date.now()}]))
    }
    if(e.target.id ==="1"){
     setShoppingcart((prev) => ([...prev,{description: Officedata[1]?.description,
     img: Officedata[1]?.img,
     price: Officedata[1]?.price, time: Date.now()}]))
    }
    if(e.target.id==="2"){
     setShoppingcart((prev) => ([...prev,{description: Officedata[2]?.description,
     img: Officedata[2]?.img,
     price: Officedata[2]?.price, time: Date.now()}]))
    }
    if(e.target.id==="3"){
     setShoppingcart((prev) => ([...prev,{description: Techdata[0]?.description,
     img: Techdata[0]?.img,
     price: Techdata[0]?.price, time: Date.now()}]))
    }
    if(e.target.id==="4"){
     setShoppingcart((prev) => ([...prev,{description: Techdata[1]?.description,
     img: Techdata[1]?.img,
     price: Techdata[1]?.price, time: Date.now()}]))
    }
    if(e.target.id==="5"){
     setShoppingcart((prev) => ([...prev,{description: Techdata[2]?.description,
     img: Techdata[2]?.img,
     price: Techdata[2]?.price, time: Date.now()}]))
    }
    if(e.target.id==="6"){
     setShoppingcart((prev) => ([...prev,{description: Healthdata[0]?.description,
     img: Healthdata[0]?.img,
     price: Healthdata[0]?.price, time: Date.now()}]))
    }
    if(e.target.id==="7"){
     setShoppingcart((prev) => ([...prev,{description: Healthdata[1]?.description,
     img: Healthdata[1]?.img,
     price: Healthdata[1]?.price, time: Date.now()}]))
    }
    if(e.target.id==="8"){
     setShoppingcart((prev) => ([...prev,{description: Healthdata[2]?.description,
     img: Healthdata[2]?.img,
     price: Healthdata[2]?.price, time: Date.now()}]))
    }
 }
 // Dieser Funtion wird an den Button des jeweiligen Einkaufs weitergeleitet. Wenn ein Artikel gekauft wird kriegt er eine 
 // einzigartige Time-Id.  Anhand dieser Time-Id wird gefiltert. 
 const handleDelete = (e) => {
    const id = e.target.id;
    const filter = shoppingcart.filter(prev => prev.time != id);
    setShoppingcart(filter); 
 }

  return (
    <>
    {/* Die jeweils notwendigen Daten werden über die Props nach unten gereicht. Erst an die Overviews und dann an die einzelnen Product.js   */}
     <Container id="Firstshop483481374">
        <Row>
            <Col className="col-12"><Header/></Col>
        </Row>
        <Route  exact path="/"> 
            <Redirect to="/shophome" ></Redirect>
        </Route>
        <Route   path="/shophome"> 
            <Home/>
        </Route>
        <Route  path="/shoppingoverview"> 
            <Shoppingcartoverview shoppingcart={shoppingcart} handleDelete={handleDelete} />
        </Route>
        <Route path="/robotoffice"> 
            <Productoverviewoffice handlePrice={handlePrice} shoppingcart={shoppingcart} imgone={Officedata[0]?.img} imgtwo={Officedata[1]?.img} imgthree={Officedata[2].img} descriptionone={Officedata[0].description} 
             descriptiontwo={Officedata[1].description} descriptionthree={Officedata[2].description} priceone={Officedata[0].price} pricetwo={Officedata[1].price} pricethree={Officedata[2].price} />
        </Route>
        <Route  path="/robothealth"> 
             <Productoverviewhealth handlePrice={handlePrice} shoppingcart={shoppingcart} imgone={Healthdata[0]?.img} imgtwo={Healthdata[1]?.img} imgthree={Healthdata[2].img} descriptionone={Healthdata[0].description} 
              descriptiontwo={Healthdata[1].description} descriptionthree={Healthdata[2].description} priceone={Healthdata[0].price} pricetwo={Healthdata[1].price} pricethree={Healthdata[2].price} />
        </Route>
        <Route  path="/robottech"> 
             <Productoverviewtech handlePrice={handlePrice} shoppingcart={shoppingcart} imgone={Techdata[0]?.img} imgtwo={Techdata[1]?.img} imgthree={Techdata[2].img} descriptionone={Techdata[0].description} 
              descriptiontwo={Techdata[1].description} descriptionthree={Techdata[2].description} priceone={Techdata[0].price} pricetwo={Techdata[1].price} pricethree={Techdata[2].price} />
        </Route>
     </Container> 
    </>
  )
}

export default Firstshop;
