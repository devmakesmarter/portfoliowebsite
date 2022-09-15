import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./ProjektSeparator.css";
import { Container, Row, Col, Carousel  } from 'react-bootstrap';
export  const ProjektSeparator = ({head, description, project}) => {


 




  return (


    <>
        <Container id="projectseparator238525">
          <Row>
            <Col className="col-3 p-1 d-flex justify-content-center align-items-center  borderforcallindiviual "><h1 className="zeropaddingandmargin34253423"  >{head} </h1></Col>
            <Col className="col-9 p-1 borderforcallindiviualtwo  "  > <p className="zeropaddingandmargin34253423"> {description} </p> </Col>
          </Row>
          <Row className="">
            <Col className="col-12 d-flex  borderforcallindiviualthree justify-content-center align-items-center "> {project} </Col>
          </Row>
        </Container>


    
    
    

    </>


       /* <div id="projectseparator238525"> 
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
  </div> */






  

  
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
