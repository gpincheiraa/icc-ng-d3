(function(){

  "use strict";

  //Módulos del sistema

  //Modulo donde incluiremos todos los elementos comunes de la app
  angular
    .module('icc-ng-d3.common',[]);  

  //Modulo donde incluiremos todo lo relacionado a dashboard
  angular
    .module('icc-ng-d3.dashboard',[]);

  //Este será nuestro módulo principal que debe coincidir con el nombre
  //declarado en el html en la directiva ng-app (directiva base de la aplicación Angular)
  angular
    .module('icc-ng-d3',['ui.router','icc-ng-d3.common','icc-ng-d3.dashboard']);


  //Datos globales
  angular
    .module('icc-ng-d3')
    .constant('base_url','https://icc-ng-d3-api.herokuapp.com/api');  

  //funcion de configuración del módulo principal
  angular
    .module('icc-ng-d3')
    .config(configFunction)
  
  configFunction.$inject = ['$stateProvider', '$urlRouterProvider'];
  
  function configFunction($stateProvider,$urlRouterProvider){
    
    $urlRouterProvider.otherwise("app/dashboard");

    $stateProvider
      .state('app',{
        url: '/app',
        views:{
          "app" : {
            templateUrl: "app_modules/common/navbar.html"
          }
        }
        
      })
  };

  
})();