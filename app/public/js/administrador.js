//CONTROLADOR ANGULAR DE SESIONES - SOFTWARRIOR

//Variable  ==================================================================================================

var app = angular.module("myApp",[]);

//Controlador  ==============================================================================================

app.controller("Usuario", function($scope,$http) {
    $scope.mundo ="hola mundo";
    $scope.title="Listar Usuario";
    $scope.title2="Registrar Usuario";
    $scope.formData = {};
    $http.get('api/usuarios')
        .success(function(data) {
            $scope.user = data;
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });
});


//Registrar
app.controller("administrador", function($scope,$http) {
    $scope.crearAdministrador = function(){
    $http.post('/api/administrador', $scope.formData)
          .success(function(data) {
              $scope.formData = {};
              $scope.todos = data;
              console.log(data);
          })
          .error(function(data) {
              console.log('Error:' + data);
          });
      };
    });
