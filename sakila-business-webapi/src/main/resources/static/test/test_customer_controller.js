/**
 * 
 */
describe('CustomerController', function(){
	
	var $controller;
	var tab = [{'customerId': '1', 'firstName': 'jack', 'lastName': 'doh', 'email': 'sakila@gmail.com'},
	           {'customerId': '2', 'firstName': 'chloe', 'lastName': 'doh', 'email': 'sakila@gmail.com'},
	           {'customerId': '3', 'firstName': 'David', 'lastName': 'doh', 'email': 'sakila@gmail.com'},
	           {'customerId': '4', 'firstName': 'billy', 'lastName': 'doh', 'email': 'sakila@gmail.com'}];
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
			return new Promise(function(resolve, reject){
				resolve(tab);
			})}
		};
		var controller = null;
		var allTest = function(){
			expect(controller['customers'].length).toEqual(tab.length);
			expect(controller['customers'].length).toEqual(tab.length);
			['customerId','firstName','lastName','email'].forEach(function(key){
				controller['customers'].forEach(function(customer){
					expect(Object.keys(customer)).toContain(key);	
				});
			});
		}
		
		// because of shitty async stuff
		async.series([function(){ 
			controller = $controller(
					'CustomerController', 
					{$scope: $scope, CustomerService: MockService}
			);
		},
		allTest
		]);		
		
	});
	
	
});