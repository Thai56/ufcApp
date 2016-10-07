angular.module("ufcApp").controller('aboutCtrl',function($scope, mainService){

mainService.getTitleHolders().then(function(response){
 $scope.champions= response;
 console.log($scope.champions);

})

$scope.getFighters= function(input) {
  $scope.filter = input;
}

 })
