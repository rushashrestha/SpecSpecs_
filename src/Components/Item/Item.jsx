import React from 'react'
import './Item.css'
const Item = (props) => {
  return (
    <div className='item'>
        <img src={props.image}></img>
        <p>{props.name}</p>
        <div className="item-prices">
            <div className="item-price-new">
                Rs.{props.newPrice}
            </div>
            <div className="item-price-old">
                Rs.{props.price}
            </div>

        </div>
      
    </div>
  )
}

export default Item
