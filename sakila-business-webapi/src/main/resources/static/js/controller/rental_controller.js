'use strict';

App.controller('RentalController', ['$scope', 'RentalService', 'FilmService', 'CustomerService', function($scope, RentalService, FilmService, CustomerService) {
	var self = this;
    self.rental={rentalId:null,rentalDate:'',customerId:'',returnDate:'',staffId:'',filmId:''};
    self.rentals=[];
    
    self.customer={customerId:null,firstName:'',lastName:'',email:'',phone:'',
			address:'',address2:'',district:'',cityId:'',postalCode:'',active:null};
	self.customers=[];
	

}]);