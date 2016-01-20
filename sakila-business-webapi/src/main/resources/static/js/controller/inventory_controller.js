/**
 * 
 */

App.controller('InventoryController', ['$scope', 'InventoryService', function($scope, InventoryService) {
	var self = this;
	var inventory = {
		inventory_id: '',
		film_id: '',
		store_id: '',
		last_update:''
	};
	var inventories = [];
	
	self.fetchAllInventories = function(){
		InventoryService.getInventories().then(
			function(res){
				self.inventories = res;
			},
			function(err){
				console.log("Error: controller failed to get the inventories");
			}
		);
	}
	
	self.createInventory = function(actor){
		InventoryService.createInventory(actor).then(
				self.fetchAllInventories,
				function(err){
					console.log("Error: controlle failed to greate a inventory");
				}
		)
		
	};
	
	self.updateInventory = function(actor){
		InventoryService.updateInventory(actor).then(
				self.fetchAllInventories,
				function(err){
					console.log("Error: controller failed to update a inventory");
				}
		)
	};
	
	self.deleteInventory = function(actorId){
		InventoryService.deteleInventory(actorId).then(
				self.fetchAllInventories,
				function(err){
					console.log("Error: controller failed to deleted a inventory");
				}
		)
	};
	
	self.fetchAllInventories();
	
}]);