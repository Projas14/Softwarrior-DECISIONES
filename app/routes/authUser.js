//RUTAS DEL USUARIO - SOFTWARRIOR

//Variables =================================================================================================

var authUserController = require('../controllers/authUserController.js');

//Rutas =================================================================================================

module.exports = function(app,passport){

    app.get('/signup', authUserController.signup);

    app.get('/home', authUserController.signin);

    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/dashboarduser',
        failureRedirect: '/'}
    ));

    app.get('/dashboarduser',isLoggedIn, function(req, res) {
      res.render('user/dashboarduser.html', {
        user : req.user
      });
    });

    app.get('/updateuser',isLoggedIn, function(req, res) {
      res.render('user/updateuser.html', {
        user : req.user
      });
    });

    app.put('/updaterecords', function(req, res) {
        req.user.email = req.body.email;
        req.user.name = req.body.name;
        req.user.save()
        .then(function() {
            res.redirect('/dashboarduser');
        });
    });

    app.get('/test',isLoggedIn, function(req, res) {
      res.render('test.html', {
        user : req.user
      });
    });

    app.get('/createsession',isLoggedIn, function(req, res) {
      res.render('session/createsession.html', {
        user : req.user
      });
    });

    app.get('/logout',authUserController.logout);

    app.post('/home', passport.authenticate('local-signin',  {
        successRedirect: '/dashboarduser',
        failureRedirect: '/'}
    ));

    app.get('/signintosession',isLoggedIn, function(req, res) {
      res.render('session/signintosession.html', {
        user : req.user
      });
    });

    app.get('/dashboardsession/:id',isLoggedIn, function(req, res) {
        res.render('session/dashboardsession.html', {
            user : req.user,
            session : req.params,
        });
    });

    app.get('/updatesession/:id',isLoggedIn, function(req, res) {
        res.render('session/updatesession.html', {
            user : req.user,
            session : req.params,
        });
    });

    app.get('/dashboardstage/:id_session,:id_stage',isLoggedIn, function(req, res) {
        res.render('session/dashboardstage.html', {
            user : req.user,
            session : req.params,
        });
    });

    app.get('/updatestage/:id_session,:id_stage',isLoggedIn, function(req, res) {
        res.render('session/updatestage.html', {
            user : req.user,
            session : req.params,
        });
    });

    app.get('/dashboardparticipante/:invitedCode',isLoggedIn, function(req, res) {
        res.render('session/dashboardparticipante.html', {
            user : req.user,
            session : req.params,
        });
    });

    app.get('/dashboardparticipanteI/:invitedCode,:id',isLoggedIn, function(req, res) {
        res.render('session/dashboardparticipanteI.html', {
            user : req.user,
            session : req.params,
        });
    });

    app.get('/dashboardparticipanteII/:invitedCode,:id_session,:id_stage',isLoggedIn, function(req, res) {
        res.render('session/dashboardparticipanteII.html', {
            user : req.user,
            session : req.params,
        });
    });

    //Funcion para verificar que un usuario este logueado. En caso negativo se redirecciona al /home.
    function isLoggedIn(req, res, next) {

        if (req.isAuthenticated())
            return next();

        res.redirect('/');
    }

    //Rutas algunas funciones CRUD
    app.get('/users', authUserController.index);
    app.get('/users/:id', authUserController.show);
    app.put('/users', authUserController.update);
    app.delete('/users', authUserController.delete);

}
