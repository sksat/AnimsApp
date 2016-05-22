angapp.factory('photos', ['$http', function($http) {
  return $http.get('data.json')
         .success(function(data) {
           return data;
         })
         .error(function(data) {
           return data;
         });
}]);