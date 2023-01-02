import logo from './logo.svg';
import './App.css';
import {Link, Route, Routes, Switch} from "react-router-dom";
import React from "react";
import {myBlogs} from "./myBlogs"

class ListAllBlogs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            blogtab:myBlogs
        };


    }
    render() {
        var newtab = this.state.blogtab.map  ((e) =>  <tr>
            <td>{e.subject}</td>
            <td>{e.description}</td>
            <td>{e.date.getDate() + "/" + (e.date.getMonth()+1) + "/" + e.date.getFullYear() }</td>
        </tr>   )
        return (

            <div>
                <h1>Blogs list </h1>




                <center>
                    <table>
                        <tr>
                            <th>Subject</th>
                            <th>Description</th>
                            <th>Date Posted</th>
                        </tr>
                        {newtab}
                    </table>
                </center>








            </div>
        );
    }

}

export default ListAllBlogs;












