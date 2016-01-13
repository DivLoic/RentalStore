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
	
	it('should declare as authenticate', function(){
		var $scope = {};
		// Mock de service
		var MockStaffService = { logStaff : function(){
			return new Promise(function(resolve, reject) {
					resolve({'username': 'a-non-null-username'});
				});
			}
		};
		
		var controller = $controller('StaffController', {$scope: $scope, StaffService: MockStaffService});
		controller['staff'] = {'username': 'Mike', 'password': 'azerty'};
		// finally the TEST ! ! !
		controller.submit(function(res){expect(res).toBe(true);});
	});
	
	
	it('should declare as non-authenticate', function(){
		var $scope = {};
		//Mock de service
		var MockStaffService = { logStaff : function(){
			return new Promise(function(resolve, reject) {
					resolve({'username': null});
				});
			}
		};
		
		var controller = $controller('StaffController', {$scope: $scope, StaffService: MockStaffService});
		controller['staff'] = {'username': 'Mike', 'password': 'querty'};
		controller.submit(function(res){expect(res).toBe(false);});
	});
	
	it('should not trig the call (no username)', function(){
		var $scope = {};
		//Mock de service
		var MockStaffService = { logStaff : function(){
			return new Promise(function(resolve, reject) {
					resolve({'username': null});
				});
			}
		};
		
		var controller = $controller('StaffController', {$scope: $scope, StaffService: MockStaffService});
		controller['staff'] = {'username': '...'};
		controller.submit(function(res){fail(res)});
	});
});