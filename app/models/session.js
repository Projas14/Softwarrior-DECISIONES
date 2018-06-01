//MODELO DE LAS SESIONES - SOFTWARRIOR

module.exports = function(sequelize, Sequelize) {

  var Session = sequelize.define('session', {
    id: { autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER},
    title: { type:Sequelize.STRING, allowNull: false },
    description: {type:Sequelize.TEXT},
    invitedCode: {type: Sequelize.STRING, allowNull: false }, 
    estaTerminada: {type: Sequelize.BOOLEAN, defaultValue:false}
    }, {

      underscored:true,
      classMethods: {
          associate: function(models) {
            
            //Una sesion posee muchos escenarios
            Session.hasMany(models.stage, {
              onDelete: 'cascade'

            })
          }
      }
  })

  return Session;

};
