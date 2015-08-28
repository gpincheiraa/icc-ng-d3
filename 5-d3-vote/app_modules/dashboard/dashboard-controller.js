(function(){

  "use strict";
  
  angular
    .module('icc-ng-d3.dashboard')
    .controller('SurveyDashboardController',SurveyDashboardController);

  SurveyDashboardController.$inject = ['SurveyData'];

  function SurveyDashboardController(SurveyData){
    var vm = this;

    vm.title = "Welcome to the ICC's Survey System Dashboard";
    vm.votes = [];

    //Resolver promesa
    SurveyData.getVotes().then(function(res){
      vm.votes = res.data;
    });

  };


})();
  