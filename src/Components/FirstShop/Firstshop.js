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
import {Productdetails} from "../FirstShop/Components/Productdetails";

// Der Shop ist mit einer Componentenstruktur aufgebaut. Firstshop ist das Parentelement. 
export const Firstshop = () => {

  // In dieser Variable werden die Einkäufe gespeichert. Es wird immer das komplette Object, also mit Beschreibung und Preis etc. gespeichert. 
  // Das ist wichtig, weil darüber später gemappt wird
  const [shoppingcart, setShoppingcart] = useState([]);

  const [productdetailsimages, setProductdetailsimages]= useState({imgone: Officedata[0]?.img,
    imgtwo: Officedata[0]?.imgtwo,
    imgthree: Officedata[0]?.imgthree,
    description: Officedata[0]?.descriptionlong,
    route: "/robotoffice" });
  
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

 // Ist dafür zuständig, dass auf die einzelnen Productdetails weitergeleitet wird 

 const handleNavigation = (e) => {

  if(e.target.id ==="0"){
    setProductdetailsimages({imgone: Officedata[0]?.img,
                             imgtwo: Officedata[0]?.imgtwo,
                             imgthree: Officedata[0]?.imgthree,
                             description: Officedata[0]?.descriptionlong,
                             route: "/robotoffice" })
   }

  if(e.target.id ==="1"){
    setProductdetailsimages({imgone: Officedata[1]?.img,
                             imgtwo: Officedata[1]?.imgtwo,
                             imgthree: Officedata[1]?.imgthree,
                             description: Officedata[1]?.descriptionlong,
                             route: "/robotoffice" })
   }
   if(e.target.id ==="2"){
    setProductdetailsimages({imgone: Officedata[2]?.img,
                             imgtwo: Officedata[2]?.imgtwo,
                             imgthree: Officedata[2]?.imgthree,
                             description: Officedata[2]?.descriptionlong,
                             route: "/robotoffice"})
   }
   if(e.target.id ==="3"){
    setProductdetailsimages({imgone: Techdata[0]?.img,
                             imgtwo: Techdata[0]?.imgtwo,
                             imgthree: Techdata[0]?.imgthree,
                             description: Techdata[0]?.descriptionlong,
                             route: "/robottech"})
   }
   if(e.target.id ==="4"){
    setProductdetailsimages({imgone: Techdata[1]?.img,
                             imgtwo: Techdata[1]?.imgtwo,
                             imgthree: Techdata[1]?.imgthree,
                             description: Techdata[1]?.descriptionlong,
                             route: "/robottech"})
   }
   if(e.target.id ==="5"){
    setProductdetailsimages({imgone: Techdata[2]?.img,
                             imgtwo: Techdata[2]?.imgtwo,
                             imgthree: Techdata[2]?.imgthree,
                             description: Techdata[2]?.descriptionlong,
                             route: "/robottech"})
   }
   if(e.target.id ==="6"){
    setProductdetailsimages({imgone: Healthdata[0]?.img,
                             imgtwo: Healthdata[0]?.imgtwo,
                             imgthree: Healthdata[0]?.imgthree,
                             description: Healthdata[0]?.descriptionlong,
                             route: "/robothealth"})
   }
   if(e.target.id ==="7"){
    setProductdetailsimages({imgone: Healthdata[1]?.img,
                             imgtwo: Healthdata[1]?.imgtwo,
                             imgthree: Healthdata[1]?.imgthree,
                             description: Healthdata[1]?.descriptionlong,
                             route: "/robothealth"})
   }
   if(e.target.id ==="8"){
    setProductdetailsimages({imgone: Healthdata[2]?.img,
                             imgtwo: Healthdata[2]?.imgtwo,
                             imgthree: Healthdata[2]?.imgthree,
                             description: Healthdata[2]?.descriptionlong,
                             route: "/robothealth"})
   }



}
 



  return (
    <>
    {/* Die jeweils notwendigen Daten werden über die Props nach unten gereicht. Erst an die Overviews und dann an die einzelnen Product.js   */}
     <Container id="Firstshop483481374">
        <Row>
            <Col className="col-12"><Header/></Col>
        </Row>
        <Switch> 
        <Route  exact path="/"> 
        <Home/>            {/* <Redirect to="/shophome" ></Redirect> */}
        </Route>
        <Route path="/productdetails">
        <Productdetails productdetailsimages={productdetailsimages} />
        </Route>
        <Route   path="/shophome"> {/* Das zweite mal ist die Komponente, damit wenn es im Nav angeglickt ist auch schwarz ist */}
            <Home/>
        </Route>
        <Route  path="/shoppingoverview"> 
            <Shoppingcartoverview shoppingcart={shoppingcart} handleDelete={handleDelete} />
        </Route>
        <Route path="/robotoffice"> 
            <Productoverviewoffice handleNavigation={handleNavigation} handlePrice={handlePrice} shoppingcart={shoppingcart} imgone={Officedata[0]?.img} imgtwo={Officedata[1]?.img} imgthree={Officedata[2].img} descriptionone={Officedata[0].description} 
             descriptiontwo={Officedata[1].description} descriptionthree={Officedata[2].description} priceone={Officedata[0].price} pricetwo={Officedata[1].price} pricethree={Officedata[2].price} />
        </Route>
        <Route  path="/robothealth"> 
             <Productoverviewhealth handleNavigation={handleNavigation} handlePrice={handlePrice} shoppingcart={shoppingcart} imgone={Healthdata[0]?.img} imgtwo={Healthdata[1]?.img} imgthree={Healthdata[2].img} descriptionone={Healthdata[0].description} 
              descriptiontwo={Healthdata[1].description} descriptionthree={Healthdata[2].description} priceone={Healthdata[0].price} pricetwo={Healthdata[1].price} pricethree={Healthdata[2].price} />
        </Route>
        <Route  path="/robottech"> 
             <Productoverviewtech handleNavigation={handleNavigation} handlePrice={handlePrice} shoppingcart={shoppingcart} imgone={Techdata[0]?.img} imgtwo={Techdata[1]?.img} imgthree={Techdata[2].img} descriptionone={Techdata[0].description} 
              descriptiontwo={Techdata[1].description} descriptionthree={Techdata[2].description} priceone={Techdata[0].price} pricetwo={Techdata[1].price} pricethree={Techdata[2].price} />
        </Route>
        </Switch>
     </Container> 
    </>
  )
}

export default Firstshop;
