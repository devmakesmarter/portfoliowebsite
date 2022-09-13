import {React, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Firsstepwithbootstrap.css";
import { Container, Row, Col, Carousel,Nav, Button,Navbar,NavDropdown, Card } from 'react-bootstrap';
import { Quizapp } from '../Quizapp/Quiz';
import {ToDo} from "../ToDo/ToDo";
import pictureone from "../Popup/pexels-lilartsy-1194775.jpg";
import picturetwo from "./pexels-fleur-van-deijck-12857746.jpg";


export const Firsstepwithbootstrap = () => {

const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };




 const desgin = {height: "200px"};


  return (
    <>
      <Container id="caruselspeziale" className="container" > 
             <Row  >
           <form className="test12345" >
            <Col className="col-12 col-md-4 "><input className="myinput"  type="text"  placeholder="Bitte tippen Sie hier" maxLength="50" required ></input></Col>
            <Col className="col-12 col-md-4"><button className="" type="submit" > dsfs sf sf  sfd  sdsad asdasd asd  </button></Col>
            <Col className="col-12 col-md-4"><input className="myinput"  type="text"  placeholder="Bitte tippen Sie hier" maxLength="50" required ></input></Col>
            </form>
            </Row >

        <form className="row">
            <Col className="col-12 col-md-4"><input className="myinput"  type="text"  placeholder="Bitte tippen Sie hier" maxLength="50" required ></input></Col>
            <Col className="col-12 col-md-4"><button className="" type="submit" >E</button></Col>
            <Col className="col-12 col-md-4"><input className="myinput"  type="text"  placeholder="Bitte tippen Sie hier" maxLength="50" required ></input></Col>
        </form>
        

        <Row >
        <Col className="col-3 col-md-3"> <img className="img-fluid  "  alt="" src={pictureone}/> </Col>
        <Col className="col-6 col-md-6 ">
          <Row><Col className="font-weight-bold">Meine Fähigkeiten</Col></Row>
          <Row><Col className="col-6"> <img className="img-fluid" height="20"  alt="" src={pictureone}/> </Col></Row>

        </Col>
      
        </Row>

      

        <Row>
          <Container className=""> 
        <Navbar className="full navbar-expand-xl" bg="light" expand="lg">
      <Container className="spezial">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Brand href="#home" className="ms-auto " ></Navbar.Brand>
        
        <Navbar.Collapse id="basic-navbar-nav" className="ms-auto ">
          <Nav className="ms-auto ">
            <Nav.Link  href="/">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <Nav.Link href="#link">Call</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Container>

        </Row>

        <Row>
          <Col className="col">      <Card >
      <Card.Img variant="top" src={pictureone} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>  </Col>
          <Col className="col">      <Card >
      <Card.Img variant="top" src={pictureone} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>  </Col>
          <Col className="col">      <Card >
            <Card.Header className="text-center">fadsfsdf</Card.Header>
            
      <Card.Img variant="top" src={pictureone} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>  </Col>
     


        </Row>
      </Container>
    </>
  )
}

export default Firsstepwithbootstrap;
