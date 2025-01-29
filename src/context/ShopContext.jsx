import { createContext } from "react";
import React from "react";
import { products } from "../assets/assets";

export const ShopContext = createContext();
const ShopContextProvider = (props) => {
  console.log("ShopContextProvider rendered"); // Debugging log
  // console.log(props, "props");
  const currency = "$";
  const delivery_fee = 10;
  const value = {
    products,
    currency,
    delivery_fee,
  };
  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
