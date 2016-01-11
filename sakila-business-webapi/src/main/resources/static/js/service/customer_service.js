/**
 * 
 */

App.factory('CustomerService', ['$http', '$q', function($http, $q){
	return {
		createCustomer: function(customer, address){
			return $http.post('http://localhost:8080/customerCreate/', {'customer': customer , 'address': address}).then(
					function(respoonse){
						console.log('200:' + response);
					}, function(err){
						console.log('200:' + response);
					}
			)
		}
		updateCustomer: function(customer, address){
			return $http.post('http://localhost:8080/customerUpdate/', {'customer': customer , 'address': address}).then(
					function(reponse){
						return response;
					}, function(err){
						return false;
					}
			)
		}
	}
	
}]);