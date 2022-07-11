import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getcountriesDetails } from "../actions";
import "../styles/details.css";

export default function Details({ country }) {
  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.countriesDetails);
  useEffect(
    () => {
      dispatch(getcountriesDetails(country));
    },
    // eslint-disable-next-line
    [dispatch]
  );
  return (
    <div className="details" key={allCountries.id}>
      <div className="flag">
        <img src={allCountries.flag} alt="flag" />
      </div>
      <div>
        <h2 className="name">
          {allCountries.name} {allCountries.id}
        </h2>
        <h3 className="continent">{allCountries.continent}</h3>
        <h3 className="capital">Capital: {allCountries.capital}</h3>
        <h3 className="region">Region: {allCountries.region}</h3>
        <h3 className="population">Population: {allCountries.population}</h3>
        <h3 className="area">Area: {allCountries.area}</h3>
        <h3 className="activities">
          {" "}
          Actividades:{" "}
          {allCountries.activities &&
            allCountries.activities.map((act) => (
              <div key={act.id}>
                <p>
                  <h4>Actividad: {act.name}</h4>
                  <h4>Temporada: {act.season} </h4>
                  <h4>Duration: {act.duration} </h4>
                  <h4>Difficulty: {act.difficulty}</h4>
                </p>
              </div>
            ))}
        </h3>
      </div>
    </div>
  );
}
