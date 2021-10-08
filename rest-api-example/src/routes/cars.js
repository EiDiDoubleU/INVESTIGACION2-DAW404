const { Router } = require ('express');
const router = Router();
const _ = require('underscore');

const cars = require('../sample.json');


//Creando ruta 'cars'
router.get('/', (req, res) => {
    res.json(cars);
});

//creando ruta para nuestro servidor
router.post('/', (req, res) => {
    const { marca, modelo, año, color }= req.body;
    if ( marca && modelo && año && color){
        const id = cars.length + 1;
        const newCar = {...req.body, id};
        cars.push(newCar);
        res.json(cars);
    } else{
        res.status(500).json({error: 'Upss, hubo un error.'}); //Agregamos un estado de error con el 500
    }
});

//Creamos un método para actualizar datos
router.put('/:id', (req, res) => {
    const {id} = req.params;
    const { marca, modelo, año, precio, color }= req.body;
    if (marca && modelo && año && precio && color){
        _.each(cars, (car, i) => {
            if (car.id == id) {
                car.marca = marca;
                car.modelo = modelo;
                car.año = año;
                car.precio = precio;
                car.color = color;
            }
        });
        res.json(cars);
    } else{
        res.status(500).json({error: 'Upss, hubo un error.'});
    }
});



//Creamos método para eliminar datos o IDs
router.delete('/:id', (req, res) => {
    const {id} = req.params;
    //Vamos a crear una función que recorra todo el arreglo
    _.each(cars, (car, i) => {
        if (car.id == id) {
            cars.splice(i, 1);
        }

    });
    res.send(cars);
});

module.exports = router;