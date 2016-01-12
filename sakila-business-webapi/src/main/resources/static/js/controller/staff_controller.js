'use strict';

App.controller('StaffController', ['$scope', 'StaffService', function($scope, StaffService) {
	var self = this;
    self.auth = false;
	self.staff={username:'', password:''};
	
	self.submit = function(callBack) {
        if(self.staff.username==''){
            console.log('Error username', self.staff);    
        }else{
            console.log('Username is ', self.staff.username);
            console.log('Password: ', self.staff.password);
            StaffService.logStaff(self.staff).then(
	    		function(data){
	    			var status = data.username == null ? false : true;
	    			callBack(status);
	    		});
            
        }
    };
    
    self.redir = function(status){
    	if (status){
    		window.location.href="/ActorManagement.html";
    		console.log('tu seras être redirigé')
    	}else{
    		console.log('tu ne seras pas redirigé')
    	}
    }
    
    self.reset = function(){
    	self.staff={username:'', password:''};
        $scope.myForm.$setPristine(); //reset Form
    };
}]);