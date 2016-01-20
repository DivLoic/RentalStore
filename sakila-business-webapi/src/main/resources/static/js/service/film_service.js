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