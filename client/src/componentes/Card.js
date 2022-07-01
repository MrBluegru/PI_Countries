import React from "react";
import { Link } from "react-router-dom";
import "../styles/card.css";

export default function Card({ id, flag, name, continent }) {
  return (
    <div className="card" key={id}>
      <div className="flag">
        <img src={flag} alt="flag" />
      </div>
      <div>
        <Link className="name_link" to={`/countries/${id}`}>
          <h2 className="name">{name}</h2>
        </Link>
        <h3 className="continent">{continent}</h3>
      </div>
    </div>
  );
}
