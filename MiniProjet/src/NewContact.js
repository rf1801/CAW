import React from "react";
import {myContacts} from "./myContacts";

class NewContact extends React.Component {



    constructor(props){
        super(props)
        this.state = { email:'',name:'', address:'',phoneNo:'',tab:myContacts}
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }


    handleSubmit(event){
        const { name, email, address, phoneNo } = this.state
        myContacts.push({
            name:this.state.name ,
            email: this.state.email ,
            address: this.state.address,
            phoneNo: this.state.phoneNo
        })
        alert("contact added")
        event.preventDefault()

    }


    handleChange(event){
        this.setState({
            [event.target.name] : event.target.value
        })
    }


    render(){

        var newtab = this.state.tab.map  ((e,i) =>  <li >{e}</li>)

        return(
            <div>
                <form onSubmit={this.handleSubmit}>

                    <div>
                        <label htmlFor='name'>Name</label>
                        <input
                            name='name'
                            placeholder='Name'
                            value={this.state.name}
                            onChange={this.handleChange}
                        />
                    </div>

                    <div>
                        <label htmlFor='email'>Email</label>
                        <input
                            name='email'
                            placeholder='Email'
                            value = {this.state.email}
                            onChange={this.handleChange}
                        />
                    </div>


                    <div>
                        <label htmlFor='address'>Address</label>
                        <input
                            name='address'
                            placeholder='Address'
                            value={this.state.address}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor='phoneNo'>Phone Number</label>
                        <input
                            name='phoneNo'
                            placeholder='Phone No'
                            value={this.state.phoneNo}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <button>Create Contact</button>
                    </div>
                </form>
            </div>
        )
    }

}
export default NewContact