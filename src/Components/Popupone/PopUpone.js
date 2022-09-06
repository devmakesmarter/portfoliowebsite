import "../Popupone/PopUpone.css";



export const PopUpone = ({settingsfortodo, closesettingsfortodo}) => {


   console.log(settingsfortodo);
   

    if(!settingsfortodo) {
    return null
}


    if(settingsfortodo){
        return( 
    <> 
                <div className="acontainerfromcontainerfrompopup"> 
                     <div className="acontainerfrompopup"> 
                        <div className="adivforbeschreibung" >Beschreibung </div>
                        <div className="adescription">Bald sind hier die Filtermöglichkeiten der ToDo Liste verfügbar</div>
                        <div className="divforbutton"><button className="abuttonself" onClick={closesettingsfortodo}>Schliessen</button></div>
                        </div> 
                </div>
    </>
)
}


};