import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";
const Item = (props) => {
  return (
    <div className="item">
      <div className="items">
        <div className="imgbox">
          <Link to={`/product/${props.id}`}>
            <img  className="items-images" onClick={window.scrollTo(0, 0)} src={props.image}></img>
          </Link>
        </div>
        <p>{props.name}</p>
        <div className="item-prices">
          <div className="item-price-new">Rs.{props.new_price}</div>
          <div className="item-price-old">Rs.{props.old_price}</div>
        </div>
      </div>
    </div>
  );
};

export default Item;
