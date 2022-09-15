import {React, useState, useEffect, useReducer} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../UseReducer/useRed.css";
import { Container, Row, Col, Carousel,Nav, Button,Navbar,NavDropdown, Card } from 'react-bootstrap';


    const ACTIONS = { ADD_TODO: "add-todo" }

    const reducer = (todo, action) => {
        switch(action.type){
            case ACTIONS.ADD_TODO :
            return[...todo, newTodo(action?.payload?.name)]
        }
      
                     }

    const newTodo = (name) => {
        return {id: Date.now(), name: name, complete: false}

    }

export const UseRed = () => {


    
    const [name, setName] = useState("");
    const [todo, dispatch] = useReducer(reducer, []);

    console.log(todo);


    const handleSubmit = (e) => {
       e.preventDefault();

       dispatch({type: ACTIONS.ADD_TODO, payload:{name: name}})
       setName("");

    }
  


  return (
    <>

        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={e => setName(e.target.value)} /> 

        </form>
  
    </>
  )
}

