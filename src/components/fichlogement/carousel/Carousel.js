import React, { useState } from "react";
import left from "../../../assets/carousel/left.png";
import right from "../../../assets/carousel/right.png";
import "./carousel.css";

const Carousel = (props) => {
  const { pictures } = props;
  const [index, setIndex] = useState(0);
  const increment = () => {
    let newIndex = index + 1;
    if (newIndex > pictures.length - 1) {
      newIndex = 0;
    }
    setIndex(newIndex);
  };
  const decrement = () => {
    let newIndex = index - 1;
    if (newIndex < 0) {
      newIndex = pictures.length - 1;
    }
    setIndex(newIndex);
  };
  return (
    <div className="carousel-container">
      <img className="img-carousel" alt="carousel" src={pictures[index]} />
      <button className="arrow arrow-left" onClick={decrement}>
        <img className="img-arrow" src={left} alt="arrow" />
      </button>
      <button className="arrow arrow-right" onClick={increment}>
        <img className="img-arrow" src={right} alt="arrow" />
      </button>
      <div className="current-photo-number">
        {index + 1}/{props.pictures.length}
      </div>
    </div>
  );
};

export default Carousel;
