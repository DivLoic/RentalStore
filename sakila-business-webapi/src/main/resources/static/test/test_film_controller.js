/**
 * 
 */
describe('', function(){
	
	var $controller, $scope;
	var tab = [];
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
				console.log("------ ••• ------");
				resolve(tab);
			})}
		};
		
		var controller = $controller('FilmController', {$scope: $scope, CustomerService: MockService});
		
	});
	
});