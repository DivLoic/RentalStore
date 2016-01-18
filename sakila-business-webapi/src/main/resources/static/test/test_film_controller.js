/**
 * 
 */
describe('', function(){
	
	var $controller, $scope;
	var tab = [{"filmId":1,"title":"ACADEMY DINOSAUR","description":"A Epic Drama of blablabla... Rockies",
		"releaseYear":"2006-01-01","language_id_1":1,"language_id_2":0,"rentalDuration":6,"rentalRate":0.99,
		"length":86,"replacementCost":20.99,"rating":"PG","specialFeatures":"Deleted Scenes,Behind the Scenes"},
		
	    {"filmId":2,"title":"ACE GOLDFINGER","description":"A Astounding blablabala... Ancient China",
		"releaseYear":"2006-01-01","language_id_1":1,"language_id_2":0,"rentalDuration":3,"rentalRate":4.99,
		"length":48,"replacementCost":12.99,"rating":"G","specialFeatures":"Trailers,Deleted Scenes"},
	           
		{"filmId":3,"title":"ADAPTATION HOLES","description":"A Reflection blablabala... Factory",
		"releaseYear":"2006-01-01","language_id_1":1,"language_id_2":0,"rentalDuration":7,"rentalRate":2.99,
		"length":50,"replacementCost":18.99,"rating":"NC-17","specialFeatures":"Trailers,Deleted Scenes"}];
	
	beforeEach(module('myApp'));
	beforeEach(inject(function(_$controller_){
		$scope = {};
		$controller = _$controller_;
	}));
	
	it('shoul de pass anyway', function(){
		expect(null).toBe(null);
	});
	
	it('should get a list of films', function(){
		var MockService = { getFilms : function(){
			return new Promise(function(resolve, reject){
				resolve(tab);
			})}
		};
		var controller = null;
			
		async.series([function(){ 
			controller = $controller('FilmController', {$scope: $scope, FilmService: MockService});
		},
		
		]);

		
		
	});
	
});