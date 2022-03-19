package com.site.Agencia;


import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.site.Agencia.entities.DestinoUser;
import com.site.Agencia.entities.NovoUser;
import com.site.Agencia.repositories.DestinoUserRepository;
import com.site.Agencia.repositories.NovoUserRepository;


@SpringBootApplication
public class AgenciaApplication implements CommandLineRunner{
	

	@Autowired
	private NovoUserRepository novoUserRepository;
	
	@Autowired
	private DestinoUserRepository destinoUserRepository;
	

	
	public static void main(String[] args) {
		SpringApplication.run(AgenciaApplication.class, args);
	}
	
	@Override
	public void run(String... args) throws Exception {
		
		
		
		NovoUser NewUser = new NovoUser();
		NewUser.setId(null);
		NewUser.setNome("Iago Caldas");
		NewUser.setCpf("1822582845");
		NewUser.setEmail("Iagao@iagao");		
		
		
		DestinoUser destinoUser = new DestinoUser();
		destinoUser.setId(null);
		destinoUser.setPais("1010");
		destinoUser.setCidade("Oswaldo");
		destinoUser.setDataChegada("10");
		destinoUser.setDataSaida("10");
		
		
		
		DestinoUser destinoUser1 = new DestinoUser(null, "2020", "Gisele", "9","9");
		NovoUser NovoUser1 = new NovoUser(null,"iago","iagagao", "uagi");
		
		//destinoUser1.setNovouser(NewUser);
		
		//NewUser.getDestinos().add((DestinoUser) Arrays.asList(destinoUser1,NovoUser1));
		
		novoUserRepository.save(NewUser);
		destinoUserRepository.save(destinoUser);
		
	    destinoUserRepository.save(destinoUser1);
		novoUserRepository.save(NovoUser1);
		
	}

}