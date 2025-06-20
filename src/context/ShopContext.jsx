import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";

export const ShopContext = createContext();

const shopContextProvider = (props) => {
  const currency = "$";
  const delivery_fee = 10;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cardItems, setCardItems] = useState({});

  const addToCart = async (itemId, size) => {
    let cardData = structuredClone(cardItems);
    if (!size) {
      toast.error("Select Product Size");
      return;
    }

    if (cardData[itemId]) {
      if (cardData[itemId][size]) {
        cardData[itemId][size] += 1;
      } else {
        cardData[itemId][size] = 1;
      }
    } else {
      cardData[itemId] = {};
      cardData[itemId][size] = 1;
    }
    setCardItems(cardData);
  };
  const getCartCount = () => {
    let totalCount = 0;
  
    for (const itemId in cardItems) {
      const sizes = cardItems[itemId]; // e.g., { M: 2, L: 1 }
      for (const size in sizes) {
        totalCount += sizes[size]; // e.g., sizes["M"] = 2
      }
    }
  
    return totalCount;
  };
  


  useEffect(() => {
    console.log(cardItems);
  }, [cardItems]);

  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    addToCart,
    cardItems,
    getCartCount,
  };
  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};
export default shopContextProvider;
