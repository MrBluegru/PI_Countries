const { Router } = require("express");
const axios = require("axios");
const {Country, Activity} = require("../db.js");
const router = Router();

// traemos la informacion de la API:
const getApiInf = async () => {
  const { data } = await axios.get(`https://restcountries.com/v3/all`);
  const apiInf = data.map((e) => {
    return {
      id: e.cca3,
      name: e.name.common,
      flag: e.flags[0],
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
};
saveApiInf();

// traemos la informacion guardada en la base de datos incluyendo actividades:
const getDBInf= async () => {
  const countries = await Country.findAll({
    include: [{ model: Activity }],
  });
  return countries;
};


router.get("/countries", async (req, res) => {
  const inf = await getDBInf();
  res.json(inf);

});

router.get("/countries/:id", async (req, res) => {
  const { id } = req.params;
  const country = await Country.findByPk(id, {
    include: [{ model: Activity }],
  });
  res.json(country);
}
);




module.exports = router;
