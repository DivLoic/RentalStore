package isep.web.sakila.webapi.service;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import isep.web.sakila.dao.repositories.FilmRepository;
import isep.web.sakila.dao.repositories.InventoryRepository;
import isep.web.sakila.dao.repositories.StoreRepository;
import isep.web.sakila.jpa.entities.Film;
import isep.web.sakila.jpa.entities.Inventory;
import isep.web.sakila.jpa.entities.Store;
import isep.web.sakila.webapi.model.InventoryWO;

@Service("inventoryService")
@Transactional
public class InventoryServiceImpl implements InventoryService {
	@Autowired
	private InventoryRepository inventoryRepository;
	@Autowired
	private FilmRepository filmRepository;
	@Autowired
	private StoreRepository storeRepository;

	private static final Log log = LogFactory.getLog(InventoryServiceImpl.class);

	@Override
	public InventoryWO findById(int id) {
		log.debug(String.format("Looking for inventory by Id %s", id));
		Inventory inventory = inventoryRepository.findOne(id);

		if (inventory != null) {
			return new InventoryWO(inventory);
		}
		return null;
	}

	@Override
	public void saveInventory(InventoryWO inventoryWO) {
		Inventory inventory = new Inventory();

		Film film = filmRepository.findOne(inventoryWO.getFilmId());
		Store store = storeRepository.findOne(inventoryWO.getStoreId());

		inventory.setFilm(film);
		inventory.setStore(store);

		inventoryRepository.save(inventory);
	}

	@Override
	public void deleteInventoryById(int id) {
		filmRepository.delete(id);
	}

}