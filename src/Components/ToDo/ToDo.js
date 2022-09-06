import React, {useState} from 'react';
import "../ToDo/ToDo.css";
import {AllTasks} from "../ToDo/Components/AllTasks";
export const ToDo = () => {
    ///

    const [inputValue, setInputValue] = useState("");

    const [allInput, setAllInput] = useState([{notiz:"Hier erscheint Ihre Aufgabe",id:151651321531, date:"2022-03-01", prio:1 }])
    const [date, setDate] = useState("");  // Diese Variable greift das Datum der Aufgabe ab. In der Form ist das Datum als required deklariert. Somit soll verhindert werden, dass beim rendern kein Wert vorhanden ist und es bricht
    const [prio, setPrio] = useState("");// Diese Variable greift die Prio der Aufgabe ab. In der Form ist das Datum als required deklariert. Somit soll verhindert werden, dass beim rendern kein Wert vorhanden ist und es bricht
    const [checkbox, setCheckbox] = useState("");


    const getInputValue = (e) =>{

        setInputValue(e.target.value);
       
    }

    const getDate = (e) => {
        setDate(e.target.value); 
    }

    const getPrio = (e) => {

        setPrio(parseInt(e.target.value));

    }

    const getChecked = (e) => {
        setCheckbox(e.target.value);

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

    



  return (
    <>
        <div className="containercontainercontainercontainer" >
            <div className="containercontainercontainer"> 
                <div className="containerforheadline"><h1> TO DO ´S</h1></div>
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
                <AllTasks allInput={allInput} handleDelete={handleDelete} checkbox={checkbox} getChecked={getChecked}  />
                
                </div>
            </div>
        </div>

    </>
  )
}

export default ToDo;