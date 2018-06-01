//CONTROLADOR DEL USUARIO - SOFTWARRIOR
    
//Variable  ==================================================================================================

const User = require('../models').user;
const Session = require('../models').session;
const Stage = require('../models').stage;
var bCrypt = require('bcrypt-nodejs');
var exports = module.exports = {}

//Controladores del Passport=================================================================================

exports.signup = function(req,res){

	res.render('signup.html'); 

}

exports.signin = function(req,res){

	res.render('home.html'); 

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
    
    var generateHash = function(password) {
      return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
    };
    var userPassword = generateHash(req.body.password);
    req.body.password = userPassword;

    User.update(req.body, {
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
