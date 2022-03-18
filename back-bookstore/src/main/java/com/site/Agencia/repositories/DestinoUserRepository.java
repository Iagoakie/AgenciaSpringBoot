package com.site.Agencia.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import com.site.Agencia.entities.DestinoUser;



@Repository
public interface DestinoUserRepository extends JpaRepository<DestinoUser, Long>{

}
