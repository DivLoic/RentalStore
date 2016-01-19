'use strict';

App.controller('FilmController', ['$scope', 'FilmService', 'InventoryService', function($scope, FilmService, InventoryService) {
	var self = this;
	self.film={filmId:null,title:'',description:'', releaseYear:'', rentalDuration:'', rentalRate:'', lenght:'', language:null, features:''};
	self.films=[];
	
	self.fetchAllFilms = function(){
		FilmService.fetchAllFilms().then(
				function(res) {
					self.films = res;
				},
				function(err){
					console.log("Error: controller failed to get the films");
				}
		);
	};

	self.createFilm = function(film){
		FilmService.createFilm(film).then(
				self.fetchAllFilms, 
				function(err){
					console.log("Error: controller failed to greate a film");
				}	
		);
	};

	self.updateFilm = function(film){
		FilmService.updateFilm(film).then(
				self.fetchAllFilms, 
				function(err){
					console.log("Error while updating Film.");
				}	
		);
	};

	self.deleteFilm = function(filmId){
		FilmService.deleteFilm(filmId).then(
				self.fetchAllFilms, 
				function(err){
					console.log("Error while deleting Film.");
				}	
		);
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
	

	self.setQuantity = function(){
		self.films.forEach(function(film){
			InventoryService.getInventoriesByFilmId(flim['filmId']).then(
				function(res){
						film['quantity'] = res.length;
				}
			)
		})
	};
	
	self.submit = function() {
		if(self.film.filmId == null){
			console.log('Saving New Film', self.film);    
			self.createFilm(self.film);
		}else{
			console.log('Film updating with id ', self.film.filmId);
			console.log('Film: ', self.film);
			self.updateFilmself.film);
		}
		self.reset();
	};

	self.edit = function(filmId){
		console.log('id to be edited', filmId);
		for(var i = 0; i < self.films.length; i++){
			if(self.films[i].filmId == filmId) {
				self.film = angular.copy(self.films[i]);
				break;
			}
		}
	};

	self.remove = function(filmId){
		console.log('id to be deleted', filmId);
		for(var i = 0; i < self.films.length; i++){
			if(self.films[i].filmId == filmId) {
				self.reset();
				break;
			}
		}
		self.deleteFilm(filmId);
	};


	self.reset = function(){
		self.film={filmId:null,title:'',description:'', releaseYear:'', rentalDuration:'', rentalRate:'', lenght:'', language:null, features:''};
		$scope.myForm.$setPristine(); //reset Form
	};

}]);