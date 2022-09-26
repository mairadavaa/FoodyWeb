import * as React from "react";
import { Box } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Cart from "../Components/Cart"


export const CollapsibleTable = (text) => {
  let orderArr = [];
  let packedArr = [];
  let deliveredArr = [];
  let mistakenArr = [];
  text.data.map((el) => {
    if (el.status === "Захиалсан") {
      orderArr.push(el);
    }
    if (el.status === "Хүргэгдсэн") {
      deliveredArr.push(el);
    }
    if (el.status === "Савлагдсан") {
      packedArr.push(el);
    }
    if (el.status === "Алдаатай") {
      mistakenArr.push(el);
    }
    return
  });

  return (
    <Box>
      <TableContainer component={Paper}>
        <Table
          style={style.table}
        >
          <TableHead>
            <TableRow>
              <TableCell>Захиалсан</TableCell>
            </TableRow>
          </TableHead>
          <TableBody
            style={ style.tabletop}
          >
            <Cart orders={orderArr}/>
          </TableBody>
        </Table>
      </TableContainer>
      <TableContainer component={Paper} id="packed">
        <Table
          style={style.table}
        >
          <TableHead>
            <TableRow>
              <TableCell>Савалсан</TableCell>
            </TableRow>
          </TableHead>
          <TableBody
            style={style.tabletop}
          >

          <Cart orders={packedArr} key ={packedArr.index}/>
          </TableBody>
        </Table>
      </TableContainer>
      <TableContainer component={Paper} id="delivered">
        <Table
          style={style.table}
        >
          <TableHead>
            <TableRow>
              <TableCell>Хүргэгдсэн</TableCell>
            </TableRow>
          </TableHead>
          <TableBody
            style={style.tabletop}
          >
            <Cart orders={deliveredArr}/>
          </TableBody>
        </Table>
      </TableContainer>
      <TableContainer component={Paper} id="mistaken">
        <Table
          style={style.table}
        >
          <TableHead>
            <TableRow>
              <TableCell>Алдаатай</TableCell>
            </TableRow>
          </TableHead>
          <TableBody
             style={style.tabletop}
          >
            <Cart orders={mistakenArr}/>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
const style ={
    tabletop:{
        height: "40vh",
        overflow: "scroll",
        display: "flex",
        flexDirection: "column",
        width: "90%",
    },
    table:{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "282px",
        height: "540px"
    }
}
