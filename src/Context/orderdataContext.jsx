import { createContext, useContext, useState } from "react";
import { Data } from "../Components/Data/orderdata";

const OrderdataContext = createContext();
export const OrderdataProvider = ({ children }) => {
  const [order, setOrders] = useState(Data);


  return (
    <OrderdataContext.Provider value={{ order, setOrders }}>
      {children}
    </OrderdataContext.Provider>
  );
};
export const useOrderdataContext = () => useContext(OrderdataContext);
// 