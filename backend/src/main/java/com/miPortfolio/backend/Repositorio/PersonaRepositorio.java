package com.miPortfolio.backend.Repositorio;

import com.miPortfolio.backend.Modelo.Persona;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface PersonaRepositorio extends JpaRepository<Persona, Long>{

}
       

