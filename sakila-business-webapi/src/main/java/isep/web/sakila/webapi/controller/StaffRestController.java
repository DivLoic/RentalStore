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

import isep.web.sakila.jpa.entities.Staff;
import isep.web.sakila.webapi.model.StaffWO;
import isep.web.sakila.webapi.service.StaffService;

@RestController
public class StaffRestController {

	@Autowired
	StaffService staffService;
	private static final Log log = LogFactory.getLog(StaffRestController.class);

	// -------------------Create a Actor----------------------------------

	@RequestMapping(value = "/staff/", method = RequestMethod.POST)
	public ResponseEntity<Boolean> signInStaff(@RequestBody StaffWO staffWO, UriComponentsBuilder ucBuilder) {
		System.out.println("Sign in staff " + staffWO.getUsername());

		Staff listStaff = staffService.signInStaff2(staffWO.getUsername(), null);
		System.out.println(listStaff.getFirstName());
		// if (listStaff.size() > 0) {
		// return new ResponseEntity<Boolean>(true, HttpStatus.OK);
		// } else {
		// return new ResponseEntity<Boolean>(false, HttpStatus.OK);
		// }

		return new ResponseEntity<Boolean>(false, HttpStatus.OK);

	}

}
