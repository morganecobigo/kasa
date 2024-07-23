import React from "react";
import emptyStar from "../../../assets/star/star-active.png";
import fullStar from "../../../assets/star/star-inactive.png";
import "./star.css";

function Star(props) {
  const score = props.score;
  const notes = [1, 2, 3, 4, 5];
  return (
    <div className="star_contenair">
      {notes.map((note) =>
        score >= note ? (
          <img
            key={note.toString()}
            className="stars"
            src={emptyStar}
            alt="star"
          />
        ) : (
          <img
            key={note.toString()}
            className="stars"
            src={fullStar}
            alt="star"
          />
        )
      )}
    </div>
  );
}

export default Star;
