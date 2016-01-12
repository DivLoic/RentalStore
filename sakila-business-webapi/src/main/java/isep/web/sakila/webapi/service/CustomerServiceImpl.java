package isep.web.sakila.webapi.service;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import isep.web.sakila.dao.repositories.CityRepository;
import isep.web.sakila.dao.repositories.CustomerRepository;
import isep.web.sakila.dao.repositories.StoreRepository;
import isep.web.sakila.jpa.entities.Address;
import isep.web.sakila.jpa.entities.City;
import isep.web.sakila.jpa.entities.Customer;
import isep.web.sakila.jpa.entities.Store;
import isep.web.sakila.webapi.model.CustomerWO;

@Service("customerService")
@Transactional
public class CustomerServiceImpl implements CustomerService {
	@Autowired
	private CustomerRepository customerService;
	@Autowired
	private StoreRepository storeRepository;
	@Autowired
	private CityRepository cityRepository;

	private static final Log log = LogFactory.getLog(CustomerServiceImpl.class);

	@Override
	public void createCustomer(CustomerWO customerWO) {

		Store store = storeRepository.findOne(customerWO.getStore_id());
		City city = cityRepository.findOne(customerWO.getCity_id());

		Address address = new Address();
		address.setAddress(customerWO.getAddress());
		address.setAddress2(customerWO.getAddress2());
		address.setDistrict(customerWO.getDistrict());
		address.setCity(city);
		address.setPostalCode(customerWO.getPostalCode());
		address.setPhone(customerWO.getPhone());

		Customer customer = new Customer();
		customer.setStore(store);
		customer.setFirstName(customerWO.getFirstName());
		customer.setLastName(customerWO.getLastName());
		customer.setEmail(customerWO.getEmail());
		customer.setAddress(address);
		customer.setActive(customerWO.getActive());
		customer.setCreateDate(customerWO.getCreateDate());

		customerService.save(customer);
	}

}
