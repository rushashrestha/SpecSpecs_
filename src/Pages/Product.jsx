import React, { useContext } from "react";
import ShopContext from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrum from "../Components/Breadcrums/Breadcrum";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import allproducts from "../Components/Assets/allproducts";

const Product = () => {
  
  const { productID } = useParams();
  const product = allproducts.find((e) => e.id === Number(productID));
  return (
    <div>
      {/* <ProductDisplay product={allproducts} /> */}
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
    </div>
  );
};

export default Product;
