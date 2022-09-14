import "../Popupone/PopUpone.css";



export const PopUpone = ({settingsfortodo, closesettingsfortodo,handleSettingsToDo,sortArtForTheToDoList}) => {

    // if(sortArtForTheToDoList === "Datumaufsteigend"){
    //      const backgroundcolorfrombutton = document.getElementById("eins");
    //      if(backgroundcolorfrombutton){
    //     backgroundcolorfrombutton.style.backgroundColor = "white";
    //      }
    //     }


    //     if(sortArtForTheToDoList != "Datumaufsteigend"){
    //         const backgroundcolorfrombutton = document.getElementById("eins");
    //         if(backgroundcolorfrombutton){
    //         backgroundcolorfrombutton.style.backgroundColor = "rgba(207, 201, 201, 0.8)";
        
    //     }

    //      }
    
   
    if(!settingsfortodo) {
    return null
}


    if(settingsfortodo){
        return( 
    <> 
                <div className="acontainerfromcontainerfrompopup"> 
                     <div className="acontainerfrompopup"> 
                        <div className="adivforbeschreibung" >Beschreibung </div>
                        <div className="adescriptiona">
                            <div className="adivforbuttonselectlist"> 
                                <button onClick={handleSettingsToDo} id="eins" className="abuttonself" value="Datumaufsteigend" >Datum aufsteigend</button>
                                <button onClick={handleSettingsToDo} className="abuttonself" value="Datumabsteigend" >Datum absteigend</button>
                                <button onClick={handleSettingsToDo} className="abuttonself" value="Prioaufsteigend" >Prio aufsteigend</button>
                                <button onClick={handleSettingsToDo} className="abuttonself" value="Prioabsteigend" >Prio absteigend</button>
                            </div>
                        <div className="emptyer">Sortierung To-Do </div>
                        </div>
                        <div className="divforbutton"><button className="abuttonself" onClick={closesettingsfortodo}>Schliessen</button></div>
                      </div> 
                </div>
    </>
)
}


};