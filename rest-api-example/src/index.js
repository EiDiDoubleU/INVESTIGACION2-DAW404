const express = require('express');
const app = express();
const morgan = require('morgan');

//configuraciones
/*el código que está dentro de los paréntesis son puertos, si en caso de que no exista un puerto en la nube 
usará el puerto 3000 y si lo hay, usará el puerto process.env.PORT. En resumen, estamos validando si un puerto existe o no. */
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2); //Con este comando ordenamos las líneas de código en el navegador, pero en mi caso no es necesario porque las ordena por defecto

//middlewares
app.use(morgan('dev'));
//con este comando vamos a empezar a entender datos desde los input en los formularios
app.use(express.urlencoded({extended: false}));
//con este comando mi servidor puede empezar a recibir y entender comandos json
app.use(express.json());


//rutas
app.use(require('./routes/index')); //este comando sirve para ordenar mejor las líneas de código
app.use('/api/cars',require('./routes/cars'));


//Iniciando el servidor
app.listen(app.get('port'), () => {
    //para poner esas comillas se usa alt+96
    console.log(`Server on port ${app.get('port')}`);
});
