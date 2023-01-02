import logo from './logo.svg';
import './App.css';
import {Link, Route, Routes, Switch} from "react-router-dom";
import React from "react";
import {myBlogs} from "./myBlogs"
import NewContact from "./NewContact";
import ListAllBlogs from "./ListAllBlogs";
import NewBlog from "./NewBlog";
import Home from "./Home";

class Blogs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mytab:myBlogs
        };


    }
    render() {
        return (

            <header className="App-header">
                <h1>Blog </h1>




                <Link to="/Blogs/NewBlog"><button>Add Blog</button></Link>
                <Link to="/Blogs/ListAllBlogs"><button>Display All Blogs</button></Link>
                <Link to="/*"><button>Home</button></Link>





                <Routes>
                    <Route path="/NewBlog/*" element={<NewBlog/>}/>
                    <Route path="/ListAllBlogs/*" element={<ListAllBlogs/>}/>
                    <Route path="/Home/*" element={<Home />} />


                </Routes>


            </header>
        );
    }

}

export default Blogs;