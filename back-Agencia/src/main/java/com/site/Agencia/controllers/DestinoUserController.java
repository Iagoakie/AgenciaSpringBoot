package com.site.Agencia.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.site.Agencia.entities.DestinoUser;
import com.site.Agencia.repositories.DestinoUserRepository;


@Service
@CrossOrigin(origins = "*")
@RestController
@RequestMapping(value = "/DestinoUser")
public class DestinoUserController {
	
	@Autowired (required=true)
	private DestinoUserRepository destinoUserRepository;
	
	//GET
	@GetMapping
	public ResponseEntity<List<DestinoUser>> findAll() {
		
		List<DestinoUser> destinos = destinoUserRepository.findAll();
		return ResponseEntity.ok().body(destinos);
	}
	
	//GET by ID
	@GetMapping(value = "/{id}")
	public ResponseEntity<DestinoUser> findById(@PathVariable Long id) {
		
		DestinoUser destinos = destinoUserRepository.findById(id).get();
		return ResponseEntity.ok().body(destinos);
	}
	
	//CREATE
	@PostMapping
	public DestinoUser create(@RequestBody DestinoUser destino) {
		return destinoUserRepository.save(destino);
	}
		
	//UPDATE
		@PutMapping("{id}")
		public ResponseEntity<DestinoUser> update(@PathVariable Long id, @RequestBody DestinoUser destinoDetails) {
			DestinoUser updatedestino = destinoUserRepository.findById(id).get();
			
			updatedestino.setPais(destinoDetails.getPais());
			updatedestino.setCidade(destinoDetails.getCidade());
			updatedestino.setDataChegada(destinoDetails.getDataChegada());
			updatedestino.setDataSaida(destinoDetails.getDataSaida());

			destinoUserRepository.save(updatedestino);
			
			return ResponseEntity.ok(updatedestino);
		}
	
	//DELETE
	@DeleteMapping("{id}")
	public ResponseEntity<HttpStatus> delete(@PathVariable Long id) {

		DestinoUser destino = destinoUserRepository.findById(id).get();

		destinoUserRepository.delete(destino);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);

    }
}
