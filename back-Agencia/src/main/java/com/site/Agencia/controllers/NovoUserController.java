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

import com.site.Agencia.entities.NovoUser;
import com.site.Agencia.repositories.NovoUserRepository;

@Service
@CrossOrigin(origins = "*")
@RestController
@RequestMapping(value = "/NovoUser")
public class NovoUserController {
	
	@Autowired
	private NovoUserRepository novoUserRepository;
	
	//GET
	@GetMapping
	public ResponseEntity<List<NovoUser>> findAll() {
		
		List<NovoUser> users = novoUserRepository.findAll();
		return ResponseEntity.ok().body(users);
	}
	
	//GET by ID
	@GetMapping(value = "/{id}")
	public ResponseEntity<NovoUser> findById(@PathVariable Long id) {
		
		NovoUser users = novoUserRepository.findById(id).get();
		return ResponseEntity.ok().body(users);
	}
	
	//CREATE
	@PostMapping
	public NovoUser create(@RequestBody NovoUser user) {
		return novoUserRepository.save(user);
	}
		
	//UPDATE
		@PutMapping("{id}")
		public ResponseEntity<NovoUser> update(@PathVariable Long id, @RequestBody NovoUser destinoDetails) {
			NovoUser updatenovouser = novoUserRepository.findById(id).get();
			
			updatenovouser.setNome(destinoDetails.getNome());
			updatenovouser.setCpf(destinoDetails.getCpf());
			updatenovouser.setEmail(destinoDetails.getEmail());

			novoUserRepository.save(updatenovouser);
			
			return ResponseEntity.ok().body(updatenovouser);
		}
	
	//DELETE
	@DeleteMapping("{id}")
	public ResponseEntity<HttpStatus> delete(@PathVariable Long id) {

		NovoUser novouser = novoUserRepository.findById(id).get();

		novoUserRepository.delete(novouser);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);

    }
}
