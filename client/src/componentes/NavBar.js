import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  getCountries,
  filterCountriesByContinent,
  orderByName,
  orderByPopulation,
  filterByActivity,
} from "../actions";
import SearchBar from "./SearchBar.js";
import "../styles/navBar.css";

export default function NavBar() {
  const dispatch = useDispatch();
  const [orden, setOrden] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
// eslint-disable-next-line
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
    setOrden(e.target.value);
  }
  function handleOrderPopul(e) {
    e.preventDefault();
    dispatch(orderByPopulation(e.target.value));
    setCurrentPage(1);
    setOrden(e.target.value);
  }
  function handleFilterAct(e) {
    e.preventDefault();
    dispatch(filterByActivity(e.target.value));
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
          <Link className="link" to="/Activities">
            Crear Actividad
          </Link>
        </button>
      </div>

      <div className="order_name">
        <select onChange={(e) => handleOrderName(e)}>
          <option value="">Ordenar: </option>
          <option value="asc">Ascendente(A-Z)</option>
          <option value="desc">Descendente(Z-A)</option>
        </select>
      </div>

      <div className="order_population">
        <select onChange={(e) => handleOrderPopul(e)}>
          <option value="">Filtrar por población</option>
          <option value="populationDesc">Mayor a menor</option>
          <option value="populationAsc">Menor a mayor</option>
        </select>
      </div>

      <div className="filter_continent">
        <select onChange={(e) => handleFilterContinent(e)}>
          <option value="All">Continentes</option>
          <option value="Americas">America</option>
          <option value="Oceania">Oceanía</option>
          <option value="Africa">Africa</option>
          <option value="Europe">Europa</option>
          <option value="Asia">Asia</option>
          <option value="Antarctic">Antártida</option>
        </select>
      </div>

      <div className="filter_activities">
        <select className="filt_act" onChange={(e) => handleFilterAct(e)}>
          <option value="All">Filtrar por actividad</option>
          <option value="Hiking">Caminar</option>
          <option value="Biking">Bicicleta</option>
        </select>
      </div>
    </div>
  );
}
