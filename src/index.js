const express = require('express');
const app = express();

// configuraciones
app.set('port', process.env.PORT || 3000);

// Rutas 
app.get('/', (req, res) =>{
    res.send({
        nombre: 'Edwin Alfredo Lopez Gomez',
        carne: '201314007',
        aux: 'Manuel Alejandro De Mata Mayen'
    });
});

// servidor 
app.listen(app.get('port'), ()=>{
    console.log('Servidor en el puerto 3000');
});