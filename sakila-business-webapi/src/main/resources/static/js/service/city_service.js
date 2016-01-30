'use strict';

App.factory('CityService', ['$http', '$q', function($http, $q){
	return {
		fetchAllCities: function() {
			return $http.get('http://localhost:8080/getCities/')
			.then(
					function(response){
						console.log('Success du service: city');
						return response.data;
					}, 
					function(errResponse){
						console.log('Error while fetching cities');
						return $q.reject(errResponse);
					}
			);
		},
		addCity: function(city){
			return $http.post('http://localhost:8080/createCity/', city)
			.then(
					function(response){
						console.log('Success du service: addCity');
						return response.data;
					}, 
					function(errResponse){
						console.log('Error while fetching addCity');
						return $q.reject(errResponse);
					}
			);
		},
		updateCity: function(city){
			return $http.post('http://localhost:8080/updateCity/', city)
			.then(
					function(response){
						console.log('Success du service: updateCity');
						return response.data;
					}, 
					function(errResponse){
						console.log('Error while fetching updateCity');
						return $q.reject(errResponse);
					}
			);
		}
	}
}]);