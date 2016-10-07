angular.module("ufcApp").service('mainService', function($http){

this.getFighters = function() {
  return $http({
    method:'GET',
    url:"http://ufc-data-api.ufc.com/api/v1/us/fighters"
  }).then(function(response){
   console.log(response);
    return response.data;
  })
}

})
