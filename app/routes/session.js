//RUTAS DE LAS SESIONES - SOFTWARRIOR

//Variables =================================================================================================

var authSessionController = require('../controllers/sessionController.js');

//Rutas =================================================================================================

module.exports = function(app){

    app.get('/sessions', authSessionController.index);
    app.get('/sessions/:id', authSessionController.show);
    app.post('/sessions/:user_id', authSessionController.create);
    app.put('/sessions', authSessionController.update);
    app.delete('/sessions', authSessionController.delete);

}
