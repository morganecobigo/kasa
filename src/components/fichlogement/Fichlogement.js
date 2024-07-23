import React from "react";
import "./fichlogement.css";

const Fichlogement = ({ title, location }) => {
  return (
    <div className="location-container">
      <h2 className="title-logement">{title}</h2>
      <p className="subtitle-logement">{location}</p>
    </div>
  );
};

export default Fichlogement;
