'use strict';

App.controller('StaffController', ['$scope', 'StaffService', function($scope, StaffService) {
	var self = this;
    self.auth = false;
	self.staff={username:'', password:''};
	
	self.submit = function(callBack) {
        StaffService.logStaff(self.staff).then(
    		function(data){
    			var status = data.username == null ? false : true;
    			callBack(status);
    		});
    };
    
    self.redir = function(status){
    	if (status){
    		window.location.href="/Home.html";
    	}else{
    		alert("Wrong username or password.");
    	}
    }
    
    self.reset = function(){
    	self.staff={username:'', password:''};
        $scope.myForm.$setPristine(); //reset Form
    };
}]);