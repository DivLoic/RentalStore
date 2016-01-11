/**
 * 
 */
App.factory('FilmService', ['$http', '$q', function($http, $q){
	return {
		creatFilm: function(rent){
			console.log('Using the Rental Service: creatFilm.');
			$http.post('http://localhost:8080/creatFilm', rent).then(
					function(res){
						console.log('Sucess du service, creatFilm: ' + res);
					},
					function(err){
						console.log('Erreur du service, creatFilm: ' + err);
					}
			);
		},
		deleteFilm: function(){
			console.log('Using the Rental Service: deleteFilm.');
			$http.post('http://localhost:8080/deleteFilm').then(
					function(res){
						console.log('Sucess du service, deleteFilm: ' + res);
					},
					function(err){
						console.log('Erreur du service, deleteFilm: ' + err);
					}
			);
		},
		updateFilm: function(){
			console.log('Using the Rental Service: updateFilm.');
			$http.post('http://localhost:8080/updateFilm').then(
					function(res){
						console.log('Sucess du service, updateFilm: ' + res);
					},
					function(err){
						console.log('Erreur du service, updateFilm: ' + err);
					}
			);
		}
	}
}]);