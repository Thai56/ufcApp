angular.module('ufcApp').directive('myDirective', function(){
// this is not finished
// trying to plug this directive into the home.html
return {
    templateUrl: 'home.html',
    restrict: 'EA',
    scope: {
      fighterSearch: '=',
      getFighters: '&'
    },
// using controller to get data out of mainservice to use implicitly in home.html
// i want to pass 'ng-model="fighterSearch"' from "getFighters"/'ng-click' in home.html to this controller to get the fighters asked for through the input
//using the 'getFighters' above to define the function.
    controller : function($scope, mainService){
$scope.getFighters =  mainService.getFighters()

    }

    // this is the template
})
