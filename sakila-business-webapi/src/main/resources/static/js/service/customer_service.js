/**
 * 
 */

App.factory('CustomerService', ['$http', '$q', function($http, $q){
	return {
		updateCustomer: function(customer){
			return $http.post('http://localhost:8080/customerUpdate/', customer).then(
					function(reponse){
						return response;
					}, function(err){
						return false;
					}
			)
		}
	}
	
}