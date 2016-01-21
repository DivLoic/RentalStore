'use strict';

App.controller('RentalController', ['$scope', 'RentalService', 'FilmService',  function($scope, RentalService, FilmService) {
	var self = this;
	self.currentRentalName = ''
    self.rental={rentalId:null, rentalDate:'',customerId:'',returnDate:'',staffId:'1', inventoryId:''};
    self.customer={customerId:null,firstName:'',lastName:'',email:'',phone:'',
			address:'',address2:'',district:'',cityId:'',postalCode:'',active:null};
    self.rentals=[];
    self.customers=[];
	
	self.loadRental = function(filmId, filmName){
		self.rental['inventoryId'] = filmId;
		self.currentRentalName = filmName;
	}
	
	self.saveRental = function(rental){
		RentalService.createRental(rental)
		.then(
				function(){},
				function(errResponse){
					console.error('Error while recording Rental.');
				}	
			);	
	};
	
	self.submit = function(){
		if(self.rental.inventoryId != null){
			var rent = angular.copy(self.rental);
			if(rent.rentalDate.length > 5){
				rent.rentalDate = rent.rentalDate+" 00:00:00"
			} else {
				rent.rentalDate = null;
			}
			if(rent.returnDate.length > 5){
				rent.returnDate = rent.returnDate+" 00:00:00"
			} else {
				rent.returnDate = null;
			}
			self.saveRental(rent);	
		}
	};
	
}]);
