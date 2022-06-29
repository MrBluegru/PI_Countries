import React from "react";
import "../styles/card.css";

export default function Card({ id, flag, name, continent }) {
  return (
    <div className="card" key={id}>
      <div className="img">
        <img src={flag} alt="flag" />
      </div>
      <div>
        <h3 className="name">{name}</h3>
        <h5 className="continent">{continent}</h5>
      </div>
    </div>
  );
}
