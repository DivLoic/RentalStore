package isep.web.sakila.dao.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import isep.web.sakila.jpa.entities.Customer;

public interface CustomerRepository extends JpaRepository<Customer, Integer> {

}
