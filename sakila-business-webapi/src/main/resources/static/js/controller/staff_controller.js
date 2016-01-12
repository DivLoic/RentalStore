'use strict';

App.controller('StaffController', ['$scope', 'StaffService', function($scope, StaffService) {
	var self = this;
	self.staff={username:'', password:''};
	
	self.submit = function() {
        if(self.staff.username==''){
            console.log('Error username', self.staff);    
        }else{
            console.log('Username is ', self.staff.username);
            console.log('Password: ', self.staff.password);
            StaffService.logStaff(self.staff).then(
            		function(data){
            			console.log(data);
            		},
            		function(err){
            			// échec
            		});
        }
        self.reset();
    };
    
    self.reset = function(){
    	self.staff={username:'', password:''};
        $scope.myForm.$setPristine(); //reset Form
    };
}]);