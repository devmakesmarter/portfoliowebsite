import React from 'react';
import "../Components/AllTasks.css";

export const AllTasks = ({ allInput, handleDelete }) => {


        return ( <div>
                <div>{allInput?.map((prev, key) => {
                            return <div onClick={handleDelete}id={prev?.id} key={key}> {prev?.notiz} {prev.date} {prev.prio} </div>})}</div>        
                       </div> )

                    }

                    export default AllTasks;