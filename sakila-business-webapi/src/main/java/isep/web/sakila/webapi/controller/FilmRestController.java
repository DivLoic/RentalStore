package isep.web.sakila.webapi.controller;

import java.util.List;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import isep.web.sakila.webapi.model.FilmWO;
import isep.web.sakila.webapi.service.FilmService;

@RestController
public class FilmRestController {

	@Autowired
	FilmService filmService;
	private static final Log log = LogFactory.getLog(FilmRestController.class);

	// -------------------Sign in ----------------------------------

	@RequestMapping(value = "/getFilms/", method = RequestMethod.GET)
	public ResponseEntity<List<FilmWO>> listAllFilms() {
		List<FilmWO> films = filmService.findAllFilm();
		if (films.isEmpty()) {
			return new ResponseEntity<List<FilmWO>>(HttpStatus.NO_CONTENT);
		}
		System.out.println(films.size());
		return new ResponseEntity<List<FilmWO>>(films, HttpStatus.OK);
	}

	@RequestMapping(value = "/film/{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<FilmWO> getFilm(@PathVariable("id") int id) {
		System.out.println("Fetching Film with id " + id);
		FilmWO filmWO = filmService.findById(id);
		if (filmWO == null) {
			System.out.println("Film with id " + id + " not found");
			return new ResponseEntity<FilmWO>(HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<FilmWO>(filmWO, HttpStatus.OK);
	}

	// -------------------Create a Film----------------------------------

	// @RequestMapping(value = "/createFilm/", method = RequestMethod.POST)
	// public ResponseEntity<Void> createActor(@RequestBody FilmWO filmWO,
	// UriComponentsBuilder ucBuilder) {
	// System.out.println("Creating Actor " + filmWO.getTitle());
	// filmService
	//
	//
	// HttpHeaders headers = new HttpHeaders();
	// headers.setLocation(ucBuilder.path("/actor/{id}").buildAndExpand(actorWO.getActorId()).toUri());
	// return new ResponseEntity<Void>(headers, HttpStatus.CREATED);
	// }
	//
	// @RequestMapping(value = "/actorUpdate/", method = RequestMethod.POST)
	// public ResponseEntity<ActorWO> updateActor(@RequestBody ActorWO actorWO,
	// UriComponentsBuilder ucBuilder) {
	// log.error(String.format("Updating Actor %s ", actorWO.getActorId()));
	// ActorWO currentActor = actorService.findById(actorWO.getActorId());
	//
	// if (currentActor == null) {
	// System.out.println("Actor with id " + actorWO.getActorId() + " not
	// found");
	// return new ResponseEntity<ActorWO>(HttpStatus.NOT_FOUND);
	// }
	//
	// currentActor.setLastName(actorWO.getLastName());
	// currentActor.setFirstName(actorWO.getFirstName());
	// actorService.updateActor(currentActor);
	//
	// return new ResponseEntity<ActorWO>(currentActor, HttpStatus.OK);
	// }
	//
	// @RequestMapping(value = "/actorDelete/{id}", method = RequestMethod.GET)
	// public ResponseEntity<ActorWO> deleteActor(@PathVariable("id") int id) {
	//
	// System.out.println("Fetching & Deleting Actor with id " + id);
	//
	// ActorWO staffWO = actorService.findById(id);
	// if (staffWO == null) {
	// System.out.println("Unable to delete. Actor with id " + id + " not
	// found");
	// return new ResponseEntity<ActorWO>(HttpStatus.NOT_FOUND);
	// }
	//
	// actorService.deleteActorById(id);
	// return new ResponseEntity<ActorWO>(HttpStatus.NO_CONTENT);
	// }

}
