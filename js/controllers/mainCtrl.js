angular.module("ufcApp").controller('mainCtrl',function($scope, mainService){
      mainService.getFighters().then(function(fighterData){
        $scope.fighters = fighterData;
        console.log($scope.fighters)
      })

 })
