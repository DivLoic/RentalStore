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
		addCity: function(){
			return $http.post('http://localhost:8080/createCity/')
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
		deleteCity: function(){
			return $http.post('http://localhost:8080/deleteCity/')
			.then(
					function(response){
						console.log('Success du service: deleteCity');
						return response.data;
					}, 
					function(errResponse){
						console.log('Error while fetching deleteCity');
						return $q.reject(errResponse);
					}
			);
		} 
	}
}]);