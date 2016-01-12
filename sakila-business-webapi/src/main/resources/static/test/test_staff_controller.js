/**
 * 
 */

describe('StaffController', function(){
	var $controller;
	beforeEach(module('myApp'));
	beforeEach(inject(function(_$controller_){
		$controller = _$controller_;
	}));
	
	it('shoul pass any way', function(){
		expect(true).toBe(true);
	});
	
	it('should authorise', function(){
		var $scope = {};
		var MockStaffService = { logStaff = function(){
				return {'username': 'a-non-null-username'};
		}};
		
		var controller = $controller('StaffController', { $scope: $scope, StaffService: MockStaffService});
		controller['staff'] = {'username': 'Mike', 'password': '8cb2237d0679ca88db6464eac60da96345513964'};
		console.log(controller.StaffService);
		controller.submit(function(b){console.log(b);})
	});
});