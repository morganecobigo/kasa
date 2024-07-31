import React from "react";
import { Link } from "react-router-dom";
import "./card.css";

const Card = (props) => {
  const { logement } = props;
  return (
    <div className="card-container">
      <Link to={`/kasa/logement/${logement.id}`}>
        <div
          className="card-link"
          style={{ backgroundImage: `url(${logement.cover})` }}
        >
          <h2 className="text-card">{logement.title}</h2>
        </div>
      </Link>
    </div>
  );
};

export default Card;
