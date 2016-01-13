/**
 * 
 */
App.factory('CountryService', ['$http', '$q', function($http, $q){
	return {
		getContry : function(){
			$http.get('http:/localhost:8080/getCountries/').then(
					function(res){
						console.log('Success du service contry: getContry');
						return res.data;
					},
					function(err){
						console.log('Erreur du service contry: getContry');
						$q.reject(err);
					}
			)
		},
		addCountry : function(contry){
			$http.post('http:/localhost:8080/createCountry/', country).then(
					function(res){
						console.log('Success du service contry: addCountry');
						return res.data;
					},
					function(err){
						console.log('Erreur du service contry: addCountry');
						$q.reject(err);
					}		
			)
		},
		deleteCountry: function(country){
			$http.post('http:/localhost:8080/deleteCountry/', country).then(
					function(res){
						console.log('Success du service contry: deleteCountry');
						return res.data;
					},
					function(err){
						console.log('Erreur du service contry: deleteCountry');
						$q.reject(err);
					}
					
			)		
		}
	}}
]);