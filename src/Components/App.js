
import "../Components/App.css"

import { Navbartwo } from "./Navbartwo/Navbartwo";
import {SkillsComponent} from "../Components/Skills/SkillsComponent";
import {Quizapp} from "../Components/Quizapp/Quiz";
import {Impressum} from "./Rechtliches/Impressum";
import { BrowserRouter as Router, Route, Switch, NavLink, Link, withRouter } from "react-router-dom";
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
import {Firstshop} from "../Components/FirstShop/Firstshop";
import {Product} from "../Components/FirstShop/Components/Product";

function App() {
  return (

    

 
  <Router>
    <div className="App">
    <Navbarwithboots/>
    <br></br>
    <Skillsrefactor/>
    <br></br>
    {/*<Aboutmewithbootsrap/> 
     */}
    <ProjekteHead/>
    <br></br>
    <ProjektSeparator head="N-1 " project={<Quizapp/>} description="Dieses Quiz verfügt über verschiedene Eigentschaften. Insgesamt gibt es acht Fragen welche beantwortbar sind. Es gibt einen Timer der in jeder Frage läuft und nach Ablauf einen Punkt abzieht. Gleichzeitig erhält man für richtig beantwortete Fragen Punkte. Es ist möglich seinen Highscore pro Runde zu speichern" />
    <br></br>
    <ProjektSeparator head="N-2" project={<ToDo/>} description="Eine ToDo-Liste mit verschiedenen Eigenschaften. Unter anderem ist es möglich, ein Zieldatum einzugeben und auch eine Prio zu vergeben. Die erstellen Aufgaben können nach Datum oder Prio auf- und absteigend sortiert werden." />
    <br></br>
    <ProjektSeparator head="N-3 " project={<Calculator/>} description=" Bei diesem Projekt handelt es sich um einen Taschenrechner, welchen ich selbst programmiert habe. Zusätzlich zu den zuverlässigen und soliden Rechenfuntionen ist dieser individualisierbar. Es gibt insgesamt sechs unterschiedliche Farben. Bitte klicken Sie auf die Einstellungen. " />
    <br></br>
    <ProjektSeparator head="N-4 " project={<Firstshop/>} description=" Diesen kleinen aber feinen Online-Shop habe ich selbst programmiert. Das verwendete Framework ist React.js und für das CSS Bootstrap. Die Applikation ist eine Single-Page-Applikation." />
     <br></br><br></br><br></br><br></br>
    <Footer/>
    <Switch>   
      <Route path="/impressum">
        <Impressum/>
      </Route>
      <Route  path="/src/Components/Rechtliches/Datenschutz.js">
        <Datenschutz/>
      </Route>
    </Switch>
    </div>
  </Router> 
  );
  
  }

export default App;
