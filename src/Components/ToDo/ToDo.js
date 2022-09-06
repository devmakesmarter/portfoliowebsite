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
    const [prio, setPrio] = useState("");// Diese Variable greift die Prio der Aufgabe ab. In der Form ist das Datum als required deklariert. Somit soll verhindert werden, dass beim rendern kein Wert vorhanden ist und es bricht
    const [childReRender, setChildReRender] = useState(500);
    const [filter, setFilter] = useState(0);
    const [settingsfortodo, setSettingsForToDo] = useState(false);


    const number = () =>{
       return Math.floor(Math.random() * 1008642310)
    }


     useEffect( ()=> {

        
            // setAllInput(allInput.sort((a,b) => {
            //             return a.prio-b.prio
            //        }))


                   setAllInput(allInput.sort((a,b) => {
                    const datea = new Date(a.date);
                    const dateb = new Date(b.date);

                    return datea -dateb
               }))

                setInputValue("");
                setChildReRender(number());
     },[allInput]) 

 


   
    const getInputValue = (e) =>{

        const value = e.target.value;
        setInputValue(value);

    }

    const getDate = (e) => {
        const value = e.target.value;
        setDate(value); 
    }

    const getPrio = (e) => {
        const value = e.target.value;
         setPrio(parseInt(value));

    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        setAllInput((prev) => ([...prev, {notiz: inputValue,
                                          id: Date.now(),
                                          date: date,
                                          prio: prio}]));
        setInputValue("");
    }


    const handleDelete = (e) => {
        const idnumber = parseInt(e.target.id);
        setAllInput(allInput.filter(prev => prev.id != idnumber));
    }

    const openSetteingsFromToDo = () => {
        setSettingsForToDo(true);
    }

    const closeSetteingsFromToDo = () => {

        setSettingsForToDo(false);
    }




  return (
    <>

       

        <div className="containercontainercontainercontainer" >
            <div className="containercontainercontainer"> 
                <div className="containerforheadline"><h1> TO DO ´S</h1> </div>
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
                <div className="settings"  ><img onClick={openSetteingsFromToDo} className="settingsimage" src={icon} alt=""></img> <PopUpone settingsfortodo={settingsfortodo} closesettingsfortodo={closeSetteingsFromToDo} /> </div>

                <AllTasks allInput={allInput} handleDelete={handleDelete} childReRender={childReRender} />
                
                </div>
            </div>
        </div>

    </>
  )
}

export default ToDo;