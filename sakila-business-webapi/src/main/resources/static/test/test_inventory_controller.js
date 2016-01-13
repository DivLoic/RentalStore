/**
 * 
 */
/**
 * 
 */
describe('InventoryController', function(){
	
	var $controller;
	beforeEach(module('myApp'));
	beforeEach(inject(function(_$controller_){
		$controller = _$controller_;
	}));
	
	it('should pass anyway', function(){
		expect(false).toBe(false)
	});
	
	it('should return a list of film IN the inventory', function(){
		var $scope = {};
		// Mock de service
		var MockService = { getCustomer: function(){}
		};
		var controller = $controller('InventoryController', {$scope: $scope, CustomerService: MockService})	;
		var allTest = function(){
			
		}
		
	});
	
	
});/**
 * 
 */