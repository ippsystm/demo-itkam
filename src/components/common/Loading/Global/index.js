import React from "react";
import "./style.css";

const Preloader = () => {
  return (
    <div className="global-loader-background">
      <div className="global-loader">
        <div className="global-loading"></div>
      </div>
    </div>
  );
};

export default Preloader;
