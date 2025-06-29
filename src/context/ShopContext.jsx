import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom'


export const ShopContext = createContext();

const shopContextProvider = (props) => {
  const currency = "$";
  const delivery_fee = 10;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const navigate = useNavigate()

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
      const sizes = cartItems[itemId]; 
      for (const size in sizes) {
        totalCount += sizes[size]; 
      }
    }
  
    return totalCount;
  };
  
    const updateQuantity = async (itemId,size,quantity) =>{
        let cartData = structuredClone(cartItems)

        cartData[itemId][size] =quantity;

        setCartItems(cartData);
    }

    const getCartAmount = () => {
      let totalAmount = 0;
    
      for (const productId in cartItems) {
        const product = products.find((p) => p._id === productId);
        if (!product) continue;
    
        const sizes = cartItems[productId];
        for (const size in sizes) {
          const quantity = sizes[size];
          if (quantity > 0) {
            totalAmount += product.price * quantity;
          }
        }
      }
    
      return totalAmount;
    };
    
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
    updateQuantity,
    getCartAmount,
    navigate
  };
  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};
export default shopContextProvider;
