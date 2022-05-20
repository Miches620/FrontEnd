package com.miPortfolio.backend.Repositorio;

import com.miPortfolio.backend.Modelo.HabilidadesDuras;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface HabilidadesDurasRepositorio extends JpaRepository<HabilidadesDuras, Long>{

}
