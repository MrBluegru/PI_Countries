import React from "react";
import { useDispatch} from "react-redux";
import { Link } from "react-router-dom";
import { getCountries } from "../actions";
import "../styles/navBar.css";

export default function NavBar() {

  const dispatch = useDispatch();

  function handleclick(e) {
    e.preventDefault();
    dispatch(getCountries());
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
          <option value="poblacion">poblacion</option>
        </select>
      </div>

      <div className="filter_C_AT">
        <select>
          <option value="ame">Americas</option>
          <option value="oce">Oceanía</option>
          <option value="afr">Africa</option>
          <option value="eur">Europe</option>
          <option value="asi">Asia</option>
          <option value="ant">Antarctic</option>
        </select>
        <select>
          <option value="actividad"> tipo Actividad turística</option>
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
