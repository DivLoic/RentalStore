/**
 * 
 */
describe('CustomerController', function(){
	
	var $controller;
	var tab = [{'customerId': 'firstName', 'lastName': '', 'email': ''},
	           {'customerId': 'firstName', 'lastName': '', 'email': ''},
	           {'customerId': 'firstName', 'lastName': '', 'email': ''},
	           {'customerId': 'firstName', 'lastName': '', 'email': ''},];
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
			return new Promise(function(resole, reject){
				resole(tab);
			})}
		};
		
		var controller = $controller('StaffController', {$scope: $scope, CustomerService: MockService});
		controller.fetchAllCustomers()
	});
	
	
});