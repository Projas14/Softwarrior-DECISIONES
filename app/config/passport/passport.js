//PASSPORT CONFIGURATION - SOFTWARRIOR

//Variables  ===================================================================================================

// encriptado de contraseña  
var bCrypt = require('bcrypt-nodejs');

module.exports = function(passport,models){

// variables de los modelos
    var User = models.user;
    var user = models.user;
    var Admin = models.admin;
    var admin = models.admin;

// variable importante :3
    var LocalStrategy = require('passport-local').Strategy;

//Passport del Usuaio ==========================================================================================
    passport.serializeUser(function(user, done) {
            done(null, user.id);
        });


    // used to deserialize the user
    passport.deserializeUser(function(id, done) {
        User.findById(id).then(function(user) {
          if(user){
            done(null, user.get());
          }
          else{
            done(user.errors,null);
          }
        });

    });

// METODOS LOCAL Usuario

    //Local-signup USER
    passport.use('local-signup', new LocalStrategy(

      {
        usernameField : 'email',
        passwordField : 'password',
        passReqToCallback : true // allows us to pass back the entire request to the callback
      },

      function(req, email, password, done){


        var generateHash = function(password) {
        return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
        };



        User.findOne({where: {email:email}}).then(function(user){

        if(user)
        {
          return done(null, false, {message : '[!] Ese correo ya ha sido tomado!'} );
        }

        else
        {
          var userPassword = generateHash(password);
          var data =
          {
            email: email,
            password: userPassword,
            name: req.body.name,
            esInvitado: req.body.esInvitado,
            esadmin: req.body.esadmin,
          };


          User.create(data).then(function(newUser,created){
            if(!newUser){
              return done(null,false);
            }

            if(newUser){
              return done(null,newUser);

            }


          });
        }


      });

    }

    ));

    //LOCAL SIGNIN
    passport.use('local-signin', new LocalStrategy(

    {

    // by default, local strategy uses username and password, we will override with email
    usernameField : 'email',
    passwordField : 'password',
    passReqToCallback : true // allows us to pass back the entire request to the callback
    },

    function(req, email, password, done) {

      var User = user;

      var isValidPassword = function(userpass,password){
        return bCrypt.compareSync(password, userpass);
      }

      User.findOne({ where : { email: email}}).then(function (user) {

        if (!user) {
          return done(null, false, { message: '[!] El correo no existe' });
        }

        if (!isValidPassword(user.password,password)) {

          return done(null, false, { message: '[!] Contraseña incorrecta' });

        }

        var userinfo = user.get();

        return done(null,userinfo);

      }).catch(function(err){

        console.log("Error:",err);

        return done(null, false, { message: '[!] Algo ha salido mal con el inicio de sesión. Vuelve a intentarlo' });


      });

    }
    ));

// METODO LOCAL Administrador

// METODO LOCAL Administrador

    //Local-signup USER
    passport.use('local-signup-Admin', new LocalStrategy(

      {
        usernameField : 'email',
        passwordField : 'password',
        esadminField : 'esadmin',
        passReqToCallback : true // allows us to pass back the entire request to the callback
      },

      function(req, email, password, done){


        var generateHash = function(password) {
        return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
        };



        User.findOne({where: {email:email}}).then(function(user){

        if(user)
        {
          return done(null, false, {message : 'That email is already taken'} );
        }

        else
        {
          var userPassword = generateHash(password);
          var data =
          {
            email: email,
            password: userPassword,
            name: req.body.name,
            esInvitado: req.body.esInvitado,
            esadmin:  req.body.esadmin,
          };


          User.create(data).then(function(newUser,created){
            if(!newUser){
              return done(null,false);
            }

            if(newUser){
              return done(null,newUser);

            }


          });
        }


      });

    }

    ));

    //LOCAL SIGNIN - Admin
    passport.use('local-login-Admin', new LocalStrategy(

    {

    // by default, local strategy uses username and password, we will override with email
    usernameField : 'email',
    passwordField : 'password',
    passReqToCallback : true // allows us to pass back the entire request to the callback
    },

    function(req, email, password,done) {
      var User = user;

      var isValidPassword = function(userpass,password){
        return bCrypt.compareSync(password, userpass);
      }

      User.findOne({ where : { email: email}}).then(function (user) {

        if (!user) {
          return done(null, false, { message: 'Email does not exist' });
        }

        if (!isValidPassword(user.password,password)) {

          return done(null, false, { message: 'Incorrect password.' });
        }

        if (!user.esadmin){
          return done(null, false, { message: 'No eres Admin' });
        }

        var userinfo = user.get();

        return done(null,userinfo);

      }).catch(function(err){

        console.log("Error:",err);

        return done(null, false, { message: 'Something went wrong with your Signin' });


      });

    }
    ));


// FINAL
  }
