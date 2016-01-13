package isep.web.sakila.webapi.controller;

import java.util.List;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import isep.web.sakila.webapi.model.CityWO;
import isep.web.sakila.webapi.service.CityService;

@RestController
public class CityRestController {

	@Autowired
	CityService cityService;
	private static final Log log = LogFactory.getLog(CityRestController.class);

	// -------------------Sign in ----------------------------------

	@RequestMapping(value = "/getcities/", method = RequestMethod.GET)
	public ResponseEntity<List<CityWO>> listAllActors() {
		List<CityWO> cities = cityService.findAllCity();
		if (cities.isEmpty()) {
			System.out.println("vide");
			return new ResponseEntity<List<CityWO>>(HttpStatus.NO_CONTENT);
		}
		System.out.println(cities.size());
		return new ResponseEntity<List<CityWO>>(cities, HttpStatus.OK);
	}

}
