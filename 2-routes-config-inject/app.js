(function(){

  "use strict";

  //Este será nuestro módulo principal que debe coincidir con el nombre
  //declarado en el html en la directiva ng-app (directiva base de la aplicación Angular)
  angular
    .module('icc-ng-d3',['ui.router']);

  angular
    .module('icc-ng-d3')
    .config(configFunction)
  
  configFunction.$inject = ['$stateProvider', '$urlRouterProvider']
  
  function configFunction($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise("app/dashboard");

    $stateProvider
      .state('app',{
        url:'/app',
        templateUrl: "partials/navbar.html"
      })
      .state('app.dashboard',{
        url: "/dashboard",
        views:{
          'module@':{
            templateUrl: "partials/dashboard.html"
          }
        } 
      });
  };

  //Nuestro primer controlador
  angular
    .module('icc-ng-d3')
    .controller('SurveyDashboardController',SurveyDashboardController);


  function SurveyDashboardController(){
    var vm = this;
    vm.title = "Welcome to the ICC's Survey System Dashboard";

  };

  //Otro controlador
  angular
    .module('icc-ng-d3')
    .controller('navbarController',navbarController);

  navbarController.$inject = ['$state'];

  function navbarController($state){
    var vm = this;

    vm.isModuleActive = function(_state){
      return $state.is(_state);
    };
  
  };


})();