//CONTROLADOR DE LA SESION - SOFTWARRIOR
    
//Variable  ==================================================================================================

const Session = require('../models').session;
const Stage = require('../models').stage;
var exports = module.exports = {}


//Métodos CRUD y otros  =====================================================================================

  //Get a list of all sessions using model.findAll()
  exports.index = function(req, res) {
    Session.findAll({
      include: Stage
    })
      .then(function (sessions) {
        res.status(200).json(sessions);
      })
      .catch(function (error) {
        res.status(500).json(error);
      });
  }

  //Get a session by the unique ID using model.findById()
  exports.show = function(req, res) {
    Session.findById(req.params.id, {
      include: Stage
    })
    .then(function (session) {
      res.status(200).json(session);
    })
    .catch(function (error){
      res.status(500).json(error);
    });
  }

  //Create a new session using model.create()
  exports.create = function(req, res) {
    Session.create({
      title: req.body.title,
      description: req.body.description,
      invitedCode: req.body.invitedCode,
      user_id: req.params.user_id,
    })
      .then(function (newSession) {
        res.redirect('/dashboarduser');
      })
      .catch(function (error){
        res.status(500).json(error);
      });
  }

  //Edit an existing session details using model.update()
  exports.update = function(req, res) {
    Session.update(req.body, {
      where: {
        id: req.body.id
      }
    })
    .then(function (updatedRecords) {
      res.redirect('back');
    })
    .catch(function (error){
      res.status(500).json(error);
    });
  }

  //Delete an existing session by the unique ID using model.destroy()
  exports.delete = function(req, res) {
    Session.destroy(req.body, {
      where: {
        id: req.body.id
      },
      force: true
    })
    .then(function (deletedRecords) {
      res.redirect('/dashboarduser');
    })
    .catch(function (error){
      res.status(500).json(error);
    });
  }