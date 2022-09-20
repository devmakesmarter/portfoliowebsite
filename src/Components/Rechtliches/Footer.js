import "../Rechtliches/Footer.css";
import { BrowserRouter as Router, Route, Switch, NavLink, Link } from "react-router-dom";
import { LinkContainer } from 'react-router-bootstrap';

export const Footer = () => {



    const handleClick = () => {

        alert("Bitte drücken Sie links auf den Fingerabdruck. Darüber gelangen Sie zu den Cookieeinstellungen")
    }


    return (
        
        <div> 

    <footer className="footerlinks">
      
       
    <nav>
        <ul>
            <p>  <Link to="/impressum">Impressum</Link></p>
        </ul>
        <ul>
            <p><NavLink to="/src/Components/Rechtliches/Datenschutz.js" >Datenschutz</NavLink></p>
        </ul>
        <ul> <p>  <a href="#"  onClick={() => window.openUcSettings()}>Cookie-Einstellungen</a></p></ul>
        
        
      

    </nav>

</footer>

</div>

    )

}