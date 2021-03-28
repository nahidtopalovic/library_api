import React, { Component, BrowserRouter as Router, Switch, Route, Link  } from "react";
import Resetpw from "./forgotpw.component";


export default class Login extends Component {
    onSignUp=()=>{
        let User={
            username:this.refs.username.value,
            password:this.refs.password,
 
        };
        fetch('./api/login' , {
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
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>username</label>
                    <input type="username" className="form-control" placeholder="Enter username" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                <p className="forgot-password text-right">
                Forgot <a href="/reset-password"> Password </a>
        

           
                     
                </p>
            </form>
            
            
          
        );
    }
}



