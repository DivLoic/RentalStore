package isep.web.sakila.webapi.controller;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

import com.fasterxml.jackson.annotation.JsonFormat;

import isep.web.sakila.webapi.model.CustomerWO;
import isep.web.sakila.webapi.service.CustomerService;
import isep.web.sakila.webapi.service.StoreService;

@RestController
public class CustomerRestController {

	@Autowired
	CustomerService cutomerService;

	@Autowired
	StoreService storeService;
	private static final Log log = LogFactory.getLog(CustomerRestController.class);

	// -------------------Create a Customer----------------------------------

	@JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
	@RequestMapping(value = "/customer/", method = RequestMethod.POST)
	public ResponseEntity<String> createCustomer(@RequestBody CustomerWO customerWO, UriComponentsBuilder ucBuilder) {
		cutomerService.createCustomer(customerWO);
		// HttpHeaders headers = new HttpHeaders();
		return new ResponseEntity<String>("ddeded", HttpStatus.CREATED);

	}

	@RequestMapping(value = "/customers/", method = RequestMethod.GET)
	public ResponseEntity<String> listAllCustomers() {
		// List<StoreWO> list = storeService.findAllStores();
		// List<CustomerWO> customers = cutomerService.findAllCustomers();
		// if (customers.isEmpty()) {
		// return new ResponseEntity<List<CustomerWO>>(HttpStatus.NO_CONTENT);
		// }
		return new ResponseEntity<String>("ttt", HttpStatus.OK);
	}

}
