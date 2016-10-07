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


    // this is the template
})
