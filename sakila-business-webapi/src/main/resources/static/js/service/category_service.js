'use strict';

App.factory('CategoryService', ['$http', '$q', function($http, $q){

	return {

		fetchAllCategories: function() {
			console.log("fetchAllCategories service");
			return $http.get('http://localhost:8080/getCategories/')
			.then(
					function(response){
						return response.data;
					}, 
					function(errResponse){
						console.error('Error while fetching category');
						return $q.reject(errResponse);
					}
			);
		},

		createCategory: function(category){
			return $http.post('http://localhost:8080/createCategory/', category)
			.then(
					function(response){
						return response.data;
					}, 
					function(errResponse){
						console.error('Error while creating category');
						return $q.reject(errResponse);
					}
			);
		},

		updateCategory: function(category, categoryId){
			return $http.post('http://localhost:8080/updateCategory/', category)
			.then(
					function(response){
						return response.data;
					}, 
					function(errResponse){
						console.error('Error while updating category');
						return $q.reject(errResponse);
					}
			);
		},

		deleteCategory: function(categoryId){
			return $http.get('http://localhost:8080/deleteCategory/'+categoryId)
			.then(
					function(response){
						return response.data;
					}, 
					function(errResponse){
						console.error('Error while deleting category');
						return $q.reject(errResponse);
					}
			);
		}

	};

}]);

