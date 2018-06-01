//CONTROLADOR ANGULAR DE SESIONES Y ESCENARIOS - SOFTWARRIOR

//Variable  =================================================================================================

var app = angular.module("myApp",['TimerApp']);

//Controlador  ==============================================================================================

//Listar sesiones en dashboard de usuario
app.controller('listarsesionesI', function($scope,$http) {
    $scope.title="Listar Sesiones";
    $scope.formData = {};
    $http.get('api/sessions')
        .success(function(data) {
            $scope.session = data;
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });
});

//Mostrar sesion en dhasboard de sesion
app.controller('listarsesionesII', function($scope,$http) {
    $scope.title="Listar Sesiones";
    $scope.formData = {};
    $http.get('../api/sessions')
        .success(function(data) {
            $scope.session = data;
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });
});

//Mostrar escenarios de una sesion
app.controller('listarsescenarios', function($scope,$http) {
    $scope.titlelista="Listar Escenarios";
    $scope.formData = {};
    $http.get('../api/stages')
        .success(function(data) {
            $scope.stage = data;
            console.log(data)
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });
});

//Listar decisiones
app.controller('listardecisiones', function($scope,$http) {
    $scope.title="Listar Decisiones";
    $scope.formData = {};
    $http.get('../api/decisiones')
        .success(function(data) {
            $scope.decision = data;
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });
});

//Listar resultados de decisiones
app.controller('listarresultados', function($scope,$http) {
  $scope.title = 'Lisar Resultados';
  $scope.formData = {};
  $http.get('../api/resultados')
      .success(function(data) {
        $scope.decisionParticipante = data;
      })
      .error(function(data) {
        console.log('Error: ' + data);
      });
  $http.get('../api/usuarios')
      .success(function(data) {
        $scope.user = data;
      })
      .error(function(data) {
        console.log('Error: ' + data);
      });
  $scope.getNameFor = function(id) {
    var user = $scope.user.filter(function(user) {return user.id === id })[0];
    return user.name;
  };
});

//Listar participantes de un escenario
app.controller('listarparticipantes', function($scope,$http) {
  $scope.title = 'Listar Participantes';
  $scope.formData = {};
  $http.get('../api/participantes')
      .success(function(data) {
        $scope.participante = data;
      })
      .error(function(data) {
        console.log('Error: ' + data);
      });
});

//Listar escenarios en los que haz participado
app.controller('listarsescenariosparticipante', function($scope,$http) {
  $scope.formData = {};
  $http.get('../api/participantes')
      .success(function(data) {
        $scope.participante = data;
      })
      .error(function(data) {
        console.log('Error: ' + data);
      });
  $http.get('../api/stages')
        .success(function(data) {
            $scope.stage = data;
            console.log(data)
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });
  $scope.getNameFor = function(id) {
    var stage = $scope.stage.filter(function(stage) {return stage.id === id })[0];
    return stage.description;
  };
  $scope.getStateFor = function(id) {
    var stage = $scope.stage.filter(function(stage) {return stage.id === id })[0];
    return estado = stage.estaTerminada;
  };


});

//Temporizador
var timer = angular.module('TimerApp',[]);
    timer.controller('TimerCtrl', function($scope, $timeout) {
    $scope.hour = 0;
    $scope.min = 0;
    $scope.seg = 0;
    $scope.counter = 0;
    var mytimeout = null; // the current timeoutID

    // Temporizador en segundos
    $scope.onTimeout = function() {
        if($scope.seg !== 0){
              $scope.seg--;}

        if($scope.seg === 0 && $scope.min !== 0){
          $scope.min--;
          $scope.seg=59;
        }
        if($scope.seg === 0 && $scope.min === 0 && $scope.hour !== 0){
          $scope.hour--;
          $scope.min=59;
          $scope.seg=59;
        }
        if($scope.hour === 0 && $scope.min === 0 && $scope.seg === 0) {
            $scope.$broadcast('timer-stopped', 0);
            $timeout.cancel(mytimeout);
            return;
        }

        mytimeout = $timeout($scope.onTimeout, 1000);
    };

    // Iniciar el temporizador
    $scope.startTimer = function() {
        mytimeout = $timeout($scope.onTimeout, 1000);
    };

    // Reset al temporizador
    $scope.resetTimer = function() {
        $scope.$broadcast('timer-stopped', $scope.hour);
        $scope.hour = 0;
        $scope.min = 0;
        $scope.seg = 0;
        $timeout.cancel(mytimeout);
    };

    // Pausar el temporizador
    $scope.pauseTimer = function() {
        $scope.$broadcast('timer-stopped', $scope.hour,$scope.min,$scope.seg);
        $timeout.cancel(mytimeout);
    };

    // Definir un valor inicial del Temporizador
    $scope.Definir = function() {
      var hours = document.getElementById("hour").value;
      var hour= parseInt(hours,10);
      var mins = document.getElementById("min").value;
      var min = parseInt(mins,10);
      var segs = document.getElementById("seg").value;
      var seg = parseInt(segs,10);
      $scope.hour= hour;
      $scope.min= min;
      $scope.seg= seg;
      $timeout.cancel(mytimeout);
    };

    // Agregar mas tiempo al temporizador
    $scope.Agregar = function() {
      var hours = document.getElementById("hour").value;
      var hour= parseInt(hours,10);
      var mins = document.getElementById("min").value;
      var min = parseInt(mins,10);
      var segs = document.getElementById("seg").value;
      var seg = parseInt(segs,10);
      $scope.hour= hour;
      $scope.min= min;
      $scope.seg= seg;
      $scope.hour=$scope.hour + hour;
      $scope.min=$scope.min + min;
      $scope.seg=$scope.seg + seg;
      $timeout.cancel(mytimeout);
      mytimeout = $timeout($scope.onTimeout, 1000);
    };

    $scope.$on('timer-stopped', function(event, remaining) {
        if(remaining === 0) {
            console.log('your time ran out!');
        }
    });
  });
