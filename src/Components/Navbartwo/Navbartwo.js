import React, { useState, useEffect } from "react";
import ReactDOM, { flushSync } from 'react-dom';
import "../Navbartwo/Navbartwo.css";
import Items from "../Navbartwo/Items";
import logostripes from "../Navbartwo/dreistrichesmall.png";
import logox from "../Navbartwo/_close_icon_small.png";


export const Navbartwo = () => {

    const handleClick = () => {
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

        <div>
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

    )


}