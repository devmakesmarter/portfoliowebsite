import React, { useState, useEffect } from "react";
import  ReactDOM,{flushSync} from 'react-dom';
import "../Quizapp/Quiz.css";
import {Questions} from "./Data";


 export const Quizapp = () => {

    //
    /* Das Quiz besteht aus mehreren Elementen.     
    
        1. einem Array mit Objekten welches in der Data.js gelagert ist. Die Data.js ist wie folgt aufgebaut. Eine Frage mit zwei Antwortmöglichkeiten. 
           Es gibt jeweils die Antwort und ein Value für die Antwort. Bei der richtigen Antwort ist das Value true. 


        2. Einem Array rightAnswer. Hier wird immer der Specialkey der Frage platziert, wenn Sie beantwortet wurde. Es gibt eine Filter Funktion für 
           die const arrayAsibil. arrayAskibil nimmt alles aus dem Data.js außer die die schon beantwortet wurden. 
           
        3. const number generiert immer eine randomisierte Nummer. Sie orientiert sich dabei immer an der Länge des arrayAskibil. Somit wird gewährleistet, 
           dass keine Nummer kommt, die in dem Array nicht vorhanden ist. 
    */

    // hier kommt der Specialkey der richtig beantworteten Fragen hin
    const [rightAnswer, setrightAnswer ] = useState([]);

    // arrayAskibil sind alle Fragen die in Questions enthalten sind, gefiltert um die schon richtig beantwortet wurden 
    const [arrayAskibil, setArrayAskibil] = useState(Questions.filter(prev => !rightAnswer.includes(prev.SpecialKey)));

    // number generiert sich aus der Länge des Array´s und soll gewährleisten, dass random Nummern kommen 
    const [number, setNumber] = useState(Math.floor(Math.random() * (arrayAskibil.length-1)));
    // score und historicScore sind der jeweilige Punktestand
    const [score, setScore] = useState(0);

    const [historicScore, setHistoricScore] = useState([]);

   // Diese Variable sorgt für den Quizstart 
   const [vorBeginn, setVorBeginn] = useState(false);

    // Das ist der Countdownmechanismus
    const [countdown, setCountdown] = useState(20);

    // Dies Variable entscheidet, ob der Countdownaktiviert werden soll. 

    const [shouldCountdownStart, setShouldCountdownStart] = useState(false);




    useEffect(() => {

        if(shouldCountdownStart === true){
        var runCounter = () =>{
            setCountdown((prev) => prev -1 )
        } 
        };

         const myInterval = setInterval(runCounter, 1000)

        // hier wird der Interval returnt, damit es nicht unendlich wird. 
        return() => {
        clearInterval(myInterval);
        }

        },[vorBeginn,shouldCountdownStart]);
   
    useEffect(() => {
        if(arrayAskibil.length === 0){
            setShouldCountdownStart(false);
        };
        },[arrayAskibil.length]);

    useEffect(() =>{
        setArrayAskibil(Questions.filter(prev => !rightAnswer.includes(prev.SpecialKey)));
        return () => {
            setArrayAskibil(Questions.filter(prev => !rightAnswer.includes(prev.SpecialKey)));
        }
        },[rightAnswer]);




    // bei handleClick ist es wichtig, dass arrayAskibil.length >= 0, immer gleich oder größer null ist.  Wenn man statt der 0 eine Eins nimmt, geht das ganze nicht auf. 
    const handleClick = (e) => {
    const value = e.target.value; 
    const key = e.target.title;
   

    // hier wird geprüft, ob die Antwort richtig ist
    if(value === "true" && arrayAskibil.length >= 0){
   setrightAnswer((prev) => (
    [...prev,parseInt(key) ]
   ))
   setNumber(Math.floor(Math.random() * (arrayAskibil.length-1)));
   setScore((prev) => (prev + 10));
   setCountdown(20);

}

else if(value === "false"){

    setScore((prev) => (prev - 10));
    setNumber(Math.floor(Math.random() * (arrayAskibil.length-1)));
    setrightAnswer((prev) => (
        [...prev,parseInt(key) ]
       ))
}
 }

// Durch useEffect wird gewährleistet, dass immer wenn eine Frage beantwortet wird, dass Array neu sortiert wird. Bevor es in separiert wurde in useEffect, 
// kamen einige Fragen doppelt vor. Es wurd enicht gewährleistet, dass jede Frage nur einmal vorkommt. 


 const handlehistoricScore = () => {
    setHistoricScore((prev) => ( 
    [...prev, score]
))
}


 
// arrayAskibil.length darf nicht -1 sonst kommen negative Zahlen und das Programm crasht. 
const handleRestart = () => {
    setrightAnswer([]);
    setArrayAskibil(Questions);
    setNumber(Math.floor(Math.random() * (arrayAskibil.length)));
    setScore(0);
    setCountdown(20);

      setShouldCountdownStart(true);
}

// Dieses if sorgt dafür, dass wenn der Countdown abläuft, der Spieler einen Punkt abgezogen bekommt.
if(countdown === 0){
    setScore((prev) => (prev - 1));
    setCountdown(20);
    };


const quizConti = 
    // hier arbeite ich mit eine Tenary Operator. Wenn es keine Fragen mehr gibt, dann kommt das Feld mit dem Punktestand. Sonst die Fragen. 
<div>
    {arrayAskibil.length === 0 ? 

    (   
    <div className="quizborderborder" >   
        <div className="quizborder">
            <h1>Herzlichen Glückwunsch Sie haben folgenden Punktestand erreicht:<br>
            </br> {score}</h1>
            <h3>Alle Fragen sind vorbei</h3>
            <button  className="button" onClick={handleRestart}>Neustart</button>
            <button  className="button" onClick={handlehistoricScore}>Punktestand speichern</button>
            <div>
            <h1>Ihre bisher erreichen Punktestände sind wie folgt:</h1>
            {/* der historische Punktestand ist im histroicScore gespeichert*/}
            {historicScore.map((prev,key)=>{
             return <h2 key={key}> Ihr Ergebnis in Runde {key + 1} ist {prev}</h2>
                } )}
            </div>
        </div>
    </div>  
     )  

     :
    // Die Klammern sind wichtig, wenn JSX gerendert werden soll...
    (
    <div>     
     <div className="quizborderborder" >
        <div className="quizborder">
        <h1 id="counter" className={countdown >= 11 ? "testb" : "testa"} >Verbleibende Zeit<br></br> {countdown}</h1>
        <h1>Ihr aktueller Punktestand ist: <br></br> {score}</h1>
        <h3>{arrayAskibil[number].Question}</h3>
        <button value={arrayAskibil[number].AnswerOneValue} className="button" title={arrayAskibil[number].SpecialKey}  onClick={handleClick}  >{arrayAskibil[number].AnswerOne}  </button>
        <button value={arrayAskibil[number].AnswerTwoValue} className="button" title={arrayAskibil[number].SpecialKey}  onClick={handleClick}   >{arrayAskibil[number].AnswerTwo}</button>
        </div>
     </div>
    </div>
    )  
    }
</div>;


// Diese Variable bestimmt beim Quiz, dass erstmal ein Startbutton gedrückt werden muss 
// Wenn vorBeginn false ist wird der Start Button angezeigt, wenn vorbeginn true ist, dann geht es los
        
const handleStart = () => {
       setVorBeginn(true);
       setShouldCountdownStart(true);
    }

 const startContent =  

 <div className="projektdescription" >
    <h1>Bitte drücken Sie Start</h1>
    
    <button className="button" onClick={handleStart}  >Start</button>
</div>

return (
        <div> {vorBeginn === false ?  startContent :  quizConti  } </div>  
       )
}