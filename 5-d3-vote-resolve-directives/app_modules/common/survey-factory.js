(function(){

  "use strict";
  
  angular
    .module('icc-ng-d3.common')
    .factory('SurveyData',SurveyData);

  SurveyData.$inject = ['$http','base_url'];

  function SurveyData($http,base_url){
    
    var surveyData = {
      getData: getDataFn,
      vote   : voteFn,
      getVotes: getVotesFn
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

    //Función que envía una petición POST con el cuerpo del voto
    function voteFn(form){

      //retornamos una promesa
      return $http({method:'POST',
                    url: base_url + '/votes',
                    data: {
                      idOption : form.optionSelected.idOption,
                      name     : form.name,
                      comment  : form.comment
                    }
            });

    };


    //Función que envia una peticion GET en busca de todos los votos ordenados por cantidad de votos
    function getVotesFn(){

      //retornamos una promesa
      return $http({method:'GET',
                    url: base_url + '/votes/result'
              });

    };


  };

})();
  