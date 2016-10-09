angular.module('ufcApp').directive('headerDirective', function() {
    // this is not finished
    // trying to plug this directive into the home.html
    // ======================headerDirective=====================================================
    return {
        restrict: 'E',
        templateUrl: "./views/headerTmpl.html",
  // =========================headerDirective=====================================================
// =============================getJokes function========================================
        scope: {
          jokeAlert : '&'
        },
        // controller
        controller : function($scope, mainService){
          $scope.getJokes = mainService.getJoke();
        },
        // controller end
        // link start
        link: function(scope, element, attribute) {
          scope.getJokes.then(function(response){
            scope.joke = response;
            console.log(scope.joke);
            return scope.joke;
          })
        }
        // link end
      }
      // ==============================getjokes function======================================================




})
