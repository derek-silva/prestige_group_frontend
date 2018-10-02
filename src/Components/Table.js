import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 700
  },
  row: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default
    }
  }
});

let id = 0;
function createData(name, shares, price, assetTotal, changeYTD) {
  id += 1;
  return { id, name, shares, price, assetTotal, changeYTD };
}

function CustomizedTable(props) {
  const { classes } = props;
  const { stocks } = props;
  // const rows = [
  //   createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  //   createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  //   createData("Eclair", 262, 16.0, 24, 6.0),
  //   createData("Cupcake", 305, 3.7, 67, 4.3),
  //   createData("Gingerbread", 356, 16.0, 49, 3.9)
  // ];

  console.log(stocks);
  const rows = [];
  if (stocks.length != []) {
    console.log("blah")
    stocks.data.forEach(stock =>
      rows.push(createData(`${stock.attributes["company-name"]} (${stock.attributes.symbol})`, parseInt(stock.attributes.shares), `$${stock.attributes.price}`, `$${parseFloat(stock.attributes.price*stock.attributes.shares).toFixed(2)}`, `${parseFloat(stock.attributes["ytd-change-percent"]*100).toFixed(2)}%`))
    );
  }

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <CustomTableCell>Stock</CustomTableCell>
            <CustomTableCell numeric>Shares</CustomTableCell>
            <CustomTableCell numeric>Price</CustomTableCell>
            <CustomTableCell numeric>Asset Total</CustomTableCell>
            <CustomTableCell numeric>Change YTD</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => {
            return (
              <TableRow className={classes.row} key={row.id}>
                <CustomTableCell component="th" scope="row">
                  {row.name}
                </CustomTableCell>
                <CustomTableCell numeric>{row.shares}</CustomTableCell>
                <CustomTableCell numeric>{row.price}</CustomTableCell>
                <CustomTableCell numeric>{row.assetTotal}</CustomTableCell>
                <CustomTableCell numeric>{row.changeYTD}</CustomTableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

CustomizedTable.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CustomizedTable);
