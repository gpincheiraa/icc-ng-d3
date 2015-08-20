(function(){

  "use strict";
  
  angular
    .module('icc-ng-d3.common')
    .factory('SurveyData',SurveyData);

  SurveyData.$inject = ['$http'];

  function SurveyData($http){
    
    var surveyData = {
      vote: voteFn,
      getData: getDataFn,
      getOptions: getOptionsFn
    };

    return surveyData;

//********* functions Definitions ************
    
    function voteFn(vote_data){
      
      //retornamos una promesa
      // return $http({method:'POST',
      //               url:  '',
      //               data: {vote_data: vote_data},
      //             });
    };


    function getOptionsFn(){

      var options = [
        {topic: "javascript"},
        {topic: "angular-advanced"},
        {topic: "more-angular-basics"},
        {topic: "angular-ionic"},
        {topic: "node"}
      ];
      
      return options;

    };

    function getDataFn(){
      var sampleData = [
        {topic: "javascript",votes: 5},
        {topic: "angular-advanced",votes: 4},
        {topic: "more-angular-basics",votes:  3},
        {topic: "angular-ionic",votes: 15},
        {topic: "node",votes: 25}
      ];
      
      return sampleData;
      //retornamos una promesa
      // return $http({method:'GET',
      //               url: ''
      //         });
    };
  };

})();
  