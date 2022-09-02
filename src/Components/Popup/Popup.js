import "../Popup/Popup.css";

export const PopUp = (props) => {

     const description =  props.description;

     const handleclick = () => {


     }


return( 
    <div>  
    <div onClick={handleclick} className="description" >{description}</div>
    </div>
)


}