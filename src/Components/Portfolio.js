import React, { Component } from "react";
import { Table, Tabs, Tab } from "react-materialize";
import Chart from "./Chart";
import BarGraph from "./BarGraph";
import CustomizedTable from "./Table";

export default class Portfolio extends Component {
  constructor() {
    super();
    this.state = {
      aum: 0,
      aumdollar: "",
      growthytd: 0,
      stocks: [],
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
      .then(r => this.setBarData())
      .then(r => this.fetchStocks());
  }

  componentDidMount() {
    this.fetchHoldings();
  }

  fetchStocks() {
    //console.log(this.state)
    fetch("http://localhost:3000/stocks")
      .then(stockData => stockData.json())
      .then(stocks => this.setState({ stocks: stocks }))
      .then(r => this.calculateGrowth());
  }

  calculateGrowth() {
    //console.log(this.state.stocks);
    let buyinamount = 0;
    this.state.stocks.data.forEach(stock => {
      buyinamount += stock.attributes["buy-in-price"] * stock.attributes.shares;
    });
    let growthytd = ((this.state.aum - buyinamount) / buyinamount) * 100;
    this.setState({ growthytd: parseFloat(growthytd).toFixed(2) });
  }

  totalHoldings() {
    let sum = 0;

    this.state.chartData.datasets[0].data.forEach(
      holdingString => (sum += parseFloat(holdingString))
    );
    this.setState({
      aum: sum,
      aumdollar: sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    });
    //console.log(this.state);
    //return sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  setChartData() {
    const { chartData } = this.state;
    //console.log(this.state);
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
        <h1>Prestige Portfolio</h1>
        <hr />
        <CustomizedTable stocks={this.state.stocks}/>
        <div class="container">
          <div className="card-large hoverable">
            <h3>Assets Under Management: ${this.state.aumdollar}</h3>
            <h5>Growth Ytd: {this.state.growthytd}%</h5>
          </div>

          <Chart chartData={this.state.chartData} legendPosition="top" />
          <br />
          <br />

          <Tabs className="tab-demo z-depth-1" title="Holdings">
            <Tab title="Viking" active>
              <BarGraph
                barData={this.state.barData.viking}
                legendPosition="top"
              />
            </Tab>
            <Tab title="Vanderbilt">
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
        {/*end of container*/}
      </div>
    );
  }
}
