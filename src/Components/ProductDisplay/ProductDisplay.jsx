import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDisplay.css';
import star_icon from '../Assets/star_icon.png';
import { ShopContext } from '../../Context/ShopContext';
import allproducts from '../Assets/allproducts'; 

const ProductDisplay = () => {
  const { productID } = useParams(); // Get productID from the URL
  const { addToCart } = useContext(ShopContext);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Find the product in allProducts based on productID
    const foundProduct = allproducts.find((p) => p.id === parseInt(productID));
    setProduct(foundProduct);
  }, [productID]); // Re-run when productID changes

  if (!product) {
    return <h2>Product Not Found</h2>;
  }

  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <p>{product.rating}</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">Rs.{product.old_price}</div>
          <div className="productdisplay-right-price-new">Rs.{product.new_price}</div>
        </div>
        <div className="productdisplay-right-description">
          {product.description}
          <div className="productdisplay-right-brand">Brand: {product.brand}</div>
        </div>
        <button onClick={() => addToCart(product.id)}>ADD TO CART</button>
      </div>
    </div>
  );
};

export default ProductDisplay;