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
		var controller = $controller('StaffController', { $scope: $scope });
	});
});