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
    fetch("http://localhost:3000/holdings", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`
      }
    })
      .then(holdingsData => holdingsData.json())
      .then(h => this.setState({ allData: h, chartData: { holdings: h } }))
      .then(r => this.fetchStocks())
      .then(r => this.setChartData())
      .then(r => this.totalHoldings())
      .then(r => this.setholdingData());
  }

  // timer() {
  //   this.setState({
  //     currentCount: this.state.currentCount - 1
  //   });
  //   if (this.state.currentCount < 1) {
  //     clearInterval(this.intervalId);
  //   }
  // }

  componentDidMount() {
    this.fetchHoldings();
    this.intervalId = setInterval(this.updateStockPrices.bind(this), 5000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  updateStockPrices() {
    let tempstocks = this.state.stocks.data.map(stock => ({ ...stock }));

    let promises = tempstocks.map(stock =>
      fetch(
        `https://api.iextrading.com/1.0/stock/${stock.attributes.symbol}/price`
      )
        .then(r => r.json())
        .then(price => (stock.attributes.price = price))
    );

    Promise.all(promises).then(() => {
      let sum = 0;
      let fixedsum = 0;

      tempstocks.forEach(stock => {
        sum += stock.attributes.price * stock.attributes.shares;
      });

      fixedsum = parseFloat(sum).toFixed(2);

      this.setState({
        aum: sum,
        aumdollar: fixedsum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
        stocks: { ...this.state.stocks, data: tempstocks }
      });
      this.calculateGrowth();
    });

    //this.totalHoldings()
  }

  // formatMoney(n, c, d, t) {
  //   var c = isNaN((c = Math.abs(c))) ? 2 : c,
  //     d = d == undefined ? "." : d,
  //     t = t == undefined ? "," : t,
  //     s = n < 0 ? "-" : "",
  //     i = String(parseInt((n = Math.abs(Number(n) || 0).toFixed(c)))),
  //     j = (j = i.length) > 3 ? j % 3 : 0;

  //   return (
  //     s +
  //     (j ? i.substr(0, j) + t : "") +
  //     i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) +
  //     (c
  //       ? d +
  //         Math.abs(n - i)
  //           .toFixed(c)
  //           .slice(2)
  //       : "")
  //   );
  // }

  fetchStocks() {
    //console.log(this.state)
    fetch("http://localhost:3000/stocks", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`
      }
    })
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

    // if (this.state.stocks === []){
    //   return
    // }
    // console.log(this.state.stocks)
    // console.log("aum update function")

    // // let tempstocks = this.state.stocks.map(stock => ({ ...stock }));
    // // console.log(tempstocks)
    // // console.log("aum update function")
    // // tempstocks.forEach(
    // //   stock => (sum += stock.attributes.price * stock.attributes.shares)
    // // );

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
    console.log(`symbol`, symbols);
    return symbols;
  }

  getOwnedAssets(holding) {
    let ownedAssets = [];
    holding.forEach(stock => {
      let sum = stock.attributes.price * stock.attributes.shares;
      ownedAssets.push(sum);
    });
    return ownedAssets;
  }

  renderViking() {
    const { holdingData } = this.state;
    if (holdingData.viking.length !== 0) {
      let vikingObj = {
        labels: this.getStockSymbols(holdingData.viking),
        datasets: [
          {
            label: "Technology",
            data: this.getOwnedAssets(holdingData.viking),
            backgroundColor: ["#247F60", "#97FFDB", "#49FFC1", "#1D3D3C"]
          }
        ]
      };
      return vikingObj;
    }
  }

  renderVanderBilt() {
    const { holdingData } = this.state;
    let vanderbiltObj = {
      labels: this.getStockSymbols(holdingData.vanderbilt),
      datasets: [
        {
          label: "Consumer Discretionary",
          data: this.getOwnedAssets(holdingData.vanderbilt),
          backgroundColor: ["#247F60", "#97FFDB", "#49FFC1", "#1D3D3C"]
        }
      ]
    };
    return vanderbiltObj;
  }

  renderABC() {
    const { holdingData } = this.state;
    let abcObj = {
      labels: this.getStockSymbols(holdingData.abc),
      datasets: [
        {
          label: "Healthcare",
          data: this.getOwnedAssets(holdingData.abc),
          backgroundColor: ["#247F60", "#97FFDB", "#49FFC1", "#1D3D3C"]
        }
      ]
    };
    return abcObj;
  }

  renderXYZ() {
    const { holdingData } = this.state;
    let xyzObj = {
      labels: this.getStockSymbols(holdingData.xyz),
      datasets: [
        {
          label: "Real Estate",
          data: this.getOwnedAssets(holdingData.xyz),
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
        <CustomizedTable stocks={this.state.stocks} />
        <br />
        <br />
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
              <BarGraph tableData={this.renderViking()} />
            </Tab>
            <Tab title="Vanderbilt">
              <BarGraph tableData={this.renderVanderBilt()} />
            </Tab>
            <Tab title="Behemeth">
              <BarGraph tableData={this.renderABC()} />
            </Tab>
            <Tab title="Titan">
              <BarGraph tableData={this.renderXYZ()} />
            </Tab>
          </Tabs>
        </div>
      </div>
    );
  }
}
