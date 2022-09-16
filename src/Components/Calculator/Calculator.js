import {React, useState, useEffect, useReducer} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../Calculator/Calculator.css";
import { Container, Row, Col, Carousel,Nav, Button,Navbar,NavDropdown, Card } from 'react-bootstrap';
import {COLORS} from "../Calculator/Data";


export const Calculator = () => {
  

    const [input, setInput] = useState("");
    const [result, setResult] =useState("0");
    const [colorrow, setColorRow]= useState(COLORS.body.rowblack);
    const [colorhead, setColorHead] = useState(COLORS.head.yellow);
    const [colorcol, setColorCol] = useState(COLORS.body.colblack);
    const [coloroperators, setColorOperators] = useState(COLORS.body.coloperatorsblack);
    const [buttoncol, setButtonCol] = useState(COLORS.body.buttonblack);
    const [colorsettingsbody, setColorSettingsBody] = useState(COLORS.body.colorsettingsbodyblack)

   

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
        if(operators.includes(input.slice(0,1)) && input != "" && result != "0"){
            setResult((prev)=> (
                 eval(prev.toString() + input ) 
            ));
            setInput("");
            }
        
        else if(!operators.includes(input.slice(-1)) && input != "" && result !="0" ){
                alert("Bitte beachten Sie, dass Sie einen Operator einfügen müssen, damit es zur bestehenden Summe addiert wird. Löschen Sie bis zum Anfang mit DEL")
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


   const handleReset = () => {
        setInput("");
        setResult(0);
   }

   const handleHead = ({target}) => {
    const val = target.value;
    if(val === "yellow"){
        setColorHead(COLORS.head.yellow)
    }
    if(val === "darkblue"){
        setColorHead(COLORS.head.darkblue)
    }
    if(val === "white"){
        setColorHead(COLORS.head.white)
    }
    if(val === "green"){
        setColorHead(COLORS.head.green)
    }
    if(val === "red"){
        setColorHead(COLORS.head.red)
    }
    if(val === "darkgrey"){
        setColorHead(COLORS.head.darkgrey)
    }
    
   }

   const handleBody = ({target}) => {
    const val = target.value;
    if(val === "yellow"){
        setColorRow(COLORS.body.rowyellow);
        setColorCol(COLORS.body.colyellow);
        setButtonCol(COLORS.body.buttonyellow);
        setColorOperators(COLORS.body.coloperatorsyellow);
        setColorSettingsBody(COLORS.body.colorsettingsbodyyellow);
    }
    if(val === "darkblue"){
        setColorRow(COLORS.body.rowdarkblue);
        setColorCol(COLORS.body.coldarkblue);
        setButtonCol(COLORS.body.buttondarkblue);
        setColorOperators(COLORS.body.coloperatorsdarkblue);
        setColorSettingsBody(COLORS.body.colorsettingsbodydarkblue);

    }
    if(val === "black"){
        setColorRow(COLORS.body.rowblack);
        setColorCol(COLORS.body.colblack);
        setButtonCol(COLORS.body.buttonblack);
        setColorOperators(COLORS.body.coloperatorsblack);
        setColorSettingsBody(COLORS.body.colorsettingsbodyblack);
    }
    if(val === "green"){
        setColorRow(COLORS.body.rowgreen);
        setColorCol(COLORS.body.colgreen);
        setButtonCol(COLORS.body.buttongreen);
        setColorOperators(COLORS.body.coloperatorsgreen);
        setColorSettingsBody(COLORS.body.colorsettingsbodygreen);

    }
    if(val === "red"){
        setColorRow(COLORS.body.rowred);
        setColorCol(COLORS.body.colred);
        setButtonCol(COLORS.body.buttonred);
        setColorOperators(COLORS.body.coloperatorsred);
        setColorSettingsBody(COLORS.body.colorsettingsbodyred);
    }
    if(val === "darkgrey"){
        setColorRow(COLORS.body.rowdarkgrey);
        setColorCol(COLORS.body.coldarkgrey);
        setButtonCol(COLORS.body.buttondarkgrey);
        setColorOperators(COLORS.body.coloperatorsdarkgrey);
        setColorSettingsBody(COLORS.body.colorsettingsbodydarkgrey);
    }

   };

   const handleDisplayForSettings = () => {


    
    console.log(document.getElementById("options5146531").className)

    if(document.getElementById("options5146531").classList.contains("closed")){
    
    document.getElementById("options5146531").classList.remove("closed")
    }
    else if(!document.getElementById("options5146531").classList.contains("closed")){
       document.getElementById("options5146531").className += " closed"
      }


} 


  return (
    <>
    <Container id="Calculatro48023532423">
        <Row>
            <Col className={colorhead}>{input ? <span>{input}</span> : <span>0</span> } <h1>{result}</h1> </Col>
        </Row>
        
        <div className={colorrow}> 
        <Row className={colorrow}> 
            <Col className={colorcol} ><Button className={buttoncol} value={7} onClick={handleClick}  >7</Button></Col>
            <Col className={colorcol}  ><Button className={buttoncol} value={8} onClick={handleClick}  >8</Button></Col>
            <Col className={colorcol}  ><Button className={buttoncol} value={9} onClick={handleClick} >9</Button></Col>
            <Col className={colorcol} ><Button className={buttoncol}  onClick={handleDelete} >Del</Button></Col>
                
               
           
        </Row>
        <Row className={colorrow}  > 
            <Col className={colorcol} ><Button className={buttoncol} value={4} onClick={handleClick} >4</Button></Col>
            <Col className={colorcol} ><Button className={buttoncol} value={5} onClick={handleClick}  >5</Button></Col>
            <Col className={colorcol} ><Button className={buttoncol} value={6} onClick={handleClick} >6</Button></Col>
            <Col className={colorcol} ><Button className={buttoncol}  onClick={handleReset} >AC</Button></Col>
        </Row>
        <Row className={colorrow}  > 
            <Col className={colorcol} ><Button className={buttoncol} value={1} onClick={handleClick} >1</Button></Col>
            <Col className={colorcol} ><Button className={buttoncol} value={2} onClick={handleClick} >2</Button></Col>
            <Col className={colorcol} ><Button className={buttoncol} value={3} onClick={handleClick} >3</Button></Col>
            <Col className=" col-3 bg-dark " >
                <Row className={colorrow}  >
                <Col className={coloroperators} ><Button className={buttoncol} value="/" onClick={handleClick} >/</Button></Col>
                 <Col className={coloroperators} ><Button className={buttoncol} value="*" onClick={handleClick} >*</Button></Col>
                </Row>
            </Col>
        </Row>
        <Row className={colorrow}    > 
            <Col className={colorcol} ><Button className={buttoncol} value={0}  >0</Button></Col>
            <Col className={colorcol} ><Button className={buttoncol} onClick={handleClick} value="." >.</Button></Col>
            <Col className={colorcol} ><Button className={buttoncol} onClick={handleSum}  >=</Button></Col>
            <Col className=" col-3 bg-dark" >
                <Row className={colorrow} >
                <Col className={coloroperators} ><Button className={buttoncol} onClick={handleClick} value="+">+</Button></Col>
                 <Col className={coloroperators} ><Button className={buttoncol} onClick={handleClick} value="-">-</Button></Col>
                </Row>
            </Col>
        </Row>
        <Row className={colorrow}> 
            <Col className={colorsettingsbody} ><Button className={buttoncol} value="" onClick={handleDisplayForSettings} >Einstellungen ↑/↓</Button></Col>
        </Row>
        <Row className="bg-dark closed"  id="options5146531"    > 
            <Col className="col-6  d-flex justify-content-center align-items-center bg-dark" ><Button className="btn btn-dark btn-lg btn-block modifiybutton789461" value={0}  >Head</Button></Col>
            <Col className=" col-6 d-flex justify-content-center align-items-center bg-dark " ><Button className="btn btn-dark btn-lg btn-block modifiybutton789461" onClick={handleClick} value="." >Body</Button></Col>
            <Col className=" col-2 d-flex justify-content-center align-items-center bg-warning " ><Button className="btn btn-warning btn-lg btn-block modifiybutton789461" value="yellow" onClick={handleHead}  >Y</Button></Col>
            <Col className=" col-2 d-flex justify-content-center align-items-center bg-primary " ><Button className="btn btn-primary btn-lg btn-block modifiybutton789461" value="darkblue" onClick={handleHead}  >B</Button></Col>
            <Col className=" col-2 d-flex justify-content-center align-items-center bg-light " ><Button className="btn btn-light btn-lg btn-block modifiybutton789461" value="white" onClick={handleHead}  >W</Button></Col>
            <Col className=" col-2 d-flex justify-content-center align-items-center bg-warning " ><Button className="btn btn-warning btn-lg btn-block modifiybutton789461" value="yellow" onClick={handleBody}  >Y</Button></Col>
            <Col className=" col-2 d-flex justify-content-center align-items-center bg-primary " ><Button className="btn btn-primary btn-lg btn-block modifiybutton789461" value="darkblue" onClick={handleBody}  >B</Button></Col>
            <Col className=" col-2 d-flex justify-content-center align-items-center bg-dark " ><Button className="btn btn-dark btn-lg btn-block modifiybutton789461" value="black" onClick={handleBody}  >B</Button></Col>
            <Col className=" col-2 d-flex justify-content-center align-items-center bg-success " ><Button className="btn btn-success btn-lg btn-block modifiybutton789461" value="green" onClick={handleHead}  >G</Button></Col>
            <Col className=" col-2 d-flex justify-content-center align-items-center bg-danger " ><Button className="btn btn-danger btn-lg btn-block modifiybutton789461" value="red" onClick={handleHead}  >R</Button></Col>
            <Col className=" col-2 d-flex justify-content-center align-items-center bg-secondary " ><Button className="btn btn-secondary btn-lg btn-block modifiybutton789461" value="darkgrey" onClick={handleHead}  >G</Button></Col>
            <Col className=" col-2 d-flex justify-content-center align-items-center bg-success " ><Button className="btn btn-success btn-lg btn-block modifiybutton789461" value="green" onClick={handleBody}  >G</Button></Col>
            <Col className=" col-2 d-flex justify-content-center align-items-center bg-danger " ><Button className="btn btn-danger btn-lg btn-block modifiybutton789461" value="red" onClick={handleBody}  >R</Button></Col>
            <Col className=" col-2 d-flex justify-content-center align-items-center bg-secondary " ><Button className="btn btn-secondary btn-lg btn-block modifiybutton789461" value="darkgrey" onClick={handleBody}  >G</Button></Col>
          
        </Row>
        </div>



    </Container>
      
    </>
  )
}
