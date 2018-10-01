import React, { Component } from "react";

export default class Portfolio extends Component {
  constructor() {
    super();
    this.state = {
      holdings: []
    };
  }

  fetchHoldings() {
    fetch("http://localhost:3001/holdings")
      .then(holdingsData => holdingsData.json())
      .then(h => this.setState({ holdings: h }));
  }

  componentDidMount() {
    this.fetchHoldings();
  }

  render() {
    return (
      <div>
        <h1 align="center">Portfolio</h1>
      </div>
    );
  }
}
