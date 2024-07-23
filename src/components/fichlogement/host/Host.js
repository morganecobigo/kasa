import React from "react";
import "./host.css";

function Host(props) {
  return (
    <div className="owner-container">
      <h3 className="name-owner">{props.name}</h3>
      <img className="photo-owner" src={props.picture} alt="propriétaire" />
    </div>
  );
}

export default Host;
