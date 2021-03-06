/**
 * 
 */

App.factory('StaffService', ['$http', '$q', function($http, $q){
	return {
		logStaff: function(credentials){
			return $http.post('http://localhost:8080/staff/', credentials).then(
						function(response){
							console.log('Succes du service, logStaff: ');
							return response.data;
						},
						function(err){
							console.log('Erreur du service, logStaff');
							return $q.reject(err);
						}
					);
			}
	}
}]);