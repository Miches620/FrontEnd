package com.miPortfolio.backend.Repositorio;

import com.miPortfolio.backend.Modelo.Experiencia;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface ExperienciaRepositorio extends JpaRepository<Experiencia, Long>{

}
