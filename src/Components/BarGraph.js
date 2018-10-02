import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Bar, Line, Pie, Doughnut, Table } from "react-chartjs-2";

class BarGraph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableData: props.tableData
    };
  }

  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: "bottom"
  };

  render() {
    console.log(`bargraph`, this.state.tableData);
    return (
      <div className="chart">
        <Bar
          data={this.state.tableData}
          options={{
            title: {
              display: this.props.displayTitle,
              fontSize: 25
            },
            legend: {
              display: this.props.displayLegend,
              position: this.props.legendPosition
            }
          }}
        />
      </div>
    );
  }
}

export default BarGraph;
