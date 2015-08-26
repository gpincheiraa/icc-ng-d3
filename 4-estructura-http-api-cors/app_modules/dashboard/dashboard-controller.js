(function(){

  "use strict";
  
  angular
    .module('icc-ng-d3.dashboard')
    .controller('SurveyDashboardController',SurveyDashboardController);

  SurveyDashboardController.$inject = ['SurveyData'];

  function SurveyDashboardController(SurveyData){
    var vm = this;
    
    vm.surveyOptions = []; 
    vm.title = "Welcome to the ICC's Survey System Dashboard";
    //utilizamos el service que nos retorna una promesa y le pasamos una función anónima 
    //que se ejecutará cuando la promesa se cumpla

    SurveyData.getData().then(function(res){

      vm.surveyOptions = res.data;
      console.log("ACÁ UN EJEMPLO DE COMO OBTENER DATOS A TRAVES DE UN SERVICIO QUE A SU VEZ ENVIA UNA PETICIÓN GET A NUESTRA API REST");
      console.log(vm.surveyOptions)

    });

  };
})();
  