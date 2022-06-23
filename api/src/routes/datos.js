const axios = require("axios");
const { Country, Activity } = require("../db.js");

// traemos la informacion de la API:
const getApiInf = async () => {
  const { data } = await axios.get(`https://restcountries.com/v3/all`);
  const apiInf = data.map((e) => {
    return {
      id: e.cca3,
      name: e.name.common,
      flag: e.flags[1],
      continent: e.region,
      capital: e.capital,
      subregion: e.subregion,
      area: e.area,
      population: e.population,
    };
  });
  return apiInf;
};

//enviamos getApiInfo a la base de datos:
const saveApiInf = async () => {
  const apiInf = await getApiInf();
  await Country.bulkCreate(apiInf);
  console.log("Se guardaron los paises");
};
saveApiInf();

// traemos la informacion guardada en la base de datos incluyendo actividades:
const getDBInf = async () => {
  const countries = await Country.findAll({
    include: [{ model: Activity }],
  });
  return countries;
};

module.exports = { getDBInf };
