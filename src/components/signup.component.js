import React, { Component } from "react";
import ReactDOM from 'react-dom'

export default class SignUp extends Component {

    onSignUp=()=>{
        let User={
            username:this.refs.username.value,
            password:this.refs.password,
            Name:this.refs.name.nodeValue


        };
        fetch('./api/users' , {
            method: 'POST',
            headers: {'Conetent-type' : 'application/json'},
        body:JSON.stringify(User)
    }).then(r=>r.json()).then(res=>{
        if(res){
            this.setState({message: 'New user created Successfully'});
        }
    })

    }
    render() {
        return (
            <form>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" placeholder="First name" ref="name"/>
                </div>

                <div className="form-group">
                    <label>username</label>
                    <input type="text" className="form-control" placeholder="Last name" ref="username" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" ref="password" />
                </div>

                <button onClick={this.onSignUp} type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="#">sign in?</a>
                
                </p>
               
      
            </form>
        );
    }
}