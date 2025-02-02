import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

const Item = (props) => {
  return (
    <div className="item">
      <div className="items">
        <div className="imgbox">
          <Link to={`/product/${props.id}`}>
            <img
              className="items-images"
              onClick={window.scrollTo(0, 0)}
              src={props.image}
              alt={props.name}
            />
          </Link>
        </div>
        <div className="item-details">
          <div className="item-header">
            <p className="item-name">{props.name}</p>
            <button className="add-button"><FaPlus /></button>
          </div>
          <div className="item-prices">
            <div className="item-price-new">रु{props.new_price}</div>
            <div className="item-price-old">रु{props.old_price}</div>
          </div>
          <p className="item-category">{props.category}</p>
        </div>
      </div>
    </div>
  );
};

export default Item;
