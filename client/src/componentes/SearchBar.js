import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getCountriesByName } from "../actions";
import "../styles/searchBar.css";

export default function SearchBar() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  function handleChange(e) {
    e.preventDefault();
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getCountriesByName(name))
    setName("")
   
  }

  return (
    <div className="search_bar">
      <input
        type="text"
        placeholder="Pais.."
        onChange={(e) => {
          handleChange(e);
        }}
      />
      <button
      type="submit"
      onClick={(e) => handleSubmit(e)}>Buscar</button>
    </div>
  );
}
