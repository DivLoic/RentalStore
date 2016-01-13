'use strict';

App.controller('CustomerController', ['$scope', 'CustomerService', function($scope, CustomerService) {
	var self = this;
	self.customer={customerId:null,firstName:'',lastName:'',email:'',phone:'',
			address:'',address2:'',district:'',cityId:'',postalCode:'',active:null};
	self.customers=[];
	
	self.createCustomer = function(customer){
		CustomerService.createCustomer(customer).then(
				)
	}
	
	self.reset = function(){
        self.actor={actorId:null,lastName:'',firstName:''};
        $scope.myForm.$setPristine(); //reset Form
    };
    
}]);