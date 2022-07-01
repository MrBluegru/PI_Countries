import React from "react";
import { Link } from "react-router-dom";
import "../styles/paginado.css";

export default function Paginado({ countriesPerPage, allCountries, paginado }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(allCountries / countriesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <div className="pagination">
        {pageNumbers &&
          pageNumbers.map((number) => (
            <div key={number} className="page-item">
              <button onClick={() => paginado(number)}>
                {number}
              </button>
            </div>
          ))}
      </div>
    </nav>
  );
}
