//CONTROLADOR DEL DECISION-PARTICIPANTE - SOFTWARRIOR
    
//Variable  ==================================================================================================

const DecisionParticipante = require('../models').decisionParticipante;
var exports = module.exports = {}


//Métodos CRUD y otros  =====================================================================================

  exports.index = function(req, res) {
    DecisionParticipante.findAll({
    })
      .then(function (decisionesparticipante) {
        res.status(200).json(decisionesparticipante);
      })
      .catch(function (error) {
        res.status(500).json(error);
      });
  }

  exports.show = function(req, res) {
    DecisionParticipante.findById(req.params.id, {
    })
    .then(function (decisionparticipante) {
      res.status(200).json(decisionparticipante);
    })
    .catch(function (error){
      res.status(500).json(error);
    });
  }

  exports.create = function(req, res) {
    DecisionParticipante.create({
      d1: req.params.d1,
      d2: req.params.d2,
      d3: req.params.d3,
      d4: req.params.d4,
      d5: req.params.d5,
      d6: req.params.d6,
      d7: req.params.d7,
      d8: req.params.d8,
      d9: req.params.d9,
      d10: req.params.d10,
      d11: req.params.d11,
      d12: req.params.d12,
      d13: req.params.d13,
      d14: req.params.d14,
      d15: req.params.d15,
      d16: req.params.d16,
      d17: req.params.d17,
      stageId: req.params.id_stage,
      user_id: req.user.id,
    })
      .then(function() {
        res.redirect('back');
      })
      .catch(function (error){
        res.status(500).json(error);
      });
  }

  exports.update = function(req, res) {
    DecisionParticipante.update(req.body, {
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
    DecisionParticipante.destroy({
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