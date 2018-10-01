import React, { Component } from "react";
import Chart from "./Chart";

export default class Portfolio extends Component {
  constructor() {
    super();
    this.state = {
      chartData: {},
      loading: true
    };
  }

  getChartData() {
    // Ajax calls here
    this.setState({
      chartData: {
        labels: ["A", "B", "C", "D", "E", "F"],
        datasets: [
          {
            label: "Cash",
            data: [617594, 181045, 153060, 106519, 105162, 95072],
            backgroundColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",
              "rgba(153, 102, 255, 0.6)",
              "rgba(255, 159, 64, 0.6)",
              "rgba(255, 99, 132, 0.6)"
            ]
          }
        ]
      },
      loading: false
    });
  }

  componentDidMount() {
    this.getChartData();
  }

  render() {
    if (this.state.loading) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h1 align="center">Portfolio</h1>
        <Chart chartData={this.state.chartData} legendPosition="top" />
      </div>
    );
  }
}
