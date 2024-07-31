import React from "react";
import logements from "../../data/logements.json";
import Card from "../card/Card";
import "./gallery.css";

const Gallery = () => {
  return (
    <div className="gallery-container">
      {logements.map((logement) => (
        <Card logement={logement} key={logement.id} />
      ))}
    </div>
  );
};

export default Gallery;
