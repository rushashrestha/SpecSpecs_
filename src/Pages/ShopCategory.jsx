import React, { useContext } from "react";
import "./CSS/ShopCategory.css";
import { ShopContext } from "../Context/ShopContext";
import Item from "../Components/Item/Item";


const categoryTitles = {
  Vision: "Frames That Define You",
  Sports: "Gear Up Your Gaze",
  Sunglasses: "Own the Shade",
};

const ShopCategory = ({ banner, category }) => {
  const { allproducts } = useContext(ShopContext);
  const title = categoryTitles[category] || "Our Products";

  return (
    <div className="shop-category">
      {banner && (
        <div className="shopcategory-banner">
          <img
            src={banner}
            alt={`${category} banner`}
            className="banner-img"
          />
        </div>
      )}

      <div className="shopcategory-indexSort"></div>


      <h1 className="our-product">{title}</h1>

      <div className="shopcategory-product">
        {allproducts
          .filter((item) => item.category === category)
          .map((item) => (
            <Item
              key={item.id}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          ))}
      </div>
    </div>
  );
};

export default ShopCategory;
