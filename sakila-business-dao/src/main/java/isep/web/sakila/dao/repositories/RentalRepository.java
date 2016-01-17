package isep.web.sakila.dao.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import isep.web.sakila.jpa.entities.Rental;

public interface RentalRepository extends JpaRepository<Rental, Integer> {

}
