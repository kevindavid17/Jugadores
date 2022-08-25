//se importa un modulo 
const mongoose = require('mongoose');

const JugadorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Es necesario insertar un nombre del jugador'],
        minlength: [2, 'Se necesita 2 o más caracteres']
    },
    position: {
        type: String,
        required: [true, 'Es necesario insertar una posición del jugador']
    },
    action: {
        type: String,
        required: [true, 'Es necesario insertar una acción del jugador']
    }
});

const Jugador = mongoose.model('Jugador', JugadorSchema);

//exportamos el modelo
module.exports = Jugador;