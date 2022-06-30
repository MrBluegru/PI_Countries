import React from "react";
import { useDispatch} from "react-redux";
import { Link } from "react-router-dom";
import { getCountries, filterCountriesByContinent } from "../actions";
import "../styles/navBar.css";

export default function NavBar() {

  const dispatch = useDispatch();

  function handleclick(e) {
    e.preventDefault();
    dispatch(getCountries());
  }

  function handleFilterContinent(e) {
    e.preventDefault();
    dispatch(filterCountriesByContinent(e.target.value));
  }

  return (
    <div className="nav_bar">
      <div className="recargarCountries">
        <button
          onClick={(e) => {
            handleclick(e);
          }}
        >
          Cargar paises de nuevo
        </button>
      </div>

      <div className="btn_crearA">
        <button>
          <Link to="/Activitie">Crear Actividad</Link>
        </button>
      </div>

      <div className="filter_OA_P">
        <select>
          <option value="asc">Ascendente</option>
          <option value="desc">Descendente</option>
        </select>
        <select>
          <option value="poblacion">Poblacion</option>
          <option value="poblacion">Mayor a menor</option>
          <option value="poblacion">Menor a mayor</option>
        </select>
      </div>

      <div className="filter_C_AT">
        <select onChange={e => handleFilterContinent(e)}>
          <option value="All">Continentes</option>
          <option value="Americas">America</option>
          <option value="Oceania">Oceanía</option>
          <option value="Africa">Africa</option>
          <option value="Europe">Europa</option>
          <option value="Asia">Asia</option>
          <option value="Antarctic">Antártida</option>
        </select>
        <select>
          <option value="actividad">Actividad turística</option>
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
