(function(){

  "use strict";
  
  angular
    .module('icc-ng-d3.common')
    .factory('SurveyData',SurveyData);

  SurveyData.$inject = ['$http','base_url'];

  function SurveyData($http,base_url){
    
    var surveyData = {
      getData: getDataFn
    };

    return surveyData;

    //Este será el método que hará una petición GET a la API REST 
    //para traernos todas las opciones de la encuesta

    function getDataFn(){

      //retornamos una promesa
      return $http({method:'GET',
                    url: base_url + '/survey-options'
              });
    };
  

  };

})();
  