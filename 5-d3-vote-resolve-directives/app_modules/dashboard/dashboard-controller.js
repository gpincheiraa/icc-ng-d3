(function(){

  "use strict";
  
  angular
    .module('icc-ng-d3.dashboard')
    .controller('SurveyDashboardController',SurveyDashboardController);

  SurveyDashboardController.$inject = ['surveyVotesResponse'];

  function SurveyDashboardController(surveyVotesResponse){
    var vm = this;

    vm.title = "Welcome to the ICC's Survey System Dashboard";
    vm.votes = surveyVotesResponse;

  };


})();
  