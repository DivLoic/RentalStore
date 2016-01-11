/**
 * 
 */
App.factory('RentalService', ['$http', '$q', function($http, $q){
	return {
		addRental: function(rent){
			console.log('Using the Rental Service: addRental.');
			$http.post('http://localhost:8080/RentalCreate/', rent).then(
					function(res){
						console.log('Sucess du service, addRental: ' + res);
					},
					function(){
						console.log('Erreur du service, addRental: ...');
					}
			);
		},
		deleteRental: function(){
			console.log('Using the Rental Service: deleteRental.');
			$http.post('http://localhost:8080/DeleteRental/').then(
					function(res){
						console.log('Sucess du service, deleteRental: ' + res);
					},
					function(err){
						console.log('Erreur du service, deleteRental ...');
					}
			);
		}
	}
}]);