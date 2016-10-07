angular.module("ufcApp").controller('homeCtrl',function($scope, mainService){

  mainService.getFighters().then(function(fighterData){
    $scope.fighters = fighterData;
    console.log($scope.fighters)
  })
  $scope.getFighters= function(input) {
    $scope.filter = input;
  }


})
