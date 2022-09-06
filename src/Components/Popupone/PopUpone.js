import "../Popupone/PopUpone.css";



export const PopUpone = ({settingsfortodo, closesettingsfortodo,handleSettingsToDo}) => {


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
                        <div className="adescription">
                            <div className="adivforbuttonselectlist"> 
                                <button onClick={handleSettingsToDo} className="abuttonself" value="Datumaufsteigend" >Datum aufsteigend</button>
                                <button onClick={handleSettingsToDo} className="abuttonself" value="Datumabsteigend" >Datum absteigend</button>
                                <button onClick={handleSettingsToDo} className="abuttonself" value="Prioaufsteigend" >Prio aufsteigend</button>
                                <button onClick={handleSettingsToDo} className="abuttonself" value="Prioabsteigend" >Prio absteigend</button>
                            </div>



                            <div className="empty">Sortierung TODO Liste</div>
                        </div>
                        <div className="divforbutton"><button className="abuttonself" onClick={closesettingsfortodo}>Schliessen</button></div>
                      </div> 
                </div>
    </>
)
}


};