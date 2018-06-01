//MODELO DE DINAMICA DEL JUEGO - SOFTWARRIOR
//****La tabla relaciona la decision que tomo el usuario con el escenario de una respectiva sesión.

module.exports = function(sequelize, Sequelize) {

  var DecisionUser = sequelize.define('decision_user', {

    id: {autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER},
    value: {type: Sequelize.INTEGER, allowNull: false }, 
    justification: {type:Sequelize.TEXT},
    }, {

      underscored: true,
      classMethods: {
          associate: function(models) {

          }
      }
  })

  return DecisionUser;

};