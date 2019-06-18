import React, { Component } from "react";
import { Route, Redirect } from "react-router";

export default class LogIn extends Component {
  logIn = e => {
    e.preventDefault();
    let username = e.target.username.value;
    let password = e.target.password.value;
    //console logs
    console.log(username);
    console.log(password);
    fetch("https://prestige-group-api.herokuapp.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        investor: {
          username: username,
          password: password
        }
      })
    })
      .then(r => r.json())
      .then(r => localStorage.setItem("jwt", r.jwt))
      .then(_ => this.props.history.push("/portfolio"));
  };

  render() {
    return (
      <div>
        <h1 align="center">Partner Log In</h1>
        <hr />
        <br />
        <div
          style={{
            width: "600px",
            margin: "auto"
          }}
          className="form-container"
        >
          <form onSubmit={this.logIn}>
            <div>
              <div className="input-field col s6">
                <input id="username" type="text" className="validate" />
                <label htmlFor="username">Username</label>
              </div>
              <div className="input-field col s5">
                <input id="password" type="password" className="validate" />
                <label htmlFor="password">Password</label>
              </div>
              <div className="center">
                <button type="submit" className="btn teal darken-4 hoverable">
                  Log In
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
