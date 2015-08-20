(function(){

  "use strict";
  
  angular
    .module('icc-ng-d3.dashboard')
    .controller('SurveyDashboardController',SurveyDashboardController);

  SurveyDashboardController.$inject = ['SurveyData'];

  function SurveyDashboardController(SurveyData){
    var vm = this,
        data = SurveyData.getData();
    vm.title = "Welcome to the ICC's Survey System Dashboard";
    //Necesitamos los datos para dibujar la encuesta (Crearemos un Service para ello)
  };
})();
  