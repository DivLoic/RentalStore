package isep.web.sakila.webapi.service;

import java.sql.Timestamp;
import java.util.LinkedList;
import java.util.List;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import isep.web.sakila.dao.repositories.FilmRepository;
import isep.web.sakila.dao.repositories.LanguageRepository;
import isep.web.sakila.jpa.entities.Film;
import isep.web.sakila.jpa.entities.Language;
import isep.web.sakila.webapi.model.FilmWO;

@Service("filmService")
@Transactional
public class FilmServiceImpl implements FilmService {
	@Autowired
	private FilmRepository filmRepository;
	@Autowired
	private LanguageRepository languageRepository;

	private static final Log log = LogFactory.getLog(FilmServiceImpl.class);

	@Override
	public List<FilmWO> findAllFilm() {
		List<FilmWO> films = new LinkedList<FilmWO>();

		for (Film film : filmRepository.findAll()) {
			films.add(new FilmWO(film));
			System.out.println("Adding " + film.getTitle());
		}

		return films;
	}

	@Override
	public FilmWO findById(int id) {
		log.debug(String.format("Looking for film by Id %s", id));
		Film film = filmRepository.findOne(id);

		if (film != null) {
			return new FilmWO(film);
		}
		return null;
	}

	@Override
	public void saveFilm(FilmWO filmWO) {
		Film film = new Film();
		film.setTitle(filmWO.getTitle());
		film.setDescription(filmWO.getDescription());
		film.setReleaseYear(filmWO.getReleaseYear());

		Language language1 = languageRepository.findOne(filmWO.getLanguage_id_1());
		film.setLanguage1(language1);
		film.setRentalDuration(filmWO.getRentalDuration());
		film.setRentalRate(filmWO.getRentalRate());
		film.setLength(filmWO.getLength());
		film.setReplacementCost(filmWO.getReplacementCost());
		film.setRating(filmWO.getRating());
		film.setSpecialFeatures(filmWO.getSpecialFeatures());
		film.setLastUpdate(new Timestamp(System.currentTimeMillis()));

		filmRepository.save(film);
	}

	@Override
	public void updateFilm(FilmWO filmWO) {
		Film film = filmRepository.findOne(filmWO.getFilmId());
		film.setTitle(filmWO.getTitle());
		film.setDescription(filmWO.getDescription());
		film.setReleaseYear(filmWO.getReleaseYear());

		Language language1 = languageRepository.findOne(filmWO.getLanguage_id_1());
		film.setLanguage1(language1);
		film.setRentalDuration(filmWO.getRentalDuration());
		film.setRentalRate(filmWO.getRentalRate());
		film.setLength(filmWO.getLength());
		film.setReplacementCost(filmWO.getReplacementCost());
		film.setRating(filmWO.getRating());
		film.setSpecialFeatures(filmWO.getSpecialFeatures());
		film.setLastUpdate(new Timestamp(System.currentTimeMillis()));
		filmRepository.save(film);
	}

	@Override
	public void deleteFilmById(int id) {
		filmRepository.delete(id);
	}

}