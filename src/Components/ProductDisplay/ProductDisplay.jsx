import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductDisplay.css";
import star_icon from "../Assets/star_icon.png";
import { ShopContext } from "../../Context/ShopContext";
import allproducts from "../Assets/allproducts";
import { FaShoppingBag, FaHeart } from "react-icons/fa";
import Breadcrum from "../Breadcrums/Breadcrum";


const ProductDisplay = () => {
  const { productID } = useParams();
  const { addToCart } = useContext(ShopContext);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const foundProduct = allproducts.find((p) => p.id === parseInt(productID));
    setProduct(foundProduct);
  }, [productID]);

  if (!product) {
    return <h2>Product Not Found</h2>;
  }

  return (
    <div className="product-display">
      <div className="productdisplay-container">
      <div className="breadcrum">
        <Breadcrum product={product} />
      </div>
      <div className="product-container">
        <div className="product-image-section">
          <div className="image-wrapper">
            <img className="main-image" src={product.image} alt={product.name} />
          </div>
        </div>
        <div className="product-details">
          <h1 className="product-title">{product.name}</h1>
          <p className="product-description">{product.description}</p>
          <div className="product-rating">
            {[...Array(5)].map((_, i) => (
              <img key={i} src={star_icon} alt="star" className="star-icon" />
            ))}
            <span className="rating-value">({product.rating}) Rating</span>
          </div>
          <div className="product-info">
            <span><strong>Brand:</strong> {product.brand}</span>
            <span><strong>Category:</strong> {product.category}</span>
            
          </div>
          <div className="product-price">
            <span className="new-price">रु{product.new_price}</span>
            <span className="old-price">रु{product.old_price}</span>
          </div>
          <div className="product-actions">
            <button className="add-to-cart" onClick={() => addToCart(product.id)}>
              <FaShoppingBag /> Add to Cart
            </button>
            <button className="wishlist">
              <FaHeart /> Wishlist Item
            </button>
          </div>
        </div>
      </div>
      </div>
      
    </div>
  );
};

export default ProductDisplay;
