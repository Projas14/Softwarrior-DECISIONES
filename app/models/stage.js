//MODELO DE LOS ESCENARIOS - SOFTWARRIOR

module.exports = function(sequelize, Sequelize) {

  var Stage = sequelize.define('stage', {

    id: {autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER},
    description: {type:Sequelize.TEXT},
    estaTerminada: {type: Sequelize.BOOLEAN, defaultValue: false},

    }, {

      classMethods: {
          associate: function(models) {

              //Un escenario puede tener muchos participantes
              Stage.belongsToMany(models.user, { through: models.participante });
              
              //Un escenario puede tener muchas decisiones asociadas
              Stage.hasMany(models.decision_user, {
                onDelete: 'cascade'
              })

              //Un escenario puede tener muchas decisiones de usuario asociadas (METODO2)
              Stage.hasMany(models.decisionParticipante, {
                onDelete: 'cascade'
              })

          }
      }
  })

  return Stage;

};