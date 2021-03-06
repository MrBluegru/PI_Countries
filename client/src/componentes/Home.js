import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../actions";
import Card from "./Card";
import Paginado from "./Paginado.js";
import NavBar from "./NavBar.js";
import "../styles/home.css";

export default function Home() {
  const dispatch = useDispatch();
  const allCountries = useSelector((state) => state.countries);

  // creamos estados locales para paginado
  // estado con la pag actual y uno que setee la pag acctual
  const [currentPage, setCurrentPage] = useState(1);
  // estado local con cuantos paises mostrar por pagina y setea los paises por pagina
  const [countriesPerPage, setCountriesPerPages] = useState(10);
  // constante con el indice del ultimo pais que tengo en la pag
  const indexOfLastCountry = currentPage * countriesPerPage;
  // constante con el indice del primer personaje
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  // constante con los paises que estan en la pagina actual
  const currentCountries = allCountries.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  );

  const paginado = (pageNum) => {
    setCurrentPage(pageNum); // seteo la pag actual
  };

  useEffect(
    () => {
      dispatch(getCountries());
    },
    //eslint-disable-next-line
    [dispatch]
  );

  return (
    <div className="home">
      <div className="titulo">
        <h1>App Countries</h1>
      </div>

      <div className="nav_bar">
        <NavBar />
      </div>

      <div className="paginado">
        <Paginado
          countriesPerPage={countriesPerPage}
          allCountries={allCountries.length}
          paginado={paginado}
        />
      </div>

      <div className="cards">
        {currentCountries?.map((e) => {
          return (
            <Card
              key={e.id}
              id={e.id}
              flag={e.flag}
              name={e.name}
              continent={e.continent}
            />
          );
        })}
      </div>
    </div>
  );
}
