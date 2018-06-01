//SERVER CONFIGURATION - SOFTWARRIOR

//Variables =================================================================================================

    const express           = require('express');
    const methodOverride    = require('method-override')
    const app               = express();
    const passport          = require('passport');
    const session           = require('express-session');
    const bodyParser        = require('body-parser');
    const engines           = require('consolidate');
    const path              = require('path');
    const env               = require('dotenv').load()
    const exphbs            = require('express-handlebars');

//Configuración =================================================================================================

    //Mensaje de bienvenida
    console.log('~~ Bienvenido al SW de Decisiones de Softwarrior ~~')

    //Para incluir métodos PUT & DELETE
    app.use(methodOverride('_method'))

    //Para BodyParser
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    //Para Passport
    app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret
    app.use(passport.initialize());
    app.use(passport.session()); // persistent login sessions

    //Para HTML
    app.set('view engine', 'ejs');
    app.set('views', path.join(__dirname, 'views'));
    app.engine('html', require('ejs').renderFile);

    //Requerimos rutas
    app.set('views', './app/views'); //seteamos la carpeta de views
    require('./app/routes')(app); //rutas de vistas
    require('./app/routes/authUser.js')(app,passport); //rutas del usuario
    require('./app/routes/authAdmin.js')(app,passport); //rutas del usuario
    require('./app/routes/session.js')(app); //rutas de las sesiones
    require('./app/routes/stage.js')(app); //rutas de los escenarios

    //Pasamos controladores de angular
    app.use(express.static('./app/public'));

    //Ruta Api por defecto
    app.use('/api', require('./app/routes/api'));

    //Ruta por defecto
    app.get('/', function (req, res) {
        res.render('index.html')
    });

    //Requerimos modelos
    var models = require("./app/models");

    //Cargamos estrategias de passport
    require('./app/config/passport/passport.js')(passport,models);

    //Sincronizamos DB
    models.sequelize.sync().then(function(){
    console.log('[!] GENIAL! La BD ha sido sincronizada :D')
    console.log('>> Ingresa a localhost:5000/')

    }).catch(function(err){
    console.log(err,"[!] UPS! Algo salió mal con la sincronización de la BD :C")
    });

    app.listen(5000, function(err){
        if(!err)
        console.log("===================================================\n|======EL SERVIDOR DE SOFTWARRIOR ESTÁ VIVO!======|\n==================================================="); else console.log(err)
    });
