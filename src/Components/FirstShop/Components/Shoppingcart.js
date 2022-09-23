import { Container, Row, Col, Carousel,Nav, Button,Navbar,NavDropdown, Card } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import shoppingcarticon from "../Components/Media/216477_shopping_cart_icon.png";
import "./Shoppingkart.css";



export const Shoppingcart = ({shoppingcart}) => {


      // in dieser Karte werden die gekauften Artikel addiert. Als erste werden über eine Map Funktion alle Preise in eine neues Array gemapt
      // danach wird wir mit einer Reduce funktion die ganzen Werte auf addiert somit, hat man eine Summe. 
      const allprices = shoppingcart?.map((prev) => {
      return  prev.price
      } )
      // Wichtig initialwert eingeben, sonst funktioniert reduce nicht! 
      const sum = allprices?.reduce((previos, current)=> 
      previos + current,0 )
      // Diese Varibale zeigt einen leeren Warenkorb, falls noch kein Artikel gekauft wurde 
      const shoppingcarticonsvg = <Button   className="btn btn-warning btn-lg btn-block w-100 "><img src={shoppingcarticon} alt="icon" className="h-10"></img></Button>;
      // Diese Variable zeigt den Gesamtpreis 
      const sumwithbutton = <Button   className="btn btn-warning btn-lg btn-block w-100  ">{`${sum} €`}</Button>;
   
    return (
      <>
      <Container id="shoppingcart543478613"> 
        <Row>
            <LinkContainer to="/shoppingoverview"> 
             {/* Ternary Operator falls schon etwas gekauft wurde, dann den Preis sonst den Korb*/}
               <Col className="font-weight-bold">{sum < 1 ? shoppingcarticonsvg : sumwithbutton } </Col>
            </LinkContainer>
        </Row>
      </Container>
      </>
    )
    
  }
  
  export default Shoppingcart;