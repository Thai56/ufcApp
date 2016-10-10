angular.module("ufcApp").controller('newsCtrl', function($scope, mainService) {
    mainService.getNews().then(function(response) {
        for (var i = 0; i < response.length; i++){
          response[i].checkbox = '';
        }
        $scope.getNews = response;
        console.log(response);

    })

          $scope.checkedItems = function(index) {
            for (var i = 0; i < $scope.getNews.length; i++) {
              if ($scope.getNews[i].title === index) {
                $scope.getNews[i].checkbox = !$scope.getNews[i].checkbox
              }
            }
          }

        // $scope.myAppObjects = {
        //     id: 1,
        //     checkbox: true
        // }
        //
        // $scope.checkedItems = function() {
        //     var checkedItems = [];
        //     angular.forEach($scope.myAppObjects, function(appObj, arrayIndex) {
        //             angular.forEach(appObj, function(cb, key) {
        //                 if (key.substring(0, 2) == "cb" && cb) {
        //                     checkedItems.push(appObj.id + '-' + key)
        //                 }
        //             })
        //             return checkedItems ;
        //         })
        //     }






})
