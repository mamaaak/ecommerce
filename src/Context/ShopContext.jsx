import React, { createContext, useState } from "react";
import all_product from "../Components/Assets/all_product"

export const ShopContext = createContext(null);

const getDefaultCart = ()=> {
  let cart = {};
  for (let index = 0; index < all_product.length; index++)
    cart[index] = 0;

  return cart;
}

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItems((prev)=>({...prev, [itemId]:prev[itemId]+1}))
  }

  const removeFromCart = (itemId) => {
    setCartItems((prev)=>({...prev, [itemId]:prev[itemId]-1}))
  }

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_product.find((product) => product.id === Number(item));
        if (itemInfo) {
          console.log(`Item: ${itemInfo.name}, Quantity: ${cartItems[item]}, Price: ${itemInfo.new_price}`);
          totalAmount += itemInfo.new_price * cartItems[item];
        } else {
          console.log(`Item with ID ${item} not found in all_product array.`);
        }
      }
    }
    console.log(`Total Amount: ${totalAmount}`);
    return totalAmount;
  };

  const contextValue ={getTotalCartAmount,all_product,cartItems,addToCart,removeFromCart}

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider
