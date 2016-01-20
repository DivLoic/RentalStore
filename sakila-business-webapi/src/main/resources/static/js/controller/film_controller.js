/**
 * 
 */
App.controller('FilmController', ['$scope', 'FilmService', 'InventoryService', function($scope, FilmService, InventoryService) {
	var self = this;
	var film = {filmId:0, title:'', length: 0, quantity : 0};
	var films = [];
	
	self.fetchAllFilms = function(){
		FilmService.getFilms().then(
			function(res){
				self.films = res;
				self.setQuantity();
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
	
	self.setQuantity = function(){
		self.films.forEach(function(film){
			InventoryService.getInventoriesByFilmId(film['filmId']).then(
				function(res){
						film['quantity'] = res.length;
				}
			)
		})
	};
	
	
}]);