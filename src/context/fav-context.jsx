'use client'

import { createContext, useEffect, useState } from "react";
import productList from "../inventory/ProductList";

export const FavContext = createContext({});

const getDefaultFav = () => {
  let fav = {};
  for (let i = 1; i < productList.length + 1; i++) {
    fav[i] = 0;
  }
  return fav;
};

export const FavContextProvider = (props) => {
  const [favItems, setFavItems] = useState(getDefaultFav());

  const getTotalFavAmount = () => {
    let totalAmount = 0;
    for (const item in favItems) {
      if (favItems[item] > 0) {
        let itemInfo = productList.find((product) => product.id === Number(item));
        totalAmount += favItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };

  const addToFav = (itemId) => {
    setFavItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromFav = (itemId) => {
    setFavItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updateFavItemCount = (newAmount, itemId) => {
    setFavItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

//   const checkout = () => {
//     setFavItems(getDefaultFav());
//   };

  const contextValue = {
    favItems,
    addToFav,
    updateFavItemCount,
    removeFromFav,
    getTotalFavAmount,
    // checkout,
  };

  return (
    <FavContext.Provider value={contextValue}>
      {props.children}
    </FavContext.Provider>
  );
};