angular.module("ufcApp").controller('newsCtrl',function($scope, mainService){
  mainService.getNews().then(function(response) {
      $scope.getNews = response;
      console.log(response);
      // var myArray = [];
      // for (i = 0; i < response.length; i++) {
      //   myArray.push(response[i]);
      //
      //
      // }
      // console.log("this is response[i]" + response[i]);
      // console.log("this is myArray" + myArray);
      //   return myArray;
  })

 })
