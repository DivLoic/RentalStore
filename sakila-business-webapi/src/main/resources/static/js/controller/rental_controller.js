'use strict';

App.controller('RentalController', ['$scope', 'RentalService', 'CustomerService', function($scope, ActorService, CustomerService) {
	var self = this;
    self.rental={rentalId:null,rentalDate:'',inventoryId:'',customerId:'',returnDate:'',staffId:'',filmId:''};
    self.rentals=[];
    
    
}]);