import React, { useState, useEffect } from "react";
import ReactDOM, { flushSync } from 'react-dom';
import "../Navbartwo/Navbartwo.css";
import Items from "../Navbartwo/Items";
import logostripes from "../Navbartwo/dreistrichesmall.png";
import logox from "../Navbartwo/_close_icon_small.png";


export const Navbartwo = () => {

    /* Die Navbar funktioniert wie folgt. Grundsätzlich sind die Navbar und das Logo sichtbar. Über die 
       CSS-Klasse .image wird das Logo bei Desktopansicht verborgen. Sobald die Bildschirmweite unter 768 px ist, 
       erscheint das Logo und die  Navbar verbirgt sich. Wenn auf die drei Streifen geclickt wird, dann ändert sich 
       die Quelle für das Logo, es wird logox und gleichzeitg ändert sich die Css-Klasse für die Nabar. 
       In der Function const handleClick hole ich mir über die id die beiden Felder 


    */
    const handleClick = () => {

        // hier holt greife ich mir die beiden Felder 
        const logo =  document.getElementById("logo");
        const nav  = document.getElementById("navigation");
        
        if(logo.src === logostripes){
            logo.src = logox;    
            nav.className = "navigationstylemobile";
        }
        else if(logo.src === logox){
            logo.src = logostripes;
            nav.className = "navigation";
        } 
    }




    return(


        // Die Navelemente bzw. deren Inhalts ist in der Items.js Datei gespeichert. Darüber erweiterbar. 
        <>
            <div id="navbartwouniqueid85412">
            <div className="image"  > 
              <img  id="logo" onClick={handleClick} src={logostripes} alt=""></img>
              </div>

            <div className="navigationwrapper" >
                <div className="myname">Ismail Erdogan</div>
            <div className="wrapperforlinks" >  
            <nav id="navigation" className="navigation" >
            {Items.map((item,key) => {
                return <ul key={key} ><a className={item.cName} key={key} href={item.url}  >{item.title}</a></ul>
            })}
            </nav>
            </div> 
            </div>

            </div>
        </>

    )


}