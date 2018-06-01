//MODELO DEL USUARIO - SOFTWARRIOR

module.exports = function(sequelize, Sequelize) {

  var User = sequelize.define('user', {

    id: {autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER},
    email: { type:Sequelize.STRING, validate: {isEmail:true}, allowNull: false },
    name: {type:Sequelize.TEXT},
    password : {type: Sequelize.STRING, allowNull: false },
    lastLogin: {type: Sequelize.DATE},
    esInvitado: {type: Sequelize.BOOLEAN},
    esadmin: {type: Sequelize.BOOLEAN},
    }, {

      underscored: true,
      classMethods: {
          associate: function(models) {

            //Un usuario puede tener muchas sesiones
            User.hasMany(models.session, {
              onDelete: 'cascade'

            }),

            //Un usuario puede tomar muchas decisiones en diferentes escenarios
            User.hasMany(models.decision_user, {
              onDelete: 'cascade'
            })

            //Un usuario puede tomar muchas decisiones en diferentes escenarios(MÉTODO2)
            User.hasMany(models.decisionParticipante, {
              onDelete: 'cascade'
            })

            //Un usuario puede pertenecer a muchos escenarios
            User.belongsToMany(models.stage, { through: models.participante });

          }
      }
  })

  return User;

};
