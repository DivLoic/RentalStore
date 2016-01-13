/**
 * 
 */

App.factory('CustomerService', ['$http', '$q', function($http, $q){
	return {
		getCustomer: function(){
			return $http.get('http://localhost:8080/customer/').then(
					function(response){
						console.log("Success du service: getCustomer.");
						console.log(response.data);
						return response.data;
					}, function(err){
						console.log("Erreur du service createCustomer.");
						return false;
					}
			)
		},
		createCustomer: function(customer){
			return $http.post('http://localhost:8080/customerCreate/', customer).then(
					function(response){
						console.log(response.data);
						return response.data;
					}, function(err){
						console.log("Erreur du service createCustomer.");
						return false;
					}
			)
		},
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