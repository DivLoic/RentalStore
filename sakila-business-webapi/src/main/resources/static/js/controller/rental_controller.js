'use strict';

App.controller('RentalController', ['$scope', 'RentalService', 'FilmService', 'CustomerService', function($scope, RentalService, FilmService, CustomerService) {
	var self = this;
	self.currentRentalName = ''
    self.rental={rentalId:null, rentalDate:'',customerId:'',returnDate:'',staffId:'', inventoryId:''};
    self.rentals=[];
    
    self.customer={customerId:null,firstName:'',lastName:'',email:'',phone:'',
			address:'',address2:'',district:'',cityId:'',postalCode:'',active:null};
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
			console.log("-----------> " + self.rental.rentalDate);
			console.log("-----------> " + self.rental.returnDate);
			console.log("-----------> " + self.rental.inventoryId);
			console.log("-----------> " + self.rental.customerId);
			self.saveRental(self.rental);
		}
	};
	
	/**
	 * RentalService.createRental(self.rental).then(
			function(res){
				
			},
			function(err){
				console.log("Err dans l'enregistrement de la location");
			}
		)
	 */
	
}]);