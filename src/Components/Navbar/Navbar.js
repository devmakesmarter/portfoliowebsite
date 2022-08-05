import React, { Component } from 'react';
import {useState, useEffect} from "react";
import "../Navbar/Navbar.css";
import { menuItems } from './MenuItems';

const navBarWords = ["Start", "Projekte","About Me"];

export const Navbar = (props) => {

    const [menuIconState, setmenuIconState] = useState({ clicked: false});


        // handleMenuIconClick ist dafür zuständig, ob das Icon true oder false ist. Dementsprechend ändert sich die CSS-Klasse und damit gleichzeitig auch das Logo 

const handleMenuIconClick = () => {
        if(menuIconState.clicked === false){
           setmenuIconState({clicked:true})
        }
        else if(menuIconState.clicked === true){
            setmenuIconState({clicked:false})
         }
    }

const navBarLi   = navBarWords.map((prev,key) => {

    return <li  key={key}>{prev}</li>
} )


return (
    <div>
        <nav className="navbarItems" >
        <h1 className="navbar-logo" > <i className="fa-solid fa-circle-plus"></i> Ismail Erdogan </h1>
        <div className="menu-icon" onClick={handleMenuIconClick} >
            <i className={menuIconState.clicked ? "fas fa-times" : "fas fa-bars" }></i>
        </div>
        <ul className={menuIconState.clicked ? "nav-menu active" : "nav-menu" }>
            {menuItems.map((item,key) => {
                    return  <li key={key}> 
                         <a className={item.cName}  href={item.url} > 
                         {item.title}
                         </a> 
                         </li>

            } )}
        </ul>
        </nav>
        {props.name}
    </div>


)

}

export default Navbar