(function() {
  'use strict';
  
  angular
    .module('icc-ng-d3.common')
    .directive('gdgSurveyGraph', directive);
  

  directive.$inject = ['$window'];

  function directive($window){
    // Usage:
    // <gdg-survey-graph></gdg-survey-graph>

    var directive = {
        link: link,
        restrict: 'E',
        scope: {
          data: '='
        }
    };
    return directive;
    
    function link(scope, element, attrs){

      var chartWidth = $window.innerWidth,
          barsMaxWidth = chartWidth - 200,
          barHeight = 30,
          data = scope.data,
          voteValues = scope.data.map(function(it){ return it.votes});
      
      //Comenzamos a usar D3 para dibujar los resultados de la encuesta
      var chart = d3.select(element[0])
                    .append("svg")
                    .attr("class","chart")
                    .attr("width",chartWidth)
                    .attr("heigth",600);

      //Devuelve una función que calcula el valor x escalado según el rango dado
      var x = d3.scale
                .linear()
                .domain([0, d3.max(voteValues)])
                .range([0, barsMaxWidth]);

      //Creamos un g por cada uno de los elementos del array
      var bar = chart.selectAll("g")
                     .data(voteValues)
                     .enter()
                     .append("g")
                     .attr("transform", function(d, i) { return "translate(0," + i * barHeight + ")"; });

      //para cada bar agregaremos un rect y añadiremos una transición
      bar.append("rect")
          .attr("width", 0)
          .attr("height", barHeight - 1)
          .transition()
          .attr("width", x)
          .duration(600);

      //añadimos el texto interno con la cantidad de votos
      bar.append("text")
          .attr("class","vote-value")
          .attr("x", function(d) {return x(d) - 10; })
          .attr("y", barHeight / 2)
          .attr("dy", ".35em")
          .text(function(d,i) { return d });

      //añadimos el texto con el tópico del voto
      bar.append("text")
        .attr("class","topic")
        .attr("x", chartWidth - 50)
        .attr("y", barHeight / 2)
        .attr("dy", ".35em")
        .text(function(d,i) { return data[i].topic });


    };
  }
  

})();