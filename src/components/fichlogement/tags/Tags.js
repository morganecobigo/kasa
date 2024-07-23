import React from "react";
import "./tags.css";

const Tag = ({ tags }) => {
  return (
    <ul className="tag-container">
      {tags.map((tags, index) => (
        <li key={index}>{tags}</li>
      ))}
    </ul>
  );
};

export default Tag;
