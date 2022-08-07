
import "../Skills/SkillsComponent.css";
import { skillList } from "./SkillList";

// Die Componente listet meine Fähigkeiten. Die Fähigkeiten sind in der skillList Datei als ein Array mit Objekten gespeichert. Es gibt zwei CSS Klassen. Einmal 
// die es DIV und einmal für FontAwesome.

export const SkillsComponent = () => {

    console.log(" Hallo und herzlich Willkommen!");

    

    return ( 
        <div>
        <div className="bigContainer">
            <div >
            <h1> Mein Fähigkeiten sind</h1>


            <br></br>
            </div>
            </div>
            <div className="containerSkillList">
            {skillList.map((prev,key)=> {

return <div key={key} className={prev.className} ><i className={prev.fontAwesome}>{prev.Skillname}</i></div>

} )}

            </div>
        </div>
    )


}