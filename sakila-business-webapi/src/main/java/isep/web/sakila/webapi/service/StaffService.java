package isep.web.sakila.webapi.service;

import isep.web.sakila.jpa.entities.Staff;

public interface StaffService {
	// Staff findById(int id);

	// List<Staff> signInStaff(String username, String password);

	Staff signInStaff2(String username, String password);

}
