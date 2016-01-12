package isep.web.sakila.webapi.service;

import java.util.List;

import isep.web.sakila.webapi.model.CustomerWO;

public interface CustomerService {

	void createCustomer(CustomerWO customerWO);

	List<CustomerWO> findAllCustomers();

}
