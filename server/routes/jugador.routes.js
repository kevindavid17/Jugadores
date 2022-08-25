const JugadorController = require('../controllers/jugador.controller');

module.exports = function(app){
    app.post('/api/jugador/new', JugadorController.createJugador);
    app.get('/api/jugadores', JugadorController.getAllJugadores);
    app.get('/api/jugador/:id',JugadorController.getJugador);
    app.put('/api/jugador/:id/update/action/:action',JugadorController.updateJugador);
    app.delete('/api/jugador/:id/delete', JugadorController.deleteJugador);
}