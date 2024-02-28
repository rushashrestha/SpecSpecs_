import React, { component } from "react";
import "./loading.css";
import loadingGif from "../Assets/loading.gif";

const Loader = () => {
  return (
    <div className="center">
      <div className="text-loader">
        <span>
          <img
            width={100}
            src={loadingGif}
            alt="loading..." className="opacity-[0.25]"
          />
        </span>
        <div className="text-container">
          <span className="letter">S</span>
          <span className="letter">P</span>
          <span className="letter">E</span>
          <span className="letter">C</span>
          <span className="letter">S</span>
          <span className="letter">P</span>
          <span className="letter">E</span>
          <span className="letter">C</span>
          <span className="letter">S</span>
        </div>
      </div>
    </div>
  );
};

export default Loader;