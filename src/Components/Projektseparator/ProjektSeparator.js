import React from 'react';
import "./ProjektSeparator.css";

export  const ProjektSeparator = ({head, description}) => {


  return (
    <div>
    <div className="aaprojektdescription"  >
                    <h1>{head}</h1>
                    <p>{description}</p>
  
  </div>
  </div>
  )
}

export default ProjektSeparator;