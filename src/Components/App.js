
import "../Components/App.css"
import {Navbar} from "../Components/Navbar/Navbar";
import {SkillsComponent} from "../Components/Skills/SkillsComponent";
import {Quizapp} from "../Components/Quizapp/Quiz";
import {Impressum} from "./Rechtliches/Impressum";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Datenschutz } from "./Rechtliches/Datenschutz";
import {Footer} from "../Components/Rechtliches/Footer";
function App() {



  return (

  <Router>
    <div className="App">

    <br></br>
    <Navbar/>
    <br></br>
    <SkillsComponent/>
    <br></br>
    <Quizapp/>
   

    <Switch>
    <Route exact path="/src/Components/Rechtliches/Impressum.js">
      <Impressum/>
    </Route>
    <Route exact path="/src/Components/Rechtliches/Datenschutz.js">
      <Datenschutz/>
    </Route>

    </Switch>
<br></br>
    <Footer/>

    
    </div>

    </Router>
  );
}

export default App;
