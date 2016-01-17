package isep.web.sakila.webapi.service;

import java.text.ParseException;
import java.util.List;

import isep.web.sakila.webapi.model.RentalWO;

public interface RentalService {

	RentalWO findById(int id);

	void saveRental(RentalWO rentalWO) throws ParseException;

	void deleteRentalById(int id);

	List<RentalWO> findAllRentals();

}
