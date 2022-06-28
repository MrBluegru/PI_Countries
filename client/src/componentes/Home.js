import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../actions";
import { Link } from "react-router-dom";
import Card from "./Card";

export default function Home() {
  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.countries);

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  function handleclick(e) {
    e.preventDefault();
    dispatch(getCountries());
  }

  return (
    <div>
      <Link to="/Activitie">Crear Actividad</Link>
      <h1>Countries</h1>
      <button
        onClick={(e) => {
          handleclick(e);
        }}
      >
        Cargar paises de nuevo
      </button>
      <div>
        <select>
          <option value="asc">Ascendente</option>
          <option value="desc">Descendente</option>
        </select>
        <select>
          <option value="ame">Americas</option>
          <option value="oce">Oceanía</option>
          <option value="afr">Africa</option>
          <option value="eur">Europe</option>
          <option value="asi">Asia</option>
          <option value="ant">Antarctic</option>
        </select>
        {allCountries?.map((e) => {
          return (
            <div>
              <Link to={"/home/" + e.name}>
                <Card
                  key={e.name}
                  flag={e.flag}
                  name={e.name}
                  continent={e.continent}
                />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
