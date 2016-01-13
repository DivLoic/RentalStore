package isep.web.sakila.webapi.service;

import isep.web.sakila.webapi.model.InventoryWO;

public interface InventoryService {

	InventoryWO findById(int id);

	void saveInventory(InventoryWO inventoryWO);

	void deleteInventoryById(int id);

}
