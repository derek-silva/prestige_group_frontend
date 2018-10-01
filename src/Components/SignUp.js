import React, { Component } from "react";

export default class SignUp extends Component {
  render() {
    return (
      <div>
        <h1 align="center">Investor Sign Up</h1>
        <div
          style={{
            width: "750px",
            margin: "auto"
          }}
          className="form-container"
        >
          <form>
            <div>
              <div className="input-field col s6">
                <input
                  id="first-name"
                  type="text"
                  className="validate"
                  required
                />
                <label htmlFor="first-name">First Name</label>
              </div>
              <div className="input-field col s6">
                <input
                  id="last-name"
                  type="text"
                  className="validate"
                  required
                />
                <label htmlFor="last-name">Last Name</label>
              </div>
              <div className="input-field col s6">
                <input
                  id="user-name"
                  type="text"
                  className="validate"
                  required
                />
                <label htmlFor="user-name">User Name</label>
              </div>
              <div className="input-field col s6">
                <input id="email" type="text" className="validate" required />
                <label htmlFor="email">Email</label>
              </div>
              <div className="input-field col s6">
                <input
                  id="email-confirm"
                  type="text"
                  className="validate"
                  required
                />
                <label htmlFor="email-confirm">Confirm Email</label>
              </div>
              <div className="input-field col s5">
                <input
                  id="password"
                  type="password"
                  className="validate"
                  required
                />
                <label htmlFor="password">Password</label>
              </div>
              <div className="input-field col s5">
                <input
                  id="password-confirm"
                  type="password"
                  className="validate"
                  required
                />
                <label htmlFor="password-confirm">Confirm Password</label>
              </div>
              <div className="center">
                <button type="submit" className="btn teal darken-4 hoverable">
                  Sign Up
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
