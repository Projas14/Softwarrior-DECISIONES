//RUTAS DE LOS ESCENARIOS - SOFTWARRIOR

//Variables =================================================================================================

var authStageController = require('../controllers/stageController.js');

//Rutas =================================================================================================

module.exports = function(app){

    app.get('/stages', authStageController.index);
    app.get('/stages/:id', authStageController.show);
    app.post('/stages/:session_id', authStageController.create);
    app.put('/stages', authStageController.update);
    app.delete('/stages', authStageController.delete);

}