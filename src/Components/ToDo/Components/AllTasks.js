import React from 'react';
import "../Components/AllTasks.css";

export const AllTasks = ({ allInput, handleDelete }) => {


        return (
                
                <>
                <div className="containerfortheoutput">{allInput?.map((prev, key) => {
                        
                        return ( 
                        
                               
                                <div key={key} className="parentfortheoutput" >
                                <div className="containerforcheckbox" >   <input className="checkbox" type="checkbox"></input> </div>
                                <div className="containerfortheoutputtext" >{prev?.notiz}</div>
                                <div className="containerfortheoutputdate" >{prev?.date} </div>
                                <div className="containerfortheoutputprio" > {prev?.prio} </div>
                                <button className="buttonfordelete" onClick={handleDelete} id={prev.id} key={key} > Delete </button>
                                </div>
                                
                                )


                                
                           })}
                            
                </div>        
                       </> )

                    }

                    export default AllTasks;

                    // <div onClick={handleDelete}id={prev?.id} key={key}> {prev?.notiz} {prev.date} {prev.prio} </div>})}