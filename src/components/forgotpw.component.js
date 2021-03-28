import React, { Component } from "react";

export default class Resetpw extends Component {
    render() {
        return (
            <form>
                <h3>Reset Password</h3>

                <div className="form-group">
                    <label>First Name</label>
                    <input type="text" className="form-control" placeholder="First name" />
                </div>

                            <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>New Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="sign-in">sign in?</a>
                </p>
            </form>
        );
    }
}