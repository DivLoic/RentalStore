package isep.web.sakila.webapi.service;

import java.util.LinkedList;
import java.util.List;

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
	public List<CustomerWO> findAllCustomers() {
		System.out.println("CustomerService - findAllCustomers");

		// List<Customer> listCusto = (List<Customer>)
		// customerService.findAll();
		// System.out.println(listCusto.size());

		List<CustomerWO> customers = new LinkedList<CustomerWO>();

		for (Customer cust : customerService.findAll()) {
			System.out.println(cust.getEmail());
			customers.add(new CustomerWO(cust));
			log.debug("Adding " + cust);
		}

		return customers;
	}

	@Override
	public void createCustomer(CustomerWO customerWO) {

		System.out.println("create cust store_id " + customerWO.getStore_id());
		Store store = storeRepository.findOne(new Byte("1"));
		//
		// if (store != null) {
		// System.out.println("test");
		// } else {
		// System.out.println("test 2");
		// }
		// System.out.println("store manager staff id : " +
		// store.getLastUpdate());

		City city = cityRepository.findOne(customerWO.getCity_id());

		Address address = new Address();
		address.setAddress(customerWO.getAddress());
		address.setAddress2(customerWO.getAddress2());
		address.setDistrict(customerWO.getDistrict());
		address.setCity(city);
		address.setPostalCode(customerWO.getPostalCode());
		address.setPhone(customerWO.getPhone());

		// Customer customer = new Customer();
		// customer.setStore(store);
		// customer.setFirstName(customerWO.getFirstName());
		// customer.setLastName(customerWO.getLastName());
		// customer.setEmail(customerWO.getEmail());
		// customer.setAddress(address);
		// customer.setActive(customerWO.getActive());
		// customer.setCreateDate(customerWO.getCreateDate());
		//
		// customerService.save(customer);
	}

}
