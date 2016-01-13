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
					        console.log('success to retieve all customers');
				       },
					function(errResponse){
						console.error('Error while fetching Currencies');
					}
		       );
	};
	
	self.fetchAllCustomers();
	
	self.createCustomer = function(customer){
		CustomerService.createCustomer(customer).then(
				self.fetchAllCustomers, function(errResponse){
					console.error('Error while creating Customer.');
				});
	};

   self.updateCustomer = function(customer){
        CustomerService.updateCustomer(customer)
        .then(
                self.fetchAllCustomers, 
			              function(errResponse){
				               console.error('Error while updating Customer.');
			              }	
            );
    };
	
	self.reset = function(){
        self.actor={actorId:null,lastName:'',firstName:''};
        $scope.myForm.$setPristine(); //reset Form
    };
    
}]);