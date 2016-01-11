package isep.web.sakila.webapi.service;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import isep.web.sakila.dao.repositories.StaffRepository;
import isep.web.sakila.jpa.entities.Staff;

@Service("staffService")
@Transactional
public class StaffServiceImpl implements StaffService {
	@Autowired
	private StaffRepository staffRepository;

	private static final Log log = LogFactory.getLog(StaffServiceImpl.class);

	// @Override
	// public Staff findById(int id) {
	// log.debug(String.format("Looking for user by Id %s", id));
	// Staff staff = staffRepository.findOne(id);
	// return staff;
	// }

	// @Override
	// public List<Staff> signInStaff(String username, String password) {
	// return staffRepository.findByUsername(username);
	// }

	@Override
	public Staff signInStaff2(String username, String password) {
		return staffRepository.findByUsernameByPassword(username, password);
	}

}
