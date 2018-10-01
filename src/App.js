import React, { Component } from "react";
import NavBar from "./Components/NavBar";
import Contact from "./Components/Contact";
import Portfolio from "./Components/Portfolio";
import LogIn from "./Components/LogIn";
import News from "./Components/News";
import Home from "./Components/Home";
import SignUp from "./Components/SignUp";
import { BrowserRouter, Route } from "react-router-dom";

class App extends Component {
  constructor() {
    super();

    this.state = {
      loggedInUser: null
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
            <Route exact path="/news" component={News} />
            <Route exact path="/login" component={LogIn} />
            <Route exact path="/signup" component={SignUp} />
            <Route
              exact
              path="/portfolio"
              loggedInUser={this.state.loggedInUser}
              component={Portfolio}
            />
          </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
