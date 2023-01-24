import React from "react";
import profile from '../images/profile.jpg';
import "../css/updates.css";

const Updates = () => {
    return ( 
        <div className='update_wrapper'>
                <div className='update_card1'>
                    <img src={profile} alt="profile" className="update_pic"/>
                    
                    <ul className="detail">
                        <li className='active'>Christian Mugisha</li>
                        <li>Lead Software Developer</li>
                    </ul>
                </div>
                <div className='update_card2'>
                   <img src={profile} alt="profile" className="update_pic"/>
                    
                    <ul className="detail">
                        <li className='active'>Christian Mugisha</li>
                        <li>Lead Software Developer</li>
                    </ul>
                </div>
            </div>
     );
}
 
export default Updates;