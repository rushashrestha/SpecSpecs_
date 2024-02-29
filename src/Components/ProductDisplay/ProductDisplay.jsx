import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png';
import { ShopContext } from '../../Context/ShopContext';
const ProductDisplay = (props) => {
    const {product}= props;
    const {addToCart} = useContext(ShopContext);
  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
           <img src={product.image} alt="" />
           <img src={product.image} alt="" />
           <img src={product.image} alt="" />
           <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
            <img className='productdisplay-main-img' src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-star">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                {/* <img src={star_dull_icon} alt="" /> */}
                <p>{product.rating}</p>
            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-price-old">Rs.{product.old_price}</div>
                <div className="productdisplay-right-price-new">Rs.{product.new_price}</div>
            </div>
            <div className="productdisplay-right-description">
                {product.description}
                <div className="productdisplay-right-brand">
                Brand: {product.brand}
                </div>
                
                
            </div>
            
            <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
            {/* <p className='productdisplay-right-category'><span>Category :</span></p> */}
      </div>
    </div>
  )
}

export default ProductDisplay

