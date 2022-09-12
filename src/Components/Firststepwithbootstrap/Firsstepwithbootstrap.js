import {React, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Firsstepwithbootstrap.css";
import { Container, Row, Col, Carousel  } from 'react-bootstrap';
import { Quizapp } from '../Quizapp/Quiz';
import {ToDo} from "../ToDo/ToDo";
import pictureone from "../Popup/pexels-lilartsy-1194775.jpg";



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
           <form >
            <Col className="col-12 col-md-4"><input className="myinput"  type="text"  placeholder="Bitte tippen Sie hier" maxLength="50" required ></input></Col>
            <Col className="col-12 col-md-4"><button className="" type="submit" >E</button></Col>
            <Col className="col-12 col-md-4"><input className="myinput"  type="text"  placeholder="Bitte tippen Sie hier" maxLength="50" required ></input></Col>
            </form>
            </Row >


     

        <form className="row">
            <Col className="col-12 col-md-4"><input className="myinput"  type="text"  placeholder="Bitte tippen Sie hier" maxLength="50" required ></input></Col>
            <Col className="col-12 col-md-4"><button className="" type="submit" >E</button></Col>
            <Col className="col-12 col-md-4"><input className="myinput"  type="text"  placeholder="Bitte tippen Sie hier" maxLength="50" required ></input></Col>
        </form>
        

        <Row  >
       
        </Row>
      </Container>
    </>
  )
}

export default Firsstepwithbootstrap;
