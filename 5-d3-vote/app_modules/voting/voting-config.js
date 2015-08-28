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
        views:{
          
          'module@':{
            templateUrl: "app_modules/voting/voting.html",
            controller: "VotingController",
            controllerAs: "voting"
          } 
        } 
      });
  

  };

})();

