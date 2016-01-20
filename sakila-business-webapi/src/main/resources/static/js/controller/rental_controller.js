'use strict';

App.controller('RentalController', ['$scope', 'RentalService', 'FilmService', 'CustomerService', function($scope, RentalService, FilmService, CustomerService) {
	var self = this;
	self.currentRentalName = ''
    self.rental={rentalId:null, rentalDate:'',customerId:'',returnDate:'',staffId:'1', inventoryId:''};
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
			var rent = angular.copy(self.rental);
			rent.rentalDate = rent.rentalDate+" 00:00:00";
			rent.returnDate = rent.returnDate+" 00:00:00";
			self.saveRental(rent);
			
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