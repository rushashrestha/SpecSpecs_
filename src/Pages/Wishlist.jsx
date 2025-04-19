import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import Item from "../Components/Item/Item";
import "./CSS/wishlist.css"

const Wishlist = () => {
  const { wishlistItems } = useContext(ShopContext);

  return (
    <div className="wishlist-page">
      <h1>Spec-tacular Picks</h1>
      <div className="wishlist-items">
        {wishlistItems.length > 0 ? (
          wishlistItems.map((item, i) => (
            <Item key={i} {...item} />
          ))
        ) : (
          <p>Your wishlist is empty.</p>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
