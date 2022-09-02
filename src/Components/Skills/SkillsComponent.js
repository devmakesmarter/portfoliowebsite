
import React, {useState} from "react";
import "../Skills/SkillsComponent.css";
import { skillList } from "./SkillList";
import toolbox from "../Skills/Picutres/tools 1280 960.jpg";
import pictureone from "../Popup/pexels-lilartsy-1194775.jpg";
import picturetwo from "../Popup/pexels-pixabay-159866.jpg";
import picturethree from "../Popup/pexels-bogdan-dirică-1645668.jpg";
import { PopUp } from "../Popup/Popup";






// Die Componente listet meine Fähigkeiten. Die Fähigkeiten sind in der skillList Datei als ein Array mit Objekten gespeichert. Es gibt zwei CSS Klassen. Einmal 
// die es DIV und einmal für FontAwesome.


export const SkillsComponent = () => {

    const [valueOfProp, setValueOfProp] = useState("");
    const [visible, setVisible] = useState(false);
    const [img, setImg] = useState(pictureone);

    const handleClick = (e) => {
    
    const number = Math.floor(Math.random() * 3 );
    const key = e.target.dataset.value; 
    
    setValueOfProp(key);
    setVisible(true);
    
    if(number === 0){
        setImg(pictureone)
    }
    else if(number === 1){
        setImg(picturetwo)
    }
    else if(number === 2){
        setImg(picturethree)
    }
    }
 

    const handleClose = () => {

        setVisible(false);
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
                        <i data-value={prev.description} className={prev.fontAwesome} listid={key} >{prev.Skillname} </i> 
                        </div>
                    </div>
                    <div > </div>
                    </div>
            )
            } )}
            </div>
            <PopUp description={valueOfProp} visible={visible} event={handleClose} img={img} /> 
            </div>

            </div>
            </div>



        </div>
    )
    console.log(" Hallo und herzlich Willkommen!");

}