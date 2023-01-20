import React from "react";
import "../css/dashcard.css";
import remove_icon from "../images/remove_icon.png"


const Dashcard = (props) => {

     

    return ( 
        <div className='cardItem'>
            
            <div className="cardData">
                <img src={remove_icon} alt="remove"/>
                <label><em>{props.title}</em></label>
                <p>${props.price}</p>
                <p>Quantity: {props.quantity}</p>
                <quote>Discount {props.discount}%</quote>
                
            </div>
           
        </div>
     );
}
 
export default Dashcard;