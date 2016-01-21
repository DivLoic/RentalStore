'use strict';

var App = angular.module('myApp',['ngCookies']);

App.controller('AuthController', ['$scope', '$cookieStore', '$location', function($scope, $cookieStore, $location) {
	var self = this;
	self.id = function(){
		var staff_id_cookie = $cookieStore.get('staff_id');
		console.log($location.absUrl().search(/login.html$/));
		if($location.absUrl().search(/login.html$/) != -1){
			if(staff_id_cookie != 1){
				window.location.href="/Login.html";
			}
		} else {
			if(staff_id_cookie == 1){
				window.location.href="/Home.html";
			}
		}
	}

}]);
