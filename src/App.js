import React, { Component } from "react";
import NavBar from "./Components/NavBar";
import Contact from "./Components/Contact";
import Portfolio from "./Components/Portfolio";
import Trade from "./Components/Trade";
import LogIn from "./Components/LogIn";
import News from "./Components/News";
import Home from "./Components/Home";
import SignUp from "./Components/SignUp";
import LogOut from "./Components/LogOut";
import { BrowserRouter, Route } from "react-router-dom";

class App extends Component {
  constructor() {
    super();

    this.state = {
      loggedInUser: null,
      jwt: ""
    };
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <React.Fragment>
            <NavBar loggedInUser={this.state.loggedInUser} />
            <Route exact path="/" component={Home} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/logout" component={LogOut} />
            <Route exact path="/news" component={News} />
            <Route
              exact
              path="/login"
              component={LogIn}
              loggedInUser={this.state.loggedInUser}
            />
            <Route exact path="/signup" component={SignUp} />
            <Route
              exact
              path="/portfolio"
              loggedInUser={this.state.loggedInUser}
              component={Portfolio}
            />
            <Route
              exact
              path="/trade"
              loggedInUser={this.state.loggedInUser}
              component={Trade}
            />
          </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
