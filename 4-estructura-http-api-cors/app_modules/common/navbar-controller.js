(function(){
  "use strict";
  
  angular
    .module('icc-ng-d3.common')
    .controller('navbarController',navbarController);

  navbarController.$inject = ['$state'];

  function navbarController($state){
    var vm = this;

    vm.isModuleActive = function(_state){
      return $state.is(_state);
    };
  
  };

})();


 
