(function(){

  "use strict";
  
  angular
    .module('icc-ng-d3.dashboard')
    .config(configFunction)
  
  configFunction.$inject = ['$stateProvider'];
  
  function configFunction($stateProvider){

    $stateProvider
      .state('app.dashboard',{
        url: "/dashboard",
        views:{
          
          'module@':{
            templateUrl: "app_modules/dashboard/dashboard.html",
            controller: "SurveyDashboardController",
            controllerAs: "dashboard",
            resolve : {
              surveyDataResponse : ['SurveyData',function(SurveyData){

                //si acá hay una promesa agregar then 
                return SurveyData.getData();

              }]
            },
          } 
        } 
      });
  

  };

})();

