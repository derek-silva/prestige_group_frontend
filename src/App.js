import React, { Component } from "react";
import NavBar from "./Components/NavBar";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Portfolio from "./Components/Portfolio";
import News from "./Components/News";
import Home from "./Components/Home";
import "./App.css";
import { BrowserRouter, Route, Link } from "react-router-dom";

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
            <NavBar />
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/news" component={News} />
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
