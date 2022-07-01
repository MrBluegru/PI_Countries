import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  getCountries,
  filterCountriesByContinent,
  orderByName,
} from "../actions";
import SearchBar from "./SearchBar.js";
import "../styles/navBar.css";

export default function NavBar() {
  const dispatch = useDispatch();
  const [orden, setOrden] = useState("");
  const [currentPage, setCurrentPage] = useState(1);


  function handleclick(e) {
    e.preventDefault();
    dispatch(getCountries());
  }

  function handleFilterContinent(e) {
    e.preventDefault();
    dispatch(filterCountriesByContinent(e.target.value));
  }

  function handleOrderName(e) {
    e.preventDefault();
    dispatch(orderByName(e.target.value));
    setCurrentPage(1);
    setOrden(`Ordenando ${e.target.value}`);
  }

  return (
    <div className="nav_bar">
      <div className="nav_search">
        <SearchBar />
      </div>

      <div className="recargarCountries">
        <button
          onClick={(e) => {
            handleclick(e);
          }}
        >
          Cargar paises de nuevo
        </button>
      </div>

      <div className="act">
        <button>
          <Link className="link" to="/Activities">Crear Actividad</Link>
        </button>
      </div>

      <div className="filter_OA_P">
        <select onChange={(e) => handleOrderName(e)}>
          <option value="">Ordenar: </option>
          <option value="asc">Ascendente(A-Z)</option>
          <option value="desc">Descendente(Z-A)</option>
        </select>
        <select>
          <option value="">Filtrar por población</option>
          <option value="+ a -">Mayor a menor</option>
          <option value="- a +">Menor a mayor</option>
        </select>
      </div>

      <div className="filter_C_AT">
        <select onChange={(e) => handleFilterContinent(e)}>
          <option value="All">Continentes</option>
          <option value="Americas">America</option>
          <option value="Oceania">Oceanía</option>
          <option value="Africa">Africa</option>
          <option value="Europe">Europa</option>
          <option value="Asia">Asia</option>
          <option value="Antarctic">Antártida</option>
        </select>
        <select>
          <option value="actividad">Actividades turísticas</option>
        </select>
      </div>
    </div>
  );
}

/*[ ] Botones/Opciones para filtrar por continente y por tipo de 
actividad turística
[ ] Botones/Opciones para ordenar tanto ascendentemente como
 descendentemente 
los países por orden alfabético y por cantidad de población*/
