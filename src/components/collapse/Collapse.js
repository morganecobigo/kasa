import React, { useState } from "react";
import ChevronDown from "../../assets/chevron/chevron-down.png";
import "./collapse.css";

const Collapse = ({ visible, title, text }) => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <div className={`fade ${visible ? "" : "out"}`}>
      <button
        onClick={toggle}
        className={`collapse-button ${open ? "open" : "close"}`}
      >
        {title}
        <img className="chevron" src={ChevronDown} alt="chevron" />
      </button>
      {open &&
        (Array.isArray(text) ? (
          <ul className="équipments">
            {text.map((equipments, index) => (
              <li key={index}>{equipments}</li>
            ))}
          </ul>
        ) : (
          <div className="collapse_content">
            <p>{text}</p>
          </div>
        ))}
    </div>
  );
};

export default Collapse;
