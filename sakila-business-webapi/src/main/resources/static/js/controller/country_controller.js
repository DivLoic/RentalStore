/**
 * 
 */
App.controller('CountryController', ['$scope', 'CountryService', function($scope, CountryService) {
          var self = this;
          self.country={};
          self.countries=[];
          
          self.fetchAllCountries = function(){
        	  CountryService.fetchAllCountries().then(
        			  function(res){
        				  
        				  console.log('Succes du controller coutry: fetchAllCountries');        				  
        			  },
        			  function(err){
        				  console.log('Erreur du controller Contry: fetchAllCountries');
        			  })
        	  
          }
}]);