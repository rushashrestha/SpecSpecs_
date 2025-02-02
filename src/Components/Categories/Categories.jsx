import React from "react";
import { useNavigate } from "react-router-dom";
import "./Categories.css";
import visionmod1 from "../Assets/Categories/visionmod1.jpg";
import sunmod1 from "../Assets/Categories/sunmod1.jpg";
import sportsmod1 from "../Assets/Categories/sportsmod1.jpg";

const Categories = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (path) => {
    navigate(path);
  };

  return (
    <div className="categories">
      <h2>Categories</h2>
      {/* <hr /> */}
      <div className="categories-list">
        <div
          className="category-item"
          onClick={() => handleCategoryClick("/vision")}
        >
          <img src={visionmod1} alt="Vision" />
          <div className="category-text">Vision</div>
        </div>
        <div
          className="category-item"
          onClick={() => handleCategoryClick("/sports")}
        >
          <img src={sportsmod1} alt="Sports" />
          <div className="category-text">Sports</div>
        </div>
        <div
          className="category-item"
          onClick={() => handleCategoryClick("/sunglass")}
        >
          <img src={sunmod1} alt="Sunglasses" />
          <div className="category-text">Sunglasses</div>
        </div>
      </div>
    </div>
  );
};

export default Categories;