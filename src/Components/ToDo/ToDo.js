import React, {useState,useEffect} from 'react';
import "../ToDo/ToDo.css";
import {AllTasks} from "../ToDo/Components/AllTasks";
import { flushSync } from 'react-dom';
import icon from "../ToDo/icon.png";
import {PopUpone} from '../Popupone/PopUpone';

export const ToDo = () => {
    ///

    const [inputValue, setInputValue] = useState("");

    const [allInput, setAllInput] = useState([{notiz:"Hier erscheint Ihre Aufgabe",id:151651321531, date:"2022-03-01", prio:1 }]) // hier werden die Aufgaben gespeichert. 
    const [date, setDate] = useState("");  // Diese Variable greift das Datum der Aufgabe ab. In der Form ist das Datum als required deklariert. Somit soll verhindert werden, dass beim rendern kein Wert vorhanden ist und es bricht
    const [prio, setPrio] = useState(1);// Diese Variable greift die Prio der Aufgabe ab. In der Form ist das Datum als required deklariert. Somit soll verhindert werden, dass beim rendern kein Wert vorhanden ist und es bricht
    const [childReRender, setChildReRender] = useState(500);// Diese Variable ist für die Renderung beim Child verantwortlich. Der Hintergrund ist, dass wenn man ein Array sortiert es sich nicht ändert und React erst bei der nächsten Renderung die Sortierung zeigt. 
    const [settingsfortodo, setSettingsForToDo] = useState(false); // Diese Variable ist dafür zuständig, dass der PopUp sichtbar wird
    const [sortArtForTheToDoList, setSortArtForTheToDoList ] = useState("Datumaufsteigend");

    // Diese Function generiert eine zufällige Nummer. Dieser wird einem Div im Child vergeben, damit er beim neusortieren des Div´s rendert. 
    const number = () =>{
       return Math.floor(Math.random() * 10086423105416)
    }

    // Dieser UseEffect ist für die Sortierung des Array´s verantwortlich. Die Sortierung ist beim Start grundsätzlich Datum aufsteigend. Eine einmal gewählte Sorierung wird beibehalten, das wird daruch gewährleistet, dass
    // wann immer das Array tangiert wird, es dieser sortier funktion anwendet. Die Grundlage bildet die sortArtForTheToDoList. Sollte keine Beibehaltung der Sortierung gewünscht werden, muss der Code hier geaktiviert und im 
    // handleSettingsToDo aktiviert werden. 
     useEffect( ()=> {

         if(sortArtForTheToDoList ==="Datumaufsteigend"){
            // Datum aufsteigend sortierung 
                 setAllInput(allInput.sort((a,b) => {
                 const datea = new Date(a.date);
                 const dateb = new Date(b.date);
                 setChildReRender(number());
                 return datea -dateb
                     }))
         }

         else if(sortArtForTheToDoList==="Datumabsteigend"){
             // Datum absteigend sortierung 
                  setAllInput(allInput.sort((a,b) => {
                  const datea = new Date(a.date);
                  const dateb = new Date(b.date);
                  setChildReRender(number());
                  return dateb -datea
                     }))
         }

         else if(sortArtForTheToDoList==="Prioaufsteigend"){
              //Prio Aufsteigend
 
                 setAllInput(allInput.sort((a,b) => {
                 setChildReRender(number());
                 return a.prio-b.prio
                     }))
         }  

         else if(sortArtForTheToDoList==="Prioabsteigend"){

            // Prio absteigend
               setAllInput(allInput.sort((a,b) => {
               setChildReRender(number())
               return b.prio-a.prio
                   }))


         }

                setChildReRender(number());
                
     },[allInput,sortArtForTheToDoList]) 

 


    // Dieser Funkton greift bei jedem Change das Value des Feldes ab und setzt die entsprechende Variable dementsprchend. Als Value im DIV ist die Variable deklariert, die hier gesetzt wird 
    const getInputValue = (e) =>{
        const value = e.target.value;
        setInputValue(value);
    }
    // Dieser Funkton greift bei jedem Change das Value des Feldes ab und setzt die entsprechende Variable dementsprchend. Als Value im DIV ist die Variable deklariert, die hier gesetzt wird 
    const getDate = (e) => {
        const value = e.target.value;
        setDate(value); 
    }
    // Dieser Funkton greift bei jedem Change das Value des Feldes ab und setzt die entsprechende Variable dementsprchend. Als Value im DIV ist die Variable deklariert, die hier gesetzt wird 
    const getPrio = (e) => {
        const value = e.target.value;
         if(typeof(value) === "string"){
          setPrio(parseInt(value));
        }
    }

   
    // diese Funktion ist für die Übermittlung der ToDo Daten verantwortlich. Da die ToDo Liste eine Form ist, werden beim clicken von Submit alle Daten übermittelt. 
    const handleSubmit = (e) =>{
        e.preventDefault();
        setAllInput((prev) => ([...prev, {notiz: inputValue,
                                          id: Date.now(),
                                          date: date,
                                          prio: prio}]));
        setInputValue("");
    }

    // Diese Funktion ist für das Löschen der Aufgaben zuständig. Alle Aufgaben bekommen über Date.now eine Unique Id und die Filter funktion gibt alles zuück,
    // bis auf das Element mit der ID die man anklickt. So funktioniert das löschen. 
    const handleDelete = (e) => {
        const idnumber = parseInt(e.target.id);
        setAllInput(allInput.filter(prev => prev.id != idnumber));
    }

    // Die Einstellungen des Quiz werden über ein PopUp gesteuert. Die Funktion zeigt das PopUp. Falls das dieser Wert Null ist, return das PopUp eine Null. 
    const openSetteingsFromToDo = () => {
        setSettingsForToDo(true);
    }
    // Die Einstellungen des Quiz werden über ein PopUp gesteuert. Die Funktion schließt  das PopUp. Falls das dieser Wert Null ist, return das PopUp eine Null. 
    const closeSetteingsFromToDo = () => {
        setSettingsForToDo(false);
    }

    // Dieser Funktion ist für das Sortieren der Liste verantwortlich. Falls man die Logik hier aktiviert gibt es einen Nachteil. Falls man nach der gewählten 
    // Sortierung neue Elemente hinzufügt, wird die Sortierung für die nicht übernommen. Daher ist es in den useEffect ausgelagert. Der useEffect greift immer 
    // ein wenn sortArtForTheToDoList sich verändert. 
    const handleSettingsToDo = (e) =>{

        const wert = e.target.value;
        setSortArtForTheToDoList(wert); 
        setSettingsForToDo(false);
        setChildReRender(number());// Wichtig!! Damit das Child direkt Rerendert. Sonst ist es nur bei dem nächsten Rendern gültig. 

        // if(wert ==="Datumaufsteigend"){
        //    // Datum aufsteigend sortierung 
        //         setAllInput(allInput.sort((a,b) => {
        //         const datea = new Date(a.date);
        //         const dateb = new Date(b.date);
        //         setChildReRender(number());
        //         return datea -dateb
        //             }))
        // }

        // else if(wert==="Datumabsteigend"){
        //     // Datum absteigend sortierung 
        //          setAllInput(allInput.sort((a,b) => {
        //          const datea = new Date(a.date);
        //          const dateb = new Date(b.date);
        //          setChildReRender(number());
        //          return dateb -datea
        //             }))

        // }

        // else if(wert==="Prioaufsteigend"){
        //      //Prio Aufsteigend

        //         setAllInput(allInput.sort((a,b) => {
        //         setChildReRender(number());
        //         return a.prio-b.prio
        //             }))
        // }

        // else if(wert==="Prioabsteigend"){

        //      // Prio absteigend
        //         setAllInput(allInput.sort((a,b) => {
        //         setChildReRender(number())
        //         return b.prio-a.prio
        //             }))
        // }
    }


    //  Wichtig ist immer bei den Eingaben onChange zu aktivierren und die Varaiable von value über setState zu setzen.Wenn man das value console.loggt fehlt immer ein Buchstabe.
    // beim submitten wird aber alles übermittelt
  return (
    <>
        <div className="containercontainercontainercontainer" >
            <div className="containercontainercontainer"> 
                <div className="containerforheadline"><h1 className="zeropaddingandmargin87452187"> TO DO ´S</h1> </div>
                <div className="containerfortheinputsection" > 
                    <form className="formfortheinputsection" onSubmit={handleSubmit}>
                        <div className="containerforinputtext"> 
                            <input className="inputfieldtext" onChange={getInputValue} type="text" value={inputValue} placeholder="Bitte tippen Sie hier" maxLength="50" required ></input>
                        </div>
                        <div className="containerfordate"> 
                            <input className="inputfielddate"  onChange={getDate}  type="date" value={date}  required   ></input>
                        </div>
                        <div className="containerfornumber"> 
                            <input className="inputfieldnumber" onChange={getPrio} type="number" min="1" max="4" placeholder="Prio 1-4" value={prio} required ></input>
                        </div>
                        <div className="containerforsubmit"> 
                            <button className="buttonforsubmit" type="submit" >E</button>
                        </div>
                    </form>
                    </div>
                    <br></br><br></br>
                <div className="containerfortheoutputsection"> 
                <div className="settings"  ><img onClick={openSetteingsFromToDo} className="settingsimage" src={icon} alt=""></img> <PopUpone settingsfortodo={settingsfortodo} closesettingsfortodo={closeSetteingsFromToDo} handleSettingsToDo={handleSettingsToDo} sortArtForTheToDoList={sortArtForTheToDoList} /> </div>

                <AllTasks allInput={allInput} handleDelete={handleDelete} childReRender={childReRender} />
                
                </div>
            </div>
        </div>

    </>
  )
}

export default ToDo;