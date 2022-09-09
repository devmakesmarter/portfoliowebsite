import React from 'react';
import "./ProjektSeparator.css";

export  const ProjektSeparator = ({head, description, project}) => {


 




  return (


    <>

<div class="wrapperofallwrapper">
    <div class="wrapperofall">
      <div class="headsection">
      <div class="wrapperforprojectnumber">{head}
      </div>
      <div class="wrapperforprojectdescription">{description}
      </div>
      </div>
      <div class="wrapperforcontent">{project}
      </div>
    </div>
</div>
    
    
    
    

    </>









  

  
  )
}

export default ProjektSeparator;


  //   <div>
  //   <div className="aaprojektdescription"  >
  //                   <h1>{head}</h1>
  //                   <p>{description}</p>
  
  // </div>
  //   <div>{project} </div>
  // </div>
