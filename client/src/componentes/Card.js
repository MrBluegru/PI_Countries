import React from "react";
import { Link } from "react-router-dom";
import "../styles/card.css";

export default function Card({ id, flag, name, continent }) {
  return (
    <Link className="link_name" to={`/countrie/${id}`}>
      <div className="card" key={id}>
        <div className="flag">
          <img src={flag} alt="flag" />
        </div>
        <div>
          <h2 className="name">{name}</h2>
          <h3 className="continent">{continent}</h3>
        </div>
      </div>
    </Link>
  );
}
