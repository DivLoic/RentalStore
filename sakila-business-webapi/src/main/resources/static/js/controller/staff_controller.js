'use strict';

App.controller('StaffController', ['$scope', 'StaffService', function($scope, StaffService) {
	var self = this;
	self.staff={pseudo:'', password:''};
	
	self.submit = function() {
        if(self.staff.pseudo==''){
            console.log('Error pseudo', self.staff);    
        }else{
            console.log('Pseudo is ', self.staff.pseudo);
            console.log('Password: ', self.staff.password);
            StaffService.logStaff(self.staff);
        }
        self.reset();
    };
    
    self.reset = function(){
        self.actor={actorId:null,lastName:'',firstName:''};
        $scope.myForm.$setPristine(); //reset Form
    };
}]);