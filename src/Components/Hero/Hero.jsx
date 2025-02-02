import React from "react";
import "./Hero.css";
import arrow_icon from "../Assets/arrow_icon.png";
import hero_image from "../Assets/hero_image.png";
import Typewriter from "typewriter-effect";

const Hero = () => {
  const scrollToPopularProducts = () => {
    const popularProductsSection = document.getElementById("popular-products");
    if (popularProductsSection) {
      window.scrollTo({
        top: popularProductsSection.offsetTop - 80, // Adjust for navbar height
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>Glasses & Lens</h2>
        <div className="typewriter">
        <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString("Collection")
            .pauseFor(5)
            .typeString("<br>For")
            .pauseFor(5)
            .typeString(" Everyone")
            .start();
        }}
      />
        </div>
       <div className="heropara">
       <p>Get Your Spectacular Specs From US. </p>
       </div>
     
        
      
        <div className="hero-latest-btn">
        <a href="#popular-products" className="hero-latest-btn">
          <div>Latest Collection</div>
          <img src={arrow_icon} alt="Arrow Icon" />
        </a>
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_image} alt="Hero" />
      </div>
    </div>
  );
};

export default Hero;
