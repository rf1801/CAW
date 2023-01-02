import logo from './logo.svg';
import './App.css';
import {Link, Route, Router, Routes, Switch} from "react-router-dom";
import React from "react";
import Contacts from "./Contacts"
import Blogs from "./Blogs"

class Home extends React.Component {

    render() {
        return (

            <div className="Home">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />




                    <p>
                        Welcome to Bensam Abderraouf & Assadi Youcef Page
                    </p>
                    <p>Go to <Link to="Contacts/*" >contacts</Link> page</p>
                    <p>Go to <Link to="Blogs/*" >Blogs</Link> page</p>

                </header>



                <Routes>

                    <Route path="Blogs/*" element={<Blogs />} />
                    <Route path="Contacts/*" element={<Contacts />} />

                </Routes>

            </div>



        );
    }
}

export default Home;






