angular.module("ufcApp").service('mainService', function($http){
// getfighters function
this.getFighters = function() {
  return $http({
    method:'GET',
    url:"http://ufc-data-api.ufc.com/api/v1/us/fighters"
  }).then(function(response){
   console.log(response);
    return response.data;
  })
}

// getTitleHolders function
this.getTitleHolders = function() {

  return $http({
      method:"GET",
      url:"http://ufc-data-api.ufc.com/api/v1/us/fighters/title_holders"
    }).then(function(response){
console.log("this is the titleholders info" + response.data);
      return response.data;
    })

  }
  })
