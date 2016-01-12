/**
 * 
 */
App.factory('ActorService', ['$http', '$q', function($http, $q){
	return {
		fetchAllActors: function() {
			return $http.get('http://localhost:8080/city/')
			.then(
					function(response){
						console.error('Success du service: city');
						return response.data;
					}, 
					function(errResponse){
						console.error('Error while fetching cities');
						return $q.reject(errResponse);
					}
			);
		}
	}
}]);