(function(){

  "use strict";

  //Este será nuestro módulo principal que debe coincidir con el nombre
  //declarado en el html en la directiva ng-app (directiva base de la aplicación Angular)
  angular
    .module('icc-ng-d3',[]);

  //Nuestro primer controlador
  angular
    .module('icc-ng-d3')
    .controller('WelcomeController',WelcomeController);

  function WelcomeController(){
    var vm = this;
    vm.message = "Welcome to the ICC's Survey System";
  };

})();