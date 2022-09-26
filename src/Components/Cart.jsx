import React, { useState, useEffect } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PhoneIcon from "@mui/icons-material/Phone";
import { Typography, Box } from "@mui/material";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import { useOrderdataContext } from "../Context/orderdataContext";
import _ from "lodash";
const options = ["Захиалсан", "Савалсан", "Хүргэгдсэн", "Алдаатай"];

export default function Cart({ orders }) {
  const { order, setOrders } = useOrderdataContext();
  // console.log("kkkkk", order[0].status);
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleClick = () => {
    console.info(`You clicked ${options[selectedIndex]}`);
  };

  useEffect(() => {
    setOrders(order);
  });
  const handleMenuItemClick = (event, index, orderID) => {
    setSelectedIndex(index);
    console.log(orderID);

    setOpen(false);
    // let i = order.findIndex((e) => e.includes(orderID));
    // let i = order.find((e) => e.orderID === orderID);
    // let ind = order.findIndex(i);
    const ind = _.findIndex(order, (p) => p.orderID === orderID);
    const gg = [...order];
    gg[ind].status = options[index];
    console.log("uurchlugdsun:", gg[ind].status);
    setOrders("");
    setOrders([...gg]);
    console.log("aaaa", order);

    // const rep = (order.filter((ord) => ord.orderID === orders[0].orderID)[0] =
    //   orders[0].status.status);
    // rep = options[index];

    //
    // 1. setOrders -> ali order gedgiig olood
    // arr =
    // console.log(orders[0].orderID);

    // console.log("status:", rep);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <>
      {orders.map((order, index) => {
        const { orderID, food, date, address, phonenumber } = order;
        return (
          <Accordion
            expanded={expanded === orderID}
            onChange={handleChange(orderID)}
            key={index}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${orderID}bh-content`}
              id={`panel${orderID}bh-header`}
            >
              #{orderID} {date}
            </AccordionSummary>
            <AccordionDetails>
              <Box>
                <Typography variant>
                  {food.map((food, index) => {
                    const { productName, amount, price } = food;
                    let sum = amount * price;
                    return (
                      <Box>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <Typography variant="subtitle1">
                            {" "}
                            -{productName}:
                          </Typography>
                          <Typography variant="subtitle1">
                            {" "}
                            X{amount}{" "}
                          </Typography>
                          <Typography variant="subtitle1"> {sum} </Typography>
                        </Box>
                      </Box>
                    );
                  })}
                  <Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <LocationOnIcon color="success" />
                      <Typography variant="subtitle2"> {address} </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <PhoneIcon color="success" />
                      <Typography variant="subtitle2">{phonenumber}</Typography>
                    </Box>
                  </Box>
                  {/* ====button xiix== */}
                  <React.Fragment>
                    <ButtonGroup
                      variant="contained"
                      ref={anchorRef}
                      aria-label="split button"
                      color="success"
                    >
                      <Button sx={{ color: "#fff" }} onClick={handleClick}>
                        {options[selectedIndex]}
                      </Button>
                      <Button
                        size="small"
                        aria-controls={open ? "split-button-menu" : undefined}
                        aria-expanded={open ? "true" : undefined}
                        aria-label="select merge strategy"
                        aria-haspopup="menu"
                        onClick={handleToggle}
                      >
                        <ArrowDropDownIcon sx={{ color: "#fff" }} />
                      </Button>
                    </ButtonGroup>
                    <Popper
                      sx={{
                        zIndex: 1,
                      }}
                      open={open}
                      anchorEl={anchorRef.current}
                      role={undefined}
                      transition
                      disablePortal
                    >
                      {({ TransitionProps, placement }) => (
                        <Grow
                          {...TransitionProps}
                          style={{
                            transformOrigin:
                              placement === "bottom"
                                ? "center top"
                                : "center bottom",
                          }}
                        >
                          <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                              <MenuList id="split-button-menu" autoFocusItem>
                                {options.map((option, index) => (
                                  <MenuItem
                                    key={option}
                                    selected={index === selectedIndex}
                                    onClick={(event) =>
                                      handleMenuItemClick(event, index, orderID)
                                    }
                                  >
                                    {option}
                                  </MenuItem>
                                ))}
                              </MenuList>
                            </ClickAwayListener>
                          </Paper>
                        </Grow>
                      )}
                    </Popper>
                  </React.Fragment>
                </Typography>
              </Box>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </>
  );
}
