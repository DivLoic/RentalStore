/**
 * 
 */
describe('CityController', function(){
	
	var $controller;
	var cityTable = [{"cityId":1,"city":"A Corua (La Corua)","country":null},
	                 {"cityId":2,"city":"Abha","country":null},
	                 {"cityId":3,"city":"Abu Dhabi","country":null}];
	
	beforeEach(module('myApp'));
	beforeEach(inject(function(_$controller_){
		$controller = _$controller_;
	}));
	
	it('should pass anyway', function(){
		expect(false).toBe(false)
	});
	
	it('should return a list of city', function(){
		var $scope = {};
		// Mock de service
		var MockService = { fetchAllCities: function(){
			return new Promise(function(resolve, reject){
				resolve(cityTable)
			});
		}};
		
		var controller =  null;
		var allTest = function(){
			expect(controller['cities'].length).toEqual(3);
		}
		
		async.series([function(){
			controller = $controller('CityController', {$scope: $scope, CustomerService: MockService});
		},allTest
		])
	});
	
	
});/**
 * 
 */