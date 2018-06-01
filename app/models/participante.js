//MODELO DE PARTICIPANTE - SOFTWARRIOR

module.exports = (sequelize, Sequelize) => {

	var Participante = sequelize.define('participante', {
		// Tabla para relacionar un usuario con un escenario
		// como su participante.
		// Tablas a relacionar: user & stage  
	});

  return Participante;

};


