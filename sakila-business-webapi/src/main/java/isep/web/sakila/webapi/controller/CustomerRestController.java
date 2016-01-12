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

import isep.web.sakila.webapi.model.CustomerWO;
import isep.web.sakila.webapi.service.CustomerService;

@RestController
public class CustomerRestController {

	@Autowired
	CustomerService cutomerService;
	private static final Log log = LogFactory.getLog(CustomerRestController.class);

	// -------------------Create a Customer----------------------------------

	@RequestMapping(value = "/customer/", method = RequestMethod.POST)
	public ResponseEntity<String> createCustomer(@RequestBody CustomerWO customerWO, UriComponentsBuilder ucBuilder) {
		cutomerService.createCustomer(customerWO);
		// HttpHeaders headers = new HttpHeaders();
		return new ResponseEntity<String>("ddeded", HttpStatus.CREATED);

	}

}
