//tenemos al modelo en la constante producto
const Jugador = require('../models/jugador.model');

module.exports.createJugador = (request, response) =>{
    //desestructuramos
    const {name,position,action} = request.body;
    Jugador.create({
        name, position,action
    })
        .then(jugador => response.json({insertedJugador: jugador, msg: 'Creación exitosa'}))
        .catch(err => response.status(400).json(err));
}

module.exports.getAllJugadores = (_,response) =>{
    Jugador.find({}, null,{sort: {name: 1}})
    .then(retrievedJugadores => response.json(retrievedJugadores))
    .catch(err => response.json(err))
}

module.exports.getJugador = (request, response) =>{
    Jugador.findOne({_id: request.params.id})
    .then(jugador => response.json(jugador))
    .catch(err => response.status(400).json(err));
}

module.exports.updateJugador = (request, response) =>{
        Jugador.findOneAndUpdate({_id: request.params.id}, {...request.params, action: request.params.action}, {new: true})
        .then(updatedJugador =>{
            response.json({updatedJugador: updatedJugador, msg:'Jugador ha sido actualizado'});
        })
        .catch(err => response.json({err: err, msg: 'Error al actualizar el jugador'}));
    
}

module.exports.deleteJugador = (request, response) =>{
    Jugador.deleteOne({_id: request.params.id})
    .then(jugadorDeleted => response.json(jugadorDeleted))
    .catch(err => response.json(err))
}
