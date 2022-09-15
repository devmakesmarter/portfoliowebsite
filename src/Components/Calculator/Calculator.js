import {React, useState, useEffect, useReducer} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../Calculator/Calculator.css";
import { Container, Row, Col, Carousel,Nav, Button,Navbar,NavDropdown, Card } from 'react-bootstrap';



export const Calculator = () => {

    const [input, setInput] = useState("");
    const [result, setResult] =useState("0");

   

    const operators = [".", "/","*","-","+"];

   const handleClick = (e) => {
    var tar = e.target.value;

    if( operators.includes(tar) && input==="" && result !="0"){

        setInput((prev) => (prev + tar));
    }

    if(operators.includes(tar) && input===""  ){
        return
    }
    if(operators.includes(tar)&& operators.includes(input.slice(-1))){
        return
    }

   

    
    else{
    setInput((prev) => (prev + tar))
    }
    }
  
   const handleDelete = () =>{
        setInput((prev)=>(
            prev.slice(0,-1)
        ))
   }

   const handleSum = () => {

        if(input != "" && result != "0"){
            console.log("a")
            

            setResult((prev)=> (
                 eval(prev.toString() + input ) 
            ));
            setInput("");
            }

        else if(!operators.includes(input.slice(-1)) && input != "" ){
            console.log("b")
            setResult(eval(input));
            setInput("");
        }



        
        else{

            alert("Letzte Eingabe darf nicht leer oder Operatorzeichen sein ")
        }
   }

   console.log(typeof(result));

   const handleReset = () => {

        setInput("");
        setResult(0);
   }


  return (
    <>
    <Container id="Calculatro48023532423">
        <Row>
            <Col className="results col-12 text-end bg-warning">{input ? <span>{input}</span> : <span>0</span> } <h1>{result}</h1> </Col>
        </Row>
        
        <div className="bg-dark"> 
        <Row className="bg-dark"> 
            <Col className="col-3  d-flex justify-content-center align-items-center bg-dark" ><Button className="btn btn-dark btn-lg btn-block modifiybutton789461" value={7} onClick={handleClick}  >7</Button></Col>
            <Col className=" col-3 d-flex justify-content-center align-items-center bg-dark " ><Button className="btn btn-dark btn-lg btn-block modifiybutton789461" value={8} onClick={handleClick}  >8</Button></Col>
            <Col className=" col-3 d-flex justify-content-center align-items-center bg-dark " ><Button className="btn btn-dark btn-lg btn-block modifiybutton789461" value={9} onClick={handleClick} >9</Button></Col>
            <Col className="col-3 d-flex justify-content-center align-items-center bg-dark  text-white" ><Button className="btn btn-dark btn-lg btn-block modifiybutton789461"  onClick={handleDelete} >Del</Button></Col>
                
               
           
        </Row>
        <Row className="bg-dark"  > 
            <Col className="col-3  d-flex justify-content-center align-items-center bg-dark" ><Button className="btn btn-dark btn-lg btn-block modifiybutton789461" value={4} onClick={handleClick} >4</Button></Col>
            <Col className=" col-3 d-flex justify-content-center align-items-center bg-dark " ><Button className="btn btn-dark btn-lg btn-block modifiybutton789461" value={5} onClick={handleClick}  >5</Button></Col>
            <Col className=" col-3 d-flex justify-content-center align-items-center bg-dark " ><Button className="btn btn-dark btn-lg btn-block modifiybutton789461" value={6} onClick={handleClick} >6</Button></Col>
            <Col className="col-3 d-flex justify-content-center align-items-center bg-dark  text-white" ><Button className="btn btn-dark btn-lg btn-block modifiybutton789461"  onClick={handleReset} >AC</Button></Col>
        </Row>
        <Row className="bg-dark"  > 
            <Col className="col-3  d-flex justify-content-center align-items-center bg-dark" ><Button className="btn btn-dark btn-lg btn-block modifiybutton789461" value={1} onClick={handleClick} >1</Button></Col>
            <Col className=" col-3 d-flex justify-content-center align-items-center bg-dark " ><Button className="btn btn-dark btn-lg btn-block modifiybutton789461" value={2} onClick={handleClick} >2</Button></Col>
            <Col className=" col-3 d-flex justify-content-center align-items-center bg-dark " ><Button className="btn btn-dark btn-lg btn-block modifiybutton789461" value={3} onClick={handleClick} >3</Button></Col>
            <Col className=" col-3 bg-secondary " >
                <Row className="bg-dark"  >
                <Col className="col-6 d-flex justify-content-center align-items-center bg-dark  text-white" ><Button className="btn btn-dark btn-lg btn-block modifiybutton789461" value="/" onClick={handleClick} >/</Button></Col>
                 <Col className="col-6 d-flex justify-content-center align-items-center bg-dark text-white " ><Button className="btn btn-dark btn-lg btn-block modifiybutton789461" value="*" onClick={handleClick} >*</Button></Col>
                </Row>
            </Col>
        </Row>
        <Row className="bg-dark"     > 
            <Col className="col-3  d-flex justify-content-center align-items-center bg-dark" ><Button className="btn btn-dark btn-lg btn-block modifiybutton789461" value={0}  >0</Button></Col>
            <Col className=" col-3 d-flex justify-content-center align-items-center bg-dark " ><Button className="btn btn-dark btn-lg btn-block modifiybutton789461" onClick={handleClick} value="." >.</Button></Col>
            <Col className=" col-3 d-flex justify-content-center align-items-center bg-dark " ><Button className="btn btn-dark btn-lg btn-block modifiybutton789461" onClick={handleSum}  >=</Button></Col>
            <Col className=" col-3 bg-dark" >
                <Row className="bg-dark" >
                <Col className="col-6 d-flex justify-content-center align-items-center bg-dark  text-white" ><Button className="btn btn-dark btn-lg btn-block modifiybutton789461" onClick={handleClick} value="+">+</Button></Col>
                 <Col className="col-6 d-flex justify-content-center align-items-center bg-dark text-white " ><Button className="btn btn-dark btn-lg btn-block modifiybutton789461" onClick={handleClick} value="-">-</Button></Col>
                </Row>
            </Col>
        </Row>
        </div>



    </Container>
      
    </>
  )
}
