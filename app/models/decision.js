//MODELO DE DECICIONES - SOFTWARRIOR

module.exports = function(sequelize, Sequelize) {

  var Decision = sequelize.define('decision', {

    id: {autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER},
    name: {type: Sequelize.STRING, allowNull: false }, 
    mechanism: {type:Sequelize.TEXT, allowNull: false},
    result: {type:Sequelize.TEXT, allowNull: false},
    }, {

      underscored: true,
      classMethods: {
          associate: function(models) {

              //Una decision puede ser escogida por muchos usuarios
              Decision.hasMany(models.decision_user, {
              onDelete: 'cascade'

            })

          }
      }
  })

  return Decision;

};