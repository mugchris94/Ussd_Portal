
import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import "../css/DataTable.css";

const DataTable = () => {
    
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        axios.get('https://dummyjson.com/users')
                .then((response) =>{
                    return response.data
                })
                .then(res => {
                    const items = res.users;
                    if(items.length = 5){
                        setUsers(items);
                    }
                    
                })
                .catch((error) =>{
                    console.log(error);
                })
    },[])

    const datas = users.map((user) =>{
        return(
            <tr>
                <td>{user.id}</td>
                <td>{user.firstName + user.lastName}</td>
                <td>{user.gender}</td>
                <td>{user.email}</td>
                <td>{user.birthDate}</td>
                <td>{user.phone}</td>
                <td><button class="button-65">{user.domain}</button></td>
        </tr>
        )
    } )
    return ( 
            <div className='table_wrapper'>
                    <table>
                        <caption>Standard Table Design</caption>
                        <thead>
                            <th>UserId</th>
                            <th>FullName</th>
                            <th>Gender</th>
                            <th>Email</th>
                            <th>Birthdate</th>
                            <th>Phone</th>
                            <th>Domain</th>
                        </thead>
                        <tbody>
                           
                           {datas}
                            
                        </tbody>
                    </table>
                </div>
     );
}
 
export default DataTable;