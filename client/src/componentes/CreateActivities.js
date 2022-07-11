import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { getCountries, createActivities } from "../actions";
import "../styles/createAct.css";

export default function CreateAct() {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);
  const history = useHistory();

  const [imput, setImput] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    countries: [],
  });

  useEffect(() => {
    dispatch(getCountries());
  }, 
  // eslint-disable-next-line
  []);
  return (
    <div className="createAct">
      <div className="titulo">
        <h1>Crear Actividad</h1>
      </div>
      <div className="create_form">
        <button>
          <Link to="/home"> Volver </Link>
        </button>
        <div className="form">
          <form>
            <label>Nombre</label>
            <input
              type="text"
              name="name"
              value={imput.name}
              onChange={(e) =>
                setImput({ ...imput, [e.target.name]: e.target.value })
              }
            />
            <label>Dificultad</label>
            <select
              id="difficulty"
              name="difficulty"
              value={imput.difficulty}
              onChange={(e) =>
                setImput({ ...imput, [e.target.name]: e.target.value })
              }
            >
              <option value="">Seleccione</option>
              <option value="Easy">Facil</option>
              <option value="Medium">Intermedio</option>
              <option value="Hard">Dificil</option>
            </select>

            <label>Duración</label>
            <select
              id="duration"
              name="duration"
              value={imput.duration}
              onChange={(e) =>
                setImput({ ...imput, [e.target.name]: e.target.value })
              }
            >
              <option value="">Seleccione</option>
              <option value="Short">1-3 horas</option>
              <option value="Medium">3-6 horas</option>
              <option value="Long">6-12 horas</option>
              <option value="VeryLong">12-24 horas</option>
            </select>

            <label>Temporada</label>
            <select
              id="season"
              name="season"
              value={imput.season}
              onChange={(e) =>
                setImput({ ...imput, [e.target.name]: e.target.value })
              }
            >
              <option value="">Seleccione</option>
              <option value="Winter">Invierno</option>
              <option value="Spring">Primavera</option>
              <option value="Summer">Verano</option>
              <option value="Autumn">Otoño</option>
            </select>

            <label>Paises</label>
            <select
              name="countries"
              value={imput.countries}
              onChange={(e) =>
                setImput({ ...imput, [e.target.name]: e.target.value })
              }
            >
              {countries.map((e) => {
                return (
                  <option key={e.id} value={e.id}>
                    {e.name}
                  </option>
                );
              })}
            </select>
            <button
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                dispatch(createActivities(imput));
                history.push("/home");
                alert("Actividad creada");
              }}
            >
              Crear Actividad
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
