import React from "react";
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
              <a key={number} onClick={() => paginado(number)}>
                {number}
              </a>
            </div>
          ))}
      </div>
    </nav>
  );
}
