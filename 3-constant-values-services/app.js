(function(){

  "use strict";

  //Este será nuestro módulo principal que debe coincidir con el nombre
  //declarado en el html en la directiva ng-app (directiva base de la aplicación Angular)
  angular
    .module('icc-ng-d3',['ui.router']);


  //Se puede inyectar en controllers y services (ejemplo)
  angular
    .module('icc-ng-d3')
    .value('languageVal','en');

  //Se puede inyectar en controllers,services y en config (ejemplo)
  angular
    .module('icc-ng-d3')
    .constant('languageConst','en');


   angular
    .module('icc-ng-d3')
    .constant('base_url','THE_API_URL');  

  //funcion de configuración del módulo principal
  angular
    .module('icc-ng-d3')
    .config(configFunction)
  
  configFunction.$inject = ['$stateProvider', '$urlRouterProvider'];
  
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

  SurveyDashboardController.$inject = ['SurveyData'];

  function SurveyDashboardController(SurveyData){
    var vm = this,
        data = SurveyData.getData();
    vm.title = "Welcome to the ICC's Survey System Dashboard";
    //Necesitamos los datos para dibujar la encuesta (Crearemos un Service para ello)
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



  //Nuestro primer Service (Factory)
  angular
    .module('icc-ng-d3')
    .factory('SurveyData',SurveyData);


  function SurveyData(){
    
    var surveyData = {
      getData: getDataFn
    };

    return surveyData;

    function getDataFn(){
      var sampleData = {
        "js": 5,
        "angular-advanced": 4,
        "more-angular-basics": 3,
        "angular-ionic": 15
      };
      
      return sampleData;

    };
  
  }; //SurveyData

})();