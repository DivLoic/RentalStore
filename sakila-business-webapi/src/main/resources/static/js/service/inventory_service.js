/**
 * 
 */
App.factory('InventoryService', ['$http', '$q', function($http, $q){
	return {
		getInventoryByFilm: function(filmId){
			console.log('Using the Inventory Service: getInventory.');
			return $http.get('http://localhost:8080/getInventoryByFilm/' + filmId ).then(
					function(res){
						console.log('Sucess du service, getInventory ');
						console.log(res.data);
						return res.data;
					},
					function(err){
						console.log('Erreur du service, getInventory ');
						console.log(err);
						return $q.reject(err);
					}
			);
		},
		getInventories: function(){
			console.log('Using the Inventory Service: getInventories.');
			return $http.get('http://localhost:8080/getInventories/').then(
					function(res){
						console.log('Sucess du service, getInventories ');
						console.log(res.data);
						return res.data;
					},
					function(err){
						console.log('Erreur du service, getInventories ');
						console.log(err);
						return $q.reject(err);
					}
			);
		},
		createInventory: function(inventory){
			console.log('Using the Inventory Service: creatInventory.');
			return $http.get('http://localhost:8080/creatInventory/', inventory).then(
					function(res){
						console.log('Sucess du service, creatInventory ');
						console.log(res.data);
						return res.data;
					},
					function(err){
						console.log('Erreur du service, creatInventory ');
						console.log(err);
						return $q.reject(err);
					}
			);
		},
		deleteInventory: function(inventory){
			console.log('Using the Inventory Service: deleteInventory.');
			return $http.get('http://localhost:8080/deleteInventory/', inventory).then(
					function(res){
						console.log('Sucess du service, creatInventory ');
						console.log(res.data);
						return res.data;
					},
					function(err){
						console.log('Erreur du service, creatInventory ');
						console.log(err);
						return $q.reject(err);
					}
			);
		}
	}
}])