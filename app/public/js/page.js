//CONTROLADOR ANGULAR PARA LA IMPLEMENTACIÓN DE VIEW TEMPLATE - SOFTWARRIOR

//Variable  =================================================================================================

var mainApp = angular.module("mainApp", ['ngRoute']);

//Configuracion  ==============================================================================================

mainApp.config(['$routeProvider', function($routeProvider) {
            
  $routeProvider.
            
    when('/home', {
      templateUrl: 'home.htm',
      controller: 'HomeController'
    }).
            
    when('/signup', {
      templateUrl: 'signup.htm',
      controller: 'SignupController'
    }).

    when('/signinuser', {
      templateUrl: 'signinuser.htm',
      controller: 'SigninUserController'
    }).
            
    otherwise({
      redirectTo: '/home'
    });
  }]);

//Controlador  ==============================================================================================

mainApp.controller('HomeController', function($scope) {
  $scope.message = "Paǵina principaaal";
});
         
mainApp.controller('SignupController', function($scope) {
  $scope.message = "Pagina pa registrarse";
});

mainApp.controller('SigninUserController', function($scope) {
  $scope.message = "Pagina pa loguearse como user";
});
      