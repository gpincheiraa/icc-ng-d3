(function(){

  "use strict";
  
  angular
    .module('icc-ng-d3.common')
    .factory('SurveyData',SurveyData);

  SurveyData.$inject = ['$http'];

  function SurveyData($http){
    
    var surveyData = {
      vote: voteFn,
      getData: getDataFn
    };

    return surveyData;

    //Function Definitions
    function voteFn(vote_data){
      
      //retornamos una promesa
      // return $http({method:'POST',
      //               url:  '',
      //               data: {vote_data: vote_data},
      //             });
    };

    function getDataFn(){
      var sampleData = [
        {topic: "js",
         votes: 5},
        {topic: "angular-advanced",
         votes: 4},
        {topic: "more-angular-basics",
         votes:  3},
        {topic: "angular-ionic",
         votes: 15}
      ];
      
      return sampleData;
      //retornamos una promesa
      // return $http({method:'GET',
      //               url: ''
      //         });
    };
  };

})();
  