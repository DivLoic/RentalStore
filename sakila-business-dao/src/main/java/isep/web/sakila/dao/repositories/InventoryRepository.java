package isep.web.sakila.dao.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import isep.web.sakila.jpa.entities.Film;
import isep.web.sakila.jpa.entities.Inventory;

public interface InventoryRepository extends JpaRepository<Inventory, Integer> {

	@Query("select i from Inventory i where i.film = ?1")
	List<Inventory> findAllInventoriesByIdFilm(Film film);
}
