import 'bootstrap/dist/css/bootstrap.min.css';
import "../FirstShop/FirstShop.css";
import { BrowserRouter as Router, Route, Switch, NavLink, Link, withRouter } from "react-router-dom";
import { Container, Row, Col, Carousel,Nav, Button,Navbar,NavDropdown, Card } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Header } from './Components/Header';



export const Firstshop = () => {


  return (
    <>
     <Container>
        <Row>
            <Col className="col-12 d-flex justify-content-center align-items-center bn-danger" ><Header/></Col>
        </Row>
        <Row>
            <Col className="col-12 d-flex justify-content-center align-items-center bn-danger" ></Col>
        </Row>
        
        
        
    </Container> 
    </>
  )
}

export default Firstshop;
