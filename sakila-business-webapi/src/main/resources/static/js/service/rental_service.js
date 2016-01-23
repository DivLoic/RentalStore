/**
 * 
 */
App.factory('RentalService', ['$http', '$q', function($http, $q){
	return {
		getRental: function(){
			console.log('Using the Rental Service: getRental.');
			return $http.post('http://localhost:8080/getRentals/').then(
					function(res){
						console.log('Sucess du service, getRental: ');
						return res.data
					},
					function(err){
						console.log('Erreur du service, getRental: ...');
						return $q.reject(err);
					}
			);
		},
		createRental: function(rent){
			console.log('Using the Rental Service: createRental.');
			return $http.post('http://localhost:8080/createRental/', rent).then(
					function(res){
						console.log('Sucess du service, createRentall: ');
						return res.data
					},
					function(err){
						console.log('Erreur du service, createRental: ...');
						return $q.reject(err);
					}
			);
		},
		deleteRental: function(id){
			console.log('Using the Rental Service: deleteRental.');
			return $http.post('http://localhost:8080/deleteRental/' + id).then(
					function(res){
						console.log('Sucess du service, deleteRental: ');
						return res.data;
					},
					function(err){
						console.log('Erreur du service, deleteRental ...');
						return $q.reject(err);
					}
			);
		},
		updateRental: function(rental){
			console.log('Using the Rental Service: updateRental.');
			return $http.post('http://localhost:8080/deleteRental/' + rental['rentalId']).then(
					function(res){
						console.log('Sucess du service, updateRenta');
						return res.data;
					},
					function(err){
						consol.log('Erreur du service, updateRental');
						return $q.reject(err);
					}
			);	
		}
	}
}]);