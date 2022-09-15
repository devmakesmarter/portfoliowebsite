
import "../Components/App.css"

import { Navbartwo } from "./Navbartwo/Navbartwo";
import {SkillsComponent} from "../Components/Skills/SkillsComponent";
import {Quizapp} from "../Components/Quizapp/Quiz";
import {Impressum} from "./Rechtliches/Impressum";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Datenschutz } from "./Rechtliches/Datenschutz";
import {Footer} from "../Components/Rechtliches/Footer";
import {Uebermich} from "../Components/Uebermich/Uebermich";
import {ToDo} from "../Components/ToDo/ToDo";
import {ProjekteHead} from "./Projektehead/ProjekteHead"
import {ProjektSeparator} from "./Projektseparator/ProjektSeparator";
import {Firsstepwithbootstrap} from "../Components/Firststepwithbootstrap/Firsstepwithbootstrap";
import {Next} from "../Components/Nextstepwithbootstrap/Next";
import {Skillsrefactor} from "../Components/Skillsrefactor/Skillsrefactor";
import {Navbarwithboots} from "../Components/Navbarwithboots/Navbarwithboots";
import {Aboutmewithbootsrap} from "../Components/Aboutmewithbootsrap/Aboutmewithbootsrap";
import {UseRed} from "./UseReducer/UseRed";
import {Calculator} from "../Components/Calculator/Calculator";
function App() {
  return (

    

 
  <Router>


    <div className="App">


   
  

    <Navbarwithboots/>
    <br></br>
    
   
    
    <Skillsrefactor/>
    <br></br>
   
    {/* <Aboutmewithbootsrap/> */}

    
    <ProjekteHead/>
    <br></br>

    <ProjektSeparator head="N-1 " project={<Quizapp/>} description="Dieses Quiz verfügt über verschiedene Eigentschaften. Insgesamt gibt es acht Fragen welche beantwortbar sind. Es gibt einen Timer der in jeder Frage läuft und nach Ablauf einen Punkt abzieht. Gleichzeitig erhält man für richtig beantwortete Fragen Punkte. Es ist möglich seinen Highscore pro Runde zu speichern" />
    <br></br>
    <ProjektSeparator head="N-2" project={<ToDo/>} description="Eine ToDo-Liste mit verschiedenen Eigenschaften. Unter anderem ist es möglich, ein Zieldatum einzugeben und auch eine Prio zu vergeben. Die erstellen Aufgaben können nach Datum oder Prio auf- und absteigend sortiert werden." />
    <br></br>
    <ProjektSeparator head="N-3 " project={<Calculator/>} description=" Bei diesem Projekt handelt es sich um einen Taschenrechner, welchen ich selbst programmiert habe. Eine Möglichkeit der Farbänderung wird aktuell noch programmiert. " />

    



     
     <br></br><br></br><br></br><br></br><br></br><br></br>


   
    
    <br></br>
    <br></br><br></br>
   
   


   

    <Footer/>
    <Switch>
    <Route exact path="/src/Components/Rechtliches/Impressum.js">
      <Impressum/>
    </Route>
    <Route exact path="/src/Components/Rechtliches/Datenschutz.js">
      <Datenschutz/>
    </Route>
    </Switch>
  

    
    </div>


  </Router> 

  

  );
  
  }

export default App;
