//MODELO DE DINAMICA DEL JUEGO - SOFTWARRIOR
//****La tabla relaciona las decisiones del usuario, su valoración y el escenario
//****correspondiente.

module.exports = function(sequelize, Sequelize) {

  var DecisionParticipante = sequelize.define('decisionParticipante', {

    id: {autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER},
    d1: {type: Sequelize.INTEGER, allowNull: false },
    d2: {type: Sequelize.INTEGER, allowNull: false }, 
    d3: {type: Sequelize.INTEGER, allowNull: false }, 
    d4: {type: Sequelize.INTEGER, allowNull: false }, 
    d5: {type: Sequelize.INTEGER, allowNull: false }, 
    d6: {type: Sequelize.INTEGER, allowNull: false }, 
    d7: {type: Sequelize.INTEGER, allowNull: false }, 
    d8: {type: Sequelize.INTEGER, allowNull: false }, 
    d9: {type: Sequelize.INTEGER, allowNull: false }, 
    d10: {type: Sequelize.INTEGER, allowNull: false }, 
    d11: {type: Sequelize.INTEGER, allowNull: false }, 
    d12: {type: Sequelize.INTEGER, allowNull: false }, 
    d13: {type: Sequelize.INTEGER, allowNull: false }, 
    d14: {type: Sequelize.INTEGER, allowNull: false },
    d15: {type: Sequelize.INTEGER, allowNull: false }, 
    d16: {type: Sequelize.INTEGER, allowNull: false }, 
    d17: {type: Sequelize.INTEGER, allowNull: false },  
    }, {

      underscored: true,
      classMethods: {
          associate: function(models) {

          }
      }
  })

  return DecisionParticipante;

};