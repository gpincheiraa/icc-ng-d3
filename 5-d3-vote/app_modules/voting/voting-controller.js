(function() {
  'use strict';
  
  angular
    .module('icc-ng-d3.voting')
    .controller('VotingController', VotingController);
  
  VotingController.$inject = ['SurveyData'];
  
  /* @ngInject */
  function VotingController(SurveyData) {
    
    var vm = this;
    
    vm.title = 'Vote for one of those options';
    vm.options = [];
    vm.form    = {};


    //Resolver promesa
    SurveyData.getData().then(function(res){
      vm.options = res.data;
    });

    vm.selectOption = function(option){

      vm.form.optionSelected = option;

    };

    vm.vote = function(form){

      SurveyData.vote(form).then(function(res){
        
        alert("Your vote it's OK. Thanks");

      });

    };




  }
})();