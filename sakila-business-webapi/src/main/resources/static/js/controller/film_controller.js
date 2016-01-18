/**
 * 
 */
App.controller('FilmController', ['$scope', 'FilmService', function($scope, FilmService) {
	var self = this;
	var film = {filmId:0, title:'', length: 0};
	var films = [];
	
	self.fetchAllFilms = function(){
		FilmService.getFilms().then(
			function(res){
				self.films = res;
			},
			function(err){
				console.log("Error: controller failed to get the films");
			}
		);
	}
	
	self.createFilm = function(actor){
		FilmService.createFilm(actor).then(
				self.fetchAllFilms,
				function(err){
					console.log("Error: controlle failed to greate a film");
				}
		)
		
	};
	
	self.updateFilm = function(actor){
		FilmService.updateFilm(actor).then(
				self.fetchAllFilms,
				function(err){
					console.log("Error: controller failed to update a film");
				}
		)
	};
	
	self.deleteFilm = function(actorId){
		FilmService.deteleFilm(actorId).then(
				self.fetchAllFilms,
				function(err){
					console.log("Error: controller failed to deleted a film");
				}
		)
	};
	
	self.fetchAllFilms();
	
	self.addAvaibility = function(allFilms, allInventories){
		allFilms.forEach(function(film){
			var filtered = allInventories.filter(function(allInventory){
				allInventory['filmId'] == film['filmId']
			});
			film['quantity'] = filtered.length;
		});
		return allFilms;
	};
	
}]);