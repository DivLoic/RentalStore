/**
 * 
 */
describe('CityController', function(){
	
	var $controller;
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
		var MockService = { getCustomer: function(){}
		};
		var controller = $controller('CityController', {$scope: $scope, CustomerService: MockService})	;
		var allTest = function(){
			
		}
		
	});
	
	
});/**
 * 
 */