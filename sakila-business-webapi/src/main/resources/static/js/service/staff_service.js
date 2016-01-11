/**
 * 
 */

App.factory('StaffService', ['$http', '$q', function($http, $q){
	return {
		logStaff: function(credentials){
			return $http({
					method:'POST',
					url: 'http://localhost:8080/staff',
					header: {'Content-Type': 'application/json'},
					data: credentials}).then(
						function(reponse){
							console.log('Succes du service, logStaff: ' + err);
							return reponse;
						},
						function(err){
							console.log('Erreur du service, logStaff: ' + err);
							return err;
						}
					);
			}
	}
}]);