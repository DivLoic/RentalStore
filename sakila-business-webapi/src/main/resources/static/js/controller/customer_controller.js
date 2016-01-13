'use strict';

App.controller('CustomerController', ['$scope', 'CustomerService', function($scope, CustomerService) {
	var self = this;
	self.customer={customerId:null,firstName:'',lastName:'',email:'',phone:'',
			address:'',address2:'',district:'',cityId:'',postalCode:'',active:null};
	self.customers=[];
	
	self.fetchAllCustomers = function(){
		CustomerService.getCustomer().then(
			       function(d) {
					        self.customers = d;
				       },
					function(errResponse){
						console.error('Error while fetching Currencies');
					}
		       );
	};
	
	self.createCustomer = function(customer){
		CustomerService.createCustomer(customer);
	};
	
	self.reset = function(){
        self.actor={actorId:null,lastName:'',firstName:''};
        $scope.myForm.$setPristine(); //reset Form
    };
    
}]);