import React from 'react';
import '../css/dash.css';
import home_icon from '../images/home_icon.png';
import apps_add from '../images/apps_add.png';
import DataTable from '../Views/DataTable';


const Dashboard = () => {
    return ( 
        <div className="dash-wrapper">
            <div className="dash-nav">
                <h3>
                    BlueBoxPortal
                </h3>
                <form className="nav-form">
                    <input type="text" placeholder="search here"/>
                    <input type="submit" value="Search"/>
                </form>
                <nav>
                    <ul>
                        <li><a href='#'>Log In</a></li>
                        <li><a href='#'>Register</a></li>
                        <li><a href='#'>Contact Us</a></li>
                    </ul>
                </nav>
            </div>
            <div className="side-nav">
                <table>
                    <thead>
                        <th><td>Dashboard</td><td><img src={home_icon} alt='home_i'/></td></th>
                    </thead>
                    <tbody>
                        <tr><td>UI Elements</td> <td><img src={home_icon}/></td></tr>
                        <tr><td>Comonents</td><td><img src={apps_add} alt="app_add"/></td></tr>
                        <tr><td>Forms Stuff</td></tr>
                        <tr><td>Data Table</td></tr>
                        <tr><td>Icons</td></tr>
                        <tr><td>Sample Page</td></tr>
                        <tr><td>Extra</td></tr>
                    </tbody>

                </table>
                <form className='addProject'>
                    <input type="button" value="Add Projects" />
                </form>
            </div>

            <div className='content_wrapper'>
                <div className='card-list'>
                    <div className='cardItem'>
                        <img src='#' alt='cardItem'/>
                        <label>Stock Total</label>
                        <p>$150,000</p>

                        <quote>Increased by 60%</quote>
                    </div>
                </div>

                <DataTable />

            </div>


        </div>
     );
}
 
export default Dashboard;