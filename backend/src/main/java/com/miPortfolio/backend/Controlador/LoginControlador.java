package com.miPortfolio.backend.Controlador;

import com.miPortfolio.backend.Modelo.Login;
import com.miPortfolio.backend.Servicio.LoginServicio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins ={"https://argentinaprograma-frontend.web.app"})
public class LoginControlador {
    @Autowired
LoginServicio loginServ;

@PostMapping("/login")
@ResponseBody
public boolean iniciarSesion(@RequestBody Login log){
    return loginServ.iniciarSesion(log);
}

@PostMapping("/crearLogin")
public void crear(@RequestBody Login login){
    loginServ.crear(login);
}
}
