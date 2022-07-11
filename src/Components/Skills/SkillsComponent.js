import React, { useState, useEffect } from "react";
import "../Skills/SkillsComponent.css";
import { skillList } from "./SkillList";


const handleClick =()=>{


}


export const SkillsComponent = () => {

    return ( 
    
        <div className="bigContainer">
            <div >
            <h1> Mein Fähigkeiten sind</h1>
            </div>
        
            

            <div className="containerSkillList">

            {skillList.map((prev,key)=> {

return <div key={key} className={prev.className} ><i className={prev.fontAwesome}>{prev.Skillname}</i></div>

} )}

            </div>
            

            
        </div>
    )


}