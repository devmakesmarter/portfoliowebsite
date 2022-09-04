
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




function App() {
  return (

    

 
  <Router>


    <div className="App">


    <br></br>
    <Navbartwo/>
    <br></br>
    <SkillsComponent/>
    <Uebermich/>
    <Quizapp/>
<br></br><br></br><br></br>
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
