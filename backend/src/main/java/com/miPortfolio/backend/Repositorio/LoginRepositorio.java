package com.miPortfolio.backend.Repositorio;

import com.miPortfolio.backend.Modelo.Login;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface LoginRepositorio extends JpaRepository<Login, Long>{
public boolean existsByUserAndPwd(String user, String pwd);
    
}
