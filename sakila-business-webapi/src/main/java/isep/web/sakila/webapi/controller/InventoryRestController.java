package isep.web.sakila.webapi.controller;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

import isep.web.sakila.webapi.model.InventoryWO;
import isep.web.sakila.webapi.service.InventoryService;

@RestController
public class InventoryRestController {

	@Autowired
	InventoryService inventoryService;
	private static final Log log = LogFactory.getLog(InventoryRestController.class);

	// -------------------Sign in ----------------------------------

	@RequestMapping(value = "/inventory/{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<InventoryWO> getInventory(@PathVariable("id") int id) {
		System.out.println("Fetching City with id " + id);
		InventoryWO inventoryWO = inventoryService.findById(id);
		if (inventoryWO == null) {
			System.out.println("Inventory with id " + id + " not found");
			return new ResponseEntity<InventoryWO>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<InventoryWO>(inventoryWO, HttpStatus.OK);
	}

	// ---------------------------------------------------------------------------------------------

	@RequestMapping(value = "/createInventory/", method = RequestMethod.POST)
	public ResponseEntity<Void> createInventory(@RequestBody InventoryWO inventoryWO, UriComponentsBuilder ucBuilder) {
		System.out.println("Creating City " + inventoryWO.getInventoryId());
		inventoryService.saveInventory(inventoryWO);
		HttpHeaders headers = new HttpHeaders();
		headers.setLocation(ucBuilder.path("/inventory/{id}").buildAndExpand(inventoryWO.getInventoryId()).toUri());
		return new ResponseEntity<Void>(headers, HttpStatus.CREATED);
	}

	@RequestMapping(value = "/deleteInventory/{id}", method = RequestMethod.GET)
	public ResponseEntity<InventoryWO> deleteInventory(@PathVariable("id") int id) {

		System.out.println("Fetching & Deleting City with id " + id);

		InventoryWO inventoryCity = inventoryService.findById(id);
		if (inventoryCity == null) {
			System.out.println("Unable to delete. City with id " + id + " not found");
			return new ResponseEntity<InventoryWO>(HttpStatus.NOT_FOUND);
		}
		inventoryService.deleteInventoryById(id);
		return new ResponseEntity<InventoryWO>(HttpStatus.NO_CONTENT);
	}

}
