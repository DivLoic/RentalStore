/**
 * 
 */
App.factory('FilmService', ['$http', '$q', function($http, $q){
	return {
		creatFilm: function(film){
			console.log('Using the Rental Service: creatFilm.');
			$http.post('http://localhost:8080/creatFilm/', film).then(
					function(res){
						console.log('Sucess du service, creatFilm ');
						console.log(res.data)
						return res.data;
					},
					function(err){
						console.log('Erreur du service, creatFilm ');
						console.log(err);
						return false;
					}
			);
		},
		deleteFilm: function(id){
			console.log('Using the Rental Service: deleteFilm.');
			$http.post('http://localhost:8080/deleteFilm/', {'film_id': id}).then(
					function(res){
						console.log('Sucess du service, deleteFilm ');
						console.log(res.data);
						return res.data;
					},
					function(err){
						console.log('Erreur du service, deleteFilm ');
						console.log(err);
						return false
					}
			);
		},
		updateFilm: function(film){
			console.log('Using the Rental Service: updateFilm.');
			$http.post('http://localhost:8080/updateFilm/', film).then(
					function(res){
						console.log('Sucess du service, updateFilm ');
						console.log(res.data);
					},
					function(err){
						console.log('Erreur du service, updateFilm ');
						console.log(err);
						return false;
					}
			);
		}
	}
}]);