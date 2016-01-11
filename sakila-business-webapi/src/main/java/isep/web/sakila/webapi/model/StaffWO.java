package isep.web.sakila.webapi.model;

import isep.web.sakila.jpa.entities.Staff;

public class StaffWO extends WebObject {

	private static final long serialVersionUID = -1377067679473844279L;

	protected String username;
	protected String password;

	public StaffWO() {
		super();
	}

	public StaffWO(String username, String password) {
		super();
		this.username = username;
		this.password = password;
	}

	public StaffWO(final Staff staff) {
		super();
		this.username = staff.getUsername();
		this.password = staff.getPassword();
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Override
	public String toString() {
		return "Staff [username=" + this.username + ", Password=" + this.password + "]";
	}

}
