
import React, {useState} from "react";
import "../Skills/SkillsComponent.css";
import { skillList } from "./SkillList";
import toolbox from "../Skills/Picutres/tools 1280 960.jpg";
import pictureone from "../Popup/pexels-lilartsy-1194775.jpg";
import picturetwo from "../Popup/pexels-pixabay-159866.jpg";
import picturethree from "../Popup/pexels-bogdan-dirică-1645668.jpg";
import { PopUp } from "../Popup/Popup";
import { flushSync } from "react-dom";






// Die Componente listet meine Fähigkeiten. Die Fähigkeiten sind in der skillList Datei als ein Array mit Objekten gespeichert. Es gibt zwei CSS Klassen. Einmal 
// die es DIV und einmal für FontAwesome.


export const SkillsComponent = () => {


    // Die Variable valueOfProp, visible, img sind für die Steuerun des Popup. valueofProp greift über die Funktion handleClick die Beschreibung der einzelnen Fähigkeiten ab. 
    // Die Fähigkeiten habe ich als data-value in den Elementen abgespeichert. Anschließend werden die Inhalte an den Popup weitergegeben. 
    // visible steuert die Sichtbarkeit des Popup. Grundsätzlich ist der Popup so programmiert, bei false eine null zu returnen. Andernfalls Returnt der Popup sich selbst. 
    // img ist für das Bild in dem PopUp zuständig. Es wird auch von hier weitergegeben. 

    const [valueOfProp, setValueOfProp] = useState("");
    const [visible, setVisible] = useState(false);
    const [img, setImg] = useState(null);


    const handleClick = (e) => {
    // Insgesamt gibt es drei verschdiene Bilder für das Popup. Diese werden per Zufallsgenerator zugeteilt. Das regelt die Number const. 
        const number = Math.floor(Math.random() * 3 );
    // hier wird die Beschreibung der Fähigkeiten über die Varibale Key abgegriffen
        const key = e.target.dataset.value; 
    
    // hier wird die Beschreibung tranferiert. 

       if(typeof(key) ==="string"){
        setValueOfProp((prev) => {   
             return prev= key;
        }   )}
        else{
            setValueOfProp("Es gab leider ein technisches Problem. Bitte schließen und öffnen Sie das Fenster nochmal. Danke")
        }



    // hier wird die Sichtbarkeit des Popup eingestellt
        setVisible(true);
    
    // Das hier ist für die Generierung der Number verantwortlich. Dementsprechend kommt auch ein Bild. 
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
 
    // Das ist für die Schließung des Popup zuständig. Es wird die Sichtbarkeit geändert und der Inhalts 
    const handleClose = () => {
        setVisible(false);
      //  setValueOfProp(null);
      //  setImg(null);
    } 



    console.log(" Hallo und herzlich Willkommen!");

    return ( 
        
        <>
            <div className="containerthatcontainsthegrid">
                <div className="containerforgrid" > 
                    <div className="leftsideinsidethegrid"><img src={toolbox} className="imginsidetheleftgrid" alt="toolbox" ></img></div>
                    <div className="rightsideinsidethegrid"> 
                        <div className="containerSkillList">
                        {skillList.map((prev,key)=> {

                            return (  
                            <div onClick={handleClick} key={key} className={prev.className} listid={key} data-value={prev.description}  >
                            <div>
                            <i data-value={prev.description} className={prev.fontAwesome} key={key} listid={key} >{prev.Skillname} </i> 
                            </div>
                            </div>     
                            )
                            } )}
                        </div>
                     <PopUp description={valueOfProp} visible={visible} event={handleClose} img={img} /> 
                    </div>

                </div>
            </div>
        </>
    )
    
}