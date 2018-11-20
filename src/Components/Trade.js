import React, { Component } from "react";
import { Row, Autocomplete, Input } from "react-materialize";

export default class Trade extends Component {
  constructor() {
    super();
    this.state = {
      stocks: null
    };
  }

  componentDidMount() {
    this.fetchStocks();
  }

  fetchStocks() {
    //console.log(this.state)
    fetch("https://prestige-group-api.herokuapp.com/stocks", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`
      }
    })
      .then(stockData => stockData.json())
      .then(stocks => this.storeSymbols(stocks));
  }

  storeSymbols = stocks => {
    let symbols = {};
    stocks.data.forEach(stock => {
      symbols[stock.attributes.symbol] = null;
    });
    this.setState({ stocks: symbols });
  };

  render() {
    return (
      <div className="container" align="center">
        <br />
        <h1>Execute Trade</h1>
        <br />
        <Row>
          <Autocomplete
            className="col s12"
            title="Company Symbol"
            data={this.state.stocks}
          />
          <br />
          <Row>
            <Input s={12} type="select" label="Buy/Sell" defaultValue="1">
              <option value="1">Please choose one</option>
              <option value="buy">Buy</option>
              <option value="sell">Sell</option>
            </Input>
          </Row>
          <Row>
            <Input s={6} label="Shares" type="number" />
            <Input s={6} label="Price" type="number" />
          </Row>
          <button type="submit" className="btn teal darken-4 hoverable">
            Execute
          </button>
        </Row>
      </div>
    );
  }
}
