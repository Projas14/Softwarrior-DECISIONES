//INDICE DE RUTAS - SOFTWARRIOR

//Variables =================================================================================================

var participanteController = require('../controllers/participanteController.js');
var decisionParticipanteController = require('../controllers/decisionParticipanteController.js');

//Rutas HTML =================================================================================================

module.exports = (app) => {

	//Home
  app.get('/home', function (req, res) {
    res.render('home.html')
  });

  //Formulario de Registro Usuarios
  app.get('/signup', function (req, res) {
    res.render('user/signup.html')
  });

  //Formulario de Registro Administrador
  app.get('/signupadmin', function (req, res) {
    res.render('administrador/signupadmin.html')
  });

  //Ingreso de Invitados
  app.get('/signupguest', function (req, res) {
    res.render('user/signupguest.html')
  });

  // Ingreso de participantes
  app.post('/participar', participanteController.create);

  // Ingreso de decisiones
  app.get('/votar/:d1,:d2,:d3,:d4,:d5,:d6,:d7,:d8,:d9,:d10,:d11,:d12,:d13,:d14,:d15,:d16,:d17,:id_stage', decisionParticipanteController.create);

  //PAGINA DE TESTEO
  app.get('/index', function (req, res) {
    res.render('index.html')
  });

};
