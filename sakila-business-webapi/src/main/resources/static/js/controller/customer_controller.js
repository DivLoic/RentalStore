'use strict';

App.controller('CustomerController', ['$scope', 'CustomerService', function($scope, CustomerService) {
	var self = this;
	
	self.customer={customerId:null,store_id:'1',firstName:'',lastName:'',email:'',phone:'',
			addressId:null ,address:'',address2:'',district:'',city_id:'', postalCode:'',active:null};
	self.customers=[];
	
	self.fetchAllCustomers = function(){
		CustomerService.getCustomer().then(
			       function(d) {
					        self.customers = d;
					        console.log('success to retrieve all customers');
				       },
					function(errResponse){
						console.error('Error while fetching Currencies');
					}
		       );
	};
	
	self.createCustomer = function(customer){
		CustomerService.createCustomer(customer).then(
				self.fetchAllCustomers, function(errResponse){
					console.error('Error while creating Customer.');
				});
	};

   self.updateCustomer = function(customer){
	   console.log("update customer");
        CustomerService.updateCustomer(customer)
        .then(
                self.fetchAllCustomers, 
			              function(errResponse){
				               console.error('Error while updating Customer.');
			              }	
            );
    };
    
    self.submit = function() {
        if(self.customer.customerId==null){
            console.log('Saving New Customer', self.customer); 
            /*var newCustomer = {customerId:"600",store_id:"1",firstName:"aze",lastName:"AZE",email:"a@a.com",phone:"0123456789",
        			addressId:"1" ,address:"rue lafayette",address2:"rue lafayette2",district:"Paris",city_id:"1", postalCode:"75001",active:"1"};
            self.createCustomer(newCustomer);*/
            self.createCustomer(self.customer);
        }else{
            console.log('Customer updating with id ', self.customer.customerId);
            console.log('Customer: ', self.customer);
            self.updateCustomer(self.customer);
        }
        self.reset();
    };
    
    self.edit = function(customerId,addressId){
        console.log('customer id to be edited', customerId);
        console.log('address id to be edited', addressId);
        for(var i = 0; i < self.customers.length; i++){
            if(self.customers[i].customerId == customerId) {
            	if (self.customers[i].addressId == addressId){
            		self.customer = angular.copy(self.customers[i]);
            		console.log(self.customer);
                    break;
            	}
            }
        }
    };
    
    self.fetchAllCustomers();
	
	self.reset = function(){
		self.customer={customerId:null,store_id:'1',firstName:'',lastName:'',email:'',phone:'',
				addressId:null ,address:'',address2:'',district:'',city_id:'', postalCode:'',active:null};
        $scope.myForm.$setPristine(); //reset Form
    };
    
}]);