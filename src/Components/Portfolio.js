import React, { Component } from "react";
import { Table, Tabs, Tab } from "react-materialize";
import Chart from "./Chart";
import BarGraph from "./BarGraph";

export default class Portfolio extends Component {
  constructor() {
    super();
    this.state = {
      aum: 0,
      chartData: {
        holdings: []
      },
      barData: {
        viking: [],
        vanderbilt: [],
        abc: [],
        xyz: []
      },
      loading: true
    };
  }

  fetchHoldings() {
    fetch("http://localhost:3000/holdings")
      .then(holdingsData => holdingsData.json())
      .then(h => this.setState({ chartData: { holdings: h } }))
      .then(r => this.setChartData())
      .then(r => this.totalHoldings())
      .then(r => this.setBarData());
  }

  componentDidMount() {
    this.fetchHoldings();
  }

  totalHoldings() {
    let sum = 0;

    this.state.chartData.datasets[0].data.forEach(
      holdingString => (sum += parseFloat(holdingString))
    );
    this.setState({
      aum: sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    });
    return sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  setChartData() {
    const { chartData } = this.state;
    // Ajax calls here
    this.setState({
      chartData: {
        labels: [
          "Technology",
          "Consumer Discretionary",
          "Healthcare",
          "Real Estate"
        ],
        datasets: [
          {
            label: "A.U.M.",
            data: [
              chartData.holdings.data[0].attributes["total-holding-assets"],
              chartData.holdings.data[1].attributes["total-holding-assets"],
              chartData.holdings.data[2].attributes["total-holding-assets"],
              chartData.holdings.data[3].attributes["total-holding-assets"]
            ],
            backgroundColor: ["#247F60", "#97FFDB", "#49FFC1", "#1D3D3C"]
          }
        ]
      },
      loading: false
    });
  }

  setBarData() {
    const { barData } = this.state;

    this.setState({
      barData: {
        viking: null,
        vanderbilt: null,
        abc: null,
        xyz: null
      }
    });
  }

  getVikingObj() {
    const { chartData } = this.state;
    let stocks = [];
    chartData.holdings.included.map(stock => {
      if (stock.sector === "Technology") {
        stocks.push(stock);
      }
    });
  }

  getVanderbiltObj() {}

  getAbcObj() {}

  getXyzObj() {}

  render() {
    if (this.state.loading) {
      return <div>Loading...</div>;
    }

    return (
      <div align="center">
        <h1>Portfolio</h1>
        <hr />
        <div className="card-large hoverable">
          <h3>Assets Under Management: ${this.state.aum}</h3>
        </div>
        <Chart chartData={this.state.chartData} legendPosition="top" />
        <br />
        <br />
        <Tabs className="tab-demo z-depth-1" title="Holdings">
          <Tab title="Viking">
            <BarGraph
              barData={this.state.barData.viking}
              legendPosition="top"
            />
          </Tab>
          <Tab title="Vanderbilt" active>
            <BarGraph
              barData={this.state.barData.vanderbilt}
              legendPosition="top"
            />
          </Tab>
          <Tab title="ABC">
            <BarGraph barData={this.state.barData.abc} legendPosition="top" />
          </Tab>
          <Tab title="XYZ">
            <BarGraph barData={this.state.barData.xyz} legendPosition="top" />
          </Tab>
        </Tabs>
      </div>
    );
  }
}
