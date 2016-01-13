'use strict';

App.controller('CustomerController', ['$scope', 'CustomerService', 'CityService', function($scope, CustomerService, CityService) {
	var self = this;
	
	self.customer={customerId:null,firstName:'',lastName:'',email:'',phone:'',
			address:'',address2:'',district:'',cityId:'',postalCode:'',active:null};
	self.customers=[];
	
	self.city = {cityId : null, cityName : '', countryId : null};
	self.cities = [];
	
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
	
	self.fetchAllCities = function() {
		CityService.fetchAllCities().then(function(d) {
			self.cities = d;
			console.log('success to retrieve all cities.');
		}, function(errResponse) {
			console.error('Error while fetching Currencies');
		});
	};
	
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
    
    self.submit = function() {
        if(self.customer.customerId==null){
            console.log('Saving New Customer', self.customer);    
            self.createCustomer(self.customer);
        }else{
            console.log('Customer updating with id ', self.customer.customerId);
            console.log('Customer: ', self.customer);
            self.updateCustomer(self.customer);
        }
        self.reset();
    };
    
    self.edit = function(customerId){
        console.log('id to be edited', customerId);
        for(var i = 0; i < self.customers.length; i++){
            if(self.customers[i].customerId == customerId) {
               self.customer = angular.copy(self.customers[i]);
               break;
            }
        }
    };
    
    self.fetchAllCustomers();
    self.fetchAllCities();
	
	self.reset = function(){
        self.actor={actorId:null,lastName:'',firstName:''};
        $scope.myForm.$setPristine(); //reset Form
    };
    
}]);