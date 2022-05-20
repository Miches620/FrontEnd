package com.miPortfolio.backend.Controlador;

import com.miPortfolio.backend.Modelo.Proyectos;
import com.miPortfolio.backend.Servicio.ProyectosServicio;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ProyectosControlador {
    
@Autowired
ProyectosServicio proyectosServ;
  
@GetMapping("/proyectos")
@ResponseBody
public List<Proyectos> mostrarProyectos(){
    
    return proyectosServ.mostrarProyectos();
}

@PostMapping("/proyectos")
public void crearProyectos(@RequestBody Proyectos proyectos){
    proyectosServ.crearProyectos(proyectos);
}

@DeleteMapping("/proyectos/{id}")
public void borrarProyectos(@PathVariable Long id){
    proyectosServ.borrarProyectos(id);
}
}


