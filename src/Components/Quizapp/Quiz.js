import React, { useState, useEffect } from "react";
import "../Quizapp/Quiz.css";
import {Questions} from "./Data";

 export const Quizapp = () => {

    // hier kommt der Specialkey der richtig beantworteten Fragen hin
    const [rightAnswer, setrightAnswer ] = useState([]);

    // arrayAskibil sind alle Fragen die in Questions enthalten sind, gefiltert um die schon richtig beantwortet wurden 
    const [arrayAskibil, setArrayAskibil] = useState(Questions.filter(prev => !rightAnswer.includes(prev.SpecialKey)));
    

    // number generiert sich aus der Länge des Array´s und soll gewährleisten, dass random Nummern kommen 
    const [number, setNumber] = useState(Math.floor(Math.random() * (arrayAskibil.length-1)));


    const [score, setScore] = useState(0);

    const [historicScore, setHistoricScore] = useState([]);

    const checkEnd = arrayAskibil.length === 0;


    
 const handleClick = (e) => {
    const value = e.target.value; 
    const key = e.target.title;
    const ul = score;

    if(value === "true" && arrayAskibil.length >= 0){

   setrightAnswer((prev) => (
    [...prev,parseInt(key) ]
   ))

   
  
   setNumber(Math.floor(Math.random() * (arrayAskibil.length-1)));
   
   setScore((prev) => (prev + 10));

   
}

else if(value === "false"){

    alert("Leider ist die Antwort falsch Sie verlieren leider 10 Punkte");

    setScore((prev) => (prev - 10));
    setNumber(Math.floor(Math.random() * (arrayAskibil.length-1)));
    setrightAnswer((prev) => (
        [...prev,parseInt(key) ]
       ))
}
 }


 useEffect(() =>{

    setArrayAskibil(Questions.filter(prev => !rightAnswer.includes(prev.SpecialKey)));

 },[rightAnswer]);


 const handlehistoricScore = () => {

    setHistoricScore((prev) => ( 

    [...prev, score]
)

)



 }


 

const handleRestart = () => {

    setrightAnswer([]);
    setArrayAskibil(Questions.filter(prev => !rightAnswer.includes(prev.SpecialKey)));
    setNumber(Math.floor(Math.random() * (arrayAskibil.length)));
    setScore(0);

}

console.log("Hi, schön dass Sie meine Website besuchen. ")



/*

{historicScore.map((prev)=>{

      return <h2> Ihr Ergebnis in Runde ist{prev}  </h2>
} )}

*/

return (

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
                    {historicScore.map((prev,key)=>{

             return <h2 key={key}> Ihr Ergebnis in Runde {key + 1} ist {prev}  </h2>
             } )}
                </div>
                
            </div>
            </div>  
             )  

             :
        (
        <div>     


        <div className="projektdescription">
            <h1>Projektbeschreibung</h1>
            <p>Es handelt sich hierbei um ein Quiz welches ich selbst programmiert habe. Es ist mit dem Framework React.js programmiert. Ich vewende UseState und UseEffect Hook´s.  </p>
        </div>

        <div className="quizborderborder"id="Projektbeginn" >

        <div className="quizborder">
            <h1>Ihr aktueller Punktestand ist: <br></br> {score}</h1>
            <h3>{arrayAskibil[number].Question}</h3>
            <button value={arrayAskibil[number].AnswerOneValue} className="button" title={arrayAskibil[number].SpecialKey}  onClick={handleClick}  >{arrayAskibil[number].AnswerOne}  </button>

            <button value={arrayAskibil[number].AnswerTwoValue} className="button" title={arrayAskibil[number].SpecialKey}  onClick={handleClick}   >{arrayAskibil[number].AnswerTwo}</button>
            
        </div>
        </div>
        </div>
        )  

                }

    </div>
)



}