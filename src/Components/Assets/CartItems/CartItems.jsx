import React, { useContext } from "react";
import './CartItems.css';
import { ShopContext } from "../../../Context/ShopContext";
import remove_icon from '../removeicon.png';
const CartItems = () => {
    const {getTotalCartAmount,allproducts,cartItems,removeFromCart} = useContext(ShopContext)
    return(
        <div className="cartitems">
            <div className="classitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {allproducts.map((e)=>{
               if(cartItems[e.id]>0)
               {
                return (
                 <div >
                <div className="cartitems-format cartitems-format-main">
                    <img src={e.image} alt="" className="carticon-product-icon"/>
                    <p>{e.name}</p>
                    <p>Rs.{e.new_price}</p>
                    <button className="cartitems-quantity">{cartItems[e.id]}</button>
                    <p>{e.new_price*cartItems[e.id]}</p>
                    <img className='cartitems-remove-icon'src={remove_icon} onClick= {()=>{removeFromCart(e.id)}}alt="" />
                </div>
                <hr />
            </div>
                )
               } 
               return null;

            })}
            <div className="cartitems-down">
                <div className="cartitems-total">
                  <h1>cart Totals</h1>
                  <div>
                    <div className="cartitems-total-item">
                        <p>Subtotal</p>
                        <p>Rs{getTotalCartAmount()}</p>
                    </div>
                    <hr />
                    <div className="cartitems-total-item">
                        <h3>Total</h3>
                        <h3>Rs{getTotalCartAmount()}</h3>
                    </div>
                  </div>
                  <button>PROCEED TO CHECKOUT</button>
                </div>
               

            </div>

        </div>
    )
}
export  default CartItems; 