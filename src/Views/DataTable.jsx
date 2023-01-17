
import React from 'react';
import { useEffect, useState } from 'react';
import "../css/DataTable.css";

const DataTable = () => {
    return ( 
            <div className='table_wrapper'>
                    <table>
                    <caption>Statement Summary</caption>
                        <thead>
                            <th>Name</th>
                            <th>Email</th>
                            <th>UserType</th>
                            <th>Joined</th>
                            <th>Status</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>James Dalwin</td>
                                <td>jamesdalwin@gmail.com</td>
                                <td>Admin</td>
                                <td>Yes</td>
                                <td><button class="button-65">Approved</button></td>
                            </tr>
                            <tr>
                                <td>James Dalwin</td>
                                <td>jamesdalwin@gmail.com</td>
                                <td>Admin</td>
                                <td>Yes</td>
                                <td><button class="button-65" >Approved</button></td>
                            </tr>
                            <tr>
                                <td>James Dalwin</td>
                                <td>jamesdalwin@gmail.com</td>
                                <td>Admin</td>
                                <td>Yes</td>
                                <td><button class="button-65" >Approved</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
     );
}
 
export default DataTable;