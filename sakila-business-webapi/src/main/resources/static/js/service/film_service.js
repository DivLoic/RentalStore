/**
 * 
 */
App.factory('FilmService', ['$http', '$q', function($http, $q){
	return {
		getFilm: function(){
			console.log('Using the Rental Service: getFilm.');
			$http.get('http://localhost:8080/getFilms/').then(
					function(res){
						console.log('Sucess du service, getFilm ');
						console.log(res.data);
						return res.data;
					},
					function(err){
						console.log('Erreur du service, getFilm ');
						console.log(err);
						return err;
					}
			);
		},
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
			$http.post('http://localhost:8080/deleteFilm/' + id).then(
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