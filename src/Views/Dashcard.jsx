import React from "react";
import "../css/dashcard.css";
const Dashcard = (props) => {
    return ( 
        <div className='cardItem'>
            <img src='https://www.newsbtc.com/wp-content/uploads/2020/06/mesut-kaya-LcCdl__-kO0-unsplash-scaled.jpg' alt='cardItem'/>
            <div className="cardData">
                <label>Stock Total</label>
                <p>$150,000</p>
                <quote>Increased by 60%</quote>
            </div>
           
        </div>
     );
}
 
export default Dashcard;