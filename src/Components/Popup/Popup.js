import "../Popup/Popup.css";



export const PopUp = ({description, visible, event, img}) => {


    /* Dieses Pop´Up ist wie folgt aufgebaut. Die Props werden von der Hauptkomponente runtergegeben. Grundsätzlich ist das Pop´Up nicht sichtbar. 
       Die Sichtbarkeit wird über die Variable visible gesteurt. Die Inhalte des werden auch von der Hauptkompnente runter gegeben. Auch die Funktions für das Schliessen und Öffnen. 

    */
   
  

    if(!visible) {
        return null
    }

    else if(visible){
    return( 
    <> 
            <div id="popup3458129" className="containerfromcontainerfrompopup"> 
                 <div className="containerfrompopup"> 
                    <div className="divforbeschreibung" >Beschreibung </div>
                    <div className="divforimage" ><img className="imgself" alt="" src={img}></img></div>
                    <div  className="description" >{description}</div>
                    <div className="divforbutton" > <button onClick={event} className="buttonself" > Schliessen</button> </div>
                 </div> 
            </div>
    </>
)
}

};