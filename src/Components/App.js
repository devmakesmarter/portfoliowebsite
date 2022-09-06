
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


function App() {
  return (

    

 
  <Router>


    <div className="App">


    <br></br>
    <Navbartwo/>
    <br></br>
    <SkillsComponent/>
    <Uebermich/>
    <ProjekteHead/>
    <ProjektSeparator head="Projekt 1 " description="Dieses Quiz verfügt über verschiedene Eigentschaften. Insgesamt gibt es acht Fragen welche beantwortbar sind. Es gibt einen Timer der in jeder Frage läuft und nach Ablauf einen Punkt abzieht. Gleichzeitig erhält man für richtig beantwortete Fragen Punkte. Es ist möglich seinen Highscore pro Rund zu speichern" />
    <Quizapp/>

    <ProjektSeparator head="Projekt 2 " description="Eine ToDo-Liste mit verschiedenen Eigenschaften. Unter anderem ist es möglich, ein Zieldatum einzugeben und auch eine Prio zu vergeben" />
    <br></br>
    <ToDo/><br></br><br></br><br></br><br></br><br></br><br></br>
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
