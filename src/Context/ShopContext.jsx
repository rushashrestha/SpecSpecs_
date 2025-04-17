
import React, { createContext, useState, useEffect } from "react";
import { auth } from "../firebaseConfig";     // adjust path if needed
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import allproducts from "../Components/Assets/allproducts";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 0; i < allproducts.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

const ShopContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const navigate = useNavigate();

  // Clear cart when user logs out
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (!user) setCartItems(getDefaultCart());
    });
    return () => unsub();
  }, []);

  const addToCart = (itemId) => {
    if (!auth.currentUser) {
      navigate("/login");
      return;
    }
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    if (!auth.currentUser) {
      navigate("/login");
      return;
    }
    setCartItems((prev) => ({
      ...prev,
      [itemId]: Math.max(prev[itemId] - 1, 0),
    }));
  };

  const getTotalCartAmount = () => {
    return Object.entries(cartItems).reduce((sum, [id, qty]) => {
      if (qty > 0) {
        const prod = allproducts.find((p) => p.id === Number(id));
        return sum + (prod?.new_price || 0) * qty;
      }
      return sum;
    }, 0);
  };

  const getTotalCartItems = () => {
    return Object.values(cartItems).reduce((a, b) => a + b, 0);
  };

  return (
    <ShopContext.Provider
      value={{
        cartItems,
        allproducts,
        getTotalCartAmount,
        getTotalCartItems,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
