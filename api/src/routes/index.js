const { Router } = require("express");
const { Country, Activity } = require("../db.js");
const { Op } = require("sequelize");
const { getDBInf } = require("./datos.js");
const router = Router();

router.get("/countries", async (req, res) => {
  try {
    if (req.query.name) {
      const { name } = req.query;
      const countrie = await Country.findAll({
        where: {
          name: { [Op.iLike]: name },
        },
        include: [{ model: Activity }],
      });
      res.json(countrie);
    } else {
      const countries = await getDBInf();
      res.json(countries);
    }
  } catch (error) {
    res.json({ msj: "No se encontro el pais" });
  }
});

router.get("/countries/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const country = await Country.findByPk(id.toUpperCase(), {
      include: [{ model: Activity }],
    });

    res.json(country);
  } catch (error) {
    next(error);
  }
});

router.post("/activities", async (req, res) => {
  let { countries, name, difficulty, duration, season } = req.body;
  let ActivitieCreated = await Activity.create({
    name,
    difficulty,
    duration,
    season,
  });
 let countrieDB = await Country.findAll({
    where: {
      id: { [Op.iLike]: countries },
    },
  });
  ActivitieCreated.addCountries(countrieDB);
  res.json({ msj: "Se creo la actividad" });
})










module.exports = router;
