//CONTROLADOR DEL PARTICIPANTE - SOFTWARRIOR
    
//Variable  ==================================================================================================

const Participante = require('../models').participante;
var exports = module.exports = {}


//Métodos CRUD y otros  =====================================================================================

  exports.index = function(req, res) {
    Participante.findAll({
    })
      .then(function (participantes) {
        res.status(200).json(participantes);
      })
      .catch(function (error) {
        res.status(500).json(error);
      });
  }

  exports.show = function(req, res) {
    Participante.findById(req.params.id, {
    })
    .then(function (participante) {
      res.status(200).json(participante);
    })
    .catch(function (error){
      res.status(500).json(error);
    });
  }

  exports.create = function(req, res) {
    Participante.create({
      stageId: req.body.stage_id,
      user_id: req.body.user_id,
    })
      .then(function() {
        res.redirect('/dashboardparticipanteII/'+req.body.invitedCode+','+req.body.session_id+','+req.body.stage_id);
      })
      .catch(function (error){
        res.redirect('/dashboardparticipanteII/'+req.body.invitedCode+','+req.body.session_id+','+req.body.stage_id);
      });
  }

  exports.update = function(req, res) {
    Participante.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    .then(function (updatedRecords) {
      res.status(200).json(updatedRecords);
    })
    .catch(function (error){
      res.status(500).json(error);
    });
  }

  exports.delete = function(req, res) {
    Participante.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(function (deletedRecords) {
      res.status(200).json(deletedRecords);
    })
    .catch(function (error){
      res.status(500).json(error);
    });
  }