package com.miPortfolio.backend.Repositorio;

import com.miPortfolio.backend.Modelo.Proyectos;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface ProyectosRepositorio extends JpaRepository<Proyectos, Long>{

}
