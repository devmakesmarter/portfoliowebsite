
import React, {useState} from "react";
import "../Skills/SkillsComponent.css";
import { skillList } from "./SkillList";
import toolbox from "../Skills/Picutres/tools 1280 960.jpg";
import { PopUp } from "../Popup/Popup";






// Die Componente listet meine Fähigkeiten. Die Fähigkeiten sind in der skillList Datei als ein Array mit Objekten gespeichert. Es gibt zwei CSS Klassen. Einmal 
// die es DIV und einmal für FontAwesome.


export const SkillsComponent = () => {

    const [valueOfProp, setValueOfProp] = useState("");



    const handleClick = (e) => {

    const key = e.target.dataset.value; 

    setValueOfProp(key);

    }





    return ( 
        <div>

            <div className="containerthatcontainsthegrid">
            <div className="containerforgrid" > 

            <div className="leftsideinsidethegrid"><img src={toolbox} className="imginsidetheleftgrid" alt="toolbox" ></img></div>

            <div className="rightsideinsidethegrid"> 
            <div className="containerSkillList">
            {skillList.map((prev,key)=> {
            return (
                    <div >
                    <div onClick={handleClick} key={key} className={prev.className} listid={key} data-value={prev.description}  >
                        
                        <div>
                        <i data-value={prev.description} className={prev.fontAwesome}>{prev.Skillname} </i> 
                        </div>
                    </div>
                    <div > </div>
                    </div>
            )
            } )}
            </div>
            <PopUp description={valueOfProp}/> 
            </div>

            </div>
            </div>



        </div>
    )
    console.log(" Hallo und herzlich Willkommen!");

}