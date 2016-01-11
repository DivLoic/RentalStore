/**
 * 
 */

App.factory('CustomerService', ['$http', '$q', function($http, $q){
	return {
		createCustomer: function(customer){
			return $http.post('http://localhost:8080/customerCreate/', customer).then(
					function(respoonse){
						console.log(response.data);
						return response.data;
					}, function(err){
						console.log("Erreur du service createCustomer.");
						return false;
					}
			)
		}
		updateCustomer: function(customer){
			return $http.post('http://localhost:8080/customerUpdate/', customer).then(
					function(reponse){
						console.log(response.data);
						return response.data;
					}, function(err){
						console.log("Erreur du service updateCustomer.");
						return false;
					}
			)
		}
	}
	
}]);