import logo from './logo.svg';
import './App.css';
import {Link, Route, Routes, Switch} from "react-router-dom";
import React from "react";
import NewContact from "./NewContact";
import DisplayContacts from "./DisplayContacts";
import Home from "./Home";

class Contacts extends React.Component {
    render() {
        return (

            <header className="App-header">
                <h1>Contacts </h1>



                <Link to="/Contacts/NewContact"><button>Add contact</button></Link>
                <Link to="/Contacts/DisplayContacts"><button>Display contacts</button></Link>
                <Link to="/*"><button>Home</button></Link>





                <Routes>
                    <Route path="/NewContact/*" element={<NewContact/>}/>
                    <Route path="/DisplayContacts/*" element={<DisplayContacts/>}/>
                    <Route path="/Home/*" element={<Home />} />


                </Routes>


            </header>
        );
    }

}

export default Contacts;












