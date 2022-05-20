package com.miPortfolio.backend.Repositorio;

import com.miPortfolio.backend.Modelo.Educacion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface EducacionRepositorio extends JpaRepository<Educacion, Long>{

}
