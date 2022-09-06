import React from 'react';
import "../Components/AllTasks.css";

export const AllTasks = ({ allInput, handleDelete, childReRender }) => {

        

       

        return (
              
                <>
                
                <div className="containerfortheoutput"  id={childReRender} >{allInput?.map((prev, key) => {
                        

                        return ( 
                        
                               
                                        <div key={key} id={childReRender} className="parentfortheoutput" >
                                                <div className="containerfortheoutputtext"  >{prev?.notiz}</div>
                                                <div className="containerfortheoutputdate" >{prev?.date} </div>
                                                <div className="containerfortheoutputprio"  > {prev?.prio} </div>
                                                <button className="buttonfordelete" onClick={handleDelete} id={prev.id} > Delete </button>
                                        </div>
                                
                                )


                                
                           })}
                            
                </div>        
                       </> )

                    }

                    export default AllTasks;

                