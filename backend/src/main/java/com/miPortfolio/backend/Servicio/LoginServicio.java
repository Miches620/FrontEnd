package com.miPortfolio.backend.Servicio;

import com.miPortfolio.backend.Modelo.Login;
import com.miPortfolio.backend.Repositorio.LoginRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
@Service
public class LoginServicio {
@Autowired
    LoginRepositorio loginRepo;
    public boolean iniciarSesion(Login log) {
        return loginRepo.existsByUserAndPwd(log.getUser(), log.getPwd());
    }
    
    public void crear(Login login)
    {
        loginRepo.save(login);
    }
    
}
