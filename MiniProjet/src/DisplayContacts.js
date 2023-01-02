import logo from './logo.svg';
import './App.css';
import {Link, Route, Routes, Switch} from "react-router-dom";
import React from "react";
import {myContacts} from "./myContacts"
import Blogs from "./Blogs";
import NewContact from "./NewContact";

class DisplayContacts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mytab:myContacts
        };


    }
    render() {
        var newtab = this.state.mytab.map  ((e,i) =>  <tr>
            <td>{e.name}</td>
            <td>{e.email}</td>
            <td>{e.address}</td>
            <td>{e.phoneNo}</td>
        </tr>   )
        return (

            <div>
                <h1>Contacts list </h1>




                <center>
                    <table>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Phone Number</th>
                        </tr>
                        {newtab}
                    </table>
                </center>








            </div>
        );
    }

}

export default DisplayContacts;












