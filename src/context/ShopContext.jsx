import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";

export const ShopContext = createContext();

const shopContextProvider = (props) => {
  const currency = "$";
  const delivery_fee = 10;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});

  const addToCart = async (itemId, size) => {
    let cartData = structuredClone(cartItems);
    if (!size) {
      toast.error("Select Product Size");
      return;
    }

    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }
    setCartItems(cartData);
  };
  const getCartCount = () => {
    let totalCount = 0;
  
    for (const itemId in cartItems) {
      const sizes = cartItems[itemId]; // e.g., { M: 2, L: 1 }
      for (const size in sizes) {
        totalCount += sizes[size]; // e.g., sizes["M"] = 2
      }
    }
  
    return totalCount;
  };
  
    const updateQuantity = async (itemId,size,quantity) =>{
        let cartData = structuredClone(cartItems)

        cartData[itemId][size] =quantity;

        setCartItems(cartData);
    }

    const getCartAmount =async =>{
      let totalAmount =0;
      for(const items in cartItems){
        let itemInfo =products.find((product)=> product.id === items)
      }
    }

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    addToCart,
    cartItems,
    getCartCount,
    updateQuantity 
  };
  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};
export default shopContextProvider;
