import React from "react";
import "./banner.css";

function Banner(props) {
  const { text, image } = props;
  return (
    <div className="kasa_banner">
      <img src={image} alt="kasa" className="kasa_image" />
      <div className="sombre"> </div>
      <h1 className="kasa_title">{text}</h1>
    </div>
  );
}

export default Banner;
