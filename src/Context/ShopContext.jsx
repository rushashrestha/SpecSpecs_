import React, { createContext, useState, useEffect } from "react";
import { auth } from "../firebaseConfig";
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
  const [wishlistItems, setWishlistItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (!user) {
        setCartItems(getDefaultCart());
        setWishlistItems([]);
      }
    });
    return () => unsub();
  }, []);

  const addToCart = (itemId) => {
    if (!auth.currentUser) {
      navigate("/login");
      return;
    }
    setCartItems((prev) => ({ ...prev, [itemId]: (prev[itemId] || 0) + 1 }));
  };

  // Decrease quantity by 1, minimum 1
  const removeOneFromCart = (itemId) => {
    if (!auth.currentUser) {
      navigate("/login");
      return;
    }
    setCartItems((prev) => {
      if (prev[itemId] > 1) {
        return { ...prev, [itemId]: prev[itemId] - 1 };
      } else {
        return { ...prev, [itemId]: 1 };
      }
    });
  };

  // Remove item completely
  const removeFromCart = (itemId) => {
    if (!auth.currentUser) {
      navigate("/login");
      return;
    }
    const updated = { ...cartItems };
    delete updated[itemId];
    setCartItems(updated);
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

  const addToWishlist = (product) => {
    if (!auth.currentUser) {
      navigate("/login");
      return;
    }
    if (!wishlistItems.find((item) => item.id === product.id)) {
      setWishlistItems((prev) => [...prev, product]);
    }
  };

  const removeFromWishlist = (id) => {
    setWishlistItems((prev) => prev.filter((item) => item.id !== id));
  };

  const getTotalWishlistItems = () => wishlistItems.length;

  return (
    <ShopContext.Provider
      value={{
        cartItems,
        allproducts,
        getTotalCartAmount,
        getTotalCartItems,
        addToCart,
        removeFromCart,
        removeOneFromCart,
        wishlistItems,
        addToWishlist,
        removeFromWishlist,
        getTotalWishlistItems,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
