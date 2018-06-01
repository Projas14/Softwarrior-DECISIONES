//CONTROLADOR DEL ESCENARIO - SOFTWARRIOR
    
//Variable  ==================================================================================================

const Stage = require('../models').stage;
var exports = module.exports = {}


//Métodos CRUD y otros  =====================================================================================

  //Get a list of all sessions using model.findAll()
  exports.index = function(req, res) {
    Stage.findAll({
    })
      .then(function (stages) {
        res.status(200).json(stages);
      })
      .catch(function (error) {
        res.status(500).json(error);
      });
  }

  //Get a session by the unique ID using model.findById()
  exports.show = function(req, res) {
    Stage.findById(req.params.id, {
    })
    .then(function (stage) {
      res.status(200).json(stage);
    })
    .catch(function (error){
      res.status(500).json(error);
    });
  }

  //Create a new session using model.create()
  exports.create = function(req, res) {
    Stage.create({
      description: req.body.description,
      session_id: req.params.session_id,
    })
      .then(function (newStage) {
        res.redirect('back');
      })
      .catch(function (error){
        res.status(500).json(error);
      });
  }

  //Edit an existing session details using model.update()
  exports.update = function(req, res) {
    Stage.update(req.body, {
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
    Stage.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(function (deletedRecords) {
      res.redirect('back');
    })
    .catch(function (error){
      res.status(500).json(error);
    });
  }