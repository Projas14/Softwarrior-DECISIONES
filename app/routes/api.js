//API CONFIGURATION - SOFTWARRIOR

//Variables ====================================================================================================

var express = require('express');
var router= express.Router();
var mysql = require('mysql');
var url = require('url');
var models  = require('../models');

//Configuración =================================================================================================

module.exports = router;

//Listado de Usuarios
router.get('/usuarios', function(req, res, next) {
	try {
		models.user.findAll().then(function (user) {
			res.json(user);
		});
	} catch (ex) {
		console.error("Internal error:" + ex);
		return next(ex);
	}
});

//Crear Usuarios
router.post('/administrador', function(req,res,next){
	try{
		console.log(req.body.permiso);
		var resultado=[];
		console.log(req.body.password);
		models.admin.create({
			username: req.body.username,
			name: req.body.name,
			password: req.body.password
		});
		}

		catch(ex){
		console.error("Internal error:"+ex);
		return next(ex);
		}
});

//Listado de Sesiones
router.get('/sessions', function(req, res, next) {
	try {
		models.session.findAll().then(function (session) {
			res.json(session);
		});
	} catch (ex) {
		console.error("Internal error:" + ex);
		return next(ex);
	}
});

//Listado de Escenarios
router.get('/stages', function(req, res, next) {
	try {
		models.stage.findAll().then(function (stage) {
			res.json(stage);
		});
	} catch (ex) {
		console.error("Internal error:" + ex);
		return next(ex);
	}
});

//Listado de Decisiones
router.get('/decisiones', function(req, res, next) {
	try {
		models.decision.findAll().then(function (decision) {
			res.json(decision);
		});
	} catch (ex) {
		console.error("Internal error:" + ex);
		return next(ex);
	}
});

//Listado de Resultados (Decisiones del Participante)
router.get('/resultados', function(req,res,next) {
	try {
		models.decisionParticipante.findAll().then(function (decisionParticipante) {
			res.json(decisionParticipante);
		});
	} catch (ex) {
		console.error("Internal error: " + ex);
		return next(ex);
	}
});

//Listado de Participantes 
router.get('/participantes', function(req,res,next) {
	try {
		models.participante.findAll().then(function (participante) {
			res.json(participante);
		});
	} catch (ex) {
		console.error("Internal error: " + ex);
		return next(ex);
	}
});