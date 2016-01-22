/**
 * 
 */
App.factory('FilmService', ['$http', '$q', function($http, $q){
	return {
		fetchAllFilms: function(){
			console.log('Using the Rental Service: getFilm.');
			return $http.get('http://localhost:8080/getFilms/').then(
					function(res){
						console.log('Sucess du service, getFilm ');
						console.log(res.data);
						return res.data;
					},
					function(err){
						console.log('Erreur du service, getFilm ');
						console.log(err);
						return $q.reject(err);
					}
			);
		},
		getRentalForCustomer: function(customerId){
			console.log('Using the Rental Service: getRentalForCustomer.');
			return $http.post('http://localhost:8080/getRentalsForCustomer/' + customerId).then(
					function(res){
						console.log('Sucess du service, getRentalForCustomer');
						return res.data
					},
					function(err){
						console.log('Erreur du service, getRentalForCustomer');
						var dat = [{"filmId":1,"title":"ACADEMY DINOSAUR","description":"A Epic Drama of a Feminist And a Mad Scientist who must Battle a Teacher in The Canadian Rockies","releaseYear":"1970","language_id_1":1,"language_id_2":0,"rentalDuration":6,"rentalRate":0.99,"length":86,"replacementCost":20.99,"rating":"PG","specialFeatures":"Deleted Scenes,Behind the Scenes","listIdActor":null,"listIdCategory":null},
						           {"filmId":2,"title":"ACE GOLDFINGER","description":"A Astounding Epistle of a Database Administrator And a Explorer who must Find a Car in Ancient China","releaseYear":"1970","language_id_1":1,"language_id_2":0,"rentalDuration":3,"rentalRate":4.99,"length":48,"replacementCost":12.99,"rating":"G","specialFeatures":"Trailers,Deleted Scenes","listIdActor":null,"listIdCategory":null}]
						//return $q.reject(err);
						return dat
					}
			);
		},
		createFilm: function(film){
			console.log('Using the Rental Service: creatFilm.');
			return  $http.post('http://localhost:8080/createFilm/', film).then(
					function(res){
						console.log('Sucess du service, creatFilm ');
						console.log(res.data)
						return res.data;
					},
					function(err){
						console.log('Erreur du service, creatFilm ');
						console.log(err);
						return $q.reject(err);
					}
			);
		},
		deleteFilm: function(id){
			console.log('Using the Rental Service: deleteFilm.');
			return $http.post('http://localhost:8080/deleteFilm/' + id).then(
					function(res){
						console.log('Sucess du service, deleteFilm ');
						console.log(res.data);
						return res.data;
					},
					function(err){
						console.log('Erreur du service, deleteFilm ');
						console.log(err);
						return $q.reject(err);
					}
			);
		},
		updateFilm: function(film){
			console.log('Using the Rental Service: updateFilm.');
			return $http.post('http://localhost:8080/updateFilm/', film).then(
					function(res){
						console.log('Sucess du service, updateFilm ');
						console.log(res.data);
					},
					function(err){
						console.log('Erreur du service, updateFilm ');
						console.log(err);
						return $q.reject(err);
					}
			);
		}
	}
}]);