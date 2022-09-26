import * as React from "react";

import { Box } from "@mui/material";
import { CollapsibleTable } from "../Components/Table";
import { useOrderdataContext } from "../Context/orderdataContext";
import TableCell from "@mui/material/TableCell";

import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Divider, Table } from "@mui/material";
import "../App.css";
export const Order = () => {
  const { order } = useOrderdataContext();
  const week = ["Даваа", "Мягмар", "Лхагва", "Пүрэв", "Баасан", "Бямба", "Ням"];

  return (
    <Box>
      <Box
        style={{
          marginLeft: "250px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box>
          <Box
            style={{
              display: "flex",
              flexDirection: "row",
              overflow: "scroll",
            }}
          >
            {week.map((el, index) => {
              const day = order.filter(({ date }) => date === el);
              return (
                <Table key={index}>
                  <TableHead>
                    <TableRow>
                      <TableCell>{el}</TableCell>
                    </TableRow>
                  </TableHead>
                  <Box>
                    <CollapsibleTable id={"all"} value={el} data={day} />
                  </Box>
                  <Divider />
                </Table>
              );
            })}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
