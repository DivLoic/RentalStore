/**
 * 
 */
App.factory('RentalService', ['$http', '$q', function($http, $q){
	return {
		addRental: function(rent){
			console.log('Using the Rental Service: addRental.');
			$http.post('http://localhost:8080/RentalCreate/', rent).then(
					function(res){
						console.log('Sucess du service, addRental: ');
						console.log(res.data);
						return res.data
					},
					function(err){
						console.log('Erreur du service, addRental: ...');
						return false;
					}
			);
		},
		deleteRental: function(id){
			console.log('Using the Rental Service: deleteRental.');
			$http.post('http://localhost:8080/deleteRental/' + id).then(
					function(res){
						console.log('Sucess du service, deleteRental: ');
						console.log(res.data);
						return res.data;
					},
					function(err){
						console.log('Erreur du service, deleteRental ...');
						return false;
					}
			);
		}
	}
}]);