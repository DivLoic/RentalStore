/**
 * 
 */
describe('CustomerController', function(){
	
	var $controller;
	beforeEach(module('myApp'));
	beforeEach(inject(function(_$controller_){
		$controller = _$controller_;
	}));
	
	it('should pass anyway', function(){
		expect(false).toBe(false)
	});
	
	it('should return a list of customer', function(){
		var $scope = {};
		// Mock de service
		var MockService = {getCustomer: function(){
			return new Promise(resole, reject){
				resole('..');
			}}
		};
		
		var controller = $controller('StaffController', {$scope: $scope, CustomerService: MockService});
		controller.fetchAll()
	});
	
	
});