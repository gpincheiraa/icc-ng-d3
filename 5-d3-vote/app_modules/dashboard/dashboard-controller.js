(function(){

  "use strict";
  
  angular
    .module('icc-ng-d3.dashboard')
    .controller('SurveyDashboardController',SurveyDashboardController);

  SurveyDashboardController.$inject = ['surveyDataResponse'];

  function SurveyDashboardController(surveyDataResponse){
    var vm = this;

    vm.title = "Welcome to the ICC's Survey System Dashboard";
    vm.data  = angular.copy(surveyDataResponse);
  };
})();
  