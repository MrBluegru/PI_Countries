const { Router } = require("express");
const axios = require("axios");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

const getApniIfo = async () => {
    const { data } = await axios.get(`https://restcountries.com/v3/all`);
    const apiInfo = data.map(e => {
        return {
            code: e.cca3,
            name: e.name,
            flag: e.flags[0],
            continent: e.region,
            capital: e.capital,
            subregion: e.subregion,
            area: e.area,
            population: e.population,
        };
    });


    



};
module.exports = router;
