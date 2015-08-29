(function(){

  "use strict";
  
  angular
    .module('icc-ng-d3.voting')
    .config(configFunction)
  
  configFunction.$inject = ['$stateProvider'];
  
  function configFunction($stateProvider){

    $stateProvider
      .state('app.voting',{
        url: "/voting",
        templateUrl: "app_modules/voting/voting.html",
        controller: "VotingController",
        controllerAs: "voting",
        resolve: {

          surveyOptionsResponse : ['SurveyData',function(SurveyData){

            return SurveyData.getData().then(function(res){
              return res.data;
            });

          }]

        }

      });
  

  };

})();

