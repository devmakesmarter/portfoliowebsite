import "../Popup/Popup.css";



export const PopUp = ({description, visible, event, img}) => {

 

    if(!visible) {
        return null
    }



return( 
    <div> 


    <div className="containerfromcontainerfrompopup"> 
    <div className="containerfrompopup"> 
    
    <div className="divforbeschreibung" >Beschreibung </div>
    <div className="divforimage" ><img className="imgself" alt="" src={img}></img></div>
    <div  className="description" >{description}</div>
    <div className="divforbutton" > <button onClick={event} className="buttonself" > Schliessen</button> </div>
    
    </div> 
    </div>


    </div>
)


};