angular.module("ufcApp").controller('newsCtrl', function($scope, mainService) {
    mainService.getNews().then(function(response) {
        $scope.getNews = response;
        console.log(response);
      
    })

})
