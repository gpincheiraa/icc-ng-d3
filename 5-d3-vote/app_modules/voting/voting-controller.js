(function() {
  'use strict';
  
  angular
    .module('icc-ng-d3.voting')
    .controller('VotingController', VotingController);
  
  VotingController.$inject = ['SurveyOptionsResponse'];
  
  /* @ngInject */
  function VotingController(SurveyOptionsResponse) {
    
    var vm = this;
    
    vm.title = 'Vote for one of those options';
    vm.options = angular.copy(SurveyOptionsResponse);

  }
})();