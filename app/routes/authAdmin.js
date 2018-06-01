//RUTAS DEL USUARIO - SOFTWARRIOR

//Variables =================================================================================================

var authAdminController = require('../controllers/authAdminController.js');

//Rutas =================================================================================================

module.exports = function(app,passport){

    app.get('/signupadmin', authAdminController.register);

    app.get('/signinadmin', authAdminController.login);

    app.post('/signupadmin', passport.authenticate('local-signup-Admin', {
        successRedirect: '/dashboardadmin',
        failureRedirect: '/'}
    ));

    app.get('/dashboardadmin', isLoggedIn,function(req, res) {
      res.render('administrador/dashboardadmin.html', {
        admin : req.user
      });
    });

    app.get('/VerUsuario', isLoggedIn,function(req, res) {
      res.render('administrador/listuser.html', {
        admin : req.user
      });
    });

    app.get('/VerSession', isLoggedIn,function(req, res) {
      res.render('administrador/listSession.html', {
        admin : req.user
      });
    });

    app.get('/logout',authAdminController.logout);

    app.post('/signinadmin', passport.authenticate('local-login-Admin',  {
        successRedirect: '/dashboardadmin',
        failureRedirect: '/signupadmin'}
    ));

    //Funcion para verificar que un usuario este logueado. En caso negativo se redirecciona al /home.
    function isLoggedIn(req, res, next) {

        if (req.isAuthenticated())
            return next();

        res.redirect('/signinadmin');
    };

}
