package com.miPortfolio.backend.Repositorio;

import com.miPortfolio.backend.Modelo.HabilidadesBlandas;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface HabilidadesBlandasRepositorio extends JpaRepository<HabilidadesBlandas, Long>{

}
