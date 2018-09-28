import React, { Component } from "react";

export default class LogIn extends Component {
  render() {
    return (
      <div>
        <h1 align="center">Investor Log In</h1>
        <div
          style={{
            width: "600px",
            margin: "auto"
          }}
          className="form-container"
        >
          <form>
            <div>
              <div className="input-field col s6">
                <input id="email" type="text" className="validate" />
                <label htmlFor="email">Email</label>
              </div>
              <div className="input-field col s5">
                <input id="password" type="password" className="validate" />
                <label htmlFor="password">Password</label>
              </div>
              <div className="center">
                <button type="submit" className="btn indigo hoverable">
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
