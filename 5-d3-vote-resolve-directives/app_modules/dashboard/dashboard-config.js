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
        templateUrl: "app_modules/dashboard/dashboard.html",
        controller: "SurveyDashboardController",
        controllerAs: "dashboard",
        resolve: {

          //Resolver promesa
          surveyVotesResponse: ['SurveyData',function(SurveyData){

            return SurveyData.getVotes().then(function(res){
              return res.data;
            });

          }]  

        }
      });
  

  };

})();

