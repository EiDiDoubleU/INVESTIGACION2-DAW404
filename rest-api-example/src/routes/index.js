//Este archivo index.js sirve para colocar nuestras rutas aquí

const { Router } = require("express");
//Vamos a ejecutar el router y lo vamos a guardar en una constante
const router = Router();

// Vamos a empezar con lo de las REST API
//Rutas
router.get('/prueba', (req, res) => {
    const data = {
        "Nombre" : "Audi R8",
        "precio" : "$170.000"

    };
    res.json(data); //Mostraremos un mensaje en el navegador
});

module.exports = router;