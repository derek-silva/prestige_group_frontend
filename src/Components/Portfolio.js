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
      allData: [],
      chartData: {
        holdings: []
      },
      holdingData: {
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
      .then(h => this.setState({ allData: h, chartData: { holdings: h } }))
      .then(r => this.setChartData())
      .then(r => this.totalHoldings())
      .then(r => this.setholdingData())
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

  setholdingData() {
    const { holdingData } = this.state;
    let vikingArray = this.getVikingObj();
    let vanderbiltArray = this.getVanderbiltObj();
    let abcArray = this.getAbcObj();
    let xyzArray = this.getXyzObj();

    this.setState({
      holdingData: {
        viking: vikingArray,
        vanderbilt: vanderbiltArray,
        abc: abcArray,
        xyz: xyzArray
      }
    });
  }

  getVikingObj() {
    const { allData } = this.state;
    let stocks = [];
    allData.included.map(stock => {
      if (stock.attributes.sector === "Technology") {
        stocks.push(stock);
      }
    });
    return stocks;
  }

  getVanderbiltObj() {
    const { allData } = this.state;
    let stocks = [];
    allData.included.map(stock => {
      if (stock.attributes.sector === "Consumer Cyclical") {
        stocks.push(stock);
      }
    });
    return stocks;
  }

  getAbcObj() {
    const { allData } = this.state;
    let stocks = [];
    allData.included.map(stock => {
      if (stock.attributes.sector === "Healthcare") {
        stocks.push(stock);
      }
    });
    return stocks;
  }

  getXyzObj() {
    const { allData } = this.state;
    let stocks = [];
    allData.included.map(stock => {
      if (stock.attributes.sector === "Real Estate") {
        stocks.push(stock);
      }
    });
    return stocks;
  }

  getStockSymbols(holding) {
    let symbols = [];
    holding.forEach(stock => {
      symbols.push(stock.attributes.symbol);
    });
    return symbols;
  }

  getOwnedAssets(holding) {
    let ownedAssets = null;
    holding.forEach(stock => {
      let sum = stock.attributes.price * stock.attributes.shares;
      ownedAssets += sum;
    });
    return ownedAssets;
  }

  renderViking() {
    const { holdingData } = this.state;
    if (holdingData.viking.length !== 0) {
      let vikingObj = {
        labels: [this.getStockSymbols(holdingData.viking)],
        datasets: [
          {
            label: "Technology",
            data: [this.getOwnedAssets(holdingData.viking)],
            backgroundColor: ["#247F60", "#97FFDB", "#49FFC1", "#1D3D3C"]
          }
        ]
      };
      debugger;
      return vikingObj;
    }
  }

  renderVanderBilt() {
    const { holdingData } = this.state;
    let vanderbiltObj = {
      labels: [this.getStockSymbols(holdingData.vanderbilt)],
      datasets: [
        {
          label: "Consumer Discretionary",
          data: [],
          backgroundColor: ["#247F60", "#97FFDB", "#49FFC1", "#1D3D3C"]
        }
      ]
    };
    return vanderbiltObj;
  }

  renderABC() {
    const { holdingData } = this.state;
    let abcObj = {
      labels: [this.getStockSymbols(holdingData.abc)],
      datasets: [
        {
          label: "Healthcare",
          data: [],
          backgroundColor: ["#247F60", "#97FFDB", "#49FFC1", "#1D3D3C"]
        }
      ]
    };
    return abcObj;
  }

  renderXYZ() {
    const { holdingData } = this.state;
    let xyzObj = {
      labels: [this.getStockSymbols(holdingData.xyz)],
      datasets: [
        {
          label: "Real Estate",
          data: [],
          backgroundColor: ["#247F60", "#97FFDB", "#49FFC1", "#1D3D3C"]
        }
      ]
    };
    return xyzObj;
  }

  render() {
    if (this.state.loading || this.state.holdingData.viking === null) {
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

        <Chart chartData={this.state.chartData} legendPosition="top" />
        <br />
        <br />
        <Tabs className="tab-demo z-depth-1" title="Holdings">
          <Tab title="Viking">
            <BarGraph tableData={this.renderViking()} />
          </Tab>
          <Tab title="Vanderbilt" active>
            <BarGraph tableData={this.renderVanderBilt()} />
          </Tab>
          <Tab title="ABC">
            <BarGraph tableData={this.renderABC()} />
          </Tab>
          <Tab title="XYZ">
            <BarGraph tableData={this.renderXYZ()} />
          </Tab>
        </Tabs>

      </div>
    );
  }
}
