//CONTROLADOR DEL USUARIO - SOFTWARRIOR

//Variable  ==================================================================================================

const User = require('../models').user;
const Session = require('../models').session;
const Stage = require('../models').stage;
var exports = module.exports = {}

//Controladores del Passport=================================================================================

exports.register = function(req,res){

	res.render('administrador/signupadmin.html');

}

exports.login = function(req,res){

	res.render('administrador/signinadmin.html');

}

exports.logout = function(req,res){

  req.session.destroy(function(err) {
  res.redirect('/');
  });

}

//Métodos CRUD y otros=====================================================================================


  //Get a list of all users using model.findAll()
  exports.index = function(req, res) {
    User.findAll({
      include: Session, Stage
    })
      .then(function (users) {
        res.status(200).json(users);
      })
      .catch(function (error) {
        res.status(500).json(error);
      });
  }

  //Get an user by the unique ID using model.findById()
  exports.show = function(req, res) {
    User.findById(req.params.id, {
      include: Session, Stage
    })
    .then(function (user) {
      res.status(200).json(user);
    })
    .catch(function (error){
      res.status(500).json(error);
    });
  }

  //Edit an existing user details using model.update()
  exports.update = function(req, res) {
    User.update(req.body, {
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

  //Delete an existing author by the unique ID using model.destroy()
  exports.delete = function(req, res) {
    User.destroy({
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
