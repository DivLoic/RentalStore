package isep.web.sakila.webapi.model;

public class CountryWO extends WebObject {

	protected int countryId;
	protected String country;

	public CountryWO() {
		super();
		// TODO Auto-generated constructor stub
	}

	public CountryWO(int countryId, String country) {
		super();
		this.countryId = countryId;
		this.country = country;
	}

	public int getCountryId() {
		return countryId;
	}

	public void setCountryId(int countryId) {
		this.countryId = countryId;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

}
