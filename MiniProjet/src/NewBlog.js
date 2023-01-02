import React from "react";
import {myBlogs} from "./myBlogs";

class NewBlog extends React.Component {



    constructor(props){
        super(props)
        this.state = { subject:'', description:'',date:'',tab:myBlogs}
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }


    handleSubmit(event){
        const { subject, description, date } = this.state
        myBlogs.push({
            subject:this.state.subject ,
            description: this.state.description,
            date: new Date()
        })
        alert("blog posted")
        event.preventDefault()

    }


    handleChange(event){
        this.setState({
            [event.target.name] : event.target.value
        })
    }


    render(){



        return(
            <div>
                <h2> Note :blog date will be saved as current date</h2>
                <form onSubmit={this.handleSubmit}>

                    <div>
                        <label htmlFor='subject'>subject</label>
                        <input
                            name='subject'
                            placeholder='subject'
                            value={this.state.subject}
                            onChange={this.handleChange}
                        />
                    </div>


                    <div>
                        <label htmlFor='description'>description</label>
                        <input
                            name='description'
                            placeholder='description'
                            value={this.state.description}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <button>Post blog</button>
                    </div>
                </form>
            </div>
        )
    }

}
export default NewBlog